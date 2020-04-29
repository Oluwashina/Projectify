 import firebase from 'firebase/app'
 import 'firebase/firestore';
 import 'firebase/auth'
 

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyANMrtIM84bFwqZiZeKbpVZxlTbEqjwmZk",
    authDomain: "marioplan-cfa91.firebaseapp.com",
    databaseURL: "https://marioplan-cfa91.firebaseio.com",
    projectId: "marioplan-cfa91",
    storageBucket: "marioplan-cfa91.appspot.com",
    messagingSenderId: "246341570775",
    appId: "1:246341570775:web:de5863037a74be38a36092",
    measurementId: "G-DFDD1PJ1LZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;