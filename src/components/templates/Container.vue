<template>
  <div class="container">
    <img src="../../assets/images/note.svg" alt="ToDo" />
    <Header class="header" />
    <router-view />
    <Button action="clear" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "@/components/organisms/Header.vue";
import Button from "@/components/atoms/Button.vue";

export default defineComponent({
  name: "Container",
  components: { Header, Button },
});
</script>

<style
  scoped
  lang="css"
  src="../../style/components/templates/container.css"
></style>
