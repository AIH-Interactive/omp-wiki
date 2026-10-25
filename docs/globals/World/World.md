---
sidebar_position: 1
title: World（世界）
sidebar_label: World（世界）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于从 Minecraft 世界读取信息的全局 API。

:::warning
本页仍在完善中。Figura 文档中的全部信息已收录，我们正在补充更详细的说明。
:::

世界 API 通过全局对象 <code>world</code> 访问，例如 <code>world.getTime()</code>。

:::info

世界 API 中的函数不会接收 `self` 参数，因此调用时要使用 `.`，而不是 `:`。

```lua
-- error-next-line
world:getBlockState(player:getPos())

-- highlight-next-line
world.getBlockState(player:getPos())
```

:::

---

## 环境

### <code>exists()</code> \{#exists}

检查当前是否存在世界。

几乎总是返回 true，但在跨维度传送等情况下可能返回 false。

```lua
exists()
```

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
world.exists()
```

---

### <code>getBiome()</code> \{#getBiome}

获取指定位置所在的生物群系。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getBiome(pos)
```

**参数：**

| 名称 | 类型                                             | 说明                                          | 默认值   |
| ---- | ------------------------------------------------ | --------------------------------------------- | -------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 要获取生物群系的世界坐标                      | 必需     |

**返回值：**

