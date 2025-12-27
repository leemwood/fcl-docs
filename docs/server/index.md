---
sidebar_position: 0
title: 插件端的历史
---
# 前言
主要讲主流插件端始祖bukkit，spigot，paper的诞生以及分割，paper的衍生purpur，leaves以及leaf，folia的原理以及luminol的来历。

# 插件端的开始
先放个[链接](https://zh.minecraft.wiki/w/%E5%AE%9A%E5%88%B6%E6%9C%8D%E5%8A%A1%E5%99%A8)  

bukkit是最早诞生的插件端之一，后续成为了spigot服务端的基础，不久后，[spigotmc](https://www.spigotmc.org/wiki/about-spigotmc/)项目成立，在不破坏原版特性和bukkit特性得到一度好评，但是后来有出现内存泄露等严重的性能表现，让腐竹们苦不堪言。

# papermc团队
[链接](https://papermc.io/)
papermc团队最初基于spigotmc服务端开发了paper服务端，以牺牲原版特性为代价，提升了不少性能表现。  
papermc的兼容性强，几乎兼容来自spigotmc的所有api（接口），因此社区发展迅速。  
papermc团队没有停下脚步，他们开始专注性能表现的同时，开发新的api（接口），Paper 在去年（2024）年底已经和 Spigot 发生了硬分叉（hard-fork），这意味着两者之间不再存在继承关系，因此，开发者们需要在二者之间做一个抉择。  
然而，paper有公认的缺点，牺牲原版特性，让生电玩家苦不堪言。

# papermc的衍生端
- [leavesmc](https://leavesmc.org/) - 基于paper，专注于修复被破坏的原版特性服，其次有很强的性能表现和地毯模组，地图模组等辅助模组的兼容性，想在插件端生电的不二之选。
- [purpurmc](https://purpurmc.org/) - Purpur基于Paper，面向bukkitapi，spigotapi和paperapi的拓展以及提供更多的可配置性，玩法类服务器可以考虑选择purpur。

- [leafmc](https://www.leafmc.one/zh/) - 基于paper，专注更NB的性能表现优化和稳定性表现，如果你只考虑性能表现，可以考虑选择leaf。

# folia的出现，原理和衍生端
服务端再怎么优化，都有一个公认的问题，那就是单线程负责所有玩家和实体的处理工作。  
于是，papermc团队开发了一个全新的项目-[folia](https://papermc.io/software/folia/)。
## 原理
[官方描述](https://docs.papermc.io/folia/reference/overview/)  
官方描述过于专业，简单来说就是以一个玩家为中心分配线程，而不是原本一个核心处理所有事件，同样的，对原版特性的破坏也是严重的。
## 衍生端
- [luminol](https://luminolsuki.moe/) - 基于 Folia，尝试修复一些特性以及提供一些新的API。
- Lophine - 基于 Luminol，提供更多生电所需的特性以及还原部分旧特性
- LightingLuminol - 基于 Luminol，修复对 BukkitAPI 的破坏，最大程度保证旧插件兼容性
- [Lumina](https://leavesmc.org/) - 基于folia，跟leaves一个目的，修复破坏的原版特性。由于缺少活跃的开发者，目前已经暂停。