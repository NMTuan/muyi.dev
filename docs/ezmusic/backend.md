# 后端部署

整个后端由 directus 支撑，同时会用到数据库及对象存储。

> directus 是一套基于 node.js 开发的 headless CMS。
> 
> 简单说，directus 可以可视化的维护数据库表结构及关联关系；管理数据库数据；创建触发器；同时对外提供 web api 供第三方程序调用。

为方便部署，统一使用 docker 服务。

## 数据库

directus 支持多种数据库，比如：sqlite，postgres，mysql，oracledb 等，详见：[Configuration Options | Directus Docs](https://docs.directus.io/self-hosted/config-options.html#database)。

这里选择使用 mariadb，同样一条命令完事：

```bash
# todo
```

## 对象存储

directus 支持多种对象存储服务，如：s3、azure、gcs 等，详见：[Configuration Options | Directus Docs](https://docs.directus.io/self-hosted/config-options.html#file-storage)。

在这里选择兼容 amazon S3 服务的 minIO。直接一条命令完事：

```bash
# todo
```

## 数据缓存

directus 是支持 redis、memcache 等缓存服务的，有兴趣的可以自行查阅官方手册。

这里暂时没有涉及。

## directus 部署

一句话的事，描述都写清楚了：

```bash
docker run \
  --name directus-music \
  --restart=always \
  -p 8055:8055 \
  -e KEY=255d861b-5ea1-5996-9aa3-92253ec40b0 \    # 官方示例，请自行修改
  -e SECRET=6116487b-cda1-52c2-b5b5-c8022c45e263 \    # 官方示例，请自行修改
  -e ADMIN_EMAIL=admin@domain.com \    # 登录 directus 的邮箱
  -e ADMIN_PASSWORD=passwd \    # 密码
  -e DB_CLIENT=mysql \    # 数据库 类型
  -e DB_HOST=192.168.1.100 \    # 数据库地址
  -e DB_PORT=3306 \    # 数据库端口
  -e DB_DATABASE=directus_music \    # 数据库名称
  -e DB_USER=root \    # 数据库连接用户名
  -e DB_PASSWORD=passwd \    # 数据库连接密码
  -e CORS_ENABLED=true \    # api 跨域的配置
  -e CORS_ORIGIN=* \    # 允许所有域请求 api
  -e STORAGE_LOCATIONS=minio \    # 对象存储 类型
  -e STORAGE_MINIO_ROOT=/uploads \
  -e STORAGE_MINIO_DRIVER=s3 \    
  -e STORAGE_MINIO_KEY=admin \
  -e STORAGE_MINIO_SECRET=passwd \
  -e STORAGE_MINIO_BUCKET=music \
  -e STORAGE_MINIO_ENDPOINT=http://192.168.1.100:9000 \
  -e STORAGE_MINIO_S3_FORCE_PATH_STYLE=true \    # 这行不能丢，否者附件上传不上去
  -d directus/directus
```
