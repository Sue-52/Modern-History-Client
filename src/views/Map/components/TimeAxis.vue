<template>
  <div class="time_axis">
    <!-- 3D切换 -->
    <div class="swiper" id="swiper3D">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in timeArr" :key="item">
          {{ item }}
        </div>
      </div>
    </div>

    <!-- 缩略图 -->
    <div class="swiper" id="swiperThumbs">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in timeArr"
          :key="item"
          @click="handleNowYear(item)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { EffectCube, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";
import { onMounted } from "vue";

export default {
  name: "TimeAxis",
  setup(props, { emit }) {
    // 时间轴死数据
    let timeArr = [1931, 1932, 1937, 1938, 1939, 1940, 1941, 1942, 1943];
    // 时间轴轮播图
    onMounted(() => {
      new SwiperCore("#swiper3D", {
        modules: [EffectCube, Thumbs],
        effect: "cube",
        observer: true,
        on: {
          touchEnd: function (swiper) {
            // 当年份为1931是保存数据的长度
            let timeLength = 12;
            let nowtimeStr = swiper.$el[0].innerText.replaceAll("\n", "");
            let ThreeYear = nowtimeStr.substr(4, 4);

            if (nowtimeStr.length === timeLength) {
              ThreeYear = 1931;
            }

            emit("handleTimeAxis", ThreeYear);
          },
        },
        // 3D旋转阴影样式设置
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.54,
        },
        thumbs: {
          swiper: {
            el: "#swiperThumbs",
            // 两个slide之间的距离
            spaceBetween: 10,
            // 展示数量
            slidesPerView: 6,
            watchSlidesVisibility: true /*避免出现bug*/,
          },
        },
      });
    });

    // 获取当前选中的年份
    const handleNowYear = (ThreeYear) => {
      emit("handleTimeAxis", ThreeYear);
    };

    return {
      timeArr,
      handleNowYear,
    };
  },
};
</script>

<style lang="scss">
.time_axis {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}

.swiper {
  cursor: default;
}

#swiper3D {
  width: 50px;
  height: 50px;
  overflow: visible;

  .swiper-wrapper {
    position: absolute;

    .swiper-slide {
      color: rgb(231, 216, 216);
      font-weight: 700;
      font-size: 12px;
      text-align: center;
      line-height: 50px;
    }
  }
}

#swiperThumbs {
  margin-top: 24px;
  line-height: 60px;
  background-color: rgb(105, 53, 53);

  .swiper-wrapper {
    .swiper-slide {
      font-weight: 700;
      font-size: 30px;
      text-align: center;
      opacity: 0.6;

      span {
        color: rgba(255, 255, 255, 1);
      }
    }

    .swiper-slide-thumb-active {
      opacity: 1;

      span {
        color: #fff;
      }
    }
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  background: grey;
}
</style>
