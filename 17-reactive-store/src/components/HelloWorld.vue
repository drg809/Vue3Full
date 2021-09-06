<template>
 <div>
   <h1>HOla {{persona.name}}</h1>
   <input type="text" v-model="persona.name" />
 </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const persona = reactive({
      name: "Daniel",
      lastName: "Rodriguez",
      edad: 20
    });

    return {persona};
  },
}
</script>
