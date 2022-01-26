<template>
  <div class="button-types-wrapper">
    <button @click="$emit('add')" class="btn btn-add" v-if="action == 'add'">
      <font-awesome-icon icon="plus-circle" />
    </button>
    <button
      @click="$emit('remove')"
      class="btn btn-remove"
      v-if="action == 'remove'"
    >
      <font-awesome-icon icon="trash" />
    </button>
    <button
      @click="$emit('update')"
      class="btn btn-update"
      v-if="action == 'update'"
    >
      <font-awesome-icon icon="pen-square" />
    </button>
    <button
      @click="clear"
      class="btn btn-clear"
      v-if="action == 'clear' && store.getters.getAllTasks.length > 0"
    >
      <font-awesome-icon icon="folder-open" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "@/store";

import { MutationsTypes } from "@/definitions/definitions";

export default defineComponent({
  name: "Button",
  props: {
    action: String,
  },
  emits: ["add", "remove", "update"],
  setup() {
    const store = useStore();

    const clear = () => store.commit(MutationsTypes.CLEAR_ALL);

    return { clear, store };
  },
});
</script>

<style scoped lang="css" src="../../style/components/atoms/button.css"></style>
