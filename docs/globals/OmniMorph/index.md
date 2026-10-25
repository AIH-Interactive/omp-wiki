---
sidebar_position: 1
title: OmniMorph API
---

# OmniMorph API

OmniMorph 在 Figura 原有 API 之上新增了以下全局对象与类型。方法名、参数名与枚举值保持英文，说明与示例为中文。

## 全局对象

| 全局 | 说明 | 详细文档 |
| --- | --- | --- |
| `ysm_model` | YSM 模型、部件、定位器、挂点、动画、纹理、动作、控件、子实体 | [`ysm_model`](/scripting/ysm-model) |
| `ysm_actions` | YSM 动作、轮盘页/槽、键位绑定 | [`ysm_actions`](/scripting/ysm-actions) |
| `avatar_controls` | 模型专用设置控件 | [`avatar_controls`](/scripting/avatar-controls) |
| `cosmetic_controls` | 装饰脚本中的控件别名 | [`avatar_controls`](/scripting/avatar-controls) |
| `cosmetic_state` | 装饰实例标量状态 | [`cosmetic_state`](/scripting/cosmetic-state) |
| `cosmetic_animations` | 装饰动画入口页与事件 | [`cosmetic_animations`](/scripting/cosmetic-animations) |

## 类型

| 类型 | 说明 | 详细文档 |
| --- | --- | --- |
| `ysm_model_part` | YSM 部件的位置/旋转/缩放/可见性/世界矩阵 | [`ysm_model`](/scripting/ysm-model) |
| `ysm_locator` | YSM 定位器 | [`ysm_model`](/scripting/ysm-model) |
| `ysm_attachment_point` | YSM 挂点 | [`ysm_model`](/scripting/ysm-model) |
| `ysm_action` | YSM 动作定义 | [`ysm_actions`](/scripting/ysm-actions) |
| `avatar_control` | 控件定义 | [`avatar_controls`](/scripting/avatar-controls) |
| `avatar_control_type` | 控件类型 | [`avatar_controls`](/scripting/avatar-controls) |
| `cosmetic_player` | 装饰脚本中的只读穿戴者 | [`cosmetic_player`](/scripting/cosmetic-player) |

## 粒子扩展

| 能力 | 说明 | 详细文档 |
| --- | --- | --- |
| 自定义粒子 | `newCustomParticle`、精灵图、图层、回调 | [自定义粒子](/scripting/custom-particles) |
| 拖尾 | `setRibbon`、`setAnchorTrail` | [拖尾 Ribbon](/scripting/ribbon) |
| 动态光源 | `setDynamicLight`、等级/半径/间隔 | [粒子动态光源](/scripting/dynamic-lights) |
| 运动 | `setMotion` 的 free/orbit/helix/bezier/tracking | [粒子运动](/scripting/particle-motion) |

## 相关页面

- [脚本新特性](/scripting/)
- [预算与限制](/scripting/budgets)
- [API 参考](/globals/Player)
