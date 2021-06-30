import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAI1HVQmNXV2ZoAaRvsSHh_W2fdlTWNgQE",
    authDomain: "msteams-clone-1c71a.firebaseapp.com",
    projectId: "msteams-clone-1c71a",
    storageBucket: "msteams-clone-1c71a.appspot.com",
    messagingSenderId: "492550556983",
    appId: "1:492550556983:web:a64bf3786702ae60269eb2"
})

export const auth = app.auth()
export default app