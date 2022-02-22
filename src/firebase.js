import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5zkCGfOV-3A0Jce41Y0h1YkgIUak8wT0",
    authDomain: "slack-clone-1a4e2.firebaseapp.com",
    projectId: "slack-clone-1a4e2",
    storageBucket: "slack-clone-1a4e2.appspot.com",
    messagingSenderId: "1068663303530",
    appId: "1:1068663303530:web:daecb74db4a73f5d9d8913"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };