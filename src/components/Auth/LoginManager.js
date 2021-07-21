import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


// Firebase Initializing
export const initializeFrameWork = () => {
    if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
    }else {
        firebase.app()
    }
}

// Google Sign In

export const getGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        const {displayName, email, photoURL} = result.user;
        const signedInUser = {
            isSignIn: true,
            name: displayName,
            email: email,
            image: photoURL,
            success: true
        }
        
        return signedInUser;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        console.log(error);
        console.log(error.message)
        // ...
    });
}