---
title: Pings（网络消息）
sidebar_label: Pings
---

关于 ping 的说明

## 不同步的行为

许多模组中，Minecraft 服务器与其客户端之间会通信，从而让一切保持同步。你的客户端会把某些信息发送给服务器，服务器再把这些信息转发给其他已连接的客户端。<br/>
但 Figura 的脚本和模型完全运行在客户端，不与服务器通信。

这对作为用户的你意味着什么？意味着你的客户端没有分享给其他人的某些信息，不会同步给其他玩家。
一些示例：

-   按键绑定
    -   如果其他客户端能收到你的全部击键，那将是非常严重的安全问题。实际发送的从来不是具体的击键，而只是击键产生的结果。
-   动作轮盘
    -   动作轮盘是 Figura 新增的功能。还记得 Figura 从不与 Minecraft 服务器通信吗？动作轮盘为什么不同步也就很明显了。
-   HostAPI
    -   HostAPI 中的变量仅有你自己——形象的所有者、运行 Minecraft 的机器的所有者——才能访问。其中的所有函数都是不与 Minecraft 服务器同步的原版变量。它们被封装在一个清晰而明确的包中，表明它们永不同步。这一点与 PlayerAPI 不同，后者可以认为始终同步（<code>player:getNbt()</code> 中的某些情况除外）

那么，如果不能通过 Minecraft 服务器同步信息，我们该如何与其他玩家同步呢？答案是 Pings。

## 一般 Ping

Ping 利用 Figura 的后端（Backend）与其他客户端同步信息。
Ping 是函数：调用时，它会触发所有其他客户端针对各自持有的你的形象调用同一个函数。

### Ping 频率限制

后端会限制你在一定时间内可以发送的数据量。
面向开发者的限额如下：

-   每秒 1024 字节
-   每秒 32 次 ping

只要达到其中任意一项上限，后端就会在一段时间内忽略你发出的所有通信。

### 可作为 Ping 参数的值

Ping 可以发送大多数原始类型和部分 userdata 类型。如果传入下面没有列出的 userdata 类型（例如 [ModelPart](../globals/Models/Models.md)），它会被转换为 <code>nil</code>。
所有可作为 ping 参数的类型都会用一个字节表示所发送数据的类型。这个字节不计入下面列出的字节总数。

-   <code>nil</code> - 0 字节
    -   如果使用不支持的类型作为参数，它会被替换为 <code>nil</code>。
-   <code>boolean</code> - 0 字节
-   <code>integer</code> - 1-4 字节
    -   <code>integers</code> 只占用它实际需要的字节数。
    -   <code>integers</code> 是有符号的。例如，要只占一个字节，取值必须介于 -128 与 127 之间。
-   <code>double</code> - 8 字节
    -   只要数值带有小数，或者超出 4 字节 <code>integer</code> 的范围，它就会以 <code>double</code> 发送。
-   <code>string</code> - 2+n 字节
    -   <code>strings</code> 始终用 2 个字节保存长度。
    -   ASCII 字符每个占一个字节。
    -   UTF-8 字符每个占多个字节。
    -   可以发送的字符串绝对最大长度为 <code>65535</code> 个字符。如果发送更长的字符串，它会被截断。
-   <code>table</code> - 字节数非常多
    -   每个键和值都会作为数据发送，因此字节开销很高。
    -   建议永远不要通过 ping 发送 table。
-   <code>VectorN</code> - 1+8\*N 字节
    -   向量用一个字节保存该向量的大小。
    -   向量始终被视为保存 <code>doubles</code>。如果你有一个整数向量，建议改为用 3 个独立参数发送。
-   <code>MatrixN</code> - 2+8\*W\*H 字节
    -   矩阵会保存矩阵的宽度和高度，然后把每个值保存为 <code>double</code>。

### Ping

下面是一个 ping 示例。

```lua
function pings.pingName(
thing -- `thing` means that this function accepts a value, which it will refer to as `thing`, as a parameter
)
    print("Ping")
    print(".")
    print("Data Received:", thing)
    print(".")
    print("Pong")
end
```

它接受一个变量，并把它打印到聊天栏作为示例。

要调用它，像调用其他任意 Lua [函数](Types/Functions.md) 一样调用即可。

```lua
pings.pingName("This is a string wooooooooooooooooo")
```

当你作为主机调用该 ping 时，函数会带着传入的数据在所有其他客户端上执行，无论它们当前处于什么状态。<br/>
这意味着如果你向 ping 传入只有主机才有的值，其他客户端也会带着这个仅主机可见的信息执行该 ping。

需要注意的是，如果非主机客户端执行到调用 ping 的那一行，该调用会被完全忽略。不会向后端发送任何数据，ping 的内容也不会执行。

Ping 函数可以传给需要函数作为参数的函数，例如 Action 的 <code>onToggle</code>。

```lua
actionVariable:onToggle(pings.pingName)
```

记住，我们传递的是函数本身这个变量。下面的写法传递的是 ping 函数的 _返回值_，而它几乎肯定是 <code>nil</code>，因为 Ping _本就不应_ 返回值。

```lua
--do not do
actionVariable:onToggle(pings.pingName())
```

## 进阶 Ping

视使用场景而定，下面这些技巧可能很有用。

### 在初始化时 Ping

在脚本首次加载时调用 ping 函数是个糟糕的主意。只有当作为主机的你加载形象时，这个 ping 才会在其他客户端上执行。如果那时其他客户端还没有加载你的形象，它可能永远不会执行；而且这也完全没有必要——如果你只是想在形象首次启动时做点什么，其中并不涉及不同步的行为，用普通函数即可。

如何绕过这个问题？当你把一个函数赋值给 <code>pings</code> 表中的一个索引时，该 Lua 函数会被替换成 Java 函数。函数本身不能被修改，所以如果在赋值给 <code>pings</code> 表之前先保存这个函数，我们就可以像普通函数一样使用它，同时把同一份代码当作 ping 函数使用。

```lua
local function doThing(state)
    models.modelA:setVisible(state)
    models.modelB:setVisible(not state)
end
pings.doThing = doThing
-- doThing and pings.doThing are 2 completely separate values at this point, as the pings table has replaced the index at pings.doThing with a Java Function that wraps the doThing Lua Function.

local keybindState = false
-- I call the local doThing instead of pings.doThing, as pings.doThing is a function that invokes network code.
-- This ensures that the default state is set correctly. If this was a ping function, both models will be visible for other clients until you press the keybind.
doThing(keybindState)
local keyA = keybinds:newKeybind("KeybindName", "key.keyboard.k")
function keyA.press()
    keybindState = not keybindState
    -- We still need to call the ping function in the keybind.
    pings.doThing(keybindState)
end
```

另一种做法是在 ping 中把 <code>models.modelA:setVisible(state) models.modelB:setVisible(not state)</code> 这部分再写一遍。<br/>
对于较大的 ping，重写已经定义过的代码会很麻烦，这正是该技巧的用处。

### 字节数组

某些情况下你需要发送大量原始字节，并且要求足够高效。最高效的方式是发送字符串。

除了表示长度的固定 2 个字节外，字符串中每个 ASCII 字符始终占 1 个字节（UTF-8 字符由多个 ASCII 字符组成，会被解释为单个字符）。因此它的字节数非常稳定，容易预测，也就更容易避免触发频率限制。

下面是字节数组与字符串之间的基本转换，可以随时通过 ping 发送，并在客户端还原成字节数组。

```lua
function pings.receiveData(str)
    local byteArray = table.pack(string.byte(str))
    printTable(byteArray)
end

local packet = {}
for i = 1, 20 do
    table.insert(packet, math.random(0, 255))
end
local keyA = keybinds:newKeybind("KeybindName", "key.keyboard.k")
function keyA.press()
    local packedString = string.char(table.unpack(packet))
    pings.receiveData(packedString)
end
```
