// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTtuZ0wkCE0_A7_5w6sD4bjNa2-OqF-Ws",
    authDomain: "itchat-4d565.firebaseapp.com",
    databaseURL: "https://itchat-4d565-default-rtdb.firebaseio.com",
    projectId: "itchat-4d565",
    storageBucket: "itchat-4d565.appspot.com",
    messagingSenderId: "34166370823",
    appId: "1:34166370823:web:ea2c586d95dcf1f358f0a2",
    measurementId: "G-5XJ49VM8SL"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };