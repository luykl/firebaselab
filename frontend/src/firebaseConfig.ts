import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5NfljbySmy-lhWFKZiQbcRoqxnzyac4I",
    authDomain: "fir-lab-3a7e0.firebaseapp.com",
    projectId: "fir-lab-3a7e0",
    storageBucket: "fir-lab-3a7e0.appspot.com",
    messagingSenderId: "774113784499",
    appId: "1:774113784499:web:03744247af5fdca9c5b6c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const authProvider = new firebase.auth.GoogleAuthProvider();
  
  export function signInWithGoogle(): void {
      firebase.auth().signInWithPopup(authProvider);
  }
  export function signOut(): void {
      firebase.auth().signOut();
  }

  
  export default firebase;

  