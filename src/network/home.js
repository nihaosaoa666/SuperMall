import {axiosTest1} from 'network/request'

export function getHomeMultidata() {
	return axiosTest1({
		url: "/home/multidata"
	})
}

export function getHomeDetailData(type, page){
	return axiosTest1({
		url: "/home/data",
		params: {
			type,
			page
		}
	})
}