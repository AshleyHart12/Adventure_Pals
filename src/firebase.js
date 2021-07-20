// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
// import 'firebase/auth';
import "firebase/firestore";
// import "firebase/database";

<>
<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase.js"></script>                                    
<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-database.js"></script>
</>


export const firebaseConfig = {
  apiKey: "AIzaSyAoRb6gnWA2pyAmnbON6L5MT4XbQNGsxn4",
  authDomain: "adventure-pal-3ac9b.firebaseapp.com",
  databaseURL: 'https://adventure-pal-3ac9b-default-rtdb.firebaseio.com',
  projectId: "adventure-pal-3ac9b",
  storageBucket: "adventure-pal-3ac9b.appspot.com",
  messagingSenderId: "459128108769",
  appId: "1:459128108769:web:8209da82530184911429a0",
  measurementId: "G-Y7G2WL384K"
};

  // const app = firebase.initializeApp(firebaseConfig);
    
  // Get a reference to the database service
  // export const database = app.database();
  
  // export default firebase;

firebase.initializeApp(firebaseConfig);

  // export default firebase.database();