| 类型                                       | 说明                        |
| ------------------------------------------ | --------------------------- |
| <code>[Biome](/globals/World/Biome)</code> | 指定位置的生物群系          |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getBiome(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明                                                  | 默认值   |
| ---- | ----------------------------------------------- | ----------------------------------------------------- | -------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取生物群系的世界 x 坐标                           | 必需     |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取生物群系的世界 y 坐标                           | 必需     |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取生物群系的世界 z 坐标                           | 必需     |

**返回值：**

| 类型                                       | 说明                        |
| ------------------------------------------ | --------------------------- |
| <code>[Biome](/globals/World/Biome)</code> | 指定位置的生物群系          |

</TabItem>
</Tabs>

**示例：**

```lua
world.getBiome(player:getPos())
```

---

### <code>getBuildHeight()</code> \{#getBuildHeight}

返回该世界的最低与最高建筑高度，以多个返回值的形式给出。

```lua
getBuildHeight()
```

**返回值：**

| 类型                                             | 说明                 |
| ------------------------------------------------ | -------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | 最低建筑高度         |
| <code>[Integer](/tutorials/types/Numbers)</code> | 最高建筑高度         |

**示例：**

```lua
local min, max = world.getBuildHeight()
```

---

### <code>getDimension()</code> \{#getDimension}

获取该世界的维度名称。

```lua
getDimension()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
world.getDimension()
```

---

### <code>getHeight()</code> \{#getHeight}

按给定的高度图返回指定位置处的最高点。

未提供高度图时，默认使用 MOTION_BLOCKING。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getHeight(pos, heightmap)
```

**参数：**

| 名称      | 类型                                             | 说明        | 默认值  |
| --------- | ------------------------------------------------ | ----------- | ------- |
| pos       | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |
| heightmap | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getHeight(x, z, heightmap)
```

**参数：**

| 名称      | 类型                                            | 说明        | 默认值  |
| --------- | ----------------------------------------------- | ----------- | ------- |
| x         | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z         | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| heightmap | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getHeight(player:getPos().xz)
```

---

### <code>getSpawnPoint()</code> \{#getSpawnPoint}

返回一个包含世界出生点坐标的向量。

```lua
getSpawnPoint()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
world.getSpawnPoint()
```

---

### <code>isChunkLoaded()</code> \{#isChunkLoaded}

检查指定位置是否已加载区块。

如果需要访问方块，通常使用 `getBlockState()` 更高效。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
isChunkLoaded(pos)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
isChunkLoaded(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.isChunkLoaded(player:getPos())
```

---

### <code>isOpenSky()</code> \{#isOpenSky}

获取指定位置的天空是否无遮挡。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
isOpenSky(pos)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
isOpenSky(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.isOpenSky(player:getPos())
```

---

## 方块与物品

### <code>getBlockState()</code> \{#getBlockState}

获取指定位置的 BlockState。

如果该位置尚未加载，返回 void_air。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getBlockState(pos)
```

**参数：**

| 名称 | 类型                                             | 说明                                                            | 默认值   |
| ---- | ------------------------------------------------ | --------------------------------------------------------------- | -------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 要获取 `BlockState` 的方块世界坐标                              | 必需     |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ---------------------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 指定位置的 `BlockState`            |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getBlockState(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明                                                              | 默认值   |
| ---- | ----------------------------------------------- | ----------------------------------------------------------------- | -------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取 `BlockState` 的方块世界 x 坐标                             | 必需     |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取 `BlockState` 的方块世界 y 坐标                             | 必需     |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取 `BlockState` 的方块世界 z 坐标                             | 必需     |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ---------------------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 指定位置的 `BlockState`            |

</TabItem>
</Tabs>

**示例：**

```lua
world.getBlockState(player:getPos())
```

---

### <code>getBlocks()</code> \{#getBlocks}

获取指定区域内所有 BlockState 的列表。

最大区域尺寸为 8 x 8 x 8。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getBlocks(min, max)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| min  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| max  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明        |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getBlocks(minX, minY, minZ, max)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| minX | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| minY | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| minZ | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| max  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明        |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
getBlocks(min, maxX, maxY, maxZ)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| min  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| maxX | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| maxY | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| maxZ | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |

**返回值：**

| 类型                                          | 说明        |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
getBlocks(minX, minY, minZ, maxX, maxY, maxZ)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| minX | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| minY | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| minZ | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxX | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxY | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxZ | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明        |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
local pos = player:getPos()
local min = pos - vec(4, 4, 4)
local max = pos + vec(4, 4, 4)
-- highlight-next-line
local blocks = world.getBlocks(min, max)
```

---

### <code>newBlock()</code> \{#newBlock}

解析给定字符串并创建一个新的 BlockState。

对于依赖所在位置的 BlockState 函数，可以额外传入一个世界坐标。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
newBlock(block)
```

**参数：**

| 名称  | 类型                                            | 说明        | 默认值  |
| ----- | ----------------------------------------------- | ----------- | ------- |
| block | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                                 | 说明        |
| ---------------------------------------------------- | ----------- |
| <code>[BlockState](/globals/World/BlockState)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
newBlock(block, pos)
```

**参数：**

| 名称  | 类型                                             | 说明        | 默认值  |
| ----- | ------------------------------------------------ | ----------- | ------- |
| block | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| pos   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                                 | 说明        |
| ---------------------------------------------------- | ----------- |
| <code>[BlockState](/globals/World/BlockState)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
newBlock(block, x, y, z)
```

**参数：**

| 名称  | 类型                                            | 说明        | 默认值  |
| ----- | ----------------------------------------------- | ----------- | ------- |
| block | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| x     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                                 | 说明        |
| ---------------------------------------------------- | ----------- |
| <code>[BlockState](/globals/World/BlockState)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.newBlock("minecraft:dirt")
```

---

### <code>newItem()</code> \{#newItem}

解析给定字符串并创建一个新的 ItemStack。

可以指定数量与损伤值，应用到该 ItemStack 上。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
newItem(item)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| item | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                               | 说明        |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
newItem(item, count)
```

**参数：**

| 名称  | 类型                                             | 说明        | 默认值  |
| ----- | ------------------------------------------------ | ----------- | ------- |
| item  | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| count | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                               | 说明        |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
newItem(item, count, damage)
```

**参数：**

| 名称   | 类型                                             | 说明        | 默认值  |
| ------ | ------------------------------------------------ | ----------- | ------- |
| item   | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| count  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| damage | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                               | 说明        |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.newItem("grass_block", 64, 5)
```

---

### <code>getMapData()</code> \{#getMapData}

接收一个字符串（例如 `map_3`），如果该地图存在则返回数据表。该字符串可从地图 [ItemStack](/globals/World/ItemStack) 的 NBT 中获取。

地图数据可能尚未同步，只有在手持该地图时才会更新。

```lua
getMapData(id)
```

**参数：**

| 名称 | 类型                                            | 说明                                            | 默认值  |
| ---- | ----------------------------------------------- | ----------------------------------------------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | 地图的字符串 ID，可带或不带 `map_` 前缀         | -       |

**返回值：**

| 类型                                          | 说明                           |
| --------------------------------------------- | ------------------------------ |
| <code>[Table](/tutorials/Types/Tables)</code> | 与该地图相关的各种数据         |

**示例：**

```lua
local mapData = world.getMapData("map_2")
```

---

## 实体

### <code>avatarVars()</code> \{#avatarVars}

返回一个表，包含所有已加载形象通过 "avatar:store()" 函数存储的变量。

该表以形象所属玩家的 UUID 为索引。

```lua
avatarVars()
```

**返回值：**

| 类型                                          | 说明        |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
world.avatarVars()
```

---

### <code>getEntity()</code> \{#getEntity}

返回该 UUID 对应实体的 EntityAPI 对象；如果未找到实体则返回 nil。

```lua
getEntity(UUID)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| UUID | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
world.getEntity("5003b2ce-7a8d-4c56-8b91-ec705985fe08")
```

---

### <code>getEntities()</code> \{#getEntities}

返回由两个给定位置构成的包围盒内的实体列表。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getEntities(min, max)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| min  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| max  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getEntities(minX, minY, minZ, maxX, maxY, maxZ)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| minX | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| minY | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| minZ | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxX | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxY | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxZ | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

</TabItem>
</Tabs>

**返回值：**

| 类型                                          | 说明                                 |
| --------------------------------------------- | ------------------------------------ |
| <code>[Table](/tutorials/types/Tables)</code> | 包围盒内的实体                       |

**示例：**

```lua
local pos = player:getPos()
local min = pos - vec(4, 4, 4)
local max = pos + vec(4, 4, 4)
-- highlight-next-line
local entities = world.getEntities(min, max)
```

---

### <code>getPlayers()</code> \{#getPlayers}

返回一个表，包含世界中所有玩家对应的 Player 实例。

玩家以名称为索引。

```lua
getPlayers()
```

**返回值：**

| 类型                                          | 说明        |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
for _, value in pairs(world.getPlayers()) do
    log(value)
end
```

---

## 时间

### <code>getDay()</code> \{#getDay}

获取当前天数。

如果传入 delta，则会在时间上加上 delta。

delta 的默认值为 0。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getDay()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getDay(delta)
```

**参数：**

| 名称  | 类型                                            | 说明        | 默认值  |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getDay()
```

---

### <code>getDayTime()</code> \{#getDayTime}

获取当前这一天内的时间，范围为 0 到 24000。

如果传入 delta，则会在时间上加上 delta。

delta 的默认值为 0。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getDayTime()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getDayTime(delta)
```

**参数：**

| 名称  | 类型                                            | 说明        | 默认值  |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getDayTime()
```

---

### <code>getMoonPhase()</code> \{#getMoonPhase}

获取世界当前的月相，以整数存储。

```lua
getMoonPhase()
```

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
world.getMoonPhase()
```

---

### <code>getTime()</code> \{#getTime}

获取世界当前的游戏时间。

如果传入 delta，则会在时间上加上 delta。

delta 的默认值为 0。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTime()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTime(delta)
```

**参数：**

| 名称  | 类型                                            | 说明        | 默认值  |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getTime()
```

---

### <code>getTimeOfDay()</code> \{#getTimeOfDay}

获取世界当前的白昼时间。

如果传入 delta，则会在时间上加上 delta。

delta 的默认值为 0。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTimeOfDay()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTimeOfDay(delta)
```

**参数：**

| 名称  | 类型                                            | 说明        | 默认值  |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getTimeOfDay()
```

---

## 光照

### <code>getBlockLightLevel()</code> \{#getBlockLightLevel}

获取指定位置的方块光照等级。
方块光照的更多说明见 [Minecraft Wiki](https://minecraft.wiki/w/Light#Block_light)。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getBlockLightLevel(pos)
```

**参数：**

| 名称 | 类型                                             | 说明                                                      | 默认值   |
| ---- | ------------------------------------------------ | --------------------------------------------------------- | -------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 要获取方块光照等级的世界坐标                              | 必需     |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | 光照等级（0-15）       |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getBlockLightLevel(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明                                                        | 默认值   |
| ---- | ----------------------------------------------- | ----------------------------------------------------------- | -------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取方块光照等级的世界 x 坐标                             | 必需     |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取方块光照等级的世界 y 坐标                             | 必需     |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | 要获取方块光照等级的世界 z 坐标                             | 必需     |

**返回值：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | 光照等级（0-15）       |

</TabItem>
</Tabs>

**示例：**

```lua
world.getBlockLightLevel(player:getPos())
```

---

### <code>getLightLevel()</code> \{#getLightLevel}

获取指定位置的综合光照等级。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getLightLevel(pos)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getLightLevel(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getLightLevel(player:getPos())
```

---

### <code>getSkyLightLevel()</code> \{#getSkyLightLevel}

获取指定位置的天光等级。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getSkyLightLevel(pos)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getSkyLightLevel(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getSkyLightLevel(player:getPos())
```

---

## 天气

### <code>getRainGradient()</code> \{#getRainGradient}

获取世界中当前的降雨强度，由上一刻到当前刻插值得到。

delta 的默认值为 1，即当前刻。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getRainGradient()
```

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getRainGradient(delta)
```

**参数：**

| 名称  | 类型                                            | 说明        | 默认值  |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                            | 说明        |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getRainGradient()
```

---

### <code>isThundering()</code> \{#isThundering}

获取世界中当前是否正在打雷或闪电。

```lua
isThundering()
```

**返回值：**

| 类型                                              | 说明        |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
world.isThundering()
```

---

## 红石

### <code>getRedstonePower()</code> \{#getRedstonePower}

获取指定位置的红石能量等级。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getRedstonePower(pos)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getRedstonePower(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getRedstonePower(player:getPos())
```

---

### <code>getStrongRedstonePower()</code> \{#getStrongRedstonePower}

获取指定位置的直接红石能量等级。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getStrongRedstonePower(pos)
```

**参数：**

| 名称 | 类型                                             | 说明        | 默认值  |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getStrongRedstonePower(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明        | 默认值  |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明        |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
world.getStrongRedstonePower(player:getPos())
```

---
