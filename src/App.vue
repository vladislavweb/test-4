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

<script>
import { toRaw } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    store.subscribe((mutation, state) => {
      if (mutation.type === "addNote" || mutation.type === "deleteNote") {
        localStorage.setItem("notes", JSON.stringify(toRaw(state).notes));
      }
    });

    return {
      store,
    };
  },

  mounted() {
    this.store.commit("loadNotes");
  },
};
</script>
