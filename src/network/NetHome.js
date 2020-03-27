import {VIX} from './axiosVIX'


export function getHomeCommon(){
	return VIX({
		url:'/gymdata/home/common'
	})
}

