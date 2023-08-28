---
title: 配置
---
## 服务端配置
#### 打开/RH-server/config/config.default.js文件
必须的配置

|配置项|字段|默认值|备注|
|--|--|--|--|
|房东端小程序appid|landlordMP.appid||小程序需要通过微信企业认证|
|房东端小程序secret|landlordMP.secret||小程序需要通过微信企业认证|
|租客端小程序secret|tenantsMP.appid||小程序需要通过微信企业认证|
|租客端小程序secret|tenantsMP.secret||小程序需要通过微信企业认证|
|OSS地址|minio.endPoint|localhost||
|OSS端口|minio.port|9000||
|OSS accessKey|minio.accessKey|right_house_minio|同样用于登录oss后台|
|OSS secretKey|minio.secretKey|right_house_minio_980128|同样用于登录oss后台|
|OSS存储桶名称|minio.bucketName|filebucket||
|Mysql地址|config.sequelize.host|localhost||
|Mysql端口|config.sequelize.port|3306||
|Mysql数据库名称|config.sequelize.database|right_house_db||
|Mysql账户|config.sequelize.username|root||
|Mysql密码|config.sequelize.password|right_house_sql_980128||
|Redis端口|config.redis.client.port|6379||
|Redis地址|config.redis.client.host|localhost||
|Redis密码|config.redis.client.password|right_house_redis_980128||
|阿里云短信服务Key|config.sms.client.accessKeyId|accessKeyId|如果没有阿里云短信服务，可以填写任意字符，不可不填，不填会报错|
|阿里云短信服务secret|config.sms.client.secretAccessKey|secretAccessKey|如果没有阿里云短信服务，可以填写任意字符，不可不填，不填会报错|

可选的配置
|配置项|字段|默认值|备注|
|--|--|--|--|
|房间报修阿里云短信通知|houseMaintenanceMessage|||
|房间维修完毕阿里云短信通知|houseSolveMaintenanceMessage|||
|房间入住阿里云短信通知|houseJoinTenantMessage|||
|房间退租给租客的阿里云短信通知|houseOutTenantMessage|||
|房间退租给房东的阿里云短信通知|houseOutLandlordMessage|||
|租客申请租赁的阿里云短信通知|tenantLeaseApplicationMessage|||
|房东通过租赁的阿里云短信通知|passLeaseApplicationMessage|||
|房东驳回租客租赁的阿里云短信通知|nopassLeaseApplicationMessage|||

## 后台管理系统配置
#### 打开.env文件
VITE_BASE_URL是接口访问地址配置，即服务端的访问地址。
## 租客小程序配置
#### 打开config.js文件
baseUrl 是接口访问地址配置，即服务端的访问地址。需要使用https域名，且配置在微信公众平台的白名单内  
mapKey 是高德地图key配置。
#### 打开manifest.json文件 
uniapp的appid配置   微信小程序appid配置
## 房东小程序配置
#### 打开config.js文件
baseUrl 是接口访问地址配置，即服务端的访问地址。需要使用https域名，且配置在微信公众平台的白名单内
#### 打开manifest.json文件 
uniapp的appid配置   微信小程序appid配置