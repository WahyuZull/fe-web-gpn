const About = {
  async render() {
    return `
    <section class="bg-white mt-10">
    <div
      class="mx-auto max-w-2xl items-center py-24 px-4 sm:py32 lg:max-w-7xl lg:px-8"
    >
      <div class="flex lg:flex-row flex-col-reverse">
        <div class="w-full lg:w-2/3">
          <div class="mb-4">
            <h2
              id="about-title"
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Tentang kami
            </h2>
            <p class="mt-4 mb-10 text-gray-500 lg:text-lg">
              Kami adalah official Webshop PC IPNU-IPPNU Kabupaten Kudus <br />
              Kami menyediakan berbagai kebutuhan atribut Ke-IPNU-IPPNU-an
              melalui Lembaga Perekonomian IPNU Kab. Kudus<br />
            </p>
            <h3
              class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
            >
              Alamat kami
            </h3>
            <p class="mt-4 mb-10 text-gray-500 lg:text-lg">
              Kantor PC IPNU-IPPNU Kabupaten Kudus <br />
              Jl. Pramuka No.20 <br />
              Wergu Wetan, Kecamatan Kota <br />
              Kabupaten Kudus, Jawa Tengah 59318
            </p>
          </div>
          <p class="mt-4 mb-2 font-bold text-gray-900 lg:text-lg">
            Yuk! Ikuti sosial media Galeri Pelajar Nusantara!
          </p>
          <div class="flex gap-4">
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/galeripelajarnusantara/"
              target="_blank"
            >
              <svg
                role="img"
                class="fill-[#E4405F] h-10 w-10"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="https://web.facebook.com/galeripelajarnusantara"
              target="_blank"
            >
              <svg
                role="img"
                class="fill-[#1877F2] h-10 w-10"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="w-full mb-12 lg:w-1/3">
          <div class="flex flex-col items-center justify-center">
            <img
              class="h-36 w-auto mb-2 lg:h-52"
              src="/icons/gpn-icon.png"
              alt="Logo GPN"
            />
            <h1
              class="mt-8 font-body font-bold text-center tracking-tight text-gray-900 text-4xl lg:text-5xl"
            >
              <span
                class="font-script text-transparent p-2 bg-clip-text bg-gradient-to-tr from-secondary to-yellow-400 text-6xl lg:text-8xl"
                >Galeri</span
              > <br>
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-primary via-green-600 to-lightPrimary"
                >Pelajar</span
              >
              Nusantara
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    //
  },
};

export default About;
