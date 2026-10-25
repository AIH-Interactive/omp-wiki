---
title: Host（主机）
sidebar_label: Host（主机）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

专用于形象主机（Host）的全局 API。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

对其他观察者而言，这些函数不会产生任何效果。

Host API 中的函数不会同步。要在多人游戏中发挥作用，需要通过 [pings](../tutorials/Pings) 同步相关信息。

---

### <code>isHost()</code> \{#isHost}

如果当前脚本实例运行在主机端，则返回 true。

```lua
isHost()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isHost()
```

---

## 玩家数据

### <code>isContainerOpen()</code> \{#isContainerOpen}

检查主机是否打开了容器界面。

```lua
isContainerOpen()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isContainerOpen()
```

---

### <code>isFlying()</code> \{#isFlying}

检查玩家当前是否正在飞行。

```lua
isFlying()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isFlying()
```

---

### <code>isJumping()</code> \{#isJumping}

检查玩家是否正在跳跃。

注意：只有玩家开始跳跃的第一个 tick 内该值才为 true。

```lua
isJumping()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isJumping()
```

---

### <code>getAir()</code> \{#getAir}

获取玩家剩余的氧气值。

```lua
getAir()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
host:getAir()
```

---

### <code>setSlot()</code> \{#setSlot}

用 ItemStack 设置指定槽位。

槽位可以是数字编号（从 0 开始计数），也可以是 /item 命令中使用的槽位字符串。

槽位 -1 表示使用第一个可用槽位。

仅在创造模式下生效。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setSlot(slot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setSlot(slot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setSlot(slot, item)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| item | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
setSlot(slot, item)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code>   | -           | -       |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
host:setSlot(0, "apple")
-- setSlot also accepts an ItemStack retrieved from an actual item or world:newItem()
```

---

### <code>getSlot()</code> \{#getSlot}

获取指定槽位中物品的 ItemStack。

槽位可以是数字编号（从 0 开始计数），也可以是 /item 命令中使用的槽位字符串。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getSlot(slot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getSlot(slot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
host:getSlot(0)
```

---

### <code>getScreenSlot()</code> \{#getScreenSlot}

获取界面槽位中的物品。

槽位可以是数字编号（从 0 开始计数），也可以是 /item 命令中使用的槽位字符串。

如果玩家当前不在任何界面中、界面没有槽位，或槽位索引超过最大值，则返回 nil。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getScreenSlot(slot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getScreenSlot(slot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
host:getScreenSlot(0)
```

---

### <code>getScreenSlotCount()</code> \{#getScreenSlotCount}

获取玩家当前所在界面的槽位数量。

如果玩家当前不在任何界面中，或界面没有槽位，则返回 nil。

```lua
getScreenSlotCount()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
host:getScreenSlotCount()
```

---

### <code>getScreen()</code> \{#getScreen}

获取玩家当前所在界面的类名。

如果玩家当前不在任何界面中，则返回 nil。

```lua
getScreen()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
host:getScreen()
```

---

### <code>getStatusEffects()</code> \{#getStatusEffects}

返回包含玩家全部状态效果的 table。

该 table 中的每一项都是子 table，包含每种状态效果的名称、等级、持续时间和粒子可见性。

```lua
getStatusEffects()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
for _, effect in pairs(host:getStatusEffects()) do
    logTable(effect) -- prints all the effect information into chat
    log(effect.name) -- gets the effect's name and prints it into chat
end
```

---

### <code>getAttackCharge()</code> \{#getAttackCharge}

返回玩家攻击蓄力的比例（0 到 1）。

如果小于 1，每次攻击都会判定为弱攻击。

```lua
getAttackCharge()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
host:getAttackCharge()
```

---

### <code>getReachDistance()</code> \{#getReachDistance}

返回玩家当前的触及距离。

```lua
getReachDistance()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
host:getReachDistance()
```

---

### <code>getPickBlock()</code> \{#getPickBlock}

返回客户端当前选中的目标方块。

分别返回方块、命中位置和目标方块朝向，共三个值。

```lua
getPickBlock()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[BlockState](/globals/World/BlockState)</code> | 目标方块 |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置 |
| <code>[String](/tutorials/types/Strings)</code>      | 目标方块朝向 |

**示例：**

```lua
local block, hitPos, side = host:getPickBlock()
```

---

### <code>getPickEntity()</code> \{#getPickEntity}

返回客户端当前选中的目标实体。

```lua
getPickEntity()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
host:getPickEntity()
```

---

## 聊天

### <code>isChatOpen()</code> \{#isChatOpen}

检查主机是否打开了聊天界面。

```lua
isChatOpen()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isChatOpen()
```

---

### <code>isChatVerified()</code> \{#isChatVerified}

figura.docs.host.is_chat_verified

```lua
isChatVerified()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isChatVerified()
```

---

### <code>sendChatCommand()</code> \{#sendChatCommand}

:::caution

要使用此函数，必须在 Figura 设置中开启 `Chat Messages` 选项。

:::

在聊天栏中发送指定命令。

```lua
sendChatCommand(command)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| command | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:sendChatCommand("kill @a")
```

---

### <code>sendChatMessage()</code> \{#sendChatMessage}

:::caution

要使用此函数，必须在 Figura 设置中开启 `Chat Messages` 选项。

:::

在聊天栏中发送指定消息。

```lua
sendChatMessage(message)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| message | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:sendChatMessage("Hello World")
```

---

### <code>setChatColor()</code> \{#setChatColor}

**别名：** `chatColor()`

设置当前正在聊天窗口中输入的文字颜色。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setChatColor(color)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setChatColor(r, g, b)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
host:setChatColor(0, 0, 1)
```

---

### <code>getChatColor()</code> \{#getChatColor}

获取聊天窗口的文字颜色。

```lua
getChatColor()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
host:getChatColor()
```

---

### <code>setChatMessage()</code> \{#setChatMessage}

用给定文本修改一条聊天消息。

接收一个索引，1 表示聊天中的最后一条消息。

将消息设为 nil 会把它从聊天中移除。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setChatMessage(index)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setChatMessage(index, newMessage)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| index      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| newMessage | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setChatMessage(index, newMessage, backgroundColor)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| index           | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| newMessage      | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| backgroundColor | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
host:setChatMessage(1, "Hi?", vec(1, 0, 0))
```

---

### <code>getChatMessage()</code> \{#getChatMessage}

返回包含某条聊天消息信息的 table。

接收一个索引，1 表示聊天中的最后一条消息。

```lua
getChatMessage(index)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
host:getChatMessage(1)
```

---

### <code>setChatText()</code> \{#setChatText}

**别名：** `chatText()`

:::caution

要使用此函数，必须在 Figura 设置中开启 `Chat Messages` 选项。

:::

把聊天窗口中当前输入的文字设置为指定字符串。

```lua
setChatText(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:setChatText("Hello World")
```

---

### <code>getChatText()</code> \{#getChatText}

获取当前正在聊天窗口中输入的文字。

```lua
getChatText()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
host:getChatText() == "Hello World"
```

---

### <code>appendChatHistory()</code> \{#appendChatHistory}

把消息追加到最近的聊天记录中。

```lua
appendChatHistory(message)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| message | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:appendChatHistory("Hello World")
```

---

## 其他

### <code>setActionbar()</code> \{#setActionbar}

**别名：** `actionbar()`

把动作栏消息设置为给定文本。

布尔参数默认为 false。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setActionbar(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setActionbar(text, animated)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text     | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| animated | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
host:setActionbar("Hello World")
```

---

### <code>setClipboard()</code> \{#setClipboard}

**别名：** `clipboard()`

设置剪贴板文本。

```lua
setClipboard(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:setClipboard("Hello World")
```

---

### <code>getClipboard()</code> \{#getClipboard}

获取剪贴板中的文本。

```lua
getClipboard()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
host:getClipboard()
```

---

### <code>setSubtitle()</code> \{#setSubtitle}

**别名：** `subtitle()`

把当前副标题设置为给定文本。

文本以 JSON 字符串形式传入。

```lua
setSubtitle(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:setSubtitle("Hello World")
```

---

### <code>setTitle()</code> \{#setTitle}

**别名：** `title()`

把当前标题设置为给定文本。

文本以 JSON 形式传入。

```lua
setTitle(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:setTitle("Hello World")
```

---

### <code>setTitleTimes()</code> \{#setTitleTimes}

**别名：** `titleTimes()`

设置标题在屏幕上的停留时间，以及淡入和淡出时间。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setTitleTimes(timesData)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| timesData | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setTitleTimes(fadeInTime, stayTime, fadeOutTime)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| fadeInTime  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| stayTime    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| fadeOutTime | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
host:setTitleTimes(5, 5, 5)
```

---

### <code>setUnlockCursor()</code> \{#setUnlockCursor}

切换鼠标指针的锁定状态：解锁后指针可以在屏幕上自由移动，而不再控制玩家的视角旋转。

```lua
setUnlockCursor(boolean)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| boolean | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:setUnlockCursor(true)
```

---

### <code>clearTitle()</code> \{#clearTitle}

清除界面中的当前标题。

```lua
clearTitle()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
host:clearTitle()
```

---

### <code>isAvatarUploaded()</code> \{#isAvatarUploaded}

检查当前形象是否已上传。

```lua
isAvatarUploaded()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isAvatarUploaded()
```

---

### <code>isCursorUnlocked()</code> \{#isCursorUnlocked}

检查鼠标指针当前是否已解锁。

只对你在脚本中做出的更改作出反应，不包含 Minecraft 自身造成的变化。

```lua
isCursorUnlocked()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
host:isCursorUnlocked()
```

---

### <code>screenshot()</code> \{#screenshot}

截取当前画面，并返回该截图的纹理（Texture）。

```lua
screenshot(name)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

**示例：**

```lua
host:screenshot()
```

---

### <code>swingArm()</code> \{#swingArm}

播放玩家挥动手臂的动画。

如果布尔值为 true，则改由副手挥动。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
swingArm()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
swingArm(offhand)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| offhand | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[HostAPI](/globals/Host)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
host:swingArm()
```

---

### <code>writeToLog()</code> \{#writeToLog}

直接写入 Minecraft 日志，便于记录调试数据，又不会塞满聊天栏。

日志中的前缀为 <code>[Render thread/INFO]: [FIGURA/LUA] -- </code>。

```lua
writeToLog(message)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| message | <code>[String](/tutorials/Types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>nil</code> | -           |

**示例：**

```lua
host:writeToLog("I'm in the Minecraft log!")
```

---

### <code>warnToLog()</code> \{#warnToLog}

直接向 Minecraft 日志写入一条警告，便于记录调试数据，又不会塞满聊天栏。

日志中的前缀为 <code>[Render thread/WARN]: [FIGURA/LUA] -- </code>。

```lua
warnToLog(message)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| message | <code>[String](/tutorials/Types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>nil</code> | -           |

**示例：**

```lua
host:warnToLog("Uh oh!")
```

---

## 字段

### <code>unlockCursor</code> \{#unlockCursor}

把该值设为 true 会解锁鼠标指针，使其可以在屏幕上自由移动，而不再控制玩家的视角旋转。

设置示例见 [`setUnlockCursor`](#setUnlockCursor)。

---
