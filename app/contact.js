const toggleEmailView = document.querySelector("#viewEmailInput");
const emailInput = document.querySelector("#emailInput");

const toggleNameView = document.querySelector("#viewNameInput");
const nameInput = document.querySelector("#nameInput");

const togglePhoneView = document.querySelector("#viewPhoneInput");
const phoneInput = document.querySelector("#phoneInput");

const loginButton = document.querySelector("#continueButton");

const registerError = document.getElementById("registerError");
const errorMessage = document.getElementById("errorMessage");

toggleEmailView.addEventListener("click", function () {
  let nextView = toggleEmailView.innerHTML == "Open" ? "Close" : "Open";
  toggleEmailView.innerHTML = nextView;
  emailInput.type = nextView == "Open" ? "text" : "password";
});

toggleNameView.addEventListener("click", function () {
  let nextView = toggleNameView.innerHTML == "Open" ? "Close" : "Open";
  toggleNameView.innerHTML = nextView;
  nameInput.type = nextView == "Open" ? "text" : "password";
});

togglePhoneView.addEventListener("click", function () {
  let nextView = togglePhoneView.innerHTML == "Open" ? "Close" : "Open";
  togglePhoneView.innerHTML = nextView;
  phoneInput.type = nextView == "Open" ? "text" : "password";
});

loginButton.addEventListener("click", function () {
  nameInput.classList.replace("border-danger", "border-black");
  emailInput.classList.replace("border-danger", "border-black");
  phoneInput.classList.replace("border-danger", "border-black");

  registerError.style.visibility = "hidden";

  const name = nameInput.value;
  const email = emailInput.value;
  const phoneNumber = phoneInput.value;

  //Presence check
  if (name.length == 0) {
    nameInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "You have to put a name";
    registerError.style.visibility = "visible";
  } else if (email.length == 0) {
    emailInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "You have to enter your email";
    registerError.style.visibility = "visible";
  } else if (phoneNumber.length == 0) {
    phoneInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "You have to enter your phone number";
    registerError.style.visibility = "visible";
  }

  //Checking stuff for names
  else if (name.length > 70) {
    nameInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your name is too long";
    registerError.style.visibility = "visible";
  } else if (!(name.match(/^[a-zA-Z]+$/))) {
    nameInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your name can only have letters";
    registerError.style.visibility = "visible";
  }

  //Checking stuff for password
  else if (email.length < 6) {
    emailInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your email is too short";
    registerError.style.visibility = "visible";
  } else if (email.length > 254) {
    emailInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your email is too long";
    registerError.style.visibility = "visible";
  }
  else if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    emailInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your email is incorrect";
    registerError.style.visibility = "visible";
  }

  //Checking stuff for phone number
  else if (
    phoneNumber.length != 10 ||
    !phoneNumber.match(/^(\+27|0)[6-8][0-9]{8}$/)
  ) {
    phoneInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your phone number is not valid";
    registerError.style.visibility = "visible";
  }
});
