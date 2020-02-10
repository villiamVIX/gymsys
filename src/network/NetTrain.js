import {
	VIX
} from './axiosVIX'

// 请新闻数据
export function getCoachList() {
	return VIX({
		url: '/coach',
		timeout: 3000
	})
}

export function bookCoach(bookInfo) {
	return VIX({
			url: '/coach/booking',
			method: "post",
			data: bookInfo,
			timeout: 3000
	})
	}

export function getLesson(){
	return VIX({
		url:'/lesson',
		timeout:5000
	})
}

export function getLsTeacher(_id){
	return VIX({
		url:'/lesson/teacher',
		params:{
			_id
		}
	})
}