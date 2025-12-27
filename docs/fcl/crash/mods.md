---
sidebar_position: 2
title: 禁忌的模组
---
<div align="center">

# 禁忌的模组

</div>

## 前言

禁忌是指某些模组在某些情况下会带来不良影响，甚至会导致游戏崩溃。本文档将列出一些禁忌的模组，并说明它们的原因，并提供修复建议。

## 模组列表

 1. **[sodium(钠)](https://www.curseforge.com/minecraft/mc-mods/sodium)**

   - 原因：由于OpenGL需求，无法原生状态运行在Holy渲染器上。
   - 修复建议：
     - 切换至LTW(推荐)或zink(帧数较低)渲染器。
     - 使用修改后的钠。
::: tip 提示
0.5以下(不包括0.5)版本原生支持Holy渲染器，0.5.x版本需要修改。  
0.6.x无法通过修改在Holy上运行，仅LTW/Zink可用。
:::

 2. **[pixemon(>1.12.2)](https://modrinth.com/mod/pixelmon/)**
 - 原因：暂且未知。
 - 修复建议：暂且未知。

3. **[Valkyrien Skies/Valkyrien Warfare(瓦尔基里)](https://modrinth.com/mod/valkyrien-skies)**
 - 原因：硬件兼容性问题。
 - 修复建议：可用服务器游玩，客户端无法运行。

 4.**[creata(机械动力)](https://modrinth.com/mod/create)**
 - 原因：暂且未知。
 - 修复建议：GL4ES渲染上需要adreno GPU。部分版本需要使用修改/补丁。

 5.**[modern UI(现代化UI)](https://modrinth.com/mod/modern-ui)**
 - 原因：不稳定。
 - 修复建议：删除。

 6.**[IMBlocker(输入法冲突修复)](https://modrinth.com/mod/imblocker-original)**
 - 原因：需要调用Windows的部分库。
 - 修复建议：删除。

 7.**[yes steve mobel(是。史蒂夫模型！)](https://modrinth.com/mod/yes-steve-model)**
 - 原因：新版本只能在X86_64设备上运行。
 - 修复建议：使用老版本或换设备。

 8.**[Controllable(手柄控制)](https://www.mcmod.cn/class/1971.html)**
 - 原因：不支持。
 - 修复建议：删除。

 9.**[Avaritia(无尽贪婪)](https://www.mcmod.cn/class/505.html)**
 - 原因：无法在1.12.2以上版本运行。
 - 修复建议：删除。

 10.**[Dynamic Surroundings(动态环境/动态环绕)](https://modrinth.com/mod/dynamicsurroundingsfabric)**
 - 原因：渲染错误。
 - 修复建议：删除。

 11.**[RandomPatches(随意修复)](https://modrinth.com/mod/randompatches)**
 - 原因：渲染错误。
 - 修复建议：删除。

 12.**[WebDisplays(内置网页浏览器)](https://modrinth.com/mod/webdisplays)**
 - 原因：无法渲染网页。
 - 修复建议：可删除。

 13.**[In-game Browser(游戏内浏览器)](https://www.mcmod.cn/class/4680.html)**
 - 原因：无法使用。
 - 修复建议：可删除。

 14.**[Physics Mod(物理模组)](https://modrinth.com/mod/physicsmod)**
 - 原因：硬件兼容性问题。
 - 修复建议：替换文件(使用魔改版模组文件)，B站有详细教程。

 15.**[Vulkan Mod(Vulkan模组)](https://www.mcmod.cn/class/6626.html)**
 - 原因：系统Vulkan API兼容性问题。
 - 修复建议：请查看本站文档: [Vulkan Mod](https://docs.lemwood.cn/docs/Vulkanmod.html)

 ## 待补充，请在issue中留言或PR。[issue](https://github.com/fcl-docs/fcl-docs/issues)