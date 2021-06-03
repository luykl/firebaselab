import { useEffect, useState } from "react";
import ShoutOut from "../model/ShoutOut";
import { createShoutOut, readAllShoutOuts } from "../service/ShoutOutApiService";
import ShoutOutPost from "./ShoutOutPost";
import ShoutOutForm from "./ShoutOutForm";

function ShoutOutList() {

    const [ shoutOuts, setShoutOuts ] = useState<ShoutOut[]>([]);
    

    useEffect(() => {
        loadShoutOuts();
        
    }, []);

    function loadShoutOuts() {
        readAllShoutOuts().then(shoutOutsFromApi => {
            setShoutOuts(shoutOutsFromApi);
        });
    }

    function handleAddShoutOut(shoutOut: ShoutOut): void {
        // After createStudent successfully completes, call loadStudents to
        // refresh the data here.
        createShoutOut(shoutOut).then(loadShoutOuts);
      }




    return (
        <div className="ShoutOutList">
            <h1>Shout Outs</h1>
            {shoutOuts.map(eachShoutOut => 
                <ShoutOutPost key={eachShoutOut._id} shoutOut={eachShoutOut}/>
            )}
            <h2>Create New Shout Out</h2>
            <ShoutOutForm onSubmit={handleAddShoutOut}/>
        </div>
    );
}
export default ShoutOutList;