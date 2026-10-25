---
sidebar_position: 9
title: 模型专用设置
---

# 模型专用设置

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1

模型专用设置是模型作者通过 Lua 声明的控件面板。玩家可以在游戏内调整这些控件，而不需要修改脚本或模型文件。

## 打开界面

在衣柜或预览中点击“模型专用设置”按钮。界面按作者声明的页面组织。

## 控件类型

| 类型 | 用途 |
| --- | --- |
| toggle / checkbox / switch | 开关 |
| slider / range | 数值滑块 |
| enum / dropdown / select / radio | 下拉或单选 |
| color | 颜色 |
| text / input | 文本 |
| number | 数字输入 |
| keybind | 键位 |
| button / action | 按钮 |
| page / tab | 页面跳转 |
| label | 说明文字 |
| separator | 分隔线 |

## 界面操作

- **重置**：把当前页面控件恢复默认值；
- **预览**：在预览环境中应用控件，不写盘；
- **自动填充**：按默认布局排列控件；
- **紧凑排列**：减少间距；
- **清空页面**：移除当前页面控件；
- **停止全部**：停止由控件触发的动作；
- **添加 / 重命名 / 删除**：管理页面；
- **绑定 / 切换式绑定 / 解绑**：给控件或动作分配键位；
- **YSM 检测到的控件**：查看 YSM 模型声明的控件；
- **原生状态机**：开启/关闭 YSM 原生动画状态机；
- **循环播放轮盘动作**：让轮盘动作循环。

:::note
“模型专用设置”中的预览不会写入本地持久化；正式应用后才会保存。
:::

## 作者如何声明控件

作者使用 `avatar_controls`（装饰脚本中为 `cosmetic_controls`）：

```lua
local page = avatar_controls:newPage("main")
page:setTitle("外观")

local enabled = avatar_controls:newToggle("tail_enabled")
enabled:setTitle("启用尾巴")
enabled:setDefault(true)
enabled:setOnChange(function(value)
    log("尾巴：" .. tostring(value))
end)

local size = avatar_controls:newSlider("tail_size")
size:setTitle("尾巴大小")
size:setRange(0.5, 2.0, 0.1)
size:setDefault(1.0)
```

完整方法、页面、值操作与回调见 [`avatar_controls`](/scripting/avatar-controls)。

## 控件值如何被使用

- Lua 可以读取/修改控件值；
- Molang 可以用 `query.ysm_control*` 读取控件值；
- YSM 模型可以用控件驱动动画；
- 控件值可以持久化（普通脚本），装饰脚本使用 `cosmetic_state` 保存实例状态。

## 键盘绑定

- **绑定**：按下按键时触发；
- **切换式绑定**：按下切换开/关；
- **解绑**：移除绑定；
- 绑定可以指向控件或动作；
- 冲突时会显示“已占用”。

## 持久化

| 环境 | 行为 |
| --- | --- |
| 普通脚本 | 控件值可持久化到本地 |
| 装饰脚本 | 使用 `cosmetic_state` 保存实例状态；作用域为账号/装扮 + 实例 + 控件 |
| 预览 | 不写入本地持久化 |

## 常见问题

**界面里没有控件？**
确认脚本已执行、控件已注册，并且当前模型/装饰已启用。

**调整后没有效果？**
检查脚本是否读取了该控件、Molang 查询名是否匹配，以及控件是否被禁用。

**预览正常，正式装备后值丢了？**
预览不写盘；需要在正式环境中重新设置，或确认脚本是否正确持久化。

## 相关页面

- [`avatar_controls`](/scripting/avatar-controls)
- [`cosmetic_state`](/scripting/cosmetic-state)
- [YSM 模型支持](/omnimorph/ysm)
- [Molang 表达式与控制器](/omnimorph/molang)
