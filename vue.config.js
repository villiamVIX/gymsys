module.exports={
	
	// assetsDir: "static",
	// 指定这个子路径
	// publicPath: '',
	configureWebpack:{
		resolve:{
			alias:{
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views',
				'tools':'@/tools',
				
			}
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
