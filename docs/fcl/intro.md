# 快速入门

## 介绍

<div align="center">
    <img width="75" src="/fcl_logo.png"></img>
</div>

<h1 align="center">Fold Craft Launcher</h1>

<div align="center">

![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
[![Discord](https://img.shields.io/badge/Discord-4903FC?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/ffhvuXTwyV)
[![QQ](https://img.shields.io/badge/QQ-4903FC?style=for-the-badge&logoColor=white)](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LwxydGEvBZJnn09sXOjkQo9tuuLcYwx5&authKey=seyY5pPUCIHMWS5FqVryq926T0G2GarSXetpxxV9DJxBVt%2FPcg1vxN%2F%2FXpsCowyk&noverify=0&group_code=762054349)
![Downloads](https://img.shields.io/github/downloads/FCL-Team/FoldCraftLauncher/total?color=green&style=for-the-badge)

[![Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://afdian.com/@tungs)

</div>

- [Fold Craft Launcher](https://github.com/FCL-Team/FoldCraftLauncher):  
  该软件旨在在安卓设备上启动 Minecraft: Java Edition，让玩家可以管理游戏、模组、控制和更多内容。

- **直接在安卓设备上运行 Minecraft: Java Edition**，支持模组和所有游戏版本。

<h1 align="center">许可证</h1>

该软件根据 [GPL-v3](https://www.gnu.org/licenses/gpl-3.0.html) 许可证进行分发。

## 目录

- [账号添加](#账号添加)
  - [登录方式](#登录方式)
  - [正版登录(微软账号)](#正版登录微软账号)
  - [离线登录](#离线登录)
  - [第三方登录](#第三方登录)
- [游戏安装](#游戏安装)
  - [原版游戏](#原版游戏)
  - [forge/neoforge版本](#forgeneoforge版本)
  - [fabric/quilt版本](#fabricquilt版本)
  - [optifine(高清修复)版本](#optifine高清修复版本)
- [游戏配置](#游戏配置)
- [注意事项](#注意事项)

## 账号添加

### 登录方式

目前支持以下登录方式：
- 正版登录
- 离线登录
- 第三方登录（皮肤站等）

### 正版登录(微软账号)

:::warning 警告
请注意，微软账号登录需要你购买并激活了 Minecraft 档案，否则无法登录。
:::

点击右上角账号按钮，选择正版登录，点击登录，之后会跳转到登录界面，粘贴设备码（会自动复制到剪贴板），点击下一步，输入账号密码，等待出现登录成功的提示，返回上一级即可登录正版账号。

### 离线登录

在微软登录按钮下方，点击"离线登录"，在弹出来的界面输入 3-16 字符的 ID，**注意空格使用下划线代替，在高版本仅支持数字、字母和下划线**，点击登录即可完成离线登录。

### 第三方登录

在微软账户按钮下方，点击"添加认证服务器"，在界面输入可受支持的认证服务器地址，目前经典的认证服务器有：
- LittleSkin（被称为皮肤站）：https://littleskin.cn/api/yggdrasil
- NaituSkin：https://naituskin.cn/api/yggdrasil

添加认证服务器后，访问网站创建角色，设定密码，保存后，返回启动器，选择对应的认证服务器，输入角色 ID 和密码，点击登录即可完成第三方登录。

## 游戏安装

### 原版游戏

在启动器主界面左侧边栏，点击下载按钮，如下图所示：

![下载游戏](/img/intro/download.png)

选择版本，什么都不要选，直接点击下载即可。

### forge/neoforge版本

在当前界面选择某一个原版版本，在预装附加加载器的地方，选择 forge/neoforge 版本，点击下载，等待下载完成即可。

::: warning 警告
**forge 与 neoforge 冲突，无法同时安装**
:::

### fabric/quilt版本

在当前界面选择某一个原版版本，在预装附加加载器的地方，选择 fabric/quilt 版本，发现能选 Fabric API（QSL/QFAPI）的选项，如果你想添加大量模组，你必须得添加 Fabric API，点击下载，等待下载完成即可。

::: warning 警告
**fabric 与 quilt 冲突，无法同时安装**
:::

### optifine(高清修复)版本

::: tip 提示
低版本常用优化加载器，与 forge 兼容，在高版本不推荐使用，容易出现与模组兼容问题。
- 1.16.5-非兼容性需要推荐使用
- 1.12.2（含 1.12.2）推荐以 mod 形式安装
- 1.12.2+（不含 1.12.2）请开"自动安装"选择
:::

在当前界面选择某一个原版版本，在预装附加加载器的地方，选择 optifine 版本，点击下载，等待下载完成即可。

## 游戏配置

在游戏安装完成后（请先确保你的游戏安装完成，并选择了对应的版本），点击左侧边栏的"游戏管理"，点击"游戏设置"，如下图所示：

![游戏设置](/img/intro/game_setting.png)

在游戏设置界面，可以设置游戏的各种参数，包括：
- 启用游戏特定设置（小白或不知道此功能请不要开启）
- JAVA 版本
- 版本隔离（推荐开启）
- 内存分配（推荐关闭自动分配，原版通常分配 1G 内存够用）
- 渲染器选择：
  - **原版游戏**：推荐使用 kw（启动器已默认）
  - **类原版/移植整合包**：推荐使用 MG 渲染器，需下载完成后配置，前往[下载](/docs/download)。
  - **完整的光影支持/vulkan调度**：推荐使用 Zink vulkan

## 注意事项

- 内存分配建议关闭自动分配，原版通常分配 1G 内存够用。请记住一句话："内存越大，游戏越不稳定！"
- 如遇到渲染问题，可尝试切换渲染器或查阅[插件文档](/docs/plugins/plugins)了解更多渲染器信息。
