<template>
	<div class="Charge-father">
		<h2>会员充值</h2>
		<div class="Charge-Time">
			<div class="Charge-Box" v-for="(item,index) in chargeData" :key='item.Duration' @click="clickBox(item,index)"
			 :class="currentBox==index?'active-Box':''">
				<div class="discount" :class="currentBox==index?'active-discount':''">{{(item.nowPrice/item.oldPrice) |cutDisount}}折</div>
				<strong class="duration">{{item.Duration}}<span class="duration-label">月</span></strong>
				<span class="perPrice">{{item.nowPrice/(item.Duration*30) |cutPrice}}元/天</span>
				<div class="nowPrice">
					<h3>¥{{item.nowPrice}}</h3>
				</div>
			</div>
	
		</div>
		<div class="change-info-father">
			<div class="change-info" v-if="currentPrice.oldPrice">
				<p>
					· 原价{{currentPrice.oldPrice}}的会员卡现在只需{{currentPrice.nowPrice}}
				</p>
				<p>
					· 优惠截至到本月30日
				</p>
				<p>
					· 购卡就送MYPROTEIN™健身水壶!
				</p>
				<p>
					· 会员卡:  重复购卡时长叠加，保留最高等级!
				</p>
				<p v-if="currentPrice.nowPrice>1000">
					· 凡消费1000元以上赠送志彬教练科目三指导课程
				</p>
			</div>
		</div>
		<van-button class='submit' @click='buy' type="primary" size='large'>立即购买</van-button>
	</div>
</template>

<script>
	import {recharge} from 'network/NetLogin.js'
	export default{
		data() {
			return {
				chargeData: [{
						nowPrice: 1380,
						Duration: 12,
						oldPrice: 2388
					},
					{
						nowPrice: 780,
						Duration: 6,
						oldPrice: 1200
					},
					{
						nowPrice: 388,
						Duration: 1,
						oldPrice: 688
					}
				],
				User: this.$store.state.User,
				baseUrl: this.GLOBAL.baseUrl,
				currentPrice: {},
				currentBox: 0
			}
		},
		methods: {
			clickBox(item, index) {
				this.currentBox = index
				this.currentPrice = item
			},
			ReqRecharge(){
				recharge(this.currentPrice.Duration).then(res=>{
					vant.Toast('购买成功')
					this.$store.dispatch('rewriteUserInfo',res)
				})
			},
			buy() {
				this.$dialog.confirm({
					title: '会员卡',
					message: '确认购买该时长？'
				}).then(() => {
					this.ReqRecharge().then()
				}).catch(() => {
					// on cancel
				});
			}
		},
		filters: {
			cutPrice(price) {
		
				return price.toFixed(2)
			},
			cutDisount(discount) {
				return Math.floor(discount * 10)
			}
		}
	}
</script>

<style scoped>
	.Charge-father {
		--borderRadius: .42rem;
		--hoverBorder: #82a4ff;
		--Border: #e8e8e8;
		--countColor: #bfbfc0;
	}

	.Charge-Time {
		margin-top: 1.1rem;
		display: flex;
		justify-content: space-around;
	}

	.Charge-Box {
		border-radius: var(--borderRadius);
		border: 1px solid var(--Border);
		width: 5.2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.active-Box {
		border: 1px solid var(--hoverBorder);
	}

	.discount {
		position: absolute;
		top: -0.625rem;
		border-radius: .68rem;
		background-color: var(--Border);
		color: var(--countColor);
		width: 2.8rem;
		text-align: center;
		line-height: 1rem;
	}

	.active-discount {
		color: white;
		background-color: #5986ff;
	}

	.duration {
		font-size: 1.8rem;
		margin-top: 1rem;

	}

	.duration-label {
		font-size: .899rem;
	}

	.perPrice {
		color: #bcbcbc;

	}

	.nowPrice {
		background-color: #eef3ff;
		width: 100%;
		text-align: center;
		line-height: 1.33rem;
		border-bottom-left-radius: var(--borderRadius);
		border-bottom-right-radius: var(--borderRadius);
		color: #5a87ff;
	}

	.change-info-father {
		height: 6rem;
		margin: 1rem 0;
	}

	.change-info {
		margin: 1.12rem 0;
		color: var(--countColor);
	}

	.submit {
		height: 2.4rem;
		text-align: center;
		line-height: 1.2rem;
	}
</style>