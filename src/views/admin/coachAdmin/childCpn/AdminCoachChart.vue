<template>
	<div id="AdminCoachChart">
		<van-popup v-model="show" position="top" :style="{ height: '30%' }">
			<van-datetime-picker v-model="currentDate" type="year-month" :max-date="maxDate" :min-date="minDate" :formatter="formatter" />
		</van-popup>
		
		<div id="main" style="margin: 0 auto;height: 20rem; width: 100%;"></div>
		<el-button type="success" class='btn' size="large" @click='show=true'>选择月份</el-button>

	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		created() {
			this.initTime()
			this.init(this.currentDate)
		},
		data() {
			return {
				minDate: new Date(2018, 0, 1),
				maxDate: null,
				currentDate: new Date(),
				formatData: undefined,
				data: [],
				show: false
			};
		},
		watch: {
			currentDate: function(val) {
				this.init(val)
			}
		},
		methods: {
			init(val) {
				let date = val.toLocaleDateString()
				let year = date.split('/')[0]
				let month = add0(date.split('/')[1])
				this.formatData = year + '-' + month

				function add0(n) { //给月加0
					return (n = n < 10 ? "0" + n : n);
				}
				console.log(this.formatData)
				this.$store.dispatch('reqAdminCoachPie', this.formatData).then(data => {
					this.mapData()
				}).then(data2 => {
					this.getChart()
				})
			},
			mapData() {
				let data = this.CoachPie
				let nameData = Object.keys(data)
				let valData = Object.values(data)
				let dataBox = []
				for (let i = 0; i < valData.length; i++) {
					let formatData = {}
					formatData.value = valData[i]
					formatData.name = nameData[i]
					dataBox.push(formatData)
				}
				this.data = dataBox
				dataBox.sort(function(a, b) {
					return (a.value - b.value)
				})
				console.log(dataBox)

			},
			initTime() { //最晚本月
				let date = new Date()
				let nowYear = date.getFullYear()
				let nowMonth = date.getMonth() + 1
				this.maxDate = new Date(nowYear, nowMonth, 0)
			},
			formatter(type, val) {
				if (type === 'year') {
					return `${val}年`;
				} else if (type === 'month') {
					return `${val}月`
				}
				return val;
			},
			showPopup() {
				this.show = true;
			},
			getChart() {
				//1.初始化E实例 找好dom
				var mychart = echarts.init(document.getElementById('main'))

				// 2.换汤不换药的option
				var option = {
					title: {
						text: `${this.formatData}门店贡献`,
						subtext: '健身房业绩分析',
						left: 'left'
					},
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					legend: {
						type: 'scroll',
						orient: 'vertical',
						right: 10,
						top: 20,
						bottom: 20,
						data: this.data.legendData,
					},
					series: [{
						name: '姓名',
						type: 'pie',
						radius: '55%',
						center: ['40%', '50%'],
						data: this.data,
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};

				// 3.渲染
				mychart.setOption(option)
			}
		},
		computed: {
			...mapState({
				CoachPie: state => state.Admin.CoachPie
			})
		}
	}
</script>

<style scoped>
	.AdminCoachChart{
		width: 100vw;
	}
</style>
