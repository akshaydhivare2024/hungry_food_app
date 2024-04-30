<template>
  <div class="q-pa-md text-center">
    <div class="flex justify-between">
      <q-btn push color="green" class="q-ma-md" rounded label="Back" @click="backToPreviousPage" />
      <p class="text-weight-bold text-h2">Menu's</p>
    </div>

    <q-separator />

    <div class="row q-pa-md justify-evenly">
      <div v-for="menu1 in menuCategory" :key="menu1.id">
        <div class="col-2 col-xs-3">
          <transition appear enter-active-class="animated slower zoomIn" leave-active-class="animated zoomIn">
            <q-btn push color="green" class="q-my-md q-px-md" :label="menu1" @click="filterCategory(menu1)" rounded />
          </transition>
        </div>
      </div>
    </div>

    <div class="row justify-evenly">
      <div v-for="menu2 in menuitems" :key="menu2.id">
        <transition appear enter-active-class="animated slower zoomIn" leave-active-class="animated zoomIn">
          <div class="col-4 q-my-md">
            <q-card v-if="store.loading === true" class="my-card shadow-10 text-left" rounded
              style="border-radius: 25px; width: 330px">
              <q-card-actions horizontal>
                <q-skeleton type="QAvatar" width="170px" height="170px" animation="fade" />
                <q-card-actions align="left" class="q-gutter-md column">
                  <q-skeleton type="text" width="100px" />
                  <q-skeleton type="text" width="100px" />
                  <q-skeleton type="text" width="100px" />
                  <q-skeleton style="border-radius: 25px" type="QBtn" width="120px" height="30px" />
                  <q-skeleton style="border-radius: 25px" type="QBtn" width="120px" height="30px" />
                </q-card-actions>
              </q-card-actions>
            </q-card>
            <q-card v-else class="my-card shadow-10 text-left" rounded style="border-radius: 25px">
              <q-card-section horizontal>
                <q-img :src="menu2.src" :alt="menu2.name" />

                <q-card-section>
                  <div class="q-pb-md font-weight-bold">
                    Name : {{ menu2.name }}
                  </div>
                  <div class="text-subtitle1 font-weight-bold">
                    Price : {{ menu2.price }} ₹
                  </div>
                  <div class="text-caption font-weight-bold">
                    Details : {{ menu2.shortdescription }}
                  </div>
                  <q-btn push color="green" class="q-my-md" rounded label="Add To Cart" @click="addToCart(menu2)" />
                  <q-btn push color="green" class=" " rounded label="View Detail" @click="openDialog(menu2)" />
                </q-card-section>
              </q-card-section>
            </q-card>
            <!-- more detail dialog -->
            <!-- <menuItemDetail :dialog="dialog" :selectedMenuItem="selectedMenuItem" /> -->
          </div>
        </transition>
      </div>
    </div>
    <q-dialog v-model="dialog">
      <q-card v-if="store.detailLoading === true" class="my-card shadow-10 text-left q-ma-md" rounded
        style="border-radius: 25px; max-width: 550px">
        <q-card-actions horizontal>
          <q-item>
            <q-skeleton type="QAvatar" width="170px" height="170px" animation="fade" />
            <q-item class="column">
              <q-skeleton type="text" width="200px" />
              <q-skeleton type="text" width="200px" />
            </q-item>
          </q-item>
        </q-card-actions>
        <q-card-actions horizontal align="start">
          <q-item align="start" style="flex-wrap: wrap">
            <q-skeleton type="text" width="200px" height="20px" />
            <q-skeleton type="text" width="480px" height="200px" />
          </q-item>
        </q-card-actions>
        <q-card-actions horizontal align="center">
          <q-skeleton style="border-radius: 25px" type="QBtn" width="120px" height="30px" />
        </q-card-actions>
      </q-card>

      <q-card v-else class="bg-teal text-center" full-width style="width: 100%; max-height: 90vh; border-radius: 25px">
        <q-card-section>
          <div class="text-h6 text-weight-bold">More Information :</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row">
          <div class="col-6">
            <q-img :src="selectedMenuItem.src" :alt="selectedMenuItem.name" width="60%" style="border-radius: 15px"
              class="shadow-24" />
          </div>
          <div class="col-6">
            <div class="q-pt-md font-weight-bold">
              Name : {{ selectedMenuItem.name }}
            </div>
            <div class="q-py-md font-weight-bold">
              Price : {{ selectedMenuItem.price }}
            </div>
          </div>
        </q-card-section>
        <hr />
        <q-card-section class="text-left">
          <div class="text-subtitle1 font-weight-bold">
            <b>Detail :</b> <br />
            {{ selectedMenuItem.description
            }}
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn push rounded class="text-white bg-dark" color="green" label="close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import menuList from './menuList.js';
import useCartStore from 'src/stores/cart';
// import menuItemDetail from './menuItemDetail.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import { useQuasar } from 'quasar';
const $q = useQuasar();
// const loading = ref(true);
// const detailLoading = ref(true);


const store = useCartStore();
const cartItem = store.addCart;


onMounted(() => {
  setTimeout(() => {
    store.loading = false;
  }, 1000);
})


const addToCart = (item) => {
  $q.notify({
    message: 'Item is Added To Cart SucessFully !!',
    icon: 'check_circle_outline',
    color: "green",
    textColor: "white",
    timeout: 100,
  })
  cartItem.push(item);
  store.updateTotalAmount();
}

const menuitemall = ref(menuList);
const menuCategory = ["all", ...new Set(menuitemall.value.map(item => item.category))];
let menuitems = ref(menuitemall.value);


function filterCategory(selectedCategory) {
  if (selectedCategory !== "all") {
    store.loading = true;

    setTimeout(() => {
      store.loading = false;
    }, 500);
    menuitems.value = menuitemall.value.filter(item => item.category === selectedCategory);

    // console.log(menuitems)
  } else {
    store.loading = true;
    setTimeout(() => {
      store.loading = false;
    }, 500);
    menuitems.value = menuitemall.value;

    // console.log(menuitems)
  }
}

const dialog = ref(false);
const selectedMenuItem = ref(false);


const openDialog = (menuItem) => {
  setTimeout(() => {
    store.detailLoading = false;
  }, 500);
  selectedMenuItem.value = menuItem;
  dialog.value = true;
  store.detailLoading = true;

}

const backToPreviousPage = () => {
  router.push("/home");
}
</script>

<style scoped>
.q-card {
  box-shadow: 0 0 10 #000 !important;
  background-color: #ddeede !important;
  font-weight: 800;
}

q-card:hover q-img {
  overflow: hidden !important;
  transition: all 0.2s ease-in-out;
}

q-img {
  transform: scale(1.2);
}
</style>
