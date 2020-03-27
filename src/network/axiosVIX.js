import axios from 'axios'
axios.defaults.withCredentials = true; //开启携带session
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 800;

const url1 = 'http://192.168.1.104:3008'
const url2 = 'http://106.53.7.24:3008'


import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);
export function VIX(config) {
	const VIX1 = axios.create({
		baseURL: url1,
		timeout: 5000
	})

	// 拦截器转换返回值的data
	VIX1.interceptors.request.use(config => {
		return config
	}, err => {
		// console.log(err)
	})

	/**
	 * 添加响应拦截器
	 *  成功回调: 成功的结果不再是response, 而是response.data
	 *  失败回调: 统一处理请求异常
	 */
	VIX1.interceptors.response.use(
		res =>res.data,
		error => {
			if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
				  Notify('请求超时')
			      return Promise.reject(error);          // reject这个错误信息
			    }
			console.log(error)
			switch (error.response.status) {
				case 404:
					this.items = [];
					this.totalItems = 0;
				case 500:
					Notify('提示')
					break;
				case 401:
					Notify('未登录')
					break;	
				case 403:
					Notify('权限不足')
					break;		
			}
			 return new Promise(() => { }) // 返回一个pedding状态的promise
		})

		// 3.发送真正的网络请求
		return VIX1(config)
	}
