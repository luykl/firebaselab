import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";

function Header() {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <header className="Header">
           { user ? <button onClick={signOut}>Sign Out</button> :
             <button onClick={signInWithGoogle}>Sign in with Google</button>}
            { user && <div>
                Welcome {user.displayName}
             </div>}
        </header>
    );
}

export default Header;