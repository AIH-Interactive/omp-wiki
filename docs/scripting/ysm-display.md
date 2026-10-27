---
sidebar_position: 4
title: ysm_display（玩家与 YSM 状态）
sidebar_label: ysm_display（玩家与 YSM 状态）
---

# ysm_display

> 适用版本：OmniMorph 1.0.0-alpha.5

`ysm_display` 是只读全局接口。方法接受玩家实体对象，例如 `player`，不是玩家名或 UUID。玩家状态来自本地玩家实体或收到的远端玩家发布；非玩家、没有实体或没有收到远端状态时为未知。它不能发布或修改这些值。

## 玩家状态

| 方法                             | 返回             | 说明                                                                                                      |
| -------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| `get(entity)`                    | 表或 nil         | 包含 `food`、`experience_level`、`flying`、`strafe`、`vertical`、`forward`、`effects`；个别字段也可能未知 |
| `isSynced(entity)`               | 布尔             | 状态是否已知；本地玩家也返回 true，并不表示网络同步成功                                                   |
| `getFood(entity)`                | 整数或 nil       | 饥饿值                                                                                                    |
| `getExperienceLevel(entity)`     | 整数或 nil       | 经验等级                                                                                                  |
| `isFlying(entity)`               | 布尔或 nil       | 是否飞行                                                                                                  |
| `getMovementInput(entity)`       | `Vector3` 或 nil | 横向、垂直、前向输入分别对应 x、y、z；状态存在但某分量未知时该分量为 0                                    |
| `getEffectLevel(entity, effect)` | 整数或 nil       | 效果 ID 对应等级；效果表已知但没有该效果时为 0，表或参数未知时为 nil                                      |

```lua
local food = ysm_display:getFood(player)
if food ~= nil then
    log("饥饿值：" .. food)
end
local speed = ysm_display:getEffectLevel(player, "minecraft:speed")
if speed ~= nil then
    log("速度效果等级：" .. speed)
end
```

远端数据需要发布者开启分享，并通过支持 `YSM_DISPLAY` 的 Protobuf 后端传递。具体条件见[云端同步](/omnimorph/sync)。不要把 `nil` 当作 0 或 `false`。

## 已加载的 YSM 状态

| 方法                          | 返回         | 说明                                |
| ----------------------------- | ------------ | ----------------------------------- |
| `getActionState(entity)`      | 字符串或 nil | 该实体已加载 YSM 模型的基础动作状态 |
| `getControllerStates(entity)` | 表或 nil     | 控制器名到当前状态的映射            |

这两个方法读取客户端已加载的对应 YSM 运行时，与玩家状态分享是否已知是独立条件；没有运行时或运行时已关闭时返回 nil。当前脚本自身模型的更多状态机查询见 [`ysm_model`](/scripting/ysm-model)。

```lua
local states = ysm_display:getControllerStates(player)
if states then
    for name, state in pairs(states) do
        log(name .. " = " .. tostring(state))
    end
end
```

真实多人客户端行为仍待验收。
