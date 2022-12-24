<template>
  <div class="home">
    <div class="home__form-wrapper">
      <note-form />
    </div>

    <div class="home__list-wrapper">
      <note-list />
    </div>
  </div>
</template>

<script>
import NoteForm from "@/pages/home/NoteForm.vue";
import NoteList from "@/pages/home/NoteList.vue";

export default {
  components: {
    NoteForm,
    NoteList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }

  .home__form-wrapper {
    max-width: 400px;
    width: 100%;
    margin-right: 30px;

    @media only screen and (max-width: 1200px) {
      max-width: 300px;
    }

    @media only screen and (max-width: 600px) {
      max-width: inherit;
      margin: 0 0 16px;
    }
  }

  .home__list-wrapper {
    flex: 1;
  }
}
</style>
