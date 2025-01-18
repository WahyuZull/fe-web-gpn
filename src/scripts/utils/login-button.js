// eslint-disable-next-line import/no-extraneous-dependencies
import jwtDecode from 'jwt-decode';
import ProductResorce from '../data/product-source';

const LoginButton = {
  async init({ username, password }) {
    this._username = username;
    this._password = password;
    await this._login();
  },

  async _login() {
    const username = this._username.value;
    const password = this._password.value;
    const data = {
      username,
      password,
    };
    if (!username || !password) {
      Swal.fire({
        text: 'Kolom tidak boleh kosong',
        icon: 'warning',
      });
    } else {
      const errorLogin = document.querySelector('#errorLogin');
      await ProductResorce.login(data, (status, res) => {
        if (res.code === 200) {
          errorLogin.innerHTML = '';
          const token = res.accessToken;
          const decoded = jwtDecode(token);
          const user = decoded.username;
          localStorage.setItem('token', token);
          localStorage.setItem('username', user);
          window.location.href = '#/shop/';
          window.location.reload();
        } else {
          errorLogin.innerHTML = (res.response.data.message);
        }
      });
    }
  },
};

export default LoginButton;
