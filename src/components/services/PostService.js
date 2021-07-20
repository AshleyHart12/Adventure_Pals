// import firebase from '../../firebase';
import firebase from 'firebase/app';
import "firebase/firestore";

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

// const db = firebase.firestore();

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore().collection('posts');

export default db;

// const getAll = () => {
//     return db;
// }

// const create = (data) => {
//     return db.push(data);
// }

// const update = (key, data) => {
//     return db.child(key).update(data);
// }

// const remove = (key) => {
//     return db.child(key).remove();
// }

// const removeAll = () => {
//     return db.remove();
// }

// export default {
//     getAll,
//     create,
//     update,
//     remove,
//     removeAll,
//   };