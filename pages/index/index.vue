<template>
	<view class="content">
		<view class="navList">
			<scroll-view scroll-x="true">
			  <view class="navItem">推荐</view>
			  <view class="navItem" v-for="(item,index) in navList" :key="index">{{item.text}}</view>
			</scroll-view>               
		</view>
	</view>
</template>

<script>
	import {request} from "../../utils/request.js"
	export default {
		data() {
			return {
				navList:[]
			}
		},
		methods: {
			
		},
		async mounted(){
			let result =await request("/index")
			this.navList = result.kingKongModule.kingKongList
		}
	}
</script>

<style lang="stylus" scoped>
	.navList
		display flex
		flex-wrap nowrap
		white-space nowrap
		.navItem
			display inline-block		
</style>
