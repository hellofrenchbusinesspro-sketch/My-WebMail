import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAf0rz9mpUG2GpxyBeIyBvuHLHu-mANlSt",
  authDomain: "movnembaii.firebaseapp.com",
  projectId: "movnembaii",
  storageBucket: "movnembaii.firebasestorage.app",
  messagingSenderId: "753446508336",
  appId: "1:753446508336:web:638f226312374d79e32fed",
  measurementId: "G-CPYXKPRQGW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
