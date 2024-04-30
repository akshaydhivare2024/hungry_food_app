<template>
  <div class="q-pa-md row justify-between">
    <div class="col-8 q-py-md">
      <transition
        appear
        enter-active-class="animated slower fadeInLeft"
        leave-active-class="animated fadeInLeft"
      >
        <div class="flex justify-between">
          <q-btn
            push
            color="green"
            class="q-my-md"
            rounded
            label="Back"
            @click="backToPreviousPage"
          />
          <p class="text-h3 text-weight-bold q-mt-md">Payment page</p>
        </div>
      </transition>
    </div>
    <div class="col-3 gt-xs q-py-md flex justify-center q-items-center">
      <transition
        appear
        enter-active-class="animated slower fadeInRight"
        leave-active-class="fadeInRight"
      >
        <div class="q-mt-md">
          <q-icon name="payment" size="50px" />
          <q-icon name="paid" size="50px" />
        </div>
      </transition>
    </div>
  </div>
  <p class="text-weight-bold text-h6 q-px-md">Select a Delivery Address :</p>

  <div class="q-px-md row">
    <div class="col-12 q-py-md">
      <q-card class="my-card q-pa-md" style="background-color: #ddeede">
        <div class="flex">
          <q-radio
            v-model="address"
            size="sm"
            color="teal"
            val="Kandivali"
            clickable
          />

          <q-card-section>
            <div class="text-h6">Akshay Dhivare</div>
            <div class="text-subtitle2">Kandivali ,</div>
            <div class="text-subtitle2">Mumbai Maharastra.</div>
            <div class="text-subtitle2">9876543210</div>
          </q-card-section>
        </div>
        <div class="flex">
          <q-radio
            v-model="address"
            size="sm"
            color="teal"
            val="Jogeshwari"
            clickable
          />

          <q-card-section>
            <div class="text-h6">Akshay Dhivare</div>
            <div class="text-subtitle2">Jogeshwari,</div>
            <div class="text-subtitle2">Mumbai Maharastra.</div>
            <div class="text-subtitle2">9876543210</div>
          </q-card-section>
        </div>

        <q-card-actions class="flex justify-around">
          <q-btn
            push
            rounded
            dense
            color="green"
            class="q-pa-md q-ma-md text-weight-bold shadow-7"
            label="Edit paymentMode"
            size="15px"
          />
          <q-btn
            push
            rounded
            dense
            color="green"
            class="q-pa-md q-ma-md text-weight-bold shadow-7"
            label="Add Delivery Instruction"
            size="15px"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
  <br />
  <p class="text-weight-bold text-h6 q-px-md">Select a Payment Method :</p>

  <div class="q-px-md row">
    <div class="col-4 col-xs-12 q-pa-md">
      <q-card class="my-card q-pa-md" style="background-color: #ddeede">
        <p class="text-weight-bold text-h6">RECOMMENDED :</p>
        <hr />
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="amazon"
            clickable
          />

          <q-card-section>
            <div class="text-h6">Amazon Pay UPI</div>
          </q-card-section>
        </div>
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="gpay"
            clickable
          />

          <q-card-section>
            <div class="text-h6">Google Pay UPI</div>
          </q-card-section>
        </div>
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="paytm"
            clickable
          />

          <q-card-section>
            <div class="text-h6">PayTm UPI</div>
          </q-card-section>
        </div>
      </q-card>
    </div>
    <div class="col-4 col-xs-12 q-pa-md">
      <q-card class="my-card q-pa-md" style="background-color: #ddeede">
        <p class="text-weight-bold text-h6">Credit or Debit Card</p>
        <hr />
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="credit"
            clickable
          />

          <q-card-section>
            <div class="text-h6">Credit Card</div>
          </q-card-section>
        </div>
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="debit"
            clickable
          />

          <q-card-section>
            <div class="text-h6">Debit Card</div>
          </q-card-section>
        </div>
      </q-card>
    </div>
    <div class="col-4 col-xs-12 q-pa-md">
      <q-card class="my-card q-pa-md" style="background-color: #ddeede">
        <p class="text-weight-bold text-h6">More Way To Pay :</p>
        <hr />
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="emi"
            clickable
          />

          <q-card-section>
            <div class="text-h6">EMI</div>
          </q-card-section>
        </div>
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="netbanking"
            clickable
          />

          <q-card-section>
            <div class="text-h6">NET BANKING</div>
          </q-card-section>
        </div>
        <div class="flex">
          <q-radio
            v-model="paymentMode"
            size="sm"
            color="teal"
            val="cash"
            clickable
          />

          <q-card-section>
            <div class="text-h6">Cash On Delivery</div>
          </q-card-section>
        </div>
      </q-card>
    </div>
    <div class="col-12 col-sx-12 text-center q-pa-md q-my-md">
      <transition
        appear
        enter-active-class="animated slower zoomIn"
        leave-active-class="zoomOut"
      >
        <q-btn
          push
          rounded
          dense
          color="green"
          class="q-pa-md text-weight-bold shadow-7 q-my-md"
          label="Proceed To Pay"
          size="12px"
          @click="paymentHandler"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
const router = useRouter();

const address = ref("");
const paymentMode = ref("");

const backToPreviousPage = () => {
  router.push("/cart");
};
const paymentHandler = () => {
  Swal.fire({
    title: "Payment Done successful!",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
  router.push("/afterpayment");
};
</script>

<style lang="scss" scoped></style>
