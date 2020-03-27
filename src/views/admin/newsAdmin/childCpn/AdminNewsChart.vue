<template>
	<div id='newsChart' v-loading="loading">
		<div id="main" style="margin: 0 auto;height: 20rem;width: 80%;"></div>
		<el-select v-model="value" placeholder="日期">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
	import {
		getChartData
	} from 'common/mixin.js'
	export default {
		mixins: [getChartData],
		data() {
			return {
				data: {
					Xdata: [],
					Ydata: [],
				},
				actionFun:'reqAdminNewsChart'
			}
		},
		methods: {
			mapData() {
				let data = this.$store.state.Admin.NewsChart
				// console.log(data)
				var analysisData = []
				// 分别取出 键--值
				this.data.Xdata = Object.keys(data).reverse()
				this.data.Ydata = Object.values(data).reverse()
				console.log(this.data.Ydata);
			},
			getChart() {
				//1.初始化E实例 找好dom
				var mychart = echarts.init(document.getElementById('main'))

				// 2.换汤不换药的option
				var option = {
					title: {
						text: '贴吧流量监控',
						subtext: '健身房管理系统',
						left: 'center',
						textStyle: {
							fontSize: 25
						}
					},
					legend: {
						bottom: 0
					},
					tooltip: {},
					xAxis: {
						type: 'category',
						data: this.data.Xdata
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: this.data.Ydata,
						type: 'line'
					}]
				};

				// 3.渲染
				mychart.setOption(option)
			}
		}
	}
</script>

<style scoped>
	#newsChart {
		margin-top: 15px;
	}
</style>
