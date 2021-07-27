<template>
	<div class="goods">
		<goods-item v-for="item in goods" :goodData="item"></goods-item>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem.vue'
	export default {
		name: 'Goods',
		props: {
			goods: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			GoodsItem
		}
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 4px;
	}
</style>
