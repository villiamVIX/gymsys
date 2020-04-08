<template>
	<transition name="fade-transform">
		<el-form v-show="show" ref="form" :model="lessonInfo" label-width="120px" :rules="rule">
			<el-form-item label="开课时间" prop='time'>
				<h3>{{lessonInfo.time}}</h3>
			</el-form-item>
			<el-form-item label="课程名" prop='lessonNane'>
				<el-select v-model="lessonInfo.lessonName" placeholder="课程名">
					<el-option v-for="item in optionsData.lessonName" :key="item.value" :label="item.value" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="教师" prop='price'>
				<el-select v-model="lessonInfo.teacher" placeholder="教师">
					<el-option v-for="item in optionsData.teacher" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="类型" prop='type'>
				<el-input v-model="lessonInfo.type" />
			</el-form-item>
			<el-form-item label="时长/mins" prop='during'>
				<el-radio-group v-model="lessonInfo.during">
					<el-radio label="45"></el-radio>
					<el-radio label="30"></el-radio>
					<el-radio label="60"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="课程备注" prop='desc'>
				<el-input v-model="lessonInfo.desc" type="textarea" />
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="clickCreate">修改</el-button>
				<el-button @click="onCancel">取消</el-button>
			</el-form-item>

		</el-form>

	</transition>
</template>

<script>
	import {
		checkLoginMixin
	} from 'common/mixin.js'
	import {
		mapState
	} from 'vuex'
	export default {
		mixins: [checkLoginMixin],
		mounted() {
			this.show = true
		},
		data() {
			return {
				optionsData: {
					teacher: [{
							value: '余宗泽',
						}, {
							value: '丁维康',
						}, {
							value: '张秦',
						},
						{
							value: '张志彬',
						},
						{
							value: '黑人',
						},
						{
							value: '张潇',
						},
						{
							value: 'Kevin',
						},
						{
							value: '陈艳琳',
						},
						{
							value: '-停课-',
						},
					],
					lessonName: [
						{
							value: '拳击'
						},
						{
							value: '尊巴'
						},
						{
							value: '普拉提'
						},
						{
							value: '印度舞'
						},
						{
							value: '动感单车'
						},
						{
							value: '腹肌终结者'
						},
						{
							value: '肚皮舞'
						},
						{
							value: '高温瑜伽'
						},
						{
							value: '-停课-'
						},
					]
				},
				value: '',
				show: false,
				files: [],
			}
		},
		methods: {
			clickCreate() {
				console.log(this.lessonInfo)
				this.$store.dispatch('lesson/updateLesson', this.lessonInfo).then(res=>{
					this.$store.dispatch('reqLesson')
				})
			},
			onCancel() {
				this.$router.go(-1)
			},
		},
		computed: {
			...mapState({
				lessonInfo: state => state.lesson.lessonInfo
			})
		}
	}
</script>

<style scoped>
	.line {
		text-align: center;
	}
</style>
