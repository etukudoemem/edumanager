import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBULA9hzkzUa-dqbwor_--vUFg7nAqLmAg",
  authDomain: "edumanager-f250a.firebaseapp.com",
  projectId: "edumanager-f250a",
  storageBucket: "edumanager-f250a.firebasestorage.app",
  messagingSenderId: "174800563981",
  appId: "1:174800563981:web:08713255a85ed52abe0a44",
  measurementId: "G-PNHCMWRS3N"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);