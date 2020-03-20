import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  User:{},
	  newsList: [],
	  recommend: {},
	  coachList: [],
	  coachDetail:[],
	  Lessons: [],
	  teacherInfo:{},
	  Entrance:undefined,
	  news:{
		  comment:[]
	  },
	  Admin:{
		  NewsChart:{},
		  EntranceChart:{}
	  }
  },
  actions: actions,
  mutations: mutations,
  modules: {
  }
})
