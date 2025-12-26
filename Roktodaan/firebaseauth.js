// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js" ;
  import {getFirestore, setDoc, doc} from"https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBlq6IOI5mewGncMphGEWWEixhVKa2tJ4Y",
    authDomain: "roktodaan-final.firebaseapp.com",
    projectId: "roktodaan-final",
    storageBucket: "roktodaan-final.firebasestorage.app",
    messagingSenderId: "555067242042",
    appId: "1:555067242042:web:004f62febe2d52e86c2703"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);