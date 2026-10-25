---
sidebar_position: 1
title: Player（玩家）
sidebar_label: Player（玩家）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Player API 继承了[生物实体 API](../globals/Player/LivingEntity)中的函数

Player API 通过 `player` 全局对象访问，例如：`player:isGliding()`

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

未在客户端之间同步的玩家信息保存在 [host](Host) API 中。未同步数据的例子包括：创造模式飞行、状态效果和剩余空气量。

:::note

脚本运行过程中，有时脚本已经在执行，但 player 全局对象仍为空。此时会触发 “Tried to access the EntityAPI before its initialization” 错误。解决办法是把 player API 调用移入受保护的事件，例如 [`tick`](Events#TICK)。如果希望在脚本初始化阶段（不在任何其他事件内）执行一次检查，可以使用 [`entity_init`](Events#ENTITY_INIT) 事件。

:::

以下所有示例都假定你在 tick 事件中运行。

再强调一次：

```lua
-- error-next-line
player:isGliding() -- will error
function events.entity_init()
    player:isGliding() -- will not error, but will only play once
end

-- error-next-line
player:isGliding() -- will error
function events.tick()
    player:isGliding() -- won't error, and will update once a tick
end

-- error-next-line
player:isGliding() -- will error
```

---

## 玩家变换

### <code>getPos()</code> \{#getPos}

获取实体在世界中的位置

如果传入 delta，则用它在上一 tick 与当前 tick 之间对实体位置做线性插值

delta 的默认值为 1

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getPos()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

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
player:getPos()
```

---

### <code>getRot()</code> \{#getRot}

获取实体的旋转角度（单位为度）

如果传入 delta，则用它在上一 tick 与当前 tick 之间对实体旋转做线性插值

delta 的默认值为 1

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getRot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

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
player:getRot()
```

---

### <code>getBodyYaw()</code> \{#getBodyYaw}

获取该实体身体的偏航角（单位为度）

如果传入 delta，则用它在上一 tick 与当前 tick 之间对身体旋转做线性插值

delta 的默认值为 1

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getBodyYaw()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

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
player:getBodyYaw()
```

---

### <code>getLookDir()</code> \{#getLookDir}

返回指向该实体视线方向的单位向量

效果可参考 F3+B 界面中的蓝线

```lua
getLookDir()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
player:getLookDir()
```

---

### <code>getVelocity()</code> \{#getVelocity}

获取该实体在世界坐标中的当前速度，计算方式为当前 tick 的位置减去上一 tick 的位置

```lua
getVelocity()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
player:getVelocity()
```

---

## 玩家动作

### <code>getPose()</code> \{#getPose}

返回玩家当前的姿势

可能是以下之一："STANDING"、"FALL_FLYING"、"SLEEPING"、"SWIMMING"、"SPIN_ATTACK"、"CROUCHING"、"LONG_JUMPING" 或 "DYING"

```lua
getPose()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getPose() == "CROUCHING"
```

---

### <code>isCrouching()</code> \{#isCrouching}

如果该实体在视觉上处于潜行状态，返回 true

```lua
isCrouching()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isCrouching()
```

---

### <code>isMoving()</code> \{#isMoving}

如果该实体具有速度，返回 true

接受一个布尔参数，为 true 时忽略 y 轴速度

```lua
isMoving()
```

**参数：**

| 名称    | 类型                                              | 说明                                              | 默认值 |
| ------- | ------------------------------------------------- | -------------------------------------------------------- | ------- |
| ignoreY | <code>[Boolean](/tutorials/Types/Booleans)</code> | 是否忽略竖直方向速度以判定为正在移动 | false   |

**返回值：**
| 类型 | 说明 |
|---------------------------------------------------|-------------|
| <code>[Boolean](/tutorials/Types/Booleans)</code> | - |

**示例：**

```lua
player:isMoving()
```

---

### <code>isGliding()</code> \{#isGliding}

返回该实体是否正在用鞘翅滑翔

```lua
isGliding()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
-- error-next-line
player:isGliding() -- will error
function events.entity_init()
    player:isGliding() -- will not error, but will only play once
end

-- error-next-line
player:isGliding() -- will error
function events.tick()
    player:isGliding() -- won't error, and will update once a tick
end

-- error-next-line
player:isGliding() -- will error
```

---

### <code>isFalling()</code> \{#isFalling}

如果该实体的 Y 轴速度为负且未站在地面上，返回 true

```lua
isFalling()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isFalling()
```

---

### <code>isFishing()</code> \{#isFishing}

返回玩家当前是否正在钓鱼

```lua
isFishing()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isFishing()
```

---

### <code>isBlocking()</code> \{#isBlocking}

返回该实体是否正在用盾牌格挡

```lua
isBlocking()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isBlocking()
```

---

### <code>isVisuallySwimming()</code> \{#isVisuallySwimming}

返回该实体是否处于游泳姿势

```lua
isVisuallySwimming()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isVisuallySwimming()
```

---

### <code>isClimbing()</code> \{#isClimbing}

如果该实体当前正在使用可攀爬方块（例如梯子或藤蔓），返回 true

```lua
isClimbing()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isClimbing()
```

---

### <code>isSneaking()</code> \{#isSneaking}

如果该实体在逻辑上处于潜行状态，返回 true（不会从方块边缘掉落、隔着墙看不到名牌等）

```lua
isSneaking()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isSneaking()
```

---

### <code>isSprinting()</code> \{#isSprinting}

如果该实体当前正在疾跑，返回 true

```lua
isSprinting()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isSprinting()
```

---

### <code>riptideSpinning()</code> \{#riptideSpinning}

返回该实体是否处于激流旋转状态

```lua
riptideSpinning()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:riptideSpinning()
```

---

## 玩家数据

### <code>isLoaded()</code> \{#isLoaded}

检查该实体对象是否仍在更新和加载中

未加载的实体可能是位于其他维度或超出渲染距离的玩家或物体

```lua
isLoaded()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isLoaded()
```

---

### <code>getNbt()</code> \{#getNbt}

获取包含该实体 NBT 的表

请注意，实体 NBT 中的值不一定全部同步，部分值只在服务端处理

```lua
getNbt()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
player:getNbt()
```

---

### <code>getChargedAttackDelay()</code> \{#getChargedAttackDelay}

返回蓄力攻击的延迟（单位为 tick）

```lua
getChargedAttackDelay()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getChargedAttackDelay()
```

---

### <code>getExperienceProgress()</code> \{#getExperienceProgress}

获取玩家距离下一级的进度，取值 0 到 1

```lua
getExperienceProgress()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getExperienceProgress()
```

---

### <code>getExperienceLevel()</code> \{#getExperienceLevel}

获取玩家当前的经验等级

```lua
getExperienceLevel()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getExperienceLevel()
```

---

### <code>getShoulderEntity()</code> \{#getShoulderEntity}

返回该实体左肩或右肩实体的 NBT 表

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getShoulderEntity()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getShoulderEntity(right)
```

**参数：**

| 名称  | 类型                                              | 说明 | 默认值 |
| ----- | ------------------------------------------------- | ----------- | ------- |
| right | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
player:getShoulderEntity()
```

---

### <code>getTeamInfo()</code> \{#getTeamInfo}

返回包含该玩家队伍信息的表

如果玩家没有队伍，返回 nil

```lua
getTeamInfo()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
player:getTeamInfo()
```

---

### <code>getFood()</code> \{#getFood}

获取玩家当前的食物等级，取值 0 到 20

```lua
getFood()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getFood()
```

---

### <code>getGamemode()</code> \{#getGamemode}

根据玩家的游戏模式返回 "SURVIVAL"、"CREATIVE"、"ADVENTURE" 或 "SPECTATOR"

如果游戏模式未知，返回 nil

```lua
getGamemode()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getGamemode()
```

---

### <code>getSaturation()</code> \{#getSaturation}

获取玩家当前的饱和度

```lua
getSaturation()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getSaturation()
```

---

### <code>getExhaustion()</code> \{#getExhaustion}

获取玩家当前的消耗度

```lua
getExhaustion()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getExhaustion()
```

---

### <code>getAbsorptionAmount()</code> \{#getAbsorptionAmount}

返回该实体的伤害吸收量（黄色心形）

```lua
getAbsorptionAmount()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getAbsorptionAmount()
```

---

### <code>getArmor()</code> \{#getArmor}

返回该实体的护甲值

```lua
getArmor()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getArmor()
```

---

### <code>getMaxHealth()</code> \{#getMaxHealth}

返回该实体可拥有的最大生命值

```lua
getMaxHealth()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getMaxHealth()
```

---

### <code>getHealth()</code> \{#getHealth}

返回该实体剩余的生命值

```lua
getHealth()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getHealth()
```

---

### <code>getDeathTime()</code> \{#getDeathTime}

返回该实体已死亡的 tick 数

```lua
getDeathTime()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getDeathTime()
```

---

### <code>getStingerCount()</code> \{#getStingerCount}

返回扎在该实体身上的蜜蜂螫针数量

```lua
getStingerCount()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getStingerCount()
```

---

### <code>getArrowCount()</code> \{#getArrowCount}

返回扎在该实体身上的箭数量

```lua
getArrowCount()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getArrowCount()
```

---

### <code>getEntityCategory()</code> \{#getEntityCategory}

返回该实体的类别

类别包括 "ARTHROPOD"、"UNDEAD"、"WATER"、"ILLAGER"，默认为 "UNDEFINED"

```lua
getEntityCategory()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getEntityCategory() == "UNDEAD"
```

---

### <code>isSensitiveToWater()</code> \{#isSensitiveToWater}

返回该实体是否会受到水的伤害

```lua
isSensitiveToWater()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isSensitiveToWater()
```

---

### <code>getName()</code> \{#getName}

如果该实体有自定义名称，获取该名称

如果没有，返回 getType() 对应的本地化名称

```lua
getName()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getName()
```

---

### <code>isAlive()</code> \{#isAlive}

返回该实体是否存活

```lua
isAlive()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isAlive()
```

---

### <code>getType()</code> \{#getType}

获取该实体的 Minecraft 标识符

例如 "minecraft:pig"

```lua
getType()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getType()
```

---

### <code>getControlledVehicle()</code> \{#getControlledVehicle}

返回该实体正在控制的载具

```lua
getControlledVehicle()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
player:getControlledVehicle()
```

---

### <code>getControllingPassenger()</code> \{#getControllingPassenger}

返回正在控制该实体的实体

```lua
getControllingPassenger()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
player:getControllingPassenger()
```

---

### <code>getPassengers()</code> \{#getPassengers}

返回该实体所有乘客的实体列表

```lua
getPassengers()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
player:getPassengers()
```

---

### <code>getFrozenTicks()</code> \{#getFrozenTicks}

获取该实体在细雪中已冻结的 tick 数

```lua
getFrozenTicks()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getFrozenTicks()
```

---

### <code>getMaxAir()</code> \{#getMaxAir}

获取该实体可拥有的最大空气量

```lua
getMaxAir()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getMaxAir()
```

---

### <code>getDimensionName()</code> \{#getDimensionName}

获取该实体所在维度的 Minecraft 标识符

```lua
getDimensionName()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getDimensionName()
```

---

### <code>isUnderwater()</code> \{#isUnderwater}

如果该实体的眼睛接触水，返回 true

```lua
isUnderwater()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isUnderwater()
```

---

### <code>isInWater()</code> \{#isInWater}

如果该实体当前位于水方块中，返回 true，被水填充的方块也算在内

```lua
isInWater()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isInWater()
```

---

### <code>isInRain()</code> \{#isInRain}

如果该实体当前站在雨中，返回 true

```lua
isInRain()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isInRain()
```

---

### <code>isWet()</code> \{#isWet}

满足以下任一条件时返回 true：实体在水中、实体在雨中，或实体在气泡柱中

否则返回 false

```lua
isWet()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isWet()
```

---

### <code>isInLava()</code> \{#isInLava}

如果该实体当前在熔岩中，返回 true

```lua
isInLava()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isInLava()
```

---

### <code>isOnFire()</code> \{#isOnFire}

如果该实体当前着火，返回 true

```lua
isOnFire()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isOnFire()
```

---

### <code>isInvisible()</code> \{#isInvisible}

如果该实体因某种原因处于隐身状态，返回 true

```lua
isInvisible()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isInvisible()
```

---

### <code>getVehicle()</code> \{#getVehicle}

返回该玩家当前骑乘实体的代理对象

如果玩家没有骑乘任何东西，返回 nil

```lua
getVehicle()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
-- highlight-next-line
local vehicle = player:getVehicle()
-- We make sure `vehicle` isn't nil so we can safely call `getType()`
if vehicle and vehicle:getType() == "minecraft:pig" then
    log("You're riding a pig")
end
```

---

### <code>isSilent()</code> \{#isSilent}

如果该实体处于静音状态，返回 true

```lua
isSilent()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isSilent()
```

---

### <code>isGlowing()</code> \{#isGlowing}

如果该实体当前带有发光效果，返回 true

```lua
isGlowing()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isGlowing()
```

---

### <code>getBoundingBox()</code> \{#getBoundingBox}

以 Vector3 形式返回该实体碰撞箱的尺寸

\{x, y, z} 依次为宽度、高度和宽度

Minecraft 实体的碰撞箱底面始终为正方形

```lua
getBoundingBox()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
player:getBoundingBox()
```

---

### <code>isOnGround()</code> \{#isOnGround}

:::caution

由于 Minecraft 代码中的缺陷，该函数并不可靠，在多种情况下会误报，例如在水下、站在船上或站在黏液块上。

**替代方案：**

```lua
-- check the blockstate of the block directly underneath the player
world.getBlockState(player:getPos():add(0, -0.1, 0)):isSolidBlock()
```

:::

返回该实体当前是否站在地面上

```lua
isOnGround()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isOnGround()
```

---

### <code>getEyeY()</code> \{#getEyeY}

返回该实体眼睛所在的 Y 轴高度

不要与 getEyeHeight 混淆，该函数会把实体自身的 Y 坐标也计算在内

```lua
getEyeY()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getEyeY()
```

---

### <code>getEyeHeight()</code> \{#getEyeHeight}

返回该实体当前的眼睛高度

```lua
getEyeHeight()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getEyeHeight()
```

---

### <code>getNearestEntity()</code> \{#getNearestEntity}

返回距离该实体最近的实体

如果 `type` 是实体 ID（例如 `minecraft:bee`），则只考虑该类型的实体

radius 默认为 20，决定检测实体的区域大小，即以玩家为中心向各方向扩展的立方体

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getNearestEntity()
```

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getNearestEntity(type)
```

**参数：**

| 名称 | 类型                                            | 说明                                               | 默认值 |
| ---- | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| type | <code>[String](/tutorials/types/Strings)</code> | 实体的 Minecraft 类型 ID，即 `minecraft:player` | -       |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
getNearestEntity(type, radius)
```

**参数：**

| 名称   | 类型                                            | 说明                                               | 默认值 |
| ------ | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| type   | <code>[String](/tutorials/types/Strings)</code> | 实体的 Minecraft 类型 ID，即 `minecraft:player` | -       |
| radius | <code>[Number](/tutorials/types/Numbers)</code> | 以玩家为中心的立方体半径，用于查找实体    | 20      |

</TabItem>
</Tabs>

**返回值：**

| 类型                                          | 说明    |
| --------------------------------------------- | -------------- |
| <code>[Entity](/globals/Player/Entity)</code> | 最近的实体 |

**示例：**

```lua
-- highlight-next-line
local entity = player:getNearestEntity()
if entity and entity:getType() == "minecraft:pig" then
    log("There's a pig nearby")
end
```

---

### <code>getTargetedEntity()</code> \{#getTargetedEntity}

返回你当前指向实体的代理对象

该实体会显示在 F3 界面中

最大距离与默认距离为 20，最小为 0

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getTargetedEntity()
```

**返回值：**

| 类型                                             | 说明     |
| ------------------------------------------------ | --------------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 指向的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置    |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

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
| <code>[Entity](/globals/Player/Entity)</code>    | 指向的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置    |

</TabItem>
</Tabs>

**示例：**

```lua
local entity, pos = player:getTargetedEntity(host:getReachDistance() or 4.5) -- host is not synced
if entity and entity:getType() == "minecraft:creeper" then
    log("You're looking at a creeper")
end
```

---

### <code>getTargetedBlock()</code> \{#getTargetedBlock}

返回你当前指向的 BlockState 的代理对象

该 BlockState 会显示在 F3 界面中

最大距离（也是默认距离）为 20，最小为 -20

以三个独立的值返回方块、命中位置和指向的方块面

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getTargetedBlock()
```

**返回值：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | 指向的方块      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置        |
| <code>[String](/tutorials/types/Strings)</code>      | 指向的方块面 |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

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
| <code>[BlockState](/globals/World/BlockState)</code> | 指向的方块      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置        |
| <code>[String](/tutorials/types/Strings)</code>      | 指向的方块面 |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

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
| <code>[BlockState](/globals/World/BlockState)</code> | 指向的方块      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置        |
| <code>[String](/tutorials/types/Strings)</code>      | 指向的方块面 |

</TabItem>
</Tabs>

**示例：**

```lua
local block, hitPos, side = player:getTargetedBlock(true, 4.5)
if block.id == "minecraft:grass_block" then
    log("You're looking at grass")
end
```

---

### <code>hasInventory()</code> \{#hasInventory}

检查该实体是否拥有物品栏（例如马、骆驼、羊驼……）

```lua
hasInventory()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:hasInventory()
```

---

### <code>hasContainer()</code> \{#hasContainer}

检查该实体是否拥有容器（例如带箱子的船、带箱子的矿车……）

```lua
hasContainer()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:hasContainer()
```

---

### <code>isLiving()</code> \{#isLiving}

获取该实体是否为生物实体

```lua
isLiving()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isLiving()
```

---

### <code>isPlayer()</code> \{#isPlayer}

获取该实体是否为玩家实体

```lua
isPlayer()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isPlayer()
```

---

### <code>getPermissionLevel()</code> \{#getPermissionLevel}

返回该实体的权限等级数值

服务器管理员默认拥有权限等级 4

```lua
getPermissionLevel()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getPermissionLevel()
```

---

## 原版设置

### <code>getModelType()</code> \{#getModelType}

根据玩家的模型类型返回 "SLIM" 或 "DEFAULT"

```lua
getModelType()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getModelType() == "DEFAULT"
```

---

### <code>hasCape()</code> \{#hasCape}

返回玩家是否已加载披风

```lua
hasCape()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:hasCape()
```

---

### <code>hasSkin()</code> \{#hasSkin}

返回玩家是否已加载自定义皮肤

```lua
hasSkin()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:hasSkin()
```

---

### <code>isSkinLayerVisible()</code> \{#isSkinLayerVisible}

返回“皮肤自定义”设置中指定的皮肤层当前是否可见

```lua
isSkinLayerVisible(part)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| part | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isSkinLayerVisible("HAT")
```

---

## 物品函数

### <code>getItem()</code> \{#getItem}

获取指定槽位中物品的 ItemStack

对玩家而言，槽位编号 1 为主手、2 为副手，3、4、5、6 为 4 个盔甲槽位，依次从靴子到头盔

如果传入无效的槽位编号，将返回 nil

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
if player:getItem(5).id == "minecraft:elytra" then
    log("You're wearing an elytra")
end
```

---

### <code>getHeldItem()</code> \{#getHeldItem}

返回表示该实体主手物品的 ItemStack

如果 "offhand" 传入 true，则改为查看该实体副手的物品

如果该实体在该手上没有拿物品，返回空气

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getHeldItem()
```

**返回值：**

| 类型                                               | 说明 |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

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
if player:getHeldItem(false).id ~= "minecraft:air" then
    log("Item in mainhand")
end
if player:getHeldItem(true).id ~= "minecraft:air" then
    log("Item in offhand")
end
```

---

### <code>isUsingItem()</code> \{#isUsingItem}

如果该实体当前正在使用物品，返回 true

```lua
isUsingItem()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isUsingItem()
```

---

### <code>getActiveItem()</code> \{#getActiveItem}

返回表示该实体当前正在使用物品的 ItemStack

如果没有使用任何物品，返回空气

```lua
getActiveItem()
```

**返回值：**

| 类型                                               | 说明 |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**示例：**

```lua
player:getActiveItem()
```

---

### <code>getActiveItemTime()</code> \{#getActiveItemTime}

返回该实体正在使用的物品已持续使用的 tick 数

```lua
getActiveItemTime()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getActiveItemTime()
```

---

### <code>getCooldownPercent()</code> \{#getCooldownPercent}

以 0.0 到 1.0 的比例返回指定 ItemStack 的冷却进度

如果没有冷却，返回 0.0

接受 stack 和 delta 两个参数，delta 会偏移冷却的 tick 计数，用于让动画更平滑。

```lua
getCooldownPercent(stack, delta)
```

**参数：**

| 名称  | 类型                                               | 说明 | 默认值 |
| ----- | -------------------------------------------------- | ----------- | ------- |
| stack | <code>[ItemStack](/globals/World/ItemStack)</code> | -           | -       |
| delta | <code>[Number](/tutorials/types/Numbers)</code>    | -           | -       |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
local function bar(percent)
    local progress = math.ceil(percent * 20)
    local remaining = 20 - progress
    return string.rep("▆", progress) .. string.rep("▁", remaining)
end

function events.tick()
    local heldItem = player:getHeldItem()
    if heldItem:getID() ~= "minecraft:ender_pearl" then
        host:setActionbar("")
        return
    end
    -- highlight-next-line
    local cooldown = player:getCooldownPercent(heldItem)
    host:setActionbar(bar(1 - cooldown))
end
```

---

## 手部函数

### <code>isLeftHanded()</code> \{#isLeftHanded}

如果该实体的主手是左手，返回 true

```lua
isLeftHanded()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isLeftHanded()
```

---

### <code>isSwingingArm()</code> \{#isSwingingArm}

如果该实体当前正在挥动手臂，返回 true

```lua
isSwingingArm()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:isSwingingArm()
```

---

### <code>getSwingDuration()</code> \{#getSwingDuration}

返回该实体挥动手臂持续的 tick 数

```lua
getSwingDuration()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getSwingDuration()
```

---

### <code>getSwingTime()</code> \{#getSwingTime}

返回该实体手臂已挥动的 tick 数

```lua
getSwingTime()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
player:getSwingTime()
```

---

### <code>getActiveHand()</code> \{#getActiveHand}

根据该实体用哪只手使用物品，返回 "OFF_HAND" 或 "MAIN_HAND"

```lua
getActiveHand()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getActiveHand() == "MAIN_HAND"
```

---

### <code>getSwingArm()</code> \{#getSwingArm}

根据该实体当前挥动的手臂，返回 "OFF_HAND" 或 "MAIN_HAND"

```lua
getSwingArm()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getSwingArm() == "OFF_HAND"
```

---

## 其他

### <code>getUUID()</code> \{#getUUID}

获取被代理实体的 UUID

```lua
getUUID()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
player:getUUID()
```

---

### <code>getVariable()</code> \{#getVariable}

获取该实体通过 Avatar API 的 store() 函数保存在自身的变量值

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getVariable()
```

**返回值：**

| 类型                 | 说明 |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

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
player:getVariable()
```

---

### <code>hasAvatar()</code> \{#hasAvatar}

如果 Figura 为该实体加载了形象，返回 true

```lua
hasAvatar()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
player:hasAvatar()
```

---
