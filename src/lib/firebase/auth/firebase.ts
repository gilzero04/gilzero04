import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    /*
       apiKey: "AIzaSyCaW2qJwT4en97qCKdrzhjZLEp3ygXOo3g",
       authDomain: "interview-366601.firebaseapp.com",
       projectId: "interview-366601",
       storageBucket: "interview-366601.appspot.com",
       messagingSenderId: "1094898698339",
       appId: "1:1094898698339:web:7980b70bdb896f8ebb9056",
       measurementId: "G-C8N8KH9VW0"
   */

    apiKey: 'AIzaSyCJ8jORBN_a49PxI4pKdE3Y1JktT4Tm3nw',
    authDomain: 'toutubefirebaseauten.firebaseapp.com',
    projectId: 'toutubefirebaseauten',
    storageBucket: 'toutubefirebaseauten.appspot.com',
    messagingSenderId: '176122914918',
    appId: '1:176122914918:web:716562b859ece393fae5a7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth
}