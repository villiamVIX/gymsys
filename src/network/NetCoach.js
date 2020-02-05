import {
	VIX
} from './axiosVIX'

// 请新闻数据
export function getCoachList() {
	return VIX({
		url: '/coach'
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

