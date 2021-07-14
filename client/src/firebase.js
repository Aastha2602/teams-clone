import firebase from "firebase"

const app = {
  apiKey: "AIzaSyAI1HVQmNXV2ZoAaRvsSHh_W2fdlTWNgQE",
    authDomain: "msteams-clone-1c71a.firebaseapp.com",
    projectId: "msteams-clone-1c71a",
    storageBucket: "msteams-clone-1c71a.appspot.com",
    messagingSenderId: "492550556983",
    appId: "1:492550556983:web:a64bf3786702ae60269eb2"
}
const firebaseApp=firebase.initializeApp(app);
const db=firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
export { 
 auth,storage
}
export default db;