---
title: RenderTask（渲染任务）
sidebar_label: RenderTask（渲染任务）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

表示 Figura 每帧需要完成的一项渲染任务。

它是 ItemTask、BlockTask、TextTask 和 SpriteTask 的抽象父类。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

---

### <code>setLight()</code> \{#setLight}

**别名：** `light()`

设置该任务的光照覆盖值。

取值为 0 到 15，分别表示你想使用的方块光与天空光等级。

传入 nil 会重置该任务的光照覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setLight(light)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| light | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setLight(blockLight, skyLight)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| blockLight | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| skyLight   | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

---

### <code>getLight()</code> \{#getLight}

返回该任务的光照覆盖值。

```lua
getLight()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

---

### <code>setMatrix()</code> \{#setMatrix}

**别名：** `matrix()`

将给定矩阵设置为该渲染任务的位置矩阵。

法线矩阵会自动按该矩阵的逆转置计算。

调用此函数不会改变渲染任务中 position、rot 或 scale 的值。

如果之后调用 setPos() 或类似函数，setMatrix() 的效果会被覆盖。

```lua
setMatrix(matrix)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

---

### <code>getName()</code> \{#getName}

获取该任务的名称。

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

根据该渲染任务当前的位置、旋转、缩放和轴心重新计算法线矩阵，然后返回该矩阵。

```lua
getNormalMatrix()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

返回该渲染任务的法线矩阵。

带 Raw 的版本不同之处在于：返回前不会重新计算矩阵。

```lua
getNormalMatrixRaw()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

---

### <code>setOverlay()</code> \{#setOverlay}

**别名：** `overlay()`

设置该任务的叠加层（overlay）覆盖值。

取值为 0 到 15，分别表示你想使用的白色叠加层与受伤叠加层等级。

传入 nil 会重置该任务的叠加层覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOverlay(overlay)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| overlay | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOverlay(whiteOverlay, hurtOverlay)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| whiteOverlay | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| hurtOverlay  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

---

### <code>getOverlay()</code> \{#getOverlay}

返回该任务的叠加层覆盖值。

```lua
getOverlay()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置任务的位置，相对于其挂载的部件。

使用模型坐标。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

---

### <code>getPos()</code> \{#getPos}

获取该任务的位置。

```lua
getPos()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

根据该渲染任务当前的位置、旋转、缩放和轴心重新计算矩阵，然后返回该矩阵。

```lua
getPositionMatrix()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

返回该渲染任务的位置矩阵。

带 Raw 的版本不同之处在于：获取前不会重新计算矩阵。

```lua
getPositionMatrixRaw()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

---

### <code>setRot()</code> \{#setRot}

**别名：** `rot()`

设置任务的旋转，相对于其挂载的部件。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

---

### <code>getRot()</code> \{#getRot}

获取该任务的旋转。

```lua
getRot()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

---

### <code>setScale()</code> \{#setScale}

**别名：** `scale()`

设置任务的缩放，相对于其挂载的部件。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

---

### <code>getScale()</code> \{#getScale}

获取该任务的缩放。

```lua
getScale()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

---

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

设置该任务是否应被渲染。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

---

### <code>isVisible()</code> \{#isVisible}

检查该任务是否可见。

```lua
isVisible()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

---

### <code>remove()</code> \{#remove}

从父模型部件中移除该渲染任务。

```lua
remove()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | 返回自身，以便链式调用 |

---
