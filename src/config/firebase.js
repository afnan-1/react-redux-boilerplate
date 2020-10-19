import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCIDH5Ahn8TofEZZClph25ufkErg7HU63Y",
    authDomain: "reacttodo-f18bb.firebaseapp.com",
    databaseURL: "https://reacttodo-f18bb.firebaseio.com",
    projectId: "reacttodo-f18bb",
    storageBucket: "reacttodo-f18bb.appspot.com",
    messagingSenderId: "212024895924",
    appId: "1:212024895924:web:f9140258953bf752152ae1",
    measurementId: "G-CCP09MYJHE"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);