import CONFIG from '../../globals/config';
import formatRupiah from '../../utils/format-rupiah';
import formatLineBreak from '../../utils/format-line-break';
import cartImage from '../../../public/images/cart_shop.png';

const itemProductTemplate = (product) => `
  <a href="/#/detail/${product.url}" class="group min-h-80">
    <div id="image-container" class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none">
    <img
      src="${product.image[0].filename ? CONFIG.BASE_IMAGE_URL + product.image[0].filename
    : 'https://picsum.photos/id/666/800/450?grayscale'}"
      alt="${product.title}"
      class="h-full w-full object-cover object-center"
      loading="lazy"
    />
    </div>
    <h3 class="pt-2 text-xl font-bold">
        ${product.title}
    </h3>
    <p class="text-sm">${formatRupiah(product.price)}</p>
  </a>
`;

const itemListProductTemplate = (product) => `
  <a href="/#/detail/${product.url}" id="${product.id}" class="group">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img src="${product.image[0].filename
    ? CONFIG.BASE_IMAGE_URL + product.image[0].filename
    : 'https://picsum.photos/id/666/800/450?grayscale'
}" alt="${product.title}"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
        loading="lazy"
      >
    </div>
    <h3 class="mt-4 text-sm text-gray-700">${product.title}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">${formatRupiah(product.price, true)}</p>
  </a>
`;

