---
title: 数字
sidebar_label: 数字
---

数字（number）是 Lua 中表示实数的一种值。

Lua 没有单独的整数类型，但有些方法会要求传入整数，也就是要求传入一个整数值。

```lua
local myNumber = 5
local anotherNumber = 72.3
```

Lua 支持数学运算符，并遵循标准的运算顺序。因此下面的代码会输出 -13。

```lua
local result = 8 - 8 * 3 + 3
```

有一个常见运算符你可能还不熟悉，那就是 <code>%</code>，也就是取模（modulo）运算符。可以把它理解成求余函数。要让某段逻辑每隔若干刻执行一次，常用写法就用到了这个运算符：

```lua
function events.tick()
    if world.getTime() % 20 == 0 then -- read: if the amount of passed ticks is divisible by 20 (so every 20 ticks), do something.
        -- do something
    end
end
```

Lua 还自带 <code>math</code> 库，其中包含许多用于处理数字的实用函数（Figura 另外补充了少数几个）。
需要注意：所有三角函数接收和返回的都是弧度，而许多 Figura 函数使用的是角度。
