import axios from 'axios'

export function axiosTest1(config){
	const instance = axios.create({
		baseURL: "http://152.136.185.210:7878/api/m5"
	})
	
	// 请求拦截器
	instance.interceptors.request.use(config => {
		return config
	}, err => {})
	
	// 响应拦截器
	instance.interceptors.response.use(res => {
		return res.data
	}, err => {})
	
	return instance(config)
}