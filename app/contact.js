const togglePasswordView = document.querySelector("#viewPasswordInput");
const passwordInput = document.querySelector("#passwordInput");

const toggleNameView = document.querySelector("#viewNameInput");
const nameInput = document.querySelector("#nameInput");

const togglePhoneView = document.querySelector("#viewPhoneInput");
const phoneInput = document.querySelector("#phoneInput");

const loginButton = document.querySelector("#continueButton");

togglePasswordView.addEventListener("click", function () {
  let nextView = togglePasswordView.innerHTML == "Open" ? "Close" : "Open";
  togglePasswordView.innerHTML = nextView;
  passwordInput.type = nextView == "Open" ? "text" : "password";
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
  passwordInput.classList.replace("border-danger", "border-black");
  phoneInput.classList.replace("border-danger", "border-black");

  const registerError = document.getElementById("registerError");
  const errorMessage = document.getElementById("errorMessage");

  registerError.style.visibility = "invisible";

  let name = nameInput.value;
  let password = passwordInput.value;
  let phoneNumber = phoneInput.value;

  //Presence check
  if (name.length == 0) {
    nameInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "You have to put a name";
    registerError.style.visibility = "visible";
  } else if (password.length == 0) {
    passwordInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "You have to enter your password";
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
  } else if (!name.test("/^[a-zA-Z]+$/")) {
    nameInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your name can only have letters";
    registerError.style.visibility = "visible";
  }

  //Checking stuff for password
  else if (password.length < 8) {
    passwordInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your password is too short";
    registerError.style.visibility = "visible";
  } else if (password.length > 100) {
    passwordInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your password is too long";
    registerError.style.visibility = "visible";
  }

  //Checking stuff for phone number
  else if (
    phoneNumber.length != 10 ||
    !phoneInput.test("^(+27|0)[6-8][0-9]{8}$")
  ) {
    phoneInput.classList.replace("border-black", "border-danger");
    errorMessage.innerText = "Your phone number is not valid";
    registerError.style.visibility = "visible";
  }
});
