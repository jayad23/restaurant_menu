import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_APIKEY,
    authDomain: process.env.REACT_APP_FB_AUTHDOM,
    projectId: process.env.REACT_APP_FB_PROJ_ID,
    storageBucket: process.env.REACT_APP_FB_STRG_BCKT,
    messagingSenderId: process.env.REACT_APP_FB_MSN_SND_ID,
    appId: process.env.REACT_APP_FB_APP_ID
}

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
