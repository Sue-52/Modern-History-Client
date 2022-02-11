<template>
  <div class="collection">
    <div class="left">
      <h1>七九式步枪</h1>
      <img src="../../../assets/images/78.png" alt="" />
    </div>
    <div class="right">
      <h1>七九式步枪 介绍</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.collection {
  width: 100%;
  height: 100%;
}
.left {
  width: 50%;
  height: 100%;
  background-color: #fff;
  float: left;
  position: relative;

  h1 {
    text-align: center;
  }

  img {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.right {
  width: 50%;
  height: 100%;
  background-color: #ccc;
  float: right;

  h1 {
    text-align: center;
  }
}
</style>
