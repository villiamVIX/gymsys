import {VIX} from './axiosVIX'

// 请新闻数据
export function getCoachList(){
	return VIX ({
		url:'/coach'
	})
}