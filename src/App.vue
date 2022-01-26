import { defineComponent } from "vue";

<template>
  <Container />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Container from "@/components/templates/Container.vue";

export default defineComponent({
  name: "App",
  components: { Container },
});
</script>

<style>
@import "./style/variables.css";
@import "./style/general.css";
</style>
