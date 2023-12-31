import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

class BannerElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="bg-white pt-[64px]">
      <div id="image-carousel" class="relative">
        <div class="swiper">
          <!-- Carousel wrapper -->
          <div class="swiper-wrapper">
            <!-- Item 1 -->
            <div class="swiper-slide">
              <img loading="lazy" src="/images/Banner Web GPN-01.jpg" alt="banner satu" class="h-full w-full object-cover object-center">
            </div>
            <!-- Item 2 -->
            <div class="swiper-slide">
              <img loading="lazy" src="/images/Banner Web GPN-02.jpg" alt="banner dua" class="h-full w-full object-cover object-center">
            </div>
            <!-- Item 3 -->
            <div class="swiper-slide">
              <img loading="lazy" src="/images/Banner Web GPN-03.jpg" alt="banner tiga" class="h-full w-full object-cover object-center">
            </div>
          </div>
        </div>
        <!-- Slider controls -->
        <button id="prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button id="next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
      </div>
    </section>
    `;

    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '#next',
        prevEl: '#prev',
      },
    });
    swiper.enable();
  }
}

customElements.define('banner-element', BannerElement);
