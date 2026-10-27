---
sidebar_position: 6
title: Molang 表达式与控制器
---

# Molang 表达式与控制器

> 状态：稳定（YSM 运行时）
> 适用版本：OmniMorph 1.0.0-alpha.5

Molang 是 YSM 模型使用的表达式语言，用来控制动画、姿态、材质与交互。OmniMorph 在客户端内置 Molang 运行时，并把 YSM 的查询、变量与控制器接入游戏状态。

## Molang 与 Lua 的分工

| 用途 | 推荐 |
| ---------------------------------------- | --------------------------------- |
| 模型姿态、骨骼旋转、动画混合 | Molang |
| 动画控制器状态与过渡 | Molang |
| 与玩家输入、物品、世界状态联动的模型动画 | Molang |
| 复杂逻辑、网络、文件、UI、粒子 | Lua |
| 读取/控制 YSM 模型与动作 | Lua（`ysm_model`、`ysm_actions`） |

两者可以互相配合：Lua 修改控件值或触发动作，Molang 通过 `query.ysm_control*` / `query.ysm_action_*` 读取。

## 表达式基础

Molang 表达式可以包含：

- 数字、布尔值、字符串；
- 四则运算与比较；
- 三元表达式 `条件 ? 值1 : 值2`；
- 数学函数，例如 `math.sin`、`math.clamp`、`math.lerp`；
- 查询 `query.*`；
- OmniMorph/YSM 变量 `ysm.*`；
- 临时变量 `t.*`、变量 `v.*`。

示例：

```text
math.clamp(ysm.head_yaw / 45, -1, 1)
query.ysm_control_bool('tail_enabled') ? 1 : 0
query.ysm_action_active('wave') ? 1 : 0
ysm.is_first_person ? 0 : 1
```

:::note
不同 YSM 模型版本支持的 Molang 语法可能不同。以模型自带的动画/控制器文件为准；不受支持的函数会返回不可用绑定。
:::

## 查询（query）

### OmniMorph 扩展查询

| 查询 | 返回 | 说明 |
| -------------------------------- | ----------- | -------------------------- |
| `query.ysm_control('id')` | 数字/字符串 | 读取控件当前值 |
| `query.ysm_control_bool('id')` | 0/1 | 把控件值转为布尔 |
| `query.ysm_control_number('id')` | 数字 | 读取数值控件 |
| `query.ysm_control_enum('id')` | 数字 | 返回选项索引；找不到时为 0 |
| `query.ysm_action_active('id')` | 0/1 | 动作是否正在播放 |
| `query.ysm_action_time('id')` | 秒 | 动作已播放时间 |

`query.control('id')` 与 `query.avatar_control('id')` 也可读取控件值，主要用于兼容。

### 常用标准查询

| 查询 | 说明 |
| ----------------------------------------------- | ------------------ |
| `query.anim_time` | 当前动画时间（秒） |
| `query.life_time` | 模型存活时间（秒） |
| `query.delta_time` | 距上一帧的时间 |
| `query.time_of_day` | 世界时间 |
| `query.is_first_person` | 是否第一人称 |
| `query.is_sleeping` | 是否睡眠 |
| `query.is_riding` | 是否骑乘 |
| `query.is_using_item` | 是否使用物品 |
| `query.is_swinging` | 是否挥动 |
| `query.all_animations_finished` | 所有动画是否结束 |
| `query.any_animation_finished` | 是否有动画结束 |
| `query.ground_speed` | 地面速度 |
| `query.vertical_speed` | 垂直速度 |
| `query.health` / `query.max_health` | 生命值 |
| `query.has_helmet` / `query.has_chest_plate` 等 | 装备是否存在 |

完整标准查询列表以 YSM 文档与 `QueryVariables.java` 为准。

## 变量（ysm）

OmniMorph 把 YSM 常用状态暴露为 `ysm.*` 变量，可直接在表达式中读取：

