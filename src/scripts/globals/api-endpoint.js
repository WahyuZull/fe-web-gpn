const API_ENDPOINT = {
  HOME: '/frontend/productHome/',
  SHOP: '/frontend/productPage/',
  SEARCH: (keyword) => `/frontend/productPage?keyword=${keyword}`,
  DETAIL: (url) => `/frontend/productDetail/${url}`,
  ADDREVIEW: (id) => `/frontend/review/add/${id}`,
  VIEWCART: (sessionId) => `/frontend/cart?sessionId=${sessionId}`,
  ADDTOCART: '/frontend/cart',
  DELETECART: (id) => `/frontend/cart/${id}`,
  UPDATECART: (id) => `/frontend/cart/${id}`,
  CHECKOUT: (sessionId) => `/frontend/cart/checkout?sessionId=${sessionId}`,
  DETAILTRANSACTION: (trsNumber) => `/frontend/transaction/${trsNumber}`,
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESHTOKEN: '/auth/refresh',
  REGISTER: '/auth/register',
  VERIFICATION: (token) => `/auth/verify/${token}`,
  SENDCODEAGAIN: '/auth/verify/send',
};

export default API_ENDPOINT;
