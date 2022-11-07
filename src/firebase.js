import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCDFpECwj-QL1XjIKrQpQbP6DGbh947DSU",
    authDomain: "eshop-cb48b.firebaseapp.com",
    projectId: "eshop-cb48b",
    storageBucket: "eshop-cb48b.appspot.com",
    messagingSenderId: "430932648909",
    appId: "1:430932648909:web:df7e3e069103000dc69a84",
    measurementId: "G-43VK5C2ED7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export {db,auth} 