// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdf4T0HiLi0TlqCU_mWpu5kg6KGeYHkNg",
  authDomain: "react-dragon-news-8e4fc.firebaseapp.com",
  projectId: "react-dragon-news-8e4fc",
  storageBucket: "react-dragon-news-8e4fc.appspot.com",
  messagingSenderId: "199764921205",
  appId: "1:199764921205:web:51b5b6e04a66ba96ac213c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);