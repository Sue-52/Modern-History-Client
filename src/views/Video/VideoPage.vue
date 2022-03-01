<template>
  <Loading :isShowLoading="isShowLoading"></Loading>
  <div class="warVideo">
    <div class="title">{{ title }}</div>
    <div class="wrapper">
      <div class="js-video">
        <div id="mse"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Player from "xgplayer";
import { useRoute } from "vue-router";
import Loading from "@/views/Loading/Loading.vue";

export default {
  setup() {
    let route = useRoute();
    let isShowLoading = ref(true);

    // 西瓜播放器实例化
    onMounted(() => {
      setTimeout(() => {
        isShowLoading.value = false;
        new Player({
          id: "mse",
          url: require("@/views/Video/sintel.mp4"),
          // 网页样式全屏
          cssFullscreen: true,
          // 流式布局
          fluid: true,
          // 键盘按键控制默认
          keyShortcut: "on",
        });
      }, 1000);
    });

    return {
      title: route.query.title,
      isShowLoading,
    };
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss">
html {
  background: #494a5f;
  background-size: cover;
  height: 100%;
}

body,
#app {
  font-weight: 300;
  line-height: 1.4;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.warVideo {
  width: 1066px;
  height: 100%;

  .title {
    font-size: 44px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
  }

  .js-video {
    width: 1066px;
    height: 600px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-sizing: border-box;
  }
}
</style>
