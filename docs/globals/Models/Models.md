---
sidebar_position: 1
title: ModelPart（模型部件）
sidebar_label: ModelPart（模型部件）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

表示模型树中的一个节点，在 Blockbench 中通常对应一个组、立方体或网格。

每个 bbmodel 文件本身就是一个 ModelPart，你的所有模型都包含在一个名为 `models` 的全局 ModelPart 中。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

---

## 变换

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

设置该部件显示或隐藏。

默认值为 nil，表示该部件沿用父部件的可见性。

```lua
setVisible(visible)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ----------- | ------- |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setVisible(false)
```

---

### <code>getVisible()</code> \{#getVisible}

获取该模型部件是否可见。

默认值为 nil，表示渲染时沿用父部件的可见性。

```lua
getVisible()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
models:getVisible()
```

---

### <code>setRot()</code> \{#setRot}

**别名：** `rot()`

设置该部件的绝对旋转。

旋转值为 nil 时按 0 处理。

角度以度为单位。

如需相对旋转值，请参阅 “offset” 系列旋转函数。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setRot(rot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setRot(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setRot(0, 90, 0)
```

---

### <code>getRot()</code> \{#getRot}

获取模型部件的旋转，包含它在 Blockbench 中的旋转。

如需相对旋转值，请参阅 “offset” 系列旋转函数。

```lua
getRot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getRot()
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置该部件相对于 Blockbench 中位置的坐标偏移。

坐标值为 nil 时按 0 处理。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPos(pos)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPos(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setPos(0, 5, 0)
```

---

### <code>getPos()</code> \{#getPos}

获取模型部件的位置，即相对于它在 Blockbench 中位置的偏移。

只有调用 setPos() 后才会偏离 \{0,0,0}。

```lua
getPos()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getPos()
```

---

### <code>setScale()</code> \{#setScale}

**别名：** `scale()`

设置该部件的缩放系数。

缩放值为 nil 时按 1 处理。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setScale(scale)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| scale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setScale(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setScale(2, 2, 2)
```

---

### <code>getScale()</code> \{#getScale}

获取模型部件的缩放，即相对于它在 Blockbench 中尺寸的倍数。

只有调用 setScale() 后才会偏离 \{1,1,1}。

```lua
getScale()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getScale()
```

---

### <code>setPivot()</code> \{#setPivot}

**别名：** `pivot()`

设置该部件的绝对轴心。

值为 nil 时按 0 处理。

如需相对轴心偏移，请参阅 “offset” 系列轴心函数。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPivot(pivot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| pivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPivot(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setPivot(0, 5, 0)
```

---

### <code>getPivot()</code> \{#getPivot}

获取模型部件的轴心点，包含它在 Blockbench 中的轴心。

如需相对值，请参阅 “offset” 系列轴心函数。

```lua
getPivot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getPivot()
```

---

### <code>setOffsetRot()</code> \{#setOffsetRot}

**别名：** `offsetRot()`

设置该部件的旋转偏移。

旋转值为 nil 时按 0 处理。

角度以度为单位。

如需绝对旋转值，请参阅不带 offset 的旋转函数。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOffsetRot(offsetRot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --------- | ------------------------------------------------ | ----------- | ------- |
| offsetRot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOffsetRot(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setOffsetRot(0, 90, 0)
```

---

### <code>getOffsetRot()</code> \{#getOffsetRot}

获取模型部件的旋转偏移，即相对于它在 Blockbench 中旋转的偏移。

如需绝对旋转值，请参阅不带 offset 的旋转函数。

```lua
getOffsetRot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getOffsetRot()
```

---

### <code>setOffsetScale()</code> \{#setOffsetScale}

**别名：** `offsetScale()`

设置该部件的缩放偏移。

值为 nil 时按 1 处理。

如需绝对缩放值，请参阅不带 offset 的缩放函数。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOffsetScale(offsetScale)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----------- | ------------------------------------------------ | ----------- | ------- |
| offsetScale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOffsetScale(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setOffsetScale(2, 2, 2)
```

---

### <code>getOffsetScale()</code> \{#getOffsetScale}

获取模型部件的缩放偏移，即相对于默认缩放的偏移。

如需绝对缩放值，请参阅不带 offset 的缩放函数。

```lua
getOffsetScale()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getOffsetScale()
```

---

### <code>setOffsetPivot()</code> \{#setOffsetPivot}

**别名：** `offsetPivot()`

设置该部件的轴心偏移点（乘算）。

值为 nil 时按 0 处理。

如需绝对轴心点，请参阅不带 offset 的轴心函数。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOffsetPivot(offsetPivot)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----------- | ------------------------------------------------ | ----------- | ------- |
| offsetPivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOffsetPivot(x, y, z)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setOffsetPivot(0, 5, 0)
```

---

### <code>getOffsetPivot()</code> \{#getOffsetPivot}

获取模型部件的轴心偏移，即相对于它在 Blockbench 中轴心的偏移。

如需绝对轴心点，请参阅不带 offset 的轴心函数。

```lua
getOffsetPivot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getOffsetPivot()
```

---

### <code>setMatrix()</code> \{#setMatrix}

**别名：** `matrix()`

将给定矩阵设为该模型部件的位置矩阵。

法线矩阵会自动按该矩阵的逆转置计算。

调用该函数不会改变模型部件中 position、rot、scale 的数值。

如果调用 setPos() 或类似函数，setMatrix() 的效果会被覆盖。

```lua
setMatrix(matrix)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setMatrix(matrices.mat4())
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

根据该模型部件当前的位置、旋转、缩放和轴心重新计算矩阵，然后返回该矩阵。

```lua
getPositionMatrix()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
models:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

返回该模型部件的位置矩阵。

Raw 版本的区别在于：获取前不会重新计算矩阵。

```lua
getPositionMatrixRaw()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
models:getPositionMatrixRaw()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

根据该模型部件当前的位置、旋转、缩放和轴心重新计算法线矩阵，然后返回该矩阵。

```lua
getNormalMatrix()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
models:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

返回该模型部件的法线矩阵。

Raw 版本的区别在于：返回前不会重新计算矩阵。

```lua
getNormalMatrixRaw()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
models:getNormalMatrixRaw()
```

---

## 部件信息

### <code>getName()</code> \{#getName}

该模型部件的名称。

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
models:getName()
```

---

### <code>getType()</code> \{#getType}

返回该部件是 "GROUP"、"CUBE" 还是 "MESH"。

```lua
getType()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
models:getType()
```

---

### <code>getTrueRot()</code> \{#getTrueRot}

获取该模型部件的真实旋转，即旋转、偏移旋转与动画位置之和。

```lua
getTrueRot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getTrueRot()
```

---

### <code>getTruePos()</code> \{#getTruePos}

获取该模型部件的真实位置，即位置与动画位置之和。

```lua
getTruePos()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getTruePos()
```

---

### <code>getTrueScale()</code> \{#getTrueScale}

获取该模型部件的真实缩放，即缩放、偏移缩放与动画缩放之和。

```lua
getTrueScale()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getTrueScale()
```

---

### <code>getTruePivot()</code> \{#getTruePivot}

获取该模型部件的真实轴心，即轴心与轴心偏移之和。

```lua
getTruePivot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getTruePivot()
```

---

### <code>partToWorldMatrix()</code> \{#partToWorldMatrix}

获取一个矩阵，用于把点从该部件的位置变换到世界坐标。

建议在 POST_RENDER 中使用，此时矩阵已更新。

在 RENDER 中，它会比该部件当帧的视觉位置落后 1 帧。

另外，如果模型未在世界中渲染，该部件的矩阵不会更新。

纸娃娃渲染和其他 UI 渲染不会影响该矩阵。

```lua
partToWorldMatrix()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
models:partToWorldMatrix():apply()
```

---

## 渲染

### <code>setPrimaryRenderType()</code> \{#setPrimaryRenderType}

**别名：** `primaryRenderType()`

设置该模型部件当前的主渲染类型。

默认为 nil，表示渲染时该部件沿用父部件的主渲染类型。

全部渲染类型可通过 docs enum 命令查看。

```lua
setPrimaryRenderType(renderType)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| renderType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setPrimaryRenderType("END_PORTAL")
```

---

### <code>getPrimaryRenderType()</code> \{#getPrimaryRenderType}

获取该模型部件当前的主渲染类型。

默认为 nil，表示该部件沿用父部件的主渲染类型。

```lua
getPrimaryRenderType()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
models:getPrimaryRenderType() == "TRANSLUCENT_CULL"
```

---

### <code>setSecondaryRenderType()</code> \{#setSecondaryRenderType}

**别名：** `secondaryRenderType()`

设置该模型部件当前的次渲染类型。

默认为 nil，表示渲染时该部件沿用父部件的次渲染类型。

全部渲染类型可通过 docs enum 命令查看。

```lua
setSecondaryRenderType(renderType)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| renderType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setSecondaryRenderType("GLINT")
```

---

### <code>getSecondaryRenderType()</code> \{#getSecondaryRenderType}

获取该模型部件当前的次渲染类型。

默认为 nil，表示该部件沿用父部件的次渲染类型。

```lua
getSecondaryRenderType()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
models:getSecondaryRenderType() == "LINES"
```

---

### <code>setOpacity()</code> \{#setOpacity}

**别名：** `opacity()`

设置该部件的不透明度倍率。

请注意，不透明度设置只有在部件使用合适的渲染类型时才会生效，主要是 TRANSLUCENT。

具体做法请参阅 modelPart.setPrimaryRenderType()。

```lua
setOpacity(opacity)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------- | ----------------------------------------------- | ----------- | ------- |
| opacity | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setOpacity(0.5)
```

---

### <code>getOpacity()</code> \{#getOpacity}

获取该部件的不透明度倍率。

请注意，不透明度设置只有在部件使用合适的渲染类型时才会生效，主要是 TRANSLUCENT。

具体做法请参阅 modelPart.setPrimaryRenderType()。

```lua
getOpacity()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
models:getOpacity()
```

---

### <code>setLight()</code> \{#setLight}

**别名：** `light()`

设置渲染该部件时使用的光照等级。

取值为 0 到 15，分别表示要使用的方块光与天空光等级。

传入 nil 会清除该部件的自定义光照设置。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setLight(light)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| light | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setLight(blockLight, skyLight)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---------- | ------------------------------------------------ | ----------- | ------- |
| blockLight | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| skyLight   | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- Example for mimicking vanilla lighting
local blockLight = world.getBlockLightLevel(player:getPos():add(0, .4, 0))
local skyLight = world.getSkyLightLevel(player:getPos():add(0, .4, 0))
models:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

获取你之前为该部件设置的光照等级。

该函数不与 Minecraft 的光照系统交互，只返回你之前用 setLight() 设置的值。

```lua
getLight()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
models:getLight()
```

---

### <code>setOverlay()</code> \{#setOverlay}

**别名：** `overlay()`

设置渲染该部件时使用的叠加颜色。

取值为 0 到 15，分别表示要使用的白色叠加与受伤叠加等级。

传入 nil 会清除该部件的自定义叠加设置。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOverlay(overlay)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------- | ------------------------------------------------ | ----------- | ------- |
| overlay | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOverlay(whiteOverlay, hurtOverlay)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------------ | ------------------------------------------------ | ----------- | ------- |
| whiteOverlay | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| hurtOverlay  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- Example for a hurt overlay
local hurt = player:getNbt().HurtTime > 0
models:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

获取你之前为该部件设置的叠加颜色。

该函数不与 Minecraft 的叠加系统交互，只返回你之前用 setOverlay() 设置的值。

```lua
getOverlay()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
models:getOverlay()
```

---

### <code>setColor()</code> \{#setColor}

**别名：** `color()`

设置该部件的主颜色与次颜色的颜色倍率。

取值为 0 到 1 的 RGB 值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setColor(color)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setColor(r, g, b)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getColor()</code> \{#getColor}

返回该部件设置的平均颜色，即主颜色与次颜色相加后取平均。

取值为 0 到 1 的 RGB 值。

```lua
getColor()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getColor()
```

---

### <code>setPrimaryColor()</code> \{#setPrimaryColor}

**别名：** `primaryColor()`

设置该部件的主颜色倍率。

取值为 0 到 1 的 RGB 值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPrimaryColor(color)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPrimaryColor(r, g, b)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setPrimaryColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getPrimaryColor()</code> \{#getPrimaryColor}

获取该部件的主颜色倍率。

取值为 0 到 1 的 RGB 值。

```lua
getPrimaryColor()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getPrimaryColor()
```

---

### <code>setSecondaryColor()</code> \{#setSecondaryColor}

**别名：** `secondaryColor()`

设置该部件的次颜色倍率。

取值为 0 到 1 的 RGB 值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setSecondaryColor(color)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setSecondaryColor(r, g, b)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setSecondaryColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getSecondaryColor()</code> \{#getSecondaryColor}

获取该部件的次颜色倍率。

取值为 0 到 1 的 RGB 值。

```lua
getSecondaryColor()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getSecondaryColor()
```

---

### <code>setPreRender()</code> \{#setPreRender}

设置在该部件开始渲染前执行的函数。

```lua
setPreRender(function)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setPreRender(function()
    print("PreRender!")
end)
```

---

### <code>setMidRender()</code> \{#setMidRender}

设置在该部件渲染过程中、矩阵计算完成后执行的函数。

```lua
setMidRender(function)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setMidRender(function()
    print("MidRender!")
end)
```

---

### <code>setPostRender()</code> \{#setPostRender}

设置在该部件及其子部件渲染完成后执行的函数。

```lua
setPostRender(function)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setPostRender(function()
    print("PostRender!")
end)
```

---

## 动画

### <code>getAnimRot()</code> \{#getAnimRot}

获取该模型部件当前动画提供的旋转偏移。

```lua
getAnimRot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getAnimRot()
```

---

### <code>getAnimPos()</code> \{#getAnimPos}

获取该模型部件当前动画提供的坐标偏移。

```lua
getAnimPos()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getAnimPos()
```

---

### <code>getAnimScale()</code> \{#getAnimScale}

获取该模型部件当前动画提供的缩放倍率。

```lua
getAnimScale()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
models:getAnimScale()
```

---

### <code>overrideVanillaRot()</code> \{#overrideVanillaRot}

返回该部件的原版旋转是否正被动画覆盖。

```lua
overrideVanillaRot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
models:overrideVanillaRot()
```

---

### <code>overrideVanillaPos()</code> \{#overrideVanillaPos}

返回该部件的原版坐标是否正被动画覆盖。

```lua
overrideVanillaPos()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
models:overrideVanillaPos()
```

---

### <code>overrideVanillaScale()</code> \{#overrideVanillaScale}

返回该部件的原版缩放是否正被动画覆盖。

```lua
overrideVanillaScale()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
models:overrideVanillaScale()
```

---

## 纹理

### <code>setPrimaryTexture()</code> \{#setPrimaryTexture}

**别名：** `primaryTexture()`

设置该部件的主纹理覆盖。

可用的 TextureType 类型请查看列表文档。

使用 "resource" 时，第二个参数应填要使用的 Minecraft 纹理路径。

使用 "custom" 时，第二个参数应填纹理对象。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPrimaryTexture(textureType)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----------- | ----------------------------------------------- | ----------- | ------- |
| textureType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPrimaryTexture(resource, path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| resource | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| path     | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setPrimaryTexture(custom, texture)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ----------- | ------- |
| custom  | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- Vanilla Skin
models:setPrimaryTexture("Skin")
-- Custom Texture
models:setPrimaryTexture("Custom", textures["myTexture"])
-- Minecraft Resource
models:setPrimaryTexture("Resource", "textures/entity/pig/pig.png")
```

---

### <code>getPrimaryTexture()</code> \{#getPrimaryTexture}

获取该部件的主纹理。

返回两个值：第一个是覆盖类型，第二个是纹理对象（如果有）。

```lua
getPrimaryTexture()
```

**返回：**

| 类型 | 说明 |
| ---------------------------------------------------------------------------------------------------- | --------------- |
| <code>[TextureType](/enums/TextureTypes)</code>                                                      | 覆盖类型 |
| <code>[String](/tutorials/types/Strings)</code> or <code>[Texture](/globals/Textures/Texture)</code> | 主纹理 |

**示例：**

```lua
local texType, tex = models:getPrimaryTexture() -- this saves both of the potential returns to two variables in a single line of code
log(textType, tex)
```

---

### <code>getPrimaryDefinedTextures()</code> \{#getPrimaryDefinedTextures}

获取该部件的主纹理。

返回一个表，包含指定面上使用的各个纹理。

```lua
getPrimaryDefinedTextures()
```

**返回：**

| 类型 | 说明 |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**示例：**

```lua
models:getPrimaryDefinedTextures()
```

---

### <code>setSecondaryTexture()</code> \{#setSecondaryTexture}

**别名：** `secondaryTexture()`

设置该部件的次纹理覆盖。

可用的 TextureType 类型请查看列表文档。

使用 "resource" 时，第二个参数应填要使用的 Minecraft 纹理路径。

使用 "custom" 时，第二个参数应填纹理对象。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setSecondaryTexture(textureType)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----------- | ----------------------------------------------- | ----------- | ------- |
| textureType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setSecondaryTexture(resource, path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| resource | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| path     | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setSecondaryTexture(custom, texture)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ----------- | ------- |
| custom  | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- Vanilla Skin
models:setSecondaryTexture("Skin")
-- Custom Texture
models:setSecondaryTexture("Custom", textures["myTexture"])
-- Minecraft Resource
models:setSecondaryTexture("Resource", "textures/entity/pig/pig.png")
```

---

### <code>getSecondaryTexture()</code> \{#getSecondaryTexture}

获取该部件的次纹理。

返回两个值：第一个是覆盖类型，第二个是对应的值（如果有）。

```lua
getSecondaryTexture()
```

**返回：**

| 类型 | 说明 |
| ---------------------------------------------------------------------------------------------------- | ----------------- |
| <code>[TextureType](/enums/TextureTypes)</code>                                                      | 覆盖类型 |
| <code>[String](/tutorials/types/Strings)</code> or <code>[Texture](/globals/Textures/Texture)</code> | 次纹理 |

**示例：**

```lua
local texType, tex = models:getSecondaryTexture()
```

---

### <code>getSecondaryDefinedTextures()</code> \{#getSecondaryDefinedTextures}

获取该部件的次纹理。

返回一个表，包含指定面上使用的各个纹理。

```lua
getSecondaryDefinedTextures()
```

**返回：**

| 类型 | 说明 |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**示例：**

```lua
models:getSecondaryDefinedTextures()
```

---

### <code>getTextures()</code> \{#getTextures}

:::caution

该函数目前存在缺陷，不过它本身基本没什么用处。

:::

返回一个表，包含该部件使用的所有纹理。

不包含子部件的纹理，因此组通常返回空表。

```lua
getTextures()
```

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
models:getTextures()
```

---

### <code>getTextureSize()</code> \{#getTextureSize}

获取该部件纹理的宽度和高度，单位为像素。

如果该部件上有多张尺寸不同的纹理，或该部件是组，则会抛出错误。

```lua
getTextureSize()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
models:getTextureSize()
```

---

### <code>setUV()</code> \{#setUV}

**别名：** `uv()`

设置该部件的 UV。

该函数使用归一化数值，取值 0 到 1。

例如调用 setUV(0.5, 0.25)，UV 会向右滚动半个纹理宽度，向下滚动四分之一个纹理宽度。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setUV(uv)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| uv   | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setUV(u, v)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| u    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setUV(0.5, 0.5)
```

---

### <code>getUV()</code> \{#getUV}

获取该部件的 UV。

该函数返回归一化数值，取值在 0 到 1 之间。

```lua
getUV()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
models:getUV()
```

---

### <code>setUVPixels()</code> \{#setUVPixels}

**别名：** `uvPixels()`

以像素为单位设置该部件的 UV。

会自动除以 getTextureSize() 的结果，因此直接传入想让 UV 滚动的像素数即可。

如果该部件有多张尺寸不同的纹理，则会报错。

如果该部件是组，则会尝试对它的子部件调用 setUVPixels。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setUVPixels(uv)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| uv   | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setUVPixels(u, v)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| u    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:setUVPixels(16.16)
```

---

### <code>getUVPixels()</code> \{#getUVPixels}

获取该部件的 UV。

会自动把结果乘以 getTextureSize()。

如果该部件有多张尺寸不同的纹理，或该部件是组，则会报错。

```lua
getUVPixels()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
models:getUVPixels()
```

---

### <code>setUVMatrix()</code> \{#setUVMatrix}

**别名：** `uvMatrix()`

设置该部件的 UV 矩阵。

变换时该矩阵会作用于所有 UV 点，UV 按齐次向量处理。

setUV() 和 setUVPixels() 只是设置该矩阵的更简便方式。

```lua
setUVMatrix(matrix)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setUVMatrix(matrices.mat3())
```

---

### <code>getUVMatrix()</code> \{#getUVMatrix}

获取该部件的 UV 矩阵。

```lua
getUVMatrix()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
models:getUVMatrix()
```

---

## 渲染任务

### <code>newText()</code> \{#newText}

在该部件上添加一个新的文本渲染任务。

```lua
newText(taskName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | -           |

**示例：**

```lua
models:newText("Example")
```

---

### <code>newEntity()</code> \{#newEntity}

在该部件上添加一个新的实体渲染任务。

```lua
newEntity(taskName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------------------- | ----------- |
| <code>[EntityTask](/globals/Models/EntityTask)</code> | -           |

**示例：**

```lua
models:newEntity("Example")
```

---

### <code>newItem()</code> \{#newItem}

在该部件上添加一个新的物品渲染任务。

```lua
newItem(taskName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[ItemTask](/globals/Models/ItemTask)</code> | -           |

**示例：**

```lua
models:newItem("Example")
```

---

### <code>newBlock()</code> \{#newBlock}

在该部件上添加一个新的方块渲染任务。

```lua
newBlock(taskName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --------------------------------------------------- | ----------- |
| <code>[BlockTask](/globals/Models/BlockTask)</code> | -           |

**示例：**

```lua
models:newBlock("Example")
```

---

### <code>newSprite()</code> \{#newSprite}

在该部件上添加一个新的精灵渲染任务。

```lua
newSprite(taskName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------------------- | ----------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | -           |

**示例：**

```lua
models:newSprite("Example")
```

---

### <code>addTask()</code> \{#addTask}

在该部件上添加给定的渲染任务。

```lua
addTask(renderTask)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---------- | ----------------------------------------------------- | ----------- | ------- |
| renderTask | <code>[RenderTask](/globals/Models/RenderTask)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**示例：**

```lua
local myItem = models:newItem("foo")
myItem:setItem("slime_ball")
-- highlight-next-line
models.model.root.Head:addTask(myItem)
```

---

### <code>getTask()</code> \{#getTask}

从该部件获取指定名称的渲染任务。

未给出名称时返回包含全部任务的表。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTask()
```

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTask(taskName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
models:getTask()
```

---

### <code>removeTask()</code> \{#removeTask}

从该部件移除指定名称的任务。

未给出名称时移除全部任务。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
removeTask()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
removeTask(taskName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
removeTask(renderTask)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---------- | ----------------------------------------------------- | ----------- | ------- |
| renderTask | <code>[RenderTask](/globals/Models/RenderTask)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
models:removeTask()
```

---

## 其他

### <code>setParentType()</code> \{#setParentType}

**别名：** `parentType()`

设置该部件的父类型。

合法类型请查看列表文档中的 ParentType 一节。

```lua
setParentType(parentType)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| parentType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:setParentType("Head")
```

---

### <code>getParentType()</code> \{#getParentType}

返回该部件当前的父类型。

```lua
getParentType()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
models:getParentType()
```

---

### <code>getVertices()</code> \{#getVertices}

返回一个表，包含给定纹理 ID 对应的所有顶点。

未找到顶点时返回 nil。

```lua
getVertices(textureID)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --------- | ----------------------------------------------- | ----------- | ------- |
| textureID | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
models:getVertices("myTexture")
```

---

### <code>getAllVertices()</code> \{#getAllVertices}

返回一个表，包含所有纹理 ID 及其顶点。

```lua
getAllVertices()
```

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
models:getAllVertices()
```

---

### <code>getParent()</code> \{#getParent}

获取该部件的父部件。

如果该部件没有父部件，则返回 nil。

```lua
getParent()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:getParentType()
```

---

### <code>remove()</code> \{#remove}

从父模型部件中移除该部件。

```lua
remove()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- halloween costume in one line!
models.model.root.Head:remove()
```

---

### <code>getChildren()</code> \{#getChildren}

获取该部件的子部件，结果存放在一个表中。

```lua
getChildren()
```

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
models:getChildren()
```

---

### <code>isChildOf()</code> \{#isChildOf}

检查该部件是否为给定部件的子部件。

```lua
isChildOf(part)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
models:isChildOf(models)
```

---

### <code>moveTo()</code> \{#moveTo}

把该部件移动为给定部件的子部件。

```lua
moveTo(part)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- error-next-line
models:moveTo(models)
-- This is recursive
```

---

### <code>addChild()</code> \{#addChild}

把给定部件加入该部件的子部件列表。

```lua
addChild(part)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- error-next-line
models:addChild(models)
-- This is recursive
```

---

### <code>removeChild()</code> \{#removeChild}

从该部件的子部件列表中移除给定部件。

```lua
removeChild(part)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- error-next-line
models:removeChild(models)
-- This is recursive
```

---

### <code>copy()</code> \{#copy}

返回该部件的副本，包含所有自定义设置和顶点。

子部件以引用方式放入新的列表。

```lua
copy(name)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| 名称 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
models:copy("Example")
```

---

### <code>newPart()</code> \{#newPart}

在该部件下创建一个空的组模型部件作为子部件，轴心点与该部件相同。

接受两个参数：新部件的名称，以及可选的父类型。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
newPart(name)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| 名称 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
newPart(name, parentType)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| 名称 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| parentType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- Example with same parent type
models:newPart("Example")
-- Example with different parent type
models:newPart("Example", "Head")
```

---

## 字段

### <code>preRender</code> \{#preRender}

在该部件开始渲染前执行的函数。

---

### <code>midRender</code> \{#midRender}

在该部件渲染过程中、矩阵计算完成后执行的函数。

---

### <code>postRender</code> \{#postRender}

在该部件及其子部件渲染完成后执行的函数。

---
