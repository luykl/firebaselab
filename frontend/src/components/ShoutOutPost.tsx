import ShoutOut from "../model/ShoutOut";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";
// import { likeShoutOut } from "../service/ShoutOutApiService";

interface Props {
    shoutOut: ShoutOut;
}

function ShoutOutPost({ shoutOut }: Props) {

    // const [ liked, setLiked ] = useState(false);
    const { user } = useContext(AuthContext);
    

    // useEffect(() => {
    //     if (liked) {
    //     likeShoutOut(shoutOut, user?.displayName!);
        
    //     } 
        
    // }, [liked]);


    return (
        <div className="ShoutOutPost">
            <h2>Shout out to {shoutOut.to}</h2>
            <h3> from {shoutOut.from}</h3>
            <p>{shoutOut.message}</p>
            { user && <button 
            // onClick={()=>setLiked(true)}
            >like</button>}
            {shoutOut.likes && <p>{shoutOut.likes.length} likes</p>}

        </div>
    )
}

export default ShoutOutPost;