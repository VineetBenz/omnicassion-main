// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-duzJNYgFRZAoWyvfqUqTazdF4bop7ME",
    authDomain: "omnicassion-ac3db.firebaseapp.com",
    projectId: "omnicassion-ac3db",
    storageBucket: "omnicassion-ac3db.appspot.com",
    messagingSenderId: "992299543175",
    appId: "1:992299543175:web:a12ecc79f00927cd03a622",
    measurementId: "G-97TVS11YPY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