const detailProdukTemplate = (product) => `
  <div class="pt-20 pb-10 lg:pt-28">
    <nav aria-label="Breadcrumb" class="p-4 bg-white border rounded-md drop-shadow-sm">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="#/shop" class="mr-2 text-sm font-medium text-gray-900">Shop</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#/shop" aria-current="page" class="font-medium text-gray-900 hover:text-gray-600">${product.category}</a>
        </li>
      </ol>
    </nav>

    <h1 class="pt-8 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">${product.title}</h1>

    <div id="${product.id}" class="pt-6 flex flex-col gap-6 lg:flex-row">
      <div class="flex flex-col lg:flex-row gap-6 w-full">
        <div class="w-max flex items-center lg:items-start gap-6">
          <div
            data-te-animation-init
            data-te-animation-target="#jumbo"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="w-72 flex flex-col gap-4 md:w-96 md:flex-row">
            <div class="overflow-hidden h-72 w-full rounded-md">
              <img id="jumbo" src="" alt="${product.title}" loading="lazy"
                data-te-animation-init
                data-te-animation-start="onClick"
                data-te-animation-reset="true"
                data-te-animation="[fade-in_2s_ease-in-out]"
                class="h-full w-full object-cover object-center hover:scale-150 ease-in-out duration-300 transition-all cursor-zoom-in">
            </div>
            <div class="flex flex-row justify-between items-center md:flex-col">
              <div id="thumbnail" class="h-20 w-20 overflow-hidden rounded-md">
                <img id="image-thumbnail-1" src="" alt="${product.title}" loading="lazy"
                  class="w-full h-full object-cover object-center cursor-pointer hover:opacity-75">
              </div>
              <div id="thumbnail" class="h-20 w-20 overflow-hidden rounded-md">
                <img id="image-thumbnail-2" src="" alt="${product.title}" loading="lazy"
                  class="w-full h-full object-cover object-center cursor-pointer hover:opacity-75">
              </div>
              <div id="thumbnail" class="h-20 w-20 overflow-hidden rounded-md">
                <img id="image-thumbnail-3" src="" alt="${product.title}" loading="lazy"
                  class="w-full h-full object-cover object-center cursor-pointer hover:opacity-75">
              </div>
            </div>
          </div>
        </div>

        <!-- Deskripsi Produk -->
        <div class="flex flex-col justify-start w-full">
          <h2 class="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">Detail Produk</h3>
          <p class="text-base tracking-tight text-gray-900">Harga: ${formatRupiah(product.price)}</p>
          <p class="text-base tracking-tight text-gray-900">Kondisi: Baru</p>
          <div class="mt-4">
            <p class="text-base text-gray-600">${formatLineBreak(product.description)}</p>
          </div>
        </div>
      </div>

      <!-- Pilihan ukuran dan stok -->
      <div class="my-4 flex items-center justify-start h-full w-full lg:justify-end lg:w-1/3">
        <div class="p-4 border-2 border-primary rounded-md">
          <div class="">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900">Select size</h3>
            </div>

            <fieldset class="mt-4">
              <legend class="sr-only">Choose a size</legend>
              <div id="size" class="grid grid-cols-6 gap-2">
              </div>
            </fieldset>
          </div>

          <div class="mt-4">
            <div class="mt-4 flex flex-col items-center gap-4">
              <div class="flex justify-center items-center rounded-md border border-primary">
                <button id="minusButton" class="w-1/3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
                </button>
                <input id="defaultQty" type="text" aria-valuenow="1" aria-valuemin="1" role="spin-button" value="1"
                  class="w-1/3 text-center border-0">
                <button id="plusButton" class="w-1/3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
              <div class="font-bold">
                <p>
                  Stock : <span id="stock"> - </span>
                </p>
              </div>
            </div>
          </div>
          <button id="addToCart" type="submit"
            class="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Add to cart
          </button>
        </div>
      </div>
    </div>

    <!-- Review -->
    <div class="pt-12 pb-4 h-full">
      <h3 class="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">Reviews</h3>
      <div class="t-4 p-2 grid grid-rows-2 gap-6 lg:grid-cols-3 lg:grid-rows-1 lg:gap-8">
        <div id="reviewContainer" class="p-8 lg:col-span-2 w-full h-96 overflow-y-scroll bg-slate-100 rounded-md">
        </div>

        <!-- Menambahkan Review -->
        <div class="w-full bg-white">
          <div class="p-4 border rounded-md">
            <div class="flex flex-col mb-4">
              <label for="name" class="block mb-1 text-sm font-medium leading-6 text-gray-900">Name</label>
              <input type="text" id="name" class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
            </div>
            <div class="flex flex-col mb-8">
              <label for="review" class="block mb-1 text-sm font-medium leading-6 text-gray-900">Review</label>
              <textarea id="review" style="white-space: pre-wrap" class="w-full h-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"></textarea>
            </div>
            <button type="submit" id="add-review" class="text-white font-medium py-2 px-4 rounded-md bg-green-500 hover:bg-primary">Add review</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const sizeProdukTemplate = (stock) => `
  <div class="flex items-center justify-center">
    <input type="radio" id="size-choice-${stock.id}" name="size-choice" value="${stock.stock}" placeholder="${stock.size.name}" class="hidden peer">
    <label for="size-choice-${stock.id}" class="flex items-center justify-center h-10 w-10 p-2 text-gray-500 bg-white border border-gray-200 rounded-md drop-shadow-sm cursor-pointer peer-checked:border-gray-600 peer-checked:text-gray-900 peer-checked:bg-gray-100 peer-checked:font-medium hover:text-gray-600 hover:bg-gray-100">
      <p>${stock.size.name}</p>
    </label>
  </div>
`;

const reviewProdukTemplate = (review) => `
  <div class="py-2 px-4 mb-6 border rounded-md bg-white drop-shadow-sm">
    <div
      class="flex items-center gap-2">
      <img
        src="https://ui-avatars.com/api/?name=${review.name}"
        class="rounded-full h-10 shadow-md"
        alt="woman avatar" />
      <div class="flex-col items-center p-2">
        <p
          class="text-xl font-semibold text-neutral-800 flex items-center justify-center gap-1">
          ${review.name}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 fill-primary">
            <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
        </p>
        <p
          class="text-xs font-semibold text-neutral-500">
          ${review.date}
        </p>
      </div>
    </div>
    <div class="mt-2">
      <p
        class="font-light text-neutral-500">
        ${formatLineBreak(review.review)}
      </p>
    </div>
  </div>
`;

const reviewElementTemplate = (review) => `
  <div id="carousel-item-${review.id}" class="hidden duration-700 ease-in-out">
    <figure class="max-w-screen-md mx-auto">
      <svg class="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
      </svg> 
      <blockquote>
        <p class="text-2xl font-medium text-gray-900">"${review.review}"</p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
        <div class="flex items-center divide-x-2 divide-gray-500">
          <div class="pr-3 font-medium text-gray-900 dark:text-white">${review.name}</div>
          <div class="pl-3 text-sm font-light text-gray-500">${review.date}</div>
        </div>
      </figcaption>
    </figure>
  </div>
