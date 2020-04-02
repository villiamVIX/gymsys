module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'tools': '@/tools',

			}
		},
		externals: {
			  vue:'Vue',
			  vant:'vant',
			'element-ui': 'ELEMENT',
			'better-scroll':"BScroll",
			'echarts': 'echarts', // 配置使用CDN
		}
	},

	// devServer: {
	//     proxy: {
	//       // proxy all requests starting with /api to jsonplaceholder
	//       '/users': {
	//         target: 'http://192.168.1.104:3008',   //代理接口
	//         changeOrigin: true,
	//         pathRewrite: {
	//           '^/users': ''    //代理的路径
	//         }
	//       }
	//     }
	//   },

}
