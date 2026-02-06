
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
document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    toggleLoginState("choose-role");
  });
});

//get the user input for the role login
//if user selects customer, state active changed to customer login state
// if user selects nea,operator,vendor, state active changed to other-login state
const proceedbtn = document.querySelector(".proceed-btn");
const roleselect = document.getElementById("role-select");
const regbtn = document.querySelector(".sign-up");

regbtn.addEventListener("click", () => {
    toggleLoginState("register-acc")
})
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

//in other-login state method
//there are 2 states to choose from
//either login via singpass manual password OR singpass qr app
const singpassbtn = document.querySelectorAll(".singpass-login");
const loginmethod = document.querySelectorAll(".login-method");
// loop 
singpassbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        method = btn.dataset.method;
            // modify the active state accordingly
            singpassbtn.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            //states for the login method
            //singpass manual password login or
            // singpass qr app login
            loginmethod.forEach(m => m.classList.remove("active"));
            
            //handle the toggle states
            if(method=== "password"){
                document.getElementById("login-password").classList.add("active");
                //add "active" to the class to toggle active state
            }
            else{
                document.getElementById("login-qr").classList.add("active");
            }
        });
});
    

//firebase authentication
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAUkw_-4fRby8jYZ-d_QwixwcCKVosYw7A",
authDomain: "hawker-centre-a7461.firebaseapp.com",
databaseURL: "https://hawker-centre-a7461-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "hawker-centre-a7461",
storageBucket: "hawker-centre-a7461.firebasestorage.app",
messagingSenderId: "971970826785",
appId: "1:971970826785:web:2d5daeae78dc079d6c0960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.querySelector(".reg-btn");
submit.addEventListener("click", function(event){
    event.preventDefault()
    // inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value; 
    const confirmPassword = document.getElementById("confirm-password").value;
    
    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})