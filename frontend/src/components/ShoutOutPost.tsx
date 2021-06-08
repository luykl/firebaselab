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
    const [isShown, setIsShown ] = useState(false);
    
    

    useEffect(() => {
        if (liked && user && user.displayName) {
        likeShoutOut(shoutOut, user.displayName);
        
        } 
        
    }, [liked, shoutOut, user]);

    function alreadyLiked():boolean {
        if (shoutOut.likes && user ) {
        return shoutOut.likes.some((userLiked) => userLiked === user.displayName)
        } else {
            return false
        }
    }


    return (
        <div className="ShoutOutPost">
            <h2>Shout out to {shoutOut.to}</h2>
            <h3> from {shoutOut.from}</h3>
            <p>
                {shoutOut.message}
            </p>
            <p>
                {shoutOut.image && <img className="shoutOutImage" src={shoutOut.image} alt=""/>}
            </p>
            <div className="Likes" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                { user && <button disabled={alreadyLiked()} onClick={()=>setLiked(true)}>like</button>}
            </div>
            {isShown &&      
            <ul className="likeList">
                {shoutOut.likes && shoutOut.likes.map((liker) => (
                <li key={liker}>
                    {liker}
                </li>))}
            </ul>}
            

        </div>
    )
}

export default ShoutOutPost;