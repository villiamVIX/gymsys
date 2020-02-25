import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const News = () => import('views/news/News.vue')
const Train = () => import('views/train/Train.vue')
const Lesson = () => import('views/train/Cpn/lesson/Lesson.vue')
const Coach = () => import('views/train/Cpn/coach/Coach.vue')
const Login = () => import('views/profile/Login.vue')
const Entrance = () => import('views/entrance/Entrance.vue')
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
		path: '/news/:newsId',
		component: News
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
		component: Login
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
