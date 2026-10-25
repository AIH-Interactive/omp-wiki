---
sidebar_position: 10
title: cosmetic_animations（装饰动画）
sidebar_label: cosmetic_animations（装饰动画）
---

# cosmetic_animations

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：装饰脚本

`cosmetic_animations` 让装饰脚本指定动作轮盘入口页，并接收当前实例的动画事件。

## 方法

| 方法 | 说明 |
| --- | --- |
| `setPage(page)` / `set_page(page)` | 指定入口页；`nil` 恢复当前页 |
| `onEvent(callback)` | 设置唯一事件监听；`nil` 注销 |
| `getEventError()` | 最近一次拒绝/失败原因 |

`setPage` 接受本实例的 `Page` 对象、页名称或 `nil`。未知页名会抛出 `COSMETIC_ANIMATION_PAGE_NOT_FOUND`。

## 事件表

每次回调收到一个新表：

```lua
{
    animation = "wave",
    type = "keyframe",   -- keyframe / end
    marker = "sparkle",  -- 可能为空
    time = 1.25,
    generation = 3,
}
```

| 字段 | 说明 |
| --- | --- |
| `animation` | 动画名 |
| `type` | `keyframe` 或 `end` |
| `marker` | 事件标记，可能为空 |
| `time` | 时间（秒） |
| `generation` | 播放代际 |

## 示例

```lua
cosmetic_animations:setPage("main")

cosmetic_animations:onEvent(function(event)
    if event.type == "keyframe" and event.marker == "sparkle" then
        particles:newParticle("minecraft:end_rod", player:getPos())
    end
end)

local error = cosmetic_animations:getEventError()
if error then
    log("动画事件错误：" .. error)
end
```

## 派发与预算

- 事件在下一 tick 派发，不在动画遍历中直接调用 Lua；
- 队列数量受 `maxParticleCallbacksPerTick` 限制；
- 回调与高级粒子 tick 回调共用穿戴者的回调次数账本；
- 字符串受 `maxStateStringBytes` 的 UTF-8 上限限制；
- 队列满时丢弃新通知并给出原因，不阻塞原生动画；
- 更换监听、重载、播放代际失效、VM 替换或实例退休会清除旧通知。

## 错误

| 错误 | 原因 |
| --- | --- |
| `COSMETIC_ANIMATIONS_CLOSED` | 实例已关闭 |
| `COSMETIC_ANIMATION_PAGE_NOT_FOUND` | 页名不存在 |
| `ANIMATION_EVENT_CALLBACK_DISABLED` | 回调预算为 0 |
| `ANIMATION_EVENT_QUEUE_LIMIT` | 队列已满 |
| `ANIMATION_EVENT_VALUE_LIMIT` | 字符串超长 |
| `ANIMATION_EVENT_CALLBACK_FAILED` | 回调执行失败 |

## 相关页面

- [装饰动画](/omnimorph/cosmetic-animations)
- [`ysm_actions`](/scripting/ysm-actions)
- [动作轮盘](/omnimorph/action-wheel)
