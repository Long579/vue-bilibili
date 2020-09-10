<template>
<div>
  <div class="comment-wrapper">
    <div class="commentList">
      <div>
        <img :src="require('../img/avatar.jpg')" style="width: 8.333vw">
      </div>
      <div>
        <div class="name">
          <span class="username">魅力</span>
          <span>5-12</span>
        </div>
        <p class="comment">dfsgsfgsfgdsgf近可垃圾发送dsgfsjljgsfd的看法了解到法律就发了敬爱为附近可垃圾发送到发发阿发回复把等方面八方达fgsfdgsg</p>
      </div>
    </div>
    <div>
      <comment-item />
    </div>
  </div>
</div>

</template>

<script>
import CommentItem from '../common/CommentItem'
export default {
  data () {
    return {
      comment: ''
    }
  },
  methods: {
    async commentData () {
      const res = await this.$http.get('/comment/' + this.$route.params.id)
      this.comment = res
      console.log(res)
      this.changeCommentData(res.data)
    },
    changeCommentData (data) {
      function fn (temp) {
        const arr1 = []
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id === temp) {
            arr1.push(data[i])
            data[i].child = fn(data[i].comment_id)
          }
        }
        return arr1
      }
      return fn(null)
    }
  },
  created () {
    this.commentData()
  },
  components: {
    CommentItem
  }
}
</script>
<style scoped lang="less">
.comment-wrapper {
  padding-bottom: 12px;
  border-bottom: 0.278vw solid #f4f4f4;
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
