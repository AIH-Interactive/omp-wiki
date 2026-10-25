---
sidebar_position: 6
title: 拖尾 Ribbon
---

# 拖尾 Ribbon

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：普通脚本、装饰脚本

Ribbon 把粒子的历史轨迹绘制成一条带状拖尾，适合尾巴、飘带、刀光等效果。

## 创建

```lua
local trail = particles:newCustomParticle(
    "trail_texture",
    player:getPos(),
    vec(0, 0, 0)
)

trail:setRenderMode("RIBBON")
trail:setLifetime(60)
trail:setRibbon({
    width = 0.2,
    length = 2.0,
    lifetime = 40,
    uvMode = "repeat",
    uvRepeat = 4,
    taper = true,
    fade = true,
    sampleDistance = 0.1,
    sampleInterval = 1,
})
```

## 参数

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `width` | 数字 | 宽度（方块） |
| `length` | 数字 | 可见长度（方块） |
| `lifetime` | 数字 | 轨迹保留时间（tick） |
| `uvRepeat` | 数字 | 每方块弧长的纹理重复数 |
| `uvOffset` | 数字 | 纹理周期偏移 |
| `uvMode` | 字符串 | `repeat`（按世界弧长平铺）或 `stretch`（拉伸到全长） |
| `taper` | 布尔 | 尾端渐缩，默认 false |
| `fade` | 布尔 | 按年龄渐隐，默认 false |
| `sampleDistance` | 数字 | 采样距离 |
| `sampleInterval` | 数字 | 采样间隔 |
| `teleportDistance` | 数字 | 超过该距离视为传送，断开轨迹 |

`getRibbon()` 返回当前设置。

## 读取与更新

```lua
local options = trail:getRibbon()
options.width = 0.3
trail:setRibbon(options)
```

## 链接到 Trail 装饰

如果当前实例是 Trail 类装饰，可以让粒子复用控制器的历史，而不是自己采样：

```lua
trail:setAnchorTrail(true)
log(trail:isAnchorTrail())
```

- 默认 false；
- 仅 Ribbon 模式读取历史；
- 开启后不占独立轨迹槽位，但仍占粒子/层/面/顶点/光源额度；
- 没有 Trail 历史的普通形象会拒绝开启。

## 与普通粒子的区别

| 项目 | 普通粒子 | Ribbon |
| --- | --- | --- |
| 渲染 | Billboard/Layered | 带状网格 |
| 纹理 | 单帧/精灵图 | 按弧长平铺或拉伸 |
| 历史 | 无 | 需要轨迹采样 |
| 预算 | 粒子/层/面 | 额外拖尾槽位与采样 |
| 失效 | 到期消失 | 目标失效/换世界会清理 |

## 完整示例：手部拖尾

```lua
function events.tick()
    local hand = ysm_model:getPart("RightHand")
    if not hand then
        return
    end

    local trail = particles:newCustomParticle(
        "trail",
        hand:getWorldPos(),
        vec(0, 0, 0)
    )

    trail:setRenderMode("RIBBON")
    trail:setLifetime(40)
    trail:setEmissive(true)
    trail:setRibbon({
        width = 0.15,
        length = 1.5,
        lifetime = 20,
        uvMode = "repeat",
        uvRepeat = 3,
        taper = true,
        fade = true,
    })
end
```

## 限制

- 拖尾数量与每条采样数受 `outfit.limits` 限制（默认 8 条 × 256 采样）；
- 传送、换世界、目标失效会断开或清理轨迹；
- UV 平铺与拉伸是两种不同映射，不能同时使用；
- 真实 GPU 叠加效果仍需实机验收。

## 相关页面

- [自定义粒子](/scripting/custom-particles)
- [粒子运动](/scripting/particle-motion)
- [粒子动态光源](/scripting/dynamic-lights)
- [预算与限制](/scripting/budgets)
