// eslint-disable-next-line import/no-extraneous-dependencies
import api from '../globals/api';
import API_ENDPOINT from '../globals/api-endpoint';

class ProductResorce {
  static async productHomeList() {
    try {
      const response = await api.get(API_ENDPOINT.HOME);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getProductPage() {
    try {
      const response = await api.get(API_ENDPOINT.SHOP);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async detailProduct(id) {
    try {
      const response = await api.get(API_ENDPOINT.DETAIL(id));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getProductByKeyword(keyword) {
    try {
      const response = await api.get(API_ENDPOINT.SEARCH(keyword));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async addReview(id, review) {
    try {
      const response = await api.post(API_ENDPOINT.ADDREVIEW(id), review);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async addToCart(cart) {
    try {
      const response = await api.post(API_ENDPOINT.ADDTOCART, cart);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getCart(sessionId) {
    try {
      const response = await api.get(API_ENDPOINT.VIEWCART(sessionId));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async deleteCart(id) {
    try {
      const response = await api.delete(API_ENDPOINT.DELETECART(id));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async updateCart(id, qty) {
    try {
      const response = await api.put(API_ENDPOINT.UPDATECART(id), { qty });
      return response;
    } catch (error) {
      return error;
    }
  }

  static async checkoutProduct(sessionId, data) {
    try {
      const response = await api.post(API_ENDPOINT.CHECKOUT(sessionId), data);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getDetailTransaction(trsNumber) {
    try {
      const response = await api.get(API_ENDPOINT.DETAILTRANSACTION(trsNumber));
      return response;
    } catch (error) {
      return error;
    }
  }

  static async login(data, callback) {
    await api.post(API_ENDPOINT.LOGIN, data)
      .then((res) => {
        callback(true, res.data);
      }).catch((err) => {
        callback(false, err);
      });
  }

  static async logout(callback) {
    await api.post(API_ENDPOINT.LOGOUT)
      .then((res) => {
        callback(true, res.data);
      }).catch((err) => {
        callback(false, err);
      });
  }

  static async register(data, callback) {
    await api.post(API_ENDPOINT.REGISTER, data)
      .then((res) => {
        callback(true, res.data);
      }).catch((err) => {
        callback(false, err);
      });
  }

  static async verifyRegister(token, callback) {
    await api.post(API_ENDPOINT.VERIFICATION(token))
      .then((res) => {
        console.log(res);
        callback(true, res.data);
      }).catch((err) => {
        callback(false, err);
      });
  }

  static async sendCode(username, callback) {
    await api.post(API_ENDPOINT.SENDCODEAGAIN, username)
      .then((res) => {
        callback(true, res.data);
      }).catch((err) => {
        callback(false, err);
      });
  }
}

export default ProductResorce;
