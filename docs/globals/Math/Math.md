---
title: Math（数学）
sidebar_label: Math（数学）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

包含 Figura 添加到 Lua 默认 math 库表中的函数

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

## 方法

### <code>clamp()</code> \{#clamp}

将给定值限制在 min 与 max 之间

```lua
clamp(value, min, max)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| min | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| max | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
math.clamp(58, 0, 50) -- returns 50
math.clamp(-12, 0, 50) -- returns 0
math.clamp(26, 0, 50) -- returns 26
```

---

### <code>lerp()</code> \{#lerp}

从第一个参数线性插值到第二个参数，第三个参数作为插值系数

适用于普通数字、同类型的向量以及同类型的矩阵

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
lerp(a, b, t)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| a | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| b | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| t | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
lerp(a, b, t)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| a | <code>[Vector](/category/vectors)</code> | - | - |
| b | <code>[Vector](/category/vectors)</code> | - | - |
| t | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector](/category/vectors)</code> | - |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
lerp(a, b, t)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| a | <code>[Matrix](/category/matrices)</code> | - | - |
| b | <code>[Matrix](/category/matrices)</code> | - | - |
| t | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix](/category/matrices)</code> | - |

</TabItem>
</Tabs>

**示例：**

```lua
local rot = 0
local _rot = 0

function events.tick()
    _rot = rot
    rot = rot + 1
end

function events.render(delta)
    -- highlight-next-line
    models.model:setRot(math.lerp(_rot, rot, delta))
end
```

---

### <code>lerpAngle()</code> \{#lerpAngle}

与默认的 lerp 函数类似，但数字被限制在 0-360 的范围内

插值沿最短角度方向进行

例如，对 340 与 20 以 0.75 为系数插值，结果为 10

```lua
lerpAngle(a, b, t)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| a | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| b | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| t | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
math.lerpAngle(340, 20, 0.75) -- returns 10
```

---

### <code>map()</code> \{#map}

将给定值从一个区间映射到另一个区间

例如，区间 0-200 中的值 20 映射到区间 100-200 后，结果为 110

```lua
map(value, oldMin, oldMax, newMin, newMax)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| oldMin | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| oldMax | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| newMin | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| newMax | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
math.map(20, 0, 200, 100, 200) -- returns 110
```

---

### <code>round()</code> \{#round}

将给定数字四舍五入到最接近的整数

```lua
round(value)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
math.round(21.74) -- returns 22
```

---

### <code>shortAngle()</code> \{#shortAngle}

返回两个角度之间的最短夹角

例如，角度 350 度与 0 度之间的最短夹角为 10 度

```lua
shortAngle(from, to)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| from | <code>[Number](/tutorials/types/Numbers)</code> | - | - |
| to | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
math.shortAngle(350, 0) -- returns 10
```

---

### <code>sign()</code> \{#sign}

返回给定数字的符号

正数返回 1，负数返回 -1，0 返回 0

```lua
sign(value)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | <code>[Number](/tutorials/types/Numbers)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
math.sign(124) -- returns 1
math.sign(-12) -- returns -1
math.sign(0) -- returns 0
```

---

## 字段

### <code>playerScale</code> \{#playerScale}

玩家相对于世界的缩放常数

**示例：**

```lua
math.playerScale
```

---

### <code>worldScale</code> \{#worldScale}

世界相对于玩家的缩放常数

**示例：**

```lua
math.worldScale
```

---
