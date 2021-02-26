import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAY_PgZ9jwMnOXN83lBZ27W9U75dHoqpUA",
    authDomain: "twitter-clone-b9704.firebaseapp.com",
    projectId: "twitter-clone-b9704",
    storageBucket: "twitter-clone-b9704.appspot.com",
    messagingSenderId: "842416712785",
    appId: "1:842416712785:web:5ee1a384126b692c071c70",
    measurementId: "G-4B36MXPG36"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;