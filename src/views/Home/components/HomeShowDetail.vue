<template>
  <div class="home-second">
    <!-- 版心 -->
    <div class="center">
      <!-- 文字介绍 -->
      <div class="details">
        <!-- 图书馆logo -->
        <i class="libraryLogo"></i>
        <h1>
          <font>部分抗战书籍展览</font>
        </h1>
        <ul>
          <li>
            <font>中国人民抗日战争</font>
          </li>
          <li>
            <font>是中华民族历史上最伟大的卫国战争</font>
          </li>
          <li>
            <font>是中国人民反抗日本帝国主义侵略的正义战争</font>
          </li>
          <li>
            <font>是世界反法西斯战争的重要组成部分</font>
          </li>
          <li>
            <font>也是中国近代以来抗击外敌入侵</font>
          </li>
          <li>
            <font>第一次取得完全胜利的民族解放战争</font>
          </li>
        </ul>
      </div>
      <!-- 书籍展示 -->
      <div class="bookshelf">
        <!-- 书架 -->
        <div class="shelf">
          <div class="row-1">
            <div class="loc">
              <!-- 书籍 -->
              <div class="book" v-for="item in bookList" :key="item.id">
                <div
                  class="sample thumb1"
                  :class="item.hover ? 'hover' : ''"
                  @mouseenter="handleEnterBook(item)"
                  @mouseleave="handleLeaveBook"
                  @click="handleOpenBook(item)"
                  :style="`background-image: url(${require('../../../assets/images/' +
                    item.cover)})`"
                ></div>
              </div>
            </div>
          </div>
          <div class="row-2"></div>
        </div>
        <div class="suggestion">
          <font style="vertical-align: inherit">↑ 点击一本书查看</font>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    let hover = ref(false);

    // 书籍数据
    let bookList = ref([
      {
        id: 1,
        bookName: "中国抗日战争全记录",
        cover: "FullRecord/1.jpg",
        hover: false,
        picNum: 18,
      },
      {
        id: 2,
        bookName: "日军镜头中的抗日战争",
        cover: "ReporterMeans/1.jpg",
        hover: false,
        picNum: 18,
      },
      {
        id: 3,
        bookName: "九一八事变",
        cover: "918.png",
        hover: false,
        picNum: 6,
      },
    ]);

    // 鼠标进入书籍范围
    const handleEnterBook = (item) => {
      bookList.value.forEach((ele) => {
        ele.hover = false;
        if (ele.id === item.id) {
          ele.hover = true;
        }
      });
    };

    // 鼠标离开书籍范围
    const handleLeaveBook = () => {
      bookList.value.forEach((ele) => {
        ele.hover = false;
      });
    };

    // 点击书籍
    const handleOpenBook = (item) => {
      // console.log(item);
      router.push({
        name: "Book",
        query: {
          bookName: item.bookName,
        },
        params: {
          url: item.cover,
          picNum: item.picNum,
        },
      });
    };

    return {
      hover,
      handleEnterBook,
      handleLeaveBook,
      handleOpenBook,
      bookList,
    };
  },
};
</script>

<style lang="scss">
.home-second {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../../../assets/images/splash-bg.jpg") bottom left repeat-x;
  font-family: "District Thin", helvetica, arial;

  .center {
    width: 1000px;
    height: 700px;
    margin: auto;
    position: relative;
    z-index: 0;

    /* 文字介绍 */
    .details {
      float: left;
      margin-top: 150px;

      .libraryLogo {
        display: inline-block;
        width: 400px;
        height: 82px;
        background: url("../../../assets/images/libraryBag.png") no-repeat;
        background-size: 100%;
        background-position: -22px 0;
        margin-left: -2px;
      }

      h1 {
        color: #333;
        font-weight: lighter;
        font-size: 38px;
        margin: 20px 0;
        -webkit-text-fill-color: #333;
        -webkit-text-stroke-color: white;
        -webkit-text-stroke-width: 0.005em;
      }

      ul {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          font-size: 23px;
          font-weight: lighter;
          line-height: 30px;
          color: #333;
          -webkit-text-fill-color: #333;
          -webkit-text-stroke-color: white;
          -webkit-text-stroke-width: 0.0005em;
        }
      }
    }

    /* 书籍展示 */
    .bookshelf {
      float: right;
      margin-top: 140px;
      transition: all 1s;

      .shelf {
        width: 426px;
        height: 440px;

        .row-1 {
          position: relative;
          width: 360px;
          height: 158px;
          margin-left: 33px;

          .loc {
            position: absolute;
            bottom: 0;
            width: 100%;

            .book {
              width: 33%;
              height: 100%;
              float: left;
              text-align: center;
              position: relative;

              .thumb1 {
                width: 92px;
                height: 115px;

                background-size: 100%;
              }

              .sample {
                margin: auto;
                position: relative;
                z-index: 1;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
                transition: transform 0.1s;
                transform: translate(0, 0);
              }

              /* 鼠标触碰书籍 */
              .hover {
                z-index: 2;
                cursor: none;
                transform: scale3d(1.1, 1.1, 1) translate3d(0, -5px, 0);
              }
            }
          }
        }

        .row-2 {
          position: relative;
          margin-top: 20px;
          height: 164px;
          width: 360px;
          margin-left: 33px;
        }

        .row-1::after,
        .row-2::after {
          background: url("../../../assets/images/wall-bookshelf.png");
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: bottom left;
          width: 426px;
          height: 210px;
          display: block;
          content: "";
          margin-left: -38px;
        }
      }

      .suggestion {
        font-size: 12px;
        color: #999;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
</style>
