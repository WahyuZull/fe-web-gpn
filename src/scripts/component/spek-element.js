import layoutEmpat from '../../public/images/Layout-04.jpg';
import layoutDelapan from '../../public/images/Layout-08.jpg';
import layoutSepuluh from '../../public/images/Layout-10.jpg';
import layoutSebelas from '../../public/images/Layout-11.jpg';

class SpekElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="spek" class="bg-white py-40">
        <div class="container">
          <div class="pb-12" data-aos="fade-up">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Spesifikasi Produk
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Kami selalu menjaga kualitas dan kepuasan konsumen dalam berbagai
              produk kami. <br>
              Sehingga konsumen kembali untuk melakukan pemesanan
              pada kami.
            </p>
          </div>
          <div class="grid w-full grid-cols-2 gap-6 lg:gap-8 lg:grid-cols-4">
            <div class="group relative bg-gray-200" data-aos="fade-up">
              <div class="lg:h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                <img
                  src="${layoutEmpat}"
                  alt="gambar ilustrasi"
                  class="h-full w-full object-cover object-center group-hover:scale-125 ease-in-out transition"
                  loading="lazy"
                />
              </div>
              <div class="mt-4 p-4 absolute bottom-0 left-0 lg:bottom-4 lg:left-2">
                <h3 class="font-bold text-xl text-white">Official Store</h3>
              </div>
            </div>
            <div class="group relative bg-gray-200" data-aos="fade-up">
              <div class="lg:h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                <img
                  src="${layoutDelapan}"
                  alt="gambar ilustrasi"
                  class="h-full w-full object-cover object-center group-hover:scale-125 ease-in-out transition"
                  loading="lazy"
                />
              </div>
              <div class="mt-4 p-4 absolute bottom-0 left-0 lg:bottom-4 lg:left-2">
                <h3 class="font-bold text-xl text-white">Sesuai PO/PPA</h3>
              </div>
            </div>
            <div class="group relative bg-gray-200" data-aos="fade-up">
              <div class="lg:h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                <img
                  src="${layoutSebelas}"
                  alt="gambar ilustrasi"
                  class="h-full w-full object-cover object-center group-hover:scale-125 ease-in-out transition"
                  loading="lazy"
                />
              </div>
              <div class="mt-4 p-4 absolute bottom-0 left-0 lg:bottom-4 lg:left-2">
                <h3 class="font-bold text-xl text-white">Material Terbaik</h3>
              </div>
            </div>
            <div class="group relative bg-gray-200" data-aos="fade-up">
              <div class="lg:h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                <img
                  src="${layoutSepuluh}"
                  alt="gambar ilustrasi"
                  class="h-full w-full object-cover object-center group-hover:scale-125 ease-in-out transition"
                  loading="lazy"
                />
              </div>
              <div class="mt-4 p-4 absolute bottom-0 left-0 lg:bottom-4 lg:left-2">
                <h3 class="font-bold text-xl text-white">Aksesoris Menarik</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('spek-element', SpekElement);
