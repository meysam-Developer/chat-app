import firebase from "firebase/app";
import "firebase/auth";
export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyCgdv-m8Ivx-6W1SRcEGblG-E8CMxsC_YM",
    authDomain: "personalgram-485bc.firebaseapp.com",
    projectId: "personalgram-485bc",
    storageBucket: "personalgram-485bc.appspot.com",
    messagingSenderId: "1085278790465",
    appId: "1:1085278790465:web:89a11a8bd9d3f6fc3a77c0"
  }).auth();