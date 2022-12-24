import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
  },
  getters: {
    getNoteById: (state) => (id) => {
      return state.notes.find((note) => note.id == id);
    },
  },
  mutations: {
    addNote(state, note) {
      state.notes = [...state.notes, note];
    },
    deleteNote(state, noteId) {
      const index = state.notes.findIndex((note) => note.id == noteId);

      if (index >= 0) {
        state.notes = [...state.notes.slice(0, index), ...state.notes.slice(index + 1)];
      }
    },
    loadNotes(state) {
      const localNotes = localStorage.getItem("notes");

      if (localNotes) {
        state.notes = JSON.parse(localNotes);
      }
    },
  },
  actions: {},
  modules: {},
});
