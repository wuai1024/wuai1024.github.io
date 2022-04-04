### 一、安装jdk
#### 1、准备工作
``` shell
# 下载安装包
curl -o /root/jdk-8u321-linux-x64.tar.gz https://deploy.liexiong.net/download/jdk-8u321-linux-x64.tar.gz
# 解压
tar -xvf jdk-8u321-linux-x64.tar.gz
# 移至安装目录
mv jdk1.8.0_321 /usr/local/jdk
# 清理多余文件
rm -rf jdk-8u321-linux-x64.tar.gz
```
#### 2、配置环境变量
``` shell
cat > /etc/profile.d/java.sh << EOF
export JAVA_HOME=/usr/local/jdk
export JAVA_BIN=$JAVA_HOME/bin
export JAVA_LIB=$JAVA_HOME/lib
export CLASSPATH=.:$JAVA_LIB/tools.jar:$JAVA_LIB/dt.jar
export PATH=$JAVA_BIN:$PATH
# export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/apr/lib（APR需要这个）
EOF
```
#### 3、加载环境变量
``` shell
source /etc/profile
```

### 二、安装maven
#### 1、准备工作
``` shell
# 下载程序包
curl -o /root/apache-maven-3.8.5-bin.tar.gz https://dlcdn.apache.org/maven/maven-3/3.8.5/binaries/apache-maven-3.8.5-bin.tar.gz
# 解压
tar -xvf apache-maven-3.8.5-bin.tar.gz
# 移至安装目录
mv apache-maven-3.8.5 /usr/local/maven && rm -rf apache-maven-3.8.5
```
#### 2、写入环境变量
``` shell
cat > /etc/profile.d/maven.sh << EOF
export M2_HOME=/usr/local/maven
export PATH=$M2_HOME:$PATH
EOF
```
#### 3、加载环境变量
``` shell
source /etc/profile
```