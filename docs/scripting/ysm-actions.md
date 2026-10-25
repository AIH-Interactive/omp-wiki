---
sidebar_position: 3
title: ysm_actions（YSM 动作）
sidebar_label: ysm_actions（YSM 动作）
---

# ysm_actions

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：普通脚本、装饰脚本

`ysm_actions` 用来创建、注册、触发和停止 YSM 动作，并管理动作轮盘的页面、槽位与键位绑定。

## 获取

```lua
local actions = ysm_actions:getActions()
for id, action in pairs(actions) do
    log(id .. " -> " .. action:getTitle())
end
```

## 动作定义

`ysm_actions:newAction(id)` 返回一个 `ysm_action` 对象：

| 方法 | 说明 |
| --- | --- |
| `getId()` | 动作 id |
| `getTitle()` / `setTitle(title)` | 轮盘显示标题 |
| `getAnimation()` / `setAnimation(name)` | 播放的动画名 |
| `getPage()` / `setPage(page)` | 所属页面 |
| `isLoop()` / `setLoop(bool)` | 是否循环 |
| `getMode()` / `setMode(mode)` | `press` / `hold` / `toggle` |
| `getCooldown()` / `setCooldown(ticks)` | 冷却 ticks |
| `getSpeed()` / `setSpeed(speed)` | 播放速度 |
| `getItem()` / `setItem(item)` | 物品条件，空字符串表示无 |

示例：

```lua
local wave = ysm_actions:newAction("wave")
wave:setTitle("挥手")
wave:setAnimation("wave")
wave:setPage("main")
wave:setMode("press")
wave:setLoop(false)
wave:setCooldown(20)
wave:setSpeed(1.0)

ysm_actions:register(wave)
```

## 查询

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `getAction(id)` | `ysm_action` 或 nil | 按 id 获取 |
| `getWheelActions()` | 表 | 轮盘动作 |
| `getWheelPages()` | 数组 | 页面名称 |
| `getWheelLayout()` | 表 | 页 → 槽位 → 动作 |
| `getWheelPageSlotAction(page, slot)` | 字符串或 nil | 指定槽位的动作 |
| `getWheelSlot(id)` | 表或 nil | 动作所在页/槽 |
| `isActive(id)` | 布尔 | 是否正在播放 |
| `time(id)` | 秒 | 已播放时间 |

## 播放与停止

```lua
ysm_actions:trigger("wave")
ysm_actions:stop("wave")
ysm_actions:stopAll()

-- 触发指定页/槽
ysm_actions:triggerWheelPageSlot("main", 1)
ysm_actions:stopWheelPageSlot("main", 1)
```

`trigger` 返回布尔值，表示是否成功开始。

## 页面管理

| 方法 | 说明 |
| --- | --- |
| `addWheelPage(page)` | 添加页面 |
| `renameWheelPage(old, new)` | 重命名 |
| `removeWheelPage(page)` | 删除页面 |
| `clearWheelPage(page)` | 清空页面槽位 |
| `compactWheelPage(page)` | 去掉空槽 |
| `autoFillWheelPage(page)` | 自动填充 |
| `refreshWheel()` | 刷新轮盘 |

## 槽位管理

| 方法 | 说明 |
| --- | --- |
| `setWheelSlot(id, page, slot)` | 把动作放到页/槽 |
| `clearWheelSlot(id)` | 从轮盘移除动作 |
| `clearWheelPageSlot(page, slot)` | 清空指定槽 |
| `swapWheelPageSlots(page, a, b)` | 交换两个槽 |
| `triggerWheelPageSlot(page, slot)` | 触发槽位动作 |
| `stopWheelPageSlot(page, slot)` | 停止槽位动作 |

槽位编号为 1–8。

## 键位绑定

```lua
ysm_actions:bindAction("wave_key", "wave", "key.keyboard.g", false)
ysm_actions:bindToggleAction("wave_toggle", "wave", "key.keyboard.h", false)

ysm_actions:bindWheelPageSlot("page_key", "main", 1, "key.keyboard.1", false)
ysm_actions:bindToggleWheelPageSlot("page_toggle", "main", 1, "key.keyboard.2", false)

ysm_actions:unbindWheelKeybind("wave_key")
```

最后一个参数 `gui` 表示是否只在 GUI 中生效。

## 完整示例：两页轮盘

```lua
local function addAction(id, title, animation, page, slot)
    local action = ysm_actions:newAction(id)
    action:setTitle(title)
    action:setAnimation(animation)
    action:setPage(page)
    action:setMode("press")
    ysm_actions:register(action)
    ysm_actions:setWheelSlot(id, page, slot)
end

ysm_actions:addWheelPage("main")
ysm_actions:addWheelPage("extra")

addAction("wave", "挥手", "wave", "main", 1)
addAction("dance", "跳舞", "dance", "main", 2)
addAction("sit", "坐下", "sit", "extra", 1)

ysm_actions:bindWheelPageSlot("wheel_1", "main", 1, "key.keyboard.1", false)
ysm_actions:refreshWheel()
```

## 注意

- 动作必须对应模型中的真实动画；否则触发会失败。
- 冷却、速度、循环由运行时处理；`mode` 会影响按住/切换行为。
- 装饰脚本只能操作当前实例的轮盘，不能操作全局玩家轮盘。
- 槽位满 8 个后请新建页面。

## 相关页面

- [YSM 动作轮盘](/omnimorph/action-wheel)
- [`ysm_model`](/scripting/ysm-model)
- [模型专用设置](/omnimorph/avatar-controls)
