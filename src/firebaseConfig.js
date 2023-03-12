// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjmap39iYrI019srMMi3O_b_lvdZS1i_4",
  authDomain: "cat-clicker-2a778.firebaseapp.com",
  projectId: "cat-clicker-2a778",
  storageBucket: "cat-clicker-2a778.appspot.com",
  messagingSenderId: "258994888036",
  appId: "1:258994888036:web:7dd0a89934ce94748d6e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)