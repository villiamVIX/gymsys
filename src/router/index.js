import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const News = () => import('views/news/News.vue')
const Train = () => import('views/train/Train.vue')
const Lesson = () => import('views/train/Cpn/lesson/Lesson.vue')
const Coach = () => import('views/train/Cpn/coach/Coach.vue')
const Login = () => import('views/profile/login/Login.vue')
Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/news/:newsId',
		component: News
	},
	{
		path: '/train',
		component: Train,
		children: [{
				path: '/train',
				redirect: '/train/coach'
			},
			{
				path: '/train/lesson',
				component: Lesson
			},
			{
				path: '/train/coach',
				component: Coach
			},
			{
				path: '/train/bodydata',
				component: Coach
			},
		]
	},
	{
		path: '/profile/login',
		component: Login
	}
]

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes
})

export default router
