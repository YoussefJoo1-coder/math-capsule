import { initializeApp } from "firebase/app";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_i_doyFgfiXsDfUOMEzYqnDzk1IwibR4",
  authDomain:
    "mathcapsule-63621.firebaseapp.com",
  projectId:
    "mathcapsule-63621",
  storageBucket:
    "mathcapsule-63621.firebasestorage.app",
  messagingSenderId:
    "354948819865",
  appId:
    "1:354948819865:web:1a7ff2e69cfce313b7c108"
};

const app =
  initializeApp(
    firebaseConfig
  );

export const db =
  getFirestore(app);