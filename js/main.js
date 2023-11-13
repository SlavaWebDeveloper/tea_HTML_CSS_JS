const headerMenuBtn = document.querySelector('.header__menu-btn');
const headerMenuClose = document.querySelector('.header__menu__close');
const headerMenuList = document.querySelector('.header__list');
const menuShadow = document.querySelector('.menu__close');

headerMenuBtn.addEventListener('click', () => {
  headerMenuList.classList.toggle('header__list-open');
  menuShadow.classList.toggle('menu__open');
});

headerMenuClose.addEventListener('click', () => {
  headerMenuList.classList.remove('header__list-open');
  menuShadow.classList.remove('menu__open');
});
