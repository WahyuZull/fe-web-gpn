class PartnerElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="bg-slate-800 py-32 my-12 lg:my-16">
        <div class="container">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-3xl font-bold leading-8 text-primary" data-aos="fade-up">Our Partnership</h2>
            <div class="mx-auto mt-10 mb-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
              <a href="https://pelajarkudus.com" class="grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                <img data-aos="zoom-in" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/images/ipnuippnu-kudus.png" alt="Transistor" width="158" height="48">
              </a>
              <a href="https://pelajarkudus.com" class="grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                <img data-aos="zoom-in" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/images/pelajar-kudus-com.png" alt="Reform" width="158" height="48">
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('partner-element', PartnerElement);
