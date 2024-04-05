// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1f-6j0sLoV4_3up9xRsM_Qkm4ZK9YuaM",
  authDomain: "barrigacheia-a9fe3.firebaseapp.com",
  projectId: "barrigacheia-a9fe3",
  storageBucket: "barrigacheia-a9fe3.appspot.com",
  messagingSenderId: "300410531949",
  appId: "1:300410531949:web:73c3ce6840a1134273cf64",
  measurementId: "G-0PL0HWDKMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);