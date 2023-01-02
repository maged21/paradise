let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
  menu.classList.toggle('bx');
  navbar.classList.toggle('open');
}

//stop propagation on the side nav element
// menu.onclick = function(e) {
//   e.stopPropagation()
// }

// //close menu when document is clicked
// document.onclick = function() {
//   menu.classList.remove('open');
// }

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    0:{
        slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    }
  },
});