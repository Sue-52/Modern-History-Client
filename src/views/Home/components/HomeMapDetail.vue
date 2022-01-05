<template>
  <div id="echarts" style="width: 100%; height: 100%"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import china from "@/assets/json/china.json";

export default {
  name: "App",
  setup() {
    // 地图数据
    let geoList = ref({
      // 使用 registerMap 注册的地图名称。
      map: "china",
      // 能否通过鼠标移动地图
      roam: true,
      // 进入居中展示
      layoutCenter: ["50%", "43%"],
      // 无需手动添加style样式，官方自带百分比属性
      layoutSize: 100,
      zoom: 1,
      // 地图样式
      itemStyle: {
        // areaColor: "red",
        borderColor: "#666",
      },
      // 鼠标缩放限制
      scaleLimit: {
        min: 14,
        max: 100,
      },
      // 视角中心
      center: [106.28, 38.47],
    });

    // 散点图
    let seriesList = ref([
      // 带有涟漪特效动画的标点
      {
        name: "scatter_outside",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "九·一八事变",
            value: [123.43, 41.8, 11],
          },
        ],
        symbolSize: 10,
        encode: {
          value: 2,
        },
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          formatter: "{b}",
          position: "right",
          show: true,
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "#660000",
        },
        color: "red",
        emphasis: {
          scale: true,
        },
        zlevel: 1,
      },
    ]);

    onMounted(() => {
      echarts.registerMap("china", china);
      let myChart = echarts.init(document.getElementById("echarts"));

      let option = {
        geo: geoList.value,
        series: seriesList.value,
      };

      myChart.setOption(option);

      // 点击标签，将其定位为地图中心
      myChart.on("click", (params) => {
        // console.log(params.value);
        if (params.value) {
          // 该点坐标
          let thisscale = [params.value[0], params.value[1]];
          geoList.value = {
            ...geoList.value,
            center: thisscale,
            zoom: 2,
            scaleLimit: {
              min: 50,
              max: 100,
            },
          };
          // console.log(geoList.value);
          myChart.setOption({
            geo: geoList.value,
          });
        }
      });

      // 滚轮事件
      myChart.on("scroll", function (params) {
        console.log(params);
      });
    });
  },
};
</script>

<style scoped></style>
