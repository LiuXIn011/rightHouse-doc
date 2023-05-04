---
title: 打包部署
---
部署前请确保已经完整阅读过[配置](/develop/options/)模块，并且已经将相关配置更改到生产环境地址。
## 服务端部署
框架内置了 egg-cluster 来启动 Master 进程，Master 有足够的稳定性，不再需要使用 pm2 等进程守护模块。  
同时，框架也提供了 egg-scripts 来支持线上环境的运行和停止。  
首先，我们需要把 egg-scripts 模块作为 dependencies 引入：  

```shell
npm i egg-scripts --save
```
添加 npm scripts 到 package.json：

```json
{
  "scripts": {
    "start": "egg-scripts start --daemon",
    "stop": "egg-scripts stop"
  }
}
```
这样我们就可以通过 npm start 和 npm stop 命令启动或停止应用。
根据/fs-server/config.default.js的配置
```javascript
config.cluster = {
  listen: {
    port: 7001
  }
};
```
我的后台服务的端口为7001，你可以为7001端口通过nginx进行代理，将域名隐射到对应端口。
## 服务端性能监控
推荐使用[阿里云nodejs性能监控平台](https://www.aliyun.com/product/nodejs)  
Node.js 性能平台 是面向所有 Node.js 应用提供 性能监控、安全提醒、故障排查、性能优化 等服务的整体性解决方案，提供完善的工具链和服务，协助开发者快速发现和定位线上问题。  
安装依赖
```shell
npm i egg-alinode --save
```
开启插件：
```javascript
// config/plugin.js
exports.alinode = {
  enable: true,
  package: 'egg-alinode',
};
```
配置：
```javascript
// config/config.default.js
exports.alinode = {
  // 从 `Node.js 性能平台` 获取对应的接入参数
  appid: '<YOUR_APPID>',
  secret: '<YOUR_SECRET>',
};
```

## 部署后台管理系统
打包项目，得到dist文件夹
```shell
npm run build
```
将dist上传至服务器路径下，路径你可以自定义，本次我们放在/opt/fs-admin目录下。  
修改服务器配置,通过端口9527访问。

```shell
#编辑/etc/nginx/sites-available/default
vi /etc/nginx/sites-available/default
```
新建一个server，监听9527端口。try_files配置很重要，解决SPA应用刷新就会404的问题。

```
server {
  listen 9527;
  root /opt/fs-admin;
  index index.html index.htm index.nginx-debian.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```
现在已经可以通过ip+端口的形式访问后台管理系统，将域名映射到这个端口，即可通过域名访问。
## 客户端打包
两个客户端小程序都是基于uniapp，且目前只发布到微信小程序，所以部署的方式是一样的。  
打开hbuilder，打包项目：
![img](/wx_build.png)

打包完成后，在微信开发者工具内上传到微信的服务器。
![img](/wx_ide_uplode.png)

在[微信公众平台](https://mp.weixin.qq.com/)=>版本管理内提审。
![img](/wx_admin.png)
微信限制http访问地址必须为https，且必须将域名白名单配置到微信公众平台。  
首次提审为了保证通过率，需要尽可能的完善提审表单，尽可能详细的截图，告知操作明细。

