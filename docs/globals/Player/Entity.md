---
title: Entity（实体）
sidebar_label: Entity（实体）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

作为 Minecraft 世界中某个实体的代理对象。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

本页示例均假定：

```lua
local thisEntity = thisEntity:getTargetedEntity()
```

---

## 实体变换

### <code>getPos()</code> \{#getPos}

获取实体在世界中的位置。

如果传入 delta，则用它在上一刻与当前刻之间对实体位置做线性插值。

delta 的默认值为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getPos()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getPos(delta)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
thisEntity:getPos()
```

---

### <code>getRot()</code> \{#getRot}

获取实体的旋转角度，单位为度。

如果传入 delta，则用它在上一刻与当前刻之间对实体旋转做线性插值。

delta 的默认值为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getRot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getRot(delta)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
thisEntity:getRot()
```

---

### <code>getVelocity()</code> \{#getVelocity}

获取该实体在世界坐标系中的当前速度，计算方式为本刻位置减去上一刻位置。

```lua
getVelocity()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
thisEntity:getVelocity()
```

---

### <code>getLookDir()</code> \{#getLookDir}

返回一个单位向量，指向该实体正在看的方向。

示例可参考 F3+B 界面中的蓝线。

```lua
getLookDir()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
thisEntity:getLookDir()
```

---

## 实体操作

### <code>getBoundingBox()</code> \{#getBoundingBox}

以 Vector3 返回该实体碰撞箱的尺寸。

\{x, y, z} 分别为宽度、高度和宽度。

Minecraft 实体的碰撞箱底面始终是正方形。

```lua
getBoundingBox()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
thisEntity:getBoundingBox()
```

---

### <code>getControlledVehicle()</code> \{#getControlledVehicle}

返回该实体正在控制的载具。

```lua
getControlledVehicle()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ------------------------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
thisEntity:getControlledVehicle()
```

---

### <code>getControllingPassenger()</code> \{#getControllingPassenger}

返回正在控制该实体的实体。

```lua
getControllingPassenger()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ------------------------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
thisEntity:getControllingPassenger()
```

---

### <code>getDimensionName()</code> \{#getDimensionName}

获取该实体所在维度的 Minecraft 标识符。

```lua
getDimensionName()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getDimensionName()
```

---

### <code>getEyeHeight()</code> \{#getEyeHeight}

返回该实体当前的眼睛高度。

```lua
getEyeHeight()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getEyeHeight()
```

---

### <code>getEyeY()</code> \{#getEyeY}

返回该实体眼睛所在的 Y 坐标。

不要与 getEyeHeight 混淆：该函数还会把实体自身的 Y 坐标计算在内。

```lua
getEyeY()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getEyeY()
```

---

### <code>getFrozenTicks()</code> \{#getFrozenTicks}

获取该实体在细雪中冻结的刻数。

```lua
getFrozenTicks()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getFrozenTicks()
```

---

### <code>getMaxAir()</code> \{#getMaxAir}

获取该实体可拥有的最大氧气值。

```lua
getMaxAir()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getMaxAir()
```

---

### <code>getName()</code> \{#getName}

如果该实体有自定义名称，则获取该名称。

如果没有，则返回 getType() 的翻译形式。

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getName()
```

---

### <code>getNbt()</code> \{#getNbt}

获取包含该实体 NBT 的表。

注意：实体 NBT 中的值并非全部都会同步，部分值只在服务端处理。

```lua
getNbt()
```

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
thisEntity:getNbt()
```

---

### <code>getPassengers()</code> \{#getPassengers}

返回该实体所有乘客实体的列表。

```lua
getPassengers()
```

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
thisEntity:getPassengers()
```

---

### <code>getPermissionLevel()</code> \{#getPermissionLevel}

返回该实体的权限等级数值。

服务器管理员默认权限等级为 4。

```lua
getPermissionLevel()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getPermissionLevel()
```

---

### <code>getPose()</code> \{#getPose}

返回玩家当前的姿势。

取值可以是：“STANDING”“FALL_FLYING”“SLEEPING”“SWIMMING”“SPIN_ATTACK”“CROUCHING”“LONG_JUMPING”或“DYING”。

```lua
getPose()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getPose() == "CROUCHING"
```

---

### <code>getTargetedBlock()</code> \{#getTargetedBlock}

返回你当前瞄准的方块状态（BlockState）的代理对象。

该 BlockState 会显示在 F3 界面中。

最大距离为 20（也是默认值），最小距离为 -20。

分别返回方块、命中位置和瞄准的方块面这三个值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTargetedBlock()
```

