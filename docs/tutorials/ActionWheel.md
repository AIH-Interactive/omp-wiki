---
title: 动作轮盘
---

动作轮盘大部分功能的教程。

如果只想直接复制现成代码、不想看教程，请跳到[这里](./ActionWheel/#here-is-the-full-copy-paste-for-an-example-action-wheel)。

动作轮盘是 Figura 提供的界面元素，可以添加高度可自定义的动作，为你的形象提供额外功能。

动作轮盘以页面为单位运作，同一时间只能有一个页面处于激活状态。<br/>
页面包含动作。一个页面可以放任意数量的动作，但动作轮盘一次最多只能渲染 8 个。当激活的页面动作多于 8 个时，可以用鼠标滚轮在该页面内各组 8 个动作之间切换。

[动作轮盘](../globals/action-wheel)的文档页有更多针对具体函数的示例。

## 示例动作轮盘

第一步是创建用来存放动作的页面，通过 <code>newPage</code> 函数完成。

```lua
local mainPage = action_wheel:newPage()
```

这样只是创建了一个新页面，仅此而已。保存后尝试打开动作轮盘（默认按键为 B），会看到提示说当前没有激活的页面。用 <code>setPage</code> 函数传入一个页面对象的引用，即可设置激活页面。

```lua
action_wheel:setPage(mainPage)
```

搞定。有了一个空白新页面，Figura 不再报错。接下来添加一些动作。<br/>
可以在页面对象上调用 <code>newAction</code> 函数。它会创建一个新动作，_并且_把它添加到该页面。

严格来说，不必把动作存到变量里。如果要存，请给每个动作取唯一的变量名。所有动作共用同一个变量名，在做更高级的用法时会出问题。

```lua
local action = mainPage:newAction()
```

新动作有了，但外观几乎看不出什么。我们来加标题、加显示物品，顺便改一下鼠标悬停时显示的颜色。

要记住，所有动作函数都返回自身。因此可以把函数链式串起来，始终修改同一个动作。

<!-- prettier-ignore -->
```lua
local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
```

好看，但没有实际功能。我们给 <code>leftClick</code> 字段加一个函数。左键点击该动作时，保存在动作 <code>leftClick</code> 字段中的函数就会被调用。

<!-- prettier-ignore -->
```lua
local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    -- the onLeftClick function just sets the Action's leftClick field
    :onLeftClick(function()
        print("Hello World!")
    end)
```

现在这个动作能做事了。你可能没注意到，但当前代码有一个明显的问题。

问题在于 leftClick 中的代码只会在你自己的电脑上执行。

正如 [Pings](./Pings) 中所述，Figura 完全运行在客户端。动作轮盘是 Figura 添加的功能，因此它永远不会通过 Minecraft 服务器在客户端之间同步。所以必须使用 Pings，借助 Figura 的后端在客户端之间同步数据。

第一步，把原本在 leftClick 中执行的代码写成一个 ping 函数。然后不再给 <code>leftClick</code> 赋匿名函数，而是直接把 ping 函数本身赋给 <code>leftClick</code>。

**_重要：所有 ping 函数名必须唯一_**<br/>
另外，请让 ping 函数的名字能说明它的作用。我 _很讨厌_ 在 Discord 的求助频道里看到 <code>pings.actionClicked</code> 这种名字。请写成 <code>pings.playEmote1</code> 或 <code>pings.setArmorVisibility</code> 这样。

<!-- prettier-ignore -->
```lua
-- Create ping function that does the same thing the Action would have done.
-- It must be defined above the Action.
function pings.actionClicked()
    print("Hello World!")
end

local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    -- Pass in the ping function itself into onLeftClick
    :onLeftClick(pings.actionClicked)
```

这样，这个动作就能在所有客户端上正确执行其内容了。

这能正确地把 ping 函数的执行时机同步到所有客户端；但如果要在 ping 中传参数，还需要稍作修改。

<!-- prettier-ignore -->
```lua
function pings.actionClicked(a)
  print("Hello World!", a)
end

local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    :onLeftClick(function()
        pings.actionClicked(math.random())
    end)
```

这里的做法是在另一个函数里调用 ping 函数。

下面的代码是新手常犯的错误。<br/>
对不熟悉代码的人来说它看起来是对的，但它的含义是“先调用 ping 函数，再把返回值赋给 <code>leftClick</code> 字段”。<br/>
ping 永远没有返回值，因此 <code>leftClick</code> 被赋成了 <code>nil</code>，也就是什么都没有。

<!-- prettier-ignore -->
```lua
mainPage:newAction()
    :onLeftClick(pings.actionClicked2(math.random()))
    -- Do not do use this code. It will not work.
```

#### 完整示例：一份可直接复制的动作轮盘 \{#here-is-the-full-copy-paste-for-an-example-action-wheel}

<!-- prettier-ignore -->
```lua
local mainPage = action_wheel:newPage()
action_wheel:setPage(mainPage)

function pings.actionClicked()
    print("Hello World!")
    -- animation example (commented out to avoid erroring):
    -- animations.bbmodelname.animationname:play()
end

local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    :onLeftClick(pings.actionClicked)
```

### 开关示例 \{#toggle-example}

这是 onToggle 函数的示例，它会在两种状态之间切换。它本身无法直接运行，因为没有创建页面。

<!-- prettier-ignore -->
```lua
function pings.toggling(state)
    models:setVisible(state)
    -- animation toggle example (commented out to avoid erroring):
    -- animations.bbmodelname.animationname:setPlaying(state)
end

local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("disabled")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    :setOnToggle(pings.toggling)
```

### 多个动作示例

使用多个动作时，给动作和 ping 取唯一的名字很重要。

<!-- prettier-ignore -->
```lua
local mainPage = action_wheel:newPage()
action_wheel:setPage(mainPage)

function pings.actionClicked() -- this ping is named actionClicked
    print("Hello World!")
end

local action = mainPage:newAction()
    -- this action is saved to action
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    :onLeftClick(pings.actionClicked)
    -- this calls the ping named actionClicked


function pings.toggling(state)
    -- this ping is named toggling. it's important that all pings have unique names
    models:setVisible(state)
end

local toggleaction = mainPage:newAction()
    -- this action is saved to toggleaction. it's important that actions are saved to unique variables
    :title("disabled")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    :setOnToggle(pings.toggling) 
    -- this calls the ping named toggling
```

### 多个页面示例

<!-- prettier-ignore -->
```lua
local mainPage = action_wheel:newPage()
local secondPage = action_wheel:newPage() -- make sure you save the pages to unique variables
action_wheel:setPage(mainPage) -- this is setting the page you'll see when you first open the wheel to mainPage
local toSecond = mainPage:newAction()
    :title("Change To Second Page")
    :item("item_frame")
    :onLeftClick(function()
    -- this is a new action on mainPage. its purpose will be to swap to secondPage
    -- this doesn't need to be pinged
    log("Swapped to the second page")
    action_wheel:setPage(secondPage)
end)

local toMain = secondPage:newAction()
    :title("Change To Main Page")
    :item("glow_item_frame")
    :onLeftClick(function()
    -- this is a new action on secondPage. its purpose will be to swap to mainPage
    log("Swapped to the main page")
    action_wheel:setPage(mainPage)
    end)

local newAction = secondPage:newAction()
    :title("Hello")
    :item("zombie_head")
    :onLeftClick(function()
    -- this is a second action on the second page just to show it can be done
    log("Hello World")
    end)
```

## 延伸阅读

动作的更多信息见[这里](../globals/Action-Wheel/Action.md)。

页面的更多信息见[这里](../globals/Action-Wheel/Page.md)。

## 进阶动作轮盘

进阶动作轮盘教程见[这里](../tutorials/ActionWheel-Advanced)。

#### 想直接跳过教程看代码

如果直接翻到页面底部，只想复制代码而不看教程，请跳到[这里](./ActionWheel/#here-is-the-full-copy-paste-for-an-example-action-wheel)。
