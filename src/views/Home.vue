<template>
  <div class="home">
    <nav-bar
      :userInfo="model"
    >
    </nav-bar>
    <van-tabs
      v-model="active"
      sticky
      swipeable
      class="tabs"
    >
      <van-tab
        v-for="(tab, index) in tabs"
        :title=tab.title
        :key="index"
        class="tabitem"
      >
        <van-list
          v-model="tab.loading"
          :finished="tab.finished"
          finished-text="我也是有底线的"
          @load="onLoad"
          :immediate-check="false"
        >
          <div class="detail-wrapper">
            <detail
              :detailitem="tabsitem"
              v-for="(tabsitem, tabsitemindex) in tab.list"
              :key="tabsitemindex"
              class="detail"
            />
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import Detail from '../components/common/Detail'
export default {
  name: 'Home',
  data () {
    return {
      model: {},
      tabs: [],
      active: 0
    }
  },
  methods: {
    onLoad () {
      const categoryitem = this.tabsItem()
      setTimeout(() => {
        categoryitem.page += 1
        this.seletArticle()
      }, 1000)
    },
    async userData () {
      console.log(localStorage.getItem('token'))
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/user/' + localStorage.getItem('id'))
        this.model = res.data[0]
      }
      const category = await this.$http.get('/category')
      this.changetabs(category.data)
    },
    changetabs (data) {
      const tab1 = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 8
        item.loading = false
        item.finished = false
        return item
      })
      this.tabs = tab1
      this.seletArticle()
    },
    async seletArticle () {
      const tabsitem = this.tabsItem()
      const res = await this.$http.get('/detail/' + tabsitem._id, {
        params: {
          page: tabsitem.page,
          pagesize: tabsitem.pagesize
        }
      })
      tabsitem.list.push(...res.data)
      tabsitem.loading = false
      if (res.data.length < tabsitem.pagesize) {
        tabsitem.finished = true
      }
    },
    tabsItem () {
      const tabsitem = this.tabs[this.active]
      return tabsitem
    }
  },
  watch: {
    active () {
      this.seletArticle()
    }
  },
  created () {
    this.userData()
  },
  components: {
    NavBar,
    Detail
  }
}
</script>

<style scoped lang="less">
.home {
  background-color: white;
}
.arrow-down {
  position: relative;
  .icon {
    position: absolute;
    right: 0;
    top: 8px;
    z-index: 5;
    padding: 5px 10px;
  }
}
.detail-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detail {
    margin: 2.778vw 0;
    width: 45%;
  }
}
</style>
