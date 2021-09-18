$("#form").on('submit',function(event){
  event.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("textarea#message").val();
  
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){
      alert ("Hi " + name + ", we have received your message. Thank you for being our number one customer.");
  }
  else {
      alert("Please provide your correct email address!");
  }
 
  $("#form")[0].reset();
});

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

