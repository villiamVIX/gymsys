<template>
	<div id='newsChart'>
		<div id="main" style="margin: 0 auto;height: 20rem;"></div>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('reqAdminNewsChart',7).then(res=>{
				this.mapData()  //异步 mounted时候不一定拿的到服务器数据
			}).then(res2=>{
				this.getChart()
			})
		},
		data() {
			return {
				data: {
					Xdata:[],
					Ydata:[]
				}
			}
		},
		methods:{
			mapData(){
				let data=this.$store.state.Admin.NewsChart
				console.log(data)
				var analysisData = []
				// 分别取出 键--值
				this.data.Xdata=Object.keys(data).reverse()
				this.data.Ydata=Object.values(data)
				console.log(this.data.Ydata);
			},
			getChart(){
				//1.初始化E实例 找好dom
				var mychart = echarts.init(document.getElementById('main'))
				
				// 2.换汤不换药的option
				var option = {
					title:{
						text:'贴吧流量监控',
						subtext:'健身房管理系统',
						left:'center',
						textStyle:{
							fontSize:25
						}
					},
					legend:{
						bottom:0
					},
					tooltip:{},
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
	#newsChart{
		margin-top: 15px;
	}
</style>
