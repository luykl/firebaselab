import axios from "axios";
import ShoutOut from "../model/ShoutOut";

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function readAllShoutOuts():Promise<ShoutOut[]> {
  return axios.get(baseUrl).then(res => res.data);
}

export function createShoutOut(shoutOut: ShoutOut):Promise<ShoutOut> {
  return axios.post(baseUrl, shoutOut).then(res => res.data);
}

export function likeShoutOut(shoutOut: ShoutOut, userName:string):Promise<ShoutOut> {
  return axios.put(`${baseUrl}/${encodeURIComponent(shoutOut._id!)}/${encodeURIComponent(userName)}`, shoutOut).then(res => res.data);
}