---
title: LivingEntity（活体实体）
sidebar_label: LivingEntity（活体实体）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于代理 Minecraft 世界中的活体实体。

:::warning
本页仍在完善中。页面已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

本页示例假定：

```lua
local thisEntity = thisEntity:getTargetedEntity()
```

---

## 活体实体变换

### <code>getPos()</code> \{#getPos}

获取实体在世界中的位置。

如果传入 delta，则用它在上一 tick 与当前 tick 之间对实体位置做线性插值。

delta 的默认值为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getPos()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getPos(delta)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明 |
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

如果传入 delta，则用它在上一 tick 与当前 tick 之间对实体旋转角度做线性插值。

delta 的默认值为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getRot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getRot(delta)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
thisEntity:getRot()
```

---

### <code>getBodyYaw()</code> \{#getBodyYaw}

获取此实体身体的偏航角，单位为度。

如果传入 delta，则用它在上一 tick 与当前 tick 之间对身体旋转角度做线性插值。

delta 的默认值为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getBodyYaw()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getBodyYaw(delta)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
thisEntity:getBodyYaw()
```

---

### <code>getLookDir()</code> \{#getLookDir}

返回指向实体视线方向的单位向量。

示例可参考 F3+B 界面中的蓝线。

```lua
getLookDir()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
thisEntity:getLookDir()
```

---

### <code>getVelocity()</code> \{#getVelocity}

获取实体当前在世界坐标中的速度，计算方式为当前 tick 的位置减去上一 tick 的位置。

```lua
getVelocity()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
thisEntity:getVelocity()
```

---

## 活体实体动作

### <code>getPose()</code> \{#getPose}

返回玩家当前的姿势。

可能的值包括："STANDING"、"FALL_FLYING"、"SLEEPING"、"SWIMMING"、"SPIN_ATTACK"、"CROUCHING"、"LONG_JUMPING" 或 "DYING"。

```lua
getPose()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getPose() == "CROUCHING"
```

---

### <code>isBlocking()</code> \{#isBlocking}

返回此实体是否正在用盾牌格挡。

```lua
isBlocking()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isBlocking()
```

---

### <code>isClimbing()</code> \{#isClimbing}

如果实体当前正在攀爬梯子、藤蔓等可攀爬方块，返回 true。

```lua
isClimbing()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isClimbing()
```

---

### <code>isCrouching()</code> \{#isCrouching}

如果此实体在视觉上处于潜行状态，返回 true。

```lua
isCrouching()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isCrouching()
```

---

### <code>isFalling()</code> \{#isFalling}

如果此实体的 Y 轴速度为负且不在地面上，返回 true。

```lua
isFalling()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isFalling()
```

---

### <code>isGliding()</code> \{#isGliding}

返回此实体是否正在使用鞘翅滑翔。

```lua
isGliding()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isGliding()
```

---

### <code>isMoving()</code> \{#isMoving}

如果此实体具有速度，返回 true。

接受一个布尔参数；该参数为 true 时忽略 Y 轴速度。

```lua
isMoving()
```

**参数：**

| 名称    | 类型                                              | 说明                                              | 默认值 |
| ------- | ------------------------------------------------- | -------------------------------------------------------- | ------- |
| ignoreY | <code>[Boolean](/tutorials/Types/Booleans)</code> | 是否忽略垂直速度来判定为移动 | false   |

**返回值：**
| 类型 | 说明 |
|---------------------------------------------------|-------------|
| <code>[Boolean](/tutorials/Types/Booleans)</code> | - |

**示例：**

```lua
thisEntity:isMoving()
```

---

### <code>isSneaking()</code> \{#isSneaking}

如果此实体在逻辑上处于潜行状态，返回 true（不会从方块边缘掉落、无法透过墙看到名称牌等）。

```lua
isSneaking()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSneaking()
```

---

### <code>isSprinting()</code> \{#isSprinting}

如果此实体当前正在疾跑，返回 true。

```lua
isSprinting()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSprinting()
```

---

### <code>isVisuallySwimming()</code> \{#isVisuallySwimming}

返回此实体是否处于游泳姿势。

```lua
isVisuallySwimming()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isVisuallySwimming()
```

---

### <code>riptideSpinning()</code> \{#riptideSpinning}

返回此实体是否正在因激流附魔旋转。

```lua
riptideSpinning()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:riptideSpinning()
```

---

## 活体实体数据

### <code>getAbsorptionAmount()</code> \{#getAbsorptionAmount}

返回此实体的伤害吸收量（黄色心形）。

```lua
getAbsorptionAmount()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getAbsorptionAmount()
```

---

### <code>getArmor()</code> \{#getArmor}

