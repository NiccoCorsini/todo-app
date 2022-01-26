<template>
  <div class="unsolved">
    <h2>Unsolved tasks</h2>
    <div v-for="(task, index) in unsolved" :key="index" class="unsolved-task">
      <span>{{ task.todo }}</span>
    </div>
    <div v-if="unsolved.length == 0">No task here!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Unsolved",
  setup() {
    const store = useStore();

    const unsolved = ref(store.getters.unsolvedTasks);

    return { unsolved };
  },
});
</script>

<style scoped lang="css" src="../style/views/unsolved.css"></style>
