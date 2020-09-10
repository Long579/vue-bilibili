<template>
  <div class="commentitem">
    <div class="commentList">
      <div>
        <img :src="require('../img/avatar.jpg')" style="width: 8.333vw" />
      </div>
      <div>
        <div class="name">
          <span class="username">魅力</span>
          <span>5-12</span>
        </div>
        <p class="comment">
          dfsgsfgsfgdsgfsjljgsfd的看法了解到法律就发了敬爱为附近可垃圾发送dsgfsjljgsfd的看法了解到法律就发了敬爱为附近可垃圾发送dsgfsjljgsfd的看法了解到法律就发了敬爱为附近可垃圾发送dsgfsjljgsfd的看法了解到法律就发了敬爱为附近可垃圾发送dsgfsjljgsfd的看法了解到法律就发了敬爱为附近可垃圾发送到发发阿发回复把等方面八方达fgsfdgsg
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.commentitem {
  padding: 0 12.5vw;
}
.commentList {
  padding: 0 3.333vw;
  margin-top: 2.778vw;
  display: flex;
  div:nth-child(1) {
    flex: 0 0 8.333vw;
    margin-right: 5px;
    display: inline-block;
  }
  div:nth-child(2) {
    flex: 1;
    width: 80%;
    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 3.333vw;
      color: #999;
    }
    .comment {
      margin: 1.389vw 0;
      font-size: 3.333vw;
    }
  }
}
</style>
