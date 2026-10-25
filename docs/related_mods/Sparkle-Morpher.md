---
sidebar_position: 1
sidebar_label: Sparkle-Morpher (SPM)
title: Sparkle-Morpher (SPM)
description: 纯客户端自定义模型模组，可导入 Blockbench、Figura 与 YSM 模型。
---

# Sparkle-Morpher (SPM) — 花火火的变身器

Sparkle-Morpher（简称 SPM，中文名“花火火的变身器”）是一个纯客户端 Minecraft 自定义模型模组。你可以用自定义 3D 模型、纹理、动画与音效替换角色外观；在安装了 SPM 的玩家之间，还能在原版服、插件服或模组服上互相看见彼此的模型。

SPM 是独立于 Figura 的项目。本 wiki 收录它，是因为 SPM 可以导入用 Blockbench 制作的模型，也能读取 Figura 形象包里的模型与纹理，对已经参与 Figura 生态的模型作者很有用。

> **注意：** 本页介绍社区项目。Sparkle-Morpher 由 Micaftic 及贡献者维护，不属于 FiguraMC。SPM 会持续更新，以下内容为通用说明；具体构建与依赖要求请以 [SPM Releases 页面](https://github.com/sdf123098/Sparkle-Morpher/releases) 为准。

## 快速开始

1. 下载与你的 Minecraft 版本、模组加载器匹配的 SPM 构建。
2. 安装对应的 Fabric 或 NeoForge 配置；Fabric 构建还需要 Fabric API。
3. 把 SPM 的 `.jar` 放进客户端的 `mods` 文件夹，启动游戏。
4. 进入世界后按 **Alt + Y**，导入本地模型或从 Cloud 选择模型。
5. 选择纹理、调整模型设置并应用模型；按 **Z** 打开动画转盘。

只使用本地模型时不需要配置 Cloud。若要让另一名 SPM 玩家看见你的模型，双方需要连接同一个 Cloud 实例、登录并绑定当前游戏身份，并使用对方有权访问的模型。

## SPM 能做什么

- **自定义外观：** 替换玩家模型、切换模型自带的纹理、调整模型提供的设置。
- **模型库：** 从本地文件、目录或 URL 导入模型，并浏览、分组和收藏。
- **Cloud 模型库：** 浏览 SPM Cloud 中你有权访问的模型，包括自己的上传和公开模型。
- **动画：** 通过动画转盘播放模型自带的动作；受支持的模型可以使用动画控制器、`loop` / `once` / `hold` 播放模式与 Molang 表达式。
- **模型音效：** 播放模型自带的语音与音效，支持 Opus 音频。
- **更多模型目标：** 受支持的实体、载具与投射物也可以使用自定义模型，具体取决于模型与所选构建的联动支持。
- **多人外观共享：** 通过 SPM Cloud 共享模型，或使用可选的局域网 / P2P 方式。

## SPM 与 Figura、本 wiki 的关系

SPM 不是 Figura 的运行时，也不会执行 Figura 的 Lua 脚本。它可以读取 Figura 形象里的模型和纹理，但 Figura 中由脚本驱动的行为不会随之生效。

### Figura 形象会发生什么

Figura 形象通常是一个包含 `avatar.json`、一个或多个 `.bbmodel` 以及纹理的文件夹或 `.zip`。这种结构见 [Avatar File Format](../start_here/Avatar%20File%20Format) 页面。SPM 会把同时包含 `avatar.json` 和至少一个 `.bbmodel` 的 `.zip` 识别为 Figura 形象。

| Figura 形象的组成部分 | SPM 的处理方式 |
| --- | --- |
| `.bbmodel` 模型文件 | 作为 SPM 模型导入。 |
| 与模型放在一起的 PNG 纹理 | 随模型一起导入。 |
| Blockbench 动画 | 导入路径支持时会被导入。 |
| `avatar.json` | 用于识别形象包；Figura 的元数据与 customization 不会应用。 |
| Figura Lua 脚本 | 不会运行。 |
| Figura 动作轮盘、事件与仅脚本可实现的功能 | 不支持。 |

如果你的 Figura 形象依赖脚本，仍然可以在 SPM 中复用它的模型与纹理，但需要用 SPM 支持的动画、模型设置或 Molang 重新实现相应行为（在能力范围内）。Blockbench 的制作说明见 [Blockbench](../start_here/BlockBench) 页面。

> **警告：** 能导入某种格式，不代表原软件的所有功能都受支持。尤其是依赖 Lua 的 Figura 形象，在 SPM 中不会表现出相同行为。

### 代码来源与署名

SPM 的 `.bbmodel` 与 Figura 形象导入路径包含改编自 [Figura](https://github.com/FiguraMC/Figura) 的代码。SPM 仍是独立项目，与 FiguraMC 没有隶属关系。Figura 使用 [PolyForm Noncommercial License 1.0.0](https://github.com/FiguraMC/Figura/blob/1.20/LICENSE.md)；SPM 仓库列出了自身的许可证与第三方声明。若要再分发代码或模型，请同时核对两边的条款。

SPM 还使用 [OpenYSMDev/YSMParser](https://github.com/OpenYSMDev/YSMParser) 解析 YSM 模型。完整致谢见本页末尾。

## 运行环境与支持版本

SPM 是纯客户端模组。只需在需要显示 SPM 模型的客户端安装；Minecraft 服务器不需要安装 SPM、插件，也不需要改配置。

SPM 按 Minecraft 版本分别发布 Fabric 与 NeoForge 构建。受支持的 Minecraft 版本与所需的 Java 版本会随时间变化：较旧的版本线使用较旧的 Java，较新的版本线则要求更新的 Java。每个发行包都会列出它支持的 Minecraft 版本和所需 Java 版本，请选择同时匹配你的 Minecraft 版本与加载器的构建。

Fabric 构建需要 Fabric API。某些发行包可能要求额外依赖，请按对应发行包的说明安装。Fabric 与 NeoForge 是两个独立的下载，不要混用。

## 安装 SPM

1. 安装与 Minecraft 版本匹配的 Fabric 或 NeoForge。
2. 安装该发行包要求的 Java 版本。
3. 使用 Fabric 时安装 Fabric API。
4. 下载与 Minecraft 版本、加载器匹配的 SPM 构建。
5. 把 SPM 的 `.jar` 放进该游戏实例的 `mods` 文件夹。
6. 启动游戏并进入世界。首次使用后，SPM 会在 `config/sparkle_morpher/` 下创建文件夹。

如果安装了 Mod Menu，也可以从 Mod Menu 的条目进入 SPM 设置。若要把 SPM 与其他会替换玩家渲染的模组一起测试，建议使用单独的游戏实例。

## 打开模型面板

在世界中按 **Alt + Y** 打开模型管理面板。默认按键如下：

| 操作 | 默认按键 |
| --- | --- |
| 打开模型管理 | **Alt + Y** |
| 打开动画转盘 | **Z** |
| 锁定 / 解锁转盘 | **Alt + L** |
| 打开统一目标动作轮盘 | **G** |
| 开关动画调试覆盖层 | **Alt + B** |
| 播放额外动画 0–7 | 默认未绑定 |

按键可以在 **选项 → 控制 → Sparkle's Morpher** 中修改。部分操作需要当前模型提供对应动画才能使用。动画调试覆盖层主要面向模型作者；没有动画的模型可能不会显示内容。

面板按来源组织模型：

- **本地（Local）：** 在当前客户端导入的模型。
- **SPM Cloud：** 来自所选 Cloud 实例的模型。
- **社区 Cloud（Community Cloud）：** 选中社区实例时，该实例中的公开模型。

面板还提供分类、筛选、收藏、多选、模型详情、纹理、设置、下载与“导入 / 上传”等操作。在客户端内存允许时，模型卡片可以显示动态 3D 预览。

## 导入与管理模型

### 支持的格式

| 格式 | SPM 导入的内容 |
| --- | --- |
| `.ysm` | 带纹理与模型动画的 YSM 模型。该格式经过加密，不能在 SPM 中编辑。 |
| `.bbmodel` | Blockbench 项目中的立方体或网格几何、骨骼层级、纹理及受支持的动画。 |
| `.zip` | 按内容识别 YSM 目录、Blockbench 模型包、Figura 形象包与 Bedrock 模型包。 |
| Bedrock 几何 | `.geo.json` 或 `geometry.json`，以及可选的 `.animation.json` 文件与 PNG 纹理。 |
| `.gltf` / `.glb` | 本地 glTF 模型。若 `.gltf` 引用了外部资源，请把它们与模型放在一起。 |

带内嵌纹理的 `.bbmodel` 可以单独导入。如果模型引用了独立纹理文件，请把模型与纹理一起放进 `.zip`，方便 SPM 找到它们。

### 导入方式

- **拖放：** 把 `.ysm`、`.zip` 或 `.bbmodel` 文件拖到模型面板的任意位置。
- **导入 / 上传：** 打开导入界面，选择本地文件或目录。
- **资源站：** 打开模型来源，搜索、排序并排队下载。详见 [资源站与下载](#资源站与下载)。
- **本地模型库：** 导入后选择模型、选择纹理、调整设置并应用。

本地导入不会自动上传到 Cloud。上传是单独的操作，并且受所选 Cloud 实例的权限与限制约束。

### 模型存放位置

SPM 的文件位于 `config/sparkle_morpher/`：

| 文件夹 | 内容 |
| --- | --- |
| `custom/` | 你导入或手动添加的本地模型。 |
| `built/` | SPM 自带模型的只读副本。 |
| `auth/` | 已授权的模型。 |
| `export/` | 导出的文件。 |
| `cache/` | 生成的模型与渲染缓存。 |

使用模型面板中的文件夹按钮打开当前模型目录。手动添加文件后，在面板中点击 **重新加载本地模型**。不要编辑加密的 `.ysm` 文件；需要修改时请使用原始模型工程。

### 命名与大小

SPM 要求模型与纹理文件名使用小写英文字母、数字和下划线，其他名称可能在导入时被拒绝。过大的模型、纹理或音效文件也可能被客户端或 Cloud 实例拒绝；导入失败时面板会显示原因。

## 纹理与模型设置

一个模型可以提供多种纹理和模型专用设置。在面板中选择模型、选择纹理，然后打开 **模型设置** 配置纹理变体、开关、滑条、材质选项与 Molang 设置。这些选择按模型分别保存。

SPM 的全局设置包括：

- **常规：** 音量、HUD 玩家预览，以及隐藏自己或他人模型的选项。
- **渲染：** 渲染器选择、光影发光兼容、第一人称选项与 HUD 外观。
- **性能：** 面向大型模型的性能预设与限制。
- **缓存：** 按需加载、模型常驻与缓存上限。
- **网络与同步：** 隐私模式，以及 Cloud 与 P2P 的优先级。
- **Cloud 实例与账户：** 登录、实例选择、身份与权限。
- **资源与下载：** 已保存的来源与下载队列。

隐私模式用于仅本地使用。它会阻止 Cloud 与 P2P 同步，因此在开启期间其他玩家不会收到你的模型。

## 动画、音效与转盘

按 **Z** 打开动画转盘。转盘会列出当前模型提供的动作。受支持的模型可以使用动画控制器、`loop` / `once` / `hold` 播放模式与 Molang 表达式。按 **Alt + L** 锁定或解锁转盘。

转盘编辑器可以新建分组、调整动作顺序并保存自定义布局。额外动画 0–7 可以在控制设置中绑定按键，无需打开转盘即可直接播放。

模型自带的语音与音效通过模型音频系统播放。音量与转盘提示消息可以在设置中调整。**G** 打开的统一目标动作轮盘可以为受支持的假人与女仆目标提供动作；是否可用取决于模型。

## 与其他玩家共享模型

### Cloud 共享

Cloud 共享使用 SPM Cloud——一个在客户端之间传递共享模型的可选服务，不经过 Minecraft 服务器。要让另一名玩家看见你的模型，双方都需要安装 SPM、连接同一个 Cloud 实例、登录并绑定当前游戏身份、拥有该模型的访问权（公开或明确授权）、关闭隐私模式，并使用兼容的客户端协议。

仅在本地导入的模型不会自动上传或共享。Cloud 服务中断时，共享与新模型下载可能失败，但本地模型仍然可用。

实例、账户、模型库、访问控制、自建部署与故障排查详见 [SPM Cloud](./Sparkle-Morpher-Cloud)。

### 局域网与 P2P 房间

SPM 还提供可选的 P2P 方式，适用于同一局域网或共享 VPN 的玩家：

- 双方都需要进入世界，并关闭隐私模式。
- 在默认网络预设下，SPM 可以自动连接局域网 / VPN 对端。
- 其他情况下，可以创建房间并把邀请发给对方，或粘贴邀请加入。邀请中包含模型端点，只应发送给可信的人。
- P2P 共享的是符合条件的本地模型；Cloud 模型不会通过 P2P 转发。
- 互联网与隧道线路目前显示为规划中的选项；现阶段请使用局域网 / VPN 方式。

P2P 是可选功能。对于不在同一局域网的玩家，SPM Cloud 是更简单的共享方式。

### 服务器看到什么

模型共享发生在 SPM 客户端与 Cloud 或 P2P 服务之间，不经过 Minecraft 服务器。服务器继续处理游戏逻辑。替换模型只改变客户端渲染，不改变碰撞箱、服务器规则或权限。

服务器不需要安装 SPM。只在需要自定义模型的客户端安装即可。

## 资源站与下载

资源站按 URL 打开模型来源，支持保存来源、搜索、排序、排队、取消与重试下载，并在可用时显示动态预览。下载只针对你明确选择的模型。

部分来源为受支持的主机提供加速线路。你可以在资源站或资源设置中切换线路；原生线路作为回退。

资源站内容来自第三方。使用或再分发前，请检查模型的作者、来源与许可证。

## 更多模型目标

当模型与构建支持时，SPM 可以替换的不只是玩家模型：

- 受支持的实体与载具。
- 受支持的投射物。
- 假人与女仆（需要相应联动可用）。
- Cloud 实例管理的目标与载具绑定。

是否可用取决于模型自身的目标定义、Minecraft 版本、加载器以及构建中的可选联动。

## 兼容性与性能

SPM 为多个模组提供可选联动，包括 Better Combat、Curios、Create、Iris / Sodium、Touhou Little Maid、Punchy、ParCool、SlashBlade、TACZ 与 SWEM 等。是否可用取决于 Minecraft 版本、加载器以及其他模组的版本。使用 SPM 本身不需要安装这些模组。

光影包会改变自定义模型的观感。如果发光或透明度效果不正确，请检查 SPM 设置中的光影兼容选项以及光影包自身的设置。

SPM 与 Figura 都会替换玩家渲染。SPM 不需要 Figura，使用 SPM 的 Figura 导入功能时也不需要同时安装 Figura。若要测试两者同时运行，请使用单独的游戏实例，并查看 SPM 的 issue tracker 中已知的冲突。

如果模型导致卡顿或内存占用过高，可以尝试性能预设、降低缓存或常驻上限、关闭动态预览，或改用更简单的渲染器。SPM 设置中提供原生与 Java 渲染器选项；默认的自动选择是最安全的起点。

## 常见问题排查

| 问题 | 检查项 |
| --- | --- |
| 模型面板打不开 | 确认已进入世界、SPM 出现在模组列表中，并检查 Alt + Y 是否被其他模组占用。 |
| 导入失败 | 检查格式、zip 结构、文件名、文件大小，以及独立纹理是否与模型放在一起。查看面板错误与游戏日志。 |
| 模型没有纹理 | 在面板中选择正确的纹理。若纹理是外部文件，请把它放在模型旁边或同一个 zip 内。 |
| 模型没有动画 | 模型可能没有提供动作。检查转盘与模型自带说明。 |
| 游戏内存不足 | 降低性能预设与缓存上限，使用更小的模型，或关闭他人模型与预览。 |
| Figura 形象的脚本没有反应 | SPM 不运行 Figura Lua，只导入模型、纹理与受支持的动画。 |

## 常见问题

### Minecraft 服务器需要安装 SPM 吗？

不需要。SPM 是纯客户端模组，只需在需要显示自定义模型的客户端安装。

### 不配置 Cloud 能使用 SPM 吗？

可以。本地模型不需要 Cloud；Cloud 只用于基于 Cloud 的外观共享与模型浏览。服务本身的介绍见 [SPM Cloud](./Sparkle-Morpher-Cloud)。

### SPM 会取代 Figura 吗？

不会。SPM 是独立模组，有自己的模型处理、Cloud 与 P2P 共享。它可以导入部分 Figura 形象资源，但不运行 Figura 脚本。

### 能在 SPM 里使用 Figura 形象吗？

可以导入形象的模型与纹理，通常需要打包成包含 `avatar.json` 与 `.bbmodel` 的 `.zip`。Figura 的 Lua 行为不会被包含。

### 使用模型会改变碰撞箱或权限吗？

不会。游戏逻辑由服务器处理，SPM 只改变客户端渲染。

### 我的模型存放在哪里？

在 `config/sparkle_morpher/` 下，导入的模型主要在 `custom/`。使用模型面板中的文件夹按钮可以打开当前目录。

## 致谢

- Sparkle-Morpher 由 Micaftic 及贡献者维护。
- `.bbmodel` 与 Figura 形象导入路径包含改编自 [Figura](https://github.com/FiguraMC/Figura) 的代码。
- YSM 模型解析使用 [OpenYSMDev/YSMParser](https://github.com/OpenYSMDev/YSMParser)（MIT）。
- 原生渲染基于 [OpenYSMDev/openysm.cpp](https://github.com/OpenYSMDev/openysm.cpp)；具体源版本与构建记录见仓库的 `NATIVE_SOURCES.md`。
- Blockbench 可从 [blockbench.net](https://www.blockbench.net/) 获取。
- SPM 仓库列出了自身许可证；随附的第三方组件与模型资源遵循各自条款。

## 相关链接

- [Sparkle-Morpher 仓库](https://github.com/sdf123098/Sparkle-Morpher)
- [下载与发布说明](https://github.com/sdf123098/Sparkle-Morpher/releases)
- [问题反馈](https://github.com/sdf123098/Sparkle-Morpher/issues)
- [SPM Cloud 后端](https://github.com/sdf123098/spm-cloud)
- [Discord](https://discord.gg/3KqK7USF39)
- [Telegram](https://t.me/sparklemorpher)
- QQ 群：1104823534

相关页面：

- [SPM Cloud](./Sparkle-Morpher-Cloud)

相关 Figura wiki 页面：

- [Avatar File Format](../start_here/Avatar%20File%20Format)
- [Blockbench](../start_here/BlockBench)
- [Multiplayer](../start_here/Multiplayer)（介绍 Figura Cloud；SPM Cloud 是独立服务）
