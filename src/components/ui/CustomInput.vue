<template>
  <input class="custom-input" type="text" :value="modelValue" @input="changeInput" />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    changeInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 4px;
}
</style>
