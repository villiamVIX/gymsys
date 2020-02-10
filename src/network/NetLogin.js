import {VIXLogin} from './axiosVIX'

// export function NetLogin(AccData){
// 	return VIXLogin({
// 		url:'/login',
// 		method:"post",
// 		data:AccData,
// 		timeout:3000
// 	})
// }

export function LoginCaptche(){
	return VIXLogin({
		url:'/login/captche'
	})
}

export function phoneCode(phone){
	return VIXLogin({
		url:'/login/phonecode',
		params:{
			phone
		}
	})
}

export function phoneLogin(phone,randomCode){
	return VIXLogin({
		url:'/login/phone',
		method:'post',
		data:{
			phone,randomCode
		},
		timeout:3000
	})
}