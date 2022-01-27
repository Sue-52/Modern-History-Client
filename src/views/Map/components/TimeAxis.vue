<template>
  <div class="time_axis">
    <!-- 3D切换 -->
    <div class="swiper" id="swiper3D">
      <div class="swiper-wrapper">
        <div class="swiper-slide">1931</div>
        <div class="swiper-slide">1932</div>
        <div class="swiper-slide">1937</div>
        <div class="swiper-slide">1938</div>
        <div class="swiper-slide">1939</div>
        <div class="swiper-slide">1940</div>
        <div class="swiper-slide">1941</div>
        <div class="swiper-slide">1942</div>
        <div class="swiper-slide">1943</div>
        <div class="swiper-slide">1945</div>
      </div>
    </div>

    <!-- 缩略图 -->
    <div class="swiper" id="swiperThumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span>1931</span>
        </div>
        <div class="swiper-slide">
          <span>1932</span>
        </div>
        <div class="swiper-slide">
          <span>1937</span>
        </div>
        <div class="swiper-slide">
          <span>1938</span>
        </div>
        <div class="swiper-slide">
          <span>1939</span>
        </div>
        <div class="swiper-slide">
          <span>1940</span>
        </div>
        <div class="swiper-slide">
          <span>1941</span>
        </div>
        <div class="swiper-slide">
          <span>1942</span>
        </div>
        <div class="swiper-slide">
          <span>1943</span>
        </div>
        <div class="swiper-slide">
          <span>1945</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { EffectCube, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";

export default {
  name: "TimeAxis",
  mounted() {
    new SwiperCore("#swiper3D", {
      modules: [EffectCube, Thumbs],
      effect: "cube",
      observer: true,
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
      opacity: 0.4;

      span {
        color: rgba(255, 255, 255, 0.4);
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
