<template>
<div id="ConfirmSchedule">
	<div class="Appointment">
		<div v-for="(i,indexW) in dateList" :key="indexW" class="week-box" :class="{'passday':i.limit}" @click="!i.limit?showSegment(i,indexW):''">
			<div class="week-show" :class="currentShow==indexW? 'week-hover':''">周{{i.week}}{{i.date}}</div>

			<div v-for="(s,indexS) in Segment" :key='indexS' @click="clickDay(s,indexW,indexS,i,$event)" class="noDisplay" :id="i.configDate+s"
			 :class="indexW== currentShow? 'SegmentShow':''">
				<div class="Segment-item" :id="'s'+indexW+indexS" :class="indexS==currentIndexS?'Segment-hover':''" >
				{{s}}:00
				<br/>
				<span :class="indexS==currentIndexS?'book-hover':''"
				class="book-status">可约</span> </div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {
	dateFormat
} from 'tools/date/format.js' //日期格式化工具
import {
	mapState
} from 'vuex'
export default {
	name: 'ConfirmSchedule',
	created() {
		this.LoadCalendar()
	},
	mounted() {
		let tod = dateFormat(new Date(), 'YYYY-MM-DD')
		this.getThisWeek(tod);
	},
	watch: {
		'$store.state.coachDetail': function() {
			this.filterBooked()
		}
	},
	data() {
		return {
			dateList: [
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
				coachId:undefined,
				userId:undefined
			},
			currentIndexS:undefined
		}
	},
	methods: {
		filterBooked() {
			let k = this.booked
			let kL = k.length
			for (let i = 0; i < kL; i++) {
				let segmentDom = document.getElementById(k[i])
				
				let segmentStatusDom = segmentDom.childNodes[2]
				segmentStatusDom.innerText='已预约'
				segmentStatusDom.style.color='#999999'
				segmentDom.classList.add('booked')
				segmentDom.style.backgroundColor='#F5F5F5'
				
				function cancelHover() {
					segmentDom.style.border = 'black'
					segmentDom.style.color = '#999999'
				}
			}
		},
		showSegment(i, indexW) {
			this.currentShow = indexW
		},
		clickDay(s, inw, ins, week,event) {
			console.log()
			let flag=event.toElement.innerText.indexOf('已预约')>-1  //已预约 取消所有事件
			if(!flag){
				this.currentIndexS=ins

				this.BookInfo.Sid = 's' + inw.toString() + ins.toString() //把占位ID存起来
				this.BookInfo.date = week.configDate + '-' + s
				this.BookInfo.userId=this.User._id
				this.BookInfo.coachId=this.$route.params.coachId
				this.BookInfo.userName=this.User.username
				
				this.$emit('bookCoach', this.BookInfo)
			}
			else return false
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

			}
		},
		// 获取当前星期的星期一的日期，返回的是一个Date对象。
		getMonDate(dd) { //config为日期 例如：2016-04-19
			let d = new Date(dd);
			let day = d.getDay(); //3
			let date = d.getDate(); //12
		
			if (day == 1) {
				return d;
			}
			if (day == 0) {
				 d.setDate(date - 6);
				 return d
			} else {
				d.setDate(date - day + 1);
				return d;
			}
		},
		getThisWeek(confg) {
			let d = this.getMonDate(confg); //周一的日期
			let wkd = new Date(confg).getDay();
			this.currentShow = wkd == 0 ? 6 : wkd - 1
			for (var i = 0; i < 7; i++) {
				if (i < wkd - 1 || wkd==0) {
					this.dateList[i].limit = true
				}
				
				this.dateList[i].date = d.getDate();
				this.dateList[i].configDate = dateFormat(new Date(d), 'YYYY-MM-DD');
				d.setDate(d.getDate() + 1);
			}
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
	computed: {
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

	.passday {
		background-color: #F9F9F9;
		border-radius: 0.9375rem;
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
		border: 1.8px solid #F5F5F5;
		/* background-color: #e0f5de69; */
		height: 55px;
		width: 60px;
		font-weight: bold;
		text-align: center;
		border-radius: 7px;
	}

	.Segment-hover {
		color: #F2BD4C;
		font-weight: bold;
		border: 1.8px solid #F2BD4C;
	}

	.SegmentShow {
		display: block;
		height: 55px;
	}
	.booked{
		background-color: #F5F5F5 !important;
		color: #999999 !important;
	}
	.book-status{
		color: #89BF6C;
	}
	.book-hover{
		color: #F2BD4C;
	}
</style>
