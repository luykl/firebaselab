import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { getClient } from '../db';
import ShoutOut from '../model/ShoutOut';
import { ObjectId } from "mongodb";

// creates an Express application - allows us to create and and use APIs
const app = express();

// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());

// Allow JSON request bodies for PUT and POST
app.use(express.json());


app.get("/hello", async (req, res) => {
  res.send("Hello World!");
})


  

app.get("/", async (req, res) => {

  const recipient = req.query.to;
  const mongoQuery: any = {};
  if (recipient) {
    mongoQuery.to = recipient;
  }

    try {
      const client = await getClient();
      const results = await client.db().collection<ShoutOut>('shoutOuts').find(mongoQuery).toArray();
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

app.put("/:id/:user", async (req, res) => {
    const id:string = req.params.id as string;
    const user:string = req.params.user as string;
    try {
      const client = await getClient();
      const results = await client.db().collection<ShoutOut>('shoutOuts').updateOne({_id: new ObjectId(id)}, {$push: {likes: user}});
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });


  app.post("/", async (req, res) => {
    const shoutOut = req.body as ShoutOut;
    try {
      const client = await getClient();
      const result = await client.db().collection<ShoutOut>('shoutOuts').insertOne(shoutOut);
      shoutOut._id = result.insertedId;
      res.status(201).json(shoutOut);
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });


  


export default functions.https.onRequest(app);