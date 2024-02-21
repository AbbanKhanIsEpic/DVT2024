document.querySelector("#confirmButton").addEventListener("click", function () {
  //Check for name
  const name = document.querySelector("#nameInput").value;

  if (name.length == 0) {
    alert("You have to enter a name");
  }

  //Check for email
  const email = document.querySelector("#emailInput").value;

  const atPosition = email.lastIndexOf("@");
  const dotPosition = email.lastIndexOf(".");

  //How is email validator work
  //The minimum length of email is 6 and the maximum length of email is 254
  //Every email has only 1 @ sign and have 1 or more . sign. The dot has to be after the @
  //Many mail-servers will not accept the email-address if there aren't at least 2 characters before the @

  const countAt = email.split("@").length - 1;

  const isEmailValid =
    //Length checker
    email.length > 6 &&
    email.length < 254 &&
    //@ logic
    atPosition > 2 &&
    countAt == 1 &&
    //The . has to be after the @
    dotPosition > atPosition;

  if (email.length == 0) {
    alert("You have to enter an email");
  } else if (!isEmailValid) {
    alert("You have to enter a correct email");
  }

  //Check for phone number
  const phoneNumber = document.querySelector("#phoneInput").value;

  if (phoneNumber.length == 0) {
    alert("You have to enter your phone number");
  } else if (!phoneNumber.length == 10) {
    alert("Your phone number does not have the correct length");
  } else if (
    !(phoneNumber.substring(0, 3) == "+27" || phoneNumber.charAt(0) == "0")
  ) {
    alert("You need to enter a correct South African cellphone number");
  }

  //Check for reservation date
  const dateString = document.querySelector("#dateInput").value;

  //This is a standard that you have to book a reservation 3 days and 5 hours in advance minimum
  const threeDaysAfterToday = new Date();
  threeDaysAfterToday.setDate(threeDaysAfterToday.getDate() + 3);
  threeDaysAfterToday.setHours(threeDaysAfterToday.getHours() + 5);

  const date = new Date(dateString);

  if (dateString.length == 0) {
    alert("You have to select a date");
  } else if (date < threeDaysAfterToday) {
    alert("You have to book 3 days and 5 hours in advance");
  }

  //Resturant give 40 mins leeway after closing time

  //Check for reservation start time
  const startTime = document.querySelector("#startTimeInput").value;
  const startHour = startTime.split(":")[0];
  const startMinutes = startTime.split(":")[1];

  if (startTime.length == 0) {
    alert("You have to select a time when you arrive");
  } else if (startHour < 9) {
    alert("The restaurant only opens at 9 am");
  } else if (startHour > 21) {
    alert("The restaurant closes at 9 pm");
  }

  //Check for reservation end time
  //Reservation duration is between 1 hour to 5 hours
  const endTime = document.querySelector("#endTimeInput").value;
  const endHour = endTime.split(":")[0];
  const endMinutes = endTime.split(":")[1];

  if (endTime.length == 0) {
    alert("You have to select a time when you arrive");
  } else if (endHour < startHour) {
    alert("Your end time must be after your start time");
  } else if (endHour == startHour) {
    alert("A reservation has to be atleast 1 hour");
  }

  //Check for number of people

  const numOfPeople = document.querySelector("#peopleInput").value;

  if (numOfPeople.length == 0) {
    alert("You need to say how many people will you bring including you");
  } else if (parseInt(numOfPeople) != numOfPeople) {
    alert("You must say the number of people in numbers without decimal");
  } else if (numOfPeople <= 0) {
    alert("You must have at least 1 person to book a reservation");
  }
});
