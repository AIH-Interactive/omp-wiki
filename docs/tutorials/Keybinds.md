---
title: 按键绑定
sidebar_label: 按键绑定
---

按键绑定教程

通过 Figura 的按键绑定 API，你可以让脚本监听按键按下，从而触发各种效果。常见用途是触发动画，或开启、关闭 modelParts。

按键绑定属于不同步的信息，这意味着如果不使用 ping，其他玩家根本无法知道你按下了某个键。本指南中所有示例按键绑定都会配合 ping 使用。

**注意：玩家未加载（即你处于渲染距离之外）时按键绑定依然可用；如果在这段时间内调用 player API，脚本会报错。** 你可以通过加入这段检查来避免这类错误：<code>if not player:isLoaded() then return end</code>，把它放在 **_ping 内部_** 执行的第一行代码处。

## 示例按键绑定

首先要做的是初始化按键绑定

```lua
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
```

此时，这个按键绑定会出现在形象的按键绑定列表中——可通过 Figura 菜单打开——名称为 Keybind Name，并绑定到字母 H。但现在按下 H 还不会有任何反应。

更多按键绑定 id 可以在 [KeybindsList](../enums/Keybinds-List.md) 页面找到

检测按键绑定有多种方式，最常用的是 <code>press</code> 和 <code>release</code>，因为它们最容易通过 ping 同步。如果你还不熟悉 ping，请参阅 [Pings](./Pings)。

在创建按键之后，我们会把按键的按下事件绑定到一个 ping 函数。绑定要写在创建之后，因为代码自上而下执行，按键必须先存在。

```lua
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h", false)
exampleKey.press = pings.examplePing
```

在创建 pings.examplePing 函数之前，这段代码本身不会有任何效果。该函数必须写在把 press 赋值为 ping 函数的代码之前，因为 ping 函数需要先存在才能被赋值。如果写在后面，则什么也不会发生。

末尾的 false 决定当背包之类的 GUI 打开时按键绑定是否仍然生效。该参数可以省略，省略时取值视为 false。如果设为 true，那么无论是否有 GUI 打开或关闭，这个按键绑定都会运行。

```lua
function pings.examplePing()
    log("Pressed!")
end
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
exampleKey.press = pings.examplePing
```

这样就完成了！现在每次按下 H，这个按键绑定都会在聊天栏输出 Pressed!。此时你可以在 ping 函数里写任意代码，它们都会被同步。

另一种方式是使用 <code>release</code>，它在按键松开时运行，而不是在第一次按下时运行。

## 用按键绑定切换开关

这段代码和上一个示例非常相似，只是增加了一个我们用来切换的布尔值

```lua
local keybindState = true
-- Here the keybindState is true, meaning the first press will swap it to false
-- If you wish the first press to swap to false, change the true to false above
function pings.examplePing(state)
    log("state is " .. tostring(state))
    models:setVisible(state)
    -- This will toggle the visibility of all or models, add in a model path to turn on/off specific modelParts
    -- animations.bbmodelName.animationName:setPlaying(not state)
    -- And this is an example of toggling an animation on/off, I'm using not state here because the first press will set this toggle to false and thusly stop the animation, swapping the boolean value like this will make the first press play it
end
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
exampleKey.press = function()
    keybindState = not keybindState
    -- This not is flipping the boolean value between true and false
    pings.examplePing(keybindState)
end
-- This time .press is being tied to a function that is then calling the ping, instead of being 'attached' to it directly.
```

## 检测按键是否被按住

如果你熟悉相关写法，可以使用 <code>isPressed()</code> 函数检测按键是否被按住，但不推荐这样做，因为配合使用 press 和 release 要有效得多。

```lua
local keybindState = false
-- keybindState is the variable you will be using to keep track of the pressed-ness of the keybind
function pings.examplePing(state)
    keybindState = state
    -- keybindState is made equivalent to the state sent by press or release for use in other parts of the script
end
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
exampleKey.press = function()
    pings.examplePing(true)
end
-- Here, examplePing is sending the boolean value true to the ping function
exampleKey.release = function()
    pings.examplePing(false)
end
-- When it's released, the boolean value false will be sent, indicating that the key is no longer being pressed

-- This is unnecessary, but can be used to track the state of keybindState so you can see it working, at this point you can use keybindState wherever and however you wish- as long as it's in the same script file
function events.tick()
    log(keybindState)
end
```

## 取消按键按下

使用 `return` 可以“取消”一次按键（Minecraft 不会把它记录为按下）。具体来说，如果在按键按下对应的函数中 `return true`，这次按下就会被取消。返回非真值不会取消按键，因此可以用一个切换变量来控制返回值。注意：在 ping 中 return 不会取消按键，只有在按键绑定的 press 函数内 return 才能取消。

下面是一个示例：取消对 `w` 键的检测，同时仍然发送 ping。

<!-- prettier-ignore -->
```lua
function pings.examplePing()
    log("Pressed!")
end
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.w")
exampleKey.press = function() 
    pings.examplePing() return true 
end
```

如果你想取消按键但不发送 ping，完全可以做到。但 return 必须始终放在函数的末尾。

## 使用原版按键绑定

如果你想检测攻击、前进这类原版操作，又希望在别人把“前进”绑定到方向键时仍然兼容，可以直接获取原版按键绑定来使用。实现方式有多种，这里沿用前面示例中的方法。

```lua
local exampleKey = keybinds:newKeybind("Keybind Name", keybinds:getVanillaKey("key.forward"))
```

这样无论“前进”绑定到什么键，都能检测到。<code>getVanillaKey()</code> 需要一个 key id，它来自一份特定的 id 列表，列表中的每个 id 都对应一个原版按键绑定。这些 id 可以在 [keyIDs](../enums/KeyIDs.md) 枚举中找到。
