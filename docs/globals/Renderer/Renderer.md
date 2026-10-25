---
title: Renderer（渲染器）
sidebar_label: Renderer（渲染器）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

一个全局 API，提供改变 Minecraft 渲染玩家方式的函数

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

## 修改摄像机

### <code>setCameraMatrix()</code> \{#setCameraMatrix}

**别名：** `cameraMatrix()`

用给定矩阵设置摄像机矩阵

```lua
setCameraMatrix(matrix)
```

**参数：**

| 名称   | 类型                                              | 说明 | 默认值 |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
-- I hope you don't get dizzy
local t = 1

function events.tick()
    t = t + 1
end

function events.render(delta)
    local theta = 2 * math.pi * ((t + delta) / 20)
    local rotMat = matrices.mat4():rotateY(math.deg(theta))
    -- highlight-next-line
    renderer:setCameraMatrix(rotMat)
end
```

---

### <code>getCameraMatrix()</code> \{#getCameraMatrix}

返回修改后的摄像机矩阵

```lua
getCameraMatrix()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
renderer:getCameraMatrix()
```

---

### <code>setCameraNormal()</code> \{#setCameraNormal}

**别名：** `cameraNormal()`

用给定矩阵设置摄像机法线矩阵

```lua
setCameraNormal(matrix)
```

**参数：**

| 名称   | 类型                                              | 说明 | 默认值 |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
local t = 0
local flipped = false

function events.tick()
    if t % 20 == 0 then
        flipped = not flipped
    end
    local rotMat = matrices.mat3():rotateY(flipped and 180 or 0)
    -- highlight-next-line
    renderer:setCameraNormal(rotMat)
    t = t + 1
end
```

---

### <code>getCameraNormal()</code> \{#getCameraNormal}

返回修改后的摄像机法线矩阵

```lua
getCameraNormal()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
renderer:getCameraNormal()
```

---

### <code>getCameraOffsetPivot()</code> \{#getCameraOffsetPivot}

获取摄像机的偏移枢轴

```lua
getCameraOffsetPivot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
renderer:getCameraOffsetPivot()
```

---

### <code>getCameraOffsetRot()</code> \{#getCameraOffsetRot}

获取摄像机的偏移旋转

```lua
getCameraOffsetRot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
renderer:getCameraOffsetRot()
```

---

### <code>setCameraPivot()</code> \{#setCameraPivot}

**别名：** `cameraPivot()`

设置摄像机的绝对枢轴

枢轴也会移动摄像机

其数值相对于世界坐标

pivot 为 nil 的数值按 0 处理

