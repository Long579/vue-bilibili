<template>
  <div class="NavBar">
    <div @click="$router.push('/')">
      <img src="../img/logo.png" alt="" class="logo">
    </div>
    <div>
      <input type="text" name="" id="" placeholder="搜索">
      <van-icon name="search" class="search"/>
    </div>
    <div class="app">
      <p>
        <img :src="userInfo.user_img" v-if="userInfo.user_img" class="avatar" @click="$router.push('/userinfo')"/>
        <img :src="require('../img/avatar.jpg')" alt="" v-else class="avatar" @click="$router.push('/login')"/>
      </p>
      <p class="download">下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userInfo']
}
</script>

<style scoped lang="less">
.NavBar {
  display: flex;
  height: 12.5vw;
  background-color: white;
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.333vw;
      .logo {
        width: 80%;
      }
  };
  div:nth-child(2) {
    position: relative;
    margin-right: 1.389vw;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
     padding: 1.111vw 0 1.111vw 7.778vw;
     width: 90%;
     border: none;
     border-radius: 5.556vw;
     font-size: 1.667vw;
     background-color: #f4f4f4;
    }
    .search {
      position: absolute;
      left: 0;
      padding-left: 2.222vw;
      float: left;
    }
  };
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
      width: 6.667vw;
      height: 6.667vw;
      border-radius: 50%;
    }
    .download {
      margin: 0 3.333vw;
      width: 21.33333vw;
      height: 6.4vw;
      line-height: 6.4vw;
      background-color: #fb7299;
      text-align: center;
      border-radius: 1.111vw;
      font-size: 3.333vw;
      color: #fff;
    }
  }
}
</style>
