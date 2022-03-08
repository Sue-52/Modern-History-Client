<template>
  <div id="mapDetail">
    <v-chart class="chart" :option="map" autoresize ref="map" />
    <div class="home-to-map">
      <p>想知道更多相关的信息吗？</p>
      <router-link to="/map">跳转到详细地图 ——&gt;</router-link>
    </div>
  </div>
</template>

<script>
import { use, registerMap } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
import {
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  ScatterChart,
  // 控制名称显示
  EffectScatterChart,
} from "echarts/charts";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";
import map from "@/data/map";
// Map of China
import chinaMap from "@/data/china.json";
import worldMap from "@/data/world.json";
use([
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  ScatterChart,
  EffectScatterChart,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  CanvasRenderer,
  ToolboxComponent,
]);

// registering map data
registerMap("china", chinaMap);
registerMap("world", worldMap);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  setup: () => {
    function convert() {
      let map = ref(null);
      // const map = this.$refs.map;
      this.img = {
        src: map.value.getDataURL({
          pixelRatio: window.devicePixelRatio || 1,
        }),
        width: map.value.getWidth(),
        height: map.value.getHeight(),
      };
      this.open = true;
    }

    return { map, convert };
  },
});
</script>

<style lang="scss" scoped>
#mapDetail {
  position: relative;
  .chart {
    height: 100vh;
  }
  .home-to-map {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    grid-area: more;
    border: 1px solid #666;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: #eee;
    p {
      font-size: 20px;
      font-weight: 900;
    }
    a {
      font-size: 18px;
      font-weight: 100;
      text-decoration: none;
      color: #666;
    }
  }
}
</style>
