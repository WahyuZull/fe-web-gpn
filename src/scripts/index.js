/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import '../styles/styles.css';
import swRegister from './utils/sw-register';
import App from './view/app';
import './component/header-element';
import './component/footer-element';
import './component/loading-element';
import 'flowbite';
import randomId from './utils/random-id';
// import swRegister from './utils/sw-register';

if (!localStorage.getItem('cartId')) {
  localStorage.setItem('cartId', randomId(32));
}

const app = new App({
  button: document.querySelector('#openMenu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  const loadingElement = document.querySelector('#loading-element');
  loadingElement.classList.remove('hidden');
  setTimeout(() => {
    loadingElement.classList.add('hidden');
  }, 700);
  app.renderPage();
});

window.addEventListener('load', () => {
  const loadingElement = document.querySelector('#loading-element');
  setTimeout(() => {
    loadingElement.classList.add('hidden');
  }, 700);
  app.renderPage();
  swRegister();
  if (!navigator.onLine) {
    Swal.fire({
      title: 'Tidak ada jaringan!',
      text: 'Anda sedang Offline',
      icon: 'warning',
      toast: true,
      position: 'top-start',
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
});

window.addEventListener('offline', () => {
  Swal.fire({
    title: 'Tidak ada jaringan!',
    text: 'Anda sedang Offline',
    icon: 'warning',
    toast: true,
    position: 'top-start',
    showCloseButton: true,
    showConfirmButton: false,
  });
});

window.addEventListener('online', () => {
  Swal.fire({
    title: 'Ada jaringan!',
    text: 'Anda kembali Online',
    icon: 'success',
    toast: true,
    position: 'top-start',
    showCloseButton: true,
    showConfirmButton: false,
  });
});

const openMenu = document.querySelector('#openMenu');
const mobileMenu = document.querySelector('#mobile-menu');
openMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  openMenu.classList.toggle('hamburger-active');
});

window.addEventListener('click', (e) => {
  if (e.target !== mobileMenu) {
    mobileMenu.classList.add('translate-x-full');
    openMenu.classList.remove('hamburger-active');
  }
});
