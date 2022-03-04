<template>
  <div class="js-video" :class="videoExtend ? 'js-video-extend' : ''">
    <!-- 视频展示 -->
    <div id="mse"></div>
    <!-- 扩展/缩放按钮 -->
    <div class="button">
      <!-- 扩展按钮 -->
      <div
        class="player-icons"
        :class="videoExtend ? '' : 'active'"
        @click="handleExtend"
      >
        <span class="qy-play-icon unfold-icon"></span>
      </div>
      <!-- 缩放按钮 -->
      <div
        class="player-icons"
        :class="videoExtend ? 'active' : ''"
        @click="handleScale"
      >
        <span class="qy-play-icon fold-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Player from "xgplayer";
import { onMounted } from "vue";

export default {
  props: ["videoExtend", "videoUrl"],
  setup(props, { emit }) {
    // 西瓜播放器实例化
    onMounted(() => {
      new Player({
        id: "mse",
        url: props.videoUrl,
        // 流式布局
        fluid: true,
        // 键盘按键控制默认
        keyShortcut: "on",
        videoInit: true,
      });
    });

    // 点击扩展按钮
    const handleExtend = () => {
      emit("handleExtend");
    };

    // 点击缩放按钮
    const handleScale = () => {
      emit("handleScale");
    };

    return {
      handleExtend,
      handleScale,
    };
  },
};
</script>

<style></style>
