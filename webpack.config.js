//  使用commonjs语法
// 向外暴露一个配置对象
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

/* 
返回指定目录的绝对路径
*/
function resolve(dir) {
    return path.resolve(__dirname, dir)
  }
module.exports = {

    //模式
    // mode:'development',
   //入口
   entry:'./src/index.js',
   
   //出口
   output:{
    path:path.resolve('dist'),
    filename:'bundle.js'
   },
   //模块打包器
   module:{
     rules:[//配置lodaer
        //vue的lodaer
        {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
        //处理es6 ==> es5
        {
            test: /\.js$/,  // 处理js文件
            // exclude: /(node_modules|bower_components)/, // 排除匹配的文件夹
            include: [resolve('src')], // 只对匹配的文件夹处理
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'], // 配置预设包(包含了多个ES语法解析的plugin包)
                plugins: [ // 配置预设包之外的插件包
    
                ]
              }
            }
          },

          //处理css
        {
            test: /\.css$/,
            // css-loader: 将css转移到js中
            // style-loader: 将js中css转移到html的<style>
            // vue-style-loader是对style-loader的增强
            use: ['vue-style-loader', 'css-loader']  // loader处理从下向上, 从右向左
          },

         //处理图片
         {
            test: /\.png|jpe?g|gif|svg$/,
            // loader: 'file-loader', // 不会进行小图片的base64处理
            // url-loader内部会使用file-loader
            loader: 'url-loader', // 会进行小图片的base64处理  
            options: {
                limit: 10 * 1024,  // 小于10k的图片就进行base64处理
                name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
              }
         }, 

     ]
   },
   //插件
   plugins:[
       new HtmlWebpackPlugin({
           template:'index.html'
       }),
       new CleanWebpackPlugin(), // 清除打包文件夹dist
       new VueLoaderPlugin()
   ],

     // 开发服务器
  devServer: {
    // port: 8081, // 端口号
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出
    //配代理 解决跨域问题
    proxy: { // http:/localhost:8081/api/xxx
      // '/api': 'http://localhost:4000'     // http:/localhost:4000/api/xxx
      '/api': { // 匹配处理以/api开头的请求
        target: 'http://localhost:4000',  // 转发的目标地址
        pathRewrite: {'^/api' : ''}, // 在转发请求前去除路径中的/api   // http:/localhost:4000/xxx
        changeOrigin: true, // 支持协议名的跨域
      },
      //如果需要继续加就可以了
      // '/3000': { // 匹配处理以/3000开头的请求
      //   target: 'http://localhost:3000',  // 转发的目标地址
      //   pathRewrite: {'^/3000' : ''}, // 在转发请求前去除路径中的/3000
      //   changeOrigin: true, // 支持协议名的跨域
      // },
    }
  },
  
  //解析 模块
  resolve:{
    //简化了路径,提高了打包速度
    alias:{//设置一个路径别名
      '@': resolve('src'),  
      '@comps': resolve('src/components'),

    },
    extensions: ['.js', '.vue'],//能够使用户在引入模块时不带扩展：就是后缀可以省略
  }
}