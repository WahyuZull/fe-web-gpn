import ProductResorce from '../data/product-source';

const SendCodeButton = {
  async init({ username }) {
    this._username = username;
    await this._sendCode();
  },

  async _sendCode() {
    const username = this._username;
    await ProductResorce.sendCode(username, (status, res) => {
      if (status === true && res.code === 200) {
        successMessage.innerHTML = `<div class="p-6">${res.message}</div>`;
      } else {
        successMessage.innerHTML = `<div class="p-6">${res.response.data.message}</div>`;
      }
    });
  },
};

export default SendCodeButton;
