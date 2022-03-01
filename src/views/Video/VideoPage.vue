<template>
  <Loading :isShowLoading="isShowLoading"></Loading>
  <div class="warVideo">
    <div class="wrapper">
      <!-- 播放器 -->
      <jsVideo
        :key="videoUrl"
        :videoExtend="videoExtend"
        :videoUrl="videoUrl"
        @handleExtend="handleExtend"
        @handleScale="handleScale"
      ></jsVideo>
      <!-- 选集 -->
      <div class="anthology" :class="anthologyCut ? 'anthologyHide' : ''">
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
              @click="handleChangeAnthology(item)"
            >
              <div class="select-title">
                <span>{{ item.setNumber }}</span>
                <a href="javascript:;">{{ item.name }}</a>
              </div>
              <i :class="item.selected ? 'playon-icon' : ''"></i>
            </li>
          </ul>
        </div>
        <!-- 简介 -->
        <div class="synopsis">
          <span>简介</span>
          <p>
            该片讲述日军蓄谋已久策动九一八事变，建立伪满政权，分裂中国，在中国东北建立细菌武器研制基地，制造南京大屠杀等罪恶行径。面对日军犯下的种种滔天罪行，中国人民奋起反抗，自九一八事变开始到1945年抗日战争胜利，中华大地涌现出一批又一批可歌可泣的英雄人物。在中国共产党的领导下，中国人民同反法西斯同盟国以及各国人民并肩战斗取得伟大胜利。
          </p>
        </div>
      </div>
    </div>
    <!-- 温馨提示 -->
    <div class="tips">
      <p>
        温馨提示：电脑配置不高，最好先等待视频首帧展示之后再点击播放，否则电脑可能会出现卡死蓝屏！！！
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import jsVideo from "./components/jsVideo.vue";
import { useRoute } from "vue-router";
import Loading from "@/views/Loading/Loading.vue";

export default {
  setup() {
    let route = useRoute();
    // loading显示隐藏
    let isShowLoading = ref(true);
    // 选集盒子隐藏
    let anthologyCut = ref(false);
    // 播放器盒子扩展
    let videoExtend = ref(false);
    // 视频url
    let videoUrl = ref(
      "中国网络电视台-《国家记忆》 20210913 铭记九一八 蓄谋已久[超清版]"
    );
    // 九一八事变纪录片静态数据
    let videoData = ref([
      {
        id: 1,
        setNumber: "01",
        name: "铭记九一八 蓄谋已久",
        url: "中国网络电视台-《国家记忆》 20210913 铭记九一八 蓄谋已久[超清版]",
        selected: true,
      },
      {
        id: 2,
        setNumber: "02",
        name: "铭记九一八 滔天罪行",
        url: "中国网络电视台-《国家记忆》 20210914 铭记九一八 滔天罪行[超清版]",
        selected: false,
      },
      {
        id: 3,
        setNumber: "03",
        name: "铭记九一八 中流砥柱",
        url: "中国网络电视台-《国家记忆》 20210915 铭记九一八 中流砥柱[超清版]",
        selected: false,
      },
      {
        id: 4,
        setNumber: "04",
        name: "铭记九一八 众志成城",
        url: "中国网络电视台-《国家记忆》 20210916 铭记九一八 众志成城[超清版]",
        selected: false,
      },
      {
        id: 5,
        setNumber: "05",
        name: "铭记九一八 并肩战斗",
        url: "中国网络电视台-《国家记忆》 20210917 铭记九一八 并肩战斗[超清版]",
        selected: false,
      },
    ]);

    // loading加载中
    setTimeout(() => {
      isShowLoading.value = false;
    }, 1800);

    // 点击扩展按钮
    const handleExtend = () => {
      anthologyCut.value = true;
      videoExtend.value = true;
    };

    // 点击缩放按钮
    const handleScale = () => {
      anthologyCut.value = false;
      videoExtend.value = false;
    };

    // 切换当前集
    const handleChangeAnthology = (item) => {
      // 存放视频url
      videoUrl.value = item.url;

      // 选集选中
      videoData.value.forEach((ele) => {
        ele.selected = false;
        if (ele.id === item.id) {
          ele.selected = true;
        }
      });
    };

    return {
      title: route.query.title,
      isShowLoading,
      videoData,
      handleExtend,
      anthologyCut,
      videoExtend,
      handleScale,
      handleChangeAnthology,
      videoUrl,
    };
  },
  components: {
    Loading,
    jsVideo,
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
    position: absolute;
    top: 50%;
    background-color: #222328;
    border-radius: 4px;
    transform: translate(0, -50%);

    .js-video {
      position: relative;
      display: inline-block;
      width: 800px;
      height: 454px;
      padding: 10px;
      box-sizing: border-box;

      .button {
        .player-icons {
          position: absolute;
          top: 50%;
          right: -6px;
          display: none;
          margin-top: -30px;

          .qy-play-icon {
            display: inline-block;
            width: 16px;
            height: 60px;
            background-image: url("../../assets/images/sprite-play-aura3@2x.png");
            background-size: 200px 140px;
            cursor: pointer;
          }

          .unfold-icon {
            background-position: 0 0;
          }

          .fold-icon {
            background-position: -20px 0;
          }
        }

        .active {
          display: block;
        }
      }
    }

    /* 播放器盒子扩展 */
    .js-video-extend {
      width: 1060px;
      height: 600px;
      transition: all 0.3s;
    }

    .anthology {
      float: right;
      width: 260px;
      height: 462px;
      padding: 10px;
      padding-top: 0;
      box-sizing: border-box;
      display: block;

      /* 标题 */
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

      /* 集 */
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
              background: url("../../assets/images/playon-green.gif") no-repeat;
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

      /* 简介 */
      .synopsis {
        color: #babbbd;
        width: 100%;
        margin-top: 26px;

        span {
          font-size: 18px;
        }

        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
          overflow: hidden;
          margin: 0;
        }
      }
    }

    /* 选集盒子隐藏 */
    .anthologyHide {
      display: none;
    }
  }

  .tips {
    color: #ccc;
    font-size: 20px;
    font-family: "黑体";
  }
}
</style>
