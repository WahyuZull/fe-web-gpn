import ProductResorce from '../data/product-source';
import { itemListProductTemplate, loadingTemplate, productNotFoundTemplate } from '../view/templates/template-creators';

const ButtonSearch = {
  async init({ keyword }) {
    this._keyword = keyword;
    await this._searchButton();
  },

  async _searchButton() {
    const keyword = this._keyword.value;
    if (keyword === '') {
      const result = await ProductResorce.getProductPage();
      const products = result.data.data;
      const productContainer = document.querySelector('#productContainer');
      productContainer.innerHTML = loadingTemplate();
      setTimeout(() => {
        productContainer.innerHTML = '';
        products.forEach((product) => {
          productContainer.innerHTML += itemListProductTemplate(product);
        });
      }, 1000);
    } else {
      const result = await ProductResorce.getProductByKeyword(keyword);
      const products = result.data.data;
      const productContainer = document.querySelector('#productContainer');
      productContainer.innerHTML = loadingTemplate();
      setTimeout(() => {
        productContainer.innerHTML = '';
        if (!products) {
          productContainer.innerHTML = productNotFoundTemplate();
        } else {
          products.forEach((product) => {
            productContainer.innerHTML += itemListProductTemplate(product);
          });
        }
      }, 1000);
    }
  },
};

export default ButtonSearch;
