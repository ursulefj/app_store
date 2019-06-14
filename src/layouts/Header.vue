<template>
  <div class="header">
    <div class="menu_head">
      <div class="menu" style="width:350px;">
        <div class="left">
          <a href="">技能盒子官网</a>
          <div class="dividing left"></div>
          <a href="">教学平台</a>
          <div class="dividing left"></div>
          <a href="">商城平台</a>
          <div class="dividing left"></div>
          <a href="">开放平台</a>
        </div>
        <div class="right" style="width:650px;text-align: right;">
          <a href="" class="right">登录</a>
          <div class="dividing right"></div>
          <a href="" class="right">注册</a>
        </div>
      </div>
    </div>
    <div class="nav-head">
      <a href="#">
        <img src="../assets/logo.png" class="logo" alt="应用商店" />
      </a>
      <a href="" class="nav-item">课程</a>
      <a href="" class="nav-item">工具</a>
      <a href="" class="nav-item">服务</a>
      <a href="" class="nav-item">专题</a>
      <a href="" class="nav-item">我的</a>
      <div class="search_bg">
        <el-input
          v-model="input"
          placeholder="请输入内容"
          class="search"
        ></el-input>
      </div>
      <div class="btn_search"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu_head {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 40px;
  border-bottom: solid 1px rgb(237, 237, 237);
  background-color: rgb(250, 250, 250);
}
.menu {
  width: 1000px;
  height: 20px;
  margin: 10px auto;
  min-width: 1000px;
}
.left {
  float: left;
}
.right {
  float: right;
}
a {
  color: #999999;
  font-size: 14px;
  float: left;
}
.dividing {
  width: 1px;
  height: 15px;
  background-color: #999999;
  margin: 0 15px;
  margin-top: 2px;
  display: inline-block;
}
.nav-head {
  position: relative;
  width: 1000px;
  margin: 70px auto 0;
}
.logo {
  width: 100px;
  height: 40px;
  margin: 0 30px;
}
.nav-item {
  float: left;
  width: 70px;
  height: 20px;
  padding: 5px 10px;
  text-align: center;
  font-size: 20px;
  color: #505050;
  margin-left: 20px;
  cursor: pointer;
}
.search_bg {
  float: left;
  width: 200px;
  height: 38px;
  /* border: solid rgb(190, 190, 190) 1px; */
  margin-left: 45px;
}
.search {
  width: 195px;
  border: none;
  vertical-align: middle;
  color: rgb(190, 190, 190);
}
.btn_search {
  background: url(../assets/search.png) no-repeat;
  width: 40px;
  height: 40px;
  float: right;
  cursor: pointer;
  font-size: 14px;
  color: #000;
}
</style>
