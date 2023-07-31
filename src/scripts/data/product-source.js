// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class ProductResorce {
  static async productHomeList() {
    try {
      const response = await axios.get(API_ENDPOINT.HOME);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getProductPage() {
    try {
      const response = await axios.get(API_ENDPOINT.SHOP);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async detailProduct(id) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getReviewElement() {
    try {
      const response = await axios.get(API_ENDPOINT.REVIEW);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getProductByKeyword(keyword) {
    try {
      const response = await axios.get(API_ENDPOINT.SEARCH(keyword));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async addReview(id, review) {
    try {
      const response = await axios.post(
        API_ENDPOINT.ADDREVIEW(id),
        review,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  static async addToCart(cart) {
    try {
      const response = await axios.post(API_ENDPOINT.ADDTOCART, { cart });
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getCart(sessionId) {
    try {
      const response = await axios.get(API_ENDPOINT.VIEWCART(sessionId));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async deleteCart(id) {
    try {
      const response = await axios.delete(API_ENDPOINT.DELETECART(id));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async updateCart(id, qty) {
    try {
      const response = await axios.put(API_ENDPOINT.UPDATECART(id), { qty });
      return response;
    } catch (error) {
      return error;
    }
  }

  static async checkoutProduct(sessionId, data) {
    try {
      const response = await axios.post(
        API_ENDPOINT.CHECKOUT(sessionId),
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getTransaction() {
    try {
      const response = await axios.get(API_ENDPOINT.TRANSACTION);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getDetailTransaction(trsNumber) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAILTRANSACTION(trsNumber));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getDetailInvoice(trsId) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAILINVOICE(trsId));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async loginAdmin(data) {
    const response = await axios.post(API_ENDPOINT.LOGIN, data);
    return response;
  }

  static async welcome(token) {
    const response = await axios.post(API_ENDPOINT.WELCOME, token, {
      headers: {
        'x-access-token': token,
      },
    });
    return response;
  }
}

export default ProductResorce;
