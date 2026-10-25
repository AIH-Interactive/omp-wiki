---
title: Vector3（三维向量）
sidebar_label: Vector3（三维向量）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

保存 3 个数字的向量

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

可以使用 “vectors” API 中的函数创建

本页所有示例都假定：

```lua
local vec3 = vec(2, 5, 3)
```

---

## 数学

### <code>add()</code> \{#add}

把给定的向量或数值加到当前向量上，并返回自身以支持链式调用

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
add(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
add(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec3:add(2, 0.5, 4)
```

---

### <code>div()</code> \{#div}

把当前向量除以给定的向量或数值，并返回自身以支持链式调用

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
div(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
div(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec3:div(2, 3, 2)
```

---

### <code>mul()</code> \{#mul}

把给定的向量或数值乘到当前向量上，并返回自身以支持链式调用

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
mul(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
mul(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec3:mul(2, 3, 2)
```

---

### <code>sub()</code> \{#sub}

从当前向量中减去给定的向量或数值，并返回自身以支持链式调用

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
sub(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
sub(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec3:sub(1, 0.5, 1)
```

---

### <code>ceil()</code> \{#ceil}

返回当前向量的副本，各值向上取整

```lua
ceil()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:ceil()
```

---

### <code>clampLength()</code> \{#clampLength}

修改当前向量，使长度落在 minLength 与 maxLength 之间

如果向量长度为零，则不修改

返回自身以支持链式调用

```lua
clampLength(minLength, maxLength)
```

**参数：**

| 名称      | 类型                                            | 说明 | 默认值 |
| --------- | ----------------------------------------------- | ---- | ------ |
| minLength | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| maxLength | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:clampLength(1, 5)
```

---

### <code>clamped()</code> \{#clamped}

返回当前向量的修改副本，长度被限制在 minLength 到 maxLength 之间

如果向量长度为零，副本的长度也为零

```lua
clamped(minLength, maxLength)
```

**参数：**

| 名称      | 类型                                            | 说明 | 默认值 |
| --------- | ----------------------------------------------- | ---- | ------ |
| minLength | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| maxLength | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:clamped(1, 3)
```

---

### <code>cross()</code> \{#cross}

把当前向量设为它与另一个向量的叉积

返回自身以支持链式调用

```lua
cross(other)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| other | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:cross(vec(2, 3, 5))
```

---

### <code>crossed()</code> \{#crossed}

返回一个新向量，它是当前向量与另一个向量的叉积

```lua
crossed(other)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| other | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:crossed(vec(2, 5, 4))
```

---

### <code>dot()</code> \{#dot}

返回当前向量与另一个向量的点积

```lua
dot(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
vec3:dot(vec(2, 2, 3))
```

---

### <code>floor()</code> \{#floor}

返回当前向量的副本，各值向下取整

```lua
floor()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:floor()
```

---

### <code>length()</code> \{#length}

返回当前向量的长度

```lua
length()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
vec3:length()
```

---

### <code>lengthSquared()</code> \{#lengthSquared}

返回当前向量长度的平方

只关心长度的相对大小时适合使用它，因为它省去了一次开平方运算

```lua
lengthSquared()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
vec3:lengthSquared()
```

---

## 变换

### <code>scale()</code> \{#scale}

按给定系数缩放当前向量，并返回自身以支持链式调用

```lua
scale(factor)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ---- | ------ |
| factor | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:scale(2)
```

---

### <code>normalize()</code> \{#normalize}

修改当前向量，使长度为 1；原始长度为 0 时不修改

返回自身以支持链式调用

```lua
normalize()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:normalize()
```

---

### <code>normalized()</code> \{#normalized}

返回当前向量的副本，长度为 1；原始长度为 0 时保持为 0

```lua
normalized()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:normalized()
```

---

### <code>offset()</code> \{#offset}

按给定系数偏移当前向量，把该系数加到全部分量上，并返回自身以支持链式调用

```lua
offset(factor)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ---- | ------ |
| factor | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:offset(2)
```

---

### <code>reduce()</code> \{#reduce}

把当前向量对给定的向量或数值取模，并返回自身以支持链式调用

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
reduce(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
reduce(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec3:reduce(1, 0.5, 2)
```

---

### <code>transform()</code> \{#transform}

用给定矩阵变换当前向量，并返回自身以支持链式调用

```lua
transform(mat)
```

**参数：**

| 名称 | 类型                                              | 说明 | 默认值 |
| ---- | ------------------------------------------------- | ---- | ------ |
| mat  | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:transform(matrices.mat3())
```

---

## 工具

### <code>set()</code> \{#set}

把当前向量设为给定的数值

nil 值按 0 处理

返回自身以支持链式调用

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
set(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
set(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec3:set(1, 2, 3)
```

---

### <code>applyFunc()</code> \{#applyFunc}

对当前向量的每个元素调用给定函数，并把函数的返回值设为该向量的值

函数会收到当前索引及其值作为参数

返回自身以支持链式调用

```lua
applyFunc(func)
```

**参数：**

| 名称 | 类型                                                | 说明 | 默认值 |
| ---- | --------------------------------------------------- | ---- | ------ |
| func | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
-- Example 1:
vec3:applyFunc(math.sqrt)
-- Example 2:
vec3:applyFunc(function(v)
    return v + math.random() - 0.5
end)
```

---

### <code>augmented()</code> \{#augmented}

返回当前向量的增广形式

增广形式是长度加 1 的向量

新轴取给定值；未指定该值时取 1

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
augmented()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
augmented(value)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| value | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vec3:augmented(4)
```

---

### <code>copy()</code> \{#copy}

创建并返回当前向量的副本

```lua
copy()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:copy()
```

---

### <code>reset()</code> \{#reset}

把当前向量重置为全零，并返回自身以支持链式调用

```lua
reset()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:reset()
```

---

### <code>unpack()</code> \{#unpack}

把当前向量的各值作为独立的数字返回

```lua
unpack()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | x 值 |
| <code>[Number](/tutorials/types/Numbers)</code> | y 值 |
| <code>[Number](/tutorials/types/Numbers)</code> | z 值 |

**示例：**

```lua
local x, y, z = vec3:unpack()
```

---

## 转换

### <code>toDeg()</code> \{#toDeg}

返回当前向量的副本，以角度（度）表示

```lua
toDeg()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:toDeg()
```

---

### <code>toRad()</code> \{#toRad}

返回当前向量的副本，以弧度表示

```lua
toRad()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
vec3:toRad()
```

---

## 字段

### <code>x</code> \{#x}

当前向量的第一个坐标

也可以通过索引 “r” 和 [1] 获取

**示例：**

```lua
vec3.x
vec3.r
vec3[1]
```

---

### <code>y</code> \{#y}

当前向量的第二个坐标

也可以通过索引 “g” 和 [2] 获取

**示例：**

```lua
vec3.y
vec3.g
vec3[2]
```

---

### <code>z</code> \{#z}

当前向量的第三个坐标

也可以通过索引 “b” 和 [3] 获取

**示例：**

```lua
vec3.z
vec3.b
vec3[3]
```

---
