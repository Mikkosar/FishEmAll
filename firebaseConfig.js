// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSC3PsBv9ts681Q0Z5BASkO3winGgRPRc",
  authDomain: "fish-emall.firebaseapp.com",
  projectId: "fish-emall",
  storageBucket: "fish-emall.appspot.com",
  messagingSenderId: "346260260103",
  appId: "1:346260260103:web:38f91f7572da80b41e31a2",
  databaseURL:"https://fish-emall-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