返回此实体拥有的护甲值。

```lua
getArmor()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getArmor()
```

---

### <code>getArrowCount()</code> \{#getArrowCount}

返回插在此实体身上的箭的数量。

```lua
getArrowCount()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getArrowCount()
```

---

### <code>getBoundingBox()</code> \{#getBoundingBox}

以 Vector3 形式返回此实体碰撞箱的尺寸。

\{x, y, z} 分别表示宽度、高度和宽度。

Minecraft 实体的碰撞箱底面始终为正方形。

```lua
getBoundingBox()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
thisEntity:getBoundingBox()
```

---

### <code>getControlledVehicle()</code> \{#getControlledVehicle}

返回此实体正在控制的载具。

```lua
getControlledVehicle()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
thisEntity:getControlledVehicle()
```

---

### <code>getControllingPassenger()</code> \{#getControllingPassenger}

返回正在控制此实体的实体。

```lua
getControllingPassenger()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
thisEntity:getControllingPassenger()
```

---

### <code>getDeathTime()</code> \{#getDeathTime}

返回此实体已死亡的 tick 数。

```lua
getDeathTime()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getDeathTime()
```

---

### <code>getDimensionName()</code> \{#getDimensionName}

获取此实体所在维度的 Minecraft 标识符。

```lua
getDimensionName()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getDimensionName()
```

---

### <code>getEntityCategory()</code> \{#getEntityCategory}

返回此实体的类别。

类别包括："ARTHROPOD"、"UNDEAD"、"WATER"、"ILLAGER"，默认为 "UNDEFINED"。

```lua
getEntityCategory()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getEntityCategory() == "UNDEAD"
```

---

### <code>getEyeHeight()</code> \{#getEyeHeight}

返回此实体当前的眼高。

```lua
getEyeHeight()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getEyeHeight()
```

---

### <code>getEyeY()</code> \{#getEyeY}

返回此实体眼睛所在的 Y 坐标。

不要与 getEyeHeight 混淆；此函数还会把实体自身的 Y 坐标计算在内。

```lua
getEyeY()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getEyeY()
```

---

### <code>getFrozenTicks()</code> \{#getFrozenTicks}

获取此实体在细雪中冻结的 tick 数。

```lua
getFrozenTicks()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getFrozenTicks()
```

---

### <code>getHealth()</code> \{#getHealth}

返回此实体剩余的生命值。

```lua
getHealth()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getHealth()
```

---

### <code>getMaxAir()</code> \{#getMaxAir}

获取此实体可拥有的最大氧气值。

```lua
getMaxAir()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getMaxAir()
```

---

### <code>getMaxHealth()</code> \{#getMaxHealth}

返回此实体可拥有的最大生命值。

```lua
getMaxHealth()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getMaxHealth()
```

---

### <code>getName()</code> \{#getName}

获取此实体的名称（如果它有自定义名称）。

如果没有自定义名称，则返回 getType() 的翻译形式。

```lua
getName()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getName()
```

---

### <code>getNbt()</code> \{#getNbt}

获取包含此实体 NBT 的表。

请注意，实体 NBT 中的部分值可能未同步，因为某些值仅在服务端处理。

```lua
getNbt()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
thisEntity:getNbt()
```

---

### <code>getPassengers()</code> \{#getPassengers}

以列表形式返回此实体的所有乘客实体。

```lua
getPassengers()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
thisEntity:getPassengers()
```

---

### <code>getPermissionLevel()</code> \{#getPermissionLevel}

返回此实体的权限等级数值。

服务器管理员默认拥有 4 级权限。

```lua
getPermissionLevel()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getPermissionLevel()
```

---

### <code>getStingerCount()</code> \{#getStingerCount}

返回插在此实体身上的蜜蜂螫针数量。

```lua
getStingerCount()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getStingerCount()
```

---

### <code>getTargetedBlock()</code> \{#getTargetedBlock}

返回当前瞄准的 BlockState 代理。

此 BlockState 会显示在 F3 界面中。

最大距离（也是默认值）为 20，最小距离为 -20。

将方块、命中位置和目标方块的面作为三个独立值返回。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTargetedBlock()
```

**返回值：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 目标方块      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置        |
| <code>[String](/tutorials/types/Strings)</code>      | 目标方块的面 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTargetedBlock(ignoreLiquids)
```

**参数：**

| 名称          | 类型                                              | 说明 | 默认值 |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| ignoreLiquids | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 目标方块      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置        |
| <code>[String](/tutorials/types/Strings)</code>      | 目标方块的面 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
getTargetedBlock(ignoreLiquids, distance)
```

**参数：**

| 名称          | 类型                                              | 说明 | 默认值 |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| ignoreLiquids | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |
| distance      | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

**返回值：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 目标方块      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置        |
| <code>[String](/tutorials/types/Strings)</code>      | 目标方块的面 |

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

返回当前瞄准实体的代理。

此实体会显示在 F3 界面中。

最大距离（也是默认值）为 20，最小距离为 0。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTargetedEntity()
```

**返回值：**

| 类型                                             | 说明     |
| ------------------------------------------------ | --------------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 目标实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTargetedEntity(distance)
```

**参数：**

| 名称     | 类型                                            | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ----------- | ------- |
| distance | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                             | 说明     |
| ------------------------------------------------ | --------------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 目标实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置    |

</TabItem>
</Tabs>

**示例：**

```lua
local entity, hitPos = thisEntity:getTargetedEntity()
```

---

### <code>getNearestEntity()</code> \{#getNearestEntity}

返回距离此实体最近的实体。

如果 `type` 是实体 ID（例如 `minecraft:bee`），则只考虑该类型的实体。

半径默认值为 20，决定检查实体区域的大小；该区域是以玩家为中心向各方向扩展的立方体。

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

| 名称 | 类型                                            | 说明                                               | 默认值 |
| ---- | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| type | <code>[String](/tutorials/types/Strings)</code> | 实体的 Minecraft 类型 ID，例如 `minecraft:player` | -       |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
getNearestEntity(type, radius)
```

**参数：**

| 名称   | 类型                                            | 说明                                               | 默认值 |
| ------ | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| type   | <code>[String](/tutorials/types/Strings)</code> | 实体的 Minecraft 类型 ID，例如 `minecraft:player` | -       |
| radius | <code>[Number](/tutorials/types/Numbers)</code> | 以玩家为中心、用于搜索实体的立方体半径    | 20      |

</TabItem>
</Tabs>

**返回值：**

| 类型                                          | 说明    |
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

获取此实体的 Minecraft 标识符。

例如 "minecraft:pig"。

```lua
getType()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getType()
```

---

### <code>getVehicle()</code> \{#getVehicle}

返回此玩家当前骑乘实体的代理。

如果玩家没有骑乘任何实体，则返回 nil。

```lua
getVehicle()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
if thisEntity:getVehicle() and thisEntity:getVehicle():getType() == "minecraft:pig" then
    log("You're riding a pig")
end
```

---

### <code>hasContainer()</code> \{#hasContainer}

检查实体是否带有容器（运输船、运输矿车等）。

```lua
hasContainer()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:hasContainer()
```

---

### <code>hasInventory()</code> \{#hasInventory}

检查实体是否带有物品栏（马、骆驼、羊驼等）。

```lua
hasInventory()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:hasInventory()
```

---

### <code>isAlive()</code> \{#isAlive}

返回此实体是否存活。

```lua
isAlive()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isAlive()
```

---

### <code>isGlowing()</code> \{#isGlowing}

如果此实体当前正在发光，返回 true。

```lua
isGlowing()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isGlowing()
```

---

### <code>isInLava()</code> \{#isInLava}

如果此实体当前处于熔岩中，返回 true。

```lua
isInLava()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInLava()
```

---

### <code>isInRain()</code> \{#isInRain}

如果此实体当前站在雨中，返回 true。

```lua
isInRain()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInRain()
```

---

### <code>isInWater()</code> \{#isInWater}

如果此实体当前位于水方块内（包括含水方块），返回 true。

```lua
isInWater()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInWater()
```

---

### <code>isInvisible()</code> \{#isInvisible}

如果此实体因某种原因处于隐形状态，返回 true。

```lua
isInvisible()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isInvisible()
```

---

### <code>isLiving()</code> \{#isLiving}

获取此实体是否为活体实体。

```lua
isLiving()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isLiving()
```

---

### <code>isLoaded()</code> \{#isLoaded}

检查此实体对象是否仍在更新并已加载。

例如，位于其他维度或超出渲染距离的实体就是未加载实体。

```lua
isLoaded()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isLoaded()
```

---

### <code>isOnFire()</code> \{#isOnFire}

如果此实体当前着火，返回 true。

```lua
isOnFire()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isOnFire()
```

---

### <code>isOnGround()</code> \{#isOnGround}

:::caution

由于 Minecraft 代码中的缺陷，此函数不可靠，并会在多种情况下误判，例如在水下、站在船上或站在黏液块上。

**替代方案：**

```lua
-- check the blockstate of the block directly underneath the entity
world.getBlockState(thisEntity:getPos():add(0, -0.1, 0)):isSolidBlock()
```

:::

返回此实体当前是否在地面上。

```lua
isOnGround()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isOnGround()
```

