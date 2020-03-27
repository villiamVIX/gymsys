import {
	getAdminNewsChart,
	getAdminEntranceChart,
	getAdminUserTable,
	getAdminCoachTable,
	getAdminLessonTable,
	deleteUser,
	getAdminCoachPie,
	upDateCoach,
	deleteCoach,
	createCoach,
	addSwiper
}from 'network/NetAdmin.js'

const state = {
	showForm:false,
	coachInfo:{
		
	}
}

const mutations = {
  TOGGLE_FORM: (state,coachInfo) => {
	state.showForm=true
    state.coachInfo = coachInfo
  },
  CLOSE_FORM: (state) => {
    state.showForm= false
  },
  
}

const actions = {
  toggleForm({ commit },coachInfo) {
    commit('TOGGLE_FORM',coachInfo)
  },
  closeForm({ commit }) {
    commit('CLOSE_FORM')
  },
  async upDateCoach({ commit },data) {
	  let res = await upDateCoach(data)
  },
  async deleteCoach({ commit },data) {
  	  let res = await deleteCoach(data)
  },
  async createCoach({ commit },data) {
  	  let res = await createCoach(data)
  },
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
