<template>
  <div class="user">
    <div class="space-info">
      <div class="banner">
        <img src="../img/bgc.png" alt="">
      </div>
      <div class="part1">
        <div class="avatar">
          <img :src="userInfo.user_img" v-if="userInfo.user_img" />
          <img src="../img/avatar.jpg" alt="" v-else />
        </div>
        <div class="favrite">
          <span>
            <div class="number">0</div>
            <div class="favri">粉丝</div>
          </span>
          <i class="split"></i>
          <span>
            <div class="number">6</div>
            <div class="favri">关注</div>
          </span>
          <i class="split"></i>
          <span>
            <div class="number">0</div>
            <div class="favri">获赞</div>
          </span>
          <div class="write" @click="$router.push('/edit')">编辑资料</div>
        </div>
      </div>
      <div class="video">
        <div class="title">
          <span>动态</span>
          <span>视频</span>
        </div>
        <div class="video-content"></div>
      </div>
    </div>
    <div class="user-info">
      <div class="username">{{ userInfo.name }}</div>
      <div class="content">
        <span v-if="userInfo.user_desc" class="signature">{{ userInfo.user_desc }}</span>
        <span v-else class="signature">这个人很神秘，什么都没写</span>
        <span class="show">展开</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userInfo']
}
</script>

<style scoped lang="less">
.space-info {
  .banner {
    width: 100%;
    height: 24vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .part1 {
    position: relative;
    background-color: #fff;
    .avatar {
      position: absolute;
      top: -2.222vw;
      left: 3.333vw;
      width: 25vw;
      img {
        width: 25vw;
        border-radius: 50%;
      }
    }
    .favrite {
      float: right;
      margin:2.778vw 3.333vw 2.778vw 0;
      span {
        display: inline-block;
        padding: 0 20px;
        text-align: center;
        .number {
          font-size: 3.889vw;
          color: #212121;
        }
        .favri {
          font-size: 3.889vw;
          color: #999;
        }
      }
      .split {
        display: inline-block;
        width: 1px;
        height: 5vw;
        background-color: #e7e7e7;
      }
      .write {
        margin-top: 2.778vw;
        width: 100%;
        height: 8vw;
        line-height: 8vw;
        border: 1px solid #fb7299;
        border-radius: 2.222vw;
        background-color: #fff;
        font-size: 3.889vw;
        color: #fb7299;
        text-align: center;
      }
    }
  }
}
.user-info {
  box-sizing: border-box;
  padding: 0 12px;
  margin-top: 30.556vw;
  width: 100%;
  .username {
    font-size: 4.444vw;
    color: #212121;
    font-weight: 700;
  }
  .content {
    .signature {
      display: inline-block;
      margin-top: 2.222vw;
      font-size: 3.333vw;
      color: #999;
    }
    .show {
      float: right;
      font-size: 3.333vw;
      line-height: 9.722vw;
      color: #1389bf;
    }
  }
}
.video {
  position: absolute;
  top: 311px;
  box-sizing: border-box;
  margin-top: 2px;
  padding: 0 12px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  span {
    margin-right: 30px;
    font-size: 14px;
    color: #757575;
  }
}
</style>
