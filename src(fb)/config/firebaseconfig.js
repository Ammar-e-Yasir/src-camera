import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC78s-ssNksImbAEKGZMj19Km8U_5NFD_U",
    authDomain: "testing-e1e4f.firebaseapp.com",
    projectId: "testing-e1e4f",
    storageBucket: "testing-e1e4f.appspot.com",
    messagingSenderId: "764881855683",
    appId: "1:764881855683:web:86fa853d0f83139040ae76",
    measurementId: "G-ZR6W70L1ET"
};

initializeApp(firebaseConfig);

const auth = getAuth();
export { auth, createUserWithEmailAndPassword };