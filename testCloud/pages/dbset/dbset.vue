<template>
	<view>
		<button @click="addUser" type="default">添加用户</button>
		<button @click="searchUser" type="default">查询用户</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			addUser:function(){
				uniCloud.callFunction({
					name:"addUser",
					data:{
						username:'sun',
						password:'123456',
						msg:"测试"
					},
					success(res) {
						console.log(res)
					}
				})
			},
			searchUser(){
				uniCloud.callFunction({
					name:'searchUser',
					data:{
						username:"sun"
					},
					success(res){
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>

</style>
