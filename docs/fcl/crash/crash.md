<div align="center">

# 崩溃处理

</div>

### 前言
*Troubleshooting any problem without the error log is like driving with your eyes closed.* <br />在没有错误日志的情况下诊断任何问题无异于闭眼开车。

**—— Apache 官方文档Getting Started 篇章**

## 目录
- [确定错误类型](#确定错误类型)
- [尝试解决问题](#尝试解决问题)
  - [渲染器选择错误](#1.渲染器选择错误)
  - [游戏文件缺失](#2.游戏文件缺失)
  - [模组加载器文件缺失](#3.模组加载器文件缺失)
  - [模组不兼容](#4.模组不兼容)
  - [模组缺失依赖](#5.模组缺失依赖)
- [署名](#署名)
## 确定错误类型
在FCL启动器检测到游戏异常退出后，一般都会有崩溃报告提醒你游戏是因为什么而崩溃的，但是在某些时候，FCL也查不出是为何而崩溃，这就只能靠你自己排查原因了，请多多翻阅你游戏最后一次运行的日志，这会让问题排查简单很多

1. 软件崩溃
![软件崩溃](/img/crash/crash1.jpg)
上面的图片展示了一个软件崩溃的例子，崩溃报告里一般会包含Stack trace相关字眼，[软件崩溃解决办法](#软件崩溃)

2. 游戏崩溃
![游戏崩溃](/img/crash/crash2.jpg)
上面的图片展示了游戏崩溃的例子，崩溃报告里一般会打印出你的运行环境和其他参数，[游戏崩溃解决办法](#游戏崩溃)

## 尝试解决问题

在尝试解决问题之前请确保你设备上安装了文件管理类软件、文本查看类软件以及拥有
**<span style="color: red;">良好的视力与文字交流能力</span>**
### 软件崩溃

对于个人而言，你需要把软件崩溃之前的详细过程记下来，然后向FCL的仓库[提交issue](https://github.com/FCL-Team/FoldCraftLauncher/issues)，最后
~~<span style="color: gray;">坐和放宽</span>~~
耐心等待修复bug修复
<span style="color: gray;">实在等不及可以去用户群催（</span>

### 游戏崩溃
游戏崩溃分许多种类型，以下给出常见崩溃的解决方案：
#### 1. 渲染器选择错误
![渲染器选择错误崩溃](/img/crash/crash2.jpg)
在图片第六行中能看到Renderer也就是渲染器为VGPU，而VGPU只支持1.17-，所以导致了游戏崩溃
解决办法：<br />
==切换渲染器==，渲染器兼容性请看[渲染器文档](http://docs.lemwood.cn/docs/GL.html)，切换前请检查游戏设置是否开启了启用游戏特定设置，开启后请在游戏设置界面更改渲染器而不是在全局游戏设置里更改
#### 2. 游戏文件缺失
![游戏缺失文件崩溃](/img/crash/crash3.jpg)
游戏文件缺失而崩溃是非常容易发现的，具体表现为上图：游戏刚启动就崩溃，日志内容戛然而止，没有崩溃日志
解决办法：<br />
<span style="background-color: yellow">重新安装游戏版本</span>
或
<span style="background-color: yellow">关闭不检查游戏完整性</span>
#### 3. 模组加载器文件缺失
[无图片]
许多人在某个渠道安装了一个整合包后，直接启动会发现游戏刚运行就崩溃，这大概率是安装整合包后没补全模组加载器的相关文件，因为涉及许多可能性，所以这里只说一个典例，崩溃多发于安装整合包后
解决办法： <br />
<span style="background-color: yellow">安装一个相同模组加载器的游戏版本</span>
，例如你游戏版本为1.20.1，Forge版本为47.3.5(模组加载器版本一般会表明在版本名称下方)，时候你就应该安装一个1.20.1版本并在安装时选择47.3.5版本的Forge
#### 4.模组不兼容
![不兼容钠崩溃](/img/crash/crash4.jpg)
在尝试运行大型整合包后，游戏能成功的加载到主界面，但是一进世界就会崩溃(如上图日志所示)，这一般是在整合包里有优化模组-[钠(sodium)](https://www.curseforge.com/minecraft/mc-mods/sodium)或[Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium)或其他不兼容的模组<br />
解决办法：<br />
详情请看[禁忌的模组](http://docs.lemwood.cn/docs/mods.html)(不完全)
<br />
如果是游戏加载过程中崩溃，那就得考虑是不是有其他不兼容的模组

#### 5.模组缺失依赖
在模组网站或其他渠道下载模组后，启动游戏可能会遇到缺失依赖的情况<br />Fabric表现为：
![Fabric缺失依赖](/img/crash/crash5.jpg)
Fabric端由于无法在JVM虚拟机创建缺失模组的窗口会直接导致崩溃，只能在日志查看缺失的模组<br />
Forge表现为：<br />
![Forge缺失依赖](/img/crash/crash6.jpg)
解决办法：<br />
如上图所示，高亮处标明了某个模组缺失了所需的依赖，图1为模组Iris缺失了一个0.6.x版本的sodium(钠)，0.6.x表示任意钠的0.6.几，如0.6.1版本，在启动器的下载资源界面下载对应版本的模组即可，Forge端同理

#### 待续...

## 署名 
  
 **编辑作者：** [基岩蛋](https://github.com/BedrockEgg) <br /> **创建时间：** 2024.12.9 <br />**最后编辑：** 2024.12.11