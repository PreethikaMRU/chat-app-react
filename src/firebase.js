// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOXlj7_gCPkPV7pkFkd44JO8OXCeIedRs",
  authDomain: "chat-app-3cfae.firebaseapp.com",
  projectId: "chat-app-3cfae",
  storageBucket: "chat-app-3cfae.appspot.com",
  messagingSenderId: "391213176795",
  appId: "1:391213176795:web:817fbb11aef346dff579fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);