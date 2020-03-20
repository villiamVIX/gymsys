<template>
	<div id="comfirmPro">
		<h2>新课表</h2>
		<div class="week-box">
			<div class="dateList" v-for="(item,index) in weekList" :key='index'>
				<span class="date">
					{{item|formatDate}}
				</span>
				<span class="week">
					{{item|formatWeek}}
				</span>
			</div>
		</div>
		<div class="time-box">
			<div  class="timeList" v-for="(item,index) in 5">
				<div>时段{{item}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			// this.getNextDay(7)
		},
		data() {
			return {
				weekList: this.getNextDay(7),
			}
		},
		filters: {
			formatDate(date) {
				return date.toLocaleDateString().split('/')[2]
			},
			formatWeek(date) {
				let week = ['天', '一', '二', '三', '四', '五', '六']
				return week[date.getDay()] 
			}
		},
		methods: {
			getNextDay(day) {
				let nextDay = day
				let date = new Date()
				let nowYear = date.getFullYear()
				let nowMonth = date.getMonth() + 1
				let nowDay = date.getDate()

				let NextDayDate = [] //存往期的空间
				let tomorrow = undefined //存昨天的空间
				for (let i = 0; i < nextDay; i++) {
					tomorrow = new Date(nowYear, nowMonth - 1, nowDay + i)
					NextDayDate.push(tomorrow) //插入日期属性
					// console.log(NextDayDate)
				}
			
				return NextDayDate
			}
		}
	}
</script>

<style scoped>
	#comfirmPro{
		display: flex;
		flex-direction: column;
	}
	.dateList{
		/* display: flex; */
		float: left;
	}
	.date{
		flex: 1;
	}
</style>
