import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa76J-ad0VNGodmSaEHUHE0IdaW4BGsOE",
  authDomain: "fed-assg-3ba46.firebaseapp.com",
  databaseURL:
    "https://fed-assg-3ba46-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fed-assg-3ba46",
  storageBucket: "fed-assg-3ba46.appspot.com",
  messagingSenderId: "366045676660",
  appId: "1:366045676660:web:5ee780a87ef1f62516bd21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getDatabase(app);

//====================================== displaying stalls =======================================
// Reference to Stalls
const stallsRef = ref(analytics, "stalls");
let allStalls = {};
const dropdown = document.getElementById("selectStall");

get(stallsRef)
  .then((snapshot) => {
    if (!snapshot.exists()) {
      console.log("No stalls found");
      return;
    }

    allStalls = snapshot.val();

    dropdown.innerHTML = `<option value="all">All Stalls</option>`;
    Object.entries(allStalls).forEach(([stallNum, stall]) => {
      const option = document.createElement("option");
      option.value = stallNum;
      option.textContent = stall.stallName;
      dropdown.appendChild(option);
    });
  })
  .catch((err) => console.error("Error loading stalls:", err));

//================================== displaying promotions ====================================

const affectedBtns = document.querySelectorAll(".affected-btn");

affectedBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const promoCard = btn.closest(".promoCode");
    const affectedList = promoCard.querySelector(".affectedItemsList");
    const arrow = btn.querySelector(".arrow");

    const isOpen = affectedList.style.display === "block";
    affectedList.style.display = isOpen ? "none" : "block";
    arrow.textContent = isOpen ? "⌄" : "⌃";
  });
});

document.querySelectorAll(".promoCode").forEach((promo) => {
  const moreBtn = promo.querySelector(".more-btn");
  const dropdown = promo.querySelector(".more-dropdown");

  if (!moreBtn || !dropdown) return;

  moreBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent clicks from bubbling up
    // toggle the dropdown
    dropdown.style.display =
      dropdown.style.display === "flex" ? "none" : "flex";
    dropdown.style.flexDirection = "column"; // optional if using flex
  });
});
