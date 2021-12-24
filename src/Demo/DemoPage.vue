<template>
  <div id="main">
    <mavon-editor
      v-model="detail"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const detail = ref("<h1 align='center'>九一八事变</h1>");
</script>

<style lang="scss">
#main {
  width: 970px;
  height: 830px;
  margin: 0 auto;
  padding-top: 30px;
}
.markdown-body {
  height: 970px;
}
</style>
