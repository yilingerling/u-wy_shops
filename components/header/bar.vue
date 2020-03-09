<template>
	<view>
		<view class="header" :style="{'height':titleBarHeight,'padding-top':statusBarHeight,'background-color': nav.bg}">
			<text class="iconfont leftArrow header-back weight"   :style="{'border':nav.color}" v-if="nav.isdisPlayNavTitle" >网易严选</text>
			<view class="header-title weight">{{nav.navTitle}}</view>
		</view>
		<view  :style="{'height':titleBarHeight,'padding-top':statusBarHeight}"></view>
	</view>
</template>
<script>
	export default {
		props:["nav"],
		data() {
			return {
				statusBarHeight: 0, 
				titleBarHeight: 0, 
			}
		},
		created() {
			var  that = this;
			 	uni.getSystemInfo({
			 		success: function(res) {
			 			if (res.model.indexOf('iPhone') !== -1) {
							that.titleBarHeight = 44 + 'px';
			 			} else {
			 				that.titleBarHeight = 48  + 'px';
						}
							that.statusBarHeight = res.statusBarHeight  + 'px'
					},
						
			 	})
		 }
	}
</script>

<style>
	
	.header {
		display: flex;
		align-items: center;
		top: 0;
		position: fixed;
		width: 100%;
		z-index: 100;
		left:0;
	}
	
	.header .header-title {
		position: absolute;
		left: 50%;
		font-size: 38upx;
		transform: translateX(-50%);
	}
	.header-back{
		position: absolute;
		left:15upx;
		font-size:40upx;
		padding: 10upx;
		border-radius: 50%;
	}
</style>
