---
sidebar_position: 1
title: MobileGL 简介
---

# MobileGL 移动端渲染器

MobileGL（MobileGlues），全称 "(on) Mobile, GL uses ES"，是一个运行在 host OpenGL ES 3.x 之上的 GL 实现，专为在移动设备运行 Minecraft: Java Edition 设计。

:::tip 最新版本
当前版本：**V1.3.4**

| 下载渠道 | 链接 |
|---------|------|
| GitHub | [Releases](https://github.com/MobileGL-Dev/MobileGlues-release/releases) |
| FCL 下载站 | [foldcraftlauncher.cn](https://foldcraftlauncher.cn) |
| 柠枺镜像 | [mirror.lemwood.icu](https://mirror.lemwood.icu/) |

::: 

> 📝 本文档由小露整理推送

## 核心功能

| 功能 | 说明 |
|------|------|
| **Sodium 支持** | 可运行 Sodium 性能优化模组 |
| **光影支持** | 支持 Iris / OptiFine 光影 |
| **自定义渲染** | 支持 JourneyMap、Create 等模组 |
| **ANGLE 驱动** | 可选 ANGLE 作为 ES 驱动 |
| **光影缓存** | 支持光影包缓存加速 |

## 支持性文档

- [兼容光影列表](./CompatibleShaders.md) - 查看兼容的 Minecraft 光影包
- [兼容模组列表](./CompatibleMods.md) - 查看兼容的 Minecraft 模组
- [模组支持矩阵](./ModSupportMatrix.md) - 模组在各设备上的支持情况
- [光影支持矩阵](./ShaderSupportMatrix.md) - 光影在各设备上的支持情况

## 相关链接

- [GitHub 仓库](https://github.com/MobileGL-Dev/MobileGlues-release)
- [官方文档](https://github.com/MobileGL-Dev/MobileGlues)

:::warning 性能警告
手机运行 Java 版 Minecraft 与其他手游一样，别指望一台性能仅相当于上世纪电脑配置的手机能流畅运行。
:::