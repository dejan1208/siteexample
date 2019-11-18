const mobileMenu = document.getElementById('mobile-menu');
const menuItems = document.getElementById('menu');
const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const show1 = document.getElementById('click-show-1');
const show2 = document.getElementById('click-show-2');

mobileMenu.addEventListener('click', menuShown);
dropdown1.addEventListener('click', dropdownShown1);
dropdown2.addEventListener('click', dropdownShown2);

function menuShown(){
  menuItems.classList.toggle('hide');
  menuItems.classList.toggle('flex--mobile');
}

function dropdownShown1(){
  show1.classList.toggle('hide');
}

function dropdownShown2(){
  show2.classList.toggle('hide');
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var square = document.getElementsByClassName("square");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < square.length; i++) {
      square[i].className = square[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  square[slideIndex-1].className += " active";
}















