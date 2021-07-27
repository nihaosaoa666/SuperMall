<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" >
				<h5>{{ item.title }}</h5>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendView',
	props: {
		recommends: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style>
	.recommend{
		display: flex;
		padding: 10px 0 20px;
		border-bottom: 10px solid #eee;
		text-align: center;
	}
	.recommend-item{
		flex: 1;
	}   
	.recommend-item img{
		width: 70px;
		height: 70px;
		margin-bottom: 5px;
		vertical-align: middle;
	}
	.recommend-item h5{
		font-size: 12px;
	}
</style>
