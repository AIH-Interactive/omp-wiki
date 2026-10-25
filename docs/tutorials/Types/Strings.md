---
title: 字符串
sidebar_label: 字符串
---

字符串（string）是 Lua 中表示字符序列的一种值。

字符串不会被当作代码解析，其中的内容会按字面作为字符处理。

## 创建字符串

字符串最常用引号（"）创建：

```lua
"hello" -- this is a string, as identified by the quotes bracketing it
hello -- not a string
```

但如果字符串本身就需要包含引号呢？有两种办法。
第一种是用反斜杠“抵消”引号的作用。在特殊字符前加一个反斜杠，
该字符就会按它在当前语境（这里是字符串内部）中的含义解释，而不是按它在代码中的常规用法（常规用法会结束字符串）解释。

```lua
"Figura is an \"awesome\" mod!"
```

不过这种写法不好看，也不容易读。更简单的做法是用一个本身不是引号的定界字符来包裹字符串。
Lua 实际上有 3 种表示字符串的方式：<code>"</code>、<code>'</code> 和 <code>\[\[</code>（最后一种后面再讲）。知道这一点后，写带引号的字符串就轻松多了：

```lua
'Figura is an "awesome" mod!'
```

在需要写 [JSON 字符串](../../globals/Nameplate#using-json) 时，这种写法尤其有用，因为 JSON 本身就要用引号。

最后一种定界符是 <code>\[\[</code>。这种写法虽然更啰嗦，但在两种情况下很实用：字符串里有大量引号、撇号等字符，不想让它们提前结束字符串；或者需要多行字符串。针对前一种用途，可以在方括号之间加入 <code>=</code> 号，进一步区分字符串的边界。由于这些特殊性质，这类字符串中的反斜杠不会转义其他字符。

```lua
local string1 = [['Wow'! It's a "string" with square brackets around it. Extraordinary.]]
local string2 =
    [[
        This string has multiple lines
        and would be displayed as such across multiple lines.
        No other string operator supports this behavior without special characters.
    ]]
local string3 = [=====[This, too, is valid, as long as you use the same number of = symbols.]=====]
local string4 = [[These \'backslashes\' are also in the string, and don't change anything!]]
```

## 操作字符串

最常见的字符串操作是拼接（concatenation），也就是把多个字符串合并起来。在 Lua 中通过 <code>..</code> 运算符完成。例如：

```lua
local a = 81
local b = 235
print("The equation " .. a .. " + " .. b .. " is equal to " .. a + b)
```

字符串只能与其他字符串和数字拼接。其他类型与字符串拼接时会报错。

Lua 的 <code>string</code> 库还提供了许多用于操作字符串的实用函数。可以直接以 <code>string.func(args)</code> 的形式调用这些函数；如果用 <code>:</code> 或 <code>.</code> 在字符串上调用函数，实际调用的是对应的字符串库函数（如果该函数存在）——使用这种写法时，记得把字符串字面量用括号包起来。下面列出其中最常用的一些。

-   <code>string.sub(str, pos1, pos2)</code> 返回给定范围（含边界）内的子串
    -   <code>("ASDFGHIJKL"):sub(2, 4)</code> → <code>SDF</code>
-   <code>string.lower(str)</code> 返回字符串的小写形式
-   <code>string.upper(str)</code> 返回字符串的大写形式
-   <code>string.len(str)</code> 返回字符串的长度，等价于 <code>#str</code>
-   <code>string.find(str, pattern)</code> 成功时返回起始索引、结束索引和捕获内容，失败时返回 nil
    -   可以传入第三个参数（数字），指定开始搜索的起始索引
    -   可以传入第四个参数（布尔值），禁用模式中的特殊字符
-   <code>string.gsub(str, pattern, repl)</code> 返回字符串副本，其中所有 <code>pattern</code> 都被替换为 <code>repl</code>
-   <code>string.match(str, pattern)</code> 在字符串中查找 pattern 的第一个匹配项，成功时返回匹配内容或捕获内容，失败时返回 nil
    -   如果要捕获多个匹配项，<code>string.gmatch</code> 会返回所有匹配的迭代器
-   <code>string.format(str, ...)</code> 把所有的“指令”替换为对应的参数。
    -   指令由 % 加一个字母构成：<code>d</code> 表示十进制整数，<code>f</code> 表示浮点数，<code>s</code> 表示字符串。
    -   <code>string.format("%02d/%02d/%04d", 5, 11, 1990)</code> → 05/11/1990
    -   注意：数字的组合用于指定所需的位数和补零数量。

你可能已经注意到上面用到了“模式”（pattern）这个词。这些模式可以只是普通字符串，但 Lua 也提供了类似正则表达式的灵活模式匹配系统。想深入了解，请参阅 [PIL](https://www.lua.org/pil/20.2.html)。
