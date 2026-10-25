---
sidebar_position: 1
title: OmniMorph 是什么
---

# OmniMorph 是什么

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

OmniMorph 是基于 [Figura](https://github.com/FiguraMC/Figura) 的 Minecraft Java 客户端模型模组。它在保留 Figura Avatar、Lua、权限和界面体系的基础上，加入了 **YSM 模型支持**、**统一衣柜**、**装饰与配装**、**模型库与云端同步**等能力。

## 与 Figura 的关系

- **兼容 Figura**：Figura Avatar 的目录结构、`avatar.json`、`.bbmodel`、`.lua`、`.ogg` 与 Lua API 继续可用。
- **新增 YSM**：同一衣柜可以加载 YSM 目录、ZIP 与加密 `.ysm` 文件；纯 YSM 模型无需编写 Lua 即可运行。
- **新增界面**：形象、装饰、配装、我的形象集四个入口，以及模型库、装饰动画、模型专用设置等页面。
- **新增脚本接口**：`ysm_model`、`ysm_actions`、`avatar_controls`、`cosmetic_state`、`cosmetic_animations` 等，详见[脚本新特性](/scripting)。
- **配置迁移**：首次启动可读取原有 `figura.json`，并保留旧配置文件。

## 支持的内容

| 类型 | 支持形式 |
| --- | --- |
| Figura 形象 | 目录或 ZIP，根目录含 `avatar.json` |
| YSM 模型 | 受支持格式的目录、ZIP、加密 `.ysm` |
| 装饰 | 含 `cosmetic.json` 的目录或 ZIP |
| 脚本 | Lua 5.2（Figura 运行时） |
| 表达式 | Molang（YSM 运行时） |
| 云端 | Protobuf（默认）或 Figura Cloud（兼容） |

## 运行环境

| 项目 | 版本 |
| --- | --- |
| Minecraft Java | 26.1.2 |
| 模组加载器 | Fabric |
| Java | 25 |
| 模组版本 | 1.0.0-alpha.4.1 |

## 能力边界

- 这是客户端模组；多人资源分发与状态同步需要兼容的后端服务。
- 不同模型格式和版本的能力可能不同；模型自身的脚本、依赖资源、权限与后端策略会影响可用功能。
- 真实 Minecraft 双客户端、GUI/GPU、光照与性能验收仍以实际测试为准；文档不会把未验证的行为写成“已完成”。

## 下一步

- [安装与启动](/start_here/Install)
- [创建第一个形象](/start_here/Avatar)
- [模型文件格式](/start_here/Avatar%20File%20Format)
- [衣柜总览](/start_here/Wardrobe)
