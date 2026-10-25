---
title: Config（配置）
sidebar_label: Config（配置）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于在多次游戏会话之间保存和加载形象数据的全局 API

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

---

### <code>setName()</code> \{#setName}

**别名：** `name()`

设置目标文件的名称，数据会保存到该文件，也会从该文件加载

默认使用形象名称

```lua
setName(name)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| name | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ConfigAPI](/globals/Config)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
config:setName("Something")
```

---

### <code>getName()</code> \{#getName}

返回目标文件的名称

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | - |

**示例：**

```lua
config:getName()
```

---

### <code>load()</code> \{#load}

加载指定键下保存的变量

如果未提供键，则返回包含所有已保存变量的表

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
load()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | - |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
load(key)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| key | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>AnyType</code> | - |

</TabItem>
</Tabs>

**示例：**

```lua
config:load("apple")
```

---

### <code>save()</code> \{#save}

将变量保存到磁盘上的指定键

如果值为 nil，则从文件中移除该变量

```lua
save(key, value)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| key | <code>[String](/tutorials/types/Strings)</code> | - | - |
| value | <code>AnyType</code> | - | - |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ConfigAPI](/globals/Config)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
config:save("apple", false)
```

---
