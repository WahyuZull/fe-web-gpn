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
      const response = await ProductResorce.loginAdmin(data);
      const result = response.data.data;
      const { token } = result;

      const res = await ProductResorce.welcome(token);
      console.log(res);
      if (response.data.code === 200) {
        window.location = '/#/shop/';
      }
    }
  },
};

export default LoginButton;