`;

const cartNotifTemplate = (cartProduct) => `
  <p class="absolute -right-3 -top-7 h-5 w-5 text-xs text-center text-white border rounded-full bg-secondary">${cartProduct}</p>
`;

const cartNotifMobileTemplate = (cartProduct) => `
  <p class="absolute -right-1 -top-3 h-5 w-5 text-xs text-center text-white border rounded-full bg-secondary">${cartProduct}</p>
`;

const cartProductTemplate = (cart) => `
  <div id="${cart.id}" class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    <img id="image" src="${
  cart.product.image[0].filename
    ? CONFIG.BASE_IMAGE_URL + cart.product.image[0].filename
    : 'https://picsum.photos/id/666/800/450?grayscale'
}" alt="${
  cart.product.title
}" loading="lazy" class="w-full h-80 sm:h-40 sm:w-44 object-cover object-enter rounded-lg"/>  
      <div class="mt-4 w-full flex justify-between md:mt-0">
        <div class="ml-4 gap-2">
          <h2 class="text-xl font-bold text-gray-900">${cart.product.title}</h2>
          <p class="text-sm italic text-gray-700">${cart.product.category.name}</p>
          <p class="text-lg text-gray-700 font-medium">Size: ${cart.size}</span></p>
        </div>
        <div class="flex justify-between">
          <div class="grid grid-rows-3 gap-2">
            <div class="flex items-center justify-end">
              <p id="subTotal" class="text-md">${formatRupiah(cart.product.price, true)}</p>
            </div>
            <div class="my-2 flex items-center justify-end border-gray-100">
              <button id="minusButton" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5"> - </button>
              <input id="qty" class="h-8 w-8 border bg-white text-center text-xs outline-none" value="${cart.qty}" min="1" />
              <button id="plusButton" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3"> + </button>
            </div>
            <div class="flex items-center justify-end">
              <button id="updateButton" class="text-xs text-white px-4 py-2 rounded-md bg-green-500 hover:bg-primary">Update cart</button>
            </div>
          </div>
          <div class="flex items-center justify-end ml-4">
            <button id="deleteCart" class="px-3 py-3 border-l">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  </div>
`;

const subTotalCartTemplate = (cart) => `
  <p id="sub" class="text-gray-700 text-right">${formatRupiah(cart.product.price * cart.qty, true)}</p>
`;

const totalCartTemplate = (subTotal) => `
  <p id="total" class="mb-1 text-lg font-bold">${formatRupiah(subTotal, true)}</p>
`;

const emptyCartTemplate = () => `
  <div class="text-center py-24 lg:py-2">
    <div class="flex justify-center items-center overflow-hidden">
      <img src="${cartImage}" class="object-center h-40 w-40 lg:h-56 lg:w-56">
    </div>
    <p class="pt-6 text-md font-semibold mb-4">Anda belum menambahkan barang ke keranjang</p>
    <div class="my-4">
      <a href="/#/shop"
        class="rounded-md bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-primary">
        Kembali ke Galery
      </a>
    </div>
  </div>
`;

const notFoundPageTemplate = () => `
  <div class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-primary">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="#/home" class="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Go back home</a>
        <a href="#/contact" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>

`;

const productNotFoundTemplate = () => `
  <div class="grid col-span-2 min-h-full place-items-center bg-white px-6 py-8 sm:py-12 md:col-span-3 lg:col-span-4 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-primary">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Produk tidak dapat ditemukan.</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Periksa kembali keyword yang anda masukkan.</p>
    </div>
  </div>
`;

const loadingTemplate = () => `
  <div class="grid col-span-2 min-h-full place-items-center bg-white px-6 py-8 sm:py-12 md:col-span-3 lg:col-span-4 lg:px-8">
    <div role="status" id="loading" class="w-full h-36 flex flex-col items-center justify-center">
      <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="mt-4">Loading...</span>
    </div>
  </div>
