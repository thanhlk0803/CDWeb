
// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjpC8ZR46sKhk3FrTfTqgPmPH3EmSrKok",
  authDomain: "cdweb-2c7e6.firebaseapp.com",
  projectId: "cdweb-2c7e6",
  storageBucket: "cdweb-2c7e6.appspot.com",
  messagingSenderId: "149423599078",
  appId: "1:149423599078:web:b16192ff9ec940a56e3a27",
  measurementId: "G-V2TWGG5638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
