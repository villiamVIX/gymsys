import {
	VIX
} from './axiosVIX'

// 设置入场头像
export function setEntranceAvatar(img) {
	return VIX({
		url: '/entrance/set/avatar',
		timeout:10000,
		method:'post',
		contentType:false,
		processData:false,
		data:img
	})
}

// 识别入场
export function checkEntranceAvatar(img) {
	return VIX({
		url: '/entrance/check/avatar',
		timeout:10000,
		method:'post',
		contentType:false,
		processData:false,
		data:{img}
	})
}

// 自动打卡
export function EntranceClock(img) {
	return VIX({
		url: '/users/entrance/data',
	})
}
