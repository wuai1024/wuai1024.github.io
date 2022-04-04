### 拉取镜像
``` shell
docker pull portainer/portainer-ce
```
### 创建存储映射目录
``` shell
mkdir -p /data/docker/portainer_data
```
### 运行镜像
``` shell
docker run -d -p 9000:9000 \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /data/docker/portainer_data:/data \
--restart=always \
--name portainer portainer/portainer-ce
```