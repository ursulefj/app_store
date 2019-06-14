<template>
  <div class="banner_wrap">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <img :src="item.path" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  components: {},
  data() {
    return {
      imgs: [
        {
          id: 1,
          path: require("../assets/5d37dab6d4054cc49ec17543815cd4ee.png")
        }
        // {id:2,path:require("../assets/2bd8140070534cdf95745a2459bc3bf5.jpg")},
        // {id:3,path:require("../assets/86f51068348346ff85ed91f00633b21e.png")}
      ]
    };
  }
};
</script>

<style></style>
