<template>
  <q-layout view="hHh LpR fFf">
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
import { ref } from 'vue'
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
    title: 'Logout',
    icon: 'logout',
    path: '/#/'
  }

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
.bg-menu {
  /* background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important; */
  color: black;
}

.logo {
  width: 10%;
}
</style>
