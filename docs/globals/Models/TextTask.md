---
title: TextTask（文本任务）
sidebar_label: TextTask（文本任务）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于通过 [newText](.#newText) 渲染文本的任务。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

本页所有示例都假设：

```lua
local myText = models:newText("myCoolTextName")
```

---

## 文本任务

### <code>setText()</code> \{#setText}

**别名：** `text()`

设置此任务要渲染的文本。

```lua
setText(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setText("Hi mom!")
```

---

### <code>getText()</code> \{#getText}

返回此任务的文本。

```lua
getText()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
myText:getText()
```

---

### <code>setAlignment()</code> \{#setAlignment}

**别名：** `alignment()`

设置此文本的对齐方式。

可取值为“LEFT”“RIGHT”或“CENTER”。

默认值为“LEFT”。

```lua
setAlignment(alignment)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| alignment | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setAlignment("CENTER")
```

---

### <code>getAlignment()</code> \{#getAlignment}

返回此文本的对齐方式。

默认值为“LEFT”。

```lua
getAlignment()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
myText:getAlignment()
```

---

### <code>setBackground()</code> \{#setBackground}

**别名：** `background()`

设置此文本是否渲染背景。

默认为 false。

```lua
setBackground(background)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| background | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setBackground(true)
```

---

### <code>setBackgroundColor()</code> \{#setBackgroundColor}

**别名：** `backgroundColor()`

设置此文本的背景颜色。

如果未提供 alpha 值，则使用原版值（即辅助功能设置中的值）。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setBackgroundColor(rgba)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setBackgroundColor(r, g, b, a)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myText:setBackgroundColor(63 / 255, 255 / 255, 192 / 255, 203 / 255)
```

---

### <code>getBackgroundColor()</code> \{#getBackgroundColor}

获取此文本的背景颜色。

```lua
getBackgroundColor()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**示例：**

```lua
myText:getBackgroundColor()
```

---

### <code>setOpacity()</code> \{#setOpacity}

**别名：** `opacity()`

设置此文本的不透明度。

```lua
setOpacity(opacity)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| opacity | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setOpacity(0.5)
```

---

### <code>getOpacity()</code> \{#getOpacity}

获取此文本的不透明度。

```lua
getOpacity()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
myText:getOpacity()
```

---

### <code>setOutline()</code> \{#setOutline}

**别名：** `outline()`

切换文本是否渲染描边。

如果为文本设置描边，它会始终以全亮度渲染。

与“Shadow”和“Emissive”模式不兼容。

```lua
setOutline(outline)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| outline | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setOutline(true)
```

---

### <code>setOutlineColor()</code> \{#setOutlineColor}

**别名：** `outlineColor()`

设置此文本渲染的描边颜色。

仅与“Outline”模式兼容。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOutlineColor(color)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOutlineColor(r, g, b)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myText:setOutline(true)
-- highlight-next-line
myText:setOutlineColor(255 / 255, 192 / 255, 203 / 255)
```

---

### <code>getOutlineColor()</code> \{#getOutlineColor}

获取此任务文本的描边颜色。

```lua
getOutlineColor()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
myText:getOutlineColor()
```

---

### <code>setSeeThrough()</code> \{#setSeeThrough}

**别名：** `seeThrough()`

设置此文本是否可隔墙可见。

默认为 false。

```lua
setSeeThrough(seeThrough)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| seeThrough | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setSeeThrough(true)
```

---

### <code>setShadow()</code> \{#setShadow}

**别名：** `shadow()`

切换文本是否渲染投影。

与“Outline”模式不兼容。

```lua
setShadow(shadow)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| shadow | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setShadow(true)
```

---

### <code>setWidth()</code> \{#setWidth}

**别名：** `width()`

设置此文本的最大宽度，超出后文本会自动换行成多行。

宽度为 0 或小于 0 时不换行。

默认为 0。

```lua
setWidth(width)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| width | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setWidth(1)
```

---

### <code>getWidth()</code> \{#getWidth}

获取此文本的最大宽度。

默认为 0。

```lua
getWidth()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
myText:getWidth()
```

---

### <code>setWrap()</code> \{#setWrap}

**别名：** `wrap()`

设置此文本是否自动换行。

```lua
setWrap(wrap)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| wrap | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextTask](/globals/Models/TextTask)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
myText:setWrap(true)
```

---

### <code>hasBackground()</code> \{#hasBackground}

检查此文本是否渲染背景。

默认为 false。

```lua
hasBackground()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
myText:hasBackground()
```

---

### <code>hasOutline()</code> \{#hasOutline}

检查此任务文本是否带有描边。

```lua
hasOutline()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
myText:hasOutline()
```

---

### <code>hasShadow()</code> \{#hasShadow}

检查此任务文本是否带有投影。

```lua
hasShadow()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
myText:hasShadow()
```

---

### <code>hasWrap()</code> \{#hasWrap}

检查此文本是否自动换行。

```lua
hasWrap()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
myText:hasWrap()
```

---

### <code>isSeeThrough()</code> \{#isSeeThrough}

检查此文本是否可隔墙可见。

默认为 false。

```lua
isSeeThrough()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
myText:isSeeThrough()
```

---

## 渲染任务

### <code>setLight()</code> \{#setLight}

**别名：** `light()`

设置此任务的光照覆盖值。

取值 0 到 15，分别表示要使用的方块光照和天空光照等级。

传入 nil 会重置此任务的光照覆盖。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
myBlock:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

返回此任务的光照覆盖值。

```lua
getLight()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
myBlock:getLight()
```

---

### <code>setMatrix()</code> \{#setMatrix}

**别名：** `matrix()`

把指定矩阵设置为此渲染任务的位置矩阵。

法线矩阵会自动按该矩阵的逆转置计算。

调用此方法不会改变渲染任务中 position、rot 或 scale 的值。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**示例：**

```lua
myBlock:setMatrix(matrices.mat4())
```

---

### <code>getName()</code> \{#getName}

获取此任务的名称。

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
myBlock:getName()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

根据当前的位置、旋转、缩放和轴心重新计算此渲染任务的法线矩阵，然后返回该矩阵。

```lua
getNormalMatrix()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
myBlock:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

返回此渲染任务的法线矩阵。

Raw 版本的区别在于：返回前不会重新计算矩阵。

```lua
getNormalMatrixRaw()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**示例：**

```lua
myBlock:getNormalMatrixRaw()
```

---

### <code>setOverlay()</code> \{#setOverlay}

**别名：** `overlay()`

设置此任务的叠加层覆盖值。

取值 0 到 15，分别表示要使用的白色叠加层和受伤叠加层等级。

传入 nil 会重置此任务的叠加层覆盖。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
local hurt = player:getNbt.HurtTime > 0
myBlock:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

返回此任务的叠加层覆盖值。

```lua
getOverlay()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
myBlock:getOverlay()
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

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
myBlock:setPos(0, 16, 0)
```

---

### <code>getPos()</code> \{#getPos}

获取此任务的位置。

```lua
getPos()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
myBlock:getPos()
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

根据当前的位置、旋转、缩放和轴心重新计算此渲染任务的矩阵，然后返回该矩阵。

```lua
getPositionMatrix()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
myBlock:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

返回此渲染任务的位置矩阵。

Raw 版本的区别在于：获取前不会重新计算矩阵。

```lua
getPositionMatrixRaw()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**示例：**

```lua
myBlock:getPositionMatrixRaw()
```

---

### <code>setRot()</code> \{#setRot}

**别名：** `rot()`

设置任务的旋转，角度相对于其挂载的部件。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
myBlock:setRot(0, 45, 22.5)
```

---

### <code>getRot()</code> \{#getRot}

获取此任务的旋转。

```lua
getRot()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
myBlock:getRot()
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

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| scale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
myBlock:setScale(0.4, 0.4, 0.4) -- myBlock:setScale(0.4) also works
```

---

### <code>getScale()</code> \{#getScale}

获取此任务的缩放。

```lua
getScale()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
myBlock:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

设置此任务是否渲染。

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
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**示例：**

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    myBlock:setVisible(state)
end)
```

---

### <code>isVisible()</code> \{#isVisible}

检查此任务是否可见。

```lua
isVisible()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
if myBlock:isVisible() then
    -- do something
end
```

---

### <code>remove()</code> \{#remove}

从父级模型部件中移除此渲染任务。

```lua
remove()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**示例：**

```lua
myBlock:remove()
```

---
