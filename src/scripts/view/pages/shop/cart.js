/* eslint-disable no-return-assign */
import ProductResorce from '../../../data/product-source';
import {
  cartProductTemplate,
  emptyCartTemplate,
  subTotalCartTemplate,
  totalCartTemplate,
} from '../../templates/template-creators';
import formatRupiah from '../../../utils/format-rupiah';
import DeleteCartButton from '../../../utils/delete-cart';
import UpdateCartButton from '../../../utils/update-cart';

const Cart = {
  async render() {
    return `
      <div class="h-max pt-24 pb-10">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div id="cartProductContainer" class="rounded-lg md:w-2/3">        
          </div>
          <!-- Sub total -->
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
                <div id="subTotalContainer">
                </div>
            </div>
            <hr class="my-4" />
            <div>
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div id="totalHarga">
                  <p id="total" class="mb-1 text-lg font-bold">Rp 0</p>
                </div>
              </div>
              <div class="pt-2 flex justify-between">
                <p class="text-sm italic text-neutral-400"><span class="uppercase">*</span>Harga belum termasuk ongkos kirim.</p>
              </div>
            </div>
            <a href="/#/checkout">
              <button type="submit" class="mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-white hover:bg-primary">Check out</button>
            </a>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const sessionId = localStorage.getItem('cartId');
    const response = await ProductResorce.getCart(sessionId);
    const carts = response.data.data;

    const cartProductContainer = document.querySelector(
      '#cartProductContainer',
    );
    if (carts.length === 0) {
      cartProductContainer.innerHTML += emptyCartTemplate();
    } else {
      const subTotalContainer = document.querySelector('#subTotalContainer');
      const totalBayarContainer = document.querySelector('#totalHarga');

      let totalHarga = 0;
      carts.forEach((cart) => {
        totalHarga += (cart.product.price * cart.qty);
        cartProductContainer.innerHTML += cartProductTemplate(cart);
        subTotalContainer.innerHTML += subTotalCartTemplate(cart);
        totalBayarContainer.innerHTML = totalCartTemplate(totalHarga);

        const deleteButton = document.querySelectorAll('#deleteCart');
        deleteButton.forEach((del) => {
          del.addEventListener('click', async (e) => {
            const id = e.target.parentElement.parentElement
              .parentElement.parentElement.parentElement.getAttribute('id');
            DeleteCartButton.init({
              id,
            });
          });
        });

        const updateButton = document.querySelectorAll('#updateButton');
        updateButton.forEach((el) => {
          el.addEventListener('click', async (e) => {
            e.preventDefault();
            const id = e.target.parentElement.parentElement
              .parentElement.parentElement.parentElement.getAttribute('id');
            const qty = e.target.parentElement
              .previousElementSibling.previousElementSibling
              .children[1].value;
            UpdateCartButton.init({
              id,
              qty,
            });
          });
        });
      });

      const minusButton = document.querySelectorAll('#minusButton');
      minusButton.forEach((el) => {
        el.addEventListener('click', (e) => {
          const currentValue = Number(e.target.nextElementSibling.value);
          if (e.target.nextElementSibling.value <= 1) {
            Swal.fire({
              text: 'Pembelian minimal 1 item',
              icon: 'warning',
            });
            return false;
          }
          return (e.target.nextElementSibling.value = currentValue - 1);
        });
      });

      const plusButton = document.querySelectorAll('#plusButton');
      plusButton.forEach((el) => {
        el.addEventListener('click', (e) => {
          const currentValue = Number(e.target.previousElementSibling.value);
          return (e.target.previousElementSibling.value = currentValue + 1);
        });
      });
    }
  },
};

export default Cart;
