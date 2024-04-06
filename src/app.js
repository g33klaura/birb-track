// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
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
// const app = initializeApp(firebaseConfig);

// Doin' the magic ------------------------------------------------------------
let birbForm = document.querySelector('form');

birbForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // handle submit
  let birbName = birbForm.elements.birbName.value;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  let sightingDate = today;

  console.log(birbName + ' ' + sightingDate);

  birbForm.reset();
});

// console.log('Checking: ' + this.birbName + ' ' + this.sightingDate);
