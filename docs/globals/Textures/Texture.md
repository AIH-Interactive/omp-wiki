---
title: Texture（纹理）
sidebar_label: Texture（纹理）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

纹理对象。它可能由模型生成，也可能通过 TextureAPI 创建。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

本页假定：

```lua
local myTex = textures["myTexture"]
```

---

### <code>getDimensions()</code> \{#getDimensions}

返回该纹理宽度与高度组成的向量。

```lua
getDimensions()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
myTex:getDimensions()
```

---

### <code>getName()</code> \{#getName}

返回该纹理的名称。

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
myTex:getName()
```

---

### <code>getPath()</code> \{#getPath}

返回该纹理的资源路径位置。

```lua
getPath()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
myTex:getPath()
```

---

### <code>setPixel()</code> \{#setPixel}

**别名：** `pixel()`

设置指定像素的 RGBA 颜色。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPixel(x, y, rgb)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPixel(x, y, rgba)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setPixel(x, y, r, g, b, a)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| r    | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| a    | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myTex:setPixel(32, 32, 0, 0, 1, 1)
```

---

### <code>getPixel()</code> \{#getPixel}

读取指定像素的 RGBA 颜色。

```lua
getPixel(x, y)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**示例：**

```lua
myTex:getPixel(32, 32)
```

---

### <code>applyFunc()</code> \{#applyFunc}

对纹理的指定区域调用给定函数。它会遍历每个像素，把该像素当前的 x、y 坐标和颜色作为参数传入；颜色是 RGBA 格式的 vec4。函数的返回值会作为该像素的新颜色。

返回值无效或为 nil 时不产生任何效果。

```lua
applyFunc(x, y, width, height, func)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x      | <code>[Integer](/tutorials/types/Numbers)</code>    | -           | -       |
| y      | <code>[Integer](/tutorials/types/Numbers)</code>    | -           | -       |
| width  | <code>[Integer](/tutorials/types/Numbers)</code>    | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code>    | -           | -       |
| func   | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- multiplying each pixel in the texture by a color to tint it
local dimensions = myTex:getDimensions()
local tint = vec(140 / 255, 254 / 255, 254 / 255, 255 / 255)

-- create a function that accepts the color of the pixel, and its x, y position
function tintFunc(color, x, y)
    -- multiply the color of the pixel by our tint
    return color:mul(tint)
end

-- call the function on each pixel with applyFunc
-- highlight-next-line
myTex:applyFunc(0, 0, dimensions.x, dimensions.y, tintFunc)
```

---

### <code>applyMatrix()</code> \{#applyMatrix}

用矩阵变换纹理指定区域内的所有像素。

如果 `clip` 为 true，结果的颜色通道会被限制在 0 到 1 之间。

```lua
applyMatrix(x, y, width, height, matrix, clip)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x      | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| y      | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| width  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |
| clip   | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
-- multiplying each pixel in the texture by a color to tint it
local color = vec(140 / 255, 254 / 255, 254 / 255)
local dimensions = myTex:getDimensions()
myTex:applyMatrix(0, 0, dimensions.x, dimensions.y, matrices.mat4():scale(color))
```

---

### <code>fill()</code> \{#fill}

把指定区域整体设为同一个 RGBA 颜色。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
fill(x, y, width, height, rgb)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| rgb    | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
fill(x, y, width, height, rgba)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| rgba   | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
fill(x, y, width, height, r, g, b, a)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| x      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| r      | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| g      | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| b      | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| a      | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myTex:fill(0, 0, 32, 32, 0, 0, 1, 1)
```

---

### <code>restore()</code> \{#restore}

把纹理恢复到任何修改之前的原始状态。

```lua
restore()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myTex:restore()
```

---

### <code>save()</code> \{#save}

以 base64 字符串形式返回该纹理。

```lua
save()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
myTex:save()
```

---

### <code>update()</code> \{#update}

把纹理更新到 GPU，应用所有修改。

```lua
update()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Texture](/globals/Textures/Texture)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myTex:update()
```

---
