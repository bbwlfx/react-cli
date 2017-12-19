# React-cli
帮你自动生成基于webpack和react技术栈文件结构的工具
## 安装使用
`git clone https://github.com/bbwlfx/react-cli.git`

## 技术栈
以下是项目中使用的技术栈:
1. 使用pm2进程管理工具启动和监控app(node >= 8.0.0)
2. 使用ES6语法
3. 使用sass样式
4. 使用KOA框架
5. 使用jade/pug模板
6. 使用webpack打包前端资源
## 文件结构
* react-cli/
  * public/
    * image/
    * scss/
    * js/
      * components/
      * containers/
      * lib/
      * routes/
      * pages/
  * src/
    * routes/
    * controllers/
    * app.js
  * template/
  * node_modules/
  * webpack.config.js

## 如何启动Demo
1. `npm install`
2. `npm run start`
3. `npm run startfe`
4. 登陆端口8088查看Demo `localhost:8088`

## 协议
遵守MIT协议