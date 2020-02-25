import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入字体图标 ICON svg
import 'assets/icon/style.css'
import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

FastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
