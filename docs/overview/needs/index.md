---
title: 需要准备的
---
## 服务器
一台有外网ip的服务器。你可以选择去[阿里云](https://www.aliyun.com/product/ecs?spm=5176.28055625.J_3207526240.147.e939154a0sNj4E&scm=20140722.M_4691652._.V_1)或其他云服务商租赁一台服务器。或者搭建自己的服务器，使用内网穿透工具将内网ip映射到外网。
## 域名
购买一个域名。获取ssl证书支持https。然后解析两个二级域名，一个用于服务端访问，一个用于后台管理系统访问。
## 微信小程序id
在[微信公众平台](https://mp.weixin.qq.com/)注册2个微信小程序id（已经通过微信认证），用于房东小程序和租客小程序。需要进行企业认证，也就是说你要有公司资质才可以。
## 高德地图Key
在[高德地图开放平台](https://lbs.amap.com/api/wx/summary)注册账户，创建应用，创建key。需要配置到租客端小程序，用于租客端小程序租房市场定位查询功能。
## uni-app的appid
uni-app比较随意，直接注册账户即可获取。
![uni-app-id](/uni-app-id.png)
## 阿里云短信服务（非必须）
购买[阿里云短信服务](https://www.aliyun.com/product/sms?spm=5176.28055625.J_3207526240.80.e939154ahCLHmB)，注册短信SignName，注册需要的短信模板，获取阿里云accessKey，用于验证码发送、交租提醒、维修提醒、入住提醒等功能。详情参见[服务端配置](/develop/options/)。  
如果你不配置这些，将不会发送短信，也不会影响到业务。
## 开发工具
[vscode](https://code.visualstudio.com/)、[微信开发者工具](https://open.weixin.qq.com/)、[HbuilderX](https://www.dcloud.io/hbuilderx.html)