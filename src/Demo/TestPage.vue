<template>
  <div class="warVideo">
    <div class="wrapper">
      <!-- 播放器 -->
      <div class="js-video">
        <div id="mse"></div>
      </div>
      <!-- 选集 -->
      <div class="anthology">
        <!-- 标题 -->
        <div class="title_box">
          <div class="title">
            <h2>
              <span>九一八事变</span>
            </h2>
          </div>
        </div>
        <!-- 集 -->
        <div class="collection">
          <ul>
            <li
              class="select-item"
              :class="item.selected ? 'selected' : ''"
              v-for="item in videoData"
              :key="item.id"
            >
              <div class="select-title">
                <span>{{ item.setNumber }}</span>
                <a href="javascript:;">{{ item.name }}</a>
              </div>
              <i :class="item.selected ? 'playon-icon' : ''"></i>
            </li>
            <!-- <li class="select-item">
              <div class="select-title">
                <span>02</span>
                <a href="javascript:;">铭记九一八 滔天罪行</a>
              </div>
              <i></i>
            </li>
            <li class="select-item">
              <div class="select-title">
                <span>03</span>
                <a href="javascript:;">铭记九一八 中流砥柱</a>
              </div>
              <i></i>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Player from "xgplayer";
import { onMounted, ref } from "vue";

export default {
  setup() {
    // 九一八事变纪录片数据
    let videoData = ref([
      {
        id: 1,
        setNumber: "01",
        name: "铭记九一八 蓄谋已久",
        url: "@/assets/video/918/中国网络电视台-《国家记忆》 20210913 铭记九一八 蓄谋已久[超清版].mp4",
        selected: true,
      },
      {
        id: 2,
        setNumber: "02",
        name: "铭记九一八 滔天罪行",
        url: "@/assets/video/918/中国网络电视台-《国家记忆》 20210914 铭记九一八 滔天罪行[超清版].mp4",
        selected: false,
      },
      {
        id: 3,
        setNumber: "03",
        name: "铭记九一八 中流砥柱",
        url: "@/assets/video/918/中国网络电视台-《国家记忆》 20210915 铭记九一八 中流砥柱[超清版].mp4",
        selected: false,
      },
      {
        id: 4,
        setNumber: "04",
        name: "铭记九一八 众志成城",
        url: "@/assets/video/918/中国网络电视台-《国家记忆》 20210916 铭记九一八 众志成城[超清版].mp4",
        selected: false,
      },
      {
        id: 5,
        setNumber: "05",
        name: "铭记九一八 并肩战斗",
        url: "@/assets/video/918/中国网络电视台-《国家记忆》 20210917 铭记九一八 并肩战斗[超清版].mp4",
        selected: false,
      },
    ]);

    onMounted(() => {
      new Player({
        id: "mse",
        url: require("@/assets/video/918/中国网络电视台-《国家记忆》 20210913 铭记九一八 蓄谋已久[超清版].mp4"),
        // 网页样式全屏
        cssFullscreen: true,
        // 流式布局
        fluid: true,
        // 键盘按键控制默认
        keyShortcut: "on",
        videoInit: true,
      });
    });

    return {
      videoData,
    };
  },
};
</script>

<style lang="scss">
html {
  background: #494a5f;
  background-size: cover;
  height: 100%;
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

.warVideo {
  width: 1066px;
  height: 100%;

  .wrapper {
    background-color: #222328;
    margin-top: 50px;
    border-radius: 4px;

    .js-video {
      display: inline-block;
      width: 800px;
      height: 462px;
      padding: 10px;
      box-sizing: border-box;
    }

    .anthology {
      float: right;
      width: 260px;
      height: 462px;
      padding: 10px;
      padding-top: 0;
      box-sizing: border-box;

      .title_box {
        .title {
          h2 {
            span {
              font-weight: 400;
              font-size: 20px;
              color: hsla(0, 0%, 100%, 0.9);
              font-family: "微软雅黑";
            }
          }
        }
      }

      .collection {
        ul {
          margin: 0;
          margin-top: 20px;
          list-style: none;
          padding: 0;

          li:hover {
            color: #00cc4c;
          }

          .select-item {
            position: relative;
            padding-left: 10px;
            padding-right: 10px;
            height: 32px;
            line-height: 32px;
            font-size: 0;
            color: hsla(0, 0%, 100%, 0.7);
            box-sizing: border-box;
            cursor: pointer;
            transition: all 0.2s;

            .select-title {
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-family: Arial, PingFangSC-Regular, Microsoft Yahei;

              span {
                position: absolute;
                width: 30px;
                font-size: 15px;
              }

              a {
                padding-left: 40px;
                font-size: 14px;
                color: inherit;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
              }
            }

            i {
              display: none;
              position: absolute;
              right: 10px;
              top: 12px;
              width: 10px;
              height: 8px;
              background: url("../assets/images/playon-green.gif") no-repeat;
            }

            .playon-icon {
              display: block;
            }
          }

          .selected {
            padding-right: 28px;
            border-radius: 3px;
            background-color: #1d2129;
            color: #00cc4c;
          }
        }
      }
    }
  }
}
</style>
