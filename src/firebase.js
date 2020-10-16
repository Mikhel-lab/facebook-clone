// import firebase from "firebase";
import firebase from 'firebase'
require('firebase/auth')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDqw6rr5f6wZJNWr1kBfO9l4d3-Mv5B6UQ",
    authDomain: "facebook-clone-639d1.firebaseapp.com",
    databaseURL: "https://facebook-clone-639d1.firebaseio.com",
    projectId: "facebook-clone-639d1",
    storageBucket: "facebook-clone-639d1.appspot.com",
    messagingSenderId: "520697583830",
    appId: "1:520697583830:web:3bb32464cff199fd991177",
    measurementId: "G-RN0LTE7TF1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;