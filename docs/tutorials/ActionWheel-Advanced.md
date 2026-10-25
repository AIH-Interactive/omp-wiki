---
title: 动作轮盘进阶
unlisted: true
---

动作轮盘进阶教程

如果你还没有读过并理解入门版动作轮盘教程，请先看[这里](../tutorials/ActionWheel.md)。

## 多页面结构

把多个页面连成网络容易让人无从下手。下面给出一种更清晰的写法。

这种构建页面网络的做法把每个页面拆到独立、互不干扰的文件中。这些文件返回一个动作，可以添加到其他页面上。这个动作会把当前页面切换为该文件中的页面，但在切换之前先保存来源页面的引用。这样想回到上一个页面时，只要把当前页面设为保存的那个页面即可。

这样页面就实现了模块化，需要时也能轻松重新组织。更重要的是，它能让多个页面不再那么难以驾驭。

```lua
--ActionWheel.lua
-- This file controls the root Page. All Pages are 'children' of this Page.
local mainpage = action_wheel:newPage()
-- setAction is used to add an Action that already exists to this Page
-- You need to specify the slot the Action wil go into, but -1 can be used to put it in the next available slot.
mainpage:setAction(-1, require("Page1"))
mainpage:setAction(-1, require("Page2"))
action_wheel:setPage(mainpage)
```

<!-- prettier-ignore -->
```lua
--Page1.lua
-- Create the Page
local page = action_wheel:newPage()
-- Define the Actions within the Page (These are dummy example Actions)
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()

-- This variable stores the Page to go back to when done with this Page
local prevPage
-- This Action just sets the stored page as active
page:newAction()
    :title("GoBack")
    :item("minecraft:barrier")
    :onLeftClick(function()
        action_wheel:setPage(prevPage)
    end)

-- Page:newAction automatically adds the Action to the Page.
-- This is unwanted, so action_wheel:newAction() is used so just make an Action.
-- This is the Action that will be returned by require and will be used to navigate to this file's Page
return action_wheel:newAction()
    :title("Page1")
    :onLeftClick(function()
        -- store the current active page so that we can set it back as active later
        prevPage = action_wheel:getCurrentPage()
        -- set this file's page as active
        action_wheel:setPage(page)
    end)
```

<!-- prettier-ignore -->
```lua
--Page2.lua
-- Page2 is just to show that the entire process can be repeated verbatim, so long as the variables are local.
local page = action_wheel:newPage()
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()

local prevPage
page:newAction()
    :title("GoBack")
    :item("minecraft:barrier")
    :onLeftClick(function()
        action_wheel:setPage(prevPage)
    end)

return action_wheel:newAction()
    :title("Page2")
    :onLeftClick(function()
        prevPage = action_wheel:getCurrentPage()
        action_wheel:setPage(page)
    end)
```

## 设置开关型动作的默认状态

这里主要用到的技巧是不经过网络代码直接调用 ping 函数，相关说明见[这里](./Pings#ping-on-init)。

下面的示例会为一个假想的喷气背包模型正确设置默认可见性。

<!-- prettier-ignore -->
```lua
-- This variable's initial value will control the default state of the toggleable thing.
local jetpackEnabled = true
local jetpackModel = models.model.Body.Jetpack -- reference a ModelPart for convenience
local function setJetpack(bool)
    jetpackEnabled = bool -- this will be a ping function, so we still need to set the client's variable for when it is used in the toggle.
    jetpackModel:setVisible(bool)
end
pings.setJetpack = setJetpack -- we now have a normal function and a ping function that calls the normal function after network stuff
-- This event controls the particle effect of the jetpack
function events.tick()
    -- once every 4 ticks while the jetpack is visible
    if jetpackEnabled and world.getTime() % 4 == 0 then
        -- spawn particles relative to the model itself in the world
        local partMatrix = jetpackModel:partToWorldMatrix()
        particles:newParticle("minecraft:flame", partMatrix:apply(3, -6, 0))
        particles:newParticle("minecraft:flame", partMatrix:apply(-3, -6, 0))
    end
end

-- Page boilerplate
local mainpage = action_wheel:newAction()
action_wheel:setPage(mainpage)

-- calling a ping in the script initialization is a bad idea, hence why the reference to the normal function is needed
setJetpack(jetpackEnabled)
mainpage:newAction()
    :title("Enable Jetpack")
    :toggleTitle("Disable Jetpack")
    :onToggle(pings.setJetpack) -- use the ping for the action toggle, as that is still needs to be pinged
    :toggled(jetpackEnabled) -- the toggled function sets the internal state of the Toggle Action. It *does not* call toggle or untoggle.
```
