<template>
  <el-container>
    <!-- <el-header>
        <Header />
    </el-header> -->
    <!-- <Banner /> -->

    <div class="content-wrap">
      <el-container>
        <el-aside width="240px">
          <Siderbar />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>

    <!-- <el-footer>
      <Footer />
    </el-footer> -->
  </el-container>
</template>

<script>
// import Header from "./Header";
// import Footer from "./Footer";
import Siderbar from "./Siderbar";
// import Banner from "./Banner";

export default {
  components: {
    // Header,
    // Footer,
    Siderbar
    // Banner,
  }
};
</script>

<style>
.content-wrap {
  width: 1000px;
  margin: 0 auto;
}
</style>
