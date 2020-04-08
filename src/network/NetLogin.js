import {VIX} from './axiosVIX'

// 请求随机码
export function LoginCaptche(){
	return VIX({
		url:'/users/api/login/captche'
	})
}

//请求验证码
export function phoneCode(phone){
	return VIX({
		url:'/users/login/phonecode',
		params:{
			phone
		}
	})
}

//电话登录
export function phoneLogin(data){
	return VIX({
		url:'/users/login/phone',
		method:'post',
		data:data,
	})
}

//密码登录
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

//自动登录
export function getIsLogin(){
	return VIX({
		url:'/users/api/islogin',
			timeout:3000
	})
}
//退出登录
export function getLogout(){ 
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

export function getMyClass(){ //获取我的课表
	return VIX({
		url:'/users/myclass',
	})
}

export function recharge(data){ //续费充值
	return VIX({
		url:'/users/recharge',
		params:{
			data
		}
	})
}

export function getLastUserInfo(){ //资料更新
	return VIX({
		url:'/users/lastuserinfo',
		
	})
}

