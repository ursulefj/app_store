<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgs" :key="item.id">
      <img :src="item.path" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          id: 1,
          path: require("../assets/5d37dab6d4054cc49ec17543815cd4ee.png")
        },
        {
          id: 2,
          path: require("../assets/2bd8140070534cdf95745a2459bc3bf5.jpg")
        },
        {
          id: 3,
          path: require("../assets/86f51068348346ff85ed91f00633b21e.png")
        }
      ]
    };
  }
};
</script>

<style>
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
