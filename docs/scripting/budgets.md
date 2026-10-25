---
sidebar_position: 12
title: 预算与限制
---

# 预算与限制

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

OmniMorph 对装饰、粒子、回调、光源与脚本执行设置预算。预算由客户端硬上限与服务器 `outfit.limits` 共同决定，服务器只能收紧。

## 装饰与配装

| 项目 | 默认上限 |
| --- | ---: |
| 装饰实例 | 32 |
| 虚拟锚点 | 128 |
| 层级深度 | 64 |
| 单资源节点 | 8192 |
| 整套节点 | 32768 |
| 内部覆盖 | 1024 |
| 配置字节 | 65536 |
| 拖尾 | 8 条 |
| 每条拖尾采样 | 256 |
| 导出骨骼 | 受 `outfit.limits` 限制 |
| 控制项 / Lua 状态 | 受 `outfit.limits` 限制 |
| 预设数量 | 受 `outfit.limits` 限制 |

位置各轴 ±4096，旋转各轴 ±36000，缩放 0.001–64。

## 粒子

| 项目 | 说明 |
| --- | --- |
| 存活粒子数量 | 受穿戴者权限与预算限制 |
| 层数 | Layered 每层一个面 |
| 面数 | 一个实际提交多边形面计 1 |
| 顶点 | 按实际提交扣除 |
| 回调 | 每 tick / 每帧有独立次数 |
| 动态光源 | 每穿戴者上限；超限保留前 N 个 |
| 拖尾槽位 | 与控制器 Trail 共用账本 |

## 脚本

| 项目 | 说明 |
| --- | --- |
| Lua 指令 | 初始化/ tick / 渲染分别有预算 |
| 字符串 | 状态字符串有 UTF-8 字节上限 |
| 回调 | 粒子与动画事件共用回调次数 |
| 递归/错误 | 脚本错误会停止运行时并报告 |

## 错误语义

- 无效值、循环依赖、超预算会**明确拒绝**；
- 不会静默截断或自动缩小；
- 部分粒子/光源超限时，未超限的部分仍正常；
- 配置写入失败会回滚，不留下半套状态。

常见错误：

| 错误 | 含义 |
| --- | --- |
| `INVALID_OUTFIT_CONFIGURATION` | 配装配置无效（骨骼/引用/预算） |
| `OUTFIT_INSTANCE_MISSING` | 实例已被移除或失效 |
| `COSMETIC_STATE_VALUE` | 状态值类型不允许 |
| `PARTICLE_TICK_CALLBACKS_DISABLED` | tick 回调预算为 0 |
| `PARTICLE_FRAME_CALLBACKS_DISABLED` | 帧回调预算为 0 |
| `CALLBACK_TICK_LIMIT` / `CALLBACK_FRAME_LIMIT` | 回调次数用尽 |
| `ANIMATION_EVENT_QUEUE_LIMIT` | 动画事件队列满 |

## 排查“为什么没显示”

1. 确认粒子/装饰已成功创建（`isAlive()`、界面状态）。
2. 检查数量/层数/面数/顶点是否超限。
3. 检查动态光源上限与 `lightInterval`。
4. 检查回调预算与错误字段。
5. 检查服务器 `outfit.limits` 是否比默认更小。
6. 查看日志中的明确错误。

## 相关页面

- [装饰系统](/omnimorph/cosmetics)
- [自定义粒子](/scripting/custom-particles)
- [粒子动态光源](/scripting/dynamic-lights)
- [常见问题与排错](/omnimorph/troubleshooting)
