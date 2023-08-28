---
title: Compose常见问题
---
## 普通端口占用（8088、7001、9000、9001）

#### 8088或7001端口被占用
8088端口对应的是后台管理系统，7001对应服务端端口。是两个自定义端口，也是比较容易修改的端口。  
当8088被占用时，只需要修改/docker/nginx.conf,将端口更改就好。
```
    server {
        listen  8088;
        charset utf-8;
        server_name  localhost;
        root /opt/dist;
        index index.html;
        location / {
           try_files $uri $uri/ /index.html;
        }
   }
   # 将listen改为你需要的端口即可，例如：
   server {
        listen  9999;
        charset utf-8;
        server_name  localhost;
        root /opt/dist;
        index index.html;
        location / {
           try_files $uri $uri/ /index.html;
        }
   }
  ```

当7001被占用时，只需要修改服务端配置文件  
打开/rightHouse/RH-server/config/config.default.js  
  ```javascript
    // 将port修改即可
  config.cluster = {
    listen: {
      port: 7001
    }
  };
  ```
当你修改了服务端接口，就需要注意后台管理系统、小程序的接口访问地址[配置](/develop/options/) 。
#### 9000、9001 端口占用
9000对应minio后台管理页面地址端口，9001对应minio接口访问地址，修改方法为：
``` yml
  # /rightHouse/RH-server/docker/docker-compose.yml
  minio:
    image: minio/minio:RELEASE.2023-05-04T21-44-30Z
    network_mode: "host"
    restart: 'on-failure'
    container_name: right-house-minio
    # 在此处修改端口号，修改下面的9000和9001即可
    command: server /data --console-address :9000 --address :9001
    volumes:
            - '../docker/data/redis/data:/data'
    environment:
                - MINIO_ROOT_USER=right_house_minio
                - MINIO_ROOT_PASSWORD=right_house_minio_980128
```
当修改9001端口后，需要修改对应服务端[配置](/develop/options/) 

## 特殊端口占用（3306、6379）
3306对应mysql端口，6379对应redis端口  
这两个端口一般不会有占用情况，除非已经有mysql、或者redis应用程序启动。
### 例如本地已经有Mysql数据库
#### 第一种解决方法：使用本地数据库
执行/rightHouse/docker/init-sql/init.sql数据库脚本  
修改服务端mysql相关[配置](/develop/options/)  
删除/rightHouse/docker/docker-compose.yml关于mysql的配置
```yml
 # 删除如下
  mysql:
    image: mysql:8.0.33
    command:
            - --default-authentication-plugin=mysql_native_password
    network_mode: "host"
    restart: 'on-failure'
    container_name: right-house-mysql
    expose:
        - "3306"
    volumes:
            - './init-sql:/docker-entrypoint-initdb.d'
           # - '../docker/data/mysql/conf/my.cnf:/etc/my.cnf'
           # - '../docker/data/mysql/log:/var/log/mysql'
            - '/etc/timezone:/etc/timezone:ro'
            - '/etc/localtime:/etc/localtime:ro'
            - '../docker/data/mysql/data:/var/lib/mysql'

    environment:
             - MYSQL_ROOT_PASSWORD=right_house_sql_980128
```
#### 第二种解决方法：修改容器数据库端口
取消使用host网络模式，单独映射端口
```yml
 # /rightHouse/docker/docker-compose.yml
  mysql:
    image: mysql:8.0.33
    command:
            - --default-authentication-plugin=mysql_native_password
    # network_mode使用：bridge
    network_mode: "bridge"
    # 添加端口映射 3306:你想要的端口
    ports:
     - "3306:3307"
    restart: 'on-failure'
    container_name: right-house-mysql
    expose:
        - "3306"
    volumes:
            - './init-sql:/docker-entrypoint-initdb.d'
            - '/etc/timezone:/etc/timezone:ro'
            - '/etc/localtime:/etc/localtime:ro'
            - '../docker/data/mysql/data:/var/lib/mysql'

    environment:
             - MYSQL_ROOT_PASSWORD=right_house_sql_980128
```
修改服务端mysql相关[配置](/develop/options/) 

### 例如本地已经有Redis
#### 第一种解决方法：使用本地Redis
修改服务端Redis相关[配置](/develop/options/)  
删除/rightHouse/docker/docker-compose.yml关于Redis的配置
```yml
 # 删除如下
  redis:
    image: redis:7.0.12
    network_mode: "host"
    restart: 'on-failure'
    container_name: right-house-redis
    volumes:
            - '../docker/data/redis/data:/data'
            - '../docker/data/redis/conf/redis.conf:/etc/redis/redis.conf'
            - '../docker/data/redis/logs:/logs'
    command: redis-server  /etc/redis/redis.conf --requirepass right_house_redis_980128
```
#### 第二种解决方法：修改容器Redis端口
取消使用host网络模式，单独映射端口
```yml
  redis:
    image: redis:7.0.12
    # network_mode使用：bridge
    network_mode: "bridge"
    # 添加端口映射 6379:你想要的端口
    ports:
     - "6379:6380"
    restart: 'on-failure'
    container_name: right-house-redis
    volumes:
            - '../docker/data/redis/data:/data'
            - '../docker/data/redis/conf/redis.conf:/etc/redis/redis.conf'
            - '../docker/data/redis/logs:/logs'
    command: redis-server  /etc/redis/redis.conf --requirepass right_house_redis_980128
```
## 注意

当修改了yml、DockerFile文件、配置文件，需要重新up时，需要删除所有生成的容器，删除docker-right_house_server、docker-right_house_admin镜像，才能正常生效。