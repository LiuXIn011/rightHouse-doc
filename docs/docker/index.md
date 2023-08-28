---
title: Docker简介
---
![docker](/docker.png)  
Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。
Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。
容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。
Docker 从 17.03 版本之后分为 CE（Community Edition: 社区版） 和 EE（Enterprise Edition: 企业版），我们用社区版就可以了。
## Dcoker安装（Ubuntu@root）
``` shell
curl -fsSL https://test.docker.com -o test-docker.sh
sh test-docker.sh
```
## Dcoker Compose安装（Ubuntu@root）
下载安装包
```shell
curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
设置权限
```shell
chmod +x /usr/local/bin/docker-compose
```
设置软链
```shell
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```
测试是否安装成功
```shell
docker-compose version
```

