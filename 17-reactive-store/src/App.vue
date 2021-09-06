<template>
  <div>
    <Header />
    <Saldos />
  </div>
</template>

<script>
import Header from '@/components/Header';
import HelloWorld from '@/components/HelloWorld';
import Saldos from '@/components/Saldos';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Saldos,
    Header
  }
}
</script>
