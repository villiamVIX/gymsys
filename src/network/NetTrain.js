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



export function getCoachDetail(id) {
	return VIX({
		url: '/gymdata/coach/detail',
		params: {
			id
		}
	})
}

export function deleteCoachClass(data) {
	return VIX({
		url: '/gymdata/cancel/coach',
		params: {
			data
		}
	})
}

// 看所有被定过的课
export function reqBookedClass(data) {
	return VIX({
		url: '/gymdata/booked/class',
		params:{coach_id:data}
	})
}
