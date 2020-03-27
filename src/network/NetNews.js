import {VIX} from './axiosVIX'


export function getNewsList(data){// 请新闻列表
	return VIX({
		url:'/news/newslist',
		params:{
			page:data.page,
			pageSize:data.pageSize
		}
	})
}

export function getNews(newsId){ //详细新闻
	return VIX({
		url:'/news/newsDetail',
		params:{
			newsId
		}
	})
}

export function postComment(data){//发布评论

	return VIX({
		url:'/news/comment',
		method:'post',
		data:data,
		timeout:3000,

	})
}

export function deleteComment(data){ //删除评论
	return VIX({
		url:'/news/commentdelete',
		method:'delete',
		data:{data:data},
		timeout:3000,
	})
}


export function publishNews(data){//发布新闻
	return VIX({
		url:'/news/publish',
		method:'post',
		timeout:3000,
		contentType:false,
		processData:false,
		data:data,
	})
}

export function deleteNews(data){ //删除评论
	return VIX({
		url:'/news/newsdelete',
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