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

import {
	getHomeNews,
}from 'network/NetHome.js'

import {
	getCoachList,
	getLesson
}from 'network/NetTrain.js'

import {
	getIsLogin,
	getEntrance,
	getLogout,
	ChangeAvatar,
}from 'network/NetLogin.js'


import {
	getNews,
	postComment,
	deleteComment
}from 'network/NetNews.js'

export default{
	rewriteUserInfo({commit},info){  //注册时用户信息插入
			commit(REWRITE,info)
	},
	
	reqHomeNews({commit}){ //主页信息
		getHomeNews().then(res=>{
		if (res.status==200){
			let data=res.data;
			commit(HOMENEWS,data)
		}
		else{
			Toast('拉取信息失败')
		}
		})
	},
	
	reqCoachList({commit}){ //教练列表
		getCoachList().then(res=>{
			if(res.status==200){
				let data=res.data
				commit(COACHLIST,data)
			}
			else{
				Toast('拉取教练信息失败')
			}
		})
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
	
	reqChangeAvatar({commit},img){//换头像
		//把这个action改为promises 在接收处链式then就可收到要吐出去的信息
	    return new Promise( (resolve,reject)=>{
			ChangeAvatar(img).then(res=>{
				if(res.status==200){
					 //提示操作状态
					resolve(res.data.message)
					let data=res.data.avatar
					commit(CHANGEAVATAR,data)
				}else{
					reject('更换失败')
				}
				
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
	
	reqSendComment({commit},data){ // 获取详细新闻
	    return new Promise((resolve,reject)=>{
			postComment(data).then(res=>{
				console.log(res)
				if(res.status==200){
					return resolve('发送成功')
				}else{
					return reject('发送失败请重新发送')
				}
			})
		})
	},
	
	reqDeleteComment({commit},data){ // 删除自己发的评论
	    deleteComment(data).then(res=>{
	    	// if(res.status==200){
	    	// 	let data=res.data
	    	// 	commit(NEWS,data)
	    	// }
			console.log(res)
	    })
	},
	
}
