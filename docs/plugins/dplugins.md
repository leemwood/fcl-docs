---
sidebar_position: 1
title: 衍生插件
---

<h1 align="center">FCL 衍生渲染器插件</h1>

## 前言

> 插件是 FCL 官方提供的渲染器/驱动接口，用于部分模组或其他功能的补丁与优化支持。
> 此页面提供由社区贡献的插件，欢迎提交 PR。

## 插件列表

### 1. Krypton Wrapper (NG-GL4ES)

**图标**: ![NG-GL4ES](/img/dplugins/NG-GL4ES.png)

**作者**: **BZLZHH** ([GitHub](https://github.com/BZLZHH), [Bilibili](https://space.bilibili.com/477062582))

**类型**: 渲染器

**描述**: **Krypton Wrapper**（也叫做 Next Generation GL4ES / NG-GL4ES）是一个基于 [gl4es](https://github.com/ptitSeb/gl4es) 和 [gl4es-114-extra](https://github.com/PojavLauncherTeam/gl4es-114-extra) 的项目。此项目支持更多的 OpenGL 函数并修复原项目的部分漏洞。

**注意事项**: 请访问 [GitHub/NG-GL4ES](https://github.com/BZLZHH/NG-GL4ES)

**下载链接**: [ng-gl4es.bzlzhh.top](https://ng-gl4es.bzlzhh.top/)

:::tip 提示
kw渲染器已内置在 FCL 中，无需单独下载。
:::




---

### 2. MobileGlues

**图标**: 
<img src="/img/dplugins/MobileGlues-icon.png" alt="MobileGlues" width="128" height="128" />

**作者**: **[BZLZHH](https://github.com/BZLZHH)**, **[Swung0x48](https://github.com/Swung0x48)**, **[Tungstend](https://github.com/Tungstend)**

**类型**: 渲染器

**描述**: **MobileGlues**（即"移动设备上的 OpenGL ES"）是一个基于主机 OpenGL ES 3.2 的 GL 实现，旨在运行 Minecraft Java 版本。支持更多高级 OpenGL 特性，适合需要高版本 OpenGL 的模组和光影。

**注意事项**: 请访问 [GitHub/MobileGlues](https://github.com/Swung0x48/MobileGlues-release)

**下载链接**: 
- [GitHub Release](https://github.com/Swung0x48/MobileGlues-release)
- [FCL 下载站](https://foldcraftlauncher.cn/plugins.html)

---

### 3. Pojav FFmpeg Plugin

**类型**: 功能插件

**描述**: 为 FCL 提供 FFmpeg 支持，用于某些需要音视频解码的模组。

**下载链接**: [FCL 下载站](https://foldcraftlauncher.cn/plugins.html)

---

## 渲染器对比

| 渲染器 | OpenGL 版本 | 光影支持 | 适用场景 |
|--------|-------------|----------|----------|
| Holy | 2.1 | 否 | 老版本游戏、机械动力 |
| LTW | 3.x | 部分 | 1.17+ 原版 |
| Zink | 4.x+ | 是 | 光影、整合包 |
| MobileGlues | 4.6 | 是 | 高版本光影、高级模组 |
| NG-GL4ES | 3.x | 部分 | 兼容性优化 |

---

## 贡献插件

欢迎提交 PR 或在 [GitHub Issues](https://github.com/leemwood/fcl-docs/issues) 中提交新插件信息。
