// debugging, check whether script loads
console.log("script loaded");

// swiper.js - for carousel
const swiper = new Swiper('.swiper .wrapper', {
  // Optional parameters
  loop: true,

  slidesPerView: 3,
  spaceBetween: 24,

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    Dynamicbullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3,
    },
  } 
});
  
// fetch list of hawker centre n its info via json file
//since live api call doesnt work (CORS error)
// document.addEventListener("DOMContentLoaded", () => {

fetch("https://hawker-centre-a7461-default-rtdb.asia-southeast1.firebasedatabase.app/.json")
  .then(res => res.json())
  .then(data => {
    hawkers = data.features;
    cards = document.querySelectorAll(".card");

    shuffled = hawkers.sort(() => 0.5 - Math.random());

    cards.forEach((card, index) => {
      hawker = shuffled[index];
      if (!hawker) return;

      props = hawker.properties;

      card.querySelector(".hawker-name").textContent =
        props.NAME || "Unknown Hawker Centre";

      card.querySelector(".hawker-address").textContent =
        props.ADDRESS_MYENV || "Address not available";

      card.querySelector(".hawker-desc").textContent =
        `A popular hawker centre with ${props.NUMBER_OF_COOKED_FOOD_STALLS || "many"} food stalls.`;

      img = card.querySelector(".card-image img");
      img.src = props.PHOTOURL || "images/picture-icon.jpg";
      img.alt = props.NAME || "Hawker Centre";
    });

    if (typeof swiper !== "undefined") {
      swiper.update();
    }
  })
  .catch(err => console.error(err));