`;

const formCheckoutTemplate = () => `
  <div class="h-max pt-24 pb-10 flex justify-center">
    <div class="leading-loose">
      <div class="max-w-xl m-4 p-10 bg-white border rounded-md shadow-xl">
        <h1 class="mb-10 text-center text-2xl font-bold">Checkout</h1>
        <p class="text-gray-800 font-medium">Customer information</p>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="block text-sm text-gray-00" for="cus_name">Nama Depan</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded-md" id="firstName" name="cus_name" type="text" required="" placeholder="Nama Depan" aria-label="Name">
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="block text-sm text-gray-00" for="cus_name">Nama Belakang</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded-md" id="lastName" name="cus_name" type="text" required="" placeholder="Nama Belakang" aria-label="Name">
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="cus_email">E-mail</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-md" id="email" name="cus_email" type="email" required="" placeholder="Email" aria-label="Email">
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_phone">No.Telp/Hp</label>
          <input class="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded-md" id="phone" name="cus_phone" type="tel" required="" placeholder="Phone" aria-label="Phone">
        </div>
        <div class="mt-2">
          <label class="text-sm block text-gray-600" for="cus_address">Alamat</label>
          <textarea class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-md" id="address" name="cus_address" type="text" required="" placeholder="Alamat" aria-label="Address"></textarea>
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="block text-sm text-gray-600" for="cus_city">Kota</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-md" id="city" name="cus_city" type="text" required="" placeholder="City" aria-label="City">
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="block text-sm text-gray-600" for="cus_zip">Kode Pos</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-md" id="zipcode" name="cus_zip" type="text" required="" placeholder="Kode Pos" aria-label="Zip">
        </div>
        <p class="mt-4 text-gray-800 font-medium">Metode pembayaran</p>
        <div class="">
          <label class="block text-sm text-gray-600" for="payment">Pilihan Pembayaran</label>
          <select class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-md" id="paymentOption" name="cus_name" required="" aria-label="Payment Metode">
            <option id="payment-choice"value="DANA">DANA</option>
            <option id="payment-choice"value="BRI">BRI</option>
            <option id="payment-choice"value="COD">COD</option>
          </select>
        </div>
        <div class="mt-4">
          <button id="paymentButton" class="px-4 py-1 text-white font-medium tracking-wider bg-green-500 rounded-md hover:bg-primary" type="submit">Bayar Sekarang</button>
        </div>
      </div>
    </div>
  </div>
`;

const transactionTemplate = (result) => `
  <div class="flex items-center justify-center w-full">
    <div id="${result.id}" class="p-4 m-4 rounded-md shadow-lg">
      <h1 class="font-bold text-xl text-center">Transaksi Berhasil</h1>
      <div class="my-4 flex justify-between">
        <p class="font-bold">Nomor Transaksi</p>
        <p class="font-medium">${result.trs_number}</p>
      </div>
      <hr class="border-dashed border-slate-400">
      <div class="mt-4 flex justify-center">
        <table class="table-fixed border-separate border-spacing-2">
          <thead>
            <tr>
              <th class="font-bold">Nama Barang</th>
              <th class="font-bold">QTY</th>
              <th class="font-bold">Harga Satuan</th>
              <th class="font-bold">Sub Total</th>
            <tr>
          </thead>
          <tbody id="detailInvoice" class=""></tbody>
        </table>
      </div>
      <hr class="border-dashed border-slate-400">
      <div id="totalInvoice"></div>
      <hr class="border-dashed border-slate-400">
      <div class="mt-4 text-center">
        <p class="text-xl">Galeri Pelajar Nusantara</p>
        <p class="font-bold">PC IPNU-IPPNU Kabupaten Kudus</p>
        <p class="font-xs mt-2">All Right Reserved.</p>
      </div>
    </div>
  </div>
