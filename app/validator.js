const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");

const emailInput = document.querySelector("#emailInput");
const emailError = document.querySelector("#emailError");

const phoneInput = document.querySelector("#phoneInput");
const phoneError = document.querySelector("#phoneError");

const dateInput = document.querySelector("#dateInput");
const dateError = document.querySelector("#dateError");

const startTimeInput = document.querySelector("#startTimeInput");
const startTimeError = document.querySelector("#startTimeError");

const endTimeInput = document.querySelector("#endTimeInput");
const endTimeError = document.querySelector("#endTimeError");

const peopleInput = document.querySelector("#peopleInput");
const peopleError = document.querySelector("#peopleError");

const commentsTextArea = document.querySelector("#commentsTextArea");
const commentError = document.querySelector("#commentError");

document.querySelector("#confirmButton").addEventListener("click", function () {
  //Reset the errors
  let numberOfError = 0;
  nameInput.classList.replace("border-danger", "border-black");
  nameError.style.visibility = "hidden";
  nameError.innerText = "";

  emailInput.classList.replace("border-danger", "border-black");
  emailError.style.visibility = "hidden";
  emailError.innerText = "";

  phoneInput.classList.replace("border-danger", "border-black");
  phoneError.style.visibility = "hidden";
  phoneError.innerText = "";

  dateInput.classList.replace("border-danger", "border-black");
  dateError.style.visibility = "hidden";
  dateError.innerText = "";

  startTimeInput.classList.replace("border-danger", "border-black");
  startTimeError.style.visibility = "hidden";
  startTimeError.innerText = "";

  endTimeInput.classList.replace("border-danger", "border-black");
  endTimeError.style.visibility = "hidden";
  endTimeError.innerText = "";

  peopleInput.classList.replace("border-danger", "border-black");
  peopleError.style.visibility = "hidden";
  peopleError.innerText = "";

  commentsTextArea.classList.replace("border-danger", "border-black");
  commentError.style.visibility = "hidden";
  commentError.innerText = "";

  //Check for name
  const name = nameInput.value;

  if (name.length == 0) {
    nameInput.classList.replace("border-black", "border-danger");
    nameError.innerText = "You have to enter your name";
    nameError.style.visibility = "visible";
    numberOfError++;
  }

  //Check for email
  const email = emailInput.value;

  const atPosition = email.lastIndexOf("@");
  const dotPosition = email.lastIndexOf(".");

  //How is email validator work
  //The minimum length of email is 6 and the maximum length of email is 254
  //Every email has only 1 @ sign and have 1 or more . sign. The dot has to be after the @
  //Many mail-servers will not accept the email-address if there aren't at least 2 characters before the @

  const countAt = email.split("@").length - 1;

  const isEmailValid =
    //Format checker
    //@ logic
    atPosition > 0 &&
    countAt == 1 &&
    //The . has to be after the @
    dotPosition > atPosition;

  if (email.length == 0) {
    emailInput.classList.replace("border-black", "border-danger");
    emailError.innerText = "You have to enter an email";
    emailError.style.visibility = "visible";
    numberOfError++;
  } else if (!(email.length >= 6 && email.length <= 254)) {
    emailInput.classList.replace("border-black", "border-danger");
    emailError.innerText = "The length of your email is incorrect";
    emailError.style.visibility = "visible";
    numberOfError++;
  } else if (!isEmailValid) {
    emailInput.classList.replace("border-black", "border-danger");
    emailError.innerText = "You have to enter a correct email";
    emailError.style.visibility = "visible";
    numberOfError++;
  }

  //Check for phone number
  //South African cell numbers start with 08 or 07 or 06
  const phoneNumber = phoneInput.value.trim();

  const isValidSANumber =
    phoneNumber.charAt(0) == "0" &&
    ["6", "7", "8"].indexOf(phoneNumber.charAt(1)) !== -1;

  if (phoneNumber.length == 0) {
    phoneInput.classList.replace("border-black", "border-danger");
    phoneError.innerText = "You have to enter your phone number";
    phoneError.style.visibility = "visible";
    numberOfError++;
  } else if (parseInt(phoneNumber) != phoneNumber) {
    phoneInput.classList.replace("border-black", "border-danger");
    phoneError.innerText = "A phone number only has numbers (do not enter +)";
    phoneError.style.visibility = "visible";
    numberOfError++;
  } else if (phoneNumber.length != 10) {
    phoneInput.classList.replace("border-black", "border-danger");
    phoneError.innerText = "Your phone number does not have the correct length";
    phoneError.style.visibility = "visible";
    numberOfError++;
  } else if (!isValidSANumber) {
    phoneInput.classList.replace("border-black", "border-danger");
    phoneError.innerText =
      "You need to enter a correct South African cellphone number";
    phoneError.style.visibility = "visible";
    numberOfError++;
  }

  //Check for reservation date
  const dateString = dateInput.value;

  //This is a standard that you have to book a reservation 3 days and 5 hours in advance minimum
  const date = new Date(dateString);

  const today = new Date();

  const dateDiffInDays = Math.floor(
    (date.getTime() - today.getTime()) / (1000 * 3600 * 24) + 1
  );

  if (dateString.length == 0) {
    dateInput.classList.replace("border-black", "border-danger");
    dateError.innerText = "You have to select a date";
    dateError.style.visibility = "visible";
    numberOfError++;
  } else if (dateDiffInDays < 0) {
    dateInput.classList.replace("border-black", "border-danger");
    dateError.innerText = "You can not book a reservation in the past";
    dateError.style.visibility = "visible";
    numberOfError++;
  } else if (dateDiffInDays < 2) {
    dateInput.classList.replace("border-black", "border-danger");
    dateError.innerText = "You have to book 3 days in advance";
    dateError.style.visibility = "visible";
    numberOfError++;
  } else if (dateDiffInDays > 365) {
    dateInput.classList.replace("border-black", "border-danger");
    dateError.innerText = "You can not book a year or more in advance";
    dateError.style.visibility = "visible";
    numberOfError++;
  }

  //Check for reservation start time
  const startTime = startTimeInput.value;
  const startHour = parseInt(startTime.split(":")[0]);
  const startMinutes = parseInt(startTime.split(":")[1]);

  if (startTime.length == 0) {
    startTimeInput.classList.replace("border-black", "border-danger");
    startTimeError.innerText = "You have to select a time when you arrive";
    startTimeError.style.visibility = "visible";
    numberOfError++;
  } else if (startHour < 9) {
    startTimeInput.classList.replace("border-black", "border-danger");
    startTimeError.innerText = "The restaurant only starts reservation at 9 am";
    startTimeError.style.visibility = "visible";
    numberOfError++;
  } else if (startHour >= 20 && startMinutes != 0) {
    startTimeInput.classList.replace("border-black", "border-danger");
    startTimeError.innerText = "The restaurant closes at 9 pm";
    startTimeError.style.visibility = "visible";
    numberOfError++;
  }

  //Check for reservation end time
  //Reservation duration is between 1 hour to 5 hours
  const endTime = endTimeInput.value;
  const endHour = parseInt(endTime.split(":")[0]);
  const endMinutes = parseInt(endTime.split(":")[1]);

  const durationInMintues =
    (endHour - startHour) * 60 + (endMinutes - startMinutes);

  const durationAfterClosingInMintues = (endHour - 21) * 60 + endMinutes;

  if (endTime.length == 0) {
    endTimeInput.classList.replace("border-black", "border-danger");
    endTimeError.innerText = "You have to select a time when you finish";
    endTimeError.style.visibility = "visible";
    numberOfError++;
  } else if (durationInMintues <= 0) {
    endTimeInput.classList.replace("border-black", "border-danger");
    endTimeError.innerText = "Your end time must be after your start time";
    endTimeError.style.visibility = "visible";
    numberOfError++;
  } else if (durationInMintues < 60) {
    endTimeInput.classList.replace("border-black", "border-danger");
    endTimeError.innerText = "A reservation has to be atleast 1 hour";
    endTimeError.style.visibility = "visible";
    numberOfError++;
  } else if (durationInMintues > 300) {
    endTimeInput.classList.replace("border-black", "border-danger");
    endTimeError.innerText = "A reservation can not be longer than 5 hour";
    endTimeError.style.visibility = "visible";
    numberOfError++;
  }
  //Resturant give 40 mins leeway after closing time
  else if (durationAfterClosingInMintues > 40) {
    endTimeInput.classList.replace("border-black", "border-danger");
    endTimeError.innerText =
      "A reservation can only go 40 mintues over the closing time";
    endTimeError.style.visibility = "visible";
    numberOfError++;
  }

  //Check for number of people
  const numOfPeople = peopleInput.value;

  if (numOfPeople.length == 0) {
    peopleInput.classList.replace("border-black", "border-danger");
    peopleError.innerText =
      "You need to say how many people will you bring including you";
    peopleError.style.visibility = "visible";
    numberOfError++;
  } else if (parseInt(numOfPeople) != numOfPeople) {
    peopleInput.classList.replace("border-black", "border-danger");
    peopleError.innerText =
      "You must say the number of people in postive numbers without decimal";
    peopleError.style.visibility = "visible";
    numberOfError++;
  } else if (numOfPeople <= 0) {
    peopleInput.classList.replace("border-black", "border-danger");
    peopleError.innerText =
      "You must have at least 1 person to book a reservation";
    peopleError.style.visibility = "visible";
    numberOfError++;
  } else if (numOfPeople > 100) {
    peopleInput.classList.replace("border-black", "border-danger");
    peopleError.innerText = "The maximum number of people you can bring is 100";
    peopleError.style.visibility = "visible";
    numberOfError++;
  }

  //There is no check needed for event
  const isEvent = document.querySelector("#eventCheckbox").checked;

  //Check for comments
  const comment = commentsTextArea.value;

  if (comment.length > 5000) {
    commentsTextArea.classList.replace("border-black", "border-danger");
    commentError.innerText = "Your comment is too long";
    commentError.style.visibility = "visible";
    numberOfError++;
  }

  //All data has been validated
  if (numberOfError == 0) {
    window.confirm("Your reservation has been approved");
    console.log({
      Name: name,
      "Email address": email,
      "Phone number": phoneNumber,
      "Reservation date": date,
      "Reservation start time": startTime,
      "Reservation end time": endTime,
      "Number of people": numOfPeople,
      Event: isEvent,
      Comment: comment,
    });
  }
});
