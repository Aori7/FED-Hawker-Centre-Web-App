//authentication
//done by Ada
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAUkw_-4fRby8jYZ-d_QwixwcCKVosYw7A",
  authDomain: "hawker-centre-a7461.firebaseapp.com",
  databaseURL: "https://hawker-centre-a7461-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hawker-centre-a7461",
  storageBucket: "hawker-centre-a7461.firebasestorage.app",
  messagingSenderId: "971970826785",
  appId: "1:971970826785:web:2d5daeae78dc079d6c0960"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

document.addEventListener("DOMContentLoaded", () => {


  const logoutBtn = document.getElementById("logout-btn");
  const loginLink = document.getElementById("login-link");

  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  //nav bar options: login or logout
  //this toggles between active state of login or logout
  //by using display block/none
  if (isLoggedIn) {
    if (loginLink) loginLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "block";
  } else {
    if (loginLink) loginLink.style.display = "block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  //log out
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth).finally(() => {
        sessionStorage.clear();
        window.location.href = "index.html";
      });
    });
  }

});

