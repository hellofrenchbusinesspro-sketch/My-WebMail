import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAf07zpmUPG26pxyBelY8VuHLUo-mANlSt",
  authDomain: "monwebmail.firebaseapp.com",
  projectId: "monwebmail",
  storageBucket: "monwebmail.firebasestorage.app",
  messagingSenderId: "753446508336",
  appId: "1:753446508336:web:638f236213274d79e32fed",
  measurementId: "G-CPYXPKRQGW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
