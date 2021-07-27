<template>
	<div class="wrapper" ref="scroll">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Scroll',
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoadType: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scroll: null,
			}
		},
		methods: {
			scrollTop(x, y, time) {
				this.scroll && this.scroll.scrollTo(x, y, time)
			},
			loadMore() {
				this.scroll && this.scroll.refresh()
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp()
			},
			getCoorXY() {
				if (this.scroll) {
					return {
						X: this.scroll.x,
						Y: this.scroll.y
					}
				}
			}
			
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.scroll, {
				click: true ,//允许元素点击
				probeType: this.probeType, //获取滚动的距离
				pullUpLoad: this.pullUpLoadType, //允许绑定上拉事件
			})
			
			// 监听页面滚动事件
			this.scroll.on("scroll", position => {
				this.$emit("scroll", position)
			})
			
			// 监听上拉事件
			this.scroll.on("pullingUp", () => {
				this.$emit("goodsItemUp")
			})
		}	
	}
</script>

<style scoped>
</style>
