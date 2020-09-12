import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCv1gP1d8WAvB3oPnDy8Km_76CXwS5H4to",
    authDomain: "reactjs-messenger-clone.firebaseapp.com",
    databaseURL: "https://reactjs-messenger-clone.firebaseio.com",
    projectId: "reactjs-messenger-clone",
    storageBucket: "reactjs-messenger-clone.appspot.com",
    messagingSenderId: "830758990922",
    appId: "1:830758990922:web:3b7dcf840cd76967e522b3",
    measurementId: "G-H0XT6WT32R"

});

const db = firebaseApp.firestore();

export default db;

