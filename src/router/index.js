import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const News = () => import('views/news/News.vue')
const NewsList =()=> import('views/news/NewsList.vue')
const NewsPublish =()=> import('views/news/NewsPublish.vue')
// const testPull = () => import('views/news/test.vue')

const LoginShade =()=> import('components/common/ShadeLogin/Shade.vue')

const Train = () => import('views/train/Train.vue')
const Lesson = () => import('views/train/Cpn/lesson/Lesson.vue')
const Coach = () => import('views/train/Cpn/coach/Coach.vue')
const Confirm = () => import('views/train/Cpn/confirm/Confirm.vue')



const LoginState = () => import('views/profile/LoginState.vue')
const Login = () => import('views/profile/Login.vue')
const MyClass = () => import('views/profile/Cpn/myClass/MyClass.vue')




const Entrance = () => import('views/entrance/Entrance.vue')

const Admin = () => import('views/admin/Admin.vue')
const AdminNews = () => import('views/admin/newsAdmin/NewsAdmin.vue')

const AdminEntrance = () => import('views/admin/entranceAdmin/EntranceAdmin.vue')
const AdminUser = () => import('views/admin/userAdmin/UserAdmin.vue')

const AdminCoach = () => import('views/admin/coachAdmin/CoachAdmin.vue')
const CoachCreate = () => import('views/admin/coachAdmin/CoachCreate.vue')

const AdminSwiper = () => import('views/admin/swiperAdmin/SwiperAdmin.vue')
const AdminLesson = () => import('views/admin/lessonAdmin/LessonAdmin.vue')


const Analysis = () => import('views/admin/analysis/Analysis.vue')

Vue.use(VueRouter)

const routes = [{
	name:'home',
		path: '',
		redirect: '/home'
	},
	{
		name:'home',
		path: '/home',
		component: Home
	},
	{
		name:'news',
		path:'/newslist',
		component:NewsList,
	},
	// {
	// 	name:'ss1',
	// 	path:'/testpull',
	// 	component:testPull,
	// },
	{
		path:"/publish",
		component:NewsPublish
	},
	{
		path:"/login/shade",
		component:LoginShade
	},
	{
		name:'news',
		path: '/news/:newsId',
		component: News
	},
	{
		name:'confirm',
		path:'/confirm/:coachId',
		component:Confirm,
	},
	{	
		path: '/train',
		component: Train,
		children: [
			{
				name:'lesson',
				path: 'lesson',
				component: Lesson
			},
			{
				name:'coach',
				path: 'coach',
				component: Coach
			},
		]
	},
	{
		name:'profile',
		path: '/profile',
		redirect: '/profile/login',
		component: LoginState,
		children:[
			{
				name:'myClass',
				path: 'class',
				component: MyClass
			},
			{
				name:'loginProfile',
				path: 'login',
				component: Login
			},
		]
	},
	{
		name:'profileAdmin',
		path: '/admin',
		component: Admin,
		children:[
			{
				name:'Analysis',
				path: 'analysis',
				meta:{title:'流量监控'},
				component: Analysis,
				children:[
					{
						name:'analysisNews',
						path: 'news',
						meta:{title:'新闻流量监控'},
						component: AdminNews,
					},
					{
						name:'adminEntrance',
						path: 'entrance',
						meta:{title:'教练管理'},
						component: AdminEntrance,
					},
				]
			},
			{
				name:'coachAdd',
				path: 'addcoach',
				meta:{title:'新增教练'},
				component: CoachCreate,
			},
			
			{
				name:'adminUser',
				path: 'user',
				meta:{title:'人员管理'},
				component: AdminUser,
			},
			{
				name:'coachUser',
				path: 'coach',
				meta:{title:'教练管理'},
				component: AdminCoach,
			},
			{
				name:'adminSwiper',
				path: 'swiper',
				meta:{title:'轮播图'},
				component: AdminSwiper,
			},
			{
				name:'adminLesson',
				path: 'lesson',
				meta:{title:'排课区'},
				component: AdminLesson,
			},
			
		]
	},
	{
		name:'entrance',
		path: '/entrance',
		component: Entrance
	}
]

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes
})

export default router
