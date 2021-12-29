<template>
  <div id="container"></div>
</template>

<script>
// @ts-nocheck
import BMap from "BMap";
import useCustomCover from "@/hooks/useCustomCover";
import useRandomCustom from "@/hooks/useRandomCustom";
import { onMounted, ref } from "vue";

export default {
  setup(props, { emit }) {
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

      // 存放战争标记信息
      let warSquareArr = [];
      let data = [
        {
          place: "沈阳",
          lon: 123.43,
          lat: 41.8,
        },
      ];
      // 循环遍历添加一个或多个战争标记
      for (let i = 0; i < data.length; i++) {
        let marker = new BMap.Marker(new BMap.Point(data[i].lon, data[i].lat));
        map.addOverlay(marker);
        marker.setZIndex(999);
        warSquareArr.push(marker);

        // 地图标记点击事件
        let timer = null;
        marker.addEventListener("click", function () {
          // 将标点移动到中心
          let point = new BMap.Point(data[i].lon, data[i].lat);
          map.panTo(point);

          if (getNowZoom.value == 5) {
            timer = setTimeout(() => {
              // 地图级别+1
              map.setZoom(map.getZoom() + 2);
              clearTimeout(timer);
            }, 500);
          }

          // 让弹出框显示
          // jumpBox.value = true;
          emit("handleWarOpen", true);
        });
      }

      // 创建战争圈标记
      let mySquare = new useCustomCover(
        new BMap.Point(123.43, 41.8),
        200,
        "red"
      );
      map.addOverlay(mySquare);
      mySquare._div.style.display = "none";

      // 创建战争圈主要人物
      // 标记位置（手动）
      let peopleArr = [
        { lon: 124.67, lat: 41.8 },
        { lon: 123.84, lat: 41.17 },
        { lon: 122.6, lat: 41.39 },
        { lon: 122.4, lat: 42.39 },
        { lon: 123.88, lat: 42.78 },
      ];
      // 存放人物标记信息
      let peopleSquareArr = [];
      // 循环遍历添加多个人物标记
      for (let i = 0; i < peopleArr.length; i++) {
        let peopleSquare = new useRandomCustom(
          new BMap.Point(peopleArr[i].lon, peopleArr[i].lat),
          40,
          "https://s4.ax1x.com/2021/12/28/Trrq2R.jpg"
        );
        map.addOverlay(peopleSquare);
        peopleSquare.hide();
        peopleSquareArr.push(peopleSquare);
        // 人物标记点击
        peopleSquare.addEventListener("click", function () {
          console.log(peopleSquare);
          console.log(peopleSquare._div.offsetLeft);
          // console.log(peopleSquare.ca.offsetTop);
          // let obj = {
          //   x: peopleSquare.ca.offsetLeft,
          //   y: peopleSquare.ca.offsetTop,
          // };
          emit("handlePeopleOpen", true);
          // emit("handleGetPeopleSeat", obj);
        });
      }

      // 监听地图缩放事件
      map.addEventListener("zoomend", function () {
        let nowzoom = this.getZoom();
        // let timer = null;
        getNowZoom.value = nowzoom;

        // 判断当前地图级别是否为5，如果不是则删除标点
        if (nowzoom == 7) {
          mySquare._div.style.display = "";

          // 将人物标记逐一展示
          peopleSquareArr.forEach((item, index) => {
            setTimeout(() => {
              item.show();
            }, 400 * (index + 1));
          });
        } else if (nowzoom < 7) {
          mySquare._div.style.display = "none";

          peopleSquareArr.forEach((item) => item.hide());
        }
      });
    });
  },
};
</script>

<style lang="scss">
/* 清除百度地图logo */
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
  z-index: 888;
}
</style>
