<template>
  <div class="q-pa-md row justify-between">
    <div class="col-8 q-py-md">
      <transition appear enter-active-class="animated slower fadeInLeft" leave-active-class="animated fadeInLeft">
        <p class="text-h3 text-weight-bold">Cart Page</p>
      </transition>
    </div>
    <div class="col-3 q-py-md flex justify-center q-items-center">
      <transition appear enter-active-class="animated slower fadeInRight" leave-active-class="fadeInRight">
        <q-btn push class="shadow-7 q-pa-md text-weight-bold" rounded dense color="green " label="Add Items" to="/menu"
          size="12px" />
      </transition>
    </div>

    <div class="col-12 q-py-md ">
      <transition appear enter-active-class="animated slower zoomIn" leave-active-class="zoomOut">
        <q-table class="my-sticky-dynamic shadow-7" rounded bordered title=" ITEMS :" :rows="rows" :columns="columns"
          :loading="loading" row-key="id" virtual-scroll :virtual-scroll-item-size="48"
          :virtual-scroll-sticky-size-start="48" :pagination="pagination" :rows-per-page-options="[0]"
          @virtual-scroll="onScroll" style="border-radius: 25px; max-height: 430px;">
          <template v-slot:body-cell-image="props">
            <q-td :props="props">
              <img :src="props.row.src" alt="Item" style="max-height: 50px;">
            </q-td>
          </template>
          <template v-slot:body-cell-delete-item="props">
            <q-td :props="props">
              <q-btn icon="close" rounded dense flat @click="removeFromCart(props.row)"
                class="cursor-pointer bg-red text-white" />
            </q-td>
          </template>
        </q-table>
      </transition>
    </div>
    <q-separator />
    <div class="col-12 text-right bg-white q-pa-md shadow-7" style="border-radius: 25px;">
      <transition appear enter-active-class="animated slower zoomIn" leave-active-class="zoomOut">
        <p class="text-h4">Total Amount : ₹ {{ totalAmount }}</p>
      </transition>
    </div>
    <div class="col-12 text-center  q-pa-md q-my-md">
      <transition appear enter-active-class="animated slower zoomIn" leave-active-class="zoomOut">
        <q-btn push rounded dense color="green" class="q-pa-md text-weight-bold shadow-7" label="Proceed To Buy"
          size="12px" :disable="!cartItem.length" @click="paymentHandler" />
      </transition>
    </div>
  </div>
</template>

<script setup>
import useCartStore from 'src/stores/cart';
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router';

const $q = useQuasar();

const store = useCartStore();
const cartItem = store.addCart;
const removeItem = store.removeCart;
const router = useRouter();



const totalAmount = computed(() => store.totalAmount);


// console.log("store", store.totalAmount);

const onScroll = () => { };

// Define pagination
const pagination = ref({

  // Define pagination properties as needed
  page: 1,
  rowsPerPage: 6
  // other properties...
})
// Define reactive properties
const loading = ref(false); // Set initial value as needed


const removeFromCart = (row) => {
  $q.notify({
    message: 'Item is Removed From Cart SucessFully !!',
    icon: 'check_circle_outline',
    color: "red",
    name: "arrow_upward",
    textColor: "white",
    icon: "check_circle",
    timeout: 100,
  })
  removeItem(row.id);
  store.updateTotalAmount(); // Update totalAmount after removing item
};


const columns = [
  {
    name: 'name',
    required: true,
    label: '#Id',
    align: 'left',
    field: 'id',
    format: val => `${val}`,
    sortable: true,
  },
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'image', align: 'left', label: 'Image', field: 'src', sortable: true },
  { name: 'price', align: 'left', label: 'Price', field: 'price' },
  {
    name: 'delete-item',
    align: 'left',
    label: 'Delete Item',
    field: 'delete',
    sortable: false,

  }
];

const rows = computed(() => cartItem.map((item, index) => ({
  id: item.id,
  name: item.name,
  src: item.src,
  price: item.price,
  index: index + 1
})));

const paymentHandler = () => {
  router.push('/payment');
}

</script>

<style scoped></style>
