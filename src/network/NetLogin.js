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
		url:'/api/login/captche'
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


export function pwdLogin(username, password,checkCode){
	return VIXLogin({
		url:'/api/login/pwd',
		method:'post',
		data:{
			username, password,checkCode
		},
		timeout:3000
	})
}


export function getIsLogin(){//自动登录
	return VIXLogin({
		url:'/api/islogin',
			timeout:3000
	})
}

export function getLogout(){ //退出登录
	return VIXLogin({
		url:'/logout',
			timeout:3000
	})
}

// 二维码入场
export function getEntrance(){
	return VIXLogin({
		url:'/entrance',
			timeout:3000
	})
}

// 修改头像
export function ChangeAvatar(img){
	return  VIXLogin({
		url:'/changeavatar',
			timeout:3000,
			method:'post',
			contentType:false,
			processData:false,
			data:img
	})
}