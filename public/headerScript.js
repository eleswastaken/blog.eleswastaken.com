// this script was created because 
// i couldn't add event listeners to a button
// in the header in nextjs

const button = document.body.querySelector('#mobile-menu');
const nav = document.body.querySelector('header .nav-wrapper')

let isOpen = false;

button.addEventListener('click', (event) => {

  !isOpen ? openMenu(event) : closeMenu(event)

})

function openMenu(event) {
  document.body.style.overflow = 'hidden';

  isOpen = true;
  nav.style.display = 'flex';
  
  nav.addEventListener('click', closeMenu)
}

function closeMenu(event) {
  document.body.style.overflow = 'scroll';
  
  isOpen = false;
  nav.style.display = 'none';

  nav.removeEventListener('click', closeMenu)
}
