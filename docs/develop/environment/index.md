---
title: 开发环境
---
## 操作系统
支持 macOS，Linux，Windows，以下教程软件安装以Windows操作系统为例，其他操作系统可google获取。
## 可能有更好的方案
如果你像我一样不想在Windows系统中安装开发环境，占用宝贵的内存，运行不必要的进程。你可以尝试了解一下[VMware虚拟机](https://baike.baidu.com/item/VMware/5461553?fr=aladdin)，直接在Windows中同时运行一个虚拟Ubuntu系统，参考[部署=>服务器环境](/arrange/environment/)模块安装MySQL、redis、minio，然后通过内网访问。但是本地的node-js还是必须要安装的。
## node-js环境
安装对应操作系统的[nodejs](https://nodejs.org/en)，npm版本需要大于6.1.0。下载好后一路next就好。
## 数据库
数据库使用mysql，安装时需要留意密码。  
[数据库下载](https://dev.mysql.com/downloads/mysql/)  
[推荐一个博主的安装教程](https://blog.csdn.net/Zhangguohao666/article/details/105314085)  


mysql安装完成后新建一个数据库，数据库名为right_house_db。
![新建数据库](/mysql.png)  
在服务端代码FS-server/app/router.js,打开注释掉的app.model.sync();方法，即可自动创建数据表。添加参数{ force: true }，即可重置数据库（数据会重置，表会清空。）。
```javascript
module.exports = async app => {
  if (app.config.env === 'local') {
    // 初始化数据库 { force: true }重置
    app.model.sync();
  }
};
```
## 数据库表结构
|  表名   | 备注  | 
|  ----  | ----  |
| admin_user  | 后台管理系统管理员表 |
| comments  | 评论表 |
| house  | 房屋表 |
| house_link_tenant  | 房屋与租客的关联表 |
| house_maintenance  | 房屋报修表 |
| landlord_link_tenant  | 房东与租客的关联表 |
| landlord_user  | 房东表 |
| lease_application  | 租房申请表 |
| rental_market  | 租房市场表 |
| rental_market_link_tenant  | 租客收藏租房市场表 |
| tenants_user  | 租客表 |

具体字段名和表关联关系详见：[/RH-server/app/model](https://gitee.com/liuxin0128/right-house/tree/master/RH-server/app/model)

## 缓存
缓存使用redis，安装时需要留意密码。  
[下载地址](https://github.com/tporadowski/redis/)  
[推荐一个博主的安装教程](https://www.redis.com.cn/redis-installation.html)  
## 对象存储
对象存储使用minio，也可自行购买阿里云等服务商的oss服务器。

```shell
PS> Invoke-WebRequest -Uri "https://dl.minio.org.cn/server/minio/release/windows-amd64/minio.exe" -OutFile "C:\minio.exe"
PS> setx MINIO_ROOT_USER admin
PS> setx MINIO_ROOT_PASSWORD password
PS> C:\minio.exe server F:\Data --console-address ":9001"
```

#### 安装完成后，需要新建一个文件存储容器，名称为：filebucket
## 推荐的vscode开发插件
[Redis](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-redis-client)插件可以在vscode内管理数据库和redis
![plugins](/plugins.png)

