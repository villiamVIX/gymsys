import {
	REWRITE,
	HOMECOMMON,
	NEWSLIST,
	COACHLIST,
	LESSON,
	AUTOLOGIN,
	ENTRANCE,
	LOGOUT,
	CHANGEAVATAR,
	NEWS,
	COMMENT,
	COACHDETAIL,
	
	ADMINNEWSLIST,
	ADMINNEWSCHART,
	ADMINENTRANCECHART,
	ADMINUSERTABLE,
	ADMINCOACHTABLE,
	ADMINLESSONTABLE,
	ADMINCOACHPIE,
} from './mutations-type'

export default {
	[REWRITE](state, info) {
		console.log(info)
		state.User = info;
	},
	[NEWSLIST](state,data){
		state.newsList.push(...data)
		// state.recommend=data[0].recommend
	},
	
	[HOMECOMMON](state,data){
		state.common=data
		// state.recommend=data[0].recommend
	},
//教练部分
	[COACHLIST](state,data){
		state.coachList=data
	},
	[COACHDETAIL](state,data){ //预订情况
		state.coachDetail=data.data
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
	
/*
管理员部分
*/	

    [ADMINNEWSLIST](state,data){
		state.newsList=data
	},
	
	[ADMINNEWSCHART](state,data){
		// console.log(data)
		state.Admin.NewsChart=data
	},
	
	[ADMINENTRANCECHART](state,data){
		// console.log(data)
		state.Admin.EntranceChart=data
	},
	
	[ADMINUSERTABLE](state,data){
		// console.log(data)
		state.Admin.UserTable=data
	},
	
	[ADMINCOACHPIE](state,data){
		// console.log(data)
		state.Admin.CoachPie=data.coachList
		state.Admin.CoachTable=data.data
	},
}
