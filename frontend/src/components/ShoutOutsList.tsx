import { useEffect, useState, useContext } from "react";
import ShoutOut from "../model/ShoutOut";
import { createShoutOut, readAllShoutOuts } from "../service/ShoutOutApiService";
import ShoutOutPost from "./ShoutOutPost";
import ShoutOutForm from "./ShoutOutForm";
import { AuthContext } from "../context/auth-context";


function ShoutOutList() {
    const { user } = useContext(AuthContext);
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
            { user ? <><h2>Create New Shout Out</h2>
            <ShoutOutForm onSubmit={handleAddShoutOut}/>
            </> : <p>Sign in to create new Shout Out</p>}
        </div>
    );
}
export default ShoutOutList;