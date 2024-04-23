<template>
  <div class="q-pa-md text-center">
    <p class="text-weight-bold text-h2">Menu's</p>
    <q-separator />

    <div class="row q-pa-md justify-evenly">
      <div v-for="menu1 in menuCategory" :key="menu1.id">
        <div class="col-2 col-xs-3 ">
          <transition appear enter-active-class="animated slower zoomIn" leave-active-class="animated zoomIn">
            <q-btn push color="green" class=" q-my-md q-px-md" :label="menu1" @click="filterCategory(menu1)" rounded />
          </transition>
        </div>
      </div>
    </div>

    <div class="row justify-evenly">
      <div v-for="menu2 in menuitems" :key="menu2.id">
        <transition appear enter-active-class="animated slower zoomIn" leave-active-class="animated zoomIn">

          <div class="col-4 q-my-md ">
            <q-card class="my-card shadow-10  text-justify" rounded style="border-radius: 25px;">
              <q-card-section horizontal>
                <q-img class="col-5" :src="menu2.src" :alt="menu2.name" />

                <q-card-section>
                  Name: {{ menu2.name }}
                  <div class="text-subtitle1  font-weight-bold">Price : {{ menu2.price }} ₹</div>
                  <div class="text-caption  q-py-md font-weight-bold">Details: {{ menu2.description }}</div>
                  <q-btn push color="green" class="q-pa-md" rounded label="Add To Cart" @click="addToCart(menu2)" />

                </q-card-section>
              </q-card-section>
            </q-card>
            <!-- <q-card class="my-card shadow-10  " rounded style="border-radius: 25px;">
              <q-img :src="menu2.src" />

              <q-card-section>
                <div class="row no-wrap items-center text-left">
                  <div class="col text-h6 ellipsis">
                    Name: {{ menu2.name }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none text-left">
                <div class="text-subtitle1">Price: ₹ {{ menu2.price }}</div>
                <div class="text-caption  q-py-md font-weight-bold">Details: {{ menu2.description }}</div>
              </q-card-section>

              <q-card-section>
                <q-btn push color="green" class="q-pa-md" rounded label="Add To Cart" @click="addToCart(menu2)" />
              </q-card-section>
            </q-card> -->
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import menuList from './menuList.js';
import useCartStore from 'src/stores/cart';
import { useQuasar } from 'quasar'
const $q = useQuasar();


const store = useCartStore();
const cartItem = store.addCart;

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
    menuitems.value = menuitemall.value.filter(item => item.category === selectedCategory);
    // console.log(menuitems)
  } else {
    menuitems.value = menuitemall.value;
    // console.log(menuitems)
  }
}

</script>

<style scoped>
.q-card {
  box-shadow: 0 0 10 #000 !important;
  background-color: #DDEEDE !important;
  font-weight: 800;
}

q-card:hover .q-card {
  overflow: hidden !important;

}

.q-img {
  transition: all .2s ease-in-out;
}

.q-img:hover {
  transform: scale(1.2);
}
</style>
