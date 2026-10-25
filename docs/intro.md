---
sidebar_position: 1
slug: /
title: OmniMorph Wiki
---

# OmniMorph Wiki

欢迎来到 OmniMorph 中文文档。OmniMorph 是基于 [Figura](https://github.com/FiguraMC/Figura) 的 Minecraft Java 客户端模型模组，在统一的衣柜、预览和交互界面中使用 **Figura Avatar** 与 **YSM 模型**。

当前文档对应 OmniMorph `1.0.0-alpha.4.1`（Minecraft 26.1.2 / Fabric / Java 25）。全站正文已完成中文化；部分 API 页面仍在补充更易懂的说明，未完成处会标注状态。

## 从这里开始

| 我是…… | 建议阅读 |
| --- | --- |
| 刚安装，想先看到模型 | [创建形象](/start_here/Avatar) → [模型文件格式](/start_here/Avatar%20File%20Format) |
| 想管理多个模型与装扮 | [OmniMorph 功能](/omnimorph/) |
| 想写 Lua 脚本 | [脚本新特性](/scripting/) → [API 参考](/globals/Player) |
| 想了解多人游戏 | [多人游戏与云端](/start_here/Multiplayer) |

## OmniMorph 新增了什么

- **统一模型加载**：同一衣柜加载 Figura 形象与 YSM 模型，支持目录、ZIP 与加密 `.ysm`。
- **衣柜与配装**：形象、装饰、配装、我的形象集四个入口；支持多实例装饰、骨骼挂载、虚拟锚点与装扮预设。
- **模型库与云端**：上传、分类、搜索、收藏、下载、装备、授权、举报、申诉与回收站。
- **YSM 与 Molang**：YSM 几何、动画控制器、Molang 表达式、纹理、声音、控件与动作轮盘。
- **Lua 新接口**：`ysm_model`、`ysm_actions`、`avatar_controls`、`cosmetic_state`、`cosmetic_animations`，以及自定义粒子、拖尾与动态光源。
- **多人同步**：资源分发与动态状态同步，支持 Protobuf 与 Figura Cloud 协议。
- **可选硬件加速**：自动 / 仅 SIMD / GPU，失败时回退 Java。

## 文档状态说明

| 标记 | 含义 |
| --- | --- |
| 稳定 | 当前版本可用，行为已由源码或验收记录支持 |
| 预览 | 功能存在，但界面或行为可能变化 |
| 依赖后端 | 需要兼容后端与相应能力开关 |
| 2.0 占位 | 界面存在但业务尚未实现 |

:::note
本 Wiki 正在全文中文化。若你在页面中看到英文正文，说明该页尚未完成迁移；API 名称、枚举值与代码始终保持英文。
:::

## 相关链接

- [OmniMorph 项目](https://github.com/AIH-Interactive/omni-morph)
- [Figura 上游项目](https://github.com/FiguraMC/Figura)
- [问题反馈](https://github.com/AIH-Interactive/omni-morph/issues)
