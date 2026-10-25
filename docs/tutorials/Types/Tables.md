---
title: 表
sidebar_label: 表
---

表（table）是 Lua 中的一种值，可以在指定的键上存放值。用键从表中取值的操作称为“索引”。

## 初始化表

用一对花括号即可创建表。

```lua
local t = {}
```

## 通用索引

<code>table[key]</code> 是索引表的方式。既可以读取该键当前的值，也可以给该键赋值。表的键和值都没有类型限制。用不存在的键索引表时，会返回 <code>nil</code>。这种方式也允许把变量当作键来索引表。

```lua
local v = 6
t[2] = "number key, string value"
t["string key, table value"] = {}
t[false] = true
t[v] = "ree"

print(t[2]) --> "number key, string value"
print(t["reeee"]) --> nil
print(t["string key, table value"]) --> table 3be7a8
```

## 字符串索引简写

如果觉得用字符串索引写起来太啰嗦，那确实如此。<br/>
<code>table.key</code> 是用字符串索引表的简写形式。这种写法对字符串的内容有严格限制。

-   不能以数字开头（<code>t.2fort</code> 无效，请改用 <code>[]</code> 索引，或换一个字符串）
-   不能包含空格、句点或其他特殊字符
-   不能是 Lua 关键字（true、false、local、function）

```lua
t.name = "Katt"
t.age = -1
t.gender = t.name
t.underscores_are_allowed = true
```

## 面向对象方法索引

还有第三种索引表的方式。Figura 中的许多函数会把自己所属的对象作为第一个参数接收，因为同一类型的所有对象都拥有完全相同的函数。这一机制通过 <code>table:key()</code> 实现。<br/>

```lua
local posA = player:getPos()

local posB = player.getPos(player)
```

## 初始化表时赋值

可以在创建表的同时给键赋值。每对键值之间必须用逗号（<code>,</code>）分隔<br/>

<!-- prettier-ignore -->
```lua
local a = {
    [false] = 1,
    ["string with spaces"] = "string",
    [v] = {
        ["a"] = 1,
        ["b"] = 2,
    },
    -- string shorthand rules still apply. This is equivalent to <code>["life"] = 42</code>
    life = 42,
}
```

如果不指定索引，给出的值会自动获得从 <code>1</code> 开始的数字索引。Lua 就是这样处理数组的：数组只是一个当作数组来用的表，也就是所谓的“表数组”。与其他语言不同，Lua 数组的索引从 <code>1</code> 开始，接收数组的函数也期望第一个元素位于 <code>1</code>。

<!-- prettier-ignore -->
```lua
local array = {
    42,        -- [1] = 42
    36,        -- [2] = 36
    1024,      -- [3] = 1024
    1,         -- [4] = 1
    "string",  -- [5] = "string"
    v,         -- [6] = v
    t          -- [7] = t
}
-- newlines are ignored, as with everything in lua
local array2 = { 42, 36, 1024, 1, "string", v, t }
```

## 遍历表

遍历表很简单。<br/>
可以用 <code>pairs</code> 遍历每一个索引。它会访问所有索引，但顺序不确定。在 for 循环中使用 <code>pairs</code> 时，它会返回 2 个值：当前的 <code>key</code>，以及该 <code>key</code> 上当前的 <code>value</code>。<br/>

```lua
for key, value in pairs(t) do
    print(key, value)
end
```

如果遍历顺序很重要，可以用 <code>ipairs</code>，但它只遍历数字索引。遍历表数组时应当用它。它从索引 <code>1</code> 开始，每次加 <code>1</code>，直到表返回 <code>nil</code> 为止。在 for 循环中使用 <code>ipairs</code> 时，它会返回当前索引，以及该 <code>index</code> 上的 <code>value</code>。<br/>

```lua
for index, value in ipairs(array) do
    print(index, value)
end
```

## 表数组的长度

可以用 <code>#</code> 运算符获取表数组的长度。对于使用非数字索引的表，只能借助 <code>pairs</code> 自行统计长度，不过这类表的“长度”通常没有实际用途。长度规则与 <code>ipairs</code> 一致：表中从第一个数字索引开始连续计数，直到某个索引返回 <code>nil</code> 为止。因此 <code>#\{1,2,3,4}</code> 会返回 <code>4</code>，<code>#\{1,2,nil,4}</code> 会返回 <code>2</code>。<br/>
举例来说，<code>ipairs</code> 大致相当于下面这段代码。

```lua
for index = 1, #array, 1 do
    print(index, array[index])
end
```

## 操作表数组

Lua 内置了一些操作表的方法。这里只介绍几个最主要的。<br/>
这些函数都可以通过 <code>tables</code> 全局对象使用。

### <code>table.insert(t, pos, value)</code>

此函数可以在任意索引处添加值，并把其他值后移，为新增的值腾出位置。<br/>
<code>table.insert(array, 1, "e")</code> 会把 <code>"e"</code> 插入到表 <code>array</code> 的开头，其他每个值都后移一个索引。<br/>
要把元素添加到数组末尾时，以 <code>table.insert(t, value)</code> 的形式调用。例如 <code>table.insert(array, "l")</code> 会把 <code>"l"</code> 追加到表 <code>array</code> 的末尾。

### <code>table.remove(t, pos)</code>

此函数可以删除任意索引处的值，并把其他值前移，填补删除后留下的空位。被删除的值也会作为返回值返回。<br/>
<code>table.remove(array, 1)</code> 会删除表中索引 <code>1</code> 处的值，其余所有值都前移一个索引。<br/>
<code>pos</code> 可选，默认值为 <code>#t</code>。<code>table.remove(array)</code> 会删除表中的最后一个值。
