<template>
  <div id="container"></div>
  <!-- 战争信息弹框 -->
  <div class="right-info" :class="{ active: jumpBox }" ref="targetDom">
    <div class="territory-info-container">
      <div class="territory-component">
        <div class="territory-box">
          <div class="close-icon" @click="handleClose"></div>
          <div class="territory-wrap">
            <div class="base-info">
              <div class="title">
                <b>九·一八事变</b>
              </div>
              <div class="desc-box">
                <div class="territoryDesc">
                  <p>
                    <b>九·一八事变</b>
                    ，又称奉天事变、柳条湖事件。是1931年9月18日日本驻中国东北地区的关东军突然袭击沈阳，以武力侵占东北的事件。九·一八事变是由日本蓄意制造并发动的侵华战争，是日本帝国主义企图以武力征服中国的开端，是中国抗日战争的起点，标志着中国局部抗战的开始，揭开了第二次世界大战东方战场的序幕。九一八事变后，中国人民的局部抗战也标志着世界反法西斯战争的起点。
                  </p>
                  <p>
                    1931年9月18日夜，盘踞在中国东北的日本关东军按照精心策划的阴谋，由铁道“守备队”炸毁沈阳柳条湖附近日本修筑的南满铁路路轨，并嫁祸于中国军队，日军以此为借口，炮轰中国东北军北大营，制造了震惊中外的“九一八事变”。次日，日军侵占沈阳，又陆续侵占了东北三省。1932年2月，东北全境沦陷。此后，日本在中国东北建立了伪满洲国傀儡政权，开始了对东北人民长达14年之久的奴役和殖民统治，使东北3000多万同胞饱受亡国奴的痛苦滋味。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BMap from "BMap";
import useCustomCover from "../hooks/useCustomCover.js";
import { onMounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

let jumpBox = ref(false);
// 弹出框dom
let targetDom = ref();
let getNowZoom = ref(5);

onMounted(() => {
  // 创建地图实例
  let map = new BMap.Map("container");

  // 初始化地图，设置中心点坐标和地图初始级别
  let point = new BMap.Point(106.28, 38.47);
  map.centerAndZoom(point, 5);

  //开启鼠标滚轮缩放
  map.enableScrollWheelZoom();
  // 禁止双击放大地图
  map.disableDoubleClickZoom();

  // 限制地图级别
  map.setMinZoom(5);
  map.setMaxZoom(7);

  // 比例尺控件
  map.addControl(new BMap.ScaleControl());

  // 创建战争点标记
  let marker1 = new BMap.Marker(new BMap.Point(123.43, 41.8));
  map.addOverlay(marker1);
  marker1.setZIndex(999);

  // 创建战争圈标记
  let mySquare = new useCustomCover(new BMap.Point(123.43, 41.8), 200, "red");
  map.addOverlay(mySquare);
  mySquare._div.style.display = "none";

  // 地图标记点击事件
  let timer = null;
  marker1.addEventListener("click", function () {
    // 将标点移动到中心
    let point = new BMap.Point(123.43, 41.8);
    map.panTo(point);

    if (getNowZoom.value == 5) {
      timer = setTimeout(() => {
        // 地图级别+1
        map.zoomIn();
        clearTimeout(timer);
      }, 500);
    }

    // 让弹出框显示
    jumpBox.value = true;
  });

  // 监听地图缩放事件
  map.addEventListener("zoomend", function () {
    let nowzoom = this.getZoom();
    getNowZoom.value = nowzoom;

    // 判断当前地图级别是否为5，如果不是则删除标点
    if (nowzoom >= 6) {
      mySquare._div.style.display = "";
    } else if (nowzoom < 6) {
      mySquare._div.style.display = "none";
    }
  });
});

// 点击关闭弹出框
const handleClose = () => {
  jumpBox.value = false;
};

// 当点击到目标dom的外面时隐藏
onClickOutside(targetDom, () => {
  jumpBox.value = false;
});
</script>

<style>
.BMap_cpyCtrl {
  display: none;
}

.anchorBL a {
  display: none;
}

.BMap_scaleCtrl {
  bottom: 6px !important;
  left: 6px !important;
}

#container {
  width: 100%;
  height: 100%;
}

.right-info {
  opacity: 0;
  position: absolute;
  right: 8px;
  top: 66px;
  width: 320px;
  z-index: 11;
}

.right-info .territory-component {
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
  transition: height 0.3s ease;
}

.right-info .territory-component .territory-wrap {
  display: flex;
  flex-direction: column;
  padding: 8px 0 28px;
  height: 100%;
}

.territory-component .territory-wrap .title {
  padding: 12px 0;
  line-height: 20px;
  font-weight: 700;
  margin: 0 24px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.22);
}

.desc-box {
  height: 352px;
  margin: 9px 16px 0 24px;
  flex: 1;
  overflow: auto;
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

.territoryDesc {
  position: relative;
  padding-right: 8px;
  line-height: 18px;
  font-size: 12px;
  height: 100%;
  color: #666;
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

.active {
  opacity: 1;
  transition: all 1.3s;
}
</style>
