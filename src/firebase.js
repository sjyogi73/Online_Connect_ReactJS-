import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config

const firebaseConfig = {
  apiKey: "AIzaSyBYty3qBGKF8PCxw3vY1OUtke08FmVUlh4",
  authDomain: "whats-app-clone-4169d.firebaseapp.com",
  projectId: "whats-app-clone-4169d",
  storageBucket: "whats-app-clone-4169d.appspot.com",
  messagingSenderId: "475593444824",
  appId: "1:475593444824:web:346f71134049900968b6ad",
  measurementId: "G-VWLX1FZ8BJ"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
