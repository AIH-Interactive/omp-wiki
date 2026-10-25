---
title: Vector2（二维向量）
sidebar_label: Vector2（二维向量）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

一个保存 2 个数值的向量。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

可以通过 “vectors” API 中的函数创建。

本页所有示例都假设：

```lua
local vec2 = vec(2, 5)
```

---

## 数学

### <code>add()</code> \{#add}

将给定的向量或数值加到本向量上，并返回自身，便于链式调用。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
add(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
add(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec2:add(2, 0.5)
```

---

### <code>div()</code> \{#div}

将本向量除以给定的向量或数值，并返回自身，便于链式调用。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
div(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
div(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec2:div(2, 3)
```

---

### <code>mul()</code> \{#mul}

将给定的向量或数值乘到本向量上，并返回自身，便于链式调用。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
mul(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
mul(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec2:mul(2, 3)
```

---

### <code>sub()</code> \{#sub}

从本向量中减去给定的向量或数值，并返回自身，便于链式调用。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
sub(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
sub(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec2:sub(1, 0.5)
```

---

### <code>ceil()</code> \{#ceil}

返回本向量的副本，各数值向上取整。

```lua
ceil()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:ceil()
```

---

### <code>clampLength()</code> \{#clampLength}

修改本向量，使其长度介于 minLength 与 maxLength 之间。

如果向量长度为零，则保持不变。

返回自身，便于链式调用。

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
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:clampLength(1, 5)
```

---

### <code>clamped()</code> \{#clamped}

返回本向量修改后的副本，其长度被限制在 minLength 到 maxLength 之间。

如果向量长度为零，则副本长度也为零。

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
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:clamped(1, 3)
```

---

### <code>dot()</code> \{#dot}

返回本向量与另一个向量的点积。

```lua
dot(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
vec2:dot(vec(2, 2))
```

---

### <code>floor()</code> \{#floor}

返回本向量的副本，各数值向下取整。

```lua
floor()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:floor()
```

---

### <code>length()</code> \{#length}

返回本向量的长度。

```lua
length()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
vec2:length()
```

---

### <code>lengthSquared()</code> \{#lengthSquared}

返回本向量长度的平方。

只关心相对长度时适合使用，因为它避免了一次开方计算。

```lua
lengthSquared()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
vec2:lengthSquared()
```

---

## 变换

### <code>scale()</code> \{#scale}

按给定的系数缩放本向量，并返回自身，便于链式调用。

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
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:scale(2)
```

---

### <code>normalize()</code> \{#normalize}

修改本向量，使其长度为 1；如果原长度为 0，则保持不变。

返回自身，便于链式调用。

```lua
normalize()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:normalize()
```

---

### <code>normalized()</code> \{#normalized}

返回本向量的副本，长度为 1；如果原长度为 0，则副本长度也为 0。

```lua
normalized()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:normalized()
```

---

### <code>offset()</code> \{#offset}

按给定的系数偏移本向量，即把该系数加到所有分量上，并返回自身，便于链式调用。

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
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:offset(2)
```

---

### <code>reduce()</code> \{#reduce}

按给定的向量或数值对本向量取模，并返回自身，便于链式调用。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
reduce(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
reduce(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec2:reduce(1, 0.5)
```

---

### <code>transform()</code> \{#transform}

用给定的矩阵变换本向量，并返回自身，便于链式调用。

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
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:transform(matrices.mat2())
```

---

## 工具

### <code>set()</code> \{#set}

把本向量设置为给定的数值。

nil 值按 0 处理。

返回自身，便于链式调用。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
set(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
set(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
vec2:offset(2)
```

---

### <code>applyFunc()</code> \{#applyFunc}

对本向量的每个元素调用给定函数，并把向量各元素设为函数的返回值。

调用时会把当前索引及其数值作为函数参数。

返回自身，便于链式调用。

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
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- Example 1:
vec2:applyFunc(math.sqrt)
-- Example 2:
vec2:applyFunc(function(v)
    return v + math.random() - 0.5
end)
```

---

### <code>augmented()</code> \{#augmented}

返回本向量的增广形式。

增广形式是一个长度加 1 的向量。

新轴使用给定的值；未指定时使用 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
augmented()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

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
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
vec2:augmented(4)
```

---

### <code>copy()</code> \{#copy}

创建并返回本向量的副本。

```lua
copy()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:copy()
```

---

### <code>reset()</code> \{#reset}

把本向量重置为全零，并返回自身，便于链式调用。

```lua
reset()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:reset()
```

---

### <code>unpack()</code> \{#unpack}

把本向量的各个数值作为独立数字返回。

```lua
unpack()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | x 值 |
| <code>[Number](/tutorials/types/Numbers)</code> | y 值 |

**示例：**

```lua
local x, y = vec2:unpack()
```

---

## 转换

### <code>toDeg()</code> \{#toDeg}

返回本向量的副本，单位为度。

```lua
toDeg()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:toDeg()
```

---

### <code>toRad()</code> \{#toRad}

返回本向量的副本，单位为弧度。

```lua
toRad()
```

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
vec2:toRad()
```

---

## 字段

### <code>x</code> \{#x}

本向量的第一个坐标。

也可以通过索引 "r" 和 [1] 获取。

**示例：**

```lua
vec2.x
vec2.r
vec2[1]
```

---

### <code>y</code> \{#y}

本向量的第二个坐标。

也可以通过索引 "g" 和 [2] 获取。

**示例：**

```lua
vec2.y
vec2.g
vec2[2]
```

---
