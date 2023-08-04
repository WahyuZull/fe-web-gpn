// eslint-disable-next-line import/no-extraneous-dependencies
import ProductResorce from '../data/product-source';

const AddCartButton = {
  async init({ id }) {
    this._id = id;
    await this._addToCart(this._id);
  },

  async _addToCart() {
    const qty = document.querySelector('#defaultQty').value;
    const sizes = document.querySelectorAll('input[type="radio"][name="size-choice"]');
    const stock = document.querySelector('#stock').innerHTML;
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
      size_id: selectedSize,
      sessionId: localStorage.getItem('cartId'),
    };
    if (!selectedSize) {
      Swal.fire({
        text: 'Pilih size terlebih dahulu!',
        icon: 'warning',
      });
    } else if (qty > stock) {
      Swal.fire({
        text: 'Jumlah melebihi stok yang ada!',
        icon: 'warning',
      });
    } else {
      const cart = await ProductResorce.addToCart(data);
      if (cart.data.code === 200) {
        await Swal.fire({
          text: 'Berhasil menambahkan produk ke keranjang',
          icon: 'success',
        });
      } else {
        await Swal.fire({
          text: 'Gagal menambahkan barang ke keranjang',
          icon: 'error',
        });
      }

      window.location.reload();
    }
  },
};

export default AddCartButton;
