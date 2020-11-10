import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfhmhuxhYzKFiwLWyQXObBH-RJMydHuYs",
  authDomain: "slack-clone-6ff44.firebaseapp.com",
  databaseURL: "https://slack-clone-6ff44.firebaseio.com",
  projectId: "slack-clone-6ff44",
  storageBucket: "slack-clone-6ff44.appspot.com",
  messagingSenderId: "449020110692",
  appId: "1:449020110692:web:df0b8246745510953ebc71",
  measurementId: "G-PD91GSPMEQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
