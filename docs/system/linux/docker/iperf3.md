### 拉取镜像
``` shell
docker pull networkstatic/iperf3
```
### 启动服务
``` shell
docker run -dit -p 5201:5201 --name iperf3 --restart=always networkstatic/iperf3 -s
```