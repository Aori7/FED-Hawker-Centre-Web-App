
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

//in other-login state method
//there are 2 states to choose from
//either login via singpass manual password OR singpass qr app
singpassbtn = document.querySelectorAll(".singpass-login");
loginmethod = document.querySelectorAll(".login-method");
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
    