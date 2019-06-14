<template>
  <div>
    <div class="app_category">
      <span class="title_18">应用分类</span>
      <div class="line"></div>
      <ul id="categoryList">
        <!--<li data-param="1"><img src="/resources/portal/common/images/app_all.png"><span title="全部" class="ellipsis">全部</span></li>-->
        <li>
          <img src="../assets/f2fad9d39e054518a4761019ea7a3ead.png" /><a
            ><span title="网上购物" class="ellipsis">网上购物</span></a
          >
        </li>
        <li>
          <img src="../assets/f2fad9d39e054518a4761019ea7a3ead.png" /><a
            ><span title="网上购物" class="ellipsis">网上购物</span></a
          >
        </li>
      </ul>
    </div>
    <div class="app_rank">
      <span class="title_18">下载排行</span>
      <div class="line"></div>
      <ul>
        <li class="download_float">
          <div class="rank-left">
            <span class="rank">1</span>
            <img
              src="http://i5.res.meizu.com/fileserver/app_icon/10178/ac4ee4bf0cb14ad5991342ded96cdbeb.png"
            />
          </div>
          <div class="rank-right">
            <a
              ><span class="ellipsis" title="WiFi万能钥匙"
                >WiFi万能钥匙</span
              ></a
            >
            <span class="star_bg star_31" data-num="39"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  margin-top: 5px;
}
li {
  width: 240px;
  float: left;
  margin: 10px 0;
}
.line {
  width: 100%;
  height: 1px;
  clear: both;
  margin-top: 12px;
  font-size: 0;
  overflow: hidden;
  background-color: rgb(242, 242, 242);
}
img {
  width: 35px;
  height: 35px;
  margin-right: 20px;
  cursor: pointer;
  float: left;
}
a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  outline: none;
}
.app_category {
  width: 240px;
  margin: 20px 0 0;
  margin-top: 40px;
}
span {
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
  display: inline-block;
}
.rank {
  height: 22px;
  margin: 0 12px 0 0;
  width: 22px;
  top: -12px;
  position: relative;
  float: left;
  border-radius: 50%;
  background: #dbdddf;
  text-align: center;
  font-size: 12px;
  line-height: 22px;
}
.top {
  background: #007cc3;
}
.rank-left {
  float: left;
  width: 90px;
}
.rank-right {
  float: left;
  width: 150px;
}
.app_rank img {
  margin: 0;
}
</style>
