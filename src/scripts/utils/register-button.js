// eslint-disable-next-line import/no-extraneous-dependencies
import ProductResorce from '../data/product-source';

const RegisterButton = {
  async init({ username, email, password }) {
    this._username = username;
    this._email = email;
    this._password = password;
    await this._register();
  },

  async _register() {
    const username = this._username.value;
    const email = this._email.value;
    const password = this._password.value;
    const data = {
      username,
      email,
      password,
    };
    if (!username || !password || !email) {
      Swal.fire({
        text: 'Kolom tidak boleh kosong',
        icon: 'warning',
      });
    } else {
      await ProductResorce.register(data, (status, res) => {
        if (res.code === 200) {
          const messageActivation = document.querySelector('#message-activation');
          messageActivation.innerHTML = `
            <div class="bg-gray-100 p-4">
              <h2 class="text-xl font-semibold text-gray-900">${res.message}</h2>
              <p class="text-sm text-gray-700">
                Link aktivasi e-mail anda sudah dikirim, periksa kotak masuk e-mail anda atau folder spam anda. <br>
                Link hanya berlaku selama 5 menit. Segera lakukan aktivasi sebelum link kadaluarsa.
              </p>
            </div>
          `;
        } else {
          const errorRegister = document.querySelector('#errorRegister');
          errorRegister.innerHTML = (res.response.data.message);
        }
      });
    }
  },
};

export default RegisterButton;
