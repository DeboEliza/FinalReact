import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB5h-56npU0soyje78lOOdifSYLx4Y_Z_o",
  authDomain: "trabajo-de-react.firebaseapp.com",
  projectId: "trabajo-de-react",
  storageBucket: "trabajo-de-react.appspot.com",
  messagingSenderId: "544855501926",
  appId: "1:544855501926:web:9e49190be13e12a58f91a7"
};


const app = initializeApp(firebaseConfig);

export const miBaseDeDatos = getFirestore (app);