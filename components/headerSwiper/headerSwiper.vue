<template>
	<view class="headerSwiper">
		 <view>
		        <view class="uni-padding-wrap">
		            <view class="page-section swiper">
		                <view class="page-section-spacing">
		                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		                        <swiper-item  v-for="(item,index) in navSwiper" :key="index">
		                            <view class="swiper-item uni-bg-red">
										<image :src="item.picUrl" mode=""></image>
									</view>
		                        </swiper-item>
		                    </swiper>
		                </view>
		            </view>
		        </view>
		    </view>
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

<style lang="stylus" scoped>
.headerSwiper
	width 100%
	height 400upx
	image
		width 100%
</style>
