/* eslint-disable no-return-assign */
import axios from 'axios';
import Swal from 'sweetalert2';
import ProductResorce from '../../../data/product-source';
import paymentButton from '../../../utils/payment';
import { emptyCartTemplate, formCheckoutTemplate } from '../../templates/template-creators';

const Checkout = {
  async render() {
    return `
      <div id="checkoutPage" class="container"></div>
    `;
  },

  async afterRender() {
    const sessionId = localStorage.getItem('cartId');
    const result = await ProductResorce.getCart(sessionId);
    const checkoutForm = document.querySelector('#checkoutPage');
    const counter = result.data.data.length;
    if (counter > 0) {
      checkoutForm.innerHTML += formCheckoutTemplate();
      const bayar = document.querySelector('#paymentButton');
      bayar.addEventListener('click', async (e) => {
        e.preventDefault();
        paymentButton.init({
          sessionId,
        });
      });
    } else {
      checkoutForm.innerHTML += emptyCartTemplate();
    }
  },
};

export default Checkout;
