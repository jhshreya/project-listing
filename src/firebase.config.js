// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1Cvk3ney6minKYYxAZojNk3PmAjD2XV0",
    authDomain: "online-job-portal-af2c7.firebaseapp.com",
    projectId: "online-job-portal-af2c7",
    storageBucket: "online-job-portal-af2c7.appspot.com",
    messagingSenderId: "266528880895",
    appId: "1:266528880895:web:b2e5b8ab4e2149f868f4ca",
    measurementId: "G-VNT9R182HC"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};