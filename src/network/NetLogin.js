import {VIX} from './axiosVIX'

export function LoginCaptche(){
	return VIX({
		url:'/users/api/login/captche'
	})
}



export function phoneCode(phone){
	return VIX({
		url:'/users/login/phonecode',
		params:{
			phone
		}
	})
}

export function phoneLogin(phone,randomCode){
	return VIX({
		url:'/users/login/phone',
		method:'post',
		data:{
			phone,randomCode
		},
		timeout:3000
	})
}


export function pwdLogin(username, password,checkCode){
	return VIX({
		url:'/users/api/login/pwd',
		method:'post',
		data:{
			username, password,checkCode
		},
		timeout:3000
	})
}


export function getIsLogin(){//自动登录
	return VIX({
		url:'/users/api/islogin',
			timeout:3000
	})
}

export function getLogout(){ //退出登录
	return VIX({
		url:'/users/logout',
			timeout:3000
	})
}

// 二维码入场
export function getEntrance(){
	return VIX({
		url:'/users/entrance',
			timeout:3000
	})
}

// 修改头像
export function ChangeAvatar(img){
	return  VIX({
		url:'/users/changeavatar',
			timeout:3000,
			method:'post',
			contentType:false,
			processData:false,
			data:img
	})
}