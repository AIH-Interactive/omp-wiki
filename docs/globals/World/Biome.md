---
title: Biome（生物群系）
sidebar_label: Biome（生物群系）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Minecraft 生物群系的代理对象。

:::warning
本页仍在完善中。这里已收录 Figura 文档中的全部信息，我们正在补充更有帮助的说明。
:::

实例通过 WorldAPI 获取。

该代理还保存了生物群系的位置。

本页示例假设：

```lua
local biome = world.getBiome(player:getPos())
```

---

## 天气

### <code>getDownfall()</code> \{#getDownfall}

获取该生物群系的湿度。

```lua
getDownfall()
```

**返回：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
biome:getDownfall()
```

---

### <code>getPrecipitation()</code> \{#getPrecipitation}

获取该生物群系的降水类型。

类型可以是 "NONE"、"RAIN" 或 "SNOW"。

```lua
getPrecipitation()
```

**返回：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
biome:getPrecipitation()
```

---

### <code>getTemperature()</code> \{#getTemperature}

获取该生物群系的温度。

```lua
getTemperature()
```

**返回：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
biome:getTemperature()
```

---

### <code>isCold()</code> \{#isCold}

判断该生物群系是否寒冷。

```lua
isCold()
```

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
biome:isCold()
```

---

### <code>isHot()</code> \{#isHot}

判断该生物群系是否炎热。

```lua
isHot()
```

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
biome:isHot()
```

---

## 生物群系颜色

### <code>getFogColor()</code> \{#getFogColor}

获取该生物群系的雾颜色，以 RGB 向量表示。

```lua
getFogColor()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
biome:getFogColor()
```

---

### <code>getFoliageColor()</code> \{#getFoliageColor}

获取该生物群系的植被颜色，以 RGB 向量表示。

```lua
getFoliageColor()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
biome:getFoliageColor()
```

---

### <code>getGrassColor()</code> \{#getGrassColor}

获取该生物群系的草色，以 RGB 向量表示。

```lua
getGrassColor()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
biome:getGrassColor()
```

---

### <code>getSkyColor()</code> \{#getSkyColor}

获取该生物群系的天空颜色，以 RGB 向量表示。

```lua
getSkyColor()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
biome:getSkyColor()
```

---

### <code>getWaterColor()</code> \{#getWaterColor}

获取该生物群系的水体颜色，以 RGB 向量表示。

```lua
getWaterColor()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
biome:getWaterColor()
```

---

### <code>getWaterFogColor()</code> \{#getWaterFogColor}

获取该生物群系的水雾颜色，以 RGB 向量表示。

```lua
getWaterFogColor()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
biome:getWaterFogColor()
```

---

## 生物群系数据

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置该生物群系代理保存的位置。

需要位置参数的 Biome 函数会使用这个保存的位置。

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

| 类型                                       | 说明                 |
| ------------------------------------------ | -------------------- |
| <code>[Biome](/globals/World/Biome)</code> | 返回自身，以便链式调用 |

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

| 类型                                       | 说明                 |
| ------------------------------------------ | -------------------- |
| <code>[Biome](/globals/World/Biome)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
biome:setPos(player:getPos())
```

---

### <code>getPos()</code> \{#getPos}

返回该生物群系代理保存的位置。

需要位置参数的 Biome 函数会使用这个保存的位置。

```lua
getPos()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
biome:getPos()
```

---

### <code>getTags()</code> \{#getTags}

获取该生物群系中与世界生成相关的标签。

```lua
getTags()
```

**返回：**

| 类型                                          | 说明 |
| --------------------------------------------- | ---- |
| <code>[Table](/tutorials/types/Tables)</code> | -    |

**示例：**

```lua
biome:getTags()
```

---

### <code>id</code> \{#id}

该生物群系的 id。

**示例：**

```lua
biome.id
```

---
