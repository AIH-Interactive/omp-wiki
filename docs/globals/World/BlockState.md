---
title: BlockState（方块状态）
sidebar_label: BlockState（方块状态）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Minecraft 方块状态的代理对象。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

实例通过 WorldAPI 获取。

该代理对象还会为 BlockState 保存一个位置。

本页所有示例都假设：

```lua
local block = world.getBlockState(player:getPos():sub(0, 0.5, 0))
```

---

## 红石属性

### <code>getComparatorOutput()</code> \{#getComparatorOutput}

获取比较器会从此 BlockState 读取到的信号强度。

```lua
getComparatorOutput()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getComparatorOutput()
```

---

### <code>emitsRedstonePower()</code> \{#emitsRedstonePower}

获取此 BlockState 是否发出红石能量。

```lua
emitsRedstonePower()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:emitsRedstonePower()
```

---

## 玩家影响

### <code>getJumpVelocityMultiplier()</code> \{#getJumpVelocityMultiplier}

获取此 BlockState 的跳跃速度倍率。

（在原版中实际上只有蜂蜜块如此）。

```lua
getJumpVelocityMultiplier()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getJumpVelocityMultiplier()
```

---

### <code>getVelocityMultiplier()</code> \{#getVelocityMultiplier}

获取此 BlockState 的速度倍率。

（在原版中只有灵魂沙和蜂蜜块如此）。

```lua
getVelocityMultiplier()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getVelocityMultiplier()
```

---

## 形状

### <code>getCollisionShape()</code> \{#getCollisionShape}

返回表示碰撞形状包围盒的表。

该表列出每个形状，每个形状包含两个 Vector3：第一个向量是包围盒的一个角，另一个向量是相对的角。

```lua
getCollisionShape()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getCollisionShape()
```

---

### <code>getOutlineShape()</code> \{#getOutlineShape}

返回表示轮廓形状包围盒的表。

该表列出每个形状，每个形状包含两个 Vector3：第一个向量是包围盒的一个角，另一个向量是相对的角。

```lua
getOutlineShape()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getOutlineShape()
```

---

## 视觉属性

### <code>getLuminance()</code> \{#getLuminance}

获取此 BlockState 的发光等级。

```lua
getLuminance()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getLuminance()
```

---

### <code>getMapColor()</code> \{#getMapColor}

获取此 BlockState 的地图颜色，以 Vector3 表示，R、G、B 的取值范围为 0 到 1。

```lua
getMapColor()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
block:getMapColor()
```

---

### <code>getOpacity()</code> \{#getOpacity}

获取此 BlockState 的不透明度，即它对光照等级的影响程度。

```lua
getOpacity()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getOpacity()
```

---

### <code>getTextures()</code> \{#getTextures}

返回此 BlockState 的纹理列表。

键表示剔除方向（Culling Direction），值是另一个表，包含全部纹理路径（字符串）。

注意：此函数仅对普通方块有效；特殊方块（水、床等）会返回空表。

```lua
getTextures()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getTextures()
```

---

### <code>hasEmissiveLighting()</code> \{#hasEmissiveLighting}

获取此 BlockState 是否使用自发光光照。

```lua
hasEmissiveLighting()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:hasEmissiveLighting()
```

---

## 物理属性

### <code>getBlastResistance()</code> \{#getBlastResistance}

获取此 BlockState 的爆炸抗性。

```lua
getBlastResistance()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getBlastResistance()
```

---

### <code>getFriction()</code> \{#getFriction}

获取此 BlockState 的摩擦力。

（在原版中为粘液块和冰）。

```lua
getFriction()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getFriction()
```

---

### <code>getHardness()</code> \{#getHardness}

获取此 BlockState 的硬度。

```lua
getHardness()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
block:getHardness()
```

---

### <code>hasCollision()</code> \{#hasCollision}

如果此方块具有碰撞则返回 true。

```lua
hasCollision()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:hasCollision()
```

---

### <code>isAir()</code> \{#isAir}

检查此方块是否为空气。

```lua
isAir()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:isAir()
```

---

### <code>isFullCube()</code> \{#isFullCube}

获取此 BlockState 的碰撞箱是否为完整立方体。

```lua
isFullCube()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:isFullCube()
```

---

### <code>isOpaque()</code> \{#isOpaque}

获取此 BlockState 是否为不透明。

```lua
isOpaque()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:isOpaque()
```

---

### <code>isSolidBlock()</code> \{#isSolidBlock}

获取此 BlockState 是否被 Minecraft 视为“固体”方块。

```lua
isSolidBlock()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:isSolidBlock()
```

---

### <code>isTranslucent()</code> \{#isTranslucent}

获取此 BlockState 是否会让天空光向下透射。

```lua
isTranslucent()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:isTranslucent()
```

---

## 杂项

### <code>getEntityData()</code> \{#getEntityData}

以表的形式返回此 BlockState 在其位置上关联的方块实体的 NBT。

由于此模组仅运行在客户端，该 NBT 可能并不包含真正的 NBT（真正的 NBT 保存在服务端）。

```lua
getEntityData()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getEntityData()
```

---

### <code>getFluidTags()</code> \{#getFluidTags}

返回一个表，包含此方块的全部流体标签，标签以字符串表示。

```lua
getFluidTags()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getFluidTags()
```

---

### <code>getID()</code> \{#getID}

返回此 BlockState 的标识符。

```lua
getID()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
block:getID()
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置此 BlockState 代理对象保存的位置。

保存的位置会用于需要位置的 BlockState 函数。

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
| <code>[BlockState](/globals/World/BlockState)</code> | 返回自身，以便链式调用 |

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
| <code>[BlockState](/globals/World/BlockState)</code> | 返回自身，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
block:setPos(player:getPos())
```

---

### <code>getPos()</code> \{#getPos}

返回此 BlockState 代理对象保存的位置。

保存的位置会用于需要位置的 BlockState 函数。

```lua
getPos()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
block:getPos()
```

---

### <code>getProperties()</code> \{#getProperties}

返回一个表，包含此 BlockState 的属性。

```lua
getProperties()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getProperties()
```

---

### <code>getSounds()</code> \{#getSounds}

获取此 BlockState 可播放的全部音效名称，以及它们的音高和音量。

结果保存在一个表中。

```lua
getSounds()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getSounds()
```

---

### <code>getTags()</code> \{#getTags}

返回一个表，包含此方块的全部标签，标签以字符串表示。

```lua
getTags()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
block:getTags()
```

---

### <code>asItem()</code> \{#asItem}

返回以物品形式表示此方块的 ItemStack，具体取哪个物品由 Minecraft 决定。

如果找不到对应此方块的物品，则返回 nil。

```lua
asItem()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**示例：**

```lua
block:asItem()
```

---

### <code>hasBlockEntity()</code> \{#hasBlockEntity}

获取此 BlockState 是否有关联的方块实体。

```lua
hasBlockEntity()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
block:hasBlockEntity()
```

---

### <code>toStateString()</code> \{#toStateString}

将此 BlockState 转换为字符串，格式与 Minecraft 命令中看到的一致。

```lua
toStateString()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
block:toStateString()
```

---

## 字段

### <code>id</code> \{#id}

此 BlockState 所属方块的标识符。

**示例：**

```lua
block.id
```

---

### <code>properties</code> \{#properties}

一个包含此 BlockState 属性的表。

如果此 BlockState 没有属性，则为 nil。

**示例：**

```lua
block.properties
```

---
