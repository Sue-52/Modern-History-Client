<template>
  <div
    v-if="jumpWarBox"
    class="right-info"
    :class="{ active: jumpWarBox.open }"
    ref="targetWarDom"
  >
    <div class="territory-info-container">
      <div class="territory-component">
        <div class="territory-box">
          <div class="close-icon" @click="handleClose"></div>
          <div class="territory-wrap">
            <div class="base-info">
              <div class="title">
                <b
                  title="观看纪录片"
                  @click="handleGoVideo(jumpWarBox.warName)"
                >
                  {{ jumpWarBox.warName }}
                </b>
              </div>
              <div class="desc-box">
                <mavon-editor
                  v-model="warDetail"
                  :subfield="false"
                  :defaultOpen="'preview'"
                  :toolbarsFlag="false"
                  :editable="false"
                  :ishljs="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onClickOutside } from "@vueuse/core";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    jumpWarBox: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    let router = useRouter();
    // 弹出框dom
    let targetWarDom = ref();
    let warDetail = ref("");

    // 监听props的变化，改变战争详情
    watch(props, (update) => {
      // console.log(update.jumpWarBox);
      if (update.jumpWarBox.warIntroduce) {
        warDetail.value = update.jumpWarBox.warIntroduce;
      }
    });

    let obj = {
      open: false,
    };

    const handleClose = () => {
      emit("handleWarClose", obj);
    };

    // 当点击到目标dom的外面时隐藏
    onClickOutside(targetWarDom, () => {
      emit("handleWarClose", obj);
    });

    // 点击跳转到视频页
    const handleGoVideo = (warName) => {
      // 需要数据  视频标题，视频链接
      router.push({
        path: "/video",
        query: {
          title: warName,
        },
      });
    };

    return {
      targetWarDom,
      handleClose,
      warDetail,
      handleGoVideo,
    };
  },
};
</script>

<style lang="scss">
/* 战争信息弹出框 */
.right-info {
  opacity: 0;
  position: absolute;
  right: 8px;
  top: 66px;
  width: 340px;
  z-index: 11;
  font-family: "微软雅黑";
  cursor: default;

  .territory-component {
    position: relative;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
    transition: height 0.3s ease;

    .territory-wrap {
      display: flex;
      flex-direction: column;
      padding: 8px 0 28px;
      height: 100%;
    }

    .close-icon {
      background-image: url(https://static.allhistory.com/online/view/Map/img/close-icon.f6a6.png);
      position: absolute;
      top: 4px;
      right: 4px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
    }

    .title {
      padding: 12px 0;
      line-height: 20px;
      font-weight: 700;
      margin: 0 24px;
      border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.22);

      b {
        cursor: pointer;
      }
    }

    .desc-box {
      height: 352px;
      margin: 9px 16px 0 24px;
      flex: 1;
      overflow: auto;
      box-sizing: border-box;
    }

    .desc-box::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }

    .desc-box::-webkit-scrollbar-thumb {
      background-color: #ccc;
    }

    .desc-box::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
  }
}

.desc-box .territoryDesc {
  position: relative;
  padding-right: 8px;
  line-height: 18px;
  font-size: 14px;
  height: 100%;
  color: #666;
}

.scroll-style-border-radius,
.scroll-style-border-radius pre {
  padding: 0 !important;
}

.markdown-body {
  height: 100% !important;
}

.markdown-body p {
  font-size: 13px;
}

.active {
  opacity: 1;
  z-index: 888;
}
</style>
