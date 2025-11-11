let EmailId = document.getElementById("email");
let Password = document.getElementById("password");

function ManagementLogin(){
    let email = EmailId.value;
    let password = Password.value;

    let managementData = JSON.parse(localStorage.getItem("ManagementData")) || [];

    let isValidUser = managementData.some(function(user){
        return user.email === email && user.password === password;
    });

    if(isValidUser){
        alert("Login Successful");
        window.location.href = "#";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    ManagementLogin();
});