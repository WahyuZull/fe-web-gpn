// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import ProductResorce from '../data/product-source';

const AddCartButton = {
  async init({ id }) {
    this._id = id;
    await this._addToCart(this._id);
  },

  async _addToCart() {
    const qty = document.querySelector('#defaultQty').value;
    const sizes = document.querySelectorAll('input[type="radio"][name="size-choice"]');
    let selectedSize;
    // eslint-disable-next-line no-restricted-syntax
    for (const size of sizes) {
      if (size.checked) {
        selectedSize = size.placeholder;
      }
    }
    const data = {
      product_id: this._id,
      qty,
      size: selectedSize,
      sessionId: localStorage.getItem('cartId'),
    };
    if (!selectedSize) {
      Swal.fire({
        text: 'Pilih size terlebih dahulu!',
        icon: 'warning',
      });
    } else {
      await ProductResorce.addToCart(data);
      await Swal.fire({
        text: 'Berhasil menambahkan barang ke keranjang',
        icon: 'success',
      });

      window.location.reload();
    }
  },
};

export default AddCartButton;
