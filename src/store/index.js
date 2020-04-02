import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import app from './modules/app'
import coach from './modules/coach'
import lesson from './modules/lesson'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		User: {},
		newsList: [],
		common: {},
		coachList: [],
		coachDetail: [],
		Lessons: [],
		teacherInfo: {},
		Entrance: undefined,
		news: {
			comment: []
		},
		Admin: {
			NewsChart: {},
			EntranceChart: {},
			UserTable: [],
			CoachTable: [],
			LessonTable: [],
			CoachPie: [],
			CoachTable: [],

		}
	},
	
	actions: actions,
	mutations: mutations,
	getters: getters,
	modules: {
		app,
		coach,
		lesson
	}
})
