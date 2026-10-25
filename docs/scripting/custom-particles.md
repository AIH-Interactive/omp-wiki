---
sidebar_position: 5
title: 自定义粒子
---

# 自定义粒子

> 状态：稳定（Billboard/Layered）；Ribbon 见单独页面
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：普通脚本、装饰脚本

`particles.newCustomParticle` 与 `newTexturedParticle` 创建可精细控制的自定义粒子：多图层、精灵图、渲染模式、运动、回调与动态光源。

## 创建

```lua
local particle = particles:newCustomParticle(
    "my_texture",
    vec(0, 1, 0),
    vec(0, 0.1, 0)
)
```

参数：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| texture | 字符串或 `Texture` | 本实例纹理名或纹理对象 |
| pos | `Vector3` | 世界坐标 |
| velocity | `Vector3` | 初速度，可省略 |

`newTexturedParticle` 是同一实现的便捷入口。

## 基础属性

| 方法 | 说明 |
| --- | --- |
| `setPos(x,y,z)` / `getPos()` | 位置 |
| `setVelocity(x,y,z)` / `getVelocity()` | 速度 |
| `setColor(r,g,b,a)` / `getColor()` | 颜色 |
| `setScale(scale)` / `getScale()` | 缩放 |
| `setLifetime(ticks)` / `getLifetime()` | 寿命 |
| `setGravity(g)` / `getGravity()` | 重力 |
| `setPhysics(bool)` / `hasPhysics()` | 物理碰撞 |
| `setPaused(bool)` / `isPaused()` | 暂停 |
| `setEmissive(bool)` / `isEmissive()` | 自发光 |
| `setRotation(deg)` / `getRotation()` | 旋转 |
| `setAngularVelocity(deg/tick)` | 角速度 |
| `setAcceleration(x,y,z)` | 加速度 |
| `remove()` / `isAlive()` | 移除/存活 |

## 渲染模式

```lua
particle:setRenderMode("BILLBOARD")  -- 或 "LAYERED"、"RIBBON"
log(particle:getRenderMode())
```

- **BILLBOARD**：始终朝向相机；
- **LAYERED**：多层，每层可独立纹理/UV/颜色/混合；
- **RIBBON**：拖尾，见[拖尾 Ribbon](/scripting/ribbon)。

## 精灵图

`setSpriteSheet` 接受表：

| 字段 | 说明 |
| --- | --- |
| `frameWidth` / `frameHeight` | 单帧尺寸（与 `columns`/`rows` 二选一） |
| `columns` / `rows` | 网格列/行 |
| `frameCount` | 帧数 |
| `startFrame` / `endFrame` | 播放范围（0 起始，闭区间） |
| `frameTimeTicks` | 每帧 ticks，必须 > 0 |
| `playback` | `once` / `loop` / `pingPong` |
| `initialFrame` | 初始帧 |
| `randomStart` | 随机起点 |
| `paused` | 暂停 |
| `marginX` / `marginY` | 边距（像素） |
| `spacingX` / `spacingY` | 间距（像素） |

示例：

```lua
particle:setSpriteSheet({
    columns = 4,
    rows = 4,
    frameCount = 16,
    frameTimeTicks = 2,
    playback = "loop",
    randomStart = true,
})
```

`setFrame(n)` 手动设置帧；`getFrame()` 读取当前帧。

## 多图层

```lua
particle:setLayers({
    { texture = "layer_1", color = vec(1, 1, 1), alpha = 1.0 },
    { texture = "layer_2", blend = "additive", emissive = true },
})
```

每层字段：

| 字段 | 说明 |
| --- | --- |
| `texture` | 纹理；省略时继承构造纹理 |
| `spriteSheet` | 该层独立精灵图 |
| `uv` | `{u0, u1, v0, v1}`，当前帧内裁剪 |
| `color` | `Vector3` 或 `Vector4` |
| `alpha` | 0–1 |
| `blend` | `alpha` / `additive` / `opaque` |
| `emissive` | 是否自发光 |

`setBlendMode(mode)` 设置基础层混合模式；Layered 各层由 `blend` 决定。

## 回调

```lua
particle:setTickCallback(function(particle)
    -- 每个 tick
end)

particle:setFrameCallback(function(particle)
    -- 帧更新
end)

log(particle:getCallbackError())
```

回调受 Lua 指令预算与每 tick 回调次数限制；失败会记录错误，不会阻塞渲染。

## 动态光源

```lua
particle:setDynamicLight(true)
particle:setLightLevel(15)
particle:setLightRadius(4)
particle:setLightInterval(4)
```

详见[粒子动态光源](/scripting/dynamic-lights)。

## 运动

```lua
particle:setMotion({
    mode = "orbit",
    center = vec(0, 1, 0),
    radius = 1.5,
    angularVelocity = 30,
})
```

详见[粒子运动](/scripting/particle-motion)。

## 完整示例：多图层发光粒子

```lua
function events.tick()
    local p = particles:newCustomParticle(
        "glow",
        player:getPos(),
        vec(0, 0.05, 0)
    )

    p:setLifetime(40)
    p:setScale(0.5)
    p:setEmissive(true)
    p:setSpriteSheet({
        columns = 4,
        rows = 1,
        frameCount = 4,
        frameTimeTicks = 2,
        playback = "loop",
    })
    p:setLayers({
        { texture = "glow", blend = "additive", emissive = true },
        { texture = "spark", alpha = 0.8 },
    })
    p:setDynamicLight(true)
    p:setLightLevel(12)
    p:setLightRadius(3)
end
```

## 预算

- 粒子数量、层数、面数、顶点受权限与 `outfit.limits` 限制；
- Layered 每层计一个面；
- 回调与动态光源有独立预算；
- 超限时整次提交可能被拒绝，不会静默截断。

## 相关页面

- [拖尾 Ribbon](/scripting/ribbon)
- [粒子动态光源](/scripting/dynamic-lights)
- [粒子运动](/scripting/particle-motion)
- [预算与限制](/scripting/budgets)
