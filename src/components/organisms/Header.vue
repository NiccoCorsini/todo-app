<template>
  <div id="nav">
    <router-link to="/">All</router-link> ·
    <router-link to="/solved">Solved</router-link> ·
    <router-link to="/unsolved">Unsolved</router-link>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Header",
});
</script>

<style
  scoped
  lang="css"
  src="../../style/components/organisms/header.css"
></style>
