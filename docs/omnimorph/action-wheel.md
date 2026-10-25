---
sidebar_position: 7
title: YSM 动作轮盘
---

# YSM 动作轮盘

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

动作轮盘把 YSM 动作组织成页面与槽位，玩家可以用鼠标、数字键或自定义键位触发。

## 结构

- **页面（page）**：一组动作；
- **槽位（slot）**：每页最多 8 个，编号 1–8；
- **动作（action）**：一个可播放的 YSM 动画，包含标题、动画名、循环、模式、冷却、速度、物品条件。

页面满 8 个槽位后，可以继续新建页面。

## 打开与操作

- 打开动作轮盘（默认按键可在设置中修改）；
- 点击槽位，或按数字键 1–8；
- 滚动翻页；
- 松开结束按住类动作；
- 支持“按住 / 切换 / 松开触发”等模式。

## 作者如何定义动作

使用 `ysm_actions`：

```lua
local wave = ysm_actions:newAction("wave")
wave:setTitle("挥手")
wave:setAnimation("wave")
wave:setPage("main")
wave:setLoop(false)
wave:setCooldown(20)
wave:setSpeed(1.0)

ysm_actions:register(wave)
ysm_actions:setWheelSlot("wave", "main", 1)
```

也可以直接使用模型自带的动作，无需重新定义。

## 页面与槽位管理

| 操作 | 方法 |
| --- | --- |
| 添加页 | `addWheelPage(page)` |
| 重命名页 | `renameWheelPage(old, new)` |
| 删除页 | `removeWheelPage(page)` |
| 设置槽位 | `setWheelSlot(id, page, slot)` |
| 清空槽位 | `clearWheelSlot(id)` |
| 清空页 | `clearWheelPage(page)` |
| 交换槽位 | `swapWheelPageSlots(page, a, b)` |
| 整理 | `compactWheelPage(page)` |
| 自动填充 | `autoFillWheelPage(page)` |
| 刷新 | `refreshWheel()` |

## 触发与停止

```lua
ysm_actions:trigger("wave")
ysm_actions:stop("wave")
ysm_actions:stopAll()

local active = ysm_actions:isActive("wave")
local time = ysm_actions:time("wave")
```

## 键位绑定

```lua
ysm_actions:bindAction("wave_key", "wave", "key.keyboard.g", false)
ysm_actions:bindToggleAction("wave_toggle", "wave", "key.keyboard.h", false)
ysm_actions:bindWheelPageSlot("page_key", "main", 1, "key.keyboard.1", false)
ysm_actions:unbindWheelKeybind("wave_key")
```

参数中的 `gui` 表示是否只在 GUI 中生效；按实际需求设置。

## 模型自带动作

- 模型可以在 `ysm.actions.json` / `action_wheel.json` 等文件中声明动作；
- OmniMorph 会读取并加入轮盘；
- 纯几何模型可能没有动作，界面会显示“此 YSM 模型没有轮盘动作”。

## 界面编辑

“模型专用设置”中提供：

- 添加 / 重命名 / 删除页面；
- 放入 / 清空 / 交换槽位；
- 自动填充 / 整理；
- 刷新轮盘；
- 绑定 / 切换式绑定 / 解绑；
- 循环播放轮盘动作。

## 常见问题

**动作不播放？**
检查动作 id、动画名、页面/槽位是否正确，以及模型是否有该动画。

**键位没反应？**
检查是否被其他模组/原版按键占用，或绑定是否只在 GUI 生效。

**轮盘为空？**
模型没有声明动作，或当前模型不是 YSM；用 `ysm_model:isYsm()` 确认。

## 相关页面

- [YSM 模型支持](/omnimorph/ysm)
- [`ysm_actions`](/scripting/ysm-actions)
- [`ysm_model`](/scripting/ysm-model)
- [模型专用设置](/omnimorph/avatar-controls)
