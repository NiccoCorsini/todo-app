<template>
  <div class="all">
    <h2>Add your tasks below!</h2>
    <Inserter />
    <div v-for="(task, index) in store.getters.getAllTasks" :key="index">
      <Task :task="task" :taskIndex="index + 1" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Inserter from "@/components/organisms/Inserter.vue";
import Task from "@/components/organisms/Task.vue";
import { useStore } from "@/store";
import { MutationsTypes } from "@/definitions/definitions";

export default defineComponent({
  name: "All",
  components: {
    Inserter,
    Task,
  },
  setup() {
    const store = useStore();

    store.commit(MutationsTypes.SET_ALL);

    return { store };
  },
});
</script>
<style scoped lang="css" src="../style/views/all.css"></style>
