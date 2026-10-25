---
title: Viewer（观看者）
sidebar_label: Viewer（观看者）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Viewer 是 [Player](../Player) 的别名。它用于访问正在观看你形象的人，以便调用一些仅房主可用的函数。`player` 可用的所有方法在 `viewer` 下也同样可用，此外还额外提供下文列出的方法。

通过 `client:getViewer()` 获取。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

本页示例均假定：

```lua
local myViewer = client:getViewer()
```

---

### <code>getAir()</code> \{#getAir}

获取玩家剩余的氧气值

```lua
getAir()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
myViewer:getAir()
```

---

### <code>getAttackCharge()</code> \{#getAttackCharge}

返回玩家攻击蓄力的比例（0 到 1）

如果该值小于 1，每次攻击都会成为弱攻击

```lua
getAttackCharge()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
myViewer:getAttackCharge()
```

---

### <code>getReachDistance()</code> \{#getReachDistance}

返回玩家当前的可触及距离

```lua
getReachDistance()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | - |

**示例：**

```lua
myViewer:getReachDistance()
```

---

### <code>getStatusEffects()</code> \{#getStatusEffects}

返回玩家所有状态效果组成的表

该表包含多个子表，每个子表记录一种状态效果的名称、等级（amplifier）、持续时间和粒子可见性

```lua
getStatusEffects()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | - |

**示例：**

```lua
for _, effect in pairs(myViewer:getStatusEffects()) do
    logTable(effect)
end
```

---

### <code>isFlying()</code> \{#isFlying}

检查玩家当前是否正在飞行

```lua
isFlying()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
myViewer:isFlying()
```

---

### <code>isJumping()</code> \{#isJumping}

检查玩家是否正在跳跃

注意：只有玩家开始跳跃的第一个刻，该值才为真

```lua
isJumping()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
myViewer:isJumping()
```

---
