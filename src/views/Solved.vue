<template>
  <div class="solved">
    <h2>Solved tasks</h2>
    <div v-for="(task, index) in solved" :key="index" class="solved-task">
      <span>{{ task.todo }}</span>
    </div>
    <div v-if="solved.length == 0">No task here!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Solved",
  setup() {
    const store = useStore();

    const solved = ref(store.getters.solvedTasks);

    return { solved };
  },
});
</script>

<style scoped lang="css" src="../style/views/solved.css"></style>
