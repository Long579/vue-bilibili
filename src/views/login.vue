<template>
  <div>
    <login-top Text="登录bilibili">
      <div slot="right" style="font-size: 3.611vw" @click="$router.push('/register')">注册</div>
    </login-top>
    <login-text
      label="用户名"
      placeholder="请输入用户名"
      type="text"
      @contentWatch="res => model.username = res"
      >
    </login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      @contentWatch="res => model.password = res"
      >
    </login-text>
    <login-btn BtnText="登录" @TextClick="AjaxInsert"></login-btn>
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop'
import LoginText from '../components/common/LoginText'
import LoginBtn from '../components/common/LoginBtn'
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async AjaxInsert () {
      const rulg = /^.{6,16}$/
      if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post('/login', this.model)
        this.$msg.fail(res.data.msg)
        if (res.data.code === 301 || res.data.code === 302) {
          return
        }
        console.log(res)
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.token)
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      } else {
        this.$msg.fail('格式不正确，请重新输入')
      }
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  }
}
</script>

<style scoped lang="less">

</style>
