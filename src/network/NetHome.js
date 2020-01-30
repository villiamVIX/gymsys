import {VIX} from './axiosVIX'

// 请新闻数据
export function getHomeNews(){
	return VIX ({
		url:'/newsDetail'
	})
}


// 请商品数据
// export function getHomeGoods(type,page){
// 	return VIX ({
// 		url:'/home/data',
// 		params:{
// 			type,
// 			page
// 		}
		
// 	})
// }
