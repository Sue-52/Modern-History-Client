<template>
  <!-- 人物信息框 -->
  <div
    class="entry-card-component"
    :class="{ active: jumpPeopleBox }"
    ref="targetPeopleDom"
    :style="{ top: `${peopleSeat.y}px`, left: `${peopleSeat.x}px` }"
  >
    <!-- 关闭按钮 -->
    <span class="icon-close iconClose" @click="handleClose"></span>
    <!-- 上版块 -->
    <section class="entry-base-info">
      <!-- 人物简介盒子 -->
      <section class="base-info">
        <!-- 人物图片 -->
        <div class="entry-avatar">
          <img src="https://s4.ax1x.com/2021/12/28/Trrq2R.jpg" alt="" />
        </div>
        <!-- 人物简介 -->
        <div class="text-info">
          <div class="entry-name">张学良</div>
          <div class="entry-desc entryDesc">
            张学良（1901年6月3日－2001年10月14日），字汉卿，号毅庵，乳名双喜、小六子。汉族，籍贯辽宁省盘锦市大洼县东风镇，生于辽宁省鞍山市台安县桓洞镇鄂家村张家窝堡屯（旧称桑子林詹家窝铺），国民革命军将领，奉系军阀首领张作霖的长子，中国近代著名爱国将领。
          </div>
        </div>
      </section>
      <!-- tab切换盒子 -->
      <ul class="more-info">
        <li class="link-item linkItem active" title="概述">概述</li>
        <li class="link-item linkItem" title="关系图谱">关系图谱</li>
        <li class="link-item linkItem" title="作品">作品</li>
        <li class="link-item linkItem" title="文章">文章</li>
      </ul>
    </section>
    <!-- 下版块 -->
    <section class="entry-nodes">
      <div class="nodes-list">
        <div class="node-item nodeItem">
          <div class="title">病逝于檀香山</div>
          <div class="desc descWrap">
            1920年毕业于东三省陆军讲武堂，先于奉系军中担任要职，“皇姑屯事件”之后，他继任为东北保安军总司令，拒绝日本人的拉拢，坚持“东北易帜”，为祖国统一和民族团结做出了贡献。后任中华民国陆海空军副司令，陆军一级上将。西安事变后遭蒋介石父子长期软禁。1990年恢复人身自由，1995年起离台侨居美国夏威夷，2001年10月14日病逝于檀香山，享年101岁。
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

export default {
  props: ["jumpPeopleBox", "peopleSeat"],
  setup(props, { emit }) {
    // 弹出框dom
    let targetPeopleDom = ref();

    // 关闭人物信息框
    const handleClose = () => {
      emit("handlePeopleClose", false);
    };

    // 当点击到目标dom的外面时隐藏
    onClickOutside(targetPeopleDom, () => {
      emit("handlePeopleClose", false);
    });

    return {
      targetPeopleDom,
      handleClose,
    };
  },
};
</script>

<style lang="scss">
.entry-card-component {
  display: none;
  position: absolute;
  top: 200px;
  left: 300px;
  width: 434px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  z-index: 4;
  font-family: "微软雅黑";

  .icon-close {
    position: absolute;
    right: 12px;
    top: 12px;
    height: 24px;
    width: 24px;
    background-image: url(https://static.allhistory.com/online/common/img/icon-close.725a.svg);
    cursor: pointer;
  }

  /* 上版块 */
  .entry-base-info {
    padding: 16px 16px 0;

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

  /* 下版块 */
  .entry-nodes {
    padding: 0 16px 16px;

    .nodes-list {
      border-top: 1px solid #ebebeb;
      padding-top: 7px;
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
    width: 68px;
    height: 24px;
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

.active {
  display: block;
}
</style>
