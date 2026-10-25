---
title: 布尔值
sidebar_label: 布尔值
---

布尔值（boolean）是 Lua 中取值为 <code>true</code> 或 <code>false</code> 的一种值。

此外，Lua 还会把任意值视为“真值（truthy）”或“假值（falsey）”。

如果一个值是真值，并且出现在 if 语句或需要布尔值的函数中，该值就会被当作 true。

示例：

```lua
if 0 then
    log("truthy") -- numbers are truthy so this will always be logged
else
    log("falsey")
end
```

如果一个值是假值，并且出现在 if 语句或需要布尔值的函数中，该值就会被当作 false。

示例：

```lua
if nil then
    log("truthy")
else
    log("falsey") -- nil is falsey so this will always be logged
end
```

假值只有 false 和 nil 两个，其他所有值（数字、表、模型部件等）都是真值。（nil 作为值表示“没有信息”，它字面上就是空无一物。）

<code>not</code> 运算符会把值的真假性翻转为 true 或 false。

示例（以下语句都成立）：

```lua
not true == false
not false == true
not nil == true -- a non-boolean value is turned into a boolean
not models == false -- models is a modelpart and truthy, so flipping it turns it into false
```

用在方法中时，<code>true</code> 通常表示启用某项功能，<code>false</code> 表示停用。但在有些地方，返回 true 反而会关闭某项功能；请始终阅读方法、字段或事件的说明，确认布尔值具体起什么作用。
