// const nav = document.querySelector("#header");

// window.addEventListener ("scroll", function() {
//   nav.classList.toggle ("sticky", window.scrollY > 0);
// }) ;

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}

function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}