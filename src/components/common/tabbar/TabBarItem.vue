<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isShow">
			<slot name="item-icon"></slot>
		</div>
		
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		
		<div :style="fullStyleColor">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			activeColor: {
				type: String,
				default: "red"
			}
		},
		data() {
			return {}
		},
		methods: {
			itemClick() {
				this.$router.replace(this.path)
			}
		},
		computed: {
			isShow() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			fullStyleColor() {
				return this.isShow ? {color: this.activeColor} : {}
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
	}
	.tab-bar-item img{
		width: 23px;
		height: 23px;
		margin: 4px;
		vertical-align: middle;
	}
	.tab-bar-item p{
		font-size: 14px;
	}
</style>
