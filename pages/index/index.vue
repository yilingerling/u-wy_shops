<template>
	<view class="content">
		<view class="navList">
			<scroll-view scroll-x="true">
			  <view class="navItem">AAAAAAAAA</view>
			  <view class="navItem">BBBBBBBBB</view>
			  <view class="navItem">CCCCCCCCC</view>   
			  <view class="navItem">AAAAAAAAA</view>
			  <view class="navItem">BBBBBBBBB</view>
			  <view class="navItem">CCCCCCCCC</view> 
			  <view class="navItem">AAAAAAAAA</view>
			  <view class="navItem">BBBBBBBBB</view>
			  <view class="navItem">CCCCCCCCC</view> 
			</scroll-view>               
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

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
