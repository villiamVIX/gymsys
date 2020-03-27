<template>
	<el-card class="box-card">
	<div id="EntranceAdmin" v-loading="loading">
		<div id="main" style="margin: 0 auto;height: 23rem;"></div>
		  <el-select v-model="value"
		   placeholder="日期" :xs="1" :sm="2" :md="8" :lg="9">
		    <el-option 
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
	</div>
	</el-card>
</template>

<script>
	import {getChartData} from  'common/mixin.js'
	export default{
		mixins:[getChartData],
		data() {
			return {
				data: [],
				actionFun:'reqAdminEntranceChart'
			}
		},
		methods:{
			mapData(){
				let data=this.$store.state.Admin.EntranceChart
				console.log(data)
				var analysisData = []
				var dataBox=[]
				// 分别取出 键--值
				
				let Xdata=Object.keys(data).reverse()  //一起倒序 
				let Ydata=Object.values(data).reverse()
				for(let i=0;i<Xdata.length;i++){
					dataBox=[]
					dataBox.push(Xdata[i],Ydata[i])
					analysisData.push(dataBox)
				}
				this.data=analysisData
				console.log(this.data)
			},
			getChart(){
				//1.初始化E实例 找好dom
				var mychart = echarts.init(document.getElementById('main'))
				
				// 2.换汤不换药的option
				var option = {
					title:{
						text:'健身房进场流量监控',
						subtext:'健身房管理系统',
						left:'center',
						textStyle:{
							fontSize:25
						}
					},
					xAxis: {
					        type: 'category',
					        boundaryGap: false
					    },
					    yAxis: {
					        type: 'value',
							 splitNumber :5,
					        boundaryGap: [0, '30%']
					    },
					    visualMap: {
					        type: 'piecewise',
					        show: false,
					        dimension: 0,
					        seriesIndex: 0,
					        pieces: [{
					            gt: 1,
					            lt: 3,
					            color: 'rgba(0, 180, 0, 0.5)'
					        }, {
					            gt: 5,
					            lt: 7,
					            color: 'red'
					        }]
					    },
					    series: [
					        {
					            type: 'line',
					            smooth: 0.5,
					            symbol: 'none',
					            lineStyle: {
					                color: 'green',
					                width: 3
					            },
					            markLine: {
					                symbol: ['none', 'none'],
					                label: {show: false},
					                data: [
					                    {xAxis: 1},
					                    {xAxis: 2},
					                    {xAxis: 4},
					                    {xAxis: 6}
					                ]
					            },
					            areaStyle: {},
					            data:this.data
					        }
					    ]
				};
				
				// 3.渲染
				mychart.setOption(option)
			}
		}
	}
	
	
	
</script>

<style scoped>
	#newsChart{
		margin-top: 15px;
	}
</style>
