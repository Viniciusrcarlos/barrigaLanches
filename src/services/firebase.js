// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAA1wu2sQvlzLQvGsXrWheDiEPbpnR0WZY",
  authDomain: "barriga-lanches.firebaseapp.com",
  projectId: "barriga-lanches",
  storageBucket: "barriga-lanches.appspot.com",
  messagingSenderId: "591751711184",
  appId: "1:591751711184:web:23a6589c792a426d5a91d5",
  measurementId: "G-0T520VG5VZ"
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();

// login
export const auth = getAuth(app)