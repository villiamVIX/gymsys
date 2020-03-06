import {VIXNews} from './axiosVIX'


export function getNewsList(){// 请新闻列表
	return VIXNews({
		url:'/newslist'
	})
}

export function getNews(newsId){ //详细新闻
	return VIXNews({
		url:'/newsDetail',
		params:{
			newsId
		}
	})
}

export function postComment(data){//发布评论
	return VIXNews({
		url:'/comment',
		method:'post',
		data:data,
		timeout:3000,
	})
}

export function deleteComment(data){ //删除评论
	return VIXNews({
		url:'/delete',
		method:'delete',
		data:{data:data},
		timeout:3000,
	})
}


export function publishNews(data){//发布新闻
	return VIXNews({
		url:'/publish',
		method:'post',
		timeout:3000,
		contentType:false,
		processData:false,
		data:data,
	})
}



export class LoadInfo {
	constructor(newsData) {
		this.img=newsData.img
	    this.date=newsData.date
		this.avatar=newsData.avatar
		this.author=newsData.author
		this.reply=newsData.reply
	}
}