<template>
  <div class="home-second">
    <!-- 时间轴 -->
    <div class="second-left test-1" @mouseenter.prevent="stopMove">
      <div class="timeline-title">
        <h2>抗日战争十大战役</h2>
      </div>
      <div class="timeline" v-for="item in warFight" :key="item.id">
        <div class="timeline-date">{{ item.date }}</div>
        <div class="dot"></div>
        <div class="timeline-content">{{ item.title }}</div>
      </div>
      <!-- 滚动条 -->
      <div class="scrollbar" />
    </div>
    <!-- 书 -->
    <div class="second-right">
      <div class="book">
        <div
          class="paper current"
          v-for="item in 5"
          :key="item"
          ref="paperTarget"
        >
          <div class="page front" @click="flipPageFont">
            <label>front</label>
          </div>
          <div class="page back" @click="flipPageBack">
            <label>back</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
("HomeShowDetail");
// 初始化数据
const warFight = ref([
  {
    id: 1,
    title: "淞沪会战",
    date: "1937年8月",
  },
  {
    id: 2,
    title: "上高会战",
    date: "1941年3月",
  },
  {
    id: 3,
    title: "南京保卫战",
    date: "1937年12月",
  },
  {
    id: 4,
    title: "太原会战",
    date: "1937年9月",
  },
  {
    id: 5,
    title: "徐州会战",
    date: "1938年1月",
  },
  {
    id: 6,
    title: "武汉保卫战",
    date: "1938年6月",
  },
  {
    id: 7,
    title: "长沙会战",
    date: "1939年9月",
  },
  {
    id: 8,
    title: "桂南会战",
    date: "1939年11月",
  },
  {
    id: 9,
    title: "滇缅之战",
    date: "1942年3月",
  },
  {
    id: 10,
    title: "湘西会战",
    date: "1945年4月",
  },
]);

const stopMove = onMounted(() => {
  document.addEventListener("mousewheel", (e) => {
    e.stopPropagation();
    e.preventDefault();
  });
});

const current = ref(0);
const paperTarget = ref("");
onMounted(() => {
  let papers = document.querySelectorAll(".paper");
  let paper = papers[current.value];
  console.log(paper);
});

onMounted(() => {
  var papers = document.querySelectorAll(".paper");
  document.querySelector(".book").addEventListener("click", function () {
    var curentPapper = papers[current.value];
    curentPapper.classList.add("current");
    curentPapper.classList.add("flip");
    Array.from(papers).forEach(function (paper, index) {
      if (index !== current.value) {
        paper.classList.remove("current");
      }
    });
    current.value += 1;
    if (current.value >= papers.length) {
      current.value = 0;
    }
  });
});
</script>

<style lang="scss" scoped>
.home-second {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #eee;
}
.second-left {
  width: 20%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  -ms-scroll-chaining: contain;

  // 滚动条样式设置
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  // 时间轴标题
  .timeline-title {
    width: 100%;
    text-align: center;
    padding: 20px 0px 10px 0px;
    font-size: 32px;
    color: #851d20;
    border-radius: 30px;
    margin-bottom: 40px;
  }
  // 时间轴样式
  .timeline {
    width: 100%;
    height: auto;
    padding-top: 20px;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    color: #851d20;
    .timeline-date {
      // float: left;
      width: 120px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
    }
    .dot {
      position: relative;
      // float: left;
      height: 50px;
      width: 1px;
      background-color: black;
      margin: 0px 10px;
      &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: -4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
      }
    }
    .timeline-content {
      // float: left;
      width: 140px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 28px;
      border-radius: 10px;
      border: 3px #ccc;
    }
  }
}
.second-right {
  width: 80%;
  height: 100%;
  float: left;
  position: relative;
}
.book {
  width: 80%;
  height: 80%;
  background: #fff;
  perspective: 1000px;
  position: relative;
  transform: translate(12.5%, 12.5%);
}
.paper {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 50%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: left center;
  transition: all 1s ease-in;
}
.paper {
  z-index: 2;
}
.paper.current + .paper {
  z-index: 20;
}
.paper.current {
  z-index: 40;
}
.page {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  color: #fff;
  backface-visibility: hidden;
}
.page.front {
  background: rgb(0, 177, 150);
}
.page.back {
  background: rgb(154, 155, 154);
  transform: rotateY(180deg);
}
.paper.flip {
  transform: rotateY(-180deg);
}
.paper.flipback {
  transform: rotateY(180deg);
}
</style>
