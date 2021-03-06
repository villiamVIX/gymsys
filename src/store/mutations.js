import {
	REWRITE,
	HOMECOMMON,

	NEWSLIST,
	REFRESH_NEWSLIST,
	COACHLIST,
	LESSON,
	AUTOLOGIN,
	ENTRANCE,
	LOGOUT,
	CHANGEAVATAR,
	MYCLASS,
	
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
	
	Change_Entrance_Avatar
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
	[REFRESH_NEWSLIST](state){
		state.newsList=[]
	},
	
	[HOMECOMMON](state,data){
		state.common=data
		// state.recommend=data[0].recommend
	},
	// 入场部分
	[Change_Entrance_Avatar](state,data){
		state.User.entrance_avatar=data
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
	[MYCLASS](state,data){
		state.User.myClass=data
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
