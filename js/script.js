// debugging, check whether script loads
console.log("script loaded");

// swiper.js - for carousel
const swiper = new Swiper('.wrapper', {
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


// login.html js
// for login states - 3 different types of login states
// choose-role state, customer-login state, and other-login state

//adding the function to toggle between the states
function toggleLoginState(loginstate){
  document.querySelectorAll(".login-state").forEach(state => {
    state.classList.remove("active");
  })
  document.getElementById(loginstate).classList.add("active");
}

//get the user input for the role login
proceedbtn = document.querySelector(".proceed-btn");
roleselect = document.getElementById("role-select");

proceedbtn.addEventListener("click", () => {
  role = roleselect.value;

  if (!role) return;
  if (role === "customer"){
    toggleLoginState("customer-login");
  }
  else{
    toggleLoginState("other-login");
  }
});