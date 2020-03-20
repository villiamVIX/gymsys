import {
	REWRITE,
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
	ADMINENTRANCECHART
} from './mutations-type'

import {
	
}from 'network/NetHome.js'

import {
	getCoachList,
	getLesson,
	getCoachDetail,
	bookCoach
}from 'network/NetTrain.js'

import {
	getIsLogin,
	getEntrance,
	getLogout,
	ChangeAvatar,
}from 'network/NetLogin.js'


import {
	getNewsList,
	getNews,
	postComment,
	deleteComment,
	publishNews,
	deleteNews,
}from 'network/NetNews.js'

import {
	getAdminNewsChart,
	getAdminEntranceChart
}from 'network/NetAdmin.js'

export default{
	rewriteUserInfo({commit},info){  //注册时用户信息插入
			commit(REWRITE,info)
	},
	
	async reqNewsList({commit},data){ //新闻列表
		const res= await getNewsList(data)
		let {newslist,pageInfo}=res;
		commit(NEWSLIST,newslist)
		  return Promise.resolve(pageInfo);
	},
	
	
	reqCoachList({commit}){ //教练列表
		getCoachList().then(res=>{
			if(res.status==200){
				let data=res.data
				commit(COACHLIST,data)
			}
		})
	},
	
	async reqCoachDetail({commit},data){ //被预约情况
	      const res= await getCoachDetail(data)
		  commit(COACHDETAIL,res)
	},
	
	async reqBookCoach({commit},data){ //预约教练
	      const res= await bookCoach(data)
		  return Promise.resolve(res.message) 
	},
	
	reqLesson({commit}){ //团课信息
		getLesson().then(res=>{
			if(res.status==200){
				let data=res.data
				commit(LESSON,data)
			}
		})
	},
	
	reqIsLogin({commit}){ //自动登录
		getIsLogin().then(res=>{
			console.log(res)
			if(res.status==200){
				let data=res.data
				commit(AUTOLOGIN,data)
			}
		})
	},
	
	reqLogout({commit}){//退出登录
	    getLogout().then(res=>{
			if(res.status==200){
				commit(LOGOUT)
			}
			
		})
	},
	
	reqEntrance({commit}){ //扫码入场 -->tag 后期改为进场状态
		getEntrance().then(res=>{
			if(res){
				// let data=res.data
				console.log(res)
				commit(ENTRANCE,res)
			}
			
		})
	},
	
	 async reqChangeAvatar({commit},img){//换头像
		//把这个action改为promises 在接收处链式then就可收到要吐出去的信息
	    return new Promise( (resolve,reject)=>{
			ChangeAvatar(img).then(res=>{
				resolve(res.data.message)
				let data=res.data.avatar
				commit(CHANGEAVATAR,data)
			})
		})
	
	    },
		
	
	reqNews({commit},newsId){ // 获取详细新闻
	    getNews(newsId).then(res=>{
	    	if(res.status==200){
	    		let data=res.data
	    		commit(NEWS,data)
	    	}
	    })
	},
	
	reqSendComment({commit},data){
	      return new Promise((resolve,reject)=>{
	    	postComment(data).then(res=>{
	    			return resolve('发送成功')
	    	})
	    })
	},
	
	reqDeleteComment({commit},data){ // 删除自己发的评论
		return new Promise((resolve,reject)=>{
			deleteComment(data).then(res=>{
				if(res.status==200){
					return resolve(res.msg)
				}else{
					return reject(res.msg)
				}
			})
		})
	},
	
	reqPublishNews({commit},data){ // 发布讯息
	    publishNews(data).then(res=>{
	    	// if(res.status==200){
	    	// 	let data=res.data
	    	// 	commit(NEWS,data)
	    	// }
			console.log(res)
	    })
	},
	
	reqDeleteNews({commit},data){ // 删除帖子
		return new Promise((resolve,reject)=>{		
	        deleteNews(data).then(res=>{
				console.log(reject)
				 return resolve(res.msg)
		    })
		})
	},
	
/*
管理员
*/	

    async reqAdminNews({commit},data){ //管理员新闻列表
    	const res= await getNewsList(data)
    	let {newslist,pageInfo}=res;
    	commit(ADMINNEWSLIST,newslist)
    	  return Promise.resolve(pageInfo);
    },
	
	async reqAdminNewsChart({commit},data){ //管理员新闻列表
		const res= await getAdminNewsChart(data)
		// console.log(res)
		commit(ADMINNEWSCHART,res.data)
	},
	
    
	async reqAdminEntranceChart({commit},data){ //管理员新闻列表
		const res= await getAdminEntranceChart(data)
		// console.log(res)
		commit(ADMINENTRANCECHART,res.data)
	},
	
}
