import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRFq_D5f0dH7vRnhNGoPf2c3B4iZ4NNi0",
    authDomain: "ashop-1d39b.firebaseapp.com",
    projectId: "ashop-1d39b",
    storageBucket: "ashop-1d39b.appspot.com",
    messagingSenderId: "726517405570",
    appId: "1:726517405570:web:2a92f984c07f2b2a5ce19b",
    measurementId: "G-LVFQNRWM90"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  const auth = firebase.auth();

  export { db,auth}