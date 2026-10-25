---
title: ItemStack（物品堆叠）
sidebar_label: ItemStack（物品堆叠）
---

Minecraft 物品堆叠的代理对象。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

本页所有示例均假定：

```lua
local item = player:getHeldItem()
```

---

## 通用

### <code>getCount()</code> \{#getCount}

获取该堆叠中的物品数量。

```lua
getCount()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
item:getCount()
```

---

### <code>getID()</code> \{#getID}

获取该堆叠的 id。

```lua
getID()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
item:getID()
```

---

### <code>getMaxCount()</code> \{#getMaxCount}

获取该物品的最大堆叠数量。

```lua
getMaxCount()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
item:getMaxCount()
```

---

### <code>getName()</code> \{#getName}

获取物品的名称。

```lua
getName()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
item:getName()
```

---

### <code>getPopTime()</code> \{#getPopTime}

获取该物品的浮动动画时间，单位为刻。该值用于物品被拾起时移动到玩家身上的动画。

```lua
getPopTime()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
item:getPopTime()
```

---

### <code>getRarity()</code> \{#getRarity}

获取该物品堆叠的稀有度。

COMMON = 白色，UNCOMMON = 黄色，RARE = 青色，EPIC = 淡紫色。

```lua
getRarity()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
item:getRarity()
```

---

### <code>getTag()</code> \{#getTag}

以表的形式获取该堆叠的 NBT 标签。

```lua
getTag()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ---- |
| <code>[Table](/tutorials/types/Tables)</code> | -    |

**示例：**

```lua
item:getTag()
```

---

### <code>getTags()</code> \{#getTags}

以字符串表的形式获取该物品的全部标签。

```lua
getTags()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ---- |
| <code>[Table](/tutorials/types/Tables)</code> | -    |

**示例：**

```lua
item:getTags()
```

---

### <code>getUseAction()</code> \{#getUseAction}

返回使用该物品时播放的动画名称。

```lua
getUseAction()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
item:getUseAction()
```

---

### <code>getUseDuration()</code> \{#getUseDuration}

获取“使用”该物品所需的刻数。

目前仅对食物类物品有效。

食物类物品固定为 32，海带除外，海带为 16。

```lua
getUseDuration()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
item:getUseDuration()
```

---

### <code>copy()</code> \{#copy}

返回该物品堆叠的副本。

```lua
copy()
```

**返回值：**

| 类型                                               | 说明               |
| -------------------------------------------------- | ------------------------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
item:copy()
```

---

### <code>hasGlint()</code> \{#hasGlint}

如果该物品带有附魔光效，返回 true。

```lua
hasGlint()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:hasGlint()
```

---

### <code>isFood()</code> \{#isFood}

如果该物品可食用，返回 true。

```lua
isFood()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:isFood()
```

---

### <code>isStackable()</code> \{#isStackable}

如果该物品可堆叠，返回 true。

```lua
isStackable()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:isStackable()
```

---

### <code>toStackString()</code> \{#toStackString}

将该 ItemStack 转换为字符串，形式与命令中的写法相同。

```lua
toStackString()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
item:toStackString()
```

---

## 装备与工具

### <code>getDamage()</code> \{#getDamage}

获取该堆叠中物品的损伤值。

适用于工具等带有耐久条的物品。

```lua
getDamage()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
item:getDamage()
```

---

### <code>getEquipmentSlot()</code> \{#getEquipmentSlot}

返回该物品使用时所处槽位的名称。

```lua
getEquipmentSlot()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
item:getEquipmentSlot()
```

---

### <code>getMaxDamage()</code> \{#getMaxDamage}

获取该物品堆叠的最大耐久度。

```lua
getMaxDamage()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
item:getMaxDamage()
```

---

### <code>getRepairCost()</code> \{#getRepairCost}

获取该物品堆叠在铁砧中的修复花费修正值。

```lua
getRepairCost()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
item:getRepairCost()
```

---

### <code>isArmor()</code> \{#isArmor}

检查该物品是否为盔甲。

```lua
isArmor()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:isArmor()
```

---

### <code>isDamageable()</code> \{#isDamageable}

如果该物品堆叠具有耐久度，返回 true。

```lua
isDamageable()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:isDamageable()
```

---

### <code>isEnchantable()</code> \{#isEnchantable}

如果该物品堆叠可以放入附魔台，返回 true。

```lua
isEnchantable()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:isEnchantable()
```

---

### <code>isTool()</code> \{#isTool}

检查该物品是否为工具（斧、锹、镐等）。

```lua
isTool()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:isTool()
```

---

## 方块物品

### <code>getBlockstate()</code> \{#getBlockstate}

返回该物品堆叠对应的方块状态。

如果该物品没有对应的方块表示，返回 nil。

```lua
getBlockstate()
```

**返回值：**

| 类型                                                 | 说明 |
| ---------------------------------------------------- | ---- |
| <code>[BlockState](/globals/World/BlockState)</code> | -    |

**示例：**

```lua
item:getBlockstate()
```

---

### <code>isBlockItem()</code> \{#isBlockItem}

如果该物品代表一个方块，返回 true。

```lua
isBlockItem()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
item:isBlockItem()
```

---

## 字段

### <code>id</code> \{#id}

包含该 ItemStack 所指物品的 id。

**示例：**

```lua
item.id
```

---

### <code>tag</code> \{#tag}

包含该 ItemStack NBT 标签的表。

如果该 ItemStack 的标签为空，则为 nil。

**示例：**

```lua
item.tag
```

---
