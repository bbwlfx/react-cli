[中文手册](./zh/README.md)
# React-cli
A simple tool to automate some base structure and config when using webpack and React in your project.

## Install
`$ npm i -g crc-cli`

## How to use
```
$ crc-cli [-n][name]



options:
  -n, --name    Name of the react-project-directory
```



## Used Tech
This is what new react application have:
1. pm2 to start and watch the app(node >= 8.0.0)
2. ES6 support via babel
3. sass support via sass-loader
4. less support via less-loader
5. use koa framework
6. use jade/pug template
7. use webpack to build resources

## Directory Structure
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
## Usage
1. `npm install`
2. `npm run start`
3. `npm run startfe`
4. visit your website `localhost:8088`

## License
MIT license.