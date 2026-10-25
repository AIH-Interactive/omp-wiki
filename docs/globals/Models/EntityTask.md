---
title: EntityTask（实体任务）
sidebar_label: EntityTask（实体任务）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于通过 [newEntity](./#newEntity) 渲染实体的任务。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

本页所有示例都假设：

```lua
local myEntity = models:newEntity("myCoolEntityName")
```

---

## 实体任务

### <code>asEntity()</code> \{#asEntity}

返回与此任务关联的实体；如果实体因任何原因无法存在，则返回 nil。

由于存在特殊情况，后续读取到的值可能完全不可用。

```lua
asEntity()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -    |

**示例：**

```lua
myEntity:asEntity():getBoundingBox()
```

---

### <code>setNbt()</code> \{#setNbt}

设置实体的 NBT。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setNbt(nbt)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| nbt  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                                  | 说明                   |
| ----------------------------------------------------- | ---------------------- |
| <code>[EntityTask](/globals/Models/EntityTask)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setNbt(id, nbt)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| id   | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| nbt  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                                  | 说明                   |
| ----------------------------------------------------- | ---------------------- |
| <code>[EntityTask](/globals/Models/EntityTask)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myEntity:setNbt("minecraft:wolf", "{}")

myEntity:setNbt(
    toJson({
        id = "minecraft:wolf",
        Age = 1,
        CollarColor = 9,
        Sitting = true,
        Owner = player:getUUID(),
    })
)

myEntity:setNbt(
    toJson({
        id = "minecraft:zombie",
        IsBaby = true,
    })
)
```

---

### <code>setHeadRotation()</code> \{#setHeadRotation}

更新实体的头部旋转（如适用）。

```lua
setHeadRotation(rotation)
```

**参数：**

| 名称     | 类型                                             | 说明 | 默认值 |
| -------- | ------------------------------------------------ | ---- | ------ |
| rotation | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                                  | 说明                   |
| ----------------------------------------------------- | ---------------------- |
| <code>[EntityTask](/globals/Models/EntityTask)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myEntity:setHeadRotation(vec(-45, 0))
```

---

### <code>updateWalkingDistance()</code> \{#updateWalkingDistance}

根据新信息更新行走动画（如适用）。要得到预期效果，应在每个 tick 用相应的值调用一次。

```lua
updateWalkingDistance(distance)
```

**参数：**

| 名称     | 类型                                            | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ---- | ------ |
| distance | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                                  | 说明                   |
| ----------------------------------------------------- | ---------------------- |
| <code>[EntityTask](/globals/Models/EntityTask)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- this example only works if the entity is moving
-- at the same speed as the player
local pos
local lastPos

function events.tick()
    lastPos = pos or player:getPos()
    pos = player:getPos()
    local distance = (pos - lastPos).xz:length()
    -- highlight-next-line
    myEntity:updateWalkingDistance(distance)
end
```

---

## 渲染任务

### <code>setLight()</code> \{#setLight}

**别名：** `light()`

设置该任务的光照覆盖值。

取值为 0 到 15，分别表示要使用的方块光照与天空光照等级。

传入 nil 会重置该任务的光照覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setLight(light)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| light | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

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

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
myEntity:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

返回该任务的光照覆盖值。

```lua
getLight()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
myEntity:getLight()
```

---

### <code>setMatrix()</code> \{#setMatrix}

**别名：** `matrix()`

把给定的矩阵设置为该渲染任务的位置矩阵。

法线矩阵会自动按该矩阵的逆转置计算。

调用此函数不会改变渲染任务中 position、rot 或 scale 的数值。

如果之后调用 setPos() 或类似函数，setMatrix() 的效果会被覆盖。

```lua
setMatrix(matrix)
```

**参数：**

| 名称   | 类型                                              | 说明 | 默认值 |
| ------ | ------------------------------------------------- | ---- | ------ |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    | -      |

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

**示例：**

```lua
myEntity:setMatrix(matrices.mat4())
```

---

### <code>getName()</code> \{#getName}

获取该任务的名称。

```lua
getName()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
myEntity:getName()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

根据该渲染任务当前的位置、旋转、缩放与轴心重新计算法线矩阵，然后返回该矩阵。

```lua
getNormalMatrix()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
myEntity:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

返回该渲染任务的法线矩阵。

Raw 版本的区别在于返回前不会重新计算矩阵。

```lua
getNormalMatrixRaw()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -    |

**示例：**

```lua
myEntity:getNormalMatrixRaw()
```

---

### <code>setOverlay()</code> \{#setOverlay}

**别名：** `overlay()`

设置该任务的覆盖层覆盖值。

取值为 0 到 15，分别表示要使用的白色覆盖层与受伤覆盖层等级。

传入 nil 会重置该任务的覆盖层覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOverlay(overlay)
```

**参数：**

| 名称    | 类型                                             | 说明 | 默认值 |
| ------- | ------------------------------------------------ | ---- | ------ |
| overlay | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

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

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
local hurt = player:getNbt.HurtTime > 0
myEntity:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

返回该任务的覆盖层覆盖值。

```lua
getOverlay()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
myEntity:getOverlay()
```

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

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

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

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
myEntity:setPos(0, 16, 0)
```

---

### <code>getPos()</code> \{#getPos}

获取该任务的位置。

```lua
getPos()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myEntity:getPos()
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

根据该渲染任务当前的位置、旋转、缩放与轴心重新计算矩阵，然后返回该矩阵。

```lua
getPositionMatrix()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

**示例：**

```lua
myEntity:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

返回该渲染任务的位置矩阵。

Raw 版本的区别在于获取前不会重新计算矩阵。

```lua
getPositionMatrixRaw()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -    |

**示例：**

```lua
myEntity:getPositionMatrixRaw()
```

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

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

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

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
myEntity:setRot(0, 45, 22.5)
```

---

### <code>getRot()</code> \{#getRot}

获取该任务的旋转。

```lua
getRot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myEntity:getRot()
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

**返回值：**

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

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
myEntity:setScale(0.4, 0.4, 0.4) -- myEntity:setScale(0.4) also works
```

---

### <code>getScale()</code> \{#getScale}

获取该任务的缩放。

```lua
getScale()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
myEntity:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

设置该任务是否参与渲染。

```lua
setVisible(visible)
```

**参数：**

| 名称    | 类型                                              | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ---- | ------ |
| visible | <code>[Boolean](/tutorials/types/booleans)</code> | -    | -      |

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

**示例：**

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    myEntity:setVisible(state)
end)
```

---

### <code>isVisible()</code> \{#isVisible}

检查该任务是否可见。

```lua
isVisible()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
if myEntity:isVisible() then
    -- do something
end
```

---

### <code>remove()</code> \{#remove}

从父模型部件中移除该渲染任务。

```lua
remove()
```

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -    |

**示例：**

```lua
myEntity:remove()
```

---
