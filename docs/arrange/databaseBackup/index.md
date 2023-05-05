---
title: 数据库备份
---
任何数据库都需要备份，备份数据是维护数据库必不可少的操作。  
备份就是为了防止原数据丢失，保证数据的安全。当数据库因为某些原因造成部分或者全部数据丢失后，备份文件可以帮我们找回丢失的数据。因此，数据备份是很重要的工作。

## 编写脚本文件
新建一个工作目录
```shell
cd /opt
mkdir copyDB
# 创建脚本文件并进入编辑
touch copy.sh
vi copy.sh
```
写入脚本

```shell
#!/bin/sh
### BEGIN INIT INFO
# Provides: starter
# Required-Start: $remote_fs $syslog
# Required-Stop: $remote_fs $syslog
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: start starter
# Description: start starter
### END INIT INFO

#数据库用户名
DB_USER="XXXXXX"
#数据库密码
DB_PASS="XXXXXX"
#数据库地址
DB_HOST="xxx.xxx.xxx.xxx"
#要备份的数据库名
DB_NAME="fangshi_db"
#日期
DATE=`date +%F`
#文件保存的路径
DIR='/opt/copyDB/DB'

mysqldump --opt -u$DB_USER -p$DB_PASS -h$DB_HOST $DB_NAME > $DIR/DB_$DATE.sql

```

如果报错：mysqldump: not found则需要安装mysqldump
```shell
apt install mysql-client-core-8.0
```

修改脚本权限
```shell
chmod 777 copy.sh
```

创建备份文件夹
```shell
mkdir DB
```

测试脚本
```shell
./copy.sh
```
查看是否有报错；查看DB文件夹内是否有新文件产生；打开DB文件夹内的文件，查看是否有内容。

## 创建定时任务
cron是一个Linux定时执行工具，可以在无需人工干预的情况下运行作业。在Ubuntu中，cron是被默认安装并启动的。
```shell
#编辑ect下crontab文件
vi /etc/crontab
#写入定时任务
00 08   * * *   root    /opt/copyDB/copy.sh
```
crontab定时任务语法
```shell
minute   hour   day   month   week  user  command    
# 即：分 时 日 月 周 用户 命令
# minute： 表示分钟，可以是从 0 到 59 之间的任何整数。
# hour：表示小时，可以是从 0 到 23 之间的任何整数。
# day：表示日期，可以是从 1 到 31 之间的任何整数。
# month：表示月份，可以是从 1 到 12 之间的任何整数。
# week：表示星期几，可以是从 0 到 7 之间的任何整数，这里的 0 或 7 代表星期日。
# user：linux的用户身份，例如root，或者其他用户
# command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。

# 星号（*）：代表所有可能的值，例如 month 字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。
# 逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”
# 中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”
# 正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，\
# 例如*/10，如果用在 minute 字段，表示每十分钟执行一次。
 ```
crontab操作命令
```shell
#启动服务
service cron start
#关闭服务
service cron stop
#重启服务
service cron restart
#重新载入配置
service cron reload
#查看crond状态
service cron status
```
