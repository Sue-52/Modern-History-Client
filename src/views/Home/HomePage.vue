<template>
  <div id="main">
    <div class="full-page">
      <div class="setion">
        <HomeFirstPage></HomeFirstPage>
      </div>
      <div class="section"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeFirstPage from "@/views/Home/components/HomeFirstPage.vue";
</script>

<style lang="scss">
#main,
.full-page {
  width: 100%;
  height: 100%;
  .setion {
    width: 100%;
    height: 100%;
  }
}
</style>
