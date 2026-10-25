---
sidebar_position: 2
title: 安装与启动
---

# 安装与启动

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

本页介绍如何安装 OmniMorph、首次启动时需要确认的内容，以及模型和配置默认放在哪里。

## 前置条件

- Minecraft Java **26.1.2**。
- **Fabric** 模组加载器。
- **Java 25**（启动器与游戏使用同一 Java 版本）。
- 已安装对应版本的 Fabric API（如果构建要求）。

## 安装步骤

1. 打开 OmniMorph 的 GitHub Actions 构建页面，选择一次成功的 `fabric-build` 运行。
2. 下载该次运行产出的最终模组 JAR（文件名类似 `omni-morph-...-fabric-mc.jar`）。
3. 关闭 Minecraft。
4. 把 JAR 放入对应游戏实例的 `mods` 文件夹。
5. 使用 Java 25 启动游戏。

:::note
普通 Fabric 构建不需要 C++ 工具链。SIMD/GPU 硬件加速是可选能力，默认关闭；不可用时会回退 Java 渲染。
:::

## 首次启动

1. 进入一个世界（单人或多人都可以）。
2. 打开暂停菜单，确认出现 OmniMorph 入口按钮。
3. 打开衣柜，确认能看到“形象 / 装饰 / 配装 / 我的形象集”等入口。
4. 打开设置，按需要切换界面语言、服务器地址与硬件加速。

## 默认目录

首次启动后，OmniMorph 会在游戏目录下创建数据文件夹。默认位置：

```text
.minecraft/omnimorph/
├─ avatars/          # Figura 形象、YSM 模型
├─ cosmetics/        # 装饰
├─ export/           # 导出的 ZIP
├─ cache/            # 缓存（不要手动编辑）
└─ omni-morph.json   # 配置文件
```

- 模型文件夹可以在设置中修改；衣柜里的文件夹按钮会打开实际使用的目录。
- 配置保存在 `omni-morph.json`。
- 首次迁移时可以读取原有 `figura.json`，并保留旧配置文件。

更多说明见[目录、配置与迁移](/start_here/Directories)。

## 更新

- 用新 JAR 替换 `mods` 中的旧 JAR，重启游戏。
- 更新不会自动删除你的模型、装饰或配置。
- 如果更新后出现异常，先备份 `omnimorph` 文件夹，再查看[常见问题与排错](/omnimorph/troubleshooting)。

## 常见问题

**启动器提示 Java 版本不对？**
确认游戏实例和启动器都使用 Java 25；只改其中一个通常不够。

**游戏能启动但看不到 OmniMorph 按钮？**
检查 JAR 是否放入了当前实例的 `mods`，以及是否安装了正确版本的 Fabric API。

**模型文件夹在哪里？**
默认是 `.minecraft/omnimorph/avatars`；也可以在衣柜中点击文件夹按钮直接打开。

## 下一步

- [创建第一个形象](/start_here/Avatar)
- [模型文件格式](/start_here/Avatar%20File%20Format)
- [衣柜总览](/start_here/Wardrobe)
