---
title: Keybind（按键绑定）
sidebar_label: Keybind（按键绑定）
---

表示脚本中的一个按键绑定

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

实例通过 KeybindAPI 的 newKeybind() 函数获取

本页示例统一假定：

```lua
local myKey = keybinds:newKeybind("Name", "key.keyboard.h", false)
```

---

## 按下与松开

### <code>setOnPress()</code> \{#setOnPress}

**别名：** `onPress()`

设置按下此按键时执行的函数

该函数接收两个参数

第一个参数是一个数字，包含当前按住的修饰键位掩码

Shift = 1，Ctrl = 2，Alt = 4

第二个参数是此按键绑定本身

```lua
setOnPress(function)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| function | <code>[Function](/tutorials/types/Functions)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myKey:setOnPress(function()
    log("hi")
end)
```

---

### <code>setOnRelease()</code> \{#setOnRelease}

**别名：** `onRelease()`

设置松开此按键时执行的函数

该函数接收两个参数

第一个参数是一个数字，包含当前按住的修饰键位掩码

Shift = 1，Ctrl = 2，Alt = 4

第二个参数是此按键绑定本身

```lua
setOnRelease(function)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| function | <code>[Function](/tutorials/types/Functions)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myKey:setOnRelease(function()
    log("hi")
end)
```

---

### <code>isPressed()</code> \{#isPressed}

获取此按键绑定当前是否处于按下状态

```lua
isPressed()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
myKey:isPressed()
```

---

## 按键属性

### <code>setEnabled()</code> \{#setEnabled}

**别名：** `enabled()`

切换此按键绑定是否参与处理

```lua
setEnabled(bool)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myKey:setEnabled(true)
```

---

### <code>setGUI()</code> \{#setGUI}

**别名：** `gui()`

设置 GUI 界面打开时此按键绑定是否仍然触发

```lua
setGUI(bool)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myKey:setGUI(true)
```

---

### <code>getID()</code> \{#getID}

返回此按键绑定的数字 ID

```lua
getID()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
myKey:getID()
```

---

### <code>setKey()</code> \{#setKey}

**别名：** `key()`

设置此按键绑定对应的按键

```lua
setKey(key)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| key | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myKey:setKey("key.keyboard.l")
```

---

### <code>getKey()</code> \{#getKey}

获取此按键绑定当前的按键

```lua
getKey()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | - |

**示例：**

```lua
myKey:getKey()
```

---

### <code>getKeyName()</code> \{#getKeyName}

获取此按键绑定当前按键的名称

```lua
getKeyName()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | - |

**示例：**

```lua
myKey:getKeyName()
```

---

### <code>getName()</code> \{#getName}

获取按键绑定的名称，即创建按键绑定时设置的名称

```lua
getName()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | - |

**示例：**

```lua
myKey:getName()
```

---

### <code>isDefault()</code> \{#isDefault}

检查此按键当前是否为默认状态（未在按键绑定菜单中修改过）

```lua
isDefault()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
myKey:isDefault()
```

---

### <code>isEnabled()</code> \{#isEnabled}

返回此按键绑定是否已启用

```lua
isEnabled()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
myKey:isEnabled()
```

---

### <code>isGuiEnabled()</code> \{#isGuiEnabled}

返回 GUI 界面（聊天、物品栏等）打开时此按键绑定是否仍然生效

```lua
isGuiEnabled()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
myKey:isGuiEnabled()
```

---

## 字段

### <code>press</code> \{#press}

按下按键时运行的函数

该函数接收两个参数

第一个参数是一个数字，包含当前按住的修饰键位掩码

Shift = 1，Ctrl = 2，Alt = 4

第二个参数是此按键绑定本身

如果返回值为 true，则所有使用同一按键的原版按键绑定都会被忽略

设置此字段的示例见 [`setOnPress`](#setOnPress)

---

### <code>release</code> \{#release}

松开按键时运行的函数

该函数接收两个参数

第一个参数是一个数字，包含当前按住的修饰键位掩码

Shift = 1，Ctrl = 2，Alt = 4

第二个参数是此按键绑定本身

如果返回值为 true，则所有使用同一按键的原版按键绑定都会被忽略

设置此字段的示例见 [`setOnRelease`](#setOnRelease)

---
