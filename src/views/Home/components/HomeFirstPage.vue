<template>
  <div
    class="home-page"
    v-for="(item, index) in data"
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
        <span class="index_total">0{{ data.length }}</span>
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
        <img :src="item.Image" v-if="true" />
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
import image01 from "@/assets/images/01.9-18.jpg";
import image02 from "@/assets/images/02.changzheng.jpg";
import image03 from "@/assets/images/03.songhuhuizhan.jpg";
import image04 from "@/assets/images/04.xuzhouhuizhan.jpg";
import image05 from "@/assets/images/05.changshahuizhan.jpg";
import image06 from "@/assets/images/06.xiangxihuizhan.webp";

const data = ref([
  {
    id: 1,
    title: "九一八事变",
    description:
      "九·一八事变，又称奉天事变、柳条湖事件。是1931年9月18日日本驻中国东北地区的关东军突然袭击沈阳，以武力侵占东北的事件。九·一八事变是由日本蓄意制造并发动的侵华战争，是日本帝国主义企图以武力征服中国的开端，是中国抗日战争的起点，标志着中国局部抗战的开始，揭开了第二次世界大战东方战场的序幕。九一八事变后，中国人民的局部抗战也标志着世界反法西斯战争的起点。",
    Image: image01,
    moreInfo: {
      otherName: ["奉天事变", "柳条湖事件"],
      happenTiem: "1931年9月18日",
      place: "中国东北地区",
      mainPerson: {
        china: "张学良",
        japan: "本庄繁，南次郎",
      },
      consequence: "日本占领东北三省，退出国际联盟",
      result: "日本获胜,占领东北三省",
    },
  },
  {
    id: 2,
    title: "长征",
    description:
      "土地革命战争时期，中国工农红军主力撤离长江南北各苏区，转战两年，到达陕甘苏区的战略转移行动。1934年10月，第五次反“围剿”失败后，中央主力红军为摆脱国民党军队的包围追击，被迫实行战略性转移，退出中央根据地，进行长征。",
    Image: image02,
    moreInfo: {
      otherName: ["长征"],
      happenTiem: "1934年10月 - 1936年10月",
      place: "闽赣粤湘桂黔川滇 西康 甘陕等",
      mainPerson: {
        china: "毛泽东、周恩来、朱德、张闻天等",
        japan: "",
      },
      consequence: "北上抗日、摆脱敌军“围剿”",
      result: "宣言书、宣传队、播种机",
    },
  },
  {
    id: 3,
    title: "淞沪会战",
    description:
      "淞沪会战（又称八一三战役、第二次淞沪抗战，日本称为第二次上海事变），是中日双方在抗日战争中的第一场大型会战，也是整个中日战争中进行的规模最大、战斗最惨烈的一场战役。 ",
    Image: image03,
    moreInfo: {
      otherName: ["八一三战役", "第二次淞沪抗战"],
      happenTiem: "1937年8月13日 - 1937年11月12日",
      place: "上海",
      mainPerson: {
        china: "冯玉祥（后由蒋介石兼任）",
        japan: "松井石根",
      },
      consequence: "日本获胜，上海沦陷",
      result: "粉碎了“三个月灭亡中国”计划",
    },
  },
  {
    id: 4,
    title: "徐州会战",
    description:
      "徐州会战是抗日战争时期中日双方在以江苏省徐州为中心的津浦（天津至浦口）、陇海（宝鸡至连云港）铁路地区进行的一次大规模防御战役，其中以1938年三四月间的台儿庄大战最为著名，因围歼日军一万余人，史称之为台儿庄大捷。徐州会战对日军给予了巨大的打击，大大迟滞了日军进攻的脚步，为中方部署武汉会战赢得了时间。",
    Image: image04,
    moreInfo: {
      otherName: ["徐州会战"],
      happenTiem: "1938年1月 - 5月",
      place: "江苏省徐州为中心的津浦、陇海地区",
      mainPerson: {
        china: "李宗仁",
        japan: "寺内寿一",
      },
      consequence: "为武汉保卫战赢得时间",
      result: "徐州沦陷",
    },
  },
  {
    id: 5,
    title: "第一次长沙会战",
    description:
      "第一次长沙会战（又称为“第一次长沙战役”、“湘北会战”，日本称“湘赣会战”），是指中华民国二十八年（1939年）9月至10月抗日战争期间，中国第九战区部队在以湖南、湖北、江西三省接壤地区对日本军队进行的防御战役。",
    Image: image05,
    moreInfo: {
      otherName: ["第一次长沙战役", "湘北会战"],
      happenTiem: "1939年9月 - 1939年10月",
      place: "湖南、湖北、江西三省接壤地区",
      mainPerson: {
        china: "薛岳、罗卓英",
        japan: "冈村宁次",
      },
      consequence: "国民政府粮食、兵员及工业资源的重要供给基地",
      result: "中国获胜",
    },
  },
  {
    id: 6,
    title: "湘西会战",
    description:
      "湘西会战，也称“雪峰山会战”，是中国抗日战争时期正面战场的最后一次会战。侵华日军此战目的是争夺芷江空军基地，故又名“芷江作战”",
    Image: image06,
    moreInfo: {
      otherName: ["雪峰山会战", "芷江保卫战"],
      happenTiem: "1945年4月9日 - 6月7日",
      place: "湖南省西部地区",
      mainPerson: {
        china: "何应钦、王耀武",
        japan: "坂西一良",
      },
      consequence: "抗日战争最后一次会战",
      result: "中国军队获胜，日军败退",
    },
  },
]);
// 展示更多信息
const isShow = ref(true);
const toggle = () => {
  isShow.value = !isShow.value;
};
// 轮播图设置
const currentIndex = ref(0);
const handleClike = (step) => {
  const nextStep = (currentIndex.value += step);
  console.log(nextStep);
  if (nextStep <= 0) {
    currentIndex.value = data.value.length - 1;
  } else if (nextStep > data.value.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = nextStep;
  }
  return nextStep;
};
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
