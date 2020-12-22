/* --------------- DOM VARIABLES -------------- */

const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const hamburger = document.querySelector('.hamburger');
const headerNavigator = document.querySelector('.header__navigator');

hamburger.addEventListener('click', () => {
  header.classList.toggle('display-nav');
  headerNavigator.classList.toggle('display-nav');
  headerLogo.classList.toggle('blur-logo');
});
