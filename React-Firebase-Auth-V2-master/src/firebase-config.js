import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB5JaOyKh53s1XUNkc6tQFL_alH2TEMNEA",
    authDomain: "qr-menu-scanner.firebaseapp.com",
    projectId: "qr-menu-scanner",
    storageBucket: "qr-menu-scanner.appspot.com",
    messagingSenderId: "454416223226",
    appId: "1:454416223226:web:95cdb9621bc9e4b59e7243",
    measurementId: "G-BVVX1JT1FJ"
};

export const app = initializeApp(firebaseConfig);
