<template>
  <div id="book-wrapper">
    <div id="book-zoom" class="animate">
      <div id="flipbook" class="sj-book animated">
        <div id="home" class="hard"></div>
        <div class="hard"></div>
        <div>Page 1</div>
        <div>Page 2</div>
        <div>Page 3</div>
        <div>Page 4</div>
        <div class="hard"></div>
        <div class="hard"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    // let imgUrl = [{}, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // return {
    //   imgUrl,
    // };
  },
  mounted() {
    this.$nextTick(() => {
      $("#flipbook").turn({
        autoCenter: true,
        height: 600,
        width: 960,
      });
    });
  },
};
</script>

<style lang="scss">
#book-wrapper {
  width: 960px;
  height: 600px;
  margin-left: 20px;
  margin-right: 20px;

  #book-zoom {
    /* 书本打开关闭位移动画 */
    .animated {
      transition: margin-left 0.2s ease-in-out;
    }

    #flipbook {
      /* 书籍封面和背面，仿硬纸板样式 */
      .hard {
        background: #ccc !important;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        box-shadow: inset 0 0 10px #666;
      }

      #home {
        background: url("../assets/images/bgImage.jpg") !important;
        background-size: 100% 100% !important;
      }

      .page {
        width: 200px;
        height: 200px;
        background-color: white;
        font-size: 20px;
      }

      .odd {
        background: -webkit-gradient(
          linear,
          right top,
          left top,
          color-stop(0.95, #fff),
          color-stop(1, #dadada)
        );
        background-image: -webkit-linear-gradient(
          right,
          #fff 95%,
          #c4c4c4 100%
        );
        box-shadow: inset 0 0 5px #666 !important;
      }

      .even {
        box-shadow: inset 0 0 5px #666 !important;
      }

      .page-wrapper {
        -webkit-perspective: 2000px;
        -moz-perspective: 2000px;
        -ms-perspective: 2000px;
        -o-perspective: 2000px;
        perspective: 2000px;
      }
    }
  }

  .animate {
    transition: transform 1s;
  }
}
</style>
