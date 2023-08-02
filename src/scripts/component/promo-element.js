class PromoElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="relative overflow-hidden bg-white">
        <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div class="relative px-4 sm:static sm:px-6 lg:px-8">
            <div class="sm:max-w-lg" data-aos="fade-up">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lengkapi stylemu sebagai Kader <span class="text-primary">IPNU-IPPNU</span></h2>
              <p class="mt-4 text-lg text-gray-500">Lihat koleksi style Kader IPNU-IPPNU dan style keren lainnya di galeri kami.</p>
            </div>
            <div>
              <div class="mt-10">
                <!-- Decorative image grid -->
                <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div class="flex items-center space-x-6 lg:space-x-8">
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" data-aos="fade-up-left">
                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="/images/Layout-01.jpg" alt="" class="h-full w-full object-cover object-center">
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="/images/Layout-02.jpg" alt="" class="h-full w-full object-cover object-center">
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" data-aos="fade-up-left">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="/images/Layout-03.jpg" alt="" class="h-full w-full object-cover object-center">
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="/images/Layout-04.jpg" alt="" class="h-full w-full object-cover object-center">
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="/images/Layout-05.jpg" alt="" class="h-full w-full object-cover object-center">
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" data-aos="fade-up-left">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="/images/Layout-06.jpg" alt="" class="h-full w-full object-cover object-center">
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="/images/Layout-07.jpg" alt="" class="h-full w-full object-cover object-center">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#galeri" 
              class="rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary"
              data-aos="fade-up"
            >
              Show Galeri <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('promo-element', PromoElement);
