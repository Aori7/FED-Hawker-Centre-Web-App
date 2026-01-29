

// debugging, check whether script loads
console.log("script loaded");

// for login auth script. login.html
const authContainer = document.getElementById('auth-container');
const loginBtn = document.getElementById('login-tab');
const singupBtn = document.getElementById('signup-tab');

loginBtn.onclick = () => {
    loginBtn.classList.add('active');
    singupBtn.classList.remove('active');
    console.log("login clicked");
}

singupBtn.onclick = () => {
    singupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    console.log("signup clicked");
}


// ==================================================

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