**返回：**

| 类型 | 说明 |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 瞄准的方块 |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置 |
| <code>[String](/tutorials/types/Strings)</code>      | 瞄准的方块面 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTargetedBlock(ignoreLiquids)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| ignoreLiquids | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 瞄准的方块 |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置 |
| <code>[String](/tutorials/types/Strings)</code>      | 瞄准的方块面 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
getTargetedBlock(ignoreLiquids, distance)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| ignoreLiquids | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |
| distance      | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

**返回：**

| 类型 | 说明 |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 瞄准的方块 |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置 |
| <code>[String](/tutorials/types/Strings)</code>      | 瞄准的方块面 |

</TabItem>
</Tabs>

**示例：**

```lua
local block, hitPos, side = thisEntity:getTargetedBlock(true, 4.5)
if block.id == "minecraft:grass_block" then
    log("You're looking at grass")
end
```

---

### <code>getTargetedEntity()</code> \{#getTargetedEntity}

返回你当前瞄准的实体的代理对象。

该实体会显示在 F3 界面中。

最大距离为 20（也是默认值），最小距离为 0。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTargetedEntity()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | --------------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 瞄准的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTargetedEntity(distance)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| distance | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | --------------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 瞄准的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置 |

</TabItem>
</Tabs>

**示例：**

```lua
local entity, hitPos = thisEntity:getTargetedEntity()
```

---

### <code>getNearestEntity()</code> \{#getNearestEntity}

返回距离该实体最近的实体。

如果 `type` 是实体 ID（例如 `minecraft:bee`），则只考虑该类型的实体。

radius 默认为 20，它决定检查实体的范围大小：以玩家为中心、向各个方向扩展的立方体。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getNearestEntity()
```

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getNearestEntity(type)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| type | <code>[String](/tutorials/types/Strings)</code> | 实体的 Minecraft 类型 ID，例如 `minecraft:player` | -       |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
getNearestEntity(type, radius)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------ | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| type   | <code>[String](/tutorials/types/Strings)</code> | 实体的 Minecraft 类型 ID，例如 `minecraft:player` | -       |
| radius | <code>[Number](/tutorials/types/Numbers)</code> | 以玩家为中心搜索实体的立方体半径 | 20      |

</TabItem>
</Tabs>

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | -------------- |
| <code>[Entity](/globals/Player/Entity)</code> | 最近的实体 |

**示例：**

```lua
-- highlight-next-line
local entity = thisEntity:getNearestEntity()
if entity and entity:getType() == "minecraft:pig" then
    log("There's a pig nearby")
end
```

---

### <code>getType()</code> \{#getType}

获取该实体的 Minecraft 标识符。

例如“minecraft:pig”。

```lua
getType()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getType()
```

---

### <code>getVehicle()</code> \{#getVehicle}

返回该玩家当前骑乘实体的代理对象。

如果玩家没有骑乘任何东西，则返回 nil。

```lua
getVehicle()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ------------------------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
if thisEntity:getVehicle() and thisEntity:getVehicle():getType() == "minecraft:pig" then
    log("You're riding a pig")
