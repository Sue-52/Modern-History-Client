<template>
  <suspense>
    <div id="container"></div>
  </suspense>
</template>

<script lang="ts">
// @ts-nocheck
import BMap from "BMap";
import useCustomCover from "@/hooks/useCustomCover";
import useRandomCustom from "@/hooks/useRandomCustom";
import { getWarData } from "@/api/map";
import { onMounted } from "vue";
import { ref } from "@vue/reactivity";

export default {
  props: {
    warYear: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    let getNowZoom = ref(5);
    // console.log(props.warYear);

    onMounted(async () => {
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

      // 获取战争详情数据
      let { data: allWarData } = await getWarData(props.warYear);
      // console.log(allWarData);

      // 存放战争标记信息
      let warSquareArr = [];
      // 循环遍历添加一个或多个战争标记
      for (let i = 0; i < allWarData.length; i++) {
        for (let y = 0; y < allWarData[i].warfareCenter.length; y++) {
          // 经纬度
          let lon = allWarData[i].warfareCenter[y].lon;
          let lat = allWarData[i].warfareCenter[y].lat;

          // 战争标记
          let marker = new BMap.Marker(new BMap.Point(lon, lat));
          map.addOverlay(marker);
          marker.setZIndex(999);
          warSquareArr.push(marker);

          // 地图标记点击事件
          let timer = null;
          marker.addEventListener("click", function () {
            // 将标点移动到中心
            let point = new BMap.Point(lon, lat);
            map.panTo(point);

            if (getNowZoom.value !== 7) {
              timer = setTimeout(() => {
                // 地图级别+1
                map.setZoom(7);
                clearTimeout(timer);
              }, 500);
            }

            // 让弹出框显示
            let obj = {
              warIntroduce: allWarData[i].warIntroduce,
              warName: allWarData[i].warName,
              open: true,
            };
            emit("handleWarOpen", obj);
          });
        }
      }

      // 存放所有战争圈
      let AllMySquare = [];
      // 创建战争圈主要人物
      // 标记位置（手动）
      let peopleArr = [
        { lonDiffer: 1.24, latDiffer: 0 },
        { lonDiffer: 0.41, latDiffer: -0.63 },
        { lonDiffer: -0.83, latDiffer: -0.41 },
        { lonDiffer: -1.03, latDiffer: 0.59 },
        { lonDiffer: 0.45, latDiffer: 0.98 },
      ];
      // 存放人物标记信息
      let peopleSquareArr = [];
      // 循环遍历添加多个战争圈(圈中有主要人物)
      for (let i = 0; i < allWarData.length; i++) {
        for (let y = 0; y < allWarData[i].warfareCenter.length; y++) {
          // 经纬度
          let lon = allWarData[i].warfareCenter[y].lon;
          let lat = allWarData[i].warfareCenter[y].lat;
          // 创建战争圈标记
          let mySquare = new useCustomCover(
            new BMap.Point(lon, lat),
            200,
            "red"
          );
          map.addOverlay(mySquare);
          AllMySquare.push(mySquare);
          mySquare._div.style.display = "none";

          // 循环遍历添加多个人物标记(每个战争都有不同的主线人物)
          if (allWarData[i].personageInfo) {
            for (let z = 0; z < allWarData[i].personageInfo.length; z++) {
              // 经纬度
              let lon = allWarData[i].warfareCenter[y].lon;
              let lat = allWarData[i].warfareCenter[y].lat;
              // 人物标记
              let peopleSquare = new useRandomCustom(
                new BMap.Point(
                  Number(lon + peopleArr[z].lonDiffer),
                  Number(lat + peopleArr[z].latDiffer)
                ),
                40,
                allWarData[i].personageInfo[z].picture
              );
              map.addOverlay(peopleSquare);
              // 人物标记点击
              peopleSquare.addEventListener("click", function () {
                emit("handlePeopleOpen", true, allWarData[i].personageInfo[z]);
              });
              peopleSquare.hide();
              peopleSquareArr.push(peopleSquare);
            }
          }
        }
      }

      // 监听地图缩放事件
      map.addEventListener("zoomend", function () {
        let nowzoom = this.getZoom();
        getNowZoom.value = nowzoom;

        // 判断当前地图级别是否为5，如果不是则删除标点
        if (nowzoom == 7) {
          AllMySquare.forEach((item) => (item._div.style.display = ""));

          // 将人物标记逐一展示
          peopleSquareArr.forEach((item) => {
            item.show();
          });
        } else if (nowzoom < 7) {
          AllMySquare.forEach((item) => (item._div.style.display = "none"));

          peopleSquareArr.forEach((item) => item.hide());
        }
      });
    });
  },
};
</script>

<style lang="scss" scope>
/* 清除百度地图logo */
.BMap_cpyCtrl {
  display: none;
}

.anchorBL a {
  display: none;
}

.BMap_scaleCtrl {
  bottom: 66px !important;
  left: 6px !important;
}

#container {
  width: 100%;
  height: 100%;
  z-index: 100 !important;
}
</style>
