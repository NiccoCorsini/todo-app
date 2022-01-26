<template>
  <div class="unsolved">
    <h2>Unsolved tasks</h2>
    <div
      v-for="(task, index) in store.getters.unsolvedTasks"
      :key="index"
      class="unsolved-task"
    >
      <span>{{ task.todo }}</span>
    </div>
    <div v-if="store.getters.unsolvedTasks.length == 0">No task here!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Unsolved",
  setup() {
    const store = useStore();

    return { store };
  },
});
</script>

<style scoped lang="css" src="../style/views/unsolved.css"></style>
