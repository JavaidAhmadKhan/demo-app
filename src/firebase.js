import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_wXp7qulc_k5vIY31lBVdsGnCCayHgx8",
  authDomain: "outlook-clone-882c7.firebaseapp.com",
  databaseURL: "https://outlook-clone-882c7.firebaseio.com",
  projectId: "outlook-clone-882c7",
  storageBucket: "outlook-clone-882c7.appspot.com",
  messagingSenderId: "555274815400",
  appId: "1:555274815400:web:383a80128d4739d4207f9d",
  measurementId: "G-E2WXE1Q89D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
