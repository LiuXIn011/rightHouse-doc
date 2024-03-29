---
title: 文件目录
---
## 服务端
根目录：/RH-server

```bash
/RH-server
├── package.json
├── app
│   ├── controller
│   ├── model
│   ├── service
│   ├── middleware
│   ├── routerModules
│   ├── public
|   ├── router.js
├── config
|   ├── plugin.js
|   ├── config.default.js
└── test
```

为了规范目录，所有的路由分模块存放在routerModules文件夹内

## 后台管理系统
根目录：/RH-admin
```bash
/RH-admin
├─api
├─assets
│  ├─img
│  │  └─login
│  └─lottiefiles
├─components
│  ├─chart
│  └─headForm
├─layout
│  └─components
├─router
├─stores
├─utils
└─views
    ├─comments
    ├─home
    ├─house
    ├─landlord
    ├─login
    ├─not-found
    ├─settings
    └─tenants
```

## 租客端小程序
根目录：/RH-tenant  
使用分包加载，具体目录参见pages.json

## 房东端小程序
根目录：/RH-landlord  
使用分包加载，具体目录参见pages.json
