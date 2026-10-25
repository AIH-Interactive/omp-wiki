---
sidebar_position: 18
title: 从 Figura 迁移
---

# 从 Figura 迁移

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

OmniMorph 以 Figura 为基础，绝大多数 Figura 形象、脚本和设置可以继续使用。本页说明迁移时会变化的部分。

## 自动迁移

首次启动时：

1. 读取原有 `figura.json`；
2. 保留旧配置文件；
3. 使用 `omnimorph` 作为默认数据目录；
4. 兼容读取旧目录中的形象与资源。

:::note
迁移只处理配置与目录，不会把旧版云端资源自动转成 OmniMorph 模型库条目，也不会自动上传模型。
:::

## 会保留的内容

- Figura 形象目录与 ZIP；
- `avatar.json`、`.bbmodel`、`.lua`、`.ogg`；
- Lua 脚本与大部分 API；
- 权限/信任设置；
- 动作轮盘、纸娃娃、名称显示等设置。

## 会变化的内容

| 项目 | 变化 |
| --- | --- |
| 数据目录 | 默认改为 `omnimorph` |
| 配置文件名 | `omni-morph.json` |
| 界面入口 | OmniMorph 衣柜，新增形象/装饰/配装/形象集 |
| 云端 | 可选择 Protobuf 或 Figura Cloud |
| 模型库 | 新增上传、授权、举报、回收站 |
| 脚本 | 新增 `ysm_model`、`ysm_actions`、`avatar_controls` 等 |
| 模型格式 | 新增 YSM 与装饰 |

## 迁移步骤

1. 备份整个 `figura` 与 `omnimorph` 文件夹。
2. 安装 OmniMorph，启动一次。
3. 确认旧形象出现在衣柜。
4. 逐个启用，检查模型、纹理、脚本与声音。
5. 需要多人展示的模型，重新上传或发布。
6. 需要分享的装饰/配装，保存预设并发布。

## 兼容性检查

| 检查项 | 说明 |
| --- | --- |
| 模型 | `.bbmodel` 版本、骨骼、纹理 |
| 脚本 | API 是否存在、是否使用受限能力 |
| 权限 | 模型复杂度、纹理、粒子、声音 |
| 云端 | 协议、账号、后端能力 |
| 渲染 | 第一人称、光影、动态光源 |

## 回滚

如果迁移后需要回到 Figura：

1. 关闭游戏并备份 `omnimorph`；
2. 移除 OmniMorph JAR；
3. 恢复原 Figura 配置与目录；
4. 启动游戏验证。

OmniMorph 不会删除旧 `figura.json`，但旧目录中的资源可能已被新目录引用；回滚前请确认文件仍在。

## 常见问题

**旧形象不显示？**
检查是否在 `omnimorph/avatars`，或旧目录是否可读；确认模型格式未变化。

**脚本报 API 不存在？**
对照 [API 参考](/globals/Player)；OmniMorph 可能移除了部分旧接口或改变了行为。

**云端看不到旧模型？**
旧云端资源不会自动迁移；需要重新上传或让后端导入。

## 相关页面

- [安装与启动](/start_here/Install)
- [目录、配置与迁移](/start_here/Directories)
- [模型文件格式](/start_here/Avatar%20File%20Format)
- [常见问题与排错](/omnimorph/troubleshooting)
