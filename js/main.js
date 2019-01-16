// Grab the nav menu items //

const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
// const menuItems = document.querySelector('.menu-items');
const navItem = document.querySelectorAll('.nav-item');

// Flip that burger //

const burger = document.querySelector('.burgerMenu');

// Flip the logo too, why not? //

const logoBox = document.getElementById('logoBox');

let showMenu = false;

burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    burger.classList.add('flipped');
    showMenu = true;
    menu.classList.add('show');
    menuNav.classList.add('show');
    logoBox.classList.add('showLogo');
    navItem.forEach(item => item.classList.add('show'));
  } else {
    burger.classList.remove('flipped');
    showMenu = false;
    burger.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    logoBox.classList.remove('showLogo');
    navItem.forEach(item => item.classList.remove('show'));
  }
}
