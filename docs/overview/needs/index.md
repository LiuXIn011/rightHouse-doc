---
title: 需要准备的
---
## 服务器
一台有外网ip的服务器。你可以选择去[阿里云](https://www.aliyun.com/product/ecs?spm=5176.28055625.J_3207526240.147.e939154a0sNj4E&scm=20140722.M_4691652._.V_1)或其他云服务商租赁一台服务器，阿里云也有很多免费的服务器资源。或者搭建自己的服务器，使用内网穿透工具将内网ip映射到外网（这个方案ICP备案是个很头疼的问题）。
## 域名
购买一个域名。首先进行ICP备案（备案审核需要几天时间，需要提前准备），然后解析两个二级域名，一个用于服务端访问，一个用于后台管理系统访问。[阿里云](https://wanwang.aliyun.com/?spm=5176.8789780.J_3207526240.185.f0bb45b5uGEgSx)可以免费注册.top、.love域名。
## ssl证书
获取ssl证书支持https。[阿里云](https://www.aliyun.com/product/cas?spm=5176.8789780.J_3207526240.252.f0bb45b5uGEgSx)提供免费的ssl证书，如果配合阿里云的服务器，可以自动部署。其他服务商的云产品可能需要自己手动部署。
## 微信小程序appid和secret
在[微信公众平台](https://mp.weixin.qq.com/)注册2个微信小程序id（已经通过微信认证），用于房东小程序和租客小程序。需要进行企业认证，也就是说你要有公司资质才可以。
## 高德地图Key
在[高德地图开放平台](https://lbs.amap.com/api/wx/summary)注册账户，创建应用，创建key。需要配置到租客端小程序，用于租客端小程序租房市场定位查询功能。
## uni-app的appid
uni-app比较随意，直接注册账户即可获取。
![uni-app-id](/uni-app-id.png)
## 阿里云短信服务（非必须）
购买[阿里云短信服务](https://www.aliyun.com/product/sms?spm=5176.28055625.J_3207526240.80.e939154ahCLHmB)，注册短信SignName，注册需要的短信模板，获取阿里云accessKey，用于验证码发送、交租提醒、维修提醒、入住提醒等功能。详情参见[服务端配置](/develop/options/)。  
如果你不配置这些，将不会发送短信，也不会影响到业务。  
  
  
如果你不想使用阿里云短信服务，需要关闭插件。
```javascript
// 在/RH-server/config/plugin.js找到sms

exports.sms = {
  enable: true,
  package: 'egg-sms'
};

// 将sms配置注释掉
// exports.sms = {
//   enable: true,
//   package: 'egg-sms'
// };
```

## 开发工具
[vscode](https://code.visualstudio.com/)、[微信开发者工具](https://open.weixin.qq.com/)、[HbuilderX](https://www.dcloud.io/hbuilderx.html)

## 最低配置
如果你只是为了将项目运行起来,可以不需要~~服务器、域名、ssl证书、短信服务~~，只需要将服务在本地运行，免费注册一个高德地图Key，免费获取两个uni-app的appid，得到一个任意小程序的appid和secret，将租客和房东端小程序配置成一样的appid和secret。就可以将项目运行起来。