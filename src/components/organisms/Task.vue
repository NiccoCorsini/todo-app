<template>
  <div class="task">
    <h3>{{ taskIndex }}</h3>
    <Checkbox
      :checked="task.status"
      @newCheck="statusAssigner"
      :checkId="task.id"
    />
    <Input
      action="update"
      @update="valueAssigner"
      :solved="task.status"
      :todo="task.todo"
    />
    <Button v-if="updateShower" action="update" @update="updateTask()" />
    <Button v-else action="remove" @remove="deleteTask(task.id)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Button from "@/components/atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";
import Checkbox from "@/components/atoms/Checkbox.vue";
import { MutationsTypes } from "@/definitions/definitions";
import { useStore } from "@/store";

export default defineComponent({
  name: "Task",
  props: { task: Object, taskIndex: Number },

  components: {
    Button,
    Input,
    Checkbox,
  },

  setup(props) {
    const store = useStore();
    let value = ref("");
    let updateShower = ref(false);

    watch(value, () => (updateShower.value = true));

    const updateTask = () => {
      store.commit(MutationsTypes.UPDATE_TASK, {
        ...props.task,
        todo: value.value,
      });
      updateShower.value = false;
    };
    const deleteTask = (id: string) => {
      store.commit(MutationsTypes.DELETE_TASK, id);
    };
    const valueAssigner = (arg: string) => {
      value.value = arg;
    };
    const statusAssigner = (arg: boolean) => {
      store.commit(MutationsTypes.UPDATE_TASK, {
        ...props.task,
        status: arg,
      });
    };

    return {
      updateTask,
      deleteTask,
      valueAssigner,
      statusAssigner,
      updateShower,
    };
  },
});
</script>

<style
  scoped
  lang="css"
  src="../../style/components/organisms/task.css"
></style>
