// debugging, check whether script loads
console.log("script loaded");
import { auth, db } from "./auth.js"
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"


// swiper.js - for carousel
document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === "undefined") {
    console.warn("Swiper not loaded");
    return;
  }

  if (document.querySelector(".swiper")) {
    new Swiper(".swiper .wrapper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 24,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
});


//creating simple array of stalls
const stallData = [
  { code: "S1", name: "Ah Seng Chicken Rice", desc: "Famous Hainanese chicken rice" },
  { code: "S2", name: "Fatty Char Kway Teow", desc: "Wok-fried noodles with cockles" },
  { code: "S3", name: "Laksa King", desc: "Spicy coconut laksa" },
  { code: "S4", name: "Kopi & Teh", desc: "Traditional kopi & drinks" }
];
const menuData = {
  S1: [
    { name: "Chicken Rice", desc: "Steamed chicken with fragrant rice", price: 4.5 },
    { name: "Roasted Chicken Rice", desc: "Crispy roasted chicken", price: 5.0 },
    { name: "Char Siew Rice", desc: "BBQ pork with rice", price: 5.0 },
    { name: "Chicken Soup", desc: "Light herbal soup", price: 2.0 }
  ],
  S2: [
    { name: "Char Kway Teow", desc: "Wok-fried noodles with cockles", price: 5.5 },
    { name: "Seafood Kway Teow", desc: "Noodles with prawns and squid", price: 6.5 },
    { name: "Egg Kway Teow", desc: "Extra egg version", price: 4.5 },
    { name: "Kway Teow Soup", desc: "Clear broth noodles", price: 4.0 }
  ],
  S3: [
    { name: "Laksa", desc: "Spicy coconut noodle soup", price: 5.5 },
    { name: "Laksa with Prawns", desc: "Laksa topped with prawns", price: 6.5 },
    { name: "Dry Laksa", desc: "Dry-style laksa", price: 5.0 },
    { name: "Fish Cake Soup", desc: "Light side soup", price: 3.0 }
  ],
  S4: [
    { name: "Kopi", desc: "Traditional coffee", price: 1.5 },
    { name: "Teh", desc: "Traditional tea", price: 1.5 },
    { name: "Milo", desc: "Chocolate malt drink", price: 2.0 },
    { name: "Iced Lemon Tea", desc: "Refreshing citrus tea", price: 2.5 }
  ]
};
const stallPage = document.querySelector(".stall-available-section");
if (stallPage) {
  const hawkerId = sessionStorage.getItem("selectedHawkerId");

  if (!hawkerId) {
    window.location.href = "order-hawker.html";
  }
  const stallCards = document.querySelectorAll(".card");
  stallCards.forEach((card, index) => {
    const stall = stallData[index];
    if (!stall) return;

    const stallId = `${hawkerId}-${stall.code}`;

    card.querySelector(".stall-name").textContent = stall.name;
    card.querySelector(".stall-address").textContent = `Stall ID: ${stallId}`;
    card.querySelector(".stall-desc").textContent = stall.desc;

    const orderBtn = card.querySelector(".card-button");
    orderBtn.addEventListener("click", () => {
      sessionStorage.setItem("selectedStallId", stallId);
      sessionStorage.setItem("selectedStallName", stall.name);
      window.location.href = "order-menuItems.html";
    });
  });
}


