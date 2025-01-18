// eslint-disable-next-line import/no-extraneous-dependencies
import ProductResorce from '../../../data/product-source';
import UrlParser from '../../../routes/url-parser';
import {
  detailProdukTemplate,
  reviewProdukTemplate,
  sizeProdukTemplate,
} from '../../templates/template-creators';
import AddCartButton from '../../../utils/add-cart';
import AddReviewButton from '../../../utils/add-review';
import CONFIG from '../../../globals/config';

const Detail = {
  async render() {
    return `
    <div id="container" class="container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await ProductResorce.detailProduct(url.url);
    const product = response.data.data;
    const images = product.image;
    const reviews = product.review;
    const { stocks } = product;

    const imageGalery = images[0].filename;
    const thumbnailSatu = images[0].filename;
    const thumbnailDua = images[1].filename;
    const thumbnailTiga = images[2].filename;

    const productContainer = document.querySelector('#container');
    productContainer.innerHTML = detailProdukTemplate(product);

    const jumbo = document.querySelector('#jumbo');
    const imageThumbnailSatu = document.querySelector('#image-thumbnail-1');
    const imageThumbnailDua = document.querySelector('#image-thumbnail-2');
    const imageThumbnailTiga = document.querySelector('#image-thumbnail-3');
    jumbo.src = `${imageGalery ? CONFIG.BASE_IMAGE_URL + imageGalery : 'https://picsum.photos/id/666/800/450?grayscale'}`;
    imageThumbnailSatu.src = `${thumbnailSatu ? CONFIG.BASE_IMAGE_URL + thumbnailSatu : 'https://picsum.photos/id/666/800/450?grayscale'}`;
    imageThumbnailDua.src = `${thumbnailDua ? CONFIG.BASE_IMAGE_URL + thumbnailDua : 'https://picsum.photos/id/666/800/450?grayscale'}`;
    imageThumbnailTiga.src = `${thumbnailTiga ? CONFIG.BASE_IMAGE_URL + thumbnailTiga : 'https://picsum.photos/id/666/800/450?grayscale'}`;

    jumbo.addEventListener('click', () => {
      Swal.fire({
        html: `<img id="jumbo" src="${jumbo.src}" alt="" loading="lazy"
        class="h-full w-full object-cover object-center">`,
        showConfirmButton: false,
        showCloseButton: true,
      });
    });

    const thumbnail = document.querySelectorAll('#thumbnail');
    thumbnail.forEach((thumb) => {
      thumb.addEventListener('click', (e) => {
        jumbo.src = e.target.src;
      });
    });

    const sizeContainer = document.querySelector('#size');
    const stockContainer = document.querySelector('#stock');
    let stockTotal = 0;
    stocks.forEach((stock) => {
      stockTotal += Number(stock.stock);
      stockContainer.innerHTML = stockTotal;
      sizeContainer.innerHTML += sizeProdukTemplate(stock);

      const sizes = document.querySelectorAll('input[type="radio"][name="size-choice"]');
      // eslint-disable-next-line no-restricted-syntax
      for (const size of sizes) {
        if (size.value === '0') {
          size.setAttribute('disabled', true);
          size.nextElementSibling.classList.remove('hover:text-gray-600', 'hover:bg-gray-100', 'text-gray-500', 'bg-white');
          size.nextElementSibling.classList.add('text-gray-600', 'bg-gray-100', 'hover:cursor-not-allowed');
        }
        size.addEventListener('click', () => {
          stockContainer.innerHTML = size.value;
        });
      }
    });

    const reviewContainer = document.querySelector('#reviewContainer');
    reviews.forEach((review) => {
      reviewContainer.innerHTML += reviewProdukTemplate(review);
    });

    const minusButton = document.querySelector('#minusButton');
    const plusButton = document.querySelector('#plusButton');
    const qty = document.querySelector('#defaultQty');

    minusButton.addEventListener('click', (e) => {
      e.preventDefault();
      const currentValue = Number(qty.value) || 0;
      if (qty.value <= 1) {
        Swal.fire({
          text: 'Pembelian minimal 1 item',
          icon: 'warning',
        });
        return false;
      }
      // eslint-disable-next-line no-return-assign
      return qty.value = currentValue - 1;
    });

    plusButton.addEventListener('click', (e) => {
      e.preventDefault();
      const currentValue = Number(qty.value) || 0;
      qty.value = currentValue + 1;
    });

    const addToCartButton = document.querySelector('#addToCart');
    addToCartButton.addEventListener('click', async (e) => {
      e.preventDefault();
      AddCartButton.init({
        id: product.id,
      });
    });

    const addReview = document.querySelector('#add-review');
    addReview.addEventListener('click', async (e) => {
      e.preventDefault();
      AddReviewButton.init({
        id: product.id,
      });
    });
  },
};

export default Detail;
