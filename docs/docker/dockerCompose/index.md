---
title: Compose部署
---

Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。
## 前言
docker安装前需要完成项目配置，详情参阅[配置](/develop/options/)  
#### 容器全部为host网络模式，需要用到的端口有：8088、9000、9001、7001、3306、6379

## YML及相关文件目录
docker相关文件在/docker目录下
![compose](/compose.png)  
|文件/文件夹|作用|
|--|--|
|data|Mysql、Redis、Minio数据持久化文件夹，所有数据备份在此文件夹|
|init-sql|Mysql数据库初始化脚本|
|docker-compose.yml|compose核心文件|
|nginx.conf|后台管理系统页面nginx配置文件，修改端口或添加ssl证书，需要修改此文件|
|RH-admin-Dockerfile|后台管理系统镜像Dockerfile文件|
|RH-server-Dockerfile|服务端镜像Dockerfile文件|

## 需要使用的镜像
mysql:8.0.33  
redis:7.0.12  
minio/minio:RELEASE.2023-05-04T21-44-30Z  
node:16.17.1  
nginx:1.25.2  
可以提前docker pull拉取，也可以在启动的时候自动拉取
## 启动
```shell
# cd到：项目目录/docker
# 此处没有添加-d参数，先前台运行，方便查看日志和debug
docker-compose up
```
## 启动状态查验
docker-compose up后，命令行日志无报错，且看到如下日志  
[ master ] egg started on http://127.0.0.1:7001
![compose](/docker-compose-start.png)  
则表示已经启动完成

## 查看docker状态
```shell
docker images
```
将会看到创建的镜像：docker-right_house_admin、docker-right_house_server
```shell
docker ps
```
输出所有容器，其中name为：right-house-server、right-house-admin、right-house-redis、right-house-mysql、right-house-minio的5个容器正常启动，且状态为UP
![compose](/docker-ps.png)  
访问你的ip+端口8088，即可访问后台管理系统，默认用户名：admin，默认密码：admin，可以正常登录即为部署成功