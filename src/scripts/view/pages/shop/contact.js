const Contact = {
  async render() {
    return `
    <section class="bg-white pt-12">
      <div class="flex flex-wrap py-16 px-4 sm:px-6 lg:px-8">
        <div class="mb-10 w-full px-4 lg:w-2/5">
          <h2 class="line2 mb-4 text-3xl font-bold text-gray-900">
            Kontak
          </h2>
          <h3
            class="mb-4 text-xl font-bold"
          >
            Hubungi Kami
          </h3>
          <p class="mb-4 font-medium text-gray-900">
            Senang rasanya dapat terhubung dengan anda. <br />
            Silahkan tinggalkan pesan anda.
          </p>

          <!-- Kontak WA -->
          <div>
            <a
              href="https://wa.me/6285747852654"
              target="_blank"
              class="mb-4 flex w-max flex-row items-center"
            >
              <div class="rounded-lg border bg-[#25D366] p-4 shadow-md">
                <svg
                  class="fill-white"
                  role="img"
                  width="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </div>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-dark">
                  WhatsApp (Admin 1)
                </h5>
                <p class="mb-2 font-semibold text-gray-600">
                  +62 8574 7852 654
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/6289619261113"
              target="_blank"
              class="mb-4 flex w-max flex-row items-center"
            >
              <div class="rounded-lg border bg-[#25D366] p-4 shadow-md">
                <svg
                  class="fill-white"
                  role="img"
                  width="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </div>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-dark">
                  WhatsApp (Admin 2)
                </h5>
                <p class="mb-2 font-semibold text-gray-600">
                  +62 8961 9261 113
                </p>
              </div>
            </a>

            <!-- Kontak E-mail -->
            <a
              href="mailto:lapakpelajarkudus@gmail.com"
              target="_blank"
              class="flex w-max flex-row items-center"
            >
              <div class="rounded-lg border bg-[#EA4335] p-4 shadow-md">
                <svg
                  class="fill-white"
                  role="img"
                  width="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Gmail</title>
                  <path
                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                  />
                </svg>
              </div>
              <div class="flex flex-col justify-between px-4 leading-normal">
                <h5 class="text-bold mb-2 text-xl font-bold tracking-tight">
                  Email
                </h5>
                <p class="mb-2 font-semibold text-gray-600">
                  lapakpelajarkudus@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="mt-12 mb-10 w-full px-4 lg:w-3/5 lg:border-l-2">
          <h3
            class="mb-4 text-xl font-bold text-dark"
          >
            Tinggalkan Pesan Anda
          </h2>
          <p class="text-medium mb-12 font-medium text-gray-900 md:text-lg">
            Kami akan segera membalas pesan anda
          </p>
          <form>
            <div class="group relative z-0 mb-6 w-full">
              <input
                type="text"
                name="floating_first_name"
                id="full-name"
                class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:text-white"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary"
                >Nama Lengkap</label
              >
            </div>
            <div class="group relative z-0 mb-6 w-full">
              <input
                type="email"
                name="floating_email"
                id="email"
                class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary dark:text-gray-400"
                >Email</label
              >
            </div>
            <div class="group relative z-0 mb-6 w-full">
              <textarea
                name="textarea"
                id="message"
                rows="2"
                class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
                required
              ></textarea>
              <label
                for="floating_textarea"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary dark:text-gray-400"
                >Masukkan pesan anda</label
              >
            </div>
            <a
              id="send-button"
              href=""
              target="_blank"
              class="w-full rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary sm:w-auto"
            >
              Kirim
            </a>
          </form>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const fullName = document.querySelector('#full-name').value;
    const message = document.querySelector('#message').value;

    const sendButton = document.querySelector('#send-button');
    sendButton.href = `mailto:lapakpelajarkudus@gmail.com&body=${fullName}%20${message}`;
  },
};

export default Contact;
