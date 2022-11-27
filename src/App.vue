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

  #app {
    width: 100%;
    height: 100vh;
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

  .flex-dir-column {
      display: flex;
      flex-direction: column;
  }

  .flex-dir-column-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .flex-dir-column-center-between {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
  }

  .btn-mc {
      border: 1px solid rgb(0, 61, 102);
      border-radius: 3px;
      color: rgb(0, 61, 102);
      background-color: rgba(0, 61, 102, 0);
      transition: all .2s linear;
      cursor: pointer;
      &:hover {
          color: #FFFFFF;
          background-color: rgb(0, 61, 102);
      }
  }
  
  .btn-mc-fill {
      color: #FFFFFF;
      background-color: rgb(0, 61, 102);
      &:hover {
          color: rgb(0, 61, 102);
          background-color: rgba(0, 61, 102, 0);
      }
  }

  .btn-mc-s {
      padding: 3px;
      font-size: 12px;
      font-weight: 400;
  }

  .btn-mc-m {
      padding: 5px;
      font-size: 14px;
      font-weight: 600;
  }

  .btn-mc-xl {
      padding: 7px;
      font-size: 16px;
      font-weight: 900;
      border: 2px solid rgb(0, 61, 102);
  }

  .nav-bar-wrapper {
      height: $navBarHeight;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid rgb(0, 61, 102);
  }
  .mc-page {
      margin: auto;
      padding-top: $navBarHeight;
      width: 80%;
      height: 100%;
  }
</style>
