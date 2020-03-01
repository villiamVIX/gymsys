import {VIX} from './axiosVIX'

export function getNews(newsId){
	return VIX({
		url:'/newsDetail/news',
		params:{
			newsId
		}
	})
}

export function postComment(data,newsId){
	return VIX({
		url:'/news/comment',
		method:'post',
		data:data,
		timeout:3000,
	})
}

export function deleteComment(data){
	return VIX({
		url:'/news/delete',
		method:'delete',
		data:{data:data},
		timeout:3000,
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