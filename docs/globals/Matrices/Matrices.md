---
title: Matrices（矩阵）
sidebar_label: Matrices（矩阵）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

全局 API，提供创建和操作矩阵的函数。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

通过名称 “matrices” 访问。

---

## Matrix2

### <code>mat2()</code> \{#mat2}

使用给定参数作为列创建 Matrix2。

如果调用时不传参数，则返回 2x2 单位矩阵。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
mat2()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
mat2(col1, col2)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| col1 | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |
| col2 | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.mat2()
```

---

### <code>rotation2()</code> \{#rotation2}

创建一个按指定角度旋转的新 Matrix2。

角度以度为单位。

```lua
rotation2(angle)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    |

**示例：**

```lua
matrices.rotation2(90)
```

---

### <code>scale2()</code> \{#scale2}

创建一个按指定系数缩放的新 Matrix2。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
scale2(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
scale2(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.scale2(2, 2)
```

---

## Matrix3

### <code>mat3()</code> \{#mat3}

使用给定参数作为列创建 Matrix3。

如果调用时不传参数，则返回 3x3 单位矩阵。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
mat3()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
mat3(col1, col2, col3)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| col1 | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| col2 | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| col3 | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.mat3()
```

---

### <code>rotation3()</code> \{#rotation3}

创建一个按指定角度旋转的新 Matrix3。

角度以度为单位，旋转顺序为 ZYX。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
rotation3(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
rotation3(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.rotation3(90, 90, 90)
```

---

### <code>scale3()</code> \{#scale3}

创建一个按指定系数缩放的新 Matrix3。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
scale3(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
scale3(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.scale3(2, 2, 2)
```

---

### <code>translate3()</code> \{#translate3}

创建一个按指定偏移平移的新 Matrix3。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
translate3(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
translate3(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.translate3(90, 90)
```

---

### <code>xRotation3()</code> \{#xRotation3}

创建一个绕 X 轴按指定角度旋转的新 Matrix3。

角度以度为单位。

```lua
xRotation3(angle)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
matrices.xRotation3(90)
```

---

### <code>yRotation3()</code> \{#yRotation3}

创建一个绕 Y 轴按指定角度旋转的新 Matrix3。

角度以度为单位。

```lua
yRotation3(angle)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
matrices.yRotation3(90)
```

---

### <code>zRotation3()</code> \{#zRotation3}

创建一个绕 Z 轴按指定角度旋转的新 Matrix3。

角度以度为单位。

```lua
zRotation3(angle)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
matrices.zRotation3(90)
```

---

## Matrix4

### <code>mat4()</code> \{#mat4}

使用给定参数作为列创建 Matrix4。

如果调用时不传参数，则返回 4x4 单位矩阵。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
mat4()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
mat4(col1, col2, col3, col4)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| col1 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -    | -      |
| col2 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -    | -      |
| col3 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -    | -      |
| col4 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.mat4()
```

---

### <code>rotation4()</code> \{#rotation4}

创建一个按指定角度旋转的新 Matrix4。

角度以度为单位，旋转顺序为 ZYX。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
rotation4(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
rotation4(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.rotation4(90, 90, 90)
```

---

### <code>scale4()</code> \{#scale4}

创建一个按指定系数缩放的新 Matrix4。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
scale4(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
scale4(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.scale4(2, 2, 2)
```

---

### <code>translate4()</code> \{#translate4}

创建一个按指定偏移平移的新 Matrix4。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
translate4(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
translate4(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
matrices.translate4(90, 90, 90)
```

---

### <code>xRotation4()</code> \{#xRotation4}

创建一个绕 X 轴按指定角度旋转的新 Matrix4。

角度以度为单位。

```lua
xRotation4(angle)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

**示例：**

```lua
matrices.xRotation4(90)
```

---

### <code>yRotation4()</code> \{#yRotation4}

创建一个绕 Y 轴按指定角度旋转的新 Matrix4。

角度以度为单位。

```lua
yRotation4(angle)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

**示例：**

```lua
matrices.yRotation4(90)
```

---

### <code>zRotation4()</code> \{#zRotation4}

创建一个绕 Z 轴按指定角度旋转的新 Matrix4。

角度以度为单位。

```lua
zRotation4(angle)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

**示例：**

```lua
matrices.zRotation4(90)
```

---
