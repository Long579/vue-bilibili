<template>
  <div class="comment-wrapper">
    <div>
      <div class="title">
        <span>评论</span>
        <span class="number">(1323)</span>
      </div>
      <div class="edit">
        <span>

          <img :src="model.user_img" alt="" style="width: 6.944vw" v-if="model" />
          <img :src="require('../img/avatar.jpg')" alt="" style="width: 6.944vw" v-else />
        </span>
        <span>
          <input type="text" name="" id="text" placeholder="说点什么吧" ref="Postipt" v-model="comcontent">
        </span>
        <span @click="commentPublish">发表</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: null,
      comcontent: ''
    }
  },
  methods: {
    async userData () {
      // 获取自己的数据
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    },
    focusInput () {
      this.$refs.Postipt.focus()
    },
    commentPublish () {
      if (!this.model && !localStorage.getItem('token') && !localStorage.getItem('id')) {
        this.$msg.fail('请先登录')
      }
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.userData()
    }
  }
}
</script>

<style scoped lang="less">
.comment-wrapper {
  padding: 10px 12px 0;
  .title {
    margin: 8px 0;
    font-size: 12px;
    .number {
      color: #999;
    }
  }
  .edit {
    display: flex;
    span:nth-child(1) {
      flex: 0 0 6.944vw;
      margin-right: 2.778vw;
      display: inline-block;
    }
    span:nth-child(2) {
      display: inline-block;
      flex: 1;
      width: 80%;
      input {
        padding-left: 2.222vw;
        width: 98%;
        height: 20.002px;
        border: none;
        font-size: 2.778vw;
        background-color: #f4f4f4;
        border-radius: 2.778vw;
      }
    }
    span:nth-child(3) {
      display: inline-block;
      margin-left: 2.5vw;
      padding: 0 0.833vw;
      height: 5.556vw;
      line-height: 5.556vw;
      font-size: 2.778vw;
      background-color: #fb7299;
      border-radius: 2.5vw;
      color: #fff;
    }
  }
}
</style>