const menuPage = document.querySelector(".menu-items-section");
if (menuPage) {
  const stallId = sessionStorage.getItem("selectedStallId");
  const stallName = sessionStorage.getItem("selectedStallName");
  const headerDesc = document.querySelector(".order-hawker-header p");

  if (!stallId) {
    window.location.href = "order-stall.html";
  }
  const headerTitle = document.querySelector(".order-hawker-header h1");
  if (headerTitle && stallName) {
    headerTitle.textContent = stallName;
  }
  const stallCode = stallId.split("-")[1];
  const stallInfo = stallData.find(s => s.code === stallCode);
  if (headerDesc && stallInfo) {
  headerDesc.textContent = `${stallInfo.desc} • Stall ID: ${stallId}`;
}

  const items = menuData[stallCode];

  const menuCards = document.querySelectorAll(".menu-card");

  menuCards.forEach((card, index) => {
    const item = items[index];
    if (!item) return;

    card.querySelector("h3").textContent = item.name;
    card.querySelector(".menu-desc").textContent = item.desc;
    card.querySelector(".price").textContent = `$${item.price.toFixed(2)}`;

    //cart
    const addBtn = card.querySelector(".add-btn");

    addBtn.addEventListener("click", () => {
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

      const itemId = `${stallId}-${item.name}`;

      const existingItem = cart.find(i => i.id === itemId);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cart.push({
          id: itemId,
          name: item.name,
          price: item.price,
          qty: 1
        });
      }

      sessionStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });

  
  
}

const hawkerName = sessionStorage.getItem("selectedHawkerName");
const hawkerElem = document.querySelector(".hawker-selected-name");


if (hawkerElem && hawkerName) {
  hawkerElem.textContent = hawkerName;
}


// fetch list of hawker centre n its info via firebase

const hawkerpage = document.querySelector(".hawker-name");
if(hawkerpage){
  fetch("https://hawker-centre-a7461-default-rtdb.asia-southeast1.firebasedatabase.app/.json")
    .then(res => res.json())
    .then(data => {
      const hawkers = data.features;
      const cards = document.querySelectorAll(".card");

      const shuffled = [...hawkers].sort(() => 0.5 - Math.random());

      cards.forEach((card, index) => {
        const hawker = shuffled[index];
        if (!hawker) return;

        const props = hawker.properties;

        card.querySelector(".hawker-name").textContent =
          props.NAME || "Unknown Hawker Centre";

        card.querySelector(".hawker-address").textContent =
          props.ADDRESS_MYENV || "Address not available";

        card.querySelector(".hawker-desc").textContent =
          `A popular hawker centre with ${props.NUMBER_OF_COOKED_FOOD_STALLS || "many"} food stalls.`;

        const img = card.querySelector(".card-image img");
        img.src = props.PHOTOURL || "images/picture-icon.jpg";
        img.alt = props.NAME || "Hawker Centre";

        // storing hawker object into card for later retrieval
        console.log("Rendered hawker:", props.NAME, props.OBJECTID);

        card.querySelector(".card-button").addEventListener("click", () => {
        console.log("Clicked hawker OBJECTID:", props.OBJECTID);

        // set the hawker centre id into ses storage
        sessionStorage.setItem("selectedHawkerId", props.OBJECTID);
        //set the hawker name to ses storage
        sessionStorage.setItem("selectedHawkerName", props.NAME);
        
        console.log(
          "Stored selectedHawkerId:",
          sessionStorage.getItem("selectedHawkerId")
        );
        // directing the user to the stall page after button clicked
        window.location.href = "order-stall.html";
      });

    });
    
    
    // update swiper instance to reflect new content
    if (typeof swiper !== "undefined") {
      swiper.update();
    }
  })
  .catch(err => console.error(err));

}



//checkout button
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.querySelector(".checkout-btn")
  const checkoutSection = document.querySelector(".checkout-section")
  const checkoutSummary = document.querySelector(".checkout-summary")
  const confirmBtn = document.querySelector(".confirm-btn")
  const cancelBtn = document.querySelector(".cancel-btn")

  if (!checkoutBtn || !confirmBtn) {
    console.log("Checkout buttons not found on this page")
    return
  }

  checkoutBtn.addEventListener("click", () => {
    console.log("CHECKOUT CLICKED")

    const cart = JSON.parse(sessionStorage.getItem("cart")) || []
    if (cart.length === 0) {
      alert("Cart empty")
      return
    }

    checkoutSection.style.display = "block"

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
    const qty = cart.reduce((s, i) => s + i.qty, 0)

    checkoutSummary.textContent =
      `You have ${qty} items. Total: $${total.toFixed(2)}`
  })

  confirmBtn.addEventListener("click", async () => {
    console.log("CONFIRM CLICKED")

    const cart = JSON.parse(sessionStorage.getItem("cart")) || []
    const user = auth.currentUser

    if (!user) {
      alert("Please log in")
      return
    }

    const orderData = {
      userId: user.uid,
      hawkerName: sessionStorage.getItem("selectedHawkerName"),
      stallName: sessionStorage.getItem("selectedStallName"),
      items: cart,
      total: cart.reduce((s, i) => s + i.price * i.qty, 0),
      status: "paid",
      createdAt: serverTimestamp()
    }

    await addDoc(collection(db, "orders"), orderData)

    alert("Order placed successfully")
    sessionStorage.removeItem("cart")
    renderCart()
    checkoutSection.style.display = "none"
  })

  cancelBtn.addEventListener("click", () => {
    checkoutSection.style.display = "none"
  })
  if (cancelBtn && checkoutSection) {
  cancelBtn.addEventListener("click", () => {
    checkoutSection.style.display = "none";
  });
}
})






