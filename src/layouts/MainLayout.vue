<template>
  <q-layout v-if="store.pageloading" class="loading-spinner-container text-center">
    <div class="loading-spinner">
      <q-spinner-gears color="dark" size="3em" />
      <br />
      <p class="text-h6">
        Loading...<br />
        Please Wait !!!
      </p>
    </div>
  </q-layout>
  <q-layout v-else view="hHh LpR fFf">
    <q-header elevated style=" background-color: #DDEEDE !important;">
      <q-toolbar class="flex justify-between">
        <q-btn color="green" class=" shadow-1" rounded icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-center">
          <q-img to="/" class="mobile-hide	" src="../assets/logo.png" spinner-color="white"
            style="height: 70px; max-width: 70px" />
          <q-img to="/" class="lt-md mobile-only" src="../assets/logo.png" spinner-color="white"
            style="height: 70px; max-width: 70px" />

        </q-toolbar-title>
        <!-- <q-space /> -->
        <q-btn push color="green" rounded icon="shopping_cart" :label="`(${cartItem.length})`" to="/cart" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered style="background-color:#DDEEDE;">
      <q-list>
        <q-item-label header>
          <span class="text-dark text-weight-bold">Quick Links :</span>
        </q-item-label>

        <EssentialLink :links="linkList" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import useCartStore from 'src/stores/cart';
import 'sweetalert2/src/sweetalert2.scss';

const store = useCartStore();
const cartItem = store.addCart;


defineOptions({
  name: 'MainLayout'
})

const linkList = [
  {
    title: 'Home',
    icon: 'home',
    path: '#/home'
  },
  {
    title: 'Menus',
    icon: 'restaurant_menu',
    path: '/#/menu'
  },
  {
    title: 'About Us',
    icon: 'info',
    path: '/#/about'
  },
  {
    title: 'Contact Us',
    icon: 'call',
    path: '/#/contact'
  },
  {
    title: 'Info',
    icon: 'info',
    path: '/#/info'
  },
  {
    title: 'FAQs',
    icon: 'quiz',
    path: '/#/faq'
  },
  {
    title: 'Logout',
    icon: 'logout',
    path: '/#/'
  }

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


onMounted(() => {
  setTimeout(() => {
    store.pageloading = false; // Set loading to false once page is loaded
  }, 1100); // Adjust the timeout as needed
})
</script>

<style>
.bg-menu {
  /* background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important; */
  color: black;
}

.logo {
  width: 10%;
}

.loading-spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DDEEDE;
  /* Semi-transparent background */
  z-index: 999;
  /* Ensure spinner appears above other content */
}
</style>
