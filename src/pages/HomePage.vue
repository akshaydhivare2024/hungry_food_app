<template>
  <div class="q-pa-md">
    <div class="row justify-around">
      <div class="col-md-6 col-xs-12 order-2 q-pa-md">
        <transition appear enter-active-class="animated slower fadeInLeft" leave-active-class="animated fadeInLeft">
          <div>
            <h3>Feast on Unforgettable Flavors.</h3>
            <h6>Experience a World of Delectable Dishes and Exquisite Beverages</h6>
            <q-btn push class="shadow-8" color="green" padding="15px" icon="restaurant_menu" label="Explore Menu"
              to="/menu" rounded />

          </div>
        </transition>
      </div>
      <div class="col-md-6 col-xs-12 order-1 q-pa-md">
        <transition appear enter-active-class="animated slower fadeInRight" leave-active-class="fadeInRight">
          <div>
            <q-img src="../assets/banner-img.png" spinner-color="white" style=" width: 80%; " />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@media screen and (max-width:480px) {
  .order-1 {
    order: 1 !important;
  }

  .order-2 {
    order: 2 !important;
  }
}
</style>
