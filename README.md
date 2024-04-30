# nico-nico 前端组件库开发笔记

## 项目架构
- 项目管理：
monorepo风格，通过`pnpm add package -w`来给子项目添加依赖，例如：`pnpm add @nico/nico-cli -w`
- 目录结构：
```#
-nico-nico
  -node_modules
  -docs #vitepress文档
  -packages
    -@nico/nico-cli #脚手架
    -@nico/components #nico相关组件
    -@nico/utils #nico相关工具
    -@nico/theme #nico相关主题
    -@nico/test #nico相关测试
  -scripts
    -build.js #构建脚本
    -dev.js #开发脚本
    -lint.js #lint脚本
    -test.js #测试脚本
  -test
    -unit
      -index.js #单元测试入口
    -e2e
```
## 启动项目
```
# 启动vitepress
npm run docs:dev
# 启动脚手架
npm run cli:dev
```

## 实现需求
1. 拥有一整套脚手架工具`nico-cli`
2. 加入npm库，能快速安装
3. 
## 开发流程
    - 
## 功能
  - 脚手架
  - 规范
  - 测试
## 主题
  - 

## 推荐文章
[从 Element UI 源码的构建流程来看前端 UI 库设计](https://juejin.cn/post/6844904197863964685)