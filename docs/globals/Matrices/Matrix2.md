---
title: Matrix2（2×2 矩阵）
sidebar_label: Matrix2（2×2 矩阵）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

2 行 2 列的矩阵。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

本页示例均假定：

```lua
local myMat = matrices.mat2()
```

---

## 数学运算

### <code>add()</code> \{#add}

把另一个矩阵加到当前矩阵上。

返回自身，便于链式调用。

```lua
add(other)
```

**参数：**

| 名称  | 类型                                              | 说明 | 默认值 |
| ----- | ------------------------------------------------- | ---- | ------ |
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:add(matrices.mat2():scale(2))
```

---

### <code>sub()</code> \{#sub}

从当前矩阵中减去另一个矩阵。

返回自身，便于链式调用。

```lua
sub(other)
```

**参数：**

| 名称  | 类型                                              | 说明 | 默认值 |
| ----- | ------------------------------------------------- | ---- | ------ |
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:sub(matrices.mat2():scale(2))
```

---

### <code>det()</code> \{#det}

计算并返回当前矩阵的行列式。

```lua
det()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
myMat:det()
```

---

### <code>invert()</code> \{#invert}

对当前矩阵求逆，会直接修改矩阵内部的值。

返回自身，便于链式调用。

```lua
invert()
```

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:invert()
```

---

### <code>inverted()</code> \{#inverted}

返回当前矩阵的逆矩阵副本。

```lua
inverted()
```

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:inverted()
```

---

### <code>multiply()</code> \{#multiply}

将当前矩阵乘以另一个矩阵，另一个矩阵放在左侧。

返回自身，便于链式调用。

```lua
multiply(other)
```

**参数：**

| 名称  | 类型                                              | 说明 | 默认值 |
| ----- | ------------------------------------------------- | ---- | ------ |
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:multiply(matrices.mat2():scale(2))
```

---

### <code>rightMultiply()</code> \{#rightMultiply}

将当前矩阵乘以另一个矩阵，另一个矩阵放在右侧。

返回自身，便于链式调用。

```lua
rightMultiply(other)
```

**参数：**

| 名称  | 类型                                              | 说明 | 默认值 |
| ----- | ------------------------------------------------- | ---- | ------ |
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:rightMultiply(matrices.mat2():scale(2))
```

---

## 访问器

### <code>getColumn()</code> \{#getColumn}

以向量形式获取当前矩阵的指定列。

索引与通常一样从 1 开始。

```lua
getColumn(col)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| col  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
myMat:getColumn(1)
```

---

### <code>getRow()</code> \{#getRow}

以向量形式获取当前矩阵的指定行。

索引与通常一样从 1 开始。

```lua
getRow(row)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| row  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
myMat:getRow(1)
```

---

## 变换

### <code>apply()</code> \{#apply}

把给定的值视为一个向量，在该向量末尾补 1 做增广，再与矩阵相乘，最后去掉增广项，返回由前几个分量组成的向量。

```lua
apply(x)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
myMat:apply()
```

---

### <code>applyDir()</code> \{#applyDir}

把给定的值视为一个向量，在该向量末尾补 0 做增广，再与矩阵相乘，最后去掉增广项，返回由前几个分量组成的向量。

```lua
applyDir(x)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
myMat:applyDir()
```

---

### <code>rotate()</code> \{#rotate}

按指定角度旋转当前矩阵，会直接修改矩阵内部的值。

角度以度为单位。

返回自身，便于链式调用。

```lua
rotate(degrees)
```

**参数：**

| 名称    | 类型                                            | 说明 | 默认值 |
| ------- | ----------------------------------------------- | ---- | ------ |
| degrees | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:rotate(90)
```

---

### <code>scale()</code> \{#scale}

按指定比例缩放当前矩阵，会直接修改矩阵内部的值。

返回自身，便于链式调用。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
scale(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
scale(x, y)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myMat:scale(2, 2)
```

---

### <code>transpose()</code> \{#transpose}

转置当前矩阵，会直接修改矩阵内部的值。

转置即交换矩阵的行与列。

返回自身，便于链式调用。

```lua
transpose()
```

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:transpose()
```

---

### <code>transposed()</code> \{#transposed}

返回当前矩阵的转置副本。

转置即交换矩阵的行与列。

```lua
transposed()
```

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:transposed()
```

---

## 工具

### <code>set()</code> \{#set}

把当前矩阵的数值设为传入矩阵的数值。

返回自身，便于链式调用。

```lua
set(other)
```

**参数：**

| 名称  | 类型                                              | 说明 | 默认值 |
| ----- | ------------------------------------------------- | ---- | ------ |
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:set()
```

---

### <code>augmented()</code> \{#augmented}

对当前矩阵做增广，新增一行和一列。

新增位置的对角线上填 1，其余位置填 0。

```lua
augmented()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
myMat:augmented()
```

---

### <code>copy()</code> \{#copy}

创建并返回当前矩阵的新副本。

```lua
copy()
```

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:copy()
```

---

### <code>reset()</code> \{#reset}

把当前矩阵重置为单位矩阵。

返回自身，便于链式调用。

```lua
reset()
```

**返回值：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myMat:reset()
```

---
