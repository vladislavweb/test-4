<template>
  <div class="note-list">
    <div class="note-list__element note-info" v-for="note in store.state.notes">
      <div class="note-info__title">
        <strong>
          {{ note.title }}
        </strong>
      </div>

      <div class="note-info__description" v-line-clamp="3">
        {{ note.description }}
      </div>

      <div class="note-info__actions">
        <custom-button class="open-button" @click="() => openNote(note.id)" fillType="outlined">
          Открыть
        </custom-button>

        <custom-button class="delete-button" @click="() => deleteNote(note.id)" fillType="outlined">
          Удалить
        </custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "note-list",
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
      store,
      router,
    };
  },
  methods: {
    openNote(noteId) {
      this.router.push({
        name: "Notes",
        path: "/notes",
        params: { id: noteId },
      });
    },
    deleteNote(noteId) {
      this.store.commit("deleteNote", noteId);
    },
  },
};
</script>

<style lang="scss" scoped>
.note-list {
  display: grid;
  grid-template-columns: repeat(3, 32%);
  row-gap: 4%;
  column-gap: 2%;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 48%);
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 100%);
    row-gap: 2%;
  }

  .note-list__element {
    padding: 16px;
    display: grid;
    grid-template-rows: min-content;
    border: 1px solid gray;
    border-radius: 4px;

    &.note-info {
      .note-info__title {
        margin-bottom: 10px;
        font-size: 18px;
      }

      .note-info__description {
        margin-bottom: 10px;
        overflow-y: auto;
        white-space: pre-wrap;
      }

      .note-info__actions {
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-self: flex-end;

        .delete-button {
          color: red;
          border-color: red;
        }
      }
    }
  }
}
</style>
