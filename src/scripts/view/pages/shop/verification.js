import ProductResorce from '../../../data/product-source';
import UrlParser from '../../../routes/url-parser';
import SendCodeButton from '../../../utils/send-code';

const Verification = {
  async render() {
    return `
      <section class="pt-16 pb-8 bg-gray-50">
        <div class="container">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="-m-1.5 p-1.5 flex-col justify-center">
              <img
                class="h-8 w-auto mb-2"
                src="/images/icon-gpn.png"
                alt="Logo GPN"
              />
            </a>
            <p
              class="mb-4 self-center text-2xl whitespace-nowrap font-body font-bold text-gray-900"
            >
              <span
                class="font-script text-4xl text-transparent p-2 bg-clip-text bg-gradient-to-tr from-secondary to-yellow-400"
                >Galeri</span>
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-primary via-green-600 to-lightPrimary"
                >Pelajar</span>
              Nusantara
            </p>
            <div id="successMessage" class="mt-12 p-6 w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const verifyToken = url.url;

    const successMessage = document.querySelector('#successMessage');
    await ProductResorce.verifyRegister(verifyToken, (status, res) => {
      if (res.code === 200) {
        successMessage.innerHTML = `
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Berhasil Verifikasi E-mail
              </h1>
              <div class="space-y-4 md:space-y-6">
                <p class="text-md leading-loose">
                  ${res.message} <br>
                  Terima kasih telah memverifikasi e-mail anda. Selanjutnya anda dapat login dengan akun anda.<br>
                  Selamat berbelanja di toko kami.
                <p>
                <a href="#/login" class="p-2.5 text-white flex items-center justify-center bg-primary rounded-md font-semibold hover:bg-lightPrimary">
                  Login &rarr;
                </a>
              </div>
            </div>
          `;
      } else {
        successMessage.innerHTML = `
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Gagal Verifikasi E-mail
            </h1>
            <div class="space-y-4 md:space-y-6">
              <p class="text-md leading-loose">
                ${res.response.data.message}
              <p>
              <button id="send-verify-again" class="p-2.5 text-white flex items-center justify-center bg-primary rounded-md font-semibold hover:bg-lightPrimary">
                Kirim ulang kode verifikasi
              </button>
            </div>
          </div>
        `;
        const username = res.response.data.data;
        const sendCodeAgain = document.querySelector('#send-verify-again');
        sendCodeAgain.addEventListener('click', async (e) => {
          e.preventDefault();
          SendCodeButton.init({
            username,
          });
        });
      }
    });
  },
};

export default Verification;
