class GaleriElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="galeri" class="bg-white">
        <div class="container">
          <div class="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 data-aos="zoom-in" class="text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl">
              <span
                class="font-script text-transparent p-2 bg-clip-text bg-gradient-to-tr from-secondary to-yellow-400 text-6xl lg:text-8xl"
                >Galeri</span> Kami
            </h2>
            <div
              id="productHomeContainer"
              class="mx-auto pt-8 max-w-2xl grid grid-cols-2 gap-6 sm:px-6 sm:gap-x-6 lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 xl:grid-cols-4"
            >
            </div>
            <div class="text-center">
              <button
                class="my-12 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-lightPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightPrimary"
              >
                <a href="#/shop">See more <span aria-hidden="true"> → </span></a>
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('galeri-element', GaleriElement);
