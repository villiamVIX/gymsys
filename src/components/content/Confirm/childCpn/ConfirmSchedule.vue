<template>
<div id="ConfirmSchedule">
	<div class="Appointment">
		<div v-for="(i,indexW) in dateList" :key="indexW"  class="week-box" :class="{'passday':i.limit}" @click="!i.limit?showSegment(i,indexW):''">
			<div class="week-show" :class="currentShow==indexW? 'week-hover':''">周{{i.week}}{{i.date}}</div>

			<div v-for="(s,indexS) in Segment" :key='indexS' @click="clickDay(s,indexW,indexS,i)"
			 class="noDisplay" :id="i.configDate+s" :class="[indexW== currentShow? 'SegmentShow':'',]"
			 >
				<div class="Segment-item" :id="'s'+indexW+indexS">{{s}}:00
					<br />可预约</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import {dateFormat} from 'tools/date/format.js'  //日期格式化工具
	import {mapState} from 'vuex'
 	export default {
		name: 'ConfirmSchedule',
		created() {
			this.LoadCalendar()
		},
		mounted(){
			let tod = dateFormat(new Date(), 'YYYY-MM-DD')
			// console.log(tod)
			this.getThisWeek(tod);
		},
		updated() {
			this.filterBooked()
		},
		data() {
			return {
				dateList :[
				  {week:'一',date:'',configDate:'',limit:false},
				  {week:'二',date:'',configDate:'',limit:false},
				  {week:'三',date:'',configDate:'',limit:false},
				  {week:'四',date:'',configDate:'',limit:false},
				  {week:'五',date:'',configDate:'',limit:false},
				  {week:'六',date:'',configDate:'',limit:false},
				  {week:'日',date:'',configDate:'',limit:false}
				],
				Segment: [],
				currentShow: null,
				BookInfo: {
					Sid: '',
					username: '',
					_id: ''
				}
			}
		},
		methods: {
			filterBooked() {
				let k = this.booked
				let kL = k.length
				for (let i = 0; i < kL; i++) {
					// console.log(k[i])
					let segmentDom = document.getElementById(k[i])
					// 将原有/HOver样式取消
					segmentDom.style.backgroundColor = "gray";
					segmentDom.style.textDecoration = 'line-through';
					segmentDom.onmouseover = cancelHover
					segmentDom.disabled=true
					function cancelHover() {
						segmentDom.style.color = 'black'
					}
				}
				
			},
			showSegment(i, indexW) {
				this.currentShow = indexW
				// console.log(i)
			},
			clickDay(s, inw, ins,week) {
				let username = this.User.username
				this.BookInfo.username = username
				this.BookInfo.Sid = 's' + inw.toString() + ins.toString() //把占位ID存起来
				this.BookInfo.date=week.configDate+'-'+s
				console.log(this.BookInfo)
				this.$emit('bookCoach', this.BookInfo)
				// console.log(inw, ins)
			},
			LoadCalendar() {
				for (let u = 1; u < 6; u++) {
					const Sgm = ''
					switch (u) {
						case 1:
							Sgm = '8';
							break;
						case 2:
							Sgm = '10'
							break;
						case 3:
							Sgm = '14'
							break;
						case 4:
							Sgm = '16'
							break;
						case 5:
							Sgm = '19'
							break;
					}
					this.Segment.push(Sgm)
					// console.log("日" + this.Segment)
				}
			},
			// 获取当前星期的星期一的日期，返回的是一个Date对象。
			getMonDate(dd){    //config为日期 例如：2016-04-19
			    let d=new Date(dd);
			    let day=d.getDay(); //3
			    let date=d.getDate();  //12
			    if(day==1)
			    {return d;}
			    if(day==0)
			    {d.setDate(date-6);}
			    else
			   { d.setDate(date-day+1);
			    return d;}
			},
			getThisWeek(confg){
			    let d=this.getMonDate(confg); //周一的日期
			    let wkd=new Date(confg).getDay();
			    this.currentShow=wkd==0?6:wkd-1
			    for(var i=0;i<7;i++){
					if(i<wkd-1 ){
						this.dateList[i].limit=true
					}
			        this.dateList[i].date = d.getDate();
			        this.dateList[i].configDate=dateFormat(new Date(d), 'YYYY-MM-DD');
			        d.setDate(d.getDate()+1);
			   }
			   console.log(this.dateList)
			   
			}
		},
		props: {
			booked: {
				type: Array,
				default () {
					return []
				}
			}
		},
		computed:{
			...mapState(['User'])
		}
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
	.passday{
		background-color: #6f6f6f70;

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
		/* background-color: #e0f5de69; */
		height: 55px;
		width: 60px;
		border-radius: 7px;
	}

	.Segment-item:hover {
		color: #00B7FF;
		font-weight: bold;
	}

	.SegmentShow {
		display: block;
		height: 55px;

	}
</style>
