import {axiosTest1} from './request.js'

export function getDetailData(iid){
	return axiosTest1({
		url: '/detail',
		params: {
			iid
		}
	})
}

/**
 * 用于保存详情页的标题部分的数据
 */
export class Goods{
	constructor(itemInfo,columns, services) {
	    this.title = itemInfo.title,
		this.price = itemInfo.price,
		this.oldPrice = itemInfo.oldPrice,
		this.discountDesc = itemInfo.discountDesc,
		this.columns = columns,
		this.services = services
	}
}

/**
 * 用于保存详情页的店铺数据
 */
export class Shop{
	constructor(shopInfo) {
		this.sells = shopInfo.cSells,
		this.goods = shopInfo.cGoods,
		this.sName = shopInfo.name,
		this.sLogo = shopInfo.shopLogo,
		this.score = shopInfo.score
	}
}