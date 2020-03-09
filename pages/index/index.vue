<template>
	<view class="content">
		<ListHeader/>
					
		<view class="navList">
			
			<scroll-view scroll-x="true" class="svTop">
			  <view class="navItem">推荐</view>
			  <view class="navItem" v-for="(item,index) in navList" :key="index">{{item.text}}</view>
			</scroll-view>               
		</view>
		<view class="swipers">
			<HeaderSwiper/>
		</view>
		
	</view>
</template>

<script>
	
	import {request} from "../../utils/request.js"
	import Header from "../../components/header/header.vue"
	import HeaderSwiper from "../../components/headerSwiper/headerSwiper.vue"
	export default {
		components:{
			HeaderSwiper,
			ListHeader:Header
		},
		data() {
			return {
				navList:[]
			}
		},
		methods: {
			
		},
		async mounted(){
			let result =await request("/index")
			let navs= result.kingKongModule.kingKongList
			this.navList = navs.slice(1,9)
			
		}
	}
</script>

<style lang="stylus">
	.content
		width 100vw
		height 100%	
	.navList
		display flex
		flex-wrap nowrap
		white-space nowrap
		.navItem
			display inline-block	
	.swipers
		width 100%
		height 400upx
</style>
