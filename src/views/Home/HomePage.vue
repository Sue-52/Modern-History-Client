<template>
  <div id="main">
    <div class="full-page">
      <!-- 第一页 -->
      <div class="setion">
        <HomeFirstPage></HomeFirstPage>
      </div>
      <!-- 第二页 -->
      <div class="section"></div>
    </div>
  </div>
</template>
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
