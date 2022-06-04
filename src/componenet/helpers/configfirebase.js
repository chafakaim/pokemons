

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {

  apiKey: "AIzaSyDPZDGiDtvwk3mvRACssUVV_mmJcJYmMTc",

  authDomain: "pokemons-3dc9a.firebaseapp.com",

  projectId: "pokemons-3dc9a",

  storageBucket: "pokemons-3dc9a.appspot.com",

  messagingSenderId: "745390173178",

  appId: "1:745390173178:web:e0985e99d34caf78c3d243",

  measurementId: "G-Y0Z37X8FMN"

};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);