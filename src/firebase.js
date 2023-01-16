import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEWHrdnzKbbKuCC34YMNz1nYFSiB0Jehk",
  authDomain: "thirdwheel-fc340.firebaseapp.com",
  databaseURL: "https://thirdwheel-fc340-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thirdwheel-fc340",
  storageBucket: "thirdwheel-fc340.appspot.com",
  messagingSenderId: "285925676010",
  appId: "1:285925676010:web:6a1912122a4f8ee7ad9893"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
