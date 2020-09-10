<template>
  <div class="article" v-if="video">
    <nar-bar :userInfo="model"></nar-bar>
    <div class="videoinfo">
      <video :src="video.content" controls="controls"></video>
      <div class="videocontent">
        <div class="videotitle">
          <span class="title">{{ video.category.title }}</span>
          <span class="name">{{ video.name }}</span>
        </div>
        <div class="number">
          <span class="username"> {{ video.userinfo.name }} </span>
          <span>4545人观看</span>
          <span>4355弹幕</span>
          <span> {{ video.date }}</span>
        </div>
        <div class="favrite">
          <span @click="collectionClick" :class="{activeColor: collectionActive}">
            <van-icon name="star" class="icon" />
            <span class="text">收藏</span>
          </span>
          <span @click="subscriptClick" :class="{activeColor: subscritionActive}">
            <van-icon name="like" class="icon" />
            <span class="text">关注</span>
          </span>
          <span>
            <van-icon name="invition" class="icon" />
            <span class="text">缓存</span>
          </span>
          <span>
            <van-icon name="share" class="icon"/>
            <span class="text">转发</span>
          </span>
        </div>
      </div>
    </div>
    <div class="commendList">
      <detail v-for="(item, index) in commendList" :key="index" :detailitem="item" class="commend"></detail>
    </div>
    <comment-title />
    <comment />
  </div>
</template>

<script>
import NarBar from '../components/common/NavBar'
import Detail from '../components/common/Detail'
import CommentTitle from '../components/common/CommentTitle'
import Comment from '../components/common/Comment'
export default {
  data () {
    return {
      model: {},
      video: null,
      commendList: null,
      collectionActive: null,
      subscritionActive: null
    }
  },
  methods: {
    async userData () {
      // 获取自己的数据
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/user/' + localStorage.getItem('id'))
        this.model = res.data[0]
      }
    },
    async articleData () {
      // 获取文章信息
      const res1 = await this.$http.get('/article/' + this.$route.params.id)
      // console.log(res1)
      this.video = res1.data[0]
      if (this.video) {
        this.subscriptInit()
      }
    },
    // 获取推荐文章
    async commendData () {
      const res = await this.$http.get('/commend')
      this.commendList = res.data
    },
    // 收藏文章
    async collectionClick () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.post('/collection/' + localStorage.getItem('id'), {
          article_id: this.$route.params.id
        })
        if (res.data.msg === '收藏成功') {
          this.collectionActive = true
        } else {
          this.collectionActive = false
        }
        this.$msg.fail(res.data.msg)
        console.log(res)
      }
    },
    // 进入页面获取是否收藏
    async collectionInit () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/collection/' + localStorage.getItem('id'), {
          params: {
            article_id: this.$route.params.id
          }
        })
        this.collectionActive = res.data.success
      }
    },
    // 收藏关注
    async subscriptClick () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.post('/sub_scription/' + localStorage.getItem('id'), {
          sub_id: this.video.userid
        })
        if (res.data.msg === '关注成功') {
          this.subscritionActive = true
        } else {
          this.subscritionActive = false
        }
        this.$msg.fail(res.data.msg)
        console.log(res)
      }
    },
    // 进入页面获取是否关注
    async subscriptInit () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/sub_scription/' + localStorage.getItem('id'), {
          params: {
            sub_id: this.video.userid
          }
        })
        console.log(res)
        this.subscritionActive = res.data.success
      }
    }
  },
  created () {
    this.userData()
    this.commendData()
    this.articleData()
    this.collectionInit()
  },
  watch: {
    $route () {
      this.articleData()
      this.commendData()
      this.collectionInit()
    }
  },
  components: {
    NarBar,
    Detail,
    CommentTitle,
    Comment
  }
}
</script>

<style scoped lang="less">
.article {
  background-color: #fff;
}
.videoinfo {
  width: 100%;
  video {
    width: 100%;
  }
}
.videocontent {
  padding: 0 3.333vw;
}
.videotitle {
  margin: 1.667vw 0;
  .title {
    display: inline-block;
    padding: 0.833vw 2.222vw;
    margin-right: 6px;
    background-color: #f4f4f4;
    color: #fb7299;
    font-size: 3.333vw;
    border-radius: 2.222vw;
  }
  .name {
    font-size: 4.444vw;
  }
}
.username {
  color: #212121;
  font-size: 3.333vw;
}
.number {
  font-size: 12px;
  color: #999;
  span {
    margin-right: 2.778vw;
  }
}
.favrite {
  .activeColor {
    .text {
      color: #fb7299;
    }
    .icon {
      color: #fb7299;
    }
  }
  span {
    display: inline-block;
    margin: 2.222vw 0;
    .text {
      margin-right: 5.556vw;
      font-size: 2.778vw;
      color: #999;
    }
    .icon {
      margin-right: 1.111vw;
      font-size: 5.556vw;
      vertical-align: middle;
      color: #757575;
    }
  }
  span:nth-child(4) {
    margin-left: 24.111vw;
    .text {
      margin-right: 0;
    }
  }
}
.commendList {
  padding: 0 3.333vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .commend {
    margin-top: 2.222vw;
    width: 48.5%;
  }
}
</style>
