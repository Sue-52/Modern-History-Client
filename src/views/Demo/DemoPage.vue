<template>
  <div id="main">
    <h1>Demo Page</h1>
    <p>This is a demo page.</p>
    <mavon-editor v-model="value"></mavon-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref("");
</script>

<style></style>
