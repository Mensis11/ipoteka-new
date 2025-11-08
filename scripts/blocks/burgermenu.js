export function burgerMenuInit() {
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header__burger-menu-button');
  const nav = document.querySelector('.header__navigation-two');

  burger.addEventListener('click', function () {
    nav.classList.toggle('is-open');
  });
});
}