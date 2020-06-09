import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Global_ from './network/Global' //全局变量
//引入字体图标 ICON svg
import 'assets/icon/style.css'
// import FastClick from 'fastclick'
import '@vant/touch-emulator'; //给桌面端加上mouse监听


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.prototype.GLOBAL = Global_ //挂载到Vue实例上面

// FastClick.prototype.focus = function(targetElement) {
			 // targetElement.focus();
	// };
// FastClick.attach(document.body);

Vue.use(vant.Lazyload);
Vue.use(vant.Notify);

// 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true
// });

// import {
// 	Lazyload,
// 	Image,
// 	Swipe,
// 	SwipeItem,
// 	Grid,
// 	GridItem,
// 	Cell,
// 	Toast,
// 	Popup,
// 	// Uploader,
// 	Field,
// 	ActionSheet,
// 	Divider,
// 	SwipeCell,
// 	Pagination,
// 	Notify,
// 	DatetimePicker,
// Sidebar,SidebarItem 
// } from 'vant';

// Vue.use(Cell).use(Image).use(Lazyload).use(Swipe)
// 	.use(SwipeItem).use(Grid).use(GridItem).use(Popup).use(Uploader).use(Field)
// 	.use(ActionSheet).use(Divider).use(SwipeCell).use(Pagination)
// 	.use(Toast).use(Notify).use(DatetimePicker).use(Sidebar).use(SidebarItem);

// import {
// 	Menu,
// 	MenuItem,
// 	Submenu,
// 	Select,
// 	Option,
// 	Main,
// 	Header,
// 	Container,
// 	Table,
// 	TableColumn,
// 	Button,
// 	Row,
// 	Col,
// 	Backtop,
// 	card,
// 	MenuItemGroup,
// 	RadioGroup,
// 	RadioButton,
// 	Dropdown,
// 	DropdownMenu,
// 	DropdownItem,
// 	Aside,
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	Input,
// 	Dialog,
// 	Form,
// 	FormItem,
// 	Checkbox,
// 	CheckboxButton,
// 	CheckboxGroup,
// 	Radio,
// 	Switch,
// 	Carousel,
// 	CarouselItem,
// 	Loading,
// 	MessageBox,
// 	Popconfirm,
// 	Tag
// 	// Popover
// } from 'element-ui';


// Vue.use(MenuItem).use(Submenu).use(Select).use(Option).use(MenuItemGroup)
// 	.use(Menu).use(Row).use(Col).use(Backtop).use(card).use(RadioGroup)
// 	.use(RadioButton).use(Dropdown).use(DropdownMenu).use(DropdownItem)
// 	.use(Aside).use(Breadcrumb).use(BreadcrumbItem).use(Input).use(Dialog)
// 	.use(Form).use(FormItem)
// 	.use(Checkbox).use(CheckboxButton).use(CheckboxGroup).use(Switch).use(Radio)
// 	.use(Carousel).use(CarouselItem).use(Popconfirm).use(Tag);

// Vue.component(Main.name, Main)
// Vue.component(Header.name, Header)
// Vue.component(Container.name, Container)
// Vue.component(Table.name, Table)
// Vue.component(TableColumn.name, TableColumn)

// Vue.use(Loading.directive);
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.component(Button.name, Button)

// import 'element-ui/lib/theme-chalk/base.css';
import 'assets/css/transition.css'
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

// Vue.component(CollapseTransition.name, CollapseTransition)


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
