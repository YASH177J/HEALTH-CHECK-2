import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCuJ_zat7AcLE1CBFFOT7sHfAfIPBUVCn4",
    authDomain: "book-santa-app-2e4af.firebaseapp.com",
    projectId: "book-santa-app-2e4af",
    storageBucket: "book-santa-app-2e4af.appspot.com",
    messagingSenderId: "998475015619",
    appId: "1:998475015619:web:4e49f741f10e51ff900976"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
