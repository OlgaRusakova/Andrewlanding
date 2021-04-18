const burgerEl = document.querySelector('.header-top__burger');
const menuWrapEl = document.querySelector('.header-top__nav');

burgerEl.addEventListener('click', function(event) {
  menuWrapEl.classList.toggle('header-top__nav_visible');
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});