---
title: Raycast（射线检测）
sidebar_label: Raycast（射线检测）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

全局 API，提供射线检测（raycast）相关函数。

:::warning
本页仍在完善中。这里已收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

---

### <code>aabb()</code> \{#aabb}

基于起点、终点和玩家提供的轴对齐包围盒（AABB）数组进行射线检测。

每个 AABB 用一个表表示，其中索引 1 和 2 是 Vector3。

`{vec(0,0,0),vec(1,0.5,1)}` 是合法的 AABB，而 `{ {vec(0,0,0),vec(1,0.5,1)}, {vec(0,0.5,0.5),vec(1,1,1)} }` 是合法的 AABB 数组。

该函数返回被命中的 AABB 表、命中位置的精确坐标（Vector3）、被命中 AABB 的面（字符串；若射线起点位于 AABB 内部则为 nil），以及命中 AABB 在数组中的索引。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
aabb(startpos, endpos, aabbs)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| start | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| end   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| aabbs | <code>[Table](/tutorials/types/Tables)</code>    | -    | -      |

**返回：**

| 类型                                             | 说明                             |
| ------------------------------------------------ | -------------------------------- |
| <code>[Table](/tutorials/types/Tables)</code>    | 命中的 AABB                      |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置                         |
| <code>[String](/tutorials/types/Strings)</code>  | 命中的面；若在 AABB 内部则为 nil |
| <code>[Integer](/tutorials/types/Numbers)</code> | 命中 AABB 在数组中的索引         |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
aabb(startX, startY, startZ, endpos, aabbs)
```

**参数：**

| 名称   | 类型                                             | 说明 | 默认值 |
| ------ | ------------------------------------------------ | ---- | ------ |
| startX | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| startY | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| startZ | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| end    | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| aabbs  | <code>[Table](/tutorials/types/Tables)</code>    | -    | -      |

**返回：**

| 类型                                             | 说明                             |
| ------------------------------------------------ | -------------------------------- |
| <code>[Table](/tutorials/types/Tables)</code>    | 命中的 AABB                      |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置                         |
| <code>[String](/tutorials/types/Strings)</code>  | 命中的面；若在 AABB 内部则为 nil |
| <code>[Integer](/tutorials/types/Numbers)</code> | 命中 AABB 在数组中的索引         |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
aabb(startpos, endX, endY, endZ, aabbs)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| start | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| endX  | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| endY  | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| endZ  | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| aabbs | <code>[Table](/tutorials/types/Tables)</code>    | -    | -      |

**返回：**

| 类型                                             | 说明                             |
| ------------------------------------------------ | -------------------------------- |
| <code>[Table](/tutorials/types/Tables)</code>    | 命中的 AABB                      |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置                         |
| <code>[String](/tutorials/types/Strings)</code>  | 命中的面；若在 AABB 内部则为 nil |
| <code>[Integer](/tutorials/types/Numbers)</code> | 命中 AABB 在数组中的索引         |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
aabb(startX, startY, startZ, endX, endY, endZ, aabbs)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ---- | ------ |
| startX | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| startY | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| startZ | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| endX   | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| endY   | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| endZ   | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| aabbs  | <code>[Table](/tutorials/types/Tables)</code>   | -    | -      |

**返回：**

| 类型                                             | 说明                             |
| ------------------------------------------------ | -------------------------------- |
| <code>[Table](/tutorials/types/Tables)</code>    | 命中的 AABB                      |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置                         |
| <code>[String](/tutorials/types/Strings)</code>  | 命中的面；若在 AABB 内部则为 nil |
| <code>[Integer](/tutorials/types/Numbers)</code> | 命中 AABB 在数组中的索引         |

</TabItem>
</Tabs>

**示例：**

```lua
local eyePos = player:getPos() + vec(0, player:getEyeHeight(), 0)
local eyeEnd = eyePos + (player:getLookDir() * 20)
local hitLocation = { { vec(0, 0, 0), vec(1, 1, 1) } } -- this is the block location of 0,0,0 in the world
local aabb, hitPos, side, aabbHitIndex = raycast:aabb(eyePos, eyeEnd, hitLocation)
```

---

### <code>block()</code> \{#block}

在世界中进行方块射线检测。

如果命中，返回命中的 BlockState、命中位置的世界坐标（Vector3），以及被命中方块的面。

未命中时返回 nil。

blockCastType 和 fluidCastType 决定射线检测如何处理方块形状与流体。

为 nil 时，默认分别使用“COLLIDER”和“NONE”。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
block(startpos, endpos, blockCastType, fluidCastType)
```

**参数：**

| 名称          | 类型                                             | 说明 | 默认值 |
| ------------- | ------------------------------------------------ | ---- | ------ |
| start         | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| end           | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| blockCastType | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |
| fluidCastType | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |

