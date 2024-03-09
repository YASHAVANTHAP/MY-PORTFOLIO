var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.toggle("active");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active_tab");
  }
  event.currentTarget.classList.add("active_tab");
  document.getElementById(tabname).classList.add("active_tab");
}
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let Intervalid = null;

document.addEventListener("DOMContentLoaded", initializeslider);
function initializeslider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    Intervalid = setInterval(forwslide, 3000);
  }
}
function showslide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevslide() {
  clearInterval(Intervalid);
  slideIndex--;
  showslide(slideIndex);
}
function forwslide() {
  slideIndex++;
  showslide(slideIndex);
}
var sidemenu = document.getElementById("ledt");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwfOUh_AcHO1lINs3KS9Edp3VwWtjmBSc4_iyunwBc9Ws-_Drx5LZSzFBPfz0ulRIWU/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully !!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
