---
title: 服务端
---
## 概述
服务端使用[Egg](https://www.eggjs.org/)构建，Egg 继承于 [Koa](https://github.com/koajs/koa)；Egg规范了nodejs开发，使用MVC开发模式，奉行『约定优于配置』，团队协作成本低。使得nodejs代码结构不再千奇百怪。  

[Egg社区](https://github.com/search?q=topic%3Aegg-plugin&type=Repositories) 还算完备，一些常用的插件都包含在内。由于继承了Koa的原因，在社区插件方面也完美继承，不过在插件使用方面，Egg的效率要高于Koa。  

以下介绍部分核心组件的使用方式，其他常用egg插件较为简单，不一一介绍。

## 数据库
使用[egg-sequelize](https://github.com/eggjs/egg-sequelize)管理Mysql数据库  
[Sequelize](https://sequelize.org/)是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能。  
egg-sequelize是对Sequelize的二次继承，约定egg插件风格来使用sequelize。由于版本迭代的问题，egg-sequelize的使用和原版存在一定的差异，例如在自动生成model的功能上，两个插件有截然不同的结果，而且是各有所缺。所以在此建议：不要使用自动生成model的方法，采用手工编写model，然后自动生成数据表的方式。  
在手工编写好model后，在服务端代码FS-server/app/router.js,打开注释掉的app.model.sync();方法，即可自动创建数据表。
```javascript
module.exports = async app => {
  if (app.config.env === 'local') {
    // 初始化数据库 { force: true }重置
    app.model.sync();
  }
};
  
```
## 对象存储OSS
使用[MinlO](https://www.minio.org.cn/)来管理文件存储。MinlO是一个基于Apache License v2.0开源协议的对象存储服务。它兼容亚马逊S3云存储服务接口，非常适合于存储大容量非结构化的数据。例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等,而一个对象文件可以是任意大小,从几kb到最大5T不等。MinlO是一个非常轻量的服务 可以很简单的和其他应用的结合。  
MinlO部署比较简单，当然你也可以购买商业的云服务OSS来使用，但是作者崇尚自己动手丰衣足食（穷）。MinlO具体部署如下（以Ubuntu为例，其他Linux服务器同理）  

## 缓存redis
[redis](https://redis.io/)是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。  
egg使用redis可以使用[egg-redis](https://github.com/eggjs/egg-redis)  
将小程序开放平台的token和用户体系生成的token保存在redis中是一个很好的选择，
