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




const SwitchThemeEl = document.querySelector('.switch .slider');
const htmlEl = document.querySelector('html')

SwitchThemeEl.addEventListener('click', function(event) {

if (htmlEl.dataset.mode === 'black') {
  htmlEl.dataset.mode = 'light';
  localStorage.setItem ('theme', 'light');
} else {
  htmlEl.dataset.mode = 'black';
  localStorage.setItem ('theme', 'black');
}
  /* htmlEl.dataset.mode === 'black' ? htmlEl.dataset.mode = 'light' : htmlEl.dataset.mode = 'black'; */
})



window.onload = checkTheme ();
function checkTheme () {
  const localStorageTheme = localStorage.getItem ("theme");

  if (localStorageTheme !== null){
    htmlEl.dataset.mode = localStorageTheme;

    const ThemeSwitch = document.querySelector('.checkbox');
    ThemeSwitch.checked = true;
  }
}

const navbar = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
/* const themeSwitcher = document.querySelector ('.checkbox')
const htmlEl = document.querySelector('html')

themeSwitcher.cheked = true;
function clickHandled () {
  if  (this.cheked) {
  htmlEl.dataset.mode = '';
  htmlEl.dataset.mode = 'black';
  localStorage.setItem ('theme', 'dark');
} else {
  htmlEl.dataset.mode = 'light';
  localStorage.setItem ('theme', 'light');
}
}
themeSwitcher.addEventListener ("click", clickHandled); */


const contactsFormEl = document.querySelector('.contact__b-input-inner');
const formEmailEl = document.querySelector('.contact__input-field[name=email]');
const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

contactsFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  let isMailChecked = emailRegEx.test(formEmailEl.value);
  // console.log(isMailChecked);

  if(!isMailChecked) {
    formEmailEl.classList.add('error');

  } else {
    formEmailEl.classList.remove('error');
  }

});
const uname = document.querySelector('.contact__input-field[name="name"]');

contactsFormEl.addEventListener('submit', function allLetter(uname) {

const letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabetcharactersonly');
uname.focus();
return false;
}
});







/* const toTop = document.getElementsByClassName('.header').addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    this.classList.add('.header--scroll')
  }
});
toTop(); */