<template>
  <button
    class="custom-button"
    :class="{
      'custom-button--filled': fillType === 'filled',
      'custom-button--outlined': fillType === 'outlined',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    fillType: String,
  },
};
</script>

<style lang="scss" scoped>
.custom-button {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #495cff;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &.custom-button--filled {
    background-color: #495cff;
    color: #ffffff;
  }

  &.custom-button--outlined {
    background-color: #ffffff;
    color: #495cff;
  }
}
</style>