---

### <code>isPlayer()</code> \{#isPlayer}

获取此实体是否为玩家实体。

```lua
isPlayer()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isPlayer()
```

---

### <code>isSensitiveToWater()</code> \{#isSensitiveToWater}

返回此实体是否对水敏感（会受到水的伤害）。

```lua
isSensitiveToWater()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSensitiveToWater()
```

---

### <code>isSilent()</code> \{#isSilent}

如果此实体处于静音状态，返回 true。

```lua
isSilent()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSilent()
```

---

### <code>isUnderwater()</code> \{#isUnderwater}

如果此实体的眼睛接触到水，返回 true。

```lua
isUnderwater()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isUnderwater()
```

---

### <code>isWet()</code> \{#isWet}

满足以下任一条件时返回 true：实体在水中、实体在雨中，或实体在气泡柱中。

否则返回 false。

```lua
isWet()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isWet()
```

---

## 物品函数

### <code>getActiveItem()</code> \{#getActiveItem}

返回一个 ItemStack，表示实体当前正在使用的物品。

如果实体没有使用任何物品，则返回空气。

```lua
getActiveItem()
```

**返回值：**

| 类型                                               | 说明 |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**示例：**

```lua
thisEntity:getActiveItem()
```

---

### <code>getActiveItemTime()</code> \{#getActiveItemTime}

返回此实体使用当前物品的 tick 数。

```lua
getActiveItemTime()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getActiveItemTime()
```

---

### <code>getHeldItem()</code> \{#getHeldItem}

返回一个 ItemStack，表示此实体主手中的物品。

如果为 "offhand" 传入 true，则改为查看实体副手中的物品。

如果实体在该手中没有物品，则返回空气。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getHeldItem()
```

**返回值：**

| 类型                                               | 说明 |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getHeldItem(offhand)
```

**参数：**

| 名称    | 类型                                              | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ----------- | ------- |
| offhand | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                               | 说明 |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
if thisEntity:getHeldItem(false).id ~= "minecraft:air" then
    log("Item in mainhand")
end
if thisEntity:getHeldItem(true).id ~= "minecraft:air" then
    log("Item in offhand")
end
```

---

### <code>getItem()</code> \{#getItem}

获取指定槽位中物品的 ItemStack。

对于玩家，槽位编号 1 为主手，2 为副手，3、4、5、6 为从靴子到头盔的 4 个护甲槽位。

如果传入无效的槽位编号，则返回 nil。

```lua
getItem(index)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回值：**

| 类型                                               | 说明 |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**示例：**

```lua
if thisEntity:getItem(5).id == "minecraft:elytra" then
    log("You're wearing an elytra")
end
```

---

### <code>isUsingItem()</code> \{#isUsingItem}

如果实体当前正在使用物品，返回 true。

```lua
isUsingItem()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isUsingItem()
```

---

## 手部函数

### <code>getActiveHand()</code> \{#getActiveHand}

返回 "OFF_HAND" 或 "MAIN_HAND"，取决于此实体用哪只手使用物品。

```lua
getActiveHand()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getActiveHand() == "MAIN_HAND"
```

---

### <code>getSwingArm()</code> \{#getSwingArm}

返回 "OFF_HAND" 或 "MAIN_HAND"，取决于此实体当前挥动的手臂。

```lua
getSwingArm()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getSwingArm() == "OFF_HAND"
```

---

### <code>getSwingDuration()</code> \{#getSwingDuration}

返回此实体挥动手臂持续的 tick 数。

```lua
getSwingDuration()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getSwingDuration()
```

---

### <code>getSwingTime()</code> \{#getSwingTime}

返回此实体手臂已挥动的 tick 数。

```lua
getSwingTime()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
thisEntity:getSwingTime()
```

---

### <code>isLeftHanded()</code> \{#isLeftHanded}

如果实体的主手是左手，返回 true。

```lua
isLeftHanded()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isLeftHanded()
```

---

### <code>isSwingingArm()</code> \{#isSwingingArm}

如果实体当前正在挥动手臂，返回 true。

```lua
isSwingingArm()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:isSwingingArm()
```

---

## 其他

### <code>getUUID()</code> \{#getUUID}

获取被代理实体的 UUID。

```lua
getUUID()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
thisEntity:getUUID()
```

---

### <code>getVariable()</code> \{#getVariable}

获取此实体通过形象 API 的 store() 函数保存在自身的变量值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getVariable()
```

**返回值：**

| 类型                 | 说明 |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getVariable(key)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                 | 说明 |
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

如果 Figura 已为此实体加载形象，返回 true。

```lua
hasAvatar()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
thisEntity:hasAvatar()
```

---
