---
sidebar_position: 3
title: 创建第一个形象
---

# 创建第一个形象

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

本页介绍如何用游戏内的创建向导生成一个形象或装饰，并把模型放进正确的目录。

## 进入创建界面

1. 进入一个世界（单人或多人都可以）。
2. 打开暂停菜单。
3. 点击 OmniMorph 入口按钮。
4. 在衣柜中点击“+”或“创建”按钮。

创建菜单提供三类入口：

| 入口 | 生成内容 | 适合 |
| --- | --- | --- |
| **创建 Figura 形象** | 含 `avatar.json` 的形象目录 | 使用 `.bbmodel` + Lua 的 Figura 模型 |
| **创建 YSM 形象** | 含 `ysm.json` 的模型目录 | 使用 YSM 几何/动画的模型 |
| **创建装饰** | 含 `cosmetic.json` 的装饰目录 | 叠加在基础模型上的帽子、尾巴、翅膀等 |

:::note
以下截图来自旧版界面，仅用于说明按钮位置；OmniMorph 的实际界面以游戏内为准。新版截图待补（MANUAL/PENDING）。
:::

<img src={require("@site/static/img/making/pause.png").default} width="800" alt="Minecraft 暂停菜单，右侧有 OmniMorph 入口按钮" />

<img src={require("@site/static/img/making/plus.png").default} width="800" alt="衣柜中的创建新形象按钮" />

## 创建 Figura 形象

1. 选择“创建 Figura 形象”。
2. 输入名称。
3. 按需要勾选：
   - **包含模型**：生成 `.bbmodel` 占位；
   - **玩家模型**：替换原版玩家模型；
   - **包含脚本**：生成 `.lua` 占位与事件模板；
   - **隐藏原版玩家**：替换玩家模型时常用。
4. 点击创建，打开生成的文件夹。

第一次创建时，建议同时包含模型和脚本，方便后续添加动画与交互。

### 模型

Figura 模型来自 [Blockbench](https://www.blockbench.net/)，扩展名为 `.bbmodel`。其他 3D 格式可以先导入 Blockbench 再导出。

- 模型制作见 [Blockbench 与骨架蒙皮](/start_here/BlockBench)。
- 如果模型要替换原版玩家，在向导中选择“玩家模型”。
- 如果要给自定义玩家模型做动画，建议把“包含模型”下的选项都勾选。

### 脚本

脚本使用 Lua 5.2，扩展名为 `.lua`。任何文本编辑器都能打开；推荐使用 [VSCode](https://code.visualstudio.com/)。

脚本可以实现自定义动画、尾巴/头发物理、自定义盔甲、交互等。更多内容见[动画教程](/tutorials/Animations)与 [API 参考](/globals/Player)。

## 创建 YSM 形象

1. 选择“创建 YSM 形象”。
2. 输入名称。
3. 创建后会生成一个含 `ysm.json` 的目录骨架。
4. 把 YSM 模型文件放入该目录，或直接使用模型自带的目录。

YSM 模型也可以不经过创建向导，直接把受支持格式的目录、ZIP 或加密 `.ysm` 放入 `avatars/`。

纯 YSM 模型不需要编写 Lua；需要脚本联动时使用 [`ysm_model`](/scripting/ysm-model) 与 [`ysm_actions`](/scripting/ysm-actions)。

## 创建装饰

1. 选择“创建装饰”。
2. 输入名称与分类。
3. 创建后会生成 `cosmetic.json` 与模型占位。
4. 在骨骼树中把装饰挂到基础模型或虚拟锚点上。

装饰的字段、挂载与预算见[装饰系统](/omnimorph/cosmetics)。

## avatar.json 与 avatar.png

- `avatar.json` 告诉 OmniMorph“这个文件夹是一个形象”，字段见 [Avatar 元数据](/tutorials/Avatar-Metadata)。
- `avatar.png` 会作为衣柜中的图标显示。

## 下一步

- [模型文件格式](/start_here/Avatar%20File%20Format)
- [衣柜总览](/start_here/Wardrobe)
- [Blockbench 与骨架蒙皮](/start_here/BlockBench)
- [脚本新特性](/scripting/)
