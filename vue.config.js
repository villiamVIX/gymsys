// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

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
			vue: 'Vue',
			vant: 'vant',
			'element-ui': 'ELEMENT',
			'better-scroll': "BScroll",
			'echarts': 'echarts', // 配置使用CDN
			'axios':'axios',
			'vuex':'Vuex',
			'vue-router': 'VueRouter',
			"fastclick":'FastClick'
		},
		plugins: [
			new CompressionWebpackPlugin({
				filename: '[path].gz[query]',
				algorithm: 'gzip',
				test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
				threshold: 10240,
				minRatio: 0.8
			})
		]
	},
	productionSourceMap: false,
	
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
