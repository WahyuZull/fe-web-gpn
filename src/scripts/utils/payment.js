import ProductResorce from '../data/product-source';

const paymentButton = {
  async init({ sessionId }) {
    this._sessionId = sessionId;
    await this._payment();
  },

  async _payment() {
    const sessionId = this._sessionId;
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    const city = document.querySelector('#city').value;
    const zipcode = document.querySelector('#zipcode').value;
    const paymentChoice = document.querySelectorAll('#payment-choice');
    let selectedPayment;
    // eslint-disable-next-line no-restricted-syntax
    for (const payment of paymentChoice) {
      if (payment.selected) {
        selectedPayment = payment.value;
      }
    }

    const data = {
      f_name: firstName,
      l_name: lastName,
      email,
      phone,
      address,
      city,
      zipcode,
      payment_choice: selectedPayment,
    };

    if (!firstName
          || !lastName
          || !email
          || !phone
          || !address
          || !city
          || !zipcode
          || !paymentChoice) {
      Swal.fire({
        text: 'Kolom tidak boleh kosong!',
        icon: 'warning',
      });
    } else {
      try {
        const result = await ProductResorce.checkoutProduct(sessionId, data);
        if (result.data.code === 200) {
          window.location = `/#/transaction/${result.data.data.trs_number}`;
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
};

export default paymentButton;
