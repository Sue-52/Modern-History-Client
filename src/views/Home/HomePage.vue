<template>
  <div class="home-page">
    <div class="home-left">
      <!-- 标题名 -->
      <div class="home-title">
        <img src="../../assets/images/1640179657_348262.png" alt="" />
      </div>
      <!-- 右侧列表栏 -->
      <div class="home-list"><span></span><span></span><span></span></div>
      <!-- 索引展示 -->
      <div class="home-index">
        <span class="index_inner">01</span>
        <span class="index_total">04</span>
      </div>
      <!-- 事件名 -->
      <div class="home-event">
        <h1>九一八事变</h1>
        <div class="event_content">
          九·一八事变，又称奉天事变、柳条湖事件。
          是1931年9月18日日本驻中国东北地区的关东军突然袭击沈阳，以武力侵占东北的事件。
          九·一八事变是由日本蓄意制造并发动的侵华战争，是日本帝国主义企图以武力征服中国的开端，是中国抗日战争的起点，标志着中国局部抗战的开始，揭开了第二次世界大战东方战场的序幕。九一八事变后，中国人民的局部抗战也标志着世界反法西斯战争的起点。
        </div>
      </div>
      <!-- 轮播图箭头 -->
      <div class="home-arrow">
        <span class="arrow_top circle"></span>
        <span class="arrow_bottom circle"></span>
      </div>
    </div>
    <div class="home-right">
      <!-- 右侧背景图片 -->
      <div class="event-image"></div>
      <!-- 详细信息 -->
      <div class="detail-info">
        <ul class="more_info">
          <li>
            <p>中方主要指挥官：</p>
            <span>张学良</span>
          </li>
          <li>
            <p>日方主要指挥官：</p>
            <span>本庄繁，南次郎</span>
          </li>
        </ul>
        <div class="see_more">查看更多信息</div>
      </div>
      <!-- 进入文章页面 -->
      <div class="home-to-article">
        <p>想知道更多相关的信息吗？</p>
        <a href="#"> 跳转到文章页面 ——> </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import DemoPage from "@/Demo/DemoPage.vue";
</script>

<style lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  font-family: cursive;
  overflow: hidden;

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
      background: url("../../assets/images/9-18.jpg") no-repeat;
      background-size: 100% 100%;
    }
    // 详细信息
    .detail-info {
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
        text-align: center;
        margin-top: 4rem;
        font-size: 24px;
        color: #ccc;
        cursor: pointer;
      }
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
