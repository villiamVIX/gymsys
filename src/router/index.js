import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const News = () => import('views/news/News.vue')
const NewsList =()=> import('views/news/NewsList.vue')
const NewsPublish =()=> import('views/news/NewsPublish.vue')
const testPull =()=> import('views/news/testPull.vue')

const LoginShade =()=> import('components/common/ShadeLogin/Shade.vue')

const Train = () => import('views/train/Train.vue')
const Lesson = () => import('views/train/Cpn/lesson/Lesson.vue')
const Coach = () => import('views/train/Cpn/coach/Coach.vue')
const Confirm = () => import('views/train/Cpn/confirm/Confirm.vue')

const Login = () => import('views/profile/Login.vue')
const Entrance = () => import('views/entrance/Entrance.vue')

const Admin = () => import('views/admin/Admin.vue')
const AdminNews = () => import('views/admin/newsAdmin/NewsAdmin.vue')

const AdminEntrance = () => import('views/admin/entranceAdmin/EntranceAdmin.vue')
const AdminUser = () => import('views/admin/userAdmin/UserAdmin.vue')

const AdminCoach = () => import('views/admin/coachAdmin/CoachAdmin.vue')
const CoachCreate = () => import('views/admin/coachAdmin/CoachCreate.vue')

const AdminSwiper = () => import('views/admin/swiperAdmin/SwiperAdmin.vue')

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
		name:'pull',
		path: '/pull',
		component: testPull
	},
	{
		name:'confirm',
		path:'/confirm/:coachId',
		component:Confirm,
	},
	{	
		path: '/train',
		component: Train,
		children: [{
			    name:'train',
				path: '/train',
				redirect: '/train/coach'
			},
			{
				name:'train',
				path: '/train/lesson',
				component: Lesson
			},
			{
				name:'train',
				path: '/train/coach',
				component: Coach
			},
			{
				name:'train',
				path: '/train/bodydata',
				component: Coach
			},
		]
	},
	{
		name:'profile',
		path: '/profile/login',
		component: Login,
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
