<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav"/>
		<scroll class="content">
			<detail-swiper class="detail-swiper" :banners="banners" />
			<detail-goods-info :goods="goods" />
			<detail-shop-info :shops="shop" />			
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from './detailChildren/DetailNavBar'
	import DetailSwiper from './detailChildren/DetailSwiper'
	import DetailGoodsInfo from './detailChildren/DetailGoodsInfo'
	import DetailShopInfo from './detailChildren/DetailShopInfo'
	
	import Scroll from 'components/common/scroll/Scroll'
	
	import {getDetailData, Goods, Shop} from 'network/detail'
	
	export default {
		name: 'Detail',
		data() {
			return {
				iid: null,
				banners: [],
				goods: {},
				shop: {},
			}
		},
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailGoodsInfo,
			DetailShopInfo,
			Scroll,
		},
		methods: {
			getDetailData(iid) {
				getDetailData(iid).then(res => {
					let data = res.result;
					console.log(data)
					// 获取轮播图的数据
					this.banners = data.itemInfo.topImages;
					
					// 获取商品信息数据
					this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
					// 获取店铺信息数据
					this.shop = new Shop(data.shopInfo)
					// console.log(this.shop)
				}, err => {
					console.log(err)
				})
			}
		},
		created() {
			this.iid = this.$route.params.iid;
			this.getDetailData(this.iid)
		},
		mounted() {},
	}
</script>

<style scoped>
	#detail{
		/* padding-bottom: 49px; */
	}
	.content{
		/* height: calc(100% - 44px); */
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.detail-nav{
		position: relative;
		z-index: 9;
		background-color: #fff;
	}
	.detail-swiper{
		height: 230px;
		overflow: hidden;
	}
</style>
