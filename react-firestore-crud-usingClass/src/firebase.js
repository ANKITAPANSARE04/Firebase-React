import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyC0JUKdMva9YlgnRw62JUJRq1_jhoL5Q4M",
  authDomain: "react-fire-e2d02.firebaseapp.com",
  projectId: "react-fire-e2d02",
  storageBucket: "react-fire-e2d02.appspot.com",
  messagingSenderId: "223200153409",
  appId: "1:223200153409:web:349d53d5656640f7205bc0",
  measurementId: "G-0Z5QE382XX"
};

firebase.initializeApp(config);

export default firebase.firestore();
