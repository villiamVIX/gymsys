import {mapState} from 'vuex'

// 查看是否登录的混入
 export const checkLoginMixin = {
	 computed:{
	 	...mapState(['User'])
	 },
	 created() {
	 	this.checkIsUser()
		this.checkRole()
	 },
	 data(){
	 	return {
	 		isLogin: false,
			isAdmin:false
	 	}
	 },
	 methods:{
	 	checkIsUser(){
	 		if(this.User._id){
	 			this.isLogin=true
	 		}
	 	},
		checkRole(){
			if(this.User.role=='admin'){
				this.isAdmin=true
			}
		}
	 },
 }