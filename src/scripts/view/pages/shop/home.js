/* eslint-disable import/no-extraneous-dependencies */
import '../../../component/hero-element';
import '../../../component/spek-element';
import '../../../component/partner-element';
import '../../../component/promo-element';
import '../../../component/galeri-element';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductResorce from '../../../data/product-source';
import { itemProductTemplate, skeletonTemplate } from '../../templates/template-creators';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <spek-element></spek-element>
      <promo-element></promo-element>
      <partner-element></partner-element>
      <galeri-element></galeri-element>
    `;
  },

  async afterRender() {
    try {
      AOS.init({
        easing: 'ease-in-out',
      });
      const productContainer = document.querySelector('#productHomeContainer');
      productContainer.innerHTML = skeletonTemplate(12);

      const response = await ProductResorce.productHomeList();
      const products = response.data.data;
      productContainer.innerHTML = '';
      products.forEach((product) => {
        productContainer.innerHTML += itemProductTemplate(product);
      });
    } catch (err) {
      const productContainer = document.querySelector('#productHomeContainer');
      productContainer.innerHTML = skeletonTemplate(12);
    }
  },
};

export default Home;
