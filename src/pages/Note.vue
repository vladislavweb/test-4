<template>
  <div class="note" v-if="note">
    <div class="note__navigation">
      <router-link :to="{ name: 'Home' }">Главная</router-link>
      /
      <router-link :to="{ name: 'Notes', params: { id: note.id } }">{{ note.title }}</router-link>
    </div>

    <h3 class="note__title">{{ note.title }}</h3>

    <div class="note__description">{{ note.description }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
      store,
      router,
    };
  },
  data() {
    return {
      note: undefined,
    };
  },
  mounted() {
    const noteId = this.router.currentRoute.value.params.id;

    if (noteId) {
      this.note = this.store.getters.getNoteById(noteId);
    }
  },
};
</script>

<style lang="scss" scoped>
.note {
  .note__description {
    white-space: pre-wrap;
  }
}
</style>
