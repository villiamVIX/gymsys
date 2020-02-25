<template>
	<div id="LessonSchedule">
		<div class="Appointment">
			<div class="lesson-info">
				<div class="lesson-time">
					<div class="Lt1">18.-19.</div>
					<div class="Lt2">19.-20.</div>
				</div>
			</div>
			<div class="lesson-detail">
				<div v-for="(i,indexW) in week" :key="indexW" class="week-box" :class="'wb'+indexW" @click="showSegment(i,indexW)">
					<div class="week-show" :class="currentShow==indexW? 'week-hover':''">周{{i}}</div>

					<div v-for="(s,indexS) in Segment" :key='indexS' class="Segment-box">
						<div class="Segment-item" :id="'s'+indexW+indexS" @click="clickDay($event)">
							{{s}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'LessonSchedule',
		created() {
			let currentDate = new Date()
			let day = currentDate.getDate() //开局先获取当前日期/周几
			let days = currentDate.getDay()
			this.currentDay = day
			this.currentWeek = days
			this.LoadCalendar()
		},
		mounted() {
			this.$nextTick(() => {
				let timer = setTimeout(() => {
					//被迫等待DOM刷新
					if (timer) {
						clearTimeout(timer)
						this.filterLesson()
					}
				}, 200)
			})
		},
		methods: {
			filterLesson() {
				this.$nextTick(() => {
					let k = this.Lessons
					let kL = k.length

					for (let i = 0; i < kL; i++) {
						console.log('"' + k[i].Sid + '"')
						let Lname = k[i].lessonName
						let Tid = k[i].Tid
						let Lteacher = k[i].teachers[Tid].name
						console.log('Lteacher' + Lteacher)
						let segmentDom = document.getElementById(k[i].Sid)

						// 将原有/HOver样式取消
						segmentDom.style.backgroundColor = "#e0f5de69";
						segmentDom.innerText = Lname + '\n\n' + '教练：' + '\n' + Lteacher

						// segmentDom.innerText=Lteacher
						segmentDom.onmouseover = cancelHover

						function cancelHover() {
							segmentDom.style.color = '#029fdd'
						}
					}
				})

			},
			showSegment(i, indexW) {
				this.currentShow = indexW
				// console.log(i)
			},
			clickDay(e) {
				let Sid = e.currentTarget.id
				let t = this.Lessons
				let tL = t.length
				let TeacherId = ''

				for (let p = 0; p < tL; p++) {
					let Tid = t[p].Tid // 教师位次
					if (Sid == t[p].Sid) {
						TeacherId = t[p].teachers[Tid].id
						console.log(TeacherId)
					}
				}
				this.$emit('clickTeacher', TeacherId)
			},
			LoadCalendar() {
				for (let i = 0; i < 7; i++) {
					if (i == 6) {
						this.week.push('日')
					} else {
						this.week.push(i + 1)
					}
				}
				for (let u = 0; u < 2; u++) {
					const Sgm = '暂无课程'
					this.Segment.push(Sgm)
					// console.log("日" + this.Segment)
				}
			}
		},
		data() {
			return {
				week: [],
				Segment: [],
				currentDay: '',
				currentWeek: '',
				currentShow: null,
			}
		},
		computed:{
			...mapState(['Lessons'])
		}
	}
</script>

<style scoped>
	#LessonSchedule {
		padding: 10px 10px;
		font: 15px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
	}

	.Appointment {
		display: flex;

	}

	.lesson-info {
		/* text-wrap: ; */
		/* flex: 1; */
		margin: 32px 0px;
		padding: 8px 5px;
		height: 216px;
		width: 70px;
		color: #323332;
		border: 1px solid gray;
		background-color: white;
		border-top-right-radius: 20px;
		font-size: 18px/1.5
	}

	.lesson-time div {
		font-weight: border;
		font-size: 18px
	}

	.Lt1 {
		margin: 3px 0 95px 0;
	}

	.lesson-detail {
		flex: 1;
		display: flex;
		width: 80vw;
	}

	.week-box {
		flex: 1;

	}

	.week-show {
		color: #969796;
		font-size: 19px;
		text-align: center;
		padding-top: 9px;

	}

	.week-hover {
		color: white;
		border-radius: 90px;
		height: 43px;
		width: 45px;
		/* text-align: center; */
		padding-top: 9px;
		background-color: #323332;
	}

	.Segment-box {
		position: relative;
		margin: 5px 4px;
		width: 80px;

	}

	.Segment-box:nth-child(3) {
		margin-top: 120px;
	}

	.Segment-item {
		width: 80px;
		position: absolute;
		padding: 8px 5px;
		height: 100px;
		color: #323332;
		border: 1px solid gray;
		background-color: #767d7512;
		border-bottom-right-radius: 20px;
	}

	#nameSpan {
		color: #60CD5C;
		margin: 55px;
	}

	.Segment-item:hover {
		color: #00B7FF;
		font-weight: bold;
	}
</style>
