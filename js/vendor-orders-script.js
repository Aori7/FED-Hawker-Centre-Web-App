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

//================================== displaying orders ====================================

// Reference to "orders"
const ordersRef = ref(analytics, "orders");

const table = document.getElementById("orderHist-table-container");
let allOrders = [];
let filters = {
  type: "all",
  status: "all",
  time: "newest",
};

get(ordersRef)
  .then((snapshot) => {
    if (!snapshot.exists()) return;

    allOrders = Object.values(snapshot.val());
    applyFilters(); // initial render
  })
  .catch((err) => console.error("Error loading orders:", err));

// removing orders from table and displying them -> refreshing table
function displayingOrders(orders) {
  table.querySelectorAll("tr:not(:first-child)").forEach((tr) => tr.remove());

  if (orders.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>No orders found</td>`;
    table.appendChild(row);
    return;
  } else {
    orders.forEach((order) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${order.orderID}</td>
      <td>${order.date}</td>
      <td>${order.customer}</td>
      <td>${order.orderType}</td>
      <td>${order.price.toFixed(2)}</td>
      <td>${order.payment}</td>
      <td>${order.status}</td>
      <td><a href="#">${order.details}</a></td>
    `;
      table.appendChild(row);
    });
  }
}

// filter by...
function applyFilters() {
  let filtered = [...allOrders];

  // Filter by stall
  if (filters.stall !== "all") {
    filtered = filtered.filter((o) => o.stallId === filters.stall);
  }

  // Filter by order type
  if (filters.type !== "all") {
    filtered = filtered.filter((o) => o.orderType === filters.type);
  }

  // Filter by status
  if (filters.status !== "all") {
    filtered = filtered.filter((o) => o.status === filters.status);
  }

  // Sort by time
  filtered.sort((a, b) =>
    filters.time === "newest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date),
  );

  displayingOrders(filtered);
}

// event listeners
// Stall dropdown
dropdown.addEventListener("change", () => {
  filters.stall = dropdown.value;
  applyFilters();
});

// Order Type buttons
document.querySelectorAll("#ordType .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.type = btn.dataset.type;

    // Highlight active
    document
      .querySelectorAll("#ordType .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    applyFilters();
  });
});

// Status buttons
document.querySelectorAll("#ordStatus .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.status = btn.dataset.type;

    document
      .querySelectorAll("#ordStatus .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    applyFilters();
  });
});

// Time buttons
document.querySelectorAll("#ordTime .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.time = btn.dataset.type;

    document
      .querySelectorAll("#ordTime .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    applyFilters();
  });
});
