<template>
  <div id="echarts" style="width: 100%; height: 100%"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import china from "@/assets/json/china.json";
import wars from "@/assets/json/wars.json";

export default {
  name: "App",
  setup() {
    // 地图数据
    let geoList = ref({
      // 使用 registerMap 注册的地图名称。
      map: "china",
      // 能否通过鼠标移动地图
      roam: false,
      // 进入居中展示
      layoutCenter: ["50%", "43%"],
      // 无需手动添加style样式，官方自带百分比属性
      layoutSize: 100,
      zoom: 1,
      // 地图样式
      itemStyle: {
        // areaColor: "red",
        borderColor: "#666",
        borderWidth: 1,
      },
      // 鼠标缩放限制
      scaleLimit: {
        min: 12,
        max: 100,
      },
      // 视角中心
      center: [106.28, 38.47],
    });

    onMounted(() => {
      echarts.registerMap("china", china);
      let myChart = echarts.init(document.getElementById("echarts"));
      var itemStyle = {
        opacity: 0.8,
      };
      var sizeFunction = function (x) {
        var y = Math.sqrt(x / 400000) + 0.1;
        return y * 80;
      };
      let option = {
        geo: geoList.value,
        title: [
          {
            text: wars.timeline[0],
            textAlign: "center",
            right: "3%",
            top: "12%",
            textStyle: {
              fontSize: 78,
            },
          },
          {
            text: "中国抗日战争与时间线变化",
            left: "center",
            top: 10,
            textStyle: {
              fontWeight: "normal",
              fontSize: 28,
            },
          },
        ],
        timeline: {
          axisType: "category",
          orient: "vertical",
          autoPlay: true,
          inverse: true,
          playInterval: 5000,
          left: null,
          right: 0,
          top: 20,
          bottom: 20,
          width: 55,
          height: null,
          symbol: "none",
          checkpointStyle: {
            borderWidth: 2,
          },
          controlStyle: {
            showNextBtn: false,
            showPrevBtn: false,
          },
          data: [],
        },
        tooltip: {
          padding: 5,
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value;
            // prettier-ignore
            return schema[3].text + '：' + value[3] + '<br>'
                        + schema[2].text + '：' + value[2] + schema[2].unit + '<br>';
          },
        },
        grid: {
          top: 100,
          containLabel: true,
          left: 30,
          right: "110",
        },
        visualMap: [
          {
            show: false,
            dimension: 3,
            categories: wars.wars,
            inRange: {
              color: (function () {
                // prettier-ignore
                var colors = ['#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba','#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba','#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba','#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'];
                return colors.concat(colors);
              })(),
            },
          },
        ],
        xAxis: {
          type: "value",
          name: "经度",
          min: -180,
          max: 180,
          nameGap: 25,
          nameTextStyle: {
            fontSize: 18,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#666",
              type: "dashed",
            },
          },
          axisLabel: {
            formatter: "{value} 度",
          },
        },
        yAxis: {
          type: "value",
          name: "纬度",
          min: -90,
          max: 90,
          nameTextStyle: {
            fontSize: 18,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#666",
              type: "dashed",
            },
          },
          axisLabel: {
            formatter: "{value} 度",
          },
        },
        series: [
          {
            type: "scatter",
            itemStyle: itemStyle,
            data: wars.series[0],
            symbolSize: function (val) {
              return sizeFunction(val[2]);
            },
          },
        ],
        animationDurationUpdate: 1000,
        animationEasingUpdate: "quinticInOut",
        options: [],
      };
      // Schema:
      var schema = [
        { name: "经度", index: 0, text: "经度", unit: "度" },
        { name: "纬度", index: 1, text: "纬度", unit: "度" },
        { name: "伤亡人数", index: 2, text: "伤亡人数", unit: "左右" },
        { name: "事件名", index: 3, text: "战争名称", unit: "" },
      ];
      function getData() {
        for (var n = 0; n < wars.timeline.length; n++) {
          option.timeline.data.push(wars.timeline[n]);
          option.options.push({
            title: {
              show: true,
              text: wars.timeline[n] + "",
            },
            series: {
              name: wars.timeline[n],
              type: "scatter",
              itemStyle: itemStyle,
              data: wars.series[n],
              symbolSize: function (val) {
                return sizeFunction(val[2]);
              },
            },
          });
        }
      }
      getData();
      myChart.setOption(option, true);
      myChart.on("scroll", function (params) {
        console.log(params);
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    });
  },
};
</script>

<style lang="scss" scoped>
// h1 {
//   padding: 0;
//   margin: 0;
//   position: absolute;
//   top: 5%;
//   left: 50%;
//   transform: translate(-50%);
// }
</style>
