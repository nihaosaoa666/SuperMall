<template>
	<div class="shop-info">
		<div class="title">
			<img :src="shops.sLogo" >
			<span>{{shops.sName}}</span>
		</div>
		<div class="center">
			<div class="shop-deta">
				<div class="sell">
					<p>{{getSell}}</p>
					<p>总销量</p>
				</div>
				<div class="goos">
					<p>{{shops.goods}}</p>
					<p>全部宝贝</p>
				</div>
			</div>
			<div class="score">
				<div class="score-item" v-for="(item, index) in shops.score">
					<!-- <span v-for="value in items">{{value}}</span> -->
					<span>{{item.name}}</span>
					<span>{{item.score}}</span>
					<span style="color: #fff;" :style="{backgroundColor: getStyleBg(index)}">{{item.isBetter ? "高" : "低"}}</span>
				</div>
			</div>
		</div>
		<div class="enter-shop">
			<span>进店逛逛</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailShopInfo',
		data() {
			return {
				bgColor: 'red',
			}
		},
		props: {
			shops: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			getStyleBg(index) {
				return this.shops.score[index].isBetter ? "green" : "red";
			}
		},
		computed: {
			getSell() {
				let sell = this.shops.sells / 10000;
				return sell.toFixed(1) + "万";
			},
		},
	}
</script>

<style scoped>
	.shop-info{
		padding: 10px;
	}
	.title{
		margin-top: 10px;
	}
	.title img{
		width: 60px;
		margin-right: 15px;
		vertical-align: middle;
	}
	.title span{
		font-size: 16px;
	}
	.center{
		display: flex;
		height: 100px;
	}
	.center .shop-deta{
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0px 10px;
		font-size: 12px;
		text-align: center;
	}
	.center .score{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 15px 25px;
		font-size: 12px;
	}
	.score-item{
		display: flex;
		justify-content: space-between;
		text-align: left;
	}
	.enter-shop{
		text-align: center;
	}
	.enter-shop span{
		padding: 5px 20px;
		background-color: #ccc;
		 border-radius: 15px;
	}
</style>
