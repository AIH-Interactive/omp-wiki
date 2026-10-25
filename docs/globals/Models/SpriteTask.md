---
title: SpriteTask（Sprite 渲染任务）
sidebar_label: SpriteTask（Sprite 渲染任务）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于通过 [newSprite](.#newSprite) 渲染单个 Sprite 的任务。

:::warning
本页仍在完善中。Figura 文档中的全部信息已收录，我们正在补充更详细的说明。
:::

本页下列示例均假设：

```lua
local mySprite = models:newSprite("myCoolSpriteName")
```

---

## Sprite 任务

### <code>setTexture()</code> \{#setTexture}

**别名：** `texture()`

设置该任务的纹理。

如果纹理来自资源路径，必须同时提供纹理的宽度与高度。

对于自定义纹理，尺寸可选。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setTexture(textureLocation, width, height)
```

**参数：**

| 名称            | 类型                                             | 说明        | 默认值  |
| --------------- | ------------------------------------------------ | ----------- | ------- |
| textureLocation | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| width           | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height          | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setTexture(texture)
```

**参数：**

| 名称    | 类型                                              | 说明        | 默认值  |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setTexture(texture, width, height)
```

**参数：**

| 名称    | 类型                                              | 说明        | 默认值  |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
setTexture(textureLocation, dimensions)
```

**参数：**

| 名称            | 类型                                             | 说明        | 默认值  |
| --------------- | ------------------------------------------------ | ----------- | ------- |
| textureLocation | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| dimensions      | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-5" label="重载 5">

```lua
setTexture(texture, dimensions)
```

**参数：**

| 名称       | 类型                                              | 说明        | 默认值  |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| texture    | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| dimensions | <code>[Vector2](/globals/Vectors/Vector2)</code>  | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
</Tabs>

**示例：**

```lua
-- using a resource location
mySprite:setTexture("textures/item/turtle_egg.png", 16, 16)

-- using a custom texture
mySprite:setTexture(textures["myTexture"])

-- using a custom texture with dimensions
mySprite:setTexture(textures["myTexture"], 16, 16)
```

---

### <code>getTexture()</code> \{#getTexture}

返回该任务当前的纹理。

```lua
getTexture()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
mySprite:getTexture()
```

---

### <code>setColor()</code> \{#setColor}

**别名：** `color()`

为该 Sprite 设置颜色乘数。

取值为 0 到 1 的 RGBA。

默认值为 1，alpha 可选。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setColor(rgb)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setColor(rgba)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setColor(r, g, b, a)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
</Tabs>

**示例：**

```lua
mySprite:setColor(world.getBiome():getWaterColor())
```

---

### <code>getColor()</code> \{#getColor}

获取该 Sprite 当前的颜色乘数。

取值为 0 到 1 的 RGBA。

```lua
getColor()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**示例：**

```lua
mySprite:getColor()
```

---

### <code>setDimensions()</code> \{#setDimensions}

**别名：** `dimensions()`

设置纹理尺寸，用于 UV 计算。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setDimensions(dimensions)
```

**参数：**

| 名称       | 类型                                             | 说明        | 默认值  |
| ---------- | ------------------------------------------------ | ----------- | ------- |
| dimensions | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setDimensions(width, height)
```

**参数：**

| 名称   | 类型                                             | 说明        | 默认值  |
| ------ | ------------------------------------------------ | ----------- | ------- |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
</Tabs>

**示例：**

```lua
-- use the long water_flow texture then make it one block
mySprite:setTexture("textures/block/water_flow.png", 16, 16)
-- highlight-next-line
mySprite:setDimensions(32, 1024)
```

---

### <code>getDimensions()</code> \{#getDimensions}

返回纹理尺寸，用于 UV 计算。

```lua
getDimensions()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
mySprite:getDimensions()
```

---

### <code>setRegion()</code> \{#setRegion}

**别名：** `region()`

设置纹理的 UV 区域。

使用其尺寸计算最大 UV。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setRegion(region)
```

**参数：**

| 名称   | 类型                                             | 说明        | 默认值  |
| ------ | ------------------------------------------------ | ----------- | ------- |
| region | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setRegion(width, height)
```

**参数：**

| 名称   | 类型                                             | 说明        | 默认值  |
| ------ | ------------------------------------------------ | ----------- | ------- |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
</Tabs>

**示例：**

```lua
mySprite:setRegion(64, 64)
```

---

### <code>getRegion()</code> \{#getRegion}

获取纹理的 UV 区域。

```lua
getRegion()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
mySprite:getRegion()
```

---

### <code>setRenderType()</code> \{#setRenderType}

**别名：** `renderType()`

设置该 Sprite 当前的渲染类型。

默认为 TRANSLUCENT。

执行 docs enum 命令可查看所有渲染类型。

```lua
setRenderType(renderType)
```

**参数：**

| 名称       | 类型                                            | 说明        | 默认值  |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| renderType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

**示例：**

```lua
mySprite:setRenderType("CUTOUT")
```

---

### <code>getRenderType()</code> \{#getRenderType}

获取该 Sprite 当前渲染类型的名称。

```lua
getRenderType()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
mySprite:getRenderType()
```

---

### <code>setSize()</code> \{#setSize}

**别名：** `size()`

设置渲染该 Sprite 时使用的宽度与高度。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setSize(size)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| size | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setSize(width, height)
```

**参数：**

| 名称   | 类型                                             | 说明        | 默认值  |
| ------ | ------------------------------------------------ | ----------- | ------- |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
</Tabs>

**示例：**

```lua
-- make my small egg bigger
mySprite:setTexture("textures/item/turtle_egg.png", 8, 8)
mySprite:setSize(16, 16)
```

---

### <code>getSize()</code> \{#getSize}

返回渲染该 Sprite 时使用的宽度与高度。

```lua
getSize()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
mySprite:getSize()
```

---

### <code>setUV()</code> \{#setUV}

**别名：** `uv()`

设置该纹理的 UV 偏移。

区域与尺寸用于计算 UV 的结束点。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setUV(uv)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| uv   | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setUV(u, v)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| u    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
</Tabs>

**示例：**

```lua
-- Let's make a sprite task of flowing water!
mySprite:setTexture("textures/block/water_flow.png", 16, 16)
mySprite:setDimensions(32, 1024)
mySprite:setColor(world.getBiome():getWaterColor())

local t = 0

function events.tick()
    -- highlight-next-line
    mySprite:setUV(1, t / 32)
    t = t + 1
end
```

---

### <code>getUV()</code> \{#getUV}

获取该纹理的 UV 偏移。

```lua
getUV()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
mySprite:getUV()
```

---

### <code>setUVPixels()</code> \{#setUVPixels}

**别名：** `uvPixels()`

以像素为单位设置该纹理的 UV 偏移，基于纹理的尺寸换算。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setUVPixels(uv)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| uv   | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setUVPixels(u, v)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| u    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | 返回自身，便于链式调用    |

</TabItem>
</Tabs>

**示例：**

```lua
-- Let's make a sprite task of flowing water!
mySprite:setTexture("textures/block/water_flow.png", 16, 16)
mySprite:setDimensions(32, 1024)
mySprite:setColor(world.getBiome():getWaterColor())

local t = 0

function events.tick()
    -- highlight-next-line
    mySprite:setUVPixels(1, t)
    t = t - 1
end
```

---

### <code>getUVPixels()</code> \{#getUVPixels}

以像素为单位获取该纹理的 UV 偏移，基于纹理的尺寸换算。

```lua
getUVPixels()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
mySprite:getUVPixels()
```

---

### <code>getVertices()</code> \{#getVertices}

返回包含该 Sprite 全部 4 个顶点的表。

通过其他函数修改数值会重置这些顶点。

```lua
getVertices()
```

**返回值：**

| 类型                                          | 说明        |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
mySprite:getVertices()
```

---

## 渲染任务

### <code>setLight()</code> \{#setLight}

**别名：** `light()`

设置该任务的光照覆盖值。

取值 0 到 15，分别表示要使用的方块光照与天空光照等级。

传入 nil 会重置该任务的光照覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setLight(light)
```

**参数：**

| 名称  | 类型                                             | 说明        | 默认值  |
| ----- | ------------------------------------------------ | ----------- | ------- |
| light | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setLight(blockLight, skyLight)
```

**参数：**

| 名称       | 类型                                             | 说明        | 默认值  |
| ---------- | ------------------------------------------------ | ----------- | ------- |
| blockLight | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| skyLight   | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
mySprite:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

返回该任务的光照覆盖值。

```lua
getLight()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
mySprite:getLight()
```

---

### <code>setMatrix()</code> \{#setMatrix}

**别名：** `matrix()`

将给定矩阵设置为该渲染任务的位置矩阵。

法线矩阵会自动按该矩阵的逆转置计算。

调用该函数不会改变渲染任务中 position、rot 或 scale 的值。

如果调用 setPos() 或类似函数，setMatrix() 的效果会被覆盖。

```lua
setMatrix(matrix)
```

**参数：**

| 名称   | 类型                                              | 说明        | 默认值  |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**示例：**

```lua
mySprite:setMatrix(matrices.mat4())
```

---

### <code>getName()</code> \{#getName}

获取该任务的名称。

```lua
getName()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
mySprite:getName()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

根据当前的位置、旋转、缩放与枢轴重新计算该渲染任务的法线矩阵，然后返回该矩阵。

```lua
getNormalMatrix()
```

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
mySprite:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

返回该渲染任务的法线矩阵。

Raw 版本的区别在于返回前不会重新计算矩阵。

```lua
getNormalMatrixRaw()
```

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
mySprite:getNormalMatrixRaw()
```

---

### <code>setOverlay()</code> \{#setOverlay}

**别名：** `overlay()`

设置该任务的叠加层覆盖值。

取值 0 到 15，分别表示要使用的白色叠加层与受伤叠加层等级。

传入 nil 会重置该任务的叠加层覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOverlay(overlay)
```

**参数：**

| 名称    | 类型                                             | 说明        | 默认值  |
| ------- | ------------------------------------------------ | ----------- | ------- |
| overlay | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOverlay(whiteOverlay, hurtOverlay)
```

**参数：**

| 名称         | 类型                                             | 说明        | 默认值  |
| ------------ | ------------------------------------------------ | ----------- | ------- |
| whiteOverlay | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| hurtOverlay  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
local hurt = player:getNbt.HurtTime > 0
mySprite:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

返回该任务的叠加层覆盖值。

```lua
getOverlay()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
mySprite:getOverlay()
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置任务的位置，相对于其挂载的部位。

使用模型坐标。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPos(pos)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPos(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
mySprite:setPos(0, 16, 0)
```

---

### <code>getPos()</code> \{#getPos}

获取该任务的位置。

```lua
getPos()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
mySprite:getPos()
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

根据当前的位置、旋转、缩放与枢轴重新计算该渲染任务的矩阵，然后返回该矩阵。

```lua
getPositionMatrix()
```

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
mySprite:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

返回该渲染任务的位置矩阵。

Raw 版本的区别在于读取前不会重新计算矩阵。

```lua
getPositionMatrixRaw()
```

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
mySprite:getPositionMatrixRaw()
```

---

### <code>setRot()</code> \{#setRot}

**别名：** `rot()`

设置任务的旋转，相对于其挂载的部位。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setRot(rot)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setRot(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
mySprite:setRot(0, 45, 22.5)
```

---

### <code>getRot()</code> \{#getRot}

获取该任务的旋转。

```lua
getRot()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
mySprite:getRot()
```

---

### <code>setScale()</code> \{#setScale}

**别名：** `scale()`

设置任务的缩放，相对于其挂载的部位。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setScale(scale)
```

**参数：**

| 名称  | 类型                                             | 说明        | 默认值  |
| ----- | ------------------------------------------------ | ----------- | ------- |
| scale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setScale(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
mySprite:setScale(0.4, 0.4, 0.4) -- mySprite:setScale(0.4) also works
```

---

### <code>getScale()</code> \{#getScale}

获取该任务的缩放。

```lua
getScale()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
mySprite:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

设置该任务是否参与渲染。

```lua
setVisible(visible)
```

**参数：**

| 名称    | 类型                                              | 说明        | 默认值  |
| ------- | ------------------------------------------------- | ----------- | ------- |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**示例：**

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    mySprite:setVisible(state)
end)
```

---

### <code>isVisible()</code> \{#isVisible}

检查该任务是否可见。

```lua
isVisible()
```

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
if mySprite:isVisible() then
    -- do something
end
```

---

### <code>remove()</code> \{#remove}

从父模型部位中移除该渲染任务。

```lua
remove()
```

**返回值：**

| 类型                                                  | 说明        |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**示例：**

```lua
mySprite:remove()
```

---
