---
title: VanillaModelPart（原版模型部件）
sidebar_label: VanillaModelPart（原版模型部件）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

表示原版模型中的一个模型部件。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

可用于查询原版的变换值。

---

### <code>setOffsetRot()</code> \{#setOffsetRot}

**别名：** `offsetRot()`

偏移该部件的旋转，在原版数值之上叠加。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOffsetRot(offsetRot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| offsetRot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOffsetRot(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
vanilla_model.HEAD:setOffsetRot(0, 90, 0)
```

---

### <code>getOffsetRot()</code> \{#getOffsetRot}

获取该部件的旋转偏移。

```lua
getOffsetRot()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getOffsetRot()
```

---

### <code>setOffsetScale()</code> \{#setOffsetScale}

**别名：** `offsetScale()`

偏移该部件的缩放，与原版数值相乘。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOffsetScale(offsetScale)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| offsetScale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOffsetScale(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
vanilla_model.HEAD:setOffsetScale(2, 2, 2)
```

---

### <code>getOffsetScale()</code> \{#getOffsetScale}

获取该部件的缩放偏移。

```lua
getOffsetScale()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getOffsetScale()
```

---

### <code>getOriginPos()</code> \{#getOriginPos}

获取 Minecraft 当前应用于该原版模型部件的位置偏移。

```lua
getOriginPos()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getOriginPos()
```

---

### <code>getOriginRot()</code> \{#getOriginRot}

获取 Minecraft 当前应用于该原版模型部件的旋转。

```lua
getOriginRot()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getOriginRot()
```

---

### <code>getOriginScale()</code> \{#getOriginScale}

获取 Minecraft 当前应用于该原版模型部件的缩放。

```lua
getOriginScale()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getOriginScale()
```

---

### <code>getOriginVisible()</code> \{#getOriginVisible}

获取该原版模型部件是否可见，不受你的脚本影响。

```lua
getOriginVisible()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getOriginVisible()
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置该部件的位置，同时保留之前的数值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPos(pos)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPos(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
vanilla_model.HEAD:setPos(0, 10, 0)
```

---

### <code>getPos()</code> \{#getPos}

获取该部件设置的位置。

返回由“set”函数设置的值。

```lua
getPos()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getPos()
```

---

### <code>setRot()</code> \{#setRot}

**别名：** `rot()`

设置该部件的旋转。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setRot(rot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setRot(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
vanilla_model.HEAD:setRot(0, 90, 0)
```

---

### <code>getRot()</code> \{#getRot}

获取该部件设置的旋转。

返回由“set”函数设置的值。

```lua
getRot()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getRot()
```

---

### <code>setScale()</code> \{#setScale}

**别名：** `scale()`

设置该部件的缩放。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setScale(scale)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| scale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setScale(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
vanilla_model.HEAD:setScale(2, 2, 2)
```

---

### <code>getScale()</code> \{#getScale}

获取该部件设置的缩放。

返回由“set”函数设置的值。

```lua
getScale()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

将该部件设置为可见或不可见。

```lua
setVisible(visible)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:setVisible(false)
```

---

### <code>getVisible()</code> \{#getVisible}

获取你将该部件设置为可见还是不可见。

```lua
getVisible()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
vanilla_model.HEAD:getVisible()
```

---
