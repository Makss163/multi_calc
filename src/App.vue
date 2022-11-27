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

  $navBarHeight: 55px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .flex-center-between {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .flex-column-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .flex-column-center-between {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
  }

  .nav-bar-wrapper {
    height: $navBarHeight;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .mc-page {
    margin: auto;
    margin-top: $navBarHeight;
    width: 80%;
  }
</style>
