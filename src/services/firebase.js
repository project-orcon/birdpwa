import firebase from "firebase";

var config = {
  apiKey: "AIzaSyARtRyYNbNpwARiEpe7KePnA6Ahzy6_KJ4",
  authDomain: "bird-pwa.firebaseapp.com",
  databaseURL: "https://bird-pwa.firebaseio.com",
  projectId: "bird-pwa",
  storageBucket: "bird-pwa.appspot.com",
  messagingSenderId: "92610928574",
  appId: "1:92610928574:web:53ba18b5294b68e1"
};

export const db = firebase.initializeApp(config).firestore();

