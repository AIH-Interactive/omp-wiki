---
sidebar_position: 1
title: Vectors（向量 API）
sidebar_label: Vectors（向量 API）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

一个全局 API，提供专门用于创建和操作向量的函数

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

通过名称 `vectors` 访问

:::info

Vector API 中的函数不会把 `self` 作为参数。因此调用时应使用 `.`，而不是 `:`。

```lua
-- error-next-line
vectors:worldToScreenSpace(vec(1, 2, 3))

-- highlight-next-line
vectors.worldToScreenSpace(vec(1, 2, 3))
```

:::

---

## 向量创建

### <code>vec()</code> \{#vec}

创建并返回一个尺寸合适的向量，用于保存传入的参数

例如：调用 vec(3, 4, 0, 2) 时，函数会返回包含这些值的 Vector4。

此函数还有一个全局别名 “vec”，因此可以省略 “vectors.” 前缀。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
vec(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
vec(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
vec(x, y, z, w)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| w    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.vec(90, 90, 90)
```

---

### <code>vec2()</code> \{#vec2}

创建并返回包含给定值的 Vector2

nil 值会变为 0

```lua
vec2(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
vectors.vec2(90, 90)
```

---

### <code>vec3()</code> \{#vec3}

创建并返回包含给定值的 Vector3

nil 值会变为 0

```lua
vec3(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
vectors.vec3(90, 90, 90)
```

---

### <code>vec4()</code> \{#vec4}

创建并返回包含给定值的 Vector4

nil 值会变为 0

```lua
vec4(x, y, z, w)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| w    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

**示例：**

```lua
vectors.vec4(90, 90, 90, 90)
```

---

## 颜色

### <code>hexToRGB()</code> \{#hexToRGB}

把十六进制字符串表示的颜色解析为 RGB 格式的向量

十六进制开头的 “#” 可写可不写，长度不限，但只有前 6 位十六进制数字会被解析；也支持长度为 3 的短十六进制。

例如：“#42” 与 “420000” 相同，“F0B” 与 “FF00BB” 相同。

```lua
hexToRGB(hex)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| hex  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
vectors.hexToRGB("#5bbcf4")
vectors.hexToRGB("SOFT_BLUE")
```

---

### <code>hsvToRGB()</code> \{#hsvToRGB}

把给定颜色从 HSV 格式转换为 RGB 格式

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
hsvToRGB(hsv)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| hsv  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
hsvToRGB(h, s, v)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| h    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| s    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.hsvToRGB(181 / 360, 68 / 100, 66 / 100)
```

---

### <code>intToRGB()</code> \{#intToRGB}

把给定颜色从整数（integer）格式转换为 RGB 格式

```lua
intToRGB(color)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| color | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
vectors.intToRGB(838860750)
```

---

### <code>rgbToHSV()</code> \{#rgbToHSV}

把给定颜色从 RGB 格式转换为 HSV 格式

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
rgbToHSV(rgb)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
rgbToHSV(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.rgbToHSV(81 / 255, 68 / 255, 66 / 255)
```

---

### <code>rgbToHex()</code> \{#rgbToHex}

把给定颜色从 RGB 格式转换为十六进制格式

返回值不包含 “#”。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
rgbToHex(rgb)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
rgbToHex(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.rgbToHex(81 / 255, 68 / 255, 66 / 255)
```

---

### <code>rgbToInt()</code> \{#rgbToInt}

把给定颜色从 RGB 格式转换为整数（integer）格式

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
rgbToInt(rgb)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
rgbToInt(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.rgbToInt(50 / 255, 50 / 255, 50 / 255)
```

---

## 其他

### <code>angleToDir()</code> \{#angleToDir}

把俯仰角与偏航角（单位为度）转换为方向向量

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
angleToDir(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
angleToDir(pitch, yaw)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| pitch | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| yaw   | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.angleToDir(90, 70)
```

---

### <code>rotateAroundAxis()</code> \{#rotateAroundAxis}

围绕给定的轴向向量旋转一个向量

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
rotateAroundAxis(angle, vec, axis)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| vec   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| axis  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
rotateAroundAxis(angle, x, y, z, axis)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| x     | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| y     | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| z     | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| axis  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
rotateAroundAxis(angle, vec, axisX, axisY, axisZ)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| vec   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| axisX | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| axisY | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| axisZ | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
rotateAroundAxis(angle, x, y, z, axisX, axisY, axisZ)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| x     | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y     | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z     | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| axisX | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| axisY | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| axisZ | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.rotateAroundAxis(180, vec(1, 2, 3), vec(0, 1, 0))
```

---

### <code>toCameraSpace()</code> \{#toCameraSpace}

把世界中的位置转换为相对于观察者相机的位置

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
toCameraSpace(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
toCameraSpace(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.toCameraSpace(vec(1, 2, 3))
```

---

### <code>worldToScreenSpace()</code> \{#worldToScreenSpace}

把世界中的位置转换为相对于观察者屏幕的位置

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
worldToScreenSpace(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
worldToScreenSpace(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vectors.worldToScreenSpace(vec(1, 2, 3))
```

---
