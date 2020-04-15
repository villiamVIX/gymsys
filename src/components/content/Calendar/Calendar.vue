<template>
	<div class="calendar-box">
		<div class="cal-bgc" :style="{background: 'url(' + BgUrl + ') -5px -1rem / 105% no-repeat',}">
			<div class="cal-header">
				<span class="cal-title1">{{timeTitle}}</span>
				<span class="cal-title2">{{nowYear}}年 &nbsp;打卡日历</span>
				<div class="cal-btn">
					<div class="cal-left left" @click="changeMonth(--nowMonth)">
						<img src="~assets/img/common/go_left.png" />
					</div>
					<span class="cal-today" @click="toToday()">今日</span>
					<div class="cal-right right" @click="changeMonth(++nowMonth)" ref='calRight'>
						<img src="~assets/img/common/go_right.png" />
					</div>
				</div>
			</div>
			<div class="calendar">
				<div class="cal-table">
					<div class="cal-week">
						<span class="week" v-for="(i,index) in weeks" :key="'week'+index">周{{i}}</span>
					</div>
					<div class="cal-day">
						<div class="day" v-for="dayId in 42" :key="'day'+dayId">
							<span v-if="dayId<=beginDay" :data-str="getStr(1,nowMonth-1,lastMaxDay-(beginDay-dayId))" class="gray">{{lastMaxDay+(dayId-beginDay)}}</span>

							<span v-else-if="dayId>beginDay&&(dayId-beginDay)<=nowMaxDays" class="green" :data-str="getStr(2,nowMonth, dayId - beginDay)"
							 @click="clickActive" :id="dayId-beginDay" :class="[(getStr(2,nowMonth, dayId - beginDay)==todayStr&&'today'),(dayId-beginDay==activeDay&&'active')]">
								{{dayId-beginDay}}</span>

							<span v-else class="gray" :data-str="getStr(3,nowMonth, dayId-beginDay-nowMaxDays)">{{dayId-beginDay-nowMaxDays}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const {
		log
	} = console; //==>直接简化console。log

	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				nowYear: null,
				nowMonth: null,
				nowDay: null,
				nowWeek: null,
				weeks: ["日", "一", "二", "三", "四", "五", "六"], //周数据
				todayStr: new Date().toLocaleDateString(),
				timeTitle: null,
				activeDay: null,
				passDay: [] ,//打卡日
				imgBaseUrl:this.GLOBAL.imgBaseUrl,
				BgUrl:''
			}
		},
		created() {
			this.init(this.todayStr) //當下的時間传入
			this.BgUrl=`${this.imgBaseUrl}/bg5.jpg`
		},
		mounted() {
			this.activeDay = this.nowDay //目前点击时间==今日
			log(this.todayStr)
			this.passDay = this.User.calendar //把用户的打卡信息存起来
			log(this.passDay)
			this.todaySfather()
		},
		computed: {
			...mapState(['User']),
			beginDay() {
				// 起始时间的星期                       nowMonth==电脑month+1  所以-1才算这个月
				let beginDay = new Date(this.nowYear, this.nowMonth - 1, 1).getDay()
				return beginDay
			},
			nowMaxDays() {
				// 本月最大天数              因为是电脑月份+1 所以是下个月的第0天 也就是下个月的第一天-1<==>这个月的最后一天
				let nowMaxDays = new Date(this.nowYear, this.nowMonth, 0).getDate()
				return nowMaxDays
			},
			lastMaxDay() {
				// 上月最后一天日期
				let lastMaxDay = new Date(this.nowYear, this.nowMonth - 1, 0).getDate()
				return lastMaxDay
			}
		},
		watch: {
			nowMonth(newVal, oldVal) {
				if (this.User.Calendar != []) {
					// console.log('这个月->'+newVal+'旧月'+oldVal)
					let d = this.passDay
					let Pyear = []
					let Pmonth = []
					let Pday = []
					for (let i = 0; i < d.length; i++) {
						let e = d[i].split('-')
						Pyear.push(e[0])
						Pmonth.push(e[1])
						Pday.push(e[2])
					}
					let pp = document.getElementsByClassName('day')

					for (let o = 0; o < pp.length; o++) {
						pp[o].style.backgroundColor = '#F1F4F8'
					}
					for (let g = 0; g < Pyear.length; g++) {
						let aa = document.getElementById(Pday[g])
						aa.style.color = 'black'
					}
					setTimeout(() => {

						for (let g = 0; g < Pyear.length; g++) {
							if (Pyear[g] == this.nowYear && Pmonth[g] == oldVal) {
								log('当月打卡日期' + Pday[g])
								let atd2 = document.getElementById(Pday[g])
								atd2.parentNode.style.background = '#F1F4F8'
								atd2.style.color = 'black'

							}
						}
						for (let w = 0; w < Pyear.length; w++) {
							if (Pyear[w] == this.nowYear && Pmonth[w] == newVal) {
								// log('当月打卡日期' + Pday[w])
								let atd = document.getElementById(Pday[w])
								atd.style.background = '#008e5f'
								atd.parentNode.style.background = '#008e5f'
								atd.style.color = 'white'
							}
						}
						log('当月' + newVal)

					}, 100);
				}
			}
		},
		methods: {
			todaySfather(){
				// 今日的爹框加背景色
				let todayFather=document.getElementsByClassName('today')
				console.log()
				todayFather[0].parentElement.style.backgroundColor='#008e5f'
			},
			init(str) {
				this.timeTitle = this.formatDate(str)
			},
			toToday() {
				this.init(new Date())
			},
			formatDate(specified = null) {
				// 格式时间
				let date = specified ? new Date(specified) : new Date() //若有用有，若无用当前
				let year, month, day, week = undefined
				year = (this.nowYear = date.getFullYear())
				month = (this.nowMonth = date.getMonth() + 1)
				day = (this.nowDay = add0(date.getDate()))
				week = (this.nowWeek = this.weeks[date.getDay()]) //星期索引已对应了全局data的数组
				let a = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
				let b = a[this.nowMonth - 1]
				return b + '月'
				// 给各位数加0X
				function add0(n) {
					return (n = n < 10 ? "0" + n : n);
				}
			},
			changeMonth(m) {
				let today = new Date(this.todayStr)
				let a = today.getFullYear()
				let b = today.getMonth() + 1
				if (a == this.nowYear && m >= b) {
					this.$refs.calRight.style.background = 'gray'
					this.init(`${a}/${b}/${this.activeDay}`)
					for (let o = 1; o < 28; o++) {
						document.getElementById(o).style.background = '#F1F4F8'
					}
					return this.$toast('未来继续加油！')
				} else {
					// 做极值判断 若大于12 年++月=1 ；若小于1 年-- 月=12
					if (m < 1) { //去年
						this.nowMonth = 12
						this.nowYear--
					}
					if (m > 12) { // 下一年
						this.nowMonth = 1
						this.nowYear++
					}
					if (m > this.nowMonth) {
						console.log(12)
					}
					this.$refs.calRight.style.background = 'white'
					log()
					for (let o = 1; o < 28; o++) {
						document.getElementById(o).style.background = '#F1F4F8'

					}
					// log(def)
					return this.init(`${this.nowYear--}/${this.nowMonth}/${this.activeDay}`)
				}

			},
			getStr(type, month, day) { //获取唯一标识的 格式过后的日期  用年/月/日==年/月/日来检查是否是今日
				let year = this.nowYear
				let result = ''
				if (month < 1 && type == 1) { //月--后变去年 并且是span1的状态
					--year;
					month = 12
				}
				if (month > 12 && type == 3) {
					++year
					month = 1
				}
				result = `${year}/${month}/${day}`
				// this.init(result) 不可直接init
				return result
			},
			clickActive(e) {
				this.activeDay = e.target.dataset.str.match(/\d+$/g) //抓到几号就好了 切换的时候也可切到
				log(this.activeDay)
			},
		}
	}
</script>

<style scoped>
	.calendar-box {
		height: 20rem;
	}

	.cal-bgc {
		/* background: #00B176; */
		/* background: url(~assets/img/profile/bg5.jpg) left no-repeat  ; */
		background-size: 110%;
		padding: 4.8rem 1rem;
		height: 8.8rem;
	}

	.cal-header {
		display: block;
		line-height: 22px;
		/* font-size: 20px; */
		margin: 0 0 8px 0;
		font-weight: bold;
		color: #FEFFFF;
	}

	.cal-title1 {
		font-size: 22px;
	}

	.cal-title2 {
		color: #B2FFDD;
	}

	.cal-btn {
		float: right;
	}

	.cal-left,
	.cal-right {
		flex: 1;
		border-radius: 45px;
		width: 20px;
		height: 20px;
		background-color: white;
		padding: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cal-today {
		height: 12px;
		flex: 1;
		border: 1px solid olivedrab;
		font-size: 13px;
		padding: 2px;
		border-radius: 5px;
	}

	.cal-left img,
	.cal-right img {
		width: 20%;
		flex: 1;
	}

	.calendar {
		background-color: white;
		width: 100%;
		padding: 16px 14px;
		border-radius: 5px;
		height: 15.5rem;
		color: black;
	}

	.cal-week {
		color: #A3ABBD;
		padding: 0px 9px 5px 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.week {
		flex: 1;
		width: 100%;
		text-align: center;
	}

	.cal-day {
		display: grid;
		grid-template-columns: repeat(7, 14.3%);
		grid-template-rows: repeat(6, 4.5vh);
		/* grid-template-rows:   18.2% 14.3% 14.3% 14.3% 14.3% 14.3% 14.2% ; */
		font-size: 0.812rem;
		height: 3.75rem;
		margin: 0.5rem 0 0 0.812rem;
		line-height: 0.906rem;

	}

	.day {
		display: flex;
		justify-content: center;
		border-radius: 5rem;
		width: 1.687rem;
		height: 1.68rem;
		background-color: #F1F4F8;
	}

	.day span {
		padding-top: 0.406rem;
		border-radius: 5rem;
	}

	.active {
		text-align: center;
		border: 0.05rem solid #00B176;
		border-radius: 5rem;
		width: 1.687rem;
		padding: 0.187rem;
	}

	.today {
		background-color: #008e5f;
	}

	.gray {
		color: #bebebe;
	}
</style>
