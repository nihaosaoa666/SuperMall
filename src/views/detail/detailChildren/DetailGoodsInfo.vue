<template>
	<div class="good-item" v-if="Object.keys(goods).length !== 0">
		<h2 class="title">{{goods.title}}</h2>
		<div class="good-price-info">
			<span class="price">{{goods.price}}</span>
			<span class="oldprice">{{goods.oldPrice}}</span>
			<span class="disdesc">{{goods.discountDesc}}</span>
		</div>
		<div class="columns">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[3].name}}</span>
		</div>
		<div class="services">
			<div class="services-item" v-for="item in indexs">
				<img :src="goods.services[item].icon" >
				<span>{{goods.services[item].name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		data() {
			return {
				indexs: [0, 1, 2],
			}
		},
		props: {
			goods: {
				type: Object,
				default() {
					return {}
				}
			}
		},
	}
</script>

<style scoped>
	.good-item{
		padding:10px 5px 0px;
	}
	.title{
		font-size: 16px;
	}
	.good-price-info{
		margin: 10px 0px 15px;
	}
	.good-price-info .price{
		font-size: 20px;
		color: var(--color-tint);
	}
	.good-price-info .oldprice{
		margin: 0px 5px;
		font-size: 14px;
		text-decoration: line-through;
	}
	.good-price-info .disdesc{
		padding: 3px 5px;
		background-color: var(--color-high-text);
		color: #fff;
		border-radius: 10px;
	}
	.columns{
		display: flex;
		justify-content: space-between;
		padding-bottom: 8px;
		color: #acacac;
		font-size: 13px;
		border-bottom: 1px solid #ccc;
	}
	.services{
		display: flex;
		justify-content: space-between;
		padding: 20px 0px;
		border-bottom: 3px solid #ccc;
		font-size: 13px;
	}
	.services img{
		width: 14px;
		vertical-align: middle;
	}
</style>
