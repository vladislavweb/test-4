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
import NoteForm from "@/pages/home/NoteForm";
import NoteList from "@/pages/home/NoteList";

export default {
  components: {
    NoteForm,
    NoteList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;

  @media only screen and (max-width: 600px) {
    display: block;
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
    overflow-y: auto;

    @media only screen and (max-width: 600px) {
      overflow: inherit;
    }
  }
}
</style>