**返回：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------ |
| <code>[BlockState](/globals/World/BlockState)</code> | 命中的方块   |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置     |
| <code>[String](/tutorials/types/Strings)</code>      | 命中的方块面 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
block(startX, startY, startZ, endpos, blockCastType, fluidCastType)
```

**参数：**

| 名称          | 类型                                             | 说明 | 默认值 |
| ------------- | ------------------------------------------------ | ---- | ------ |
| startX        | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| startY        | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| startZ        | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| end           | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| blockCastType | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |
| fluidCastType | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |

**返回：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------ |
| <code>[BlockState](/globals/World/BlockState)</code> | 命中的方块   |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置     |
| <code>[String](/tutorials/types/Strings)</code>      | 命中的方块面 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
block(startpos, endX, endY, endZ, blockCastType, fluidCastType)
```

**参数：**

| 名称          | 类型                                             | 说明 | 默认值 |
| ------------- | ------------------------------------------------ | ---- | ------ |
| start         | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |
| endX          | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| endY          | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| endZ          | <code>[Number](/tutorials/types/Numbers)</code>  | -    | -      |
| blockCastType | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |
| fluidCastType | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |

**返回：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------ |
| <code>[BlockState](/globals/World/BlockState)</code> | 命中的方块   |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置     |
| <code>[String](/tutorials/types/Strings)</code>      | 命中的方块面 |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
block(startX, startY, startZ, endX, endY, endZ, blockCastType, fluidCastType)
```

**参数：**

| 名称          | 类型                                            | 说明 | 默认值 |
| ------------- | ----------------------------------------------- | ---- | ------ |
| startX        | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| startY        | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| startZ        | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| endX          | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| endY          | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| endZ          | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| blockCastType | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| fluidCastType | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                                                 | 说明         |
| ---------------------------------------------------- | ------------ |
| <code>[BlockState](/globals/World/BlockState)</code> | 命中的方块   |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | 命中位置     |
| <code>[String](/tutorials/types/Strings)</code>      | 命中的方块面 |

</TabItem>
</Tabs>

**示例：**

```lua
local eyePos = player:getPos() + vec(0, player:getEyeHeight(), 0)
local eyeEnd = eyePos + (player:getLookDir() * 20)
local block, hitPos, side = raycast:block(eyePos, eyeEnd)
```

---

### <code>entity()</code> \{#entity}

在世界中进行实体射线检测。

如果命中，返回命中的 EntityAPI 以及命中位置的世界坐标（Vector3）。

未命中时返回 nil。

predicate 是一个函数，用于排除特定实体，使其不参与射线检测。

该函数接收单个 EntityAPI 对象。有效实体返回 true，无效实体返回 false。

为 nil 时，所有实体都视为有效。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
entity(startpos, endpos, predicate)
```

**参数：**

| 名称      | 类型                                                | 说明 | 默认值 |
| --------- | --------------------------------------------------- | ---- | ------ |
| start     | <code>[Vector3](/globals/Vectors/Vector3)</code>    | -    | -      |
| end       | <code>[Vector3](/globals/Vectors/Vector3)</code>    | -    | -      |
| predicate | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |

**返回：**

| 类型                                             | 说明       |
| ------------------------------------------------ | ---------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 命中的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置   |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
entity(startX, startY, startZ, endpos, predicate)
```

**参数：**

| 名称      | 类型                                                | 说明 | 默认值 |
| --------- | --------------------------------------------------- | ---- | ------ |
| startX    | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| startY    | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| startZ    | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| end       | <code>[Vector3](/globals/Vectors/Vector3)</code>    | -    | -      |
| predicate | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |

**返回：**

| 类型                                             | 说明       |
| ------------------------------------------------ | ---------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 命中的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置   |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
entity(startpos, endX, endY, endZ, predicate)
```

**参数：**

| 名称      | 类型                                                | 说明 | 默认值 |
| --------- | --------------------------------------------------- | ---- | ------ |
| start     | <code>[Vector3](/globals/Vectors/Vector3)</code>    | -    | -      |
| endX      | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| endY      | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| endZ      | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| predicate | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |

**返回：**

| 类型                                             | 说明       |
| ------------------------------------------------ | ---------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 命中的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置   |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
entity(startX, startY, startZ, endX, endY, endZ, predicate)
```

**参数：**

| 名称      | 类型                                                | 说明 | 默认值 |
| --------- | --------------------------------------------------- | ---- | ------ |
| startX    | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| startY    | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| startZ    | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| endX      | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| endY      | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| endZ      | <code>[Number](/tutorials/types/Numbers)</code>     | -    | -      |
| predicate | <code>[Function](/tutorials/types/Functions)</code> | -    | -      |

**返回：**

| 类型                                             | 说明       |
| ------------------------------------------------ | ---------- |
| <code>[Entity](/globals/Player/Entity)</code>    | 命中的实体 |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 命中位置   |

</TabItem>
</Tabs>

**示例：**

<!-- prettier-ignore -->
```lua
local eyePos = player:getPos() + vec(0, player:getEyeHeight(), 0)
local eyeEnd = eyePos + (player:getLookDir() * 20)
local entity, hitPos = raycast:entity(eyePos, eyeEnd,function(x) -- x is the entity hit by the raycast
    if x == player then -- if the entity hit is the player
        return false -- don't include the player in the results
    else 
        return true 
    end 
end)
```

---
