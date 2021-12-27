<template>
  <div class="home-second">
    <!-- 时间轴 -->
    <div class="second-left test-1">
      <div class="timeline-title">
        <h2>抗日战争时间轴</h2>
      </div>
      <div class="timeline" v-for="item in 30" :key="item">
        <div class="timeline-date">1931-9-18</div>
        <div class="dot"></div>
        <div class="timeline-content">九一八事变</div>
      </div>
      <!-- 滚动条 -->
      <div class="scrollbar" />
    </div>
    <!-- 书 -->
    <div class="second-right"></div>
  </div>
</template>

<script lang="ts" setup>
"HomeShowDetail";
</script>

<style lang="scss" scoped>
.home-second {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #eee;
}
.second-left {
  width: 20%;
  height: 100%;
  float: left;
  border-right: 3px solid #ccc;
  box-sizing: border-box;
  overflow-y: scroll;

  // 滚动条样式设置
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #666;
  }

  // 时间轴标题
  .timeline-title {
    width: 100%;
    text-align: center;
    padding: 20px 0px 10px 0px;
    font-size: 32px;
    color: #851d20;
    border-bottom: 2px solid #851d20;
    box-sizing: border-box;
    border-radius: 30px;
  }
  // 时间轴样式
  .timeline {
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    color: #851d20;
    .timeline-date {
      // float: left;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
    }
    .dot {
      position: relative;
      // float: left;
      height: 50px;
      width: 1px;
      background-color: black;
      margin: 0px 10px;
      &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: -4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
      }
    }
    .timeline-content {
      // float: left;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 28px;
      border-radius: 10px;
      border: 3px #ccc;
    }
  }
}
.second-right {
  width: 80%;
  height: 100%;
  float: left;
}
</style>