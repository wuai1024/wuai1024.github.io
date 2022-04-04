### 让系统查找快速的镜像源
``` shell
yum install dnf -y
echo "fastestmirror=True" >> /etc/dnf/dnf.conf
sudo dnf makecache
```