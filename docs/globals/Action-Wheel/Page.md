---
title: Page（动作轮盘页面）
sidebar_label: Page（页面）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

动作轮盘容器，用于存放最多 8 个动作

本页示例统一假定：

```lua
local myPage = action_wheel:newPage()
```

---

## 动作

### <code>newAction()</code> \{#newAction}

在选中页面的指定索引新增一个动作

如果不指定索引，则添加到第一个可用槽位

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
newAction()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 一个动作轮盘动作 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
newAction(index)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | 要放置动作的槽位 | `nil` |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 一个动作轮盘动作 |

</TabItem>
</Tabs>

**示例：**

```lua
local myAction = myPage:newAction()
```

---

### <code>getAction()</code> \{#getAction}

从页面的指定索引获取一个动作

```lua
getAction(index)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | 要获取动作的槽位 | 必填 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 一个动作轮盘动作 |

**示例：**

```lua
myPage:getAction(1)
```

---

### <code>getActions()</code> \{#getActions}

获取按给定偏移量平移后的动作表

如果未指定偏移，则返回此页面中的全部动作

注意：表以槽位号为键，因此空槽位对应的值为 nil

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getActions()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | 包含此页面中全部动作的表 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getActions(shift)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| shift | <code>[Integer](/tutorials/types/Numbers)</code> | 要获取动作的页面偏移 | `nil` |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | 包含此页面指定槽位偏移下全部动作的表 |

</TabItem>
</Tabs>

**示例（重载 1）：**

```lua
myPage:getActions()
```

---

### <code>setAction()</code> \{#setAction}

**别名：** `action()`

在页面的指定索引设置一个动作

如果索引为 -1，则动作会放入最后一个空槽位

```lua
setAction(index, action)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | 页面上要放置动作的槽位 | 必填 |
| action | <code>[Action](/globals/Action-Wheel/Action)</code> | 一个动作轮盘动作 | 必填 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
local myAction = action_wheel:newAction()
myPage:setAction(-1, myAction)
```

---

## 槽位

### <code>setKeepSlots()</code> \{#setKeepSlots}

设置将此页面添加到动作轮盘时，页面当前的槽位是否应被重置

```lua
setKeepSlots(bool)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | 为 true 时槽位不会被重置，为 false 时会被重置 | `false` |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myPage:setKeepSlots(true)
```

---

### <code>shouldKeepSlots()</code> \{#shouldKeepSlots}

获取将此页面添加到动作轮盘时，页面当前的槽位是否会被重置

```lua
shouldKeepSlots()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 为 true 时槽位不会被重置，为 false 时会被重置 |

**示例：**

```lua
myPage:shouldKeepSlots(true)
```

---

### <code>setSlotsShift()</code> \{#setSlotsShift}

**别名：** `slotsShift()`

设置此页面当前的槽位偏移

槽位 1-8 对应偏移 1，槽位 9-16 对应偏移 2，依此类推

```lua
setSlotsShift(shift)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| shift | <code>[Integer](/tutorials/types/Numbers)</code> | 将要显示的页面偏移 | `1` |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myPage:setSlotsShift(1)
```

---

### <code>getSlotsShift()</code> \{#getSlotsShift}

获取此页面当前的槽位偏移

槽位 1-8 对应偏移 1，槽位 9-16 对应偏移 2，依此类推

```lua
getSlotsShift()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | 当前显示的页面偏移 |

**示例：**

```lua
myPage:getSlotsShift()
```

---

## 其他

### <code>getTitle()</code> \{#getTitle}

返回此页面的标题

```lua
getTitle()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | 页面内部使用的名称 |

**示例：**

```lua
myPage:getTitle()
```

---

## 字段

### <code>keepSlots</code> \{#keepSlots}

将此页面添加到动作轮盘时，页面当前的槽位是否应被重置

设置此字段的示例见 [`setKeepSlots`](#setKeepSlots)

**示例：**

```lua
myPage.keepSlots = true
```

---
