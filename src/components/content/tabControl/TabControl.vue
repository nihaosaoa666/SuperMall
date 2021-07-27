<template>
	<div class="tab-control">
		<div class="control-item"
			 v-for="(item, index) in titles"
			 :class="{active: currIndex === index}"
			 @click="tabClick(index)"
			 >
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currIndex: 0
			}
		},
		methods: {
			tabClick(index) {
				this.currIndex = index;
				this.$emit('trigger', index);
			}
		},
		
	}
</script>

<style>
	.tab-control{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
	}
	.control-item{
		flex: 1;
		font-size: 14px;
	}
	.active{
		color: var(--color-tint);
	}
	.active span{
		padding: 4px;
		border-bottom: 2px solid var(--color-high-text);
	}
</style>
