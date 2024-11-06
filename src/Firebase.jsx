// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR_qNmmnOy_6MI_HbyqYSp_-WpKx0PJtk",
  authDomain: "realtor-clone-211bb.firebaseapp.com",
  projectId: "realtor-clone-211bb",
  storageBucket: "realtor-clone-211bb.firebasestorage.app",
  messagingSenderId: "364422880295",
  appId: "1:364422880295:web:ef49ce4a3e301c53450202"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();