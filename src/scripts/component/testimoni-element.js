// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from 'flowbite';

class TestimoniElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section>
      <div class="relative mx-auto w-full py-16 px-4 text-center sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" data-carousel="static">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary),white)] opacity-20"></div>
        <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimoni</h2>
        
        <div class="relative w-full h-full mt-10">
          <!-- Carousel wrapper -->
          <div id="reviewContianer" class="relative h-80 overflow-hidden rounded-lg xl:h-80 2xl:h-96">
          </div>
        </div>
        <!-- Slider controls -->
        <button id="data-carousel-prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg class="w-5 h-5 text-gray-600 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button id="data-carousel-next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg class="w-5 h-5 text-gray-600 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </section>
    `;

    // const items = [
    //   {
    //     position: 0,
    //     el: document.getElementById('carousel-item'),
    //   },
    //   {
    //     position: 1,
    //     el: document.getElementById('carousel-item'),
    //   },
    //   {
    //     position: 2,
    //     el: document.getElementById('carousel-item'),
    //   },
    //   {
    //     position: 3,
    //     el: document.getElementById('carousel-item'),
    //   },
    // ];

    // const options = {
    //   // defaultPosition: 1,
    //   interval: 5000,
    // };

    // const carousel = new Carousel(items, options);
    // carousel.cycle();

    // const prevButton = document.getElementById('data-carousel-prev');
    // const nextButton = document.getElementById('data-carousel-next');

    // prevButton.addEventListener('click', () => {
    //   carousel.prev();
    // });

    // nextButton.addEventListener('click', () => {
    //   carousel.next();
    // });
  }
}

customElements.define('testimoni-element', TestimoniElement);
