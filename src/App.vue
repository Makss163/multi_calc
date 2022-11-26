<template>

  <!-- компонент роутера, сюда встроены все страницы SPA -->
  <router-view></router-view>

</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    console.log('Created!');
  }
})
</script>

<style lang="scss">
</style>
