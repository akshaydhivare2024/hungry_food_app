<template>
  <div class="q-ma-md row">
    <div class="col-12 bg-white q-pa-md text-center ">
      <transition appear enter-active-class="animated slower zoomIn" leave-active-class="animated zoomIn">
        <p class="text-weight-bold text-h3 q-my-none q-pa-md">FAQ's</p>
      </transition>
    </div>
    <transition appear enter-active-class="animated slower slideInLeft" leave-active-class="animated slideInRight">
      <div class="col-12 q-my-md">
        <q-list v-for="data in faq_data" :key="data.id" bordered class="rounded-borders">
          <q-expansion-item class="shadow-1 overflow-hidden" style="border-radius: 7px"
            header-class="bg-green text-white" expand-icon-class="text-white">
            <template v-slot:header="{ expanded }">
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section class="text-weight-bold">
                {{ data.question }} {{ expanded ? '' : '' }}
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                {{ data.answer }}
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />
        </q-list>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue"
import faq from "./faq.js"

const faq_data = ref(faq);

</script>

<style scoped></style>
