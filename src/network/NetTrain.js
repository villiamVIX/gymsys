import {
	VIX
} from './axiosVIX'


export function getCoachList() {
	return VIX({
		url: '/gymdata/coach',
		timeout: 3000
	})
}

export function bookCoach(bookInfo) {
	return VIX({
			url: '/gymdata/coach/booking',
			method: "post",
			data: bookInfo,
			timeout: 3000
	})
	}

export function getLesson(){
	return VIX({
		url:'/gymdata/lesson',
		timeout:5000
	})
}

export function getLsTeacher(_id){
	return VIX({
		url:'/gymdata/lesson/teacher',
		params:{
			_id
		}
	})
}