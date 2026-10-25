---
title: Keybinds（按键绑定）
sidebar_label: Keybinds（按键绑定）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于创建 Keybind 实例的全局 API

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>newKeybind()</code> \{#newKeybind}

**别名：** `of()`

创建并返回一个新的 Keybind

name 用作按键绑定菜单中显示的名称

key 参数是按键的标识符，例如 "key.keyboard.r"

布尔参数 gui 决定此按键绑定始终生效，还是只在没有打开任何界面时生效

所有按键名称请用 docs enum 命令查看

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
newKeybind(name)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| name | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
newKeybind(name, key)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| name | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| key  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -    |

</TabItem>
<TabItem value="overload-3" label="重载 3" default>

```lua
newKeybind(name, key, gui)
```

**参数：**

| 名称 | 类型                                              | 说明 | 默认值 |
| ---- | ------------------------------------------------- | ---- | ------ |
| name | <code>[String](/tutorials/types/Strings)</code>   | -    | -      |
| key  | <code>[String](/tutorials/types/Strings)</code>   | -    | -      |
| gui  | <code>[Boolean](/tutorials/types/Booleans)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
local myKey = keybinds:newKeybind("Name", "key.keyboard.h", false)
```

---

### <code>getVanillaKey()</code> \{#getVanillaKey}

以字符串形式返回绑定到给定动作的按键 id

所有按键名称与原版动作请用 docs enum 命令查看

```lua
getVanillaKey(id)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| id   | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
local myKey = keybinds:newKeybind("Name", keybinds:getVanillaKey("key.attack"), false)
```

---

### <code>fromVanilla()</code> \{#fromVanilla}

基于原版按键创建新的 Keybind

```lua
fromVanilla(id)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| id   | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -    |

**示例：**

```lua
local myKey = keybinds:fromVanilla("key.attack")
```

---

### <code>getKeybinds()</code> \{#getKeybinds}

返回包含所有已注册按键绑定的表

```lua
getKeybinds()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ---- |
| <code>[Table](/tutorials/types/Tables)</code> | -    |

**示例：**

```lua
keybinds:getKeybinds()
```

---
