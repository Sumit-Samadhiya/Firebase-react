// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApPzvqPYYVlr6JlT5Her6wEEy0l73pI3E",
  authDomain: "fir-1-10ba8.firebaseapp.com",
  projectId: "fir-1-10ba8",
  storageBucket: "fir-1-10ba8.appspot.com",
  messagingSenderId: "225647686200",
  appId: "1:225647686200:web:23ede264c3435acb53eccd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);