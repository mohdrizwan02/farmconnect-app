
import { initializeApp } from "firebase/app";
import 'firebase/auth';





const firebaseConfig = {
  apiKey: "AIzaSyB4lmCHaPaH5G2yfhaD3xInXhwa1oZEcmg",
  authDomain: "farmconnectapp-7860e.firebaseapp.com",
  projectId: "farmconnectapp-7860e",
  storageBucket: "farmconnectapp-7860e.appspot.com",
  messagingSenderId: "1007511944732",
  appId: "1:1007511944732:web:f8f70ad6b20ce04bca29d9",
  measurementId: "G-L5NP9Z85KS"
};


const app = initializeApp(firebaseConfig);

export {app};