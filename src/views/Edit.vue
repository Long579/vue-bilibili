<template>
  <div v-if="model" class="edit">
    <nar-bar style="margin-bottom: 10px" :userInfo = 'model'></nar-bar>
    <div class="uploader">
      <van-uploader :after-read="afterRead" class="uploadimg" preview-size="100vw"/>
      <edit-banner left="头像">
        <img :src="model.user_img" slot="right" class="avatar" v-if="model.user_img"/>
        <img src="../components/img/avatar.jpg" slot="right" class="avatar" v-else/>
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="UID">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别" v-model="content" @bannerClick="showgender = true">
      <a href="javascript:;" slot="right">{{ model.gender === 0 ? '男' : '女' }}</a>
    </edit-banner>
    <edit-banner left="个性签名" @bannerClick="showTxet = true">
      <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
    </edit-banner>
    <van-dialog v-model="show" title="昵称" type="text" maxlength="12" show-cancel-button @confirm="confirmClick" @cancel="content =''">
      <van-field v-model="content" autofocus />
    </van-dialog>
    <van-dialog v-model="showTxet" title="个性签名" show-cancel-button @confirm="textarea" @cancel="content =''">
      <van-field v-model="content" type="textarea" maxlength="20" autofocus />
    </van-dialog>
    <van-action-sheet v-model="showgender" cancel-text="取消" :actions="actions" @select="onSelect" />
    <div class="back" @click="$router.back()">返回空间</div>
    <div class="exit" @click="exit">退出登陆</div>
  </div>
</template>

<script>
import NarBar from '../components/common/NavBar'
import EditBanner from '../components/common/EditBanner'
export default {
  data () {
    return {
      model: {},
      show: false,
      showTxet: false,
      content: '',
      showgender: false,
      actions: [
        { name: '男', val: 0 },
        { name: '女', val: 1 }
      ]
    }
  },
  created () {
    this.seletUser()
  },
  methods: {
    // 进入组件渲染对象
    async seletUser () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      // console.log(res)
      this.model = res.data[0]
    },
    async afterRead (file) {
      // 将文件上传至服务器
      const formdata = new FormData()
      formdata.append('file', file.file)
      const res = await this.$http.post('/upload', formdata)
      console.log(res)
      this.model.user_img = res.data.url
      this.UserUpdata()
    },
    async UserUpdata () {
      const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.model)
      console.log(res)
    },
    confirmClick () {
      if (this.content === '') {
        this.$msg.fail('昵称不能为空')
      } else {
        this.model.name = this.content
      }
      this.UserUpdata()
      this.content = ''
    },
    textarea () {
      this.model.user_desc = this.content
      this.UserUpdata()
      this.content = ''
    },
    onSelect (data) {
      this.model.gender = data.val
      this.UserUpdata()
      this.showgender = false
    },
    exit () {
      console.log('fff')
      // 清楚token
      localStorage.clear()
      // 跳转首页
      this.$router.push('/')
    }
  },
  components: {
    NarBar,
    EditBanner
  }
}
</script>

<style scoped lang="less">
.edit {
  a {
    color: #999;
  }
  .avatar {
    width: 12.5vw;
    height: 12.5vw;
    border-radius: 50%;
  }
  .uploader {
    position: relative;
    overflow: hidden;
    .uploadimg {
      position: absolute;
      opacity: 0;
    }
  }
}
.back, .exit {
  margin-top: 4.167vw;
  padding: 3.333vw 0;
  width: 100%;
  font-size: 3.889vw;
  color: #505050;
  text-align: center;
  background-color: white;
}
.exit {
  margin-top: 1.389vw;
}
</style>
