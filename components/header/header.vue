<template>	
<bar :nav="setNav"></bar>	
</template>

<script>
	import bar from "./bar.vue"
	export default{
		components:{
			bar
		},
		data() {
			return {
				// 自定义导航栏对象
					setNav:{
					'bg':'yellow',  //背景色
					'color':'red',  //字体颜色
					'isdisPlayNavTitle':true//是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
					// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
				}
			}
		}
	}
</script>

<style>
 
</style>
