---
sidebar_position: 4
title: 模型文件格式
---

import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

# 模型文件格式

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

本页说明 Figura 形象、YSM 模型和装饰在磁盘上的组织形式。模型默认放在 <code>&lt;minecraftDirectory&gt;/omnimorph/avatars</code>，装饰放在 <code>&lt;minecraftDirectory&gt;/omnimorph/cosmetics</code>。

## Figura 形象

一个 Figura 形象是“包含 <Emoji icon="file/json"/> <code>avatar.json</code> 的文件夹或 ZIP”。只要存在 <code>avatar.json</code>，衣柜就会把它识别为形象。

<FileTreeRoot>
  <FileTreeNode label="avatars">
    <FileTreeNode label="&lt;AvatarName&gt;">
      <FileTreeNode label="avatar.json" icon="file/json" />
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

<Emoji icon="file/json"/> <code>avatar.json</code> 是内容为 JSON 对象的文本文件，字段见 [Avatar 元数据](/tutorials/Avatar-Metadata)，可以为空。它存在即表示“这是一个形象”。

如果形象目录中有 <Emoji icon="file/texture"/> <code>avatar.png</code>，它会作为衣柜中的图标显示。

<FileTreeRoot>
  <FileTreeNode label="avatars">
    <FileTreeNode label="&lt;AvatarName&gt;">
      <FileTreeNode label="avatar.json" icon="file/json" />
      <FileTreeNode label="avatar.png" icon="file/texture" />
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

其余文件可以放在 <code>avatar.json</code> 同级，或放在子文件夹中：

- <Emoji icon="file/lua"/> <code>.lua</code>：脚本文件，形象加载时执行。
- <Emoji icon="file/bbmodel"/> <code>.bbmodel</code>：模型文件，最低支持 Blockbench 4.0。
- <Emoji icon="file/ogg"/> <code>.ogg</code>：声音文件，必须是 Vorbis 编码。

:::note
散落在形象目录中的纹理文件不会自动加载。纹理必须在 <code>.bbmodel</code> 中注册后才会被使用。
:::

所有以 <code>.</code> 开头的文件都会被忽略，也不会被脚本访问。

## YSM 模型

YSM 模型可以以三种形式放入 <code>avatars</code>：

| 形式 | 识别方式 | 说明 |
| --- | --- | --- |
| 文件夹 | 根目录含 <code>ysm.json</code>（新版）或 <code>main.json</code>（旧版） | 可包含几何、动画、纹理、声音、动作与控件 |
| ZIP | ZIP 根目录含上述文件 | 便于分享 |
| 加密 <code>.ysm</code> | 单个文件 | 由受支持的 YSM 工具导出，客户端不解密到磁盘 |

一个最小的 YSM 文件夹结构如下（旧版模型用 <code>main.json</code> 代替 <code>ysm.json</code>）：

<FileTreeRoot>
  <FileTreeNode label="avatars">
    <FileTreeNode label="&lt;ModelName&gt;">
      <FileTreeNode label="ysm.json" icon="file/json" />
      <FileTreeNode label="models" icon="file/folder" />
      <FileTreeNode label="textures" icon="file/folder" />
      <FileTreeNode label="animations" icon="file/folder" />
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

YSM 模型可以自带：

- 几何与纹理；
- 动画与动画控制器；
- Molang 表达式；
- 模型控件（模型专用设置）；
- 动作轮盘动作；
- 声音与语言资源。

纯 YSM 模型无需编写 Lua 即可加载运行。需要与 Lua 联动时，使用 [`ysm_model`](/scripting/ysm-model) 与 [`ysm_actions`](/scripting/ysm-actions)。

如果要自己制作 YSM 模型，请参考 [YSM Wiki 入门](https://ysm.cfpa.team/wiki/intro/)。

:::note
不同 YSM 模型版本的能力可能不同；缺少的文件或不受支持的格式会在加载时报告。加密 <code>.ysm</code> 的具体支持范围以当前构建为准。
:::

## 装饰

一个装饰是“包含 <code>cosmetic.json</code> 的文件夹或 ZIP”，放在 <code>cosmetics</code> 下。

<FileTreeRoot>
  <FileTreeNode label="cosmetics">
    <FileTreeNode label="&lt;CosmeticName&gt;">
      <FileTreeNode label="cosmetic.json" icon="file/json" />
      <FileTreeNode label="&lt;model&gt;.bbmodel" icon="file/bbmodel" />
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

<code>cosmetic.json</code> 至少应声明：

- <code>schema_version</code>：当前为 1；
- <code>name</code>、<code>authors</code>、<code>version</code>、<code>description</code>；
- <code>category</code>：Head / Back / Feet / Legs / Face / Hair / Tail / Trail / Wings；
- <code>cosmetic_anchor</code>：默认挂点名称；
- 骨骼能力：<code>has_bones</code>、<code>display_bones</code>、<code>edit_bones</code>；
- <code>supported_bases</code>：VANILLA / FIGURA / YSM；
- 可选 <code>exported_bones</code>、<code>editable_bones</code>、<code>default_transform</code>。

完整字段与挂载方式见[装饰系统](/omnimorph/cosmetics)。

## 缓存格式

OmniMorph 会在 <code>cache/</code> 中使用内部格式保存下载和预览资源：

| 扩展名 | 用途 |
| --- | --- |
| <code>.oma</code> | 完整形象缓存 |
| <code>.omc</code> | 形象集/预览容器 |
| <code>.oms</code> | 装饰缓存 |

这些文件带压缩、加密或校验，**不是作者源文件**。不要手动编辑、解包或当作模型分享。

## 体积与权限

- 模型、纹理、脚本、粒子、声音都受权限与预算限制。
- 模型复杂度、纹理尺寸、脚本指令数等会显示在权限/模型统计中。
- 超过服务器或本地限制时，模型可能无法加载或部分功能被拒绝。

## 相关页面

- [创建第一个形象](/start_here/Avatar)
- [目录、配置与迁移](/start_here/Directories)
- [装饰系统](/omnimorph/cosmetics)
- [YSM 模型支持](/omnimorph/ysm)