如需相对旋转值，请查看 "offset" 版本的枢轴函数

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCameraPivot(pivot)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| pivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCameraPivot(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- I wonder what's going on at spawn
renderer:setCameraPivot(0, 100, 0)
```

---

### <code>getCameraPivot()</code> \{#getCameraPivot}

获取摄像机的绝对枢轴

```lua
getCameraPivot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
renderer:getCameraPivot()
```

---

### <code>setCameraPos()</code> \{#setCameraPos}

**别名：** `cameraPos()`

设置摄像机的位置偏移

position 为 nil 的数值按 0 处理

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCameraPos(pos)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCameraPos(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setCameraPos(0, 2, 0)
```

---

### <code>getCameraPos()</code> \{#getCameraPos}

获取摄像机的位置偏移

```lua
getCameraPos()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
renderer:getCameraPos()
```

---

### <code>setCameraRot()</code> \{#setCameraRot}

**别名：** `cameraRot()`

设置摄像机的绝对旋转

计算 roll 时不考虑位置

rot 为 nil 的数值按 0 处理

如需相对旋转值，请查看 "offset" 版本的旋转函数

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCameraRot(rot)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCameraRot(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setCameraRot(0, 90, 0)
```

---

### <code>getCameraRot()</code> \{#getCameraRot}

获取摄像机的绝对旋转

```lua
getCameraRot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
renderer:getCameraRot()
```

---

### <code>setOffsetCameraPivot()</code> \{#setOffsetCameraPivot}

**别名：** `offsetCameraPivot()`

设置摄像机的偏移枢轴

枢轴也会移动摄像机

其数值相对于世界坐标

pivot 为 nil 的数值按 0 处理

如需相对旋转值，请查看非 offset 版本的枢轴函数

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setOffsetCameraPivot(pivot)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| pivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setOffsetCameraPivot(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setOffsetCameraPivot(0, 2, 0)
```

---

### <code>setOffsetCameraRot()</code> \{#setOffsetCameraRot}

**别名：** `offsetCameraRot()`

设置摄像机的偏移旋转

rot 为 nil 的数值按 0 处理

角度以度为单位

如需绝对旋转值，请查看非 offset 版本的旋转函数

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setOffsetCameraRot(rot)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setOffsetCameraRot(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setOffsetCameraRot(0, 90, 0)
```

---

## 检测摄像机信息

### <code>isFirstPerson()</code> \{#isFirstPerson}

检查摄像机是否处于第一人称视角

```lua
isFirstPerson()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:isFirstPerson()
```

---

### <code>isCameraBackwards()</code> \{#isCameraBackwards}

检查摄像机是否处于第三人称背面视角

```lua
isCameraBackwards()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:isCameraBackwards()
```

---

## 元素渲染

### <code>setBlockOutlineColor()</code> \{#setBlockOutlineColor}

**别名：** `blockOutlineColor()`

设置选中方块轮廓的颜色

默认 alpha 为 0.4

可能与光影不兼容

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setBlockOutlineColor(rgb)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setBlockOutlineColor(rgba)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
setBlockOutlineColor(r, g, b, a)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setBlockOutlineColor(0, 0, 1, 0.4)
```

---

### <code>getBlockOutlineColor()</code> \{#getBlockOutlineColor}

返回选中方块轮廓已设置的颜色

默认为 nil

```lua
getBlockOutlineColor()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**示例：**

```lua
renderer:getBlockOutlineColor()
```

---

### <code>setCrosshairOffset()</code> \{#setCrosshairOffset}

**别名：** `crosshairOffset()`

设置准星偏移

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCrosshairOffset(vec)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCrosshairOffset(x, y)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| x    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setCrosshairOffset(20, 20)
```

---

### <code>getCrosshairOffset()</code> \{#getCrosshairOffset}

获取准星偏移

```lua
getCrosshairOffset()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
renderer:getCrosshairOffset()
```

---

### <code>setEyeOffset()</code> \{#setEyeOffset}

**别名：** `eyeOffset()`

:::caution

该函数可能被反作弊检测到，并导致你被服务器封禁

:::

设置实体眼睛位置的偏移，会改变指向的方块和实体

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setEyeOffset(pos)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setEyeOffset(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setEyeOffset(0, 2, 0)
```

---

### <code>getEyeOffset()</code> \{#getEyeOffset}

返回实体眼睛位置的偏移

默认为 nil

```lua
getEyeOffset()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
renderer:getEyeOffset()
```

---

### <code>setFOV()</code> \{#setFOV}

**别名：** `fov()`

设置视野（FOV）的倍率

默认值为 nil，表示不对视野做任何修改

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setFOV()
```

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setFOV(fov)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| fov  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setFOV(2)
```

---

### <code>getFOV()</code> \{#getFOV}

获取视野（FOV）的倍率

```lua
getFOV()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
renderer:getFOV()
```

---

### <code>setForcePaperdoll()</code> \{#setForcePaperdoll}

设置是否强制渲染纸娃娃

```lua
setForcePaperdoll(forcePaperdoll)
```

**参数：**

| 名称           | 类型                                              | 说明 | 默认值 |
| -------------- | ------------------------------------------------- | ----------- | ------- |
| forcePaperdoll | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setForcePaperdoll(true)
```

---

### <code>setOutlineColor()</code> \{#setOutlineColor}

**别名：** `outlineColor()`

设置自定义发光效果的轮廓颜色

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setOutlineColor(rgb)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setOutlineColor(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setOutlineColor(0, 0, 1)
```

---

### <code>getOutlineColor()</code> \{#getOutlineColor}

获取自定义发光效果的轮廓颜色

```lua
getOutlineColor()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
renderer:getOutlineColor()
```

---

### <code>setPostEffect()</code> \{#setPostEffect}

**别名：** `postEffect()`

设置当前的渲染效果

等同于已停用的“超级秘密设置”

```lua
setPostEffect(effect)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ----------- | ------- |
| effect | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setPostEffect("invert")
```

---

### <code>setPrimaryFireTexture()</code> \{#setPrimaryFireTexture}

**别名：** `primaryFireTexture()`

设置自定义主火焰纹理，在实体着火时渲染

该效果由两层叠加而成

副层在第一人称下渲染

没有副层时使用主层作为回退

```lua
setPrimaryFireTexture(id)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setPrimaryFireTexture("textures/block/soul_fire_0")
```

---

### <code>getPrimaryFireTexture()</code> \{#getPrimaryFireTexture}

获取当前自定义的主火焰纹理

```lua
getPrimaryFireTexture()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
renderer:getPrimaryFireTexture()
```

---

### <code>setRenderCrosshair()</code> \{#setRenderCrosshair}

设置是否渲染准星

```lua
setRenderCrosshair(renderCrosshair)
```

**参数：**

| 名称            | 类型                                              | 说明 | 默认值 |
| --------------- | ------------------------------------------------- | ----------- | ------- |
| renderCrosshair | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setRenderCrosshair(false)
```

---

### <code>setRenderFire()</code> \{#setRenderFire}

设置是否渲染火焰效果

```lua
setRenderFire(renderFire)
```

**参数：**

| 名称       | 类型                                              | 说明 | 默认值 |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| renderFire | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setRenderFire(false)
```

---

### <code>setRenderHUD()</code> \{#setRenderHUD}

设置是否渲染原版 HUD

```lua
setRenderHUD(renderHUD)
```

**参数：**

| 名称      | 类型                                              | 说明 | 默认值 |
| --------- | ------------------------------------------------- | ----------- | ------- |
| renderHUD | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setRenderHUD(false)
```

---

### <code>setRenderLeftArm()</code> \{#setRenderLeftArm}

**别名：** `renderLeftArm()`

切换第一人称下是否渲染左臂，无论是否手持物品

```lua
setRenderLeftArm(bool)
```

**参数：**

| 名称 | 类型                                              | 说明 | 默认值 |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setRenderLeftArm(true)
```

---

### <code>getRenderLeftArm()</code> \{#getRenderLeftArm}

获取第一人称下是否渲染左臂

```lua
getRenderLeftArm()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:getRenderLeftArm()
```

---

### <code>setRenderRightArm()</code> \{#setRenderRightArm}

**别名：** `renderRightArm()`

切换第一人称下是否渲染右臂，无论是否手持物品

```lua
setRenderRightArm(bool)
```

**参数：**

| 名称 | 类型                                              | 说明 | 默认值 |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setRenderRightArm(true)
```

---

### <code>getRenderRightArm()</code> \{#getRenderRightArm}

获取第一人称下是否渲染右臂

```lua
getRenderRightArm()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:getRenderRightArm()
```

---

### <code>setRenderVehicle()</code> \{#setRenderVehicle}

设置是否渲染你的载具

```lua
setRenderVehicle(renderVehicle)
```

**参数：**

| 名称          | 类型                                              | 说明 | 默认值 |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| renderVehicle | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setRenderVehicle(false)
```

---

### <code>setRootRotationAllowed()</code> \{#setRootRotationAllowed}

**别名：** `rootRotationAllowed()`

设置模型是否应用根节点旋转

默认为 true

```lua
setRootRotationAllowed(bool)
```

**参数：**

| 名称 | 类型                                              | 说明 | 默认值 |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setRootRotationAllowed(true)
```

---

### <code>getRootRotationAllowed()</code> \{#getRootRotationAllowed}

获取模型是否应用根节点旋转

```lua
getRootRotationAllowed()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:getRootRotationAllowed()
```

---

### <code>setSecondaryFireTexture()</code> \{#setSecondaryFireTexture}

**别名：** `secondaryFireTexture()`

设置自定义副火焰纹理，在实体着火时渲染

该效果由两层叠加而成

副层在第一人称下渲染

没有副层时使用主层作为回退

```lua
setSecondaryFireTexture(id)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setSecondaryFireTexture("textures/block/soul_fire_1")
```

---

### <code>getSecondaryFireTexture()</code> \{#getSecondaryFireTexture}

获取当前自定义的副火焰纹理

```lua
getSecondaryFireTexture()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
renderer:getSecondaryFireTexture()
```

---

### <code>setShadowRadius()</code> \{#setShadowRadius}

**别名：** `shadowRadius()`

设置影子的半径

默认值为 nil，表示使用原版玩家的默认值 0.5

最大值为 12

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setShadowRadius()
```

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setShadowRadius(radius)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ----------- | ------- |
| radius | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
renderer:setShadowRadius(12)
```

---

### <code>getShadowRadius()</code> \{#getShadowRadius}

获取影子的半径

```lua
getShadowRadius()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
renderer:getShadowRadius()
```

---

### <code>setUpsideDown()</code> \{#setUpsideDown}

**别名：** `upsideDown()`

设置该实体是否上下颠倒渲染

```lua
setUpsideDown(upsideDown)
```

**参数：**

| 名称       | 类型                                              | 说明 | 默认值 |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| upsideDown | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | 返回自身以支持链式调用 |

**示例：**

```lua
renderer:setUpsideDown(true)
```

---

### <code>isUpsideDown()</code> \{#isUpsideDown}

检查该实体是否应上下颠倒渲染

```lua
isUpsideDown()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:isUpsideDown()
```

---

### <code>shouldForcePaperdoll()</code> \{#shouldForcePaperdoll}

检查是否应强制渲染纸娃娃

```lua
shouldForcePaperdoll()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:shouldForcePaperdoll()
```

---

### <code>shouldRenderCrosshair()</code> \{#shouldRenderCrosshair}

检查是否应渲染准星

```lua
shouldRenderCrosshair()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:shouldRenderCrosshair()
```

---

### <code>shouldRenderFire()</code> \{#shouldRenderFire}

检查是否应渲染火焰效果

```lua
shouldRenderFire()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:shouldRenderFire()
```

---

### <code>shouldRenderHUD()</code> \{#shouldRenderHUD}

检查是否应渲染原版 HUD

```lua
shouldRenderHUD()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:shouldRenderHUD()
```

---

### <code>shouldRenderVehicle()</code> \{#shouldRenderVehicle}

检查是否应渲染你的载具

```lua
shouldRenderVehicle()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
renderer:shouldRenderVehicle()
```

---

## 字段

### <code>renderFire</code> \{#renderFire}

着火时是否在视觉上显示火焰效果

默认为 true

---

### <code>renderVehicle</code> \{#renderVehicle}

是否渲染你的载具（船、矿车、马等）

默认为 true

---

### <code>renderCrosshair</code> \{#renderCrosshair}

切换是否渲染准星

默认为 true

---

### <code>forcePaperdoll</code> \{#forcePaperdoll}

切换纸娃娃是否无视玩家当前动作而始终渲染

如果纸娃娃已禁用或已设置为始终渲染，则不会有变化

默认为 false

---

### <code>renderHUD</code> \{#renderHUD}

切换是否渲染原版 HUD

不包括手部和 Figura HUD

---
