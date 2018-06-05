// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import details from './modules/details'
import adderss from './modules/order_addres'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    details,
    adderss
  }
})

export default store