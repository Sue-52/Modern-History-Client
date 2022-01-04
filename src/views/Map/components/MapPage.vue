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
// import { createGlobalState } from "@vueuse/core";

export default {
  setup(props, { emit }) {
    let getNowZoom = ref(5);
    // 战争人物信息
    let warPeopleList = ref([
      {
        name: "张学良",
        picture: "https://s4.ax1x.com/2021/12/28/Trrq2R.jpg",
        jianjie:
          "张学良（1901年6月3日－2001年10月14日），字汉卿，号毅庵，乳名双喜、小六子。汉族，籍贯辽宁省盘锦市大洼县东风镇，生于辽宁省鞍山市台安县桓洞镇鄂家村张家窝堡屯（旧称桑子林詹家窝铺），国民革命军将领，奉系军阀首领张作霖的长子，中国近代著名爱国将领。",
        shengping:
          "1920年毕业于东三省陆军讲武堂，先于奉系军中担任要职，“皇姑屯事件”之后，他继任为东北保安军总司令，拒绝日本人的拉拢，坚持“东北易帜”，为祖国统一和民族团结做出了贡献。后任中华民国陆海空军副司令，陆军一级上将。西安事变后遭蒋介石父子长期软禁。1990年恢复人身自由，1995年起离台侨居美国夏威夷，2001年10月14日病逝于檀香山，享年101岁。",
        birth: "病逝于檀香山",
      },
      {
        name: "本庄繁",
        picture: "https://s4.ax1x.com/2021/12/28/TryMTO.jpg",
        jianjie:
          "本庄繁（ほんじょう しげる，1876年5月10日—1945年11月20日），日本兵库县人，陆军大将（1933.4）。九一八事变时下令侵占东三省的关东军司令。二·二六事件时因替叛军说情而被昭和天皇解除职务。",
        shengping: null,
        birth: "畏罪自杀",
      },
      {
        name: "南次郎",
        picture: "https://s4.ax1x.com/2021/12/28/Tryspj.jpg",
        jianjie:
          '南次郎（，1874年8月10日—1955年12月5日） ，日本陆军大将，骑兵出身，曾参与策划九一八事变和侵略东北，力主以武力解决"满蒙同题"。1934年12月，任关东军司令官，拼凑华北、内蒙伪政权。后兼关东局局长、日本驻伪满洲国大使。对中国人民犯下了滔天罪行。日本投降后被列为甲级战犯，由远东国际军事法庭判处无期徒刑。',
        shengping: null,
        birth: "由远东国际军事法庭判处无期徒刑",
      },
    ]);
    // let allWarData = ref([]);
    // 当前年份所有战争信息

    // store.commit("map/GetWarData", 1931);
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
      let { data: allWarData } = await getWarData(1931);
      // console.log(allWarData);
      // 存放战争标记信息
      let warSquareArr = [];
      // 存储当前点击的战争索引
      // let warIndex = 0;

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
        { lonDiffer: 1.24, latDiffer: 0 },
        { lonDiffer: 0.41, latDiffer: -0.63 },
        { lonDiffer: -0.83, latDiffer: -0.41 },
        { lonDiffer: -1.03, latDiffer: 0.59 },
        { lonDiffer: 0.45, latDiffer: 0.98 },
      ];
      // 存放人物标记信息
      let peopleSquareArr = [];
      // 循环遍历添加多个人物标记
      for (let i = 0; i < allWarData.length; i++) {
        for (let y = 0; y < allWarData[i].warfareCenter.length; y++) {
          for (let z = 0; z < warPeopleList.value.length; z++) {
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
              warPeopleList.value[z].picture
            );
            map.addOverlay(peopleSquare);
            // 人物标记点击
            peopleSquare.addEventListener("click", function () {
              // console.log(nowPeoplaeSquare);
              emit("handlePeopleOpen", true, warPeopleList.value[i]);
            });
            peopleSquare.hide();
            peopleSquareArr.push(peopleSquare);
          }
        }
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

<style lang="scss" scope>
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
  z-index: 100 !important;
}
</style>
