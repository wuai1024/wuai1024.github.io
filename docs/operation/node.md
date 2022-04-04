## 安装配置

### 1、下载nginx

``` shell
# 进入目标文件夹
cd /usr/local/src
wget http://nginx.org/download/nginx-1.21.1.tar.gz
# 解压
tar -xvf nginx-1.21.1.tar.gz
cd nginx-1.21.1
# 安装依赖
yum -y install pcre-devel openssl-devel
# 编译
./configure --prefix=/usr/local/nginx --with-http_ssl_module
make
make install
```

### 2、配置开机启动注册为服务

```shell
yum install vim -y
vim /usr/lib/systemd/system/nginx.service
```

``` shell
[Unit]
Description=nginx
After=network.target
   
[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
PrivateTmp=true
   
[Install]
WantedBy=multi-user.target
```

```shell
#开机自启
systemctl enable nginx
#快捷操作
ln -s /usr/local/nginx/sbin/nginx /usr/bin/
```

## 常用命令

``` shell
#启动服务
nginx

#使用配置文件启动
nginx -c "配置文件路径"

#重载服务（重载服务配置文件，类似于重启，但服务不会中止，当项目多的时候新增项目的时候很实用）
nginx -s reload

#退出服务
nginx -s quit

#强制关闭服务
nginx -s stop

#查看版本
nginx -v

#帮助
nginx -h

#验证配置文件
nginx -t　　
```

## systemctl命令

``` shell
# 启动
systemctl start nginx.service  

# 重启
systemctl restart nginx.service  

# 重载服务配置文件，类似于重启，但服务不会中止
systemctl reload nginx.service　　　  

# 停止
systemctl stop nginx.service  

# 关闭开机启动
systemctl disable nginx.service 

如果出现报错内容"Failed to execute operation: Access denied"，输入"systemctl daemon-reexec"即可解决。
```

