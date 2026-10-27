---
sidebar_position: 1
title: 脚本新特性
---

# 脚本新特性

本节介绍 OmniMorph 新增的 Lua 接口。它们建立在原有 Figura Lua API 之上，主要用于：

- 读取和控制 YSM 模型、部件、定位器、挂点与动画；
- 创建和管理 YSM 动作与动作轮盘；
- 声明模型专用设置控件；
- 在装饰脚本中保存实例状态、接收动画事件；
- 创建自定义粒子、拖尾、粒子运动与动态光源。

## 可用范围

| 接口 | 普通脚本 | 装饰脚本 | 说明 |
| ------------------------------------------------------- | -------- | ------------------------------ | ----------------------------------- |
| [`ysm_display`](/scripting/ysm-display)                 | 是       | 见接口页面                     | 只读查询玩家状态与已加载的 YSM 状态 |
| [`ysm_model`](/scripting/ysm-model) | 是 | 是 | YSM 模型查询与控制 |
| [`ysm_actions`](/scripting/ysm-actions) | 是 | 是 | YSM 动作与轮盘 |
| [`avatar_controls`](/scripting/avatar-controls) | 是 | 是（别名 `cosmetic_controls`） | 模型专用设置 |
| [`cosmetic_state`](/scripting/cosmetic-state) | 否 | 是 | 装饰实例状态 |
| [`cosmetic_animations`](/scripting/cosmetic-animations) | 否 | 是 | 装饰动画事件 |
| [`cosmetic_player`](/scripting/cosmetic-player) | 否 | 是 | 只读穿戴者查询 |
| [`particles` 扩展](/scripting/custom-particles) | 是 | 是 | 自定义粒子、拖尾、光源 |

装饰脚本运行在受限环境中，不会暴露其他作者的 Avatar、主机权限或全局玩家轮盘。

## YSM

-   [`ysm_display`](/scripting/ysm-display)：玩家状态与已加载的 YSM 动作、控制器状态。
- [`ysm_model`](/scripting/ysm-model)：部件、定位器、挂点、骨骼世界矩阵、纹理、动画、控制器、函数/事件、动作、控件、子实体。
- [`ysm_actions`](/scripting/ysm-actions)：动作定义、播放/停止、轮盘页/槽、键位绑定。

## 控件

- [`avatar_controls`](/scripting/avatar-controls)：控件类型、页面、范围、选项、值、回调、持久化。

## 装饰脚本

- [`cosmetic_state`](/scripting/cosmetic-state)：实例私有标量状态。
- [`cosmetic_animations`](/scripting/cosmetic-animations)：入口页与动画事件。
- [`cosmetic_player`](/scripting/cosmetic-player)：只读穿戴者查询。

## 粒子

- [自定义粒子](/scripting/custom-particles)：Billboard/Layered、精灵图、多图层、回调。
- [拖尾 Ribbon](/scripting/ribbon)：轨迹参数、UV、渐缩/渐隐、锚点历史。
- [粒子动态光源](/scripting/dynamic-lights)：光照等级、半径、间隔、LambDynamicLights。
- [粒子运动](/scripting/particle-motion)：free / orbit / helix / bezier / tracking。

## 限制

- [预算与限制](/scripting/budgets)：装饰、粒子、回调、光源与脚本执行。
- [常见问题与排错](/omnimorph/troubleshooting)：错误码与排查。

## 兼容性

原有 Figura Lua API 继续可用；新接口只在 OmniMorph 中存在。通用 API 见 [API 参考](/globals/Player)。