end
```

---

### <code>hasContainer()</code> \{#hasContainer}

检查该实体是否带有容器（箱子船、箱子矿车等）。

```lua
hasContainer()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:hasContainer()
```

---

### <code>hasInventory()</code> \{#hasInventory}

检查该实体是否带有物品栏（马、骆驼、羊驼等）。

```lua
hasInventory()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:hasInventory()
```

---

### <code>isAlive()</code> \{#isAlive}

返回该实体是否存活。

```lua
isAlive()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isAlive()
```

---

### <code>isCrouching()</code> \{#isCrouching}

如果该实体在视觉上处于潜行状态，返回 true。

```lua
isCrouching()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isCrouching()
```

---

### <code>isGlowing()</code> \{#isGlowing}

如果该实体当前正在发光，返回 true。

```lua
isGlowing()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isGlowing()
```

---

### <code>isFalling()</code> \{#isFalling}

如果该实体的 Y 方向速度为负且不在地面上，返回 true。

```lua
isFalling()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isFalling()
```

---

### <code>isInLava()</code> \{#isInLava}

如果该实体当前在熔岩中，返回 true。

```lua
isInLava()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInLava()
```

---

### <code>isInRain()</code> \{#isInRain}

如果该实体当前站在雨中，返回 true。

```lua
isInRain()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInRain()
```

---

### <code>isInWater()</code> \{#isInWater}

如果该实体当前处于含水方块中（包括被水填充的情况），返回 true。

```lua
isInWater()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInWater()
```

---

### <code>isInvisible()</code> \{#isInvisible}

如果该实体因某种原因处于隐身状态，返回 true。

```lua
isInvisible()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInvisible()
```

---

### <code>isLiving()</code> \{#isLiving}

获取该实体是否为生物实体（Living Entity）。

```lua
isLiving()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isLiving()
```

---

### <code>isLoaded()</code> \{#isLoaded}

检查该实体对象是否仍在被更新和加载。

例如，处于其他维度或超出渲染距离的实体就不会被加载。

```lua
isLoaded()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isLoaded()
```

---

### <code>isMoving()</code> \{#isMoving}

如果该实体具有速度，返回 true。

接受一个布尔参数：为 true 时忽略 Y 方向的速度。

```lua
isMoving()
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------- | ------------------------------------------------- | -------------------------------------------------------- | ------- |
| ignoreY | <code>[Boolean](/tutorials/Types/Booleans)</code> | 是否忽略垂直方向速度来判定移动 | false   |

**返回：**
| 类型 | 说明 |
|---------------------------------------------------|-------------|
| <code>[Boolean](/tutorials/Types/Booleans)</code> | - |

**示例：**

```lua
thisEntity:isMoving()
```

---

### <code>isOnFire()</code> \{#isOnFire}

如果该实体当前着火，返回 true。

```lua
isOnFire()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isOnFire()
```

---

### <code>isOnGround()</code> \{#isOnGround}

:::caution

由于 Minecraft 代码中的一处缺陷，该函数并不可靠，在多种情况下会误判，例如在水下、站在船上或站在黏液块上。

**规避方法：**

```lua
-- check the blockstate of the block directly underneath the entity
world.getBlockState(thisEntity:getPos():add(0, -0.1, 0)):isSolidBlock()
```

:::

返回该实体当前是否在地面上。

```lua
isOnGround()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isOnGround()
```

---

### <code>isPlayer()</code> \{#isPlayer}

获取该实体是否为玩家实体。

```lua
isPlayer()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isPlayer()
```

---

### <code>isSilent()</code> \{#isSilent}

如果该实体处于静默状态，返回 true。

```lua
isSilent()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSilent()
```

---

### <code>isSneaking()</code> \{#isSneaking}

如果该实体在逻辑上处于潜行状态（不会从方块边缘掉落、隔着墙看不到名牌等），返回 true。

```lua
isSneaking()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSneaking()
```

---

### <code>isSprinting()</code> \{#isSprinting}

如果该实体当前正在疾跑，返回 true。

```lua
isSprinting()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSprinting()
```

---

### <code>isUnderwater()</code> \{#isUnderwater}

如果该实体的眼睛接触到水，返回 true。

```lua
isUnderwater()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isUnderwater()
```

---

### <code>isWet()</code> \{#isWet}

满足以下任一条件时返回 true：实体在水中、实体在雨中、实体在气泡柱中。

否则返回 false。

```lua
isWet()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isWet()
```

---

## 物品函数

### <code>getItem()</code> \{#getItem}

获取指定槽位物品的 ItemStack。

对玩家而言，槽位编号为：1 是主手，2 是副手，3、4、5、6 是从靴子到头盔的 4 个盔甲槽位。

如果槽位编号无效，将返回 nil。

```lua
getItem(index)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**示例：**

```lua
if thisEntity:getItem(5).id == "minecraft:elytra" then
    log("You're wearing an elytra")
end
```

---

## 其他

### <code>getUUID()</code> \{#getUUID}

获取被代理实体的 UUID。

```lua
getUUID()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getUUID()
```

---

### <code>getVariable()</code> \{#getVariable}

获取该实体通过 Avatar API 的 store() 函数存储在自身的变量值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getVariable()
```

**返回：**

| 类型 | 说明 |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getVariable(key)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
thisEntity:getVariable()
```

---

### <code>hasAvatar()</code> \{#hasAvatar}

如果 Figura 为该实体加载了形象，返回 true。

```lua
hasAvatar()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:hasAvatar()
```

---
