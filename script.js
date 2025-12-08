const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
});
function validateLogin() {
  const userField = document.getElementById('username');
  const passField = document.getElementById('password');
  const errorMsg = document.getElementById('error-msg');
  if (userField.value === "" || passField.value === "") {
    errorMsg.style.display = "block";
    errorMsg.innerText = "Please fill in all fields";
  } else {
    errorMsg.style.display = "none";
    alert("Login Successful! Welcome, " + userField.value);
    window.location.href = "index.html"; 
  }
}