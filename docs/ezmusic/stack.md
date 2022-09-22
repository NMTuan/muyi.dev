# 技术栈

## 前端技术

选用熟悉的 vue 路线。为了快速上手，使用的是 [nuxt.js v3](https://github.com/nuxt/framework) 版本。目前官方版本为 rc10，相信过不了多久就会发布正式版本了。

除了主要的技术框架外，还用到了以下技术：

- [pinia](https://github.com/vuejs/pinia)：被称作 vuex5 的状态管理

- [unocss](https://github.com/unocss/unocss)：原子 css 引擎

- [sass](https://github.com/sass/sass)：老牌 css 预处理

- [normalize.css](https://github.com/necolas/normalize.css)：统一各浏览器 css 渲染

- [simplebar](https://github.com/Grsmto/simplebar)：现代化的滚动条

- [remixIcon](https://github.com/Remix-Design/RemixIcon)：图标库

## 后端技术

选用了 [directus](https://directus.io/) 作为整个后端的支撑。

数据库使用的是 [MariaDB](https://mariadb.org/)。

对象存储用的是 [minIO](https://github.com/minio/minio)。

整个后端服务都基于 [docker ](https://www.docker.com/)容器化。
