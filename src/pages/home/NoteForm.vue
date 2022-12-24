<template>
  <form class="create-note-form" @submit.prevent @submit="createNote">
    <h2 class="create-note-form__form-title">Заметки</h2>

    <p>Заголовок</p>

    <custom-input
      v-model="note.title"
      class="create-note-form__title-input"
      name="note-title"
      id="noteTitle"
      required
    />

    <p>Описание</p>

    <custom-textarea
      class="create-note-form__description-input"
      v-model="note.description"
      name="note-description"
      id="noteDescription"
      rows="5"
      required
    />

    <custom-button class="create-note-form__submit-button" type="submit" fillType="filled">
      Добавить
    </custom-button>
  </form>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "note-form",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  data() {
    return {
      note: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createNote() {
      this.note.id = Date.now();

      this.store.commit("addNote", this.note);

      this.note = {
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.create-note-form {
  display: flex;
  flex-direction: column;

  .create-note-form__form-title {
    margin: 0 0 16px;
  }

  .create-note-form__submit-button {
    max-width: 100px;
    margin-top: 16px;
  }
}
</style>
