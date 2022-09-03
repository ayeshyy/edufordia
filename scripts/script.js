let navLinks = document.getElementById("links");
let mesageBtn = document.getElementById("messageBtn");
let nam = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let copyright = document.getElementById("copyright");

function hideMenu() {
  navLinks.style.right = "-200px";
}
function showMenu() {
  navLinks.style.right = "0";
}
//dynamic footer year;
function dynamicYear() {
  let year = new Date().getFullYear();
  copyright.innerHTML = `All rights reserved &copy; ${year}`;
}
dynamicYear();
// button handler;
mesageBtn.addEventListener("click", submitData);
function submitData() {
  let dataObj = {
    name: nam.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  nam.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  sessionStorage.setItem("data", JSON.stringify(dataObj));
  console.log(sessionStorage.getItem("data"));
}
