import {mapState} from 'vuex'

// 查看是否登录的混入
 export const checkLoginMixin = {
	 computed:{
	 	...mapState(['User'])
	 },
	 created() {
	 	this.checkIsUser()
	 },
	 data(){
	 	return {
	 		isLogin: false
	 	}
	 },
	 methods:{
	 	checkIsUser(){
	 		if(this.User._id){
	 			this.isLogin=true
	 		}
	 	}
	 },
 }