import {VIX} from './axiosVIX'

export function getAdminNewsChart(data){ //贴吧流量监控
	return VIX({
		url:'/admin/analysis/pubilsh',
		params:{
			data
		}
	})
}

export function getAdminEntranceChart(data){ //进场流量监控
	return VIX({
		url:'/admin/analysis/entrance',
		params:{
			data
		}
	})
}