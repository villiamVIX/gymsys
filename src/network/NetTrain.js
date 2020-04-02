import {
	VIX
} from './axiosVIX'


export function getCoachList() {
	return VIX({
		url: '/gymdata/coach',
		timeout: 3000
	})
}

export function getCoachBooked(data) {
	return VIX({
		url: '/gymdata/coach/booked',
		method: "get",
		data: data,
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

export function getLesson() {
	return VIX({
		url: '/gymdata/lesson',
		timeout: 5000
	})
}

export function rateCoach(data) { //给教练打分
	return VIX({
		url: '/gymdata/rate',
		method: "post",
		data: data,
	})
}


export function getLsTeacher(_id) {
	return VIX({
		url: '/gymdata/lesson/teacher',
		params: {
			_id
		}
	})
}

export function getCoachDetail(id) {
	return VIX({
		url: '/gymdata/coach/detail',
		params: {
			id
		}
	})
}
