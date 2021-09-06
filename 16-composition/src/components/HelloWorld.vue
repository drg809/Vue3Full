<template>
  <div>
    <h1>{{title}}</h1>
    <hr />
    
    <!-- <ContadorUno />
    <ContadorDos />

    <Btn btnText="Aumentar" @accion="aumentar" />
    <Btn btnText="Disminuir" @accion="disminuir"/>

    <hr/>

    <p>{{color}}</p> -->
    <ol>
      <li v-for="(post, i) in posts" :key="i">
        {{post}}
      </li>
    </ol>
  </div>
</template>

<script>
import { inject } from 'vue';
// import { computed,ref, provide } from 'vue';
// import Btn from './Btn';
// import ContadorUno from './ContadorUno';
// import ContadorDos from './ContadorDos';

import { useApiCall } from '../hooks/useApiCall';

export default {
  // components: { Btn, ContadorUno, ContadorDos },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const title = "Hooks del ciclo de vida";
    const posts = inject("listadoPost");

    return { title, posts, ...useApiCall() };
  }
}
</script>
