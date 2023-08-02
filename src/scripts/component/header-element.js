import ProductResorce from '../data/product-source';
import { cartNotifTemplate, cartNotifMobileTemplate } from '../view/templates/template-creators';

class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <div id="header" class="fixed inset-x-0 top-0 z-50 drop-shadow-sm bg-white bg-opacity-80">
      <div class="container flex items-center justify-between p-3">
        <!-- Logo GPN -->
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 flex">
            <span class="sr-only">Galeri Pelajar Nusantara</span>
            <img
              class="h-8 w-auto"
              src="/icons/icon-gpn.png"
              alt="Logo GPN"
            />
            <p
              class="lg:hidden ml-3 self-center text-lg whitespace-nowrap font-body font-bold text-gray-900"
            >
              <span
                class="font-script text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-secondary to-yellow-400"
                >Galeri</span>
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-primary via-green-600 to-lightPrimary"
                >Pelajar</span>
              Nusantara
            </p>
          </a>
        </div>

        <!-- Humberger Button -->
        <div class="flex items-center lg:hidden">
          <button
            type="button"
            id="openMenu"
            class="block"
            aria-label="menu"
          >
            <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span class="hamburger-line transition duration-300 ease-in-out"></span>
            <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
        </div>

        <!-- Nav Menu -->
        <nav id="drawer" class="hidden lg:flex lg:gap-x-12">
          <a
            href="#/home"
            class="px-2.5 py-2.5 text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
            >Home</a
          >

          <a
            href="#/shop"
            class="px-2.5 py-2.5 text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
            >Shop</a
          >

          <a
            href="#/about"
            class="px-2.5 py-2.5 text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
            >About</a
          >

          <a
            href="#/contact"
            class="px-2.5 py-2.5 text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
            >Contact</a
          >
        </nav>

        <!-- mobile Menu -->
        <div
          id="mobile-menu"
          class="ease-in-out transition-all duration-300 absolute transform translate-x-full right-0 top-full w-[250px] h-screen bg-white py-5 px-5"
        >
          <ul class="block">
            <li class="group">
              <a
                href="#/home"
                class="py-4 px-4 flex text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home</a
              >
            </li>
            <li class="group">
              <a
                href="#/shop"
                class="py-4 px-4 flex text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                Shop</a
              >
            </li>
            <li class="group">
              <a
                href="#/about"
                class="py-4 px-4 flex text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                About</a
              >
            </li>
            <li class="group">
              <a
                href="#/contact"
                class="py-4 px-4 flex text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Contact</a
              >
            </li>
            <li class="group">
              <a
                href="#/cart"
                class="py-2.5 px-4 flex text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <div id="cartNotif" class="relative group"></div>
                Keranjang
              </a>
            </li>
            <li class="group">
              <a
                href="#/login"
                class="py-2 px-4 flex text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                Log in
              </a>
            </li>
          </ul>
        </div>

        <!-- Login -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#/cart" class="px-2.5 py-2.5 text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <div id="cartContainer" class="relative group"></div>
          </a>
          <a
            href="#/login"
            class="px-2.5 py-2.5 text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-secondary"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
    </div>
    `;

    const sessionId = localStorage.getItem('cartId');
    const carts = await ProductResorce.getCart(sessionId);
    const cartProduct = carts.data.data.length;

    const cartContainer = document.querySelector('#cartContainer');
    const cartNotif = document.querySelector('#cartNotif');
    if (cartProduct > 0) {
      cartContainer.innerHTML += cartNotifTemplate(cartProduct);
      cartNotif.innerHTML += cartNotifMobileTemplate(cartProduct);
    } else {
      cartContainer.innerHTML = '';
      cartNotif.innerHTML = '';
    }
  }
}

customElements.define('header-element', HeaderElement);
