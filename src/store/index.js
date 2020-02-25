import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  User:{},
	  newsDetail: [],
	  recommend: {},
	  coachList: [],
	  Lessons: [],
	  teacherInfo:{},
	  Entrance:undefined
  },
  actions: actions,
  mutations: mutations,
  modules: {
  }
})
