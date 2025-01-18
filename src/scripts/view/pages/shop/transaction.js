/* eslint-disable import/no-extraneous-dependencies */
import { Accordion } from 'flowbite';
import printJS from 'print-js';
import UrlParser from '../../../routes/url-parser';
import ProductResorce from '../../../data/product-source';
import formatRupiah from '../../../utils/format-rupiah';
import { customerDataInvoiceTemplate, dataProdukInvoiceTemplate, detailInvoiceTemplate } from '../../templates/template-creators';

const Transaction = {
  async render() {
    return `
      <div id="transactionContainer" class="pt-20 pb-32">
        <div class="p-4 mx-auto max-w-2xl">
          <div class="flex justify-center text-Primary">
            <iframe src="https://embed.lottiefiles.com/animation/137095"></iframe>
          </div>
          <h1 class="font-bold text-2xl text-center leding-loose tracking-wide">Transaksi Berhasil</h1>  
          <div class="mt-8 flex justify-start gap-8 lg:gap-12">
            <p class="font-bold">Nomor Transaksi</p>
            <div class="flex items-center">
              <p id="numberTransaction" class="font-medium mr-2"></p>
              <button id="print-button" class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5 fill-neutral-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                </svg>
                <span class="italic text-neutral-400">*cetak invoice</span>
              </button>
            </div>
          </div>
          <div id="accordion-collapse" data-accordion="collapse" class="pt-4">
            <p id="accordion-collapse-heading">
              <button type="button" class="flex items-center justify-between w-full p-2 font-medium text-left text-gray-500 border border-b border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body" aria-expanded="true" aria-controls="accordion-collapse-body">
                <span>Detail Invoice</span>
                <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </p>
            <div id="accordion-collapse-body" class="text-xs lg:text-base" aria-labelledby="accordion-collapse-heading">
            </div>
          </div>
          <div class="flex justify-center gap-12 mt-12">
            <a id="confirmText" href="" target="_blank"
              class="px-3 py-2 text-white text-sm bg-green-500 rounded-md hover:bg-primary">Konfirmasi Pesanan</a>
            <a href="/#/shop" class="px-3 py-2 text-sm border border-primary rounded-md">Back to Shop</a>
          </div>
          <hr class="mt-12">
          <p class="pt-1 text-sm text-neutral-400"><span class="uppercase">*</span>
            Cetak/simpan invoice ini sebagai bukti pembayaran dengan menekan tombol cetak yang berada di samping nomor invoice atau screen capture pada perangkat (HP/Laptop) anda.
          </p>
          <p class="pt-1 text-sm text-neutral-400"><span class="uppercase">**</span>
            Segera lakukan pembayaran lalu konfirmasi pembayaran dan pesanan Anda melalui tombol diatas.
          </p>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const trsNumber = url.url;

    const numberTransaction = document.querySelector('#numberTransaction');
    numberTransaction.innerText = trsNumber.toUpperCase();

    const accordionsItem = [
      {
        id: 'accordion-collapse-heading',
        triggerEl: document.querySelector('#accordion-collapse-heading'),
        targetEl: document.querySelector('#accordion-collapse-body'),
        active: true,
      },
    ];

    const options = {
      alwaysOpen: false,
      activeClasses: 'bg-gray-100 text-gray-900',
      inactiveClasses: 'text-gray-500 dark:text-gray-400',
    };

    const accordion = new Accordion(accordionsItem, options);
    accordion.toggle('accordion-collapse-heading');

    const detailTransaction = await ProductResorce.getDetailTransaction(trsNumber);

    const dataInvoice = detailTransaction.data.data;
    const { dataCustomer } = detailTransaction.data.data;
    const detailPesanan = detailTransaction.data.data.details;
    console.log(dataInvoice, detailPesanan);

    const detilInvoice = document.querySelector('#accordion-collapse-body');
    detilInvoice.innerHTML = detailInvoiceTemplate(dataInvoice);

    const paymentChoice = document.querySelector('#payment-choice');
    paymentChoice.innerText = dataCustomer.payment_choice;

    const customerData = document.querySelector('#customer-data');
    customerData.innerHTML = customerDataInvoiceTemplate(dataCustomer);

    let totalBayar = 0;
    let totalBarang = 0;

    detailPesanan.forEach(async (detail) => {
      const dataProduk = document.querySelector('#data-produk-invoice');
      dataProduk.innerHTML += dataProdukInvoiceTemplate(detail);

      const subTotalHarga = Number(detail.price) * Number(detail.qty);
      totalBayar += subTotalHarga;
      const containerTotalHarga = document.querySelector('#container-total-harga');
      containerTotalHarga.innerHTML = formatRupiah(totalBayar, true);

      const subTotalBarang = Number(detail.qty);
      totalBarang += subTotalBarang;
      const containerTotalBarang = document.querySelector('#container-total-barang');
      containerTotalBarang.innerHTML = totalBarang;

      let totalTagihan = 0;
      totalTagihan = Number(totalBayar);
      const totalTagihanContainer = document.querySelector('#container-total-tagihan');
      totalTagihanContainer.innerHTML = formatRupiah(totalTagihan, true);

      const detailInvoice = () => `Produk:%20*${detail.title}*%0DUkuran:%20*${detail.size}*%0DHarga%20satuan:%20*${formatRupiah(detail.price, true)}*%0DQTY:%20*${detail.qty}*%0D%0DMetode%20Pembayaran:%20*${dataCustomer.payment_choice}*%0DSubtotal%20Bayar:%20*${formatRupiah(subTotalHarga, true)}*%0D%0D
      `;
      const confirmText = document.querySelector('#confirmText');
      confirmText.href = `
        https://wa.me/+6285747852654?text=
        *Halo%20Admin%21*%0DSaya%20mau%20konfirmasi%20pesanan%20dengan%20Nomor%20Transaksi%20*${trsNumber.toUpperCase()}.*%0D%0DRincian%20Pesanan:%0D%0D${detailInvoice()}%0D*Total%20Pembayaran:%20${formatRupiah(totalBayar, true)}*%0D*Total%20Tagihan:%20${formatRupiah(totalTagihan, true)}*%0_DHarga%20belum%20termasuk%20ongkos%20kirim._
      `;
    });

    const printButton = document.querySelector('#print-button');
    printButton.addEventListener('click', () => {
      printJS({ printable: 'print-area', type: 'html' });
    });
  },
};

export default Transaction;
