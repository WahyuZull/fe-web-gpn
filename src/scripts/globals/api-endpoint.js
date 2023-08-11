import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/frontend/productHome/`,
  SHOP: `${CONFIG.BASE_URL}/frontend/productPage/`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}/frontend/productPage?keyword=${keyword}`,
  DETAIL: (url) => `${CONFIG.BASE_URL}/frontend/productDetail/${url}`,
  ADDREVIEW: (id) => `${CONFIG.BASE_URL}/review/add/${id}`,
  VIEWCART: (sessionId) => `${CONFIG.BASE_URL}/cart?sessionId=${sessionId}`,
  ADDTOCART: `${CONFIG.BASE_URL}/cart`,
  DELETECART: (id) => `${CONFIG.BASE_URL}/cart/${id}`,
  UPDATECART: (id) => `${CONFIG.BASE_URL}/cart/${id}`,
  CHECKOUT: (sessionId) => `${CONFIG.BASE_URL}/cart/checkout?sessionId=${sessionId}`,
  TRANSACTION: `${CONFIG.BASE_URL}/transaction`,
  DETAILTRANSACTION: (trsNumber) => `${CONFIG.BASE_URL}/transaction/${trsNumber}`,
  DETAILINVOICE: (trsId) => `${CONFIG.BASE_URL}/transaction/invoice/${trsId}`,
  LOGIN: `${CONFIG.BASE_URL}/auth/login`,
  WELCOME: `${CONFIG.BASE_URL}/welcome`,
  SIZE: (id) => `${CONFIG.BASE_URL}/size/${id}`,
};

export default API_ENDPOINT;
