<template>
  <div class="wrapper">
    <input
      id="adder"
      v-if="action == 'add'"
      :class="{ resize: value.length > 0 }"
      type="text"
      v-model.trim="value"
      placeholder="Write here..."
      @keypress.enter="$emit('confirm', value.length > 0 ? true : false)"
      @input="$emit('add', value.length > 0 ? value : '')"
    />
    <input
      v-if="action == 'update'"
      :class="{ solved: solved }"
      type="text"
      :value="todo"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Input",

  props: { action: String, todo: String, solved: Boolean },

  emits: ["add", "update"],
  setup() {
    const store = useStore();

    let value = ref("");

    watch(store.getters.getAllTasks, () => {
      if (store.getters.getStatus) {
        value.value = "";
      }
    });

    return { value };
  },
});
</script>

<style scoped lang="css" src="../../style/components/atoms/input.css"></style>
