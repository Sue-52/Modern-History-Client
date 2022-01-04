<template>
  <div
    class="pop-box-mask"
    :class="{ active: jumpPeopleBox }"
    v-if="PeopleList"
  >
    <div class="pop-content summary" ref="targetPeopleDom">
      <div class="icon-close-big pop-close" @click="handleClose"></div>
      <!-- 人物全部信息 -->
      <div class="summary-box" v-if="peopleNewOrSummary === 'new'">
        <div class="content-wraper">
          <section class="entry-base-info">
            <section class="base-info">
              <div class="entry-avatar">
                <img :src="PeopleList.picture" alt="" />
              </div>
              <div class="text-info">
                <div class="entry-name">{{ PeopleList.name }}</div>
                <div class="entry-desc entryDesc">{{ PeopleList.jianjie }}</div>
              </div>
            </section>
            <ul class="more-info">
              <li
                class="link-item linkItem active"
                title="概述"
                @click="peopleNewOrSummary = 'summary'"
              >
                概述
              </li>
              <li class="link-item linkItem" title="关系图谱">关系图谱</li>
              <li class="link-item linkItem" title="作品">作品</li>
              <li class="link-item linkItem" title="文章">文章</li>
            </ul>
          </section>
          <section class="entry-nodes">
            <div class="nodes-list">
              <div class="node-item nodeItem">
                <div class="title">{{ PeopleList.birth }}</div>
                <div class="desc descWrap">{{ PeopleList.shengping }}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- 人物简介和生平 -->
      <div class="summary-box" v-if="peopleNewOrSummary === 'summary'">
        <div class="content-wraper" style="text-align: center">
          <div class="content-title">
            <strong @click="peopleNewOrSummary = 'new'">
              {{ PeopleList.name }}
            </strong>
          </div>
          <div class="content-summary">
            <article class="data-summary">
              <p>{{ PeopleList.jianjie }}</p>
              <p>{{ PeopleList.shengping }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

export default {
  props: ["jumpPeopleBox", "PeopleList"],
  setup(props, { emit }) {
    // 弹出框dom
    let targetPeopleDom = ref();
    // 确定当前打开的是总人物信息还是人物概述
    let peopleNewOrSummary = ref("new");

    // 关闭人物信息框
    const handleClose = () => {
      emit("handlePeopleClose", false);
      peopleNewOrSummary.value = "new";
    };

    // 当点击到目标dom的外面时隐藏
    onClickOutside(targetPeopleDom, () => {
      emit("handlePeopleClose", false);
      peopleNewOrSummary.value = "new";
    });

    return {
      targetPeopleDom,
      peopleNewOrSummary,
      handleClose,
    };
  },
};
</script>

<style lang="scss">
.pop-box-mask {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  box-sizing: border-box;
  font-family: "微软雅黑";

  .pop-content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 840px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
    background: url(https://static.allhistory.com/online/view/Map/img/tag-unfinished.24c4.svg)
      no-repeat 0 0 #fff;
    padding: 16px 25px;
    margin-left: calc(-840px / 2);
    margin-top: -180px;

    .icon-close-big {
      width: 24px;
      height: 24px;
      position: absolute;
      right: -32px;
      top: 0;
      cursor: pointer;
      background-image: url(https://static.allhistory.com/online/view/Map/img/icon-close-white.29f2.svg);
    }

    .summary-box {
      display: flex;
      margin-top: 16px;
    }
  }
}

.summary-box {
  .content-wraper {
    flex-grow: 1;
    margin-top: 17px;
    margin-left: 24px;

    .entry-base-info {
      /* 人物简介盒子 */
      .base-info {
        display: flex;
        margin-bottom: 14px;
      }

      /* tab切换盒子 */
      .more-info {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 12px;
        margin-left: 98px;
      }
    }

    .entry-nodes {
      padding: 0 16px 16px;

      .nodes-list {
        border-top: 1px solid #ebebeb;
        padding-top: 7px;
      }
    }

    .content-title {
      font-size: 24px;
      color: #333;
      text-align: 0center;
      line-height: 24px;
      position: relative;
      display: inline-block;

      &::before {
        height: 1px;
        width: 100%;
        padding: 0 50px;
        box-sizing: content-box;
        background: #ececec;
        content: "";
        position: absolute;
        left: -50px;
        right: -50px;
        top: 12px;
      }

      strong {
        cursor: pointer;
      }
    }

    .content-summary {
      margin-top: 24px;
      text-align: left;
    }
  }
}

.base-info {
  .entry-avatar {
    width: 90px;
    height: 108px;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-info {
    flex: 1;

    .entry-name {
      font-size: 16px;
      line-height: 22px;
      font-weight: 700;
      margin-bottom: 10px;
      margin-right: 24px;
    }

    .entry-desc {
      line-height: 20px;
      font-size: 12px;
      word-break: break-word;
      display: -webkit-box;
      height: 80px;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
    }
  }
}

.more-info {
  .link-item {
    flex: 1;
    text-align: center;
    border-radius: 2px;
    line-height: 24px;
    margin-right: 10px;
    font-size: 12px;
    background: #f7f7f7;
    color: #999;
    cursor: not-allowed;
  }

  .active {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: inline-block;
    background: #fff;
    color: #333;
  }
}

.nodes-list {
  .title {
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    margin-bottom: 8px;
  }

  .desc {
    font-size: 12px;
    color: #666;
    line-height: 20px;
    max-height: 40px;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
}

.content-title {
  strong {
    background: #fff;
    position: relative;
    display: block;
    padding: 0 30px;
    z-index: 1;
  }
}

.content-summary {
  .data-summary {
    width: 100%;
    position: relative;
    color: #333;
    max-height: 330px;
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 1.9;
    font-size: 15px;

    p {
      margin-bottom: 16px;
    }
  }
}

.active {
  display: block;
}
</style>
