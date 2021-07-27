<template>
	<div id="home">
		<nav-bar class="home_nav"><h2 slot="center">购物街</h2></nav-bar>
		<tab-control class="home-tab-con-top"
					 :titles="['流行', '新款', '精选']" 
					 @trigger="triggerGoods"
					 ref="tabCon1"
					 v-show="isShowTabCon" />
		<scroll class="home-content" 
				@scroll="scroll"
				@goodsItemUp="goodsItemUp"
				:probeType="3"
				:pullUpLoadType="true"
				ref="scroll">
			<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
			<recommend-view :recommends="recommend" />
			<FeatureView />
			<tab-control class="home-tab-con" 
						 :titles="['流行', '新款', '精选']" 
						 @trigger="triggerGoods"
						 ref="tabCon2" />
			<goods :goods="goodShow" />	
		</scroll>
		<back-top @click.native="scrollTop" v-show="isShowBackTop" />
	</div>
</template>

<script>
	import HomeSwiper from './homeChildren/HomeSwiper'
	import RecommendView from './homeChildren/RecommendView'
	import FeatureView from './homeChildren/FeatureView'
	
	import NavBar from 'components/common/navbar/NavBar'
	import TabControl from 'components/content/tabControl/TabControl'
	import Goods from 'components/content/goods/Goods'
	import Scroll from 'components/common/scroll/Scroll'
	import BackTop from 'components/content/backTop/BackTop'
	
	import {getHomeMultidata, getHomeDetailData} from 'network/home'
	
	export default {
		name: 'Home',
		data() {
			return {
				banners: [],
				recommend: [],
				goodsType: "pop",
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					}
				},
				isShowBackTop: false,
				tabOffsetTop: 0,
				isShowTabCon: false,
				coorX: 0,
				coorY: 0
			}
		},
		components: {
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl,
			Goods,
			Scroll,
			BackTop,
		},
		computed: {
			goodShow() {
				return this.goods[this.goodsType].list;
			}
		},
		methods: {
			/**
			 * 处理业务逻辑相关的方法
			 */
			triggerGoods(index) {
				switch(index){
					case 0:
						this.goodsType = "pop";
						break;
					case 1:
						this.goodsType = "new";
						break;
					case 2:
						this.goodsType = "sell";
						break;
				}
				this.$refs.tabCon1.currIndex = index;
				this.$refs.tabCon2.currIndex = index;
			},
			scroll(position){
				this.isShowBackTop = Math.abs(position.y) > 1000;
				this.isShowTabCon = Math.abs(position.y) > this.tabOffsetTop;
			},
			scrollTop() {
				this.$refs.scroll.scrollTop(0, 0, 1000)
			},
			goodsItemUp() {
				console.log("上拉加载更多")
				this.getDetailData(this.goodsType);
				this.$refs.scroll.finishPullUp();
			},
			swiperImgLoad() {
				this.tabOffsetTop = this.$refs.tabCon2.$el.offsetTop;
			},
			/**
			 * 
			 * 网络请求相关的方法
			 */
			getMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommend = res.data.recommend.list
				}, err => {
					console.log(err);
				})
			},
			getDetailData(type) {
				let page = this.goods[type].page + 1;
				getHomeDetailData(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1;
				}, err => {
					console.log(err)
				})
			}
		},
		
		// 当组件实例创建完成时调用
		created() {
			this.getMultidata();
			this.getDetailData("pop")
			this.getDetailData("new")
			this.getDetailData("sell")
		},
		
		// 当组件实例挂载完成后调用
		mounted() {
			// 监听$bus中的itemImgLoad事件
			this.$bus.$on("itemImgLoad", () => {
				this.$refs.scroll.loadMore()
			})
		},
		
		// 当组件处于活跃时的钩子函数
		activated() {
			this.$refs.scroll.scrollTop(this.coorX, this.coorY, 0);
			this.$refs.scroll.scroll.refresh();
		},
		// 当组件处于不活跃的时候
		deactivated() {
			// 记录组件离开时scroll的X坐标和Y坐标
			this.coorX = this.$refs.scroll.getCoorXY().X;
			this.coorY = this.$refs.scroll.getCoorXY().Y;
		},
	}
</script>

<style scoped>
	#home{
		/* padding-top: 44px; */
		padding-bottom: 49px;
	}
	.home_nav{
		background-color: var(--color-tint);
		color: #fff;
	}
	.home-tab-con-top{
		position: relative;
		z-index: 9;
		background-color: #FFFFFF;
	}
	.home-tab-con{
		background-color: #FFFFFF;
	}
	.home-content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0px;
		right: 0px;
		overflow: hidden;
	}
</style>
