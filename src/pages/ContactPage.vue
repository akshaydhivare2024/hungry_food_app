<template>
  <div class="q-pa-md">
    <h2 class="q-mx-md text-center text-weight-bold">Contact :</h2>
    <q-separator />
    <div class="row justify-center text-center q-ma-sm q-py-sm">

      <div class="col-md-4 col-sm-12 q-my-sm" v-for="contact in contactDetail" :key="contact.title">
        <transition appear enter-active-class="animated slower zoomIn" leave-active-class="animated zoomIn">
          <q-card bordered class="my-card">
            <q-card-section>
              <q-icon :name="contact.icon" size="lg" />
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div class="text-h5">{{ contact.title }}</div>
              <br />
              <a class="text-h6">{{ contact.context }}</a>
            </q-card-section>
          </q-card>
        </transition>
      </div>
    </div>
    <div class="col-md-12">
      <GMapMap :center="center" :zoom="12" map-type-id="terrain" style="width: 100%; height: 400px;"></GMapMap>
    </div>
  </div>
</template>

<script setup>
const contactDetail = [
  {
    icon: 'email',
    title: 'Email',
    context: 'demo@gmail.com',
    url: "demo@gmail.com"
  },
  {
    icon: 'location_on',
    title: 'Location',
    context: 'Mumbai'
  },
  {
    icon: 'contact_phone',
    title: 'Contact',
    context: '+91 - 1234567890'
  }
];
</script>

<style scoped>
.my-card {
  background-color: transparent;
  border: 1px solid black;
  border-radius: 30px;
  width: 250px;
  text-align: center;
}
</style>
