import {
	addSwiper
}from 'network/NetAdmin.js'


const state = {
  sidebar: true,
  device: 'desktop',
  screem:'desktop'
  // size: 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar = !state.sidebar

  },
  CLOSE_SIDEBAR: (state) => {
    state.sidebar= false
    // state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_SCREEM:(state, screem) => {
    state.screem = screem
  },
  
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }) {
    commit('CLOSE_SIDEBAR')
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  catchScreem({commit},screem){
	  commit('TOGGLE_SCREEM', screem)
  },
  async AddSwiper({ commit },data) {
  	  let res = await addSwiper(data)
  },
  // setSize({ commit }, size) {
  //   commit('SET_SIZE', size)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
