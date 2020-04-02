import {
	postAdminLessonUpdate
}from 'network/NetAdmin.js'


const state = {
  lessonInfo:{}
}

const mutations = {
  CHANGE_LESSON: (state,data) => {
    state.lessonInfo = data
  },
  
}

const actions = {
  changeLesson({ commit },data) {
    commit('CHANGE_LESSON',data)
  },
  async updateLesson({commit},data){
	  await postAdminLessonUpdate(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
