---
sidebar_position: 0
title: 处理方法
---
<div align="center">

# 一部分崩溃的处理方式(WIP)

</div>

## 前言
 - 这里将介绍一些崩溃的典例及其处理方式,还有一些辅助判断的方法
 - 如果有没提到的日志看不懂可以发至1902002294@qq.com,
::: warning 警告
我教你是情分,不是本分,傻子才会无能狂怒
:::
::: warning 警告
AI仅供**参考**,AI可能会提出一个**错误**的解决关式
:::
## 关于日志文件

1. 如果游戏崩溃后,FCL弹出崩溃界面,请分享日志给别人,而不是**千方百计**地去**截图** 
2. 如果游戏崩溃后,FCL没有弹出崩溃界面,你应该去游戏目录手动寻找
- 如果你打开了版本隔离,那么log应该在.Minecraft/version/&lt;游戏版本名&gt;/logs
- 如果你打开了版本隔离,那么log应该在.Minecraft/logs
- 在发送日志前,你应该检查是否有最后编辑时间与游戏崩溃时间匹配的crash-report文件产生,这个文件会在crash-reports文件夹中,位置于logs文件夹“平行”
## 关于JNI
- 如果你把文化发给AI,它们通常会告诉你JNI版本不匹配,请忽略,因为从来没有一个崩溃是由JNI导致的
## 关于LWJGL
- 如果你把文化发给AI,它们通常会告诉你LWJGL版本不匹配,请忽略,因为很少出现由LWJGL引起的崩溃
## 关于Mod间不兼容/前置缺失
### Fabric
当遇到Mod间不兼容/前置缺失时  
Fabric在电脑上弹窗告诉你  
但在手机上不会  
这需要你去查看log的相应部分  
结构通常如下(举例)
::: tip 例子
A potential solution has been determined, this may resolve your problem:  
	 - Install fabric-language-kotlin, version 1.13.0+kotlin.2.1.0 or later.
:::
这些可以让你知道你应该安装modid为fabric-language-kotlin且版本号大于1.13.0+kotlin.2.1.0的mod  
不过我更推荐你看下面的部分(举例)
::: tip 例子
	 - Mod 'libIPN' (libipn) 6.2.1 requires version (换行)
     1.11.0+kotlin.2.0.0 or later of (换行)
     fabric-language-kotlin, which is missing!
:::
这个的意思是modid为libIPN的Mod要求modid为fabric-language-kotlin且版本号大于1.13.0+kotlin.2.0.0的mod
### (Neo)Forge
Forge和NeoForge对于Mod间不兼容/前置缺失的处理有点反人类  
通常要你浪费个1-2分钟甚至3-4分钟才会弹出错误界面告诉你  
Forge和NeoForge应为有相应界面  
通常更好判断,在崩溃界面黄色高亮的字就是缺少的Mod的modid  
### 追加
::: warning 特殊情况
有些mod可能会指定某一Mod特定的一个版本(如0.5.11)或一个版本集(如0.6.x),也可能是要求版本小于某个版本,如果你不能判断,可以复制到翻译软件/网站上翻译
:::
## 一部分情况下快速判断问题所在的方法
1. (WIP)(未完成)(待编辑)
## 署名
**编辑作者：** [空心](https://github.com/KongXing0819)  
**QQ：** 1902002294  
**邮箱：** 1902002294@qq.com  
**创建时间：** 2025.2.18
**修改时间：** 2024.2.18