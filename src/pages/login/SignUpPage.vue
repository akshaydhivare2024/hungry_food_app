<template>
  <q-page class="q-pa-md flex flex-center item-center " style="background-color: #DDEEDE !important;">
    <div class=" row text-center q-pa-md ">
      <div class="col-12 ">
        <img src="../../assets/logo.png" width="60%" />
      </div>
      <div class="col-12 q-pa-md  rounded-borders shadow-12 text-center "
        style="background-color:#00000014; border-radius: 25px;">
        <div class="q-pa-md text-center">
          <p class="text-weight-bold text-h2 text-positive">SIGN UP</p>

        </div>
        <div class="q-mx-md text-center">
          <q-input filled v-model="name" label="Full Name" class="bg-white " />
          <br />
          <q-input filled v-model="email" label="Email" class="bg-white " />
          <br />
          <q-input filled v-model="pass" label="Password" class="bg-white " />
          <br />
          <q-btn push color="positive" label="Sign Up" @click="signupHandler" rounded
            class="text-weight-bold text-h6" />
          <br /> <br />
          <router-link class="justify-center text-h6 text-weight-bold" to="/">Login</router-link>
          <br /> <br />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

const name = ref('');
const email = ref('');
const pass = ref('');
const router = useRouter();

const signupHandler = async () => {
  try {
    const res = await axios.post(`http://localhost:3000/users`, {
      name: name.value,
      email: email.value,
      pass: pass.value
    });

    name.value = '';
    email.value = '';
    pass.value = '';
    // console.log(res)

    if (res.status === 201) {
      Swal.fire({
        title: 'Sign Up successful!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      router.push('/');
    } else {
      Swal.fire({
        title: 'Sign Up failed!',
        icon: 'error'
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    Swal.fire({
      title: 'Error',
      text: 'An error occurred during login. Please try again later.',
      icon: 'error'
    });
  }
  name.value = '';
  email.value = '';
  pass.value = '';
}

</script>
