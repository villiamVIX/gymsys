import {
	REWRITE,
	HOMENEWS,
	COACHLIST,
	LESSON,
	AUTOLOGIN,
	ENTRANCE,
	LOGOUT,
	CHANGEAVATAR,
	NEWS,
	COMMENT
} from './mutations-type'

export default {
	[REWRITE](state, info) {
		console.log(info)
		state.User = info;
	},
	[HOMENEWS](state,data){
		state.newsDetail=data
		state.recommend=data[0].recommend
	},
	[COACHLIST](state,data){
		state.coachList=data
	},
	[LESSON](state,data){
		state.Lessons=data
	},
	[AUTOLOGIN](state,data){
		state.User=data
	},
	[LOGOUT](state){
		state.User={}
	},
	[ENTRANCE](state,data){
		state.Entrance=data
	},
	[CHANGEAVATAR](state,data){
		state.User.avatar=data
	},
	[NEWS](state,data){
		// console.log(data)
		state.news=data
	},
}
