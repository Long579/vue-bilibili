<template>
  <div>
    <div class="info">
      <nav-bar :userInfo="model"></nav-bar>
      <user-content :userInfo="model"></user-content>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import UserContent from '../components/common/UserContent'
export default {
  data () {
    return {
      model: {}
    }
  },
  created () {
    this.UserinfoData()
  },
  methods: {
    async UserinfoData () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/user/' + localStorage.getItem('id'))
        this.model = res.data[0]
      }
    }
  },
  components: {
    NavBar,
    UserContent
  }
}
</script>

<style scoped lang="less">
.info {
  width: auto;
  height: 311px;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
}
</style>
