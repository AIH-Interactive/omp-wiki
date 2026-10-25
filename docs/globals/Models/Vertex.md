---
title: Vertex（顶点）
sidebar_label: Vertex（顶点）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

顶点对象

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

本页假定：

```lua
local myVertex = models:getVertices("myTexture")[1]
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置该顶点的位置向量

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPos(pos)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                          | 说明                 |
| --------------------------------------------- | -------------------- |
| <code>[Vertex](/globals/Models/Vertex)</code> | 返回自身以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPos(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                          | 说明                 |
| --------------------------------------------- | -------------------- |
| <code>[Vertex](/globals/Models/Vertex)</code> | 返回自身以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myVertex:setPos(1, 2, 3)
```

---

### <code>getPos()</code> \{#getPos}

返回该顶点的位置向量

```lua
getPos()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myVertex:getPos()
```

---

### <code>setUV()</code> \{#setUV}

**别名：** `uv()`

设置该顶点的 UV 向量

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setUV(UV)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| UV   | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                          | 说明                 |
| --------------------------------------------- | -------------------- |
| <code>[Vertex](/globals/Models/Vertex)</code> | 返回自身以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setUV(u, v)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| u    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                          | 说明                 |
| --------------------------------------------- | -------------------- |
| <code>[Vertex](/globals/Models/Vertex)</code> | 返回自身以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myVertex:setUV(8, 8)
```

---

### <code>getUV()</code> \{#getUV}

返回该顶点的 UV 向量

```lua
getUV()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
myVertex:getUV()
```

---

### <code>setNormal()</code> \{#setNormal}

**别名：** `normal()`

设置该顶点的法线向量

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setNormal(normal)
```

**参数：**

| 名称   | 类型                                             | 说明 | 默认值 |
| ------ | ------------------------------------------------ | ---- | ------ |
| normal | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                          | 说明                 |
| --------------------------------------------- | -------------------- |
| <code>[Vertex](/globals/Models/Vertex)</code> | 返回自身以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setNormal(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                          | 说明                 |
| --------------------------------------------- | -------------------- |
| <code>[Vertex](/globals/Models/Vertex)</code> | 返回自身以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myVertex:setNormal(0, 1, 0)
```

---

### <code>getNormal()</code> \{#getNormal}

返回该顶点的法线向量

```lua
getNormal()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myVertex:getNormal()
```

---
