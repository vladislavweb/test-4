<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  height: 100vh;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  #app {
    height: 100%;

    .layout {
      height: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px 0;

      @media screen and (max-width: 1200px) {
        padding: 16px;
      }
    }
  }

  * {
    box-sizing: border-box;
  }
}
</style>
