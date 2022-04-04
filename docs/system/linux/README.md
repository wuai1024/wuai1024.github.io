### 一、让系统查找快速的镜像源
``` shell
yum install dnf -y
echo "fastestmirror=True" >> /etc/dnf/dnf.conf
sudo dnf makecache
```

### 二、centos7使用阿里镜像源加速
#### 1、下载阿里yum源
``` shell
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```
#### 2、清空缓存
``` shell
yum clean all
```
#### 3、生成缓存
``` shell
yum makecache
```

### 三、centos8由于官方不维护了，必须更改镜像源
``` shell
curl -o /etc/yum.repos.d/Centos-vault-8.5.2111.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```