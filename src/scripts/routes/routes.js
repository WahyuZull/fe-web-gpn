import Home from '../view/pages/shop/home';
import Detail from '../view/pages/shop/detail-produk';
import Shop from '../view/pages/shop/shop';
import Contact from '../view/pages/shop/contact';
import About from '../view/pages/shop/about';
import Cart from '../view/pages/shop/cart';
import Checkout from '../view/pages/shop/checkout';
import Transaction from '../view/pages/shop/transaction';
import Login from '../view/pages/shop/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/shop': Shop,
  '/contact': Contact,
  '/about': About,
  '/detail/:url': Detail,
  '/cart': Cart,
  '/checkout': Checkout,
  '/transaction/:url': Transaction,
  '/login': Login,
};

export default routes;
