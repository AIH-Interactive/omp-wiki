---
sidebar_position: 4
title: avatar_controls（模型控件）
sidebar_label: avatar_controls（模型控件）
---

# avatar_controls

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：普通脚本（`avatar_controls`）、装饰脚本（`cosmetic_controls`）

`avatar_controls` 用来声明“模型专用设置”的控件、页面与回调。装饰脚本中使用别名 `cosmetic_controls`，方法完全相同。

## 获取

```lua
local all = avatar_controls:getControls()
local one = avatar_controls:getControl("my_toggle")
```

## 创建控件

| 方法 | 类型 | 说明 |
| --- | --- | --- |
| `newToggle(id)` | toggle | 开关 |
| `newSlider(id)` | slider | 滑块 |
| `newEnum(id)` | enum | 下拉/单选 |
| `newColor(id)` | color | 颜色 |
| `newText(id)` | text | 文本 |
| `newNumber(id)` | number | 数字 |
| `newKeybind(id)` | keybind | 键位 |
| `newButton(id)` | button | 按钮 |
| `newPage(id)` | page | 页面 |
| `newLabel(id)` | label | 说明 |
| `newSeparator(id)` | separator | 分隔线 |
| `newControl(id, type)` | 任意 | 按类型创建 |

别名：`newCheckbox`/`newSwitch` → toggle，`newRange` → slider，`newDropdown`/`newSelect`/`newRadio` → enum，`newInput` → text，`newAction` → button，`newTab` → page。

`of(id, type)` 等价于 `newControl`。

## 控件属性

`new*` 返回 `avatar_control`，可链式设置：

| 方法 | 说明 |
| --- | --- |
| `setTitle(title)` / `title(...)` | 显示标题 |
| `setDescription(desc)` / `description(...)` | 描述 |
| `setPage(page)` / `page(...)` | 所属页面 |
| `setCategory(category)` / `category(...)` | 分类 |
| `setDefault(value)` / `defaultValue(...)` | 默认值 |
| `setRange(min, max, step)` / `range(...)` | 数值范围 |
| `setMin` / `setMax` / `setStep` | 单项范围 |
| `setOptions(list)` / `options(...)` | 枚举选项 |
| `addOption(option)` / `option(...)` | 追加选项 |
| `addOptionCommand(option, command)` | 选项对应命令 |
| `setPersistent(bool)` / `persistent(...)` | 是否持久化 |
| `setBinding(binding)` / `binding(...)` | Molang 绑定 |
| `setTargetPage(page)` / `targetPage(...)` | 页面按钮目标 |
| `setOnChange(fn)` / `onChange(fn)` | 值变化回调 |
| `setOnPress(fn)` / `onPress(fn)` | 按钮按下回调 |

读取：

`getId()`、`getType()`、`getTitle()`、`getDescription()`、`getPage()`、`getCategory()`、`getBinding()`、`getTargetPage()`、`getDefault()`、`getValue()`、`getMin()`、`getMax()`、`getStep()`、`getOptions()`、`getOptionCommands()`、`isPersistent()`。

## 控件类型

`getTypes()` 返回可用类型。常用值：

```text
toggle, slider, enum, color, text, number, keybind, button, page, label, separator
```

## 读取与写入

```lua
local value = avatar_controls:get("my_toggle")

avatar_controls:set("my_toggle", true)
avatar_controls:press("my_button")
avatar_controls:reset("my_slider")
avatar_controls:resetAll()
avatar_controls:remove("my_toggle")
avatar_controls:clear()
```

`set` 会触发变更回调并持久化（普通脚本）；`press` 触发按钮回调。

## 页面

```lua
local main = avatar_controls:newPage("main")
main:setTitle("外观")

avatar_controls:openPage("main")
```

页面按钮会跳转到 `targetPage`；`newPage` 默认把目标设为自身 id。

## 回调

### 全局回调

```lua
avatar_controls:setOnChange(function(id, value, control)
    log(id .. " = " .. tostring(value))
end)
```

参数：控件 id、当前值、控件对象。

### 控件回调

```lua
local toggle = avatar_controls:newToggle("glow")
toggle:setOnChange(function(value, control)
    log("glow = " .. tostring(value))
end)

local button = avatar_controls:newButton("wave")
button:setOnPress(function(control)
    ysm_actions:trigger("wave")
end)
```

## 完整示例

```lua
local main = avatar_controls:newPage("main")
main:setTitle("外观")

local glow = avatar_controls:newToggle("glow")
glow:setTitle("发光")
glow:setPage("main")
glow:setDefault(false)

local size = avatar_controls:newSlider("size")
size:setTitle("大小")
size:setPage("main")
size:setRange(0.5, 2.0, 0.1)
size:setDefault(1.0)

local mode = avatar_controls:newEnum("mode")
mode:setTitle("模式")
mode:setPage("main")
mode:setOptions({ "普通", "发光", "透明" })

local wave = avatar_controls:newButton("wave")
wave:setTitle("挥手")
wave:setPage("main")
wave:setOnPress(function()
    ysm_actions:trigger("wave")
end)

avatar_controls:setOnChange(function(id, value)
    if id == "glow" then
        models.Body:setEmissive(value)
    elseif id == "size" then
        models.Body:setScale(value)
    elseif id == "mode" then
        log("模式：" .. tostring(value))
    end
end)
```

## 持久化与预览

| 环境 | 行为 |
| --- | --- |
| 普通脚本 | 控件值可持久化 |
| 装饰脚本 | 使用 `cosmetic_state` 保存实例状态 |
| 预览 | 不写入本地持久化 |

## 注意

- 控件 id 必须唯一；重复注册会覆盖或报错。
- 预览环境提供真实控件 API，但不写盘。
- 装饰脚本只能操作当前实例，不能访问其他作者或主机能力。
- 控件值可被 Molang 通过 `query.ysm_control*` 读取。

## 相关页面

- [模型专用设置](/omnimorph/avatar-controls)
- [做一个控件面板](/tutorials/Control-Panel)
- [`cosmetic_state`](/scripting/cosmetic-state)
- [Molang 表达式与控制器](/omnimorph/molang)
