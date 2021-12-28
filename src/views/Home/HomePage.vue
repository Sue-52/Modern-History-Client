<template>
  <div id="main" ref="mainPage">
    <div
      class="full-page"
      ref="fullPage"
      @mousewheel.stop="mouseWheelHandle"
      @DOMMouseScroll="mouseWheelHandle"
    >
      <!-- 第一页 -->
      <div class="section section1">
        <HomeFirstPage></HomeFirstPage>
      </div>
      <!-- 第二页 -->
      <div class="section section2">
        <HomeShowDetail></HomeShowDetail>
      </div>
      <div class="section section3">3</div>
    </div>
    <div class="ico_down" v-if="current <= 1" @click="next"></div>
    <div class="ico_Up" v-if="current >= 1" @click="prev"></div>
  </div>
</template>
<script lang="ts" setup>
import HomeShowDetail from "@/views/Home/components/HomeShowDetail.vue";
import HomeFirstPage from "@/views/Home/components/HomeFirstPage.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
//#region 全屏滚动效果
const current = ref(0);
const isScrolling = ref(false);
const mainPage = ref(null);
const fullPage = ref(null);
const deltaY = ref(0);

// next()
const next = () => {
  if (current.value < 2) {
    current.value += 1;
    move(current.value);
  } else {
    current.value = 0;
    move(current.value);
  }
};
// prev()
const prev = () => {
  if (current.value > 0) {
    current.value -= 1;
    move(current.value);
  } else {
    current.value = 2;
    move(current.value);
  }
};
// move()
const move = (index: number) => {
  isScrolling.value = true;
  directToMove(index);
  setTimeout(() => {
    isScrolling.value = false;
  }, 1000);
};
// directToMove()
const directToMove = onMounted(() => {
  let height = mainPage.value.clientHeight;
  let scrollPage = fullPage.value;
  let scrollHeight;
  scrollHeight = -current.value * height + "px";
  scrollPage.style.transform = "translateY(" + scrollHeight + ")";
});
// mouseWheelHandle()
const mouseWheelHandle = (event) => {
  // 添加冒泡阻止
  // let evt = event || window.event;
  // if (evt.stoppropagation) {
  //   evt.stoppropagation();
  // } else {
  //   evt.returnvalue = false;
  // }
  if (isScrolling.value) return false;
  let e = event.originalEvent || event;
  deltaY.value = e.deltaY;
  if (deltaY.value > 0) {
    next();
  } else {
    prev();
  }
};
//#endregion

//
</script>

<style lang="scss">
#main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; //一定要设置，多余的先隐藏
}
.full-page {
  width: 100%;
  height: 100%;
  transition: all linear 0.5s;

  .section {
    width: 100%;
    height: 100%;
  }

  .section1 {
    background-color: #fff;
  }

  .section2 {
    background-color: #fff;
  }
  .section3 {
    background-color: lightblue;
  }
}
.ico_down {
  width: 3vmin;
  height: 3vmin;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: rotate(135deg);
  animation: moveDown 1.5s infinite;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-width: 0.8vmin 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
  }

  &:after {
    content: "";
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    border-width: 0 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transform-origin: 100% 0;
    transition: 0.2s ease;
  }
}
.ico_Up {
  width: 3vmin;
  height: 3vmin;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 5%;
  transform: rotate(-45deg);
  animation: moveUp 1.5s infinite;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-width: 0.8vmin 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
  }

  &:after {
    content: "";
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    border-width: 0 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transform-origin: 100% 0;
    transition: 0.2s ease;
  }
}
@keyframes moveUp {
  0% {
    top: 5%;
  }
  50% {
    top: 7%;
  }
  100% {
    top: 5%;
  }
}
@keyframes moveDown {
  0% {
    bottom: 5%;
  }
  50% {
    bottom: 7%;
  }
  100% {
    bottom: 5%;
  }
}
</style>
