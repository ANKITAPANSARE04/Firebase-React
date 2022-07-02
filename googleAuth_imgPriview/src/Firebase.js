

//this is for only image upload

import firebase from 'firebase/compat'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAn5YFw9nNCNqQX1ZiZmF_HeCJr9DDkLCU",
  authDomain: "mediaclone-849d3.firebaseapp.com",
  projectId: "mediaclone-849d3",
  storageBucket: "mediaclone-849d3.appspot.com",
  messagingSenderId: "992721061801",
  appId: "1:992721061801:web:f128ef47c148153bd926b8",
  measurementId: "G-VZMM1XZCHT"

};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();

const provider = new GoogleAuthProvider();

 const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};


export {
  auth, signInWithGoogle, storage
}