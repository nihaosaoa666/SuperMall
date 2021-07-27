<template>
	<nav-bar>
		<div class="left" slot="left" @click="backClick">
			<img src="~assets/img/common/back.svg" >
		</div>
		
		<div class="d-center" slot="center">
			<div class="d-center-item" 
				 v-for="(item, index) in titles" 
				 :class="{active: currentIndex === index}"
				 @click="toggleActive(index)"
				 >
				 {{item}}
			</div>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	
	export default {
		name: 'DetailNavBar',
		data() {
			return {
				currentIndex: 0,
				titles: ["标题1", "标题2", "标题3", "标题4"],
			}
		},
		components: {
			NavBar,
		},
		methods: {
			backClick() {
				this.$router.back();
			},
			toggleActive(index) {
				this.currentIndex = index;
			},
		},
	}
</script>

<style scoped>
	.left img{
		vertical-align: middle;
	}
	.d-center{
		display: flex;
	}
	.d-center .d-center-item{
		flex: 1;
		font-size: 14px;
	}
	.active{
		color: var(--color-tint);
	}
</style>
