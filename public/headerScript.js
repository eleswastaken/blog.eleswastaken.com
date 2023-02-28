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
  console.log('menu opened')

  isOpen = true;
  nav.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  nav.addEventListener('click', closeMenu)
}

function closeMenu(event) {
  console.log('menu closed')
  
  isOpen = false;
  nav.style.display = 'none';
  document.body.style.overflow = 'scroll';

  nav.removeEventListener('click', closeMenu)
}
