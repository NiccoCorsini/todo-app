<template>
  <div class="inserter">
    <Input action="add" @add="valueAssigner" @confirm="enterConfirmation" />
    <Button v-if="value" action="add" @add="saveTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";
import { Task } from "@/definitions/definitions";
import { generateRandomId } from "@/helpers/alphaNumId";
import { MutationsTypes } from "@/definitions/definitions";
import { useStore } from "@/store";

export default defineComponent({
  name: "Inserter",
  components: {
    Button,
    Input,
  },

  setup() {
    const store = useStore();

    let value = ref("");

    const valueAssigner = (arg: string) => {
      value.value = arg;
    };

    const saveTask = () => {
      const task: Task = {
        id: generateRandomId(11),
        todo: value.value,
        status: false,
      };
      store.commit(MutationsTypes.ADD_NEW_TASK, task);
      value.value = "";
    };

    const enterConfirmation = (res: boolean) => {
      if (res) saveTask();
    };

    return { value, valueAssigner, saveTask, enterConfirmation };
  },
});
</script>

<style
  scoped
  lang="css"
  src="../../style/components/organisms/inserter.css"
></style>
