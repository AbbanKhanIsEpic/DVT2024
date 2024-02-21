document.querySelector("#confirmButton").addEventListener(("click"), function(){

    //Check for name
    const name = document.querySelector("#nameInput").value;

    if(name.length == 0){
        alert("You have to enter a name");
    }

    //Check for email
    const email = document.querySelector("#emailInput").value;

    const atPosition = email.lastIndexOf("@");

    if(email.length == 0){
        alert("You have to enter an email");
    }
    else if(email.length < 6 || email.length > 254){
        alert("You have to enter a correct email")
    }
})