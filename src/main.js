import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Cell, CellGroup, Field, Button, Toast, Icon, Uploader, Dialog, ActionSheet, Tab, Tabs, List, Divider } from 'vant'
import http from '../http'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.use(Button)
Vue.use(Field)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Divider)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
