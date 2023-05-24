---
layout: home

title: 房适
titleTemplate: 一个开源的房屋租赁管理系统


hero:
  name: 房适
  text: 一个开源的房屋租赁管理系统
  tagline: 完全基于JavaScrict的应用程序
  image:
    src: /logo.png
  actions:
    - theme: brand
      text: 继续了解
      link: /overview/
    - theme: alt
      text: GitHub
      link: https://github.com/LiuXIn011/rightHouse
    - theme: alt
      text: Gitee
      link: https://gitee.com/liuxin0128/right-house

features:
  - icon: 💯
    title: 全部来自于JavaScrict
    details: 包含：基于node-js的服务端、基于vue的后台管理系统、基于uni-app的租客端和房东端。
  - icon: 📦
    title: 多端适配
    details: 客户端基于uni-app可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。
  - icon: 🏗
    title: 最新技术栈
    details: 前端采用最新vue生态，vue3+typescript+pinia+vite，服务端使用阿里node-js开发框架：egg.js。
  - icon: ⚙️
    title: 完全的前后端分离
    details: 后端是跟数据库跟服务器打交道的，前端是跟浏览器打交道的，各司其职。
---
<script setup>
import axios from 'axios'
  axios.get("http://8.130.92.178:7001/api/adminUser/getDocInfo")
</script>

<!-- <p align="center" style="margin-top:50px;">
  <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">
    <img width="300" src="/youpai.png"/>
  </a>
</p> -->