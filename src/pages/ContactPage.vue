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
    <div class="col-md-12 ">
      <div id="map" class="map " style="border-radius: 10px"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {
  // Initialize the map
  const map = L.map('map').setView([19.1367, 72.8486], 13); // Jogeshwari coordinates

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href=" https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
});

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

.map {
  height: 400px;
  /* Adjust height as needed */
  width: 100%;
  /* Adjust width as needed */
}
</style>
