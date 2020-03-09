<template>
	<view class="headerSwiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swipers">
			<swiper-item  v-for="(item,index) in navSwiper" :key="index">
				<view class="swiper-item">
					<image :src="item.picUrl" mode=""></image>
				</view>
			</swiper-item>			
		</swiper>	   
	</view>
</template>

<script>
	import {request} from "../../utils/request.js"
	export default{
		
	
	data() {
	        return {
	            background: ['color1', 'color2', 'color3'],
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500,
				navSwiper:[]
	        }
	    },
	    methods: {
	        changeIndicatorDots(e) {
	            this.indicatorDots = !this.indicatorDots
	        },
	        changeAutoplay(e) {
	            this.autoplay = !this.autoplay
	        },
	        intervalChange(e) {
	            this.interval = e.target.value
	        },
	        durationChange(e) {
	            this.duration = e.target.value
	        }
	    },
		async mounted(){
			let result =await request("/index")
			this.navSwiper = result.focusList
		}
	}
</script>

<style lang="stylus">
.swipers
	width 750upx
	height 400upx
	swiper-item
		.swiper-item
			image
				width 100%
				height 400upx

</style>
