<template>
  <div id="book-wrapper">
    <div id="book-zoom" class="animate">
      <div id="flipbook" class="sj-book animated">
        <div id="home" class="hard" :style="url"></div>
        <div class="hard"></div>
        <div class="one" v-for="item in picList.picNum" :key="item">
          <div v-if="picList.blank"></div>
          <img :src="imgUrl(item)" alt="" v-else />
        </div>
        <div id="last" class="hard"></div>
        <div id="last_next" class="hard"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    // console.log(route.params);

    let url = ref(
      `background-image: url(${require("../../assets/images/" +
        route.params.url)}) !important;`
    );

    let picList = ref({
      title: route.query.bookName,
      picNum: Number(route.params.picNum),
      blank: false,
    });

    // 处理图片路径
    const imgUrl = (item) => {
      let num = item + 1;

      if (picList.value.title === "中国抗日战争全记录") {
        picList.value.blank = false;
        return require("@/assets/images/FullRecord/" + num + ".jpg");
      } else if (picList.value.title === "日军镜头中的抗日战争") {
        picList.value.blank = false;
        return require("@/assets/images/ReporterMeans/" + num + ".jpg");
      } else {
        picList.value.blank = true;
      }
    };

    return {
      url,
      picList,
      imgUrl,
    };
  },
  mounted() {
    this.$nextTick(() => {
      $("#flipbook").turn({
        autoCenter: true,
        height: 600,
        width: 942,
      });
    });
  },
};
</script>

<style lang="scss">
html {
  background: #494a5f;
  background-size: cover;
  height: 100%;
  font-size: 62.5%;
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

#book-wrapper {
  width: 942px;
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
        background-image: url("../../assets/images/book-covers.jpg") !important;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        box-shadow: inset 0 0 10px #666;
      }

      #home {
        background-size: 100% 100%;
      }

      .one {
        img {
          width: 100%;
          height: 100%;
        }
      }

      .p2 {
        background: url("../../assets/images/covers.jpg") !important;
        background-position: -471px 0 !important;
      }

      #last {
        background: url("../../assets/images/covers.jpg") !important;
        background-position: -942px 0 !important;
      }

      .page {
        width: 200px;
        height: 200px;
        background-color: white;
        font-size: 20px;
      }

      .odd {
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

      .shadow {
        box-shadow: 0 0 10px rgb(48, 46, 46);
      }
    }
  }

  .animate {
    transition: transform 1s;
  }
}
</style>
