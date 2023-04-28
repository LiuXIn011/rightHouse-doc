---
title: 开发环境
---
## 操作系统
支持 macOS，Linux，Windows，以下教程软件安装以Ubuntu操作系统为例，其他操作系统可google获取。
## node-js环境
安装[nodejs](https://nodejs.org/en)，npm版本需要大于6.1.0。下载好后一路next就好。
## 数据库
数据库使用mysql，安装时需要留意密码。mysql安装完成后新建一个数据库，数据库名为fangshi_db。

``` shell
# 查看有没有安装MySQL：
dpkg -l | grep mysql
# 安装MySQL：
apt install mysql-server
#安装完成之后可以使用如下命令来检查是否安装成功：
netstat -tap | grep mysql
#通过上述命令检查之后，如果看到有 mysql 的socket处于 LISTEN 状态则表示安装成功。
#登录mysql数据库可以通过如下命令：
mysql -u root -p
#-u 表示选择登陆的用户名， -p 表示登陆的用户密码，现在是mysql数据库是没有密码的，Enter password:处直接回车，就能够进入mysql数据库。
#然后通过 show databases; 就可以查看当前的所有数据库。

```
#### 接下来，为了确保数据库的安全性和正常运转，对数据库进行初始化操作。这个初始化操作涉及下面5个步骤。  
（1）安装验证密码插件。  
（2）设置root管理员在数据库中的专有密码。  
（3）随后删除匿名账户，并使用root管理员从远程登录数据库，以确保数据库上运行的业务的安全性。  
（4）删除默认的测试数据库，取消测试数据库的一系列访问权限。  
（5）刷新授权列表，让初始化的设定立即生效。   
#### 初始化命令： 
``` shell
  mysql_secure_installation
```
#### 对于上述数据库初始化的操作步骤，输出信息如下
``` shell
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?    # 要安装验证密码插件吗?

Press y|Y for Yes, any other key for No: N    # 这里我选择N
Please set the password for root here.

New password:   # 输入要为root管理员设置的数据库密码

Re-enter new password:   # 再次输入密码


By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y     # 删除匿名账户
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : N    # 禁止root管理员从远程登录，这里我没有禁止

... skipping.
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y   # 删除test数据库并取消对它的访问权限
- Dropping test database...
Success.

- Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y   # 刷新授权表，让初始化后的设定立即生效
Success.

All done!
```
#### 检查mysql服务状态，显示running即为安装成功。
``` shell
systemctl status mysql
```
#### 现在配置mysql允许远程访问  
首先编辑 /etc/mysql/mysql.conf.d/mysqld.cnf 配置文件
``` shell
vim /etc/mysql/mysql.conf.d/mysqld.cnf
```
注释掉 bind-address= 127.0.0.1，保存退出。  
#### 执行授权
``` shell
mysql -u root -p
mysql> grant all on *.* to root@'%' identified by '你的密码' with grant option;
mysql> flush privileges;    # 刷新权限
mysql> exit
```
#### 然后执行exit命令退出mysql服务，再执行如下命令重启mysql
``` shell
systemctl restart mysql
```
现在Windows下可以使用Navicat图形化工具远程连接Ubuntu下的MySQL数据库



## 缓存
缓存使用redis，安装时需要留意密码。
``` shell
sudo apt update

# 安装
sudo apt install redis-server

# 配置
#设置密码：修改配置文件里的requirepass,把注释关掉,然后后面改为你想设置的密码；supervised 设置为 systemd。
sudo vim /etc/redis/redis.conf
#修改配置需要重启
sudo service redis restart  # 重新加载Redis服务文件
sudo systemctl status redis # 查看 Redis 的运行状态

# 一些操作
sudo service redis start  # 启动
sudo service redis stop  # 关闭
sudo service redis restart  # 重启

# 配置远程连接 
sudo vi /etc/redis/redis.conf
# 将 bind 127.0.0.1 ::1 改为 bind 0.0.0.0
```
## 对象存储
对象存储使用minio，也可自行购买阿里云等服务商的oss服务器。
```shell
# 安装：
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
sudo mv minio /usr/local/bin/
# 运行 /data/minio-data 是 MinIO 实际存放文件的位置，9001 是 console 的端口，9000 是 API Server 的端口。 console 如果不指定端口，每次运行会随机使用一个端口，不方便我们用 Nginx 代理。
MINIO_ROOT_USER=用户名 MINIO_USER_PASSWORD=密码 nohup minio server /data/minio-data --console-address :9001 --address :9000 > ./minio.log 2>&1 &
```
#### 安装完成后，需要新建一个文件存储容器，名称为：filebucket

## 推荐的vscode开发插件
[Redis](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-redis-client)插件可以在vscode内管理数据库和redis
![plugins](/plugins.png)