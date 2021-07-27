<template>
	<swiper>
		<swiper-item v-for="(item,index) in banners">
			<img :src="item" >
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper'
	
	export default {
		name: 'DetailSwiper',
		props: {
			banners: {
				type:Array,
				default() {
					return []
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
</style>
