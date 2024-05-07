import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxmNNoHzlwXKOXqbB4qSbSmCDt9IV1BE8",
  authDomain: "bc-teste-e6334.firebaseapp.com",
  projectId: "bc-teste-e6334",
  storageBucket: "bc-teste-e6334.appspot.com",
  messagingSenderId: "909791143699",
  appId: "1:909791143699:web:7878d57cd596437875dce6",
  measurementId: "G-CQ1VCWX722"
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();

// login
export const auth = getAuth(app)

// firestore
export const db = getFirestore(app)