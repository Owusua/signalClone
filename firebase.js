import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqpNYVKQ0Q7rYFA58DvXJww_PIoikYxio",
  authDomain: "mysignalclone.firebaseapp.com",
  projectId: "mysignalclone",
  storageBucket: "mysignalclone.appspot.com",
  messagingSenderId: "774302186442",
  appId: "1:774302186442:web:b893b137eee4cc2aeaed33",
  measurementId: "G-JSQZBBYQTZ",
};

//this is slightly different from the web apps, as we are inside an app and do not want to keep initializing the app
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore(); //  setting up the database access variable
const auth = firebase.auth(); // setting up the firebase authentication variable

export { db, auth }; // access to firebase variables
