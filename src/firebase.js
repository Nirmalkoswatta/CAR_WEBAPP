// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALnuOl6Skckvyid42_drHQ5DwpHKl3vMc",
  authDomain: "car-modification-1090a.firebaseapp.com",
  projectId: "car-modification-1090a",
  storageBucket: "car-modification-1090a.appspot.com",
  messagingSenderId: "666758590117",
  appId: "1:666758590117:web:your-app-id-here"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
