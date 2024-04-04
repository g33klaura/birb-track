const sass = require('sass');

const result = sass.compile('zazz.scss');
console.log(result.css);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwECU2eBkvnWZMxFwWOPLn0azdwaa3tw4",
  authDomain: "birb-track-db.firebaseapp.com",
  databaseURL: "https://birb-track-db-default-rtdb.firebaseio.com",
  projectId: "birb-track-db",
  storageBucket: "birb-track-db.appspot.com",
  messagingSenderId: "1015955307094",
  appId: "1:1015955307094:web:9f8c8e6007c8d1214a19f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
