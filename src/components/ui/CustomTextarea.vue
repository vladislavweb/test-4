<template>
  <textarea class="custom-textarea" :value="modelValue" @input="changeTextarea"></textarea>
</template>

<script>
export default {
  name: "custom-textarea",
  props: {
    modelValue: [String],
  },
  methods: {
    changeTextarea(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 4px;
}
</style>
