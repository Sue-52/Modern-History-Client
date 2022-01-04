<template>
  <div class="pop-box-mask">
    <div class="pop-content summary">
      <div class="icon-close-big pop-close"></div>
      <div class="summary-box">
        <div class="content-wraper">
          <section class="entry-base-info">
            <section class="base-info">
              <div class="entry-avatar">
                <img src="https://s4.ax1x.com/2021/12/28/Trrq2R.jpg" alt="" />
              </div>
              <div class="text-info">
                <div class="entry-name">张学良</div>
                <div class="entry-desc entryDesc">
                  张学良（1901年6月3日－2001年10月14日），字汉卿，号毅庵，乳名双喜、小六子。汉族，籍贯辽宁省盘锦市大洼县东风镇，生于辽宁省鞍山市台安县桓洞镇鄂家村张家窝堡屯（旧称桑子林詹家窝铺），国民革命军将领，奉系军阀首领张作霖的长子，中国近代著名爱国将领。
                </div>
              </div>
            </section>
            <ul class="more-info">
              <li class="link-item linkItem active" title="概述">概述</li>
              <li class="link-item linkItem" title="关系图谱">关系图谱</li>
              <li class="link-item linkItem" title="作品">作品</li>
              <li class="link-item linkItem" title="文章">文章</li>
            </ul>
          </section>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pop-box-mask {
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
<<<<<<< HEAD
    flex: 1;
=======
    width: 68px;
    height: 24px;
>>>>>>> map/dev
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
</style>
