import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTdLOzB_HQbzQtb5DIQGY7A_jVvXkTxgU",
    authDomain: "whatsapp-clone-26f70.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-26f70.firebaseio.com",
    projectId: "whatsapp-clone-26f70",
    storageBucket: "whatsapp-clone-26f70.appspot.com",
    messagingSenderId: "370563046725",
    appId: "1:370563046725:web:391c5645ecb0fb34ce322c",
    measurementId: "G-J6WNR815C1"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;