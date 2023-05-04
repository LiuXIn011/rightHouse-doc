---
title: 开发环境
---
## 操作系统
支持 macOS，Linux，Windows，以下教程软件安装以Ubuntu操作系统为例，其他操作系统可google获取。
## node-js环境
安装对应操作系统的[nodejs](https://nodejs.org/en)，npm版本需要大于6.1.0。下载好后一路next就好。
## 数据库
数据库使用mysql，安装时需要留意密码。  
[数据库下载](https://dev.mysql.com/downloads/installer/)  
[推荐一个博主的安装教程](https://blog.csdn.net/Zhangguohao666/article/details/105314085)  
mysql安装完成后新建一个数据库，数据库名为fangshi_db。
![新建数据库](/mysql.png)  

## 缓存
缓存使用redis，安装时需要留意密码。  
[下载地址](https://github.com/tporadowski/redis/)
[推荐一个博主的安装教程](https://www.redis.com.cn/redis-installation.html)  
## 对象存储
对象存储使用minio，也可自行购买阿里云等服务商的oss服务器。
#### 安装完成后，需要新建一个文件存储容器，名称为：filebucket
## 推荐的vscode开发插件
[Redis](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-redis-client)插件可以在vscode内管理数据库和redis
![plugins](/plugins.png)