// eslint-disable-next-line import/no-extraneous-dependencies
import ProductResorce from '../data/product-source';

const DeleteCartButton = {
  async init({ id }) {
    this._id = id;
    await this._deleteCart(this._id);
  },

  async _deleteCart(id) {
    const result = await ProductResorce.deleteCart(id);
    if (result.data.code === 200) {
      await Swal.fire({
        text: 'Berhasil menghapus barang dari keranjang',
        icon: 'success',
      });
    } else {
      await Swal.fire({
        text: 'Gagal menghapus barang dari keranjang',
        icon: 'warning',
      });
    }
    await window.location.reload();
  },
};

export default DeleteCartButton;
