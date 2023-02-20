const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const button = document.querySelector('.home-btn');
const contactMenu = document.querySelector('.contact-modal');
const closeContact = document.querySelector('.bx-x')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

function toggleMenu() {
  if (contactMenu.classList.contains('ativo')) {
  contactMenu.classList.add('animate__backOutLeft');

  contactMenu.addEventListener('animationend', () => {
    contactMenu.classList.remove('ativo', 'animate__backOutLeft');
  }, { once: true });

  } else {
    contactMenu.classList.add('ativo', 'animate__backInLeft');

    contactMenu.addEventListener('animationend', () => {
        contactMenu.classList.remove('animate__backInLeft');
  });
  }
}

button.addEventListener('click', (toggleMenu));
closeContact.addEventListener('click', (toggleMenu));
  