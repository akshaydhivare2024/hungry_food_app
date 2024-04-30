<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12">

        <transition appear enter-active-class="animated slower fadeInRight" leave-active-class="fadeInRight">
          <p class="bg-white text-h5 q-pa-md text-weight-bold shadow-5">Your Total Bill is : ₹ {{ totalAmount }}</p>
        </transition>
      </div>
      <div class="col-12 q-pa-md text-center">
        <transition appear enter-active-class="animated slower zoomIn" leave-active-class="zoomIn">
          <q-img src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" spinner-color="white"
            style=" width: 50%; margin-bottom: 30px; " class="" />
        </transition>
      </div>
      <transition appear enter-active-class="animated slower zoomIn" leave-active-class="zoomIn">
        <div class="col-12 q-pa-md text-center bg-white shadow-5">
          <p class=" text-h6">Your Item List :</p>
          <hr />
          <ul class="text-weight-bold">
            <li v-for="(item, index) in cartItem" :key="index" class="text-weight-bold flex justify-between">
              <span>&bull; {{ item.name }}</span> <span> ₹ {{ item.price }}</span>
            </li>
          </ul>
        </div>
      </transition>
      <div class="col-12 q-pa-md text-center q-xs-none">
        <q-btn push color="green" class="q-pa-md q-ma-md" rounded label="Download Bill" @click="downloadBill" />

        <q-btn push color="green" class="q-pa-md q-ma-md " rounded label="Back To Home" @click="backToHome" />
      </div>
    </div>
  </div>
</template>

<script setup>

import useCartStore from 'src/stores/cart';
import { useRouter } from 'vue-router';
import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { useQuasar } from 'quasar'
const $q = useQuasar();



const router = useRouter();

const store = useCartStore();
const totalAmount = store.totalAmount;
const cartItem = store.addCart;

// pdfMake.vfs = pdfFonts.pdfMake.vfs;


const generateBillContent = () => {


  if (!cartItem || cartItem.length === 0) {
    return [{ text: 'No items in the cart', fontSize: 14 }];
  }

  const tableBody = cartItem.map(item => {
    return [item.name, `₹${item.price}`];
  });

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  const content = [
    { text: 'Invoice', fontSize: 24, alignment: 'center', bold: true, margin: [0, 10] },
    { text: 'Your Item List :', fontSize: 16, bold: true, margin: [0, 10] },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, color: '#000' }], margin: [0, 5] },
    {
      table: {
        headerRows: 1,
        widths: ['*', 'auto'],
        body: [
          [{ text: 'Item Name', bold: true }, { text: 'Price', bold: true }],
          ...tableBody
        ]
      }
    },
    { text: 'Total Price: ₹' + totalPrice, fontSize: 14, margin: [0, 10] },
    { text: 'Payment Successful', fontSize: 14, bold: true, margin: [0, 10] },
    { text: 'Your order has been successfully processed. Thank you for choosing "Hungry" ! We hope you enjoy your meal. Please visit us again soon for more delicious options!', fontSize: 14, bold: true, margin: [0, 10] },
    // { image: '../assets/logo.png', alignment: 'center', width: 50, margin: [0, 20] }, // Company stamp image
    // { image: '../assets/logo.png', alignment: 'center', width: 550, margin: [0, 20] } // Signature image
    // { image: 'https://example.com/path-to-company-logo.png', alignment: 'center', width: 100, margin: [0, 20] }, // Company logo
    // { image: 'https://example.com/path-to-signature.png', alignment: 'center', width: 150, margin: [0, 20] } // Signature

  ];

  return content;
};



const downloadBill = async () => {

  try {

    $q.notify({
      message: 'Invoice has Downloaded !! please check in document folder.',
      icon: 'check_circle_outline',
      color: "positive",
      textColor: "white",
      timeout: 2000,
    })

    const content = generateBillContent();
    const docDefinition = { content };

    const pdfDoc = pdfMake.createPdf(docDefinition);

    const timestamp = Date.now(); // Generate a unique timestamp for the file name
    const fileName = `Hungry_Invoice_${timestamp}.pdf`;

    const pdfBase64 = pdfDoc.getBase64(async (data) => {
      await Filesystem.writeFile({
        path: fileName,
        data: data,
        directory: Directory.Documents,
        // encoding: Encoding.UTF8,
      });
    });

    // console.log("pdfBase64", pdfBase64);


    // await Filesystem.writeFile({
    //   path: 'Hungry_Invoice.pdf',
    //   data: pdfBase64,
    //   directory: Directory.Documents,
    //   // encoding: Encoding.UTF8,
    // });


    const fileUri = await Filesystem.getUri({
      directory: Directory.Documents,
      path: 'Hungry_Invoice.pdf',
    });

    console.log(fileUri);
    const fileUrl = fileUri.uri;
    window.location.href = fileUrl;

    if (!fileUri.uri) {
      console.error('Error: Unable to retrieve file URI.');
      return;
    }

    console('File saved successfully:', fileUrl);

    // Attempt to open the file using Capacitor Browser plugin
    await Browser.open({ url: fileUri.uri });

  } catch (error) {
    $q.notify({
      message: 'Error downloading bill. Please try again later.',
      icon: 'report_problem',
      color: 'negative',
      textColor: 'white',
      timeout: 3000,
    });
  }
};

const backToHome = () => {
  router.push('/home');
  cartItem.length = 0;
};
</script>

<style scoped></style>
