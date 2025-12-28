import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

window.register = async function() {
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    alert("Compte créé !");
  } catch (e) {
    alert(e.message);
  }
}

window.login = async function() {
  const email = document.getElementById("logEmail").value;
  const pass = document.getElementById("logPass").value;

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("Connecté !");
  } catch (e) {
    alert(e.message);
  }
}
