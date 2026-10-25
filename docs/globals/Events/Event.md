---
title: Event（事件）
sidebar_label: Event（事件）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Minecraft 中某个事件的钩子。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

可以往一个事件上注册函数，事件发生时就会调用这些函数。

---

### <code>register()</code> \{#register}

在该事件上注册一个函数。

函数按注册顺序执行。

可以额外传入一个字符串参数，把这些函数归到该名字下，便于之后管理。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
register(func)
```

**参数：**

| 名称 | 类型                                                | 说明 | 默认值 |
| ---- | --------------------------------------------------- | ---- | ------ |
| func | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |

**返回：**

| 类型                                        | 说明                   |
| ------------------------------------------- | ---------------------- |
| <code>[Event](/globals/Events/Event)</code> | 返回自身，用于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
register(func, name)
```

**参数：**

| 名称 | 类型                                                | 说明 | 默认值 |
| ---- | --------------------------------------------------- | ---- | ------ |
| func | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |
| name | <code>[String](/tutorials/types/Strings)</code>     | -    | -      |

**返回：**

| 类型                                        | 说明                   |
| ------------------------------------------- | ---------------------- |
| <code>[Event](/globals/Events/Event)</code> | 返回自身，用于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
events.TICK:register(function() end, "Name")
```

---

### <code>clear()</code> \{#clear}

清除该事件上注册的所有函数。

```lua
clear()
```

**返回：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
events.TICK:clear()
```

---

### <code>remove()</code> \{#remove}

从该事件中移除一个函数；如果传入的是字符串，则移除该名字下注册的所有函数。

返回被移除的函数数量。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
remove(name)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| name | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
remove(function)
```

**参数：**

| 名称     | 类型                                                | 说明 | 默认值 |
| -------- | --------------------------------------------------- | ---- | ------ |
| function | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
events.TICK:remove("Name")
```

---

### <code>getRegisteredCount()</code> \{#getRegisteredCount}

返回使用该名字注册的函数数量。

```lua
getRegisteredCount(name)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| name | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
events.TICK:getRegisteredCount("Name")
```

---
