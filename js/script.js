

// debugging, check whether script loads
console.log("script loaded");

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

// for login auth script. login.html
// const authContainer = document.getElementById('auth-container');
// const loginBtn = document.getElementById('login-tab');
// const singupBtn = document.getElementById('signup-tab');

// loginBtn.onclick = () => {
//     loginBtn.classList.add('active');
//     singupBtn.classList.remove('active');
//     console.log("login clicked");
// }

// singupBtn.onclick = () => {
//     singupBtn.classList.add('active');
//     loginBtn.classList.remove('active');
//     console.log("signup clicked");
// }


// ==================================================

// initiailise the swiper 
// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination',
//     },

//     navigation:{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// new Swiper('.card-wrapper', {
//   // Optional parameters
//   loop: true,
//   spacebetween: 20, 

//   // pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     Dynamicbullets: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   breakpoints:{
//     0:{
//         slidesperview: 1,
//     },
//     768:{
//         slidesperview: 2,
//     },
//     1024:{
//         slidesperview: 3,
//     },
//   }

// });




