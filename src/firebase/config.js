import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGJpTOj70q8nBBquqqTSbI-YT2UyRfHVQ",
  authDomain: "chat-app-a04a9.firebaseapp.com",
  projectId: "chat-app-a04a9",
  storageBucket: "chat-app-a04a9.appspot.com",
  messagingSenderId: "219372895542",
  appId: "1:219372895542:web:f90eec8369ff021d598797",
  measurementId: "G-W9MNE3RSD3"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
