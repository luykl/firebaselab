import ShoutOut from "../model/ShoutOut";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { likeShoutOut } from "../service/ShoutOutApiService";

interface Props {
    shoutOut: ShoutOut;
}

function ShoutOutPost({ shoutOut }: Props) {

    const [ liked, setLiked ] = useState(false);
    const { user } = useContext(AuthContext);
    

    useEffect(() => {
        if (liked && user && user.displayName) {
        likeShoutOut(shoutOut, user.displayName);
        
        } 
        
    }, [liked, shoutOut, user]);


    return (
        <div className="ShoutOutPost">
            <h2>Shout out to {shoutOut.to}</h2>
            <h3> from {shoutOut.from}</h3>
            <p>{shoutOut.message}</p>
            <p>
            {shoutOut.image && <img className="shoutOutImage" src={shoutOut.image} alt=""/>}
            </p>
            { user && <button onClick={()=>setLiked(true)}>like</button>}
            {shoutOut.likes && <p>{shoutOut.likes.length} likes</p>}

        </div>
    )
}

export default ShoutOutPost;