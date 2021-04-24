const burgerEl = document.querySelector('.header-top__burger');
const menuWrapEl = document.querySelector('.header-top__nav');

burgerEl.addEventListener('click', function(event) {
  menuWrapEl.classList.toggle('header-top__nav_visible');
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 3,
        spaceBetween: 30
      }},
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('.switch').addEventListener('change', (event) => {
  if (event.target.nodeName === 'checkbox') {
    console.log('hello');
  }
});