---
title: 函数
sidebar_label: 函数
---

函数（function）里包含的代码，可以通过调用这个函数来执行。如果需要在多处复用同一段代码，或者想让代码结构更清晰，函数就很有用。

定义函数时，先写 function 关键字，再写函数名和 ()。

紧随其后的代码都会被视为函数体的一部分，直到用 end 关键字告诉 Lua 函数到此结束。为了更易读，我们通常用空格或制表符缩进函数内的代码。

在函数被调用之前，其中的 print 语句不会执行。

```lua
function hello()
    print("Hello function!")
end
```

调用函数时，在函数名后加上 ()，函数内的所有代码会先逐行执行完毕，然后才继续执行后面的代码。

```lua
print("Outside.")
hello()
print("Below hello.")
```

这段代码会输出：

```lua
"Outside."
"Hello function!"
"Below hello."
```

也可以给函数传一些值供它使用：把变量名写在 () 内即可，这些变量称为参数（parameter）。函数还能返回一个新值，调用处可以取得这个返回值。如果没有写 return，函数会返回 nil（见下文“类型”一节）。
下面是一个计算两数之和的函数示例。

<!-- prettier-ignore -->
```lua
function sum(a, b) -- parameters separated by commas
    local s = a + b -- calculate the sum
    return s -- return the sum to be used by the caller
end

local var1 = 2
local var2 = 8
local var3 = sum(var1, var2) -- call the function and pass two variables. note that these do not have to be called a and b
print(var3) --> 10, as you might have noticed, `print` is also a function that takes a parameter
```

有些函数由 Figura 调用，你可能对事件（event）已经很熟悉。

```lua
function events.render(delta, context)
    log(context)
end
```

这种情况下，函数每帧（针对每个上下文）运行一次，参数由 Figura 提供。

有时函数会作为方法的参数传入，例如动作的 setOnLeftClick、按键绑定的 setOnPress。这些方法会调用传入的函数（因此不需要用名字来调用），所以可以给它们传入匿名函数（anonymous function）。匿名函数就是没有名字的函数。

```lua
myKey:setOnPress(function()
    log("hi")
end)
```
