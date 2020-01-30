module.exports={
	// 指定这个子路径
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/", 
	configureWebpack:{
		resolve:{
			alias:{
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views'
			}
		}
	}
}
