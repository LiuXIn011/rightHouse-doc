---
title: 配置
---
## 服务端配置
#### 打开/RH-server/config/config.default.js文件
必须的配置：房东端小程序配置、租客端小程序配置、oss配置、数据库配置、redis配置、jwt配置一个自定义字符串即可。  
可选的配置：短信服务配置及阿里云短信通知配置。
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