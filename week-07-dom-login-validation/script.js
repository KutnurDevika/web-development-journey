const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@gmail.com" && password === "1234") {
    message.style.color = "green";
    message.innerText = "Login Successful!";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid Email or Password!";
  }
});
