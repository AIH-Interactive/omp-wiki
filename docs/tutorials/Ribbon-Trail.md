---
sidebar_position: 23
title: 做一条拖尾
---

# 做一条拖尾

## 你将完成

用自定义粒子 + Ribbon + 动态光源做一条跟随手部的发光拖尾。

## 准备

- 已有一个可用模型（Figura 或 YSM）。
- 已准备一张拖尾纹理，并在模型中注册。
- 已阅读[拖尾 Ribbon](/scripting/ribbon)、[粒子动态光源](/scripting/dynamic-lights)。

## 步骤 1：创建粒子

```lua
function events.tick()
    local hand = ysm_model:getPart("RightHand")
    if not hand then
        return
    end

    local p = particles:newCustomParticle(
        "trail_texture",
        hand:getWorldPos(),
        vec(0, 0, 0)
    )
    p:setRenderMode("RIBBON")
    p:setLifetime(40)
    p:setEmissive(true)
    p:setRibbon({
        width = 0.15,
        length = 1.5,
        lifetime = 20,
        uvMode = "repeat",
        uvRepeat = 3,
        taper = true,
        fade = true,
    })
    p:setDynamicLight(true)
    p:setLightLevel(12)
    p:setLightRadius(3)
    p:setLightInterval(4)
end
```

## 步骤 2：调整宽度与长度

- `width` 是宽度（方块）；
- `length` 是可见长度；
- `lifetime` 是轨迹保留时间；
- `uvRepeat` 控制纹理重复密度；
- `taper` 让尾端渐缩；
- `fade` 让轨迹按年龄渐隐。

## 步骤 3：优化光源

- 拖尾粒子多时，`lightInterval` 设为 4–8，避免光源超限；
- 只让一部分粒子发光，其余仍显示；
- 如果不需要照明，关闭 `setDynamicLight`。

## 步骤 4：验证

1. 启用模型。
2. 移动/挥动手臂。
3. 观察拖尾是否跟随、是否断裂、是否偏移。
4. 开光影对比一次。

## 排查

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 没有拖尾 | 纹理未注册/粒子被预算拒绝 | 检查日志与纹理名 |
| 拖尾断裂 | 传送/换世界/采样距离 | 调整 `teleportDistance` |
| 位置偏移 | 手部部件坐标/光影 | 检查 `getWorldPos` 与光影 |
| 不发光 | 光源上限/光照等级 | 增大 `lightInterval`，检查上限 |
| 性能差 | 粒子/采样太多 | 降低数量、宽度、长度 |

## 下一步

- [自定义粒子](/scripting/custom-particles)
- [粒子运动](/scripting/particle-motion)
- [预算与限制](/scripting/budgets)
