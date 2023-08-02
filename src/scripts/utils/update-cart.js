import ProductResorce from '../data/product-source';

const UpdateCartButton = {
  async init({ id, qty }) {
    this._id = id;
    this._qty = qty;
    await this._updateCart(this._id, this._qty);
  },

  async _updateCart(cartId, qty) {
    console.log(qty, cartId);
    const result = await ProductResorce.updateCart(cartId, qty);
    await Swal.fire({
      text: 'Berhasil mengubah data keranjang',
      icon: 'success',
    });
    window.location.reload();
  },
};

export default UpdateCartButton;
