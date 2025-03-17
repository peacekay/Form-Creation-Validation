document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

   

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        let isValid = true;
        let messages = [];

        if(username.length <3) {
            isValid = false;
            messages.push ("username is too short");
            // console.log ("error");
        }

        if(!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address");
        }

        if(password.length < 8) {
            isValid = false;
            messages.push("password is too short and insecured");
        }

        if(!isValid) {
            feedbackDiv.textContent = messages.join(" ");
            feedbackDiv.style.color = "red";
            console.log(messages);
        } else {
            feedbackDiv.textContent = "Form Submitted Successfully";
            feedbackDiv.style.color = "green";
            console.log("sucess");
        }

        

    } )

    
    

});