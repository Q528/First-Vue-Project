import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'

Vue.use(Router)//Router：插件

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		}
	]
})
