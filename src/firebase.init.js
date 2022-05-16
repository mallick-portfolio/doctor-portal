// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAd7tAsmiW0FvtL4dQlfZ80E0Ml2T_VQ0",
  authDomain: "doctor-portal-aa43b.firebaseapp.com",
  projectId: "doctor-portal-aa43b",
  storageBucket: "doctor-portal-aa43b.appspot.com",
  messagingSenderId: "402254040203",
  appId: "1:402254040203:web:683fe56b79ee57a1ebd88e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth