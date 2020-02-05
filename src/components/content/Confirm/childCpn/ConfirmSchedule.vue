<template>
	<div id="ConfirmSchedule">
		<div class="Appointment">
			<div v-for="(i,indexW) in week" :key="indexW" class="week-box" :class="'wb'+indexW"  @click="showSegment(i,indexW)">
				<div class="week-show" :class="currentShow==indexW? 'week-hover':''">周{{i}}</div>

				<div v-for="(s,indexS) in Segment" :key='indexS' @click="clickDay(s,indexW,indexS)"  class="noDisplay"  :class="indexW== currentShow? 'SegmentShow':''">
					<div class="Segment-item" :id="'s'+indexW+indexS">{{s}}
					<br/>可预约</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ConfirmSchedule',
		created() {
			let currentDate = new Date()
			let day = currentDate.getDate() //开局先获取当前日期/周几
			let days = currentDate.getDay()
			this.currentDay = day
			this.currentWeek = days
			this.LoadCalendar()
		},
		updated() {
			this.filterBooked()
		},
		data() {
			return {
				week: [],
				Segment: [],
				currentDay: '',
				currentWeek: '',
				currentShow: null,
				BookInfo:{
					Sid:'',
					username:'',
					_id:''
				}
			}
		},
		methods: {
			filterBooked(){
				let k=this.booked
				let kL=k.length
				for(let i=0;i<kL;i++){
					console.log(k[i])
					let segmentDom=document.getElementById(k[i])
					// 将原有/HOver样式取消
					segmentDom.style.backgroundColor= "gray";
					segmentDom.style.textDecoration='line-through';
					segmentDom.onmouseover=cancelHover
					function cancelHover(){
						segmentDom.style.color='black'
					}
				}
			},
			showSegment(i,indexW) {
				this.currentShow = indexW
				// console.log(i)
			},
			clickDay(s,inw,ins) {
				let username=localStorage.getItem('nickname')
				this.BookInfo.username=username	
				this.BookInfo.Sid='s'+inw.toString()+ins.toString() //把占位ID存起来
				
				console.log(this.BookInfo)
				this.$emit('bookCoach',this.BookInfo)
				console.log(inw,ins)
			},
			LoadCalendar() {
				for (let i =0; i < 7; i++) {
					if (i ==6) {
						this.week.push('日')
					} else {
						this.week.push(i+1)
					}
				}
				for (let u = 1; u < 6; u++) {
					const Sgm = ''
					switch (u) {
						case 1:
							Sgm = '8:00';
							break;
						case 2:
							Sgm = '10:00'
							break;
						case 3:
							Sgm = '14:00'
							break;
						case 4:
							Sgm = '16:00'
							break;
						case 5:
							Sgm = '19:30'
							break;
					}
					this.Segment.push(Sgm)
					// console.log("日" + this.Segment)
				}
			}
		},
		props:{
			booked:{
				type:Array,
				default(){
					return []
				}
			}
		},
		
	}
</script>

<style scoped>
	#ConfirmSchedule {
		padding: 10px 10px;
	}

	.Appointment {
		display: flex;
	}

	.week-box {
		flex: 1;
	}
	.week-show{
		color: #969796;
		font-size: 19px;
		text-align: center;
		padding-top: 9px;

	}
	.week-hover{
		color: white;
		border-radius: 90px;
		height: 43px;
		width:  45px;
		/* text-align: center; */
		padding-top: 9px;
		background-color: #323332;
	}

	.noDisplay {
		display: none;
		position: relative;
		margin-top: 8px;
	}

	.Segment-item {
		position: absolute;
		padding: 8px 5px;
		color: #323332;
		border: 1px solid #7bec75a1;
		background-color: #e0f5de69;
		height: 55px;
		width: 60px;
		border-radius: 7px;
	}
	.Segment-item:hover{
		color: #00B7FF;
		font-weight: bold;
	}
	
	.SegmentShow {
		display: block;
		height: 55px;

	}
</style>
