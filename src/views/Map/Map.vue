<template>
  <!-- 地图 -->
  <MapPage
    @handleWarOpen="handleWarOpenOrClose"
    @handlePeopleOpen="handlePeopleOpenOrClose"
    @handleGetPeopleSeat="handleGetPeopleSeat"
  ></MapPage>
  <!-- 战争信息弹框 -->
  <WarPopup
    :jumpWarBox="jumpWarBox"
    @handleWarClose="handleWarOpenOrClose"
  ></WarPopup>
  <!-- 人物信息弹框 -->
  <PeoplePage
    :jumpPeopleBox="jumpPeopleBox"
    :peopleSeat="peopleSeat"
    @handlePeopleClose="handlePeopleOpenOrClose"
  ></PeoplePage>
</template>

<script lang="ts">
import MapPage from "./components/MapPage.vue";
import WarPopup from "./components/WarPopup.vue";
import PeoplePage from "./components/PeoplePage.vue";
import { ref } from "vue";

export default {
  setup() {
    // 战争信息弹框
    let jumpWarBox = ref(false);
    // 人物信息弹框
    let jumpPeopleBox = ref(false);
    // 人物信息框位置
    let peopleSeat = ref({ x: 200, y: 300 });

    // 显示/隐藏战争弹出框
    const handleWarOpenOrClose = (value) => {
      jumpWarBox.value = value;
    };

    // 显示/隐藏人物弹出框
    const handlePeopleOpenOrClose = (value) => {
      jumpPeopleBox.value = value;
    };

    // 获取人物标记页面位置
    const handleGetPeopleSeat = (value) => {
      peopleSeat.value = {
        x: value.x,
        y: value.y,
      };
      // console.log(peopleSeat.value);
    };

    return {
      jumpWarBox,
      jumpPeopleBox,
      peopleSeat,
      handleWarOpenOrClose,
      handlePeopleOpenOrClose,
      handleGetPeopleSeat,
    };
  },
  components: {
    MapPage,
    WarPopup,
    PeoplePage,
  },
};
</script>

<style lang="scss"></style>