`;

const detailInvoiceTemplate = (dataInvoice) => `
  <div id="print-area" class="p-5 border border-b border-gray-200">
    <div class="w-full grid justify-items-end">
      <p class="font-bold">INVOICE</p>
      <p class="text-xs">${dataInvoice.trs_number}</p>
      <p class="text-xs">${dataInvoice.createdAt}</p>
    </div>
    <div class="pt-2 flex gap-6">
      <div clas="w-1/2">
        <p class="font-bold">DITERBITKAN ATAS NAMA</p>
        <p>Galeri Pelajar Nusantara</p>
      </div>
      <div class="w-1/2">
        <p class="font-bold">UNTUK</p>
        <table id="customer-data" class="table-fixed">
        </table>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <table class="w-full table-auto">
        <thead class="border-y-2 border-gray-900 p-1">
          <tr>
            <th class="text-left">NAMA PRODUK</th>
            <th class="text-right">JUMLAH</th>
            <th class="text-right">HARGA SATUAN</th>
            <th class="text-right">TOTAL HARGA</th>
          </tr>
        </thead>
        <tbody id="data-produk-invoice" class="">
        </tbody>
      </table>
    </div>
    <div class="py-2 border-b">
      <table class="table-auto w-full">
        <tr>
          <td class="font-bold">
            TOTAL HARGA (<span id="container-total-barang"></span> BARANG)
          </td>
          <td id="container-total-harga" class="font-bold text-right"></td>
        </tr>
        <tr>
          <td class="font-bold">TOTAL TAGIHAN</td>
          <td id="container-total-tagihan" class="font-bold text-right"></td>
        </tr>
        <tr>
          <td class="italic text-neutral-400">Harga belum termasuk ongkos kirim</td>
        </tr>
      </table>
    </div>
    <div class="pt-2">
      <p class="font-bold">METODE PEMBAYARAN</p>
      <p id="payment-choice"></p>
    </div>
    <p class="pt-4 italic text-neutral-400">
      Invoice ini sah dan diproses oleh komputer. <br>
      Silahkan hubungi Kami melalui kontak yang tertera pada laman <a href="#/contact" target="_blank" class="text-green-500 font-bold">Contact</a> apabila Anda membutuhkan bantuan.
    </p>
  </div>
`;

const customerDataInvoiceTemplate = (dataCustomer) => `
  <tr class="flex items-start">
    <td>Pembeli</td>
    <td>:</td>
    <td class="font-bold uppercase">${dataCustomer.f_name} ${dataCustomer.l_name} <span class="font-normal">(${dataCustomer.phone})</span></td>
  </tr>
  <tr class="flex items-start">
    <td>Alamat</td>
    <td>:</td>
    <td>${dataCustomer.address} ${dataCustomer.zipcode}</td>
  </tr>
`;

const dataProdukInvoiceTemplate = (detail) => `
  <tr class="border-b">
    <td class="text-left">
      <div class="flex flex-col">
        <span class="font-semibold">${detail.title} (${detail.size})</span>
        <span class="italic">${detail.category.name}</span>
      </div>
    </td>
    <td class="text-right">${detail.qty}</td>
    <td class="text-right">${formatRupiah(detail.price, false)}</td>
    <td class="text-right">${formatRupiah(Number(detail.price) * (detail.qty), false)}</td>
  </tr>
`;

const skeletonTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="animate-pulse">
      <div class="aspect-h-1 aspect-w-1 w-full rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <div class="h-full w-full"></div>
      </div>
      <div class="mt-4 h-5 rounded-full bg-gray-200"></div>
      <div class="mt-4 h-6 rounded-full bg-gray-200"></div>
    </div>
    `;
  } return template;
};

const offlineNotifTemplate = () => `
  <div class="bg-red w-full">
    <p class="text-xs text-white">Tidak ada jaringan internet! (Offline)</p>
  </div>
`;

const onlineNotifTemplate = () => `
  <div class="bg-red w-full">
    <p class="text-xs text-white">Ada jaringan internet! (Online)</p>
  </div>
`;

export {
  itemProductTemplate,
  itemListProductTemplate,
  detailProdukTemplate,
  sizeProdukTemplate,
  reviewProdukTemplate,
  reviewElementTemplate,
  cartNotifTemplate,
  cartNotifMobileTemplate,
  cartProductTemplate,
  subTotalCartTemplate,
  totalCartTemplate,
  emptyCartTemplate,
  formCheckoutTemplate,
  notFoundPageTemplate,
  loadingTemplate,
  productNotFoundTemplate,
  transactionTemplate,
  detailInvoiceTemplate,
  customerDataInvoiceTemplate,
  dataProdukInvoiceTemplate,
  skeletonTemplate,
  offlineNotifTemplate,
  onlineNotifTemplate,
};
