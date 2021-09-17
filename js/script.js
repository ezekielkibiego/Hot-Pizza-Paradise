window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// welcome to Tomato's Pizzaria v2.0 with SASS
const button = document.querySelector('.nav-button');
const menu = document.querySelector('nav');
button.addEventListener('click', () => {
  menu.classList.toggle('visible');
});