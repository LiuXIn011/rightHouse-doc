---
title: 部署
---
## 服务器操作系统
[Ubuntu](https://cn.ubuntu.com/)是一个以桌面应用为主的Linux操作系统，其名称来自非洲南部祖鲁语或豪萨语的“ubuntu"一词，意思是“人性”“我的存在是因为大家的存在"，是非洲传统的一种价值观。Ubuntu基于Debian发行版和Gnome桌面环境，而从11.04版起，Ubuntu发行版放弃了Gnome桌面环境，改为Unity。从前人们认为Linux难以安装、难以使用，在Ubuntu出现后这些都成为了历史。Ubuntu也拥有庞大的社区力量，用户可以方便地从社区获得帮助。自Ubuntu 18.04 LTS起，Ubuntu发行版又重新开始使用GNOME3桌面环境。
![ubuntu](/ubuntu-logo.jpeg)

## 为什么不是centos
在企业级服务器操作系统市场，centos毫无疑问是占据更大的市场份额，centos它的源码是来自由商业服务器Red Hat Enterprise Linux。有很多公司都是用centos来代替商业版的Red Hat Linux，同时它的稳定性也是值得信赖的。而Ubuntu的开发目的是为了使个人电脑变得简单易用，虽然也提供相应的企业服务器，不过专业的还是centos。 

笔者喜欢Ubuntu主要来自于[树莓派](https://baike.baidu.com/item/%E6%A0%91%E8%8E%93%E6%B4%BE/80427?fr=aladdin)。由于树莓派的处理器是arm架构，所以不是所有操作系统都可以在树莓派上的运行，centos在X86架构处理上一骑绝尘，可是arm架构领域确实实力单薄。因此笔者与Ubuntu结缘，Ubuntu的desktop版本和server版本都对arm架构有着很好的支持。  

当然你也可以选择centos。两个操作系统都是基于Linux，本质上没有太大的区别，主要影响我们使用的就是软件安装方式，Ubuntu使用apt来安装、更新、删除和管理deb软件包，centos则使用yum来对RPM格式的软件包进行管理。如果你选择centos，我相信你也擅长于在centos安装MySQL、minion、redis、nginx等软件，实际效果是一样的。