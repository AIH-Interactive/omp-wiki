---
sidebar_position: 8
title: 粒子运动
---

# 粒子运动

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：普通脚本、装饰脚本

`setMotion` 为自定义粒子设置内置运动轨迹，支持自由、环绕、螺旋、贝塞尔与追踪。

## 自由运动

```lua
particle:setMotion({
    mode = "free",
})
```

配合 `setVelocity`、`setAcceleration`、`setGravity` 使用。

## 环绕 / 螺旋

```lua
particle:setMotion({
    mode = "orbit",
    center = vec(0, 1, 0),
    axis = vec(0, 1, 0),
    radius = 1.5,
    angularVelocity = 30,
    phase = 0,
})

particle:setMotion({
    mode = "helix",
    center = vec(0, 1, 0),
    axis = vec(0, 1, 0),
    radius = 1.0,
    angularVelocity = 20,
    rise = 0.05,
})
```

| 字段 | 说明 |
| --- | --- |
| `center` | 中心点，默认粒子原点 |
| `axis` | 旋转轴，默认 `(0,1,0)` |
| `radius` | 半径，默认 0.5 |
| `angularVelocity` | 角速度（度/秒），默认 15 |
| `phase` | 初始相位（度） |
| `rise` | 螺旋每圈上升量（仅 helix） |

## 贝塞尔

```lua
particle:setMotion({
    mode = "bezier",
    points = { vec(0, 0, 0), vec(0, 2, 0), vec(2, 2, 0) },
    duration = 20,
    loop = false,
})
```

| 字段 | 说明 |
| --- | --- |
| `points` | 控制点数组，至少 2 个 |
| `duration` | 持续时间（tick） |
| `loop` | 是否循环 |

## 追踪

```lua
particle:setMotion({
    mode = "tracking",
    target = player:getPos(),
    speed = 0.2,
    lost = "remove",
})
```

| 字段 | 说明 |
| --- | --- |
| `target` | 目标位置（`Vector3`） |
| `speed` | 追踪速度 |
| `lost` | 目标丢失时 `remove` 或 `stop` |

## 通用属性

| 方法 | 说明 |
| --- | --- |
| `setVelocity(x,y,z)` | 速度 |
| `setAcceleration(x,y,z)` | 加速度 |
| `setGravity(g)` | 重力 |
| `setRotation(deg)` | 旋转 |
| `setAngularVelocity(deg/tick)` | 角速度 |
| `setPaused(bool)` | 暂停 |

## 错误

- `getMotionMode()` 返回当前模式；
- `getMotionError()` 返回最近一次运动配置错误；
- 无效参数会明确拒绝，不会静默使用默认值；
- 目标失效/换世界时，`tracking` 按 `lost` 处理。

## 相关页面

- [自定义粒子](/scripting/custom-particles)
- [拖尾 Ribbon](/scripting/ribbon)
- [预算与限制](/scripting/budgets)
