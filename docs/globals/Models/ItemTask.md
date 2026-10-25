---
title: ItemTask（物品任务）
sidebar_label: ItemTask（物品任务）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于通过 [newItem](./#newItem) 渲染物品的任务。

:::warning
本页仍在完善中。这里已收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

本页所有示例都假设：

```lua
local myItem = models:newItem("myCoolItemName")
```

---

## 物品任务

### <code>setItem()</code> \{#setItem}

**别名：** `item()`

设置此任务要渲染的物品。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setItem(item)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| item | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[ItemTask](/globals/Models/ItemTask)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setItem(item)
```

**参数：**

| 名称 | 类型                                               | 说明 | 默认值 |
| ---- | -------------------------------------------------- | ---- | ------ |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | -    | -      |

**返回：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[ItemTask](/globals/Models/ItemTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myItem:setItem("slime_ball")
```

---

### <code>setDisplayMode()</code> \{#setDisplayMode}

**别名：** `displayMode()`

设置此任务的物品显示模式。

```lua
setDisplayMode(displayMode)
```

**参数：**

| 名称        | 类型                                            | 说明 | 默认值 |
| ----------- | ----------------------------------------------- | ---- | ------ |
| displayMode | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[ItemTask](/globals/Models/ItemTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myItem:setDisplayMode("GROUND")
```

---

### <code>getDisplayMode()</code> \{#getDisplayMode}

获取此任务的物品显示模式。

```lua
getDisplayMode()
```

**返回：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
myItem:getDisplayMode()
```

---

## 渲染任务

### <code>setLight()</code> \{#setLight}

**别名：** `light()`

设置此任务的光照覆盖值。

取值范围为 0 到 15，分别表示要使用的方块光照与天空光照等级。

传入 nil 会重置此任务的光照覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setLight(light)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| light | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setLight(blockLight, skyLight)
```

**参数：**

| 名称       | 类型                                             | 说明 | 默认值 |
| ---------- | ------------------------------------------------ | ---- | ------ |
| blockLight | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |
| skyLight   | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
myItem:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

返回此任务的光照覆盖值。

```lua
getLight()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
myItem:getLight()
```

---

### <code>setMatrix()</code> \{#setMatrix}

**别名：** `matrix()`

把给定矩阵设置为该渲染任务的位置矩阵。

法线矩阵会自动按该矩阵的逆转置计算。

调用本方法不会改变渲染任务中 position、rot、scale 的值。

如果之后调用了 setPos() 或类似函数，setMatrix() 的效果会被覆盖。

```lua
setMatrix(matrix)
```

**参数：**

| 名称   | 类型                                              | 说明 | 默认值 |
| ------ | ------------------------------------------------- | ---- | ------ |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

**示例：**

```lua
myItem:setMatrix(matrices.mat4())
```

---

### <code>getName()</code> \{#getName}

获取此任务的名称。

```lua
getName()
```

**返回：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
myItem:getName()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

根据该渲染任务当前的位置、旋转、缩放和轴心重新计算法线矩阵，并返回该矩阵。

```lua
getNormalMatrix()
```

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
myItem:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

返回该渲染任务的法线矩阵。

Raw 版本的区别在于：返回前不会重新计算矩阵。

```lua
getNormalMatrixRaw()
```

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
myItem:getNormalMatrixRaw()
```

---

### <code>setOverlay()</code> \{#setOverlay}

**别名：** `overlay()`

设置此任务的叠加层覆盖值。

取值范围为 0 到 15，分别表示要使用的白色叠加层与受伤叠加层等级。

传入 nil 会重置此任务的叠加层覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOverlay(overlay)
```

**参数：**

| 名称    | 类型                                             | 说明 | 默认值 |
| ------- | ------------------------------------------------ | ---- | ------ |
| overlay | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOverlay(whiteOverlay, hurtOverlay)
```

**参数：**

| 名称         | 类型                                             | 说明 | 默认值 |
| ------------ | ------------------------------------------------ | ---- | ------ |
| whiteOverlay | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |
| hurtOverlay  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
local hurt = player:getNbt.HurtTime > 0
myItem:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

返回此任务的叠加层覆盖值。

```lua
getOverlay()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
myItem:getOverlay()
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置任务的位置，坐标相对于其挂载的部件。

使用模型坐标。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPos(pos)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

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

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
myItem:setPos(0, 16, 0)
```

---

### <code>getPos()</code> \{#getPos}

获取此任务的位置。

```lua
getPos()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myItem:getPos()
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

根据该渲染任务当前的位置、旋转、缩放和轴心重新计算矩阵，并返回该矩阵。

```lua
getPositionMatrix()
```

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

**示例：**

```lua
myItem:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

返回该渲染任务的位置矩阵。

Raw 版本的区别在于：获取前不会重新计算矩阵。

```lua
getPositionMatrixRaw()
```

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

**示例：**

```lua
myItem:getPositionMatrixRaw()
```

---

### <code>setRot()</code> \{#setRot}

**别名：** `rot()`

设置任务的旋转角度，相对于其挂载的部件。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setRot(rot)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setRot(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
myItem:setRot(0, 45, 22.5)
```

---

### <code>getRot()</code> \{#getRot}

获取此任务的旋转角度。

```lua
getRot()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myItem:getRot()
```

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

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| scale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setScale(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
myItem:setScale(0.4, 0.4, 0.4) -- myItem:setScale(0.4) also works
```

---

### <code>getScale()</code> \{#getScale}

获取此任务的缩放。

```lua
getScale()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myItem:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

设置此任务是否渲染。

```lua
setVisible(visible)
```

**参数：**

| 名称    | 类型                                              | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ---- | ------ |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -    | -      |

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

**示例：**

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    myItem:setVisible(state)
end)
```

---

### <code>isVisible()</code> \{#isVisible}

检查此任务是否可见。

```lua
isVisible()
```

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
if myItem:isVisible() then
    -- do something
end
```

---

### <code>remove()</code> \{#remove}

从父模型部件中移除此渲染任务。

```lua
remove()
```

**返回：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

**示例：**

```lua
myItem:remove()
```

---
