import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCartStore = defineStore('cart', () => {
  let totalAmount = ref(0);

  const addCart = ref([]);

  const showMenubar = ref(false);

  function updateTotalAmount() {
    totalAmount.value = addCart.value.reduce((total, item) => total + item.price, 0);
  }

  const removeCart = (id) => {
    const indexToRemove = addCart.value.findIndex(item => item.id === id);
    if (indexToRemove !== -1) {
      addCart.value.splice(indexToRemove, 1);
      updateTotalAmount();
    }
  }



  return { addCart, removeCart, totalAmount, updateTotalAmount, showMenubar };


})
export default useCartStore;
