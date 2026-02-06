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

