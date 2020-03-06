import axios from 'axios'
axios.defaults.withCredentials=true; //开启携带session

// export function VIXLogin(config){
// 	const VIX2 =axios.create({
// 		baseURL:'http://106.53.7.24/zuba/index',
// 		timeout: 5000
// 	})
// 	// 拦截器转换返回值的data
// 	VIX2.interceptors.request.use(config => {
// 	  return config
// 	}, err => {
// 	  // console.log(err)
// 	})
	
// 	// 2.2.响应拦截
// 	VIX2.interceptors.response.use(res => {
// 	  return res.data
// 	}, err => {
// 	  console.log(err);
// 	})
// 	// 3.发送真正的网络请求
// 	return VIX2(config)
// }
const url1='http://192.168.1.104:3008'
const url2='http://106.53.7.24:3008'

export function VIX(config) {
  const VIX1 = axios.create({
    baseURL: url1+'/gymdata',
    timeout: 5000
  })

  // 拦截器转换返回值的data
  VIX1.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err)
  })

  // 2.2.响应拦截
  VIX1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return VIX1(config)
}

export function VIXLogin(config) {
  const VIX1 = axios.create({
    baseURL: url1+'/users',
    timeout: 5000
  })

  // 拦截器转换返回值的data
  VIX1.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err)
  })

  // 2.2.响应拦截
  VIX1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return VIX1(config)
}

export function VIXNews(config) {
  const VIX1 = axios.create({
    baseURL: url1+'/news',
    timeout: 5000,
	 headers:{"Content-Type":"multipart/form-data"}
  })

  // 拦截器转换返回值的data
  VIX1.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err)
  })

  // 2.2.响应拦截
  VIX1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return VIX1(config)
}
