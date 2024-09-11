// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4VtTMH6aNrfeSrdN8KkzJ_mKguNiCPco",
  authDomain: "week7-avinash.firebaseapp.com",
  projectId: "week7-avinash",
  storageBucket: "week7-avinash.appspot.com",
  messagingSenderId: "1073628342763",
  appId: "1:1073628342763:web:19662e2217473e9d8ed1ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Pass the initialized app

// Export Firestore instance
export default db;