| 变量 | 说明 |
| --------------------------------------------- | ---------------- |
| `ysm.head_yaw` | 头部偏航角 |
| `ysm.head_pitch` | 头部俯仰角 |
| `ysm.person_view` | 当前视角类型 |
| `ysm.is_first_person` | 是否第一人称 |
| `ysm.first_person` | 第一人称标记 |
| `ysm.is_sleep` | 是否睡眠 |
| `ysm.is_sneak` | 是否潜行 |
| `ysm.is_passenger` | 是否乘客 |
| `ysm.input_vertical` / `ysm.input_horizontal` | 移动输入 |
| `ysm.xxa` / `ysm.yya` / `ysm.zza` | 原始移动输入分量 |
| `ysm.ground_speed2` | 地面速度 |
| `ysm.elytra_rot_x/y/z` | 鞘翅旋转 |
| `ysm.has_elytra` | 是否有鞘翅 |
| `ysm.texture_name` | 当前纹理名 |
| `ysm.entity_type` | 实体类型 |
| `ysm.weather` | 天气 |
| `ysm.dimension_name` | 维度名 |
| `ysm.block_light` / `ysm.sky_light` | 光照 |
| `ysm.food_level` | 饥饿值 |
| `ysm.armor_value` | 护甲值 |
| `ysm.hurt_time` | 受伤时间 |
| `ysm.swing_time` / `ysm.attack_time` | 挥动/攻击进度 |

:::note
变量名区分大小写，统一使用小写与下划线。无法解析的变量会返回不可用绑定，不会让整个模型崩溃。
:::

alpha.5 补充了参考实现中缺失的 99 个 `ysm.*` 查询名（包括武器、三叉戟、长矛和重锤相关查询），并支持 Bedrock `this` 关键字；同时调整 `math.*`、`time_of_day` 相位和非有限值处理。查询是否有意义仍取决于模型和当前游戏状态。远端玩家状态的来源与回退规则见[玩家状态分享](/omnimorph/sync#玩家状态分享alpha5)。

## 动画控制器

YSM 动画控制器通常包含：

- **状态（states）**：每个状态播放一组动画；
- **过渡（transitions）**：满足条件时切换状态；
- **混合（blend）**：多个状态之间的权重过渡；
- **查询**：用 `query.*` / `ysm.*` 决定状态。

典型思路：

```text
idle  --query.is_sneak-->  sneak
idle  --query.ground_speed > 0.1-->  walk
walk  --query.ground_speed > 0.7-->  run
any   --query.is_sleeping-->  sleep
```

控制器由模型文件提供；OmniMorph 负责运行与调试。你可以用 Lua 查询运行状态：

```lua
local controllers = ysm_model:getControllers()
for _, name in ipairs(controllers) do
    log(name .. " = " .. tostring(ysm_model:getControllerStates()[name]))
end
```

## 与 Lua 联动

### 读取控件值

Molang：

```text
query.ysm_control_bool('tail_enabled') ? 1 : 0
```

Lua（同一控件）：

```lua
local enabled = avatar_controls:get("tail_enabled")
```

### 触发动作

```lua
ysm_actions:trigger("wave")
```

Molang 中读取：

```text
query.ysm_action_active('wave') ? 1 : 0
```

### 查询动画状态

```lua
local states = ysm_model:getControllerStates()
local playing = ysm_model:getActiveAnimations()
```

## 调试

| 需求 | 方法 |
| ------------------ | --------------------------------------------------- |
| 查看控制器 | `ysm_model:getControllers()` |
| 查看控制器当前状态 | `ysm_model:getControllerStates()` |
| 查看正在播放的动画 | `ysm_model:getActiveAnimations()` |
| 查看模型函数/事件 | `ysm_model:getFunctions()`、`ysm_model:getEvents()` |
| 查看最近事件 | `ysm_model:getRecentEvents()` |
| 查看同步键 | `ysm_model:getRecentSyncKeys()` |

如果表达式不生效：

1. 确认模型确实使用 Molang 控制器；
2. 检查变量/查询名是否拼写正确；
3. 检查控件是否已声明并存在；
4. 查看日志中的 `UnavailableBinding` 或表达式错误；
5. 确认当前模型不是纯 Figura 模型（`ysm_model:isYsm()`）。

## 相关页面

- [YSM 模型支持](/omnimorph/ysm)
- [YSM 动作轮盘](/omnimorph/action-wheel)
- [`ysm_model`](/scripting/ysm-model)
- [`ysm_actions`](/scripting/ysm-actions)
