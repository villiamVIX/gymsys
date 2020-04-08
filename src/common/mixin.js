import {
	mapState
} from 'vuex'

// 查看是否登录的混入
export const checkLoginMixin = {
	computed: {
		...mapState(['User'])
	},
	watch:{
		'$store.state.User':function(){
			this.checkIsUser()
			this.checkRole()
		}
	},
	created() {
		this.checkIsUser()
		this.checkRole()
	},
	data() {
		return {
			isLogin: false,
			isAdmin: false
		}
	},
	methods: {
		checkIsUser() {
			if (this.User._id) {
				this.isLogin = true
			}else{
				this.isLogin=false
			}
		},
		checkRole() {
			if (this.User.role == 'admin') {
				this.isAdmin = true
			}
		},
	},
}

// 数据采集的混入
export const getChartData = {
	created() {
		this.init(this.actionFun,) //不传 默认7天
	},
	watch: {
		value: function(val) {   // 获取爹组件的vuex方法
			this.init(this.actionFun,val)
		}
	},
	data() {
		return {
			options: [{
				value: '7',
				label: '过去7天'
			}, {
				value: '30',
				label: '最近30天'
			}, {
				value: '90',
				label: '往季'
			}, ],
			value: '',
			loading:true
		}
	},
	methods: {
		init(action, val) {
			let day = val || 7
			this.$store.dispatch(action, day).then(res => {
				this.mapData() //异步 mounted时候不一定拿的到服务器数据
				this.loading=false
			}).then(res2 => {
				this.getChart()
			})
		},
	}
}
