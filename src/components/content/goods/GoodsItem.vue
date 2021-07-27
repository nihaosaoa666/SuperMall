<template>
	<div class="goods-item" @click="goodItemClick">
		<img :src="goodData.show.img" @load="imgLoad">
		<div class="info">
			<h5 class="title">{{goodData.title}}</h5>
			<p>
				<span class="price">{{goodData.price}}</span>
				<span class="collect">
					<img class="collect-icon" src="~assets/img/common/collect.svg" alt="">
					{{goodData.cfav}}
				</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsItem',
		props: {
			goodData: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			imgLoad() {
				this.$bus.$emit("itemImgLoad")
			},
			goodItemClick() {
				this.$router.push("/detail/" + this.goodData.iid)
			}
		},
	}
</script>

<style>
	.goods-item{
		width: 48%;
		margin-bottom: 5px;
	}
	.goods-item img{
		width: 100%;
		vertical-align: middle;
	}
	.goods-item .info{
		padding: 0px 3px;
		text-align: center;
	}
	.goods-item .info .title{
		margin: 4px 0px;
		font-size: 13px;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goods-item .info .price{
		margin-right: 5px;
		color: var(--color-tint);
		font-size: 14px;
	}
	.goods-item .info .collect{
		font-size: 14px;
	}
	.info .collect-icon{
		width: 14px;
		vertical-align: text-top;
	}
	/* .goods-item .info .collect::before{
		content: "";
		position: absolute;
		top: 0px;
		left: 0px;
		width: 10px;
		height: 10px;
		background: url(~assets/img/common/collect.svg) no-repeat;
	} */
</style>
