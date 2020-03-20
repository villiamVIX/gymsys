import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Global_ from './network/Global' //全局变量
//引入字体图标 ICON svg
import 'assets/icon/style.css'
import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.prototype.GLOBAL = Global_ //挂载到Vue实例上面

FastClick.attach(document.body);


import {
	Lazyload,
	Image,
	Swipe,
	SwipeItem,
	Grid,
	GridItem,
	Cell,
	Button,
	Toast,
	Popup,
	Uploader,
	Field,
	ActionSheet,
	Divider,
	SwipeCell,
	Pagination,
	Skeleton 
} from 'vant';

Vue.use(Cell).use(Button).use(Image).use(Lazyload).use(Swipe)
	.use(SwipeItem).use(Grid).use(GridItem).use(Popup).use(Uploader).use(Field)
	.use(ActionSheet).use(Divider).use(SwipeCell).use(Pagination)
	.use(Skeleton).use(Toast);

import { Menu,MenuItem ,Submenu,Select,Option} from 'element-ui';


Vue.use(MenuItem).use(Submenu).use(Select).use(Option).use(Menu)
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
/* 或写为
 // * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
