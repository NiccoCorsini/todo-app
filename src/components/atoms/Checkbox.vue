<template>
  <label v-if="checked" :for="checkId">
    <font-awesome-icon icon="check-circle" />
  </label>
  <label v-else :for="checkId">
    <font-awesome-icon icon="times-circle" />
  </label>

  <input
    type="checkbox"
    :id="checkId"
    :checked="checked"
    @click="$emit('newCheck', checked ? false : true)"
  />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Checkbox",
  props: { checked: Boolean, checkId: String },
  emits: ["newCheck"],
});
</script>

<style
  scoped
  lang="css"
  src="../../style/components/atoms/checkbox.css"
></style>
