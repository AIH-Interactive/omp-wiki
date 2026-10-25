---
sidebar_position: 21
title: 做一个控件面板
---

# 做一个控件面板

## 你将完成

用 `avatar_controls` 创建一个带页面、开关、滑块、下拉框、按钮和键位的模型专用设置面板。

## 准备

- 已有一个可用的 Figura 形象。
- 已阅读[模型专用设置](/omnimorph/avatar-controls)。
- 已阅读 [`avatar_controls`](/scripting/avatar-controls)。

## 步骤 1：创建页面

```lua
local main = avatar_controls:newPage("main")
main:setTitle("外观")

local effects = avatar_controls:newPage("effects")
effects:setTitle("特效")
```

`newPage` 会创建一个可跳转的按钮；`openPage` 可以在脚本中打开页面。

## 步骤 2：开关与滑块

```lua
local glow = avatar_controls:newToggle("glow")
glow:setTitle("发光")
glow:setDescription("让模型部分发光")
glow:setPage("effects")
glow:setDefault(false)

local size = avatar_controls:newSlider("size")
size:setTitle("大小")
size:setPage("effects")
size:setRange(0.5, 2.0, 0.1)
size:setDefault(1.0)
```

## 步骤 3：下拉框

```lua
local mode = avatar_controls:newEnum("mode")
mode:setTitle("模式")
mode:setPage("effects")
mode:setOptions({ "普通", "发光", "透明" })
mode:setDefault("普通")
```

选项值会作为字符串传给回调；Molang 可用 `query.ysm_control_enum('mode')` 读取索引。

## 步骤 4：按钮与键位

```lua
local wave = avatar_controls:newButton("wave")
wave:setTitle("挥手")
wave:setPage("main")
wave:setOnPress(function()
    ysm_actions:trigger("wave")
end)

local toggleKey = avatar_controls:newKeybind("toggle_key")
toggleKey:setTitle("切换发光")
toggleKey:setPage("main")
```

## 步骤 5：统一回调

```lua
avatar_controls:setOnChange(function(id, value)
    if id == "glow" then
        models.Body:setEmissive(value)
    elseif id == "size" then
        models.Body:setScale(value)
    end
end)
```

也可以在单个控件上设置 `setOnChange` / `setOnPress`。

## 步骤 6：打开页面

```lua
avatar_controls:openPage("main")
```

或在衣柜的“模型专用设置”中直接打开。

## 步骤 7：持久化

- 普通脚本的控件值会保存；
- 装饰脚本使用 `cosmetic_state`：

```lua
cosmetic_state:set("glow", true)
local glow = cosmetic_state:get("glow")
```

- 预览不写盘。

## 排查

| 现象 | 处理 |
| --- | --- |
| 控件不显示 | 确认脚本执行、ID 唯一、页面存在 |
| 回调不触发 | 检查 `setOnChange` 是否绑定到正确控件 |
| 值重启后丢失 | 检查持久化环境；预览不会保存 |
| 键位没反应 | 检查按键冲突与 `gui` 参数 |

## 下一步

- [模型专用设置](/omnimorph/avatar-controls)
- [`avatar_controls`](/scripting/avatar-controls)
- [`cosmetic_state`](/scripting/cosmetic-state)
