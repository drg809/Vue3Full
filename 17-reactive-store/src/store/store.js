import { reactive } from 'vue';

const store = reactive({
   saldo: 2000,
   modificarSaldo(value) {
      this.saldo += value;
   },
});

export default store;