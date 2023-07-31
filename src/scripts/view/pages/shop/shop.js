import '../../../component/banner-element';
import ProductResorce from '../../../data/product-source';
import { itemListProductTemplate, skeletonTemplate } from '../../templates/template-creators';
import ButtonSearch from '../../../utils/search-button';

const Shop = {
  async render() {
    return `
      <banner-element></banner-element>
      <section class="bg-white">
        <div class="w-full items-center sm:px-6 py-8 lg:px-4">
          <div class="mt-8 container">
            <h1 class="font-body font-bold text-center tracking-tight text-gray-900 text-4xl lg:text-6xl">
              <span
                class="font-script text-transparent p-2 bg-clip-text bg-gradient-to-tr from-secondary to-yellow-400 text-6xl lg:text-8xl"
                >Galeri</span>
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-primary via-green-600 to-lightPrimary"
                >Pelajar</span>
              Nusantara
            </h1>
            <div class="pt-16 pb-8 flex items-center justify-center">
              <div class="relative mb-4 flex w-[350px] flex-wrap items-stretch">
                <input
                  id="inputSearch"
                  type="search"
                  class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search button" />

                <!--Search button-->
                <button
                  class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  type="button"
                  id="searchButton"
                >
                Search
                </button>
              </div>
            </div>
            <div class="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-12 sm:pt-8 lg:max-w-7xl lg:px-8">
              <div
                id="productContainer"
                class="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
                ${skeletonTemplate(16)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const res = await ProductResorce.getProductPage();
      const products = res.data.data;

      const productContainer = document.querySelector('#productContainer');
      productContainer.innerHTML = '';
      products.forEach((product) => {
        productContainer.innerHTML += itemListProductTemplate(product);
      });

      const keyword = document.querySelector('#inputSearch');
      const searchButton = document.querySelector('#searchButton');
      searchButton.addEventListener('click', async () => {
        ButtonSearch.init({
          keyword,
        });
      });
    } catch (err) {
      const productContainer = document.querySelector('#productContainer');
      productContainer.innerHTML = skeletonTemplate(16);
    }
  },
};

export default Shop;
