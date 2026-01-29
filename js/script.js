// new Swiper(".hawker-carousel", {
//     slidesPerView: 1.2,
//     centeredSlides: true,
//     spaceBetween: 30,
//     loop: true,

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },

//     breakpoints: {
//         0: {
//         slidesPerView: 1,
//         },
//         768: {
//         slidesPerView: 2,
//         },
//         1024: {
//         slidesPerView: 3,
//         }
//     }
// });

// initiailise the swiper 
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});