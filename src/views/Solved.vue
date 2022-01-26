<template>
  <div class="solved">
    <h2>Solved tasks</h2>
    <div
      v-for="(task, index) in store.getters.solvedTasks"
      :key="index"
      class="solved-task"
    >
      <span>{{ task.todo }}</span>
    </div>
    <div v-if="store.getters.solvedTasks.length == 0">No task here!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Solved",
  setup() {
    const store = useStore();

    return { store };
  },
});
</script>

<style scoped lang="css" src="../style/views/solved.css"></style>
