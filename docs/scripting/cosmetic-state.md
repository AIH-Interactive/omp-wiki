---
sidebar_position: 9
title: cosmetic_state（装饰状态）
sidebar_label: cosmetic_state（装饰状态）
---

# cosmetic_state

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：装饰脚本

`cosmetic_state` 保存当前装饰实例的标量状态。它只接受布尔、有限数字或短字符串，不能保存表、函数或 Java 对象。

## 作用域

状态按以下组合隔离：

```text
账号 / 装扮 + 实例 ID + 控件或状态键
```

不同装饰实例之间不会共享状态；预览环境不会写入本地持久化。

## 方法

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `get(id)` | 任意标量或 nil | 读取状态 |
| `set(id, value)` | 自身 | 写入状态 |

## 示例

```lua
local visible = cosmetic_state:get("visible")
if visible == nil then
    visible = true
    cosmetic_state:set("visible", true)
end

local toggle = cosmetic_controls:newToggle("visible")
toggle:setTitle("显示装饰")
toggle:setDefault(visible)
toggle:setOnChange(function(value)
    cosmetic_state:set("visible", value)
    models.MyCosmetic:setVisible(value)
end)
```

## 允许的值

| 类型 | 说明 |
| --- | --- |
| 布尔 | `true` / `false` |
| 数字 | 必须是有限值 |
| 字符串 | 短字符串，受字节上限限制 |

其他类型会抛出 `COSMETIC_STATE_VALUE`。

## 注意

- 状态是“标量声明”，不是通用存储；
- 观察端恢复不会触发主动修改回调；
- 草稿与正式装备的状态可能不同；
- 不要用状态保存大段文本或模型数据。

## 相关页面

- [`avatar_controls`](/scripting/avatar-controls)
- [装饰系统](/omnimorph/cosmetics)
- [模型专用设置](/omnimorph/avatar-controls)