//cart function
//cart ui
function renderCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartFooterTotal = document.querySelector(".cart-footer p");

  if (!cartItemsContainer) return;

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>No items added yet</p>";
    cartFooterTotal.textContent = "Total: $0.00";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <div class="cart-controls">
        <button class="qty-minus">−</button>
        <span>${item.qty}</span>
        <button class="qty-plus">+</button>
        <button class="remove-btn">✕</button>
      </div>
      <p>$${(item.price * item.qty).toFixed(2)}</p>
    `;
    const minusBtn = itemDiv.querySelector(".qty-minus");
    const plusBtn = itemDiv.querySelector(".qty-plus");
    const removeBtn = itemDiv.querySelector(".remove-btn");

    // + quantity
    plusBtn.addEventListener("click", () => {
      item.qty += 1;
      sessionStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });

    // - quantity
    minusBtn.addEventListener("click", () => {
      item.qty -= 1;

      if (item.qty <= 0) {
        cart.splice(cart.indexOf(item), 1);
      }

      sessionStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });

    // remove item
    removeBtn.addEventListener("click", () => {
      cart.splice(cart.indexOf(item), 1);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });



    cartItemsContainer.appendChild(itemDiv);
  });

  cartFooterTotal.textContent = `Total: $${total.toFixed(2)}`;
}

const viewOrdersBtn = document.getElementById("view-orders-btn");
const ordersSection = document.querySelector(".order-history");
const ordersList = document.querySelector(".orders-list");

const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

if (isLoggedIn && viewOrdersBtn) {
  viewOrdersBtn.style.display = "block";
}

if (viewOrdersBtn && ordersSection) {
  viewOrdersBtn.addEventListener("click", () => {
    ordersSection.style.display =
      ordersSection.style.display === "none" ? "block" : "none";

    const orders =
      JSON.parse(sessionStorage.getItem("orderHistory")) || [];

    ordersList.innerHTML = "";

    if (orders.length === 0) {
      ordersList.innerHTML = "<p>No orders yet</p>";
      return;
    }

    orders.forEach(order => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${order.orderId}</strong></p>
        <p>Total: $${order.total.toFixed(2)}</p>
        <p>Date: ${order.date}</p>
        <hr>
      `;
      ordersList.appendChild(div);
    });
  });
}


const openHistoryBtn = document.getElementById("open-history-btn");
const closeHistoryBtn = document.getElementById("close-history");
const historySidebar = document.getElementById("order-history-sidebar");
const historyOverlay = document.getElementById("history-overlay");

if (openHistoryBtn) {
  openHistoryBtn.addEventListener("click", () => {
    historySidebar.classList.add("active");
    historyOverlay.classList.add("active");
    loadOrderHistory();
  });
}

if (closeHistoryBtn) {
  closeHistoryBtn.addEventListener("click", () => {
    historySidebar.classList.remove("active");
    historyOverlay.classList.remove("active");
  });
}

if (historyOverlay) {
  historyOverlay.addEventListener("click", () => {
    historySidebar.classList.remove("active");
    historyOverlay.classList.remove("active");
  });
}
async function loadOrderHistory() {
  const historyList = document.querySelector(".history-list")
  if (!historyList) return

  historyList.innerHTML = "<p>Loading orders...</p>"

  const user = auth.currentUser
  if (!user) {
    historyList.innerHTML = "<p>Please log in to view order history.</p>"
    return
  }

  try {
    const q = query(
      collection(db, "orders"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    )

    const snapshot = await getDocs(q)

    historyList.innerHTML = ""

    if (snapshot.empty) {
      historyList.innerHTML = "<p>No orders yet.</p>"
      return
    }

    snapshot.forEach(doc => {
      const order = doc.data()

      const card = document.createElement("div")
      card.className = "history-card"

      card.innerHTML = `
        <h4>${order.stallName}</h4>
        <p>${order.items.length} items</p>
        <p class="history-meta">
          $${order.total.toFixed(2)} • ${new Date(order.createdAt.seconds * 1000).toLocaleString()}
        </p>
        <button class="reorder-btn">Reorder</button>
      `

      card.querySelector(".reorder-btn").addEventListener("click", () => {
        sessionStorage.setItem("cart", JSON.stringify(order.items))
        renderCart()
        alert("Items added to cart")
      })

      historyList.appendChild(card)
    })
  } catch (err) {
    console.error(err)
    historyList.innerHTML = "<p>Error loading orders.</p>"
  }
}

// for media queries
const hamburgerBtn = document.getElementById("hamburger-btn")
const navItems = document.querySelector(".navitems")

if (hamburgerBtn && navItems) {
  hamburgerBtn.addEventListener("click", () => {
    navItems.classList.toggle("show")
  })
}

