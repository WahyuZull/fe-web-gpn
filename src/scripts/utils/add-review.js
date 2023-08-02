import ProductResorce from '../data/product-source';

const AddReviewButton = {
  async init({ id }) {
    this._id = id;
    await this._addReview();
  },

  async _addReview() {
    const id = this._id;
    const nameReviewer = document.querySelector('#name').value;
    const review = document.querySelector('#review').value;
    const data = {
      name: nameReviewer,
      review,
      product_id: id,
    };

    await ProductResorce.addReview(id, data);
    await Swal.fire({
      text: 'Berhasil menambahkan review',
      icon: 'success',
    });
    window.location.reload();
  },
};

export default AddReviewButton;
