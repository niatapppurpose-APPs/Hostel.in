let EmailId = document.getElementById("email");
let Password = document.getElementById("password");


//Login Things
function ManagementLogin(){
    let email = EmailId.value;
    let password = Password.value;

    let managementData = JSON.parse(localStorage.getItem("ManagementData")) || [];

    let isValidUser = managementData.some(function(user){
        return user.email === email && user.password === password;
    });

    

 if (isValidUser) {
  showToast("Login successful! Redirecting to dashboard...", "success");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
} else {
  showToast("Invalid email or password.", "error");
}

}


// Toast function
 function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "";  

  toast.classList.add("show", type);

  // Remove after 3s
  setTimeout(() => {
    toast.classList.remove("show", type);
  }, 3000);
}



document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    ManagementLogin();
});