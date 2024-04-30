<template>
  <q-page class="q-pa-md flex flex-center item-center" style="background-color: #DDEEDE !important;">
    <div class=" row text-center q-pa-md flex">
      <div class="col-12">
        <img src="../../assets/logo.png" width="60%" />
      </div>
      <div class="col-12 q-pa-md  rounded-borders shadow-12 text-center "
        style="background-color:#00000014;border-radius: 25px;">
        <div class="q-pa-md text-center">
          <p class="text-weight-bold text-h3 text-positive">LOGIN</p>

        </div>

        <div class="q-mx-md text-center">
          <q-input filled v-model="email" label="Email" class="bg-white" />
          <br />
          <q-input filled v-model="pass" label="password" class="bg-white" />

          <br />
          <q-btn push color="positive" label="Login" @click="loginHandler" rounded class="text-weight-bold text-h6" />
          <br /> <br />
          <router-link class="justify-center text-h6 text-weight-bold" to="/signup">SIGN UP</router-link>
          <br /> <br />
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
// import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
const router = useRouter();
import useCartStore from 'src/stores/cart';
const store = useCartStore();


const email = ref('Akshay@gmail.com');
const pass = ref('Akshay123');


const users = [
  { id: 1, name: 'akshay dhivare', email: 'Akshay@gmail.com', pass: 'Akshay123' },
  { id: 2, name: 'akshay dhivare', email: 'Mumbai@gmail.com', pass: 'Mumbai123' },
];

const loginHandler = async () => {
  {

    const user = users.find(user => user.email === email.value && user.pass === pass.value);

    if (user) {
      Swal.fire({
        title: 'Login successful!',
        icon: 'success',
        showConfirmButton: false,
        timer: 500
      });
      store.pageloading = true;
      router.push('/home');

    } else {
      Swal.fire({
        title: 'Login failed!',
        text: 'Invalid email or pass',
        icon: 'error'
      });
    }
  }
}

// try {
//   const res = await axios.get(`http://localhost:3000/users`, {
//     params: {
//       email: email.value,
//       pass: pass.value
//     }
//   });

//   if (res.status === 200 && res.data.length > 0) {
//     Swal.fire({
//       title: 'Login successful!',
//       icon: 'success',
//       showConfirmButton: false,
//       timer: 1500
//     });
//     router.push('/home');
//   } else {
//     Swal.fire({
//       title: 'Login failed!',
//       icon: 'error'
//     });
//   }
// } catch (error) {
//   console.error("Error during login:", error);
//   Swal.fire({
//     title: 'Error',
//     text: 'An error occurred during login. Please try again later.',
//     icon: 'error'
//   });
// }

</script>
