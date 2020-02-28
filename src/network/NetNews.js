import {VIX} from './axiosVIX'

export function getNews(newsId){
	return VIX({
		url:'/newsDetail/news',
		params:{
			newsId
		}
	})
}

export class LoadInfo {
	constructor(newsData) {
		this.img=newsData.img
	    this.date=newsData.date
		this.avatar=newsData.avatar
		this.author=newsData.author
	}
}