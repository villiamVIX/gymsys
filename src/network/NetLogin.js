import {VIXLogin} from './axiosVIX'

export function NetLogin(AccData){
	return VIXLogin({
		url:'/login',
		method:"post",
		data:AccData,
		timeout:3000
	})
}
