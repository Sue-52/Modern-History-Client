<template>
  <div
    class="home-page"
    v-for="(item, index) in homeData"
    :class="{ fade: index === currentIndex }"
    :key="item.id"
  >
    <div class="home-left">
      <!-- 标题名 -->
      <div class="home-title">
        <img src="../../../assets/images/1640179657_348262.png" alt="" />
      </div>
      <!-- 右侧列表栏 -->
      <div class="home-list"><span></span><span></span><span></span></div>
      <!-- 索引展示 -->
      <div class="home-index">
        <span class="index_inner">0{{ index + 1 }}</span>
        <span class="index_total">0{{ homeData.length }}</span>
      </div>
      <!-- 事件名 -->
      <div class="home-event">
        <h1>{{ item.title }}</h1>
        <div class="event_content">
          {{ item.description }}
        </div>
      </div>
      <!-- 轮播图箭头 -->
      <div class="home-arrow">
        <span class="arrow_top circle" @click="handleClike(-1)"></span>
        <span class="arrow_bottom circle" @click="handleClike(1)"></span>
      </div>
    </div>
    <div class="home-right">
      <!-- 右侧背景图片 -->
      <div class="event-image">
        <img :src="item.image" v-if="true" />
      </div>
      <!-- 详细信息 -->
      <transition name="name">
        <div class="detail-info" v-if="isShow">
          <ul class="more_info">
            <li>
              <p>中方主要指挥官：</p>
              <span>{{ item.moreInfo.mainPerson.china }}</span>
            </li>
            <li>
              <p>日方主要指挥官：</p>
              <span>{{ item.moreInfo.mainPerson.japan }}</span>
            </li>
          </ul>
          <div class="see_more" @click="toggle">查看更多信息</div>
        </div>
        <div class="detail-info-long" v-else>
          <ul class="more_info">
            <li>
              <p>中方主要指挥官：</p>
              <span>{{ item.moreInfo.mainPerson.china }}</span>
            </li>
            <li>
              <p>日方主要指挥官：</p>
              <span>{{ item.moreInfo.mainPerson.japan }}</span>
            </li>
            <li>
              <p>战争地区：</p>
              <span>{{ item.moreInfo.place }}</span>
            </li>
            <li>
              <p>战争时间：</p>
              <span>{{ item.moreInfo.happenTiem }}</span>
            </li>
            <li>
              <p>战争结果：</p>
              <span>{{ item.moreInfo.result }}</span>
            </li>
            <li>
              <p>该事件又称之为：</p>
              <span>{{ item.moreInfo.otherName.join(",") }}</span>
            </li>
            <li>
              <p>该事件带来的后果：</p>
              <span>{{ item.moreInfo.consequence }}</span>
            </li>
          </ul>
          <div class="see_more" @click="toggle">查看更多信息</div>
        </div>
      </transition>
      <!-- 进入文章页面 -->
      <div class="home-to-article">
        <p>想知道更多相关的信息吗？</p>
        <a href="#"> 跳转到文章页面 ——> </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { getHomePageData } from "@/api/home";
<<<<<<< HEAD
interface HomePageData {
  id: number;
  title: string;
  description: string;
  image: string;
  moreInfo: {
    mainPerson: {
      china: string;
      japan: string;
    };
    place: string;
    happenTiem: string;
    result: string;
    otherName: string[];
    consequence: string;
  };
}
const homeData = ref<HomePageData[]>([]);

const getData = () => {
  getHomePageData().then((res: any) => {
=======

const homeData = ref([]);
const getData = () => {
  getHomePageData().then((res) => {
>>>>>>> eff69764073ca83a5e72d4b7ef7849aa9e98f207
    console.log(res);
    if (res.code === 200) {
      homeData.value = res.data;
    }
  });
};
getData();

// 展示更多信息
const isShow = ref(true);
const toggle = () => {
  isShow.value = !isShow.value;
};
//#region 轮播图设置
const currentIndex = ref(0);
const handleClike = (step) => {
  const nextStep = (currentIndex.value += step);
  console.log(nextStep);
  if (nextStep <= 0) {
    currentIndex.value = homeData.value.length - 1;
  } else if (nextStep > homeData.value.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = nextStep;
  }
  return nextStep;
};
//#endregion
// import DemoPage from "@/Demo/DemoPage.vue";
</script>

<style lang="scss" scoped>
.home-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: cursive;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s linear;
  &.fade {
    opacity: 1;
    z-index: 1;
  }

  // 主页左侧
  .home-left {
    float: left;
    width: 50%;
    height: 100%;

    // 标题样式
    .home-title {
      float: left;
      height: 75px;
      width: auto;
      padding: 2rem 3rem 0 2rem;

      > img {
        line-height: 75px;
        width: 22rem;
        height: auto;
      }
    }

    // 右侧列表栏
    .home-list {
      float: right;
      background-color: #fff;
      width: 30px;
      height: 30px;
      margin-top: 2.5rem;
      margin-right: 5rem;

      > span {
        display: block;
        float: right;
        width: 100%;
        margin-top: 5px;
        border-bottom: 4px solid #666;

        &:nth-child(1) {
          margin-top: 0;
        }
        &:nth-child(2) {
          width: 20px;
        }
        &:nth-child(3) {
          width: 25px;
        }
      }
    }
    // 缩放隐藏
    @media screen and (max-width: 1085px) {
      .home-list {
        display: none;
      }
    }

    // 索引展示
    .home-index {
      float: left;
      width: calc(100% - 150px);
      height: 62px;
      margin-top: 14rem;
      margin-bottom: 3rem;
      padding-left: 150px;
      overflow: hidden;
      font-weight: bold;
      font-size: 1rem;
      font-family: "Montserrat", sans-serif;
      color: #851d20;

      .index_inner {
        display: block;
        width: 1.15rem;
        float: left;
      }

      .index_total {
        float: left;
        margin: 0 0 0 8rem;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          width: 6rem;
          height: 3px;
          top: calc(50% - 1.5px);
          right: calc(100% + 1rem);
          background: #851d20;
        }
      }
    }

    // 重要事件
    .home-event {
      float: left;
      width: calc(100% - 8rem);
      padding: 0 4rem;
      color: #851d20;

      > h1 {
        font-size: 6vw;
        text-transform: lowercase;
        margin: 0;
        letter-spacing: -0.35vw;
        position: relative;
        overflow: hidden;
      }

      .event_content {
        line-height: 3rem;
        position: relative;
        padding: 0 8rem 0 0;
        font-weight: 300;
        margin-top: 3rem;
        font-size: 24px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    // 索引箭头
    .home-arrow {
      float: left;
      width: calc(100% - 8rem);
      height: 46px;
      padding: 2rem 4rem 0;

      .circle {
        float: left;
        width: 44px;
        height: 44px;
        background: white;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 3px #ddd;
        position: relative;
        transition: all 1s;

        &:hover {
          border: solid 3px black;
        }
      }

      .arrow_top {
        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 13px solid #999;
          top: 14px;
          left: calc(50% - 7px);
        }
      }

      .arrow_bottom {
        margin-left: 5px;
        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 13px solid #999;
          top: 16px;
          left: calc(50% - 8px);
        }
      }
    }
  }

  // 主页右侧
  .home-right {
    float: right;
    position: relative;
    width: 50%;
    height: 100%;
    background-color: #ccc;

    // 背景图片
    .event-image {
      width: 100%;
      height: 75%;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    // 详细信息
    .detail-info,
    .detail-info-long {
      position: absolute;
      bottom: 0;
      left: -2.5rem;
      width: 55%;
      height: 25rem;
      z-index: 100;
      background-color: #000;
      color: #fff;

      .more_info {
        list-style-type: none;
        width: 100%;
        text-align: center;
        padding: 0px;
        margin-top: 6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      li {
        font-size: 1.5rem;

        & p {
          font-weight: bolder;
          margin-bottom: 5px;
        }

        & span {
          color: #ddd;
          font-size: 20px;
        }
      }

      .see_more {
        width: 100%;
        position: absolute;
        bottom: 4rem;
        left: 0;
        text-align: center;
        font-size: 24px;
        color: #ccc;
        cursor: pointer;
      }
    }
    .detail-info-long {
      height: 100%;
    }

    // name可以根据自己定义来改变css类的前缀名，  默认v-enter-from
    .name-enter-from,
    .name-leave-to {
      opacity: 0;
    }
    .name-enter-to,
    .name-leave-from {
      opacity: 1;
    }
    .name-enter-active,
    .name-leave-active {
      // transiton: 过度效果css属性名称 过度时间 过度速度曲线 何时开始
      transition: opacity 2s ease;
    }
    // 跳转页面
    .home-to-article {
      position: absolute;
      right: 0px;
      bottom: 0%;
      width: 50%;
      height: 25%;
      text-align: center;
      background-color: #fee9b1;

      > p {
        margin-top: 100px;
        font-size: 20px;
        font-weight: 900;
      }
      > a {
        font-size: 18px;
        font-weight: 100;
        text-decoration: none;
        color: #666;
      }
    }
  }
}
</style>
