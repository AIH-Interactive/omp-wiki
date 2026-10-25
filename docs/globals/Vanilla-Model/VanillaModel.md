---
sidebar_position: 1
title: VanillaModel（原版模型）
sidebar_label: VanillaModel（原版模型）
---

用于操作原版玩家模型及其部件的全局 API。

通过全局字段 `vanilla_model` 访问。

---

## 分组

这些部件的相关函数请参阅[此处](VanillaModelGroup)。

### <code>ALL</code> \{#ALL}

多部件：整个原版模型。

**示例：**

```lua
vanilla_model.ALL:setVisible(false)
```

---

### <code>PLAYER</code> \{#PLAYER}

多部件：玩家皮肤的外层与内层，以及披风。

**示例：**

```lua
vanilla_model.PLAYER:setVisible(false)
```

---

### <code>OUTER_LAYER</code> \{#OUTER_LAYER}

多部件：玩家的外层。

**示例：**

```lua
vanilla_model.OUTER_LAYER:setVisible(false)
```

---

### <code>INNER_LAYER</code> \{#INNER_LAYER}

多部件：玩家的主体，即除外层以外的全部部件。

**示例：**

```lua
vanilla_model.INNER_LAYER:setVisible(false)
```

---

### <code>CAPE</code> \{#CAPE}

多部件：玩家的披风。

**示例：**

```lua
vanilla_model.CAPE:setVisible(false)
```

---

### <code>ARMOR</code> \{#ARMOR}

多部件：模型上的全部盔甲。

**示例：**

```lua
vanilla_model.ARMOR:setVisible(false)
```

---

### <code>HELMET</code> \{#HELMET}

多部件：头盔模型。

**示例：**

```lua
vanilla_model.HELMET:setVisible(false)
```

---

### <code>CHESTPLATE</code> \{#CHESTPLATE}

多部件：胸甲模型。

**示例：**

```lua
vanilla_model.CHESTPLATE:setVisible(false)
```

---

### <code>LEGGINGS</code> \{#LEGGINGS}

多部件：护腿模型。

**示例：**

```lua
vanilla_model.LEGGINGS:setVisible(false)
```

---

### <code>BOOTS</code> \{#BOOTS}

多部件：靴子模型。

**示例：**

```lua
vanilla_model.BOOTS:setVisible(false)
```

---

### <code>ELYTRA</code> \{#ELYTRA}

多部件：鞘翅模型。

**示例：**

```lua
vanilla_model.ELYTRA:setVisible(false)
```

---

### <code>HELD_ITEMS</code> \{#HELD_ITEMS}

多部件：玩家手中的物品。

**示例：**

```lua
vanilla_model.HELD_ITEMS:setVisible(false)
```

---

### <code>PARROTS</code> \{#PARROTS}

多部件：玩家肩上的鹦鹉。

**示例：**

```lua
vanilla_model.PARROTS:setVisible(false)
```

---

## 部件

这些部件的相关函数请参阅[此处](VanillaModelPart)。

### <code>HEAD</code> \{#HEAD}

玩家的头部，不包括帽子。

**示例：**

```lua
vanilla_model.HEAD:setVisible(false)
```

---

### <code>BODY</code> \{#BODY}

玩家的身体，不包括外层。

**示例：**

```lua
vanilla_model.BODY:setVisible(false)
```

---

### <code>LEFT_ARM</code> \{#LEFT_ARM}

玩家的左臂，不包括外层。

**示例：**

```lua
vanilla_model.LEFT_ARM:setVisible(false)
```

---

### <code>RIGHT_ARM</code> \{#RIGHT_ARM}

玩家的右臂，不包括外层。

**示例：**

```lua
vanilla_model.RIGHT_ARM:setVisible(false)
```

---

### <code>LEFT_LEG</code> \{#LEFT_LEG}

玩家的左腿，不包括外层。

**示例：**

```lua
vanilla_model.LEFT_LEG:setVisible(false)
```

---

### <code>RIGHT_LEG</code> \{#RIGHT_LEG}

玩家的右腿，不包括外层。

**示例：**

```lua
vanilla_model.RIGHT_LEG:setVisible(false)
```

---

### <code>HAT</code> \{#HAT}

玩家头部的外层。

**示例：**

```lua
vanilla_model.HAT:setVisible(false)
```

---

### <code>JACKET</code> \{#JACKET}

玩家身体的外层。

**示例：**

```lua
vanilla_model.JACKET:setVisible(false)
```

---

### <code>LEFT_SLEEVE</code> \{#LEFT_SLEEVE}

玩家左臂的外层。

**示例：**

```lua
vanilla_model.LEFT_SLEEVE:setVisible(false)
```

---

### <code>RIGHT_SLEEVE</code> \{#RIGHT_SLEEVE}

玩家右臂的外层。

**示例：**

```lua
vanilla_model.RIGHT_SLEEVE:setVisible(false)
```

---

### <code>LEFT_PANTS</code> \{#LEFT_PANTS}

玩家左腿的外层。

**示例：**

```lua
vanilla_model.LEFT_PANTS:setVisible(false)
```

---

### <code>RIGHT_PANTS</code> \{#RIGHT_PANTS}

玩家右腿的外层。

**示例：**

```lua
vanilla_model.RIGHT_PANTS:setVisible(false)
```

---

### <code>CAPE_MODEL</code> \{#CAPE_MODEL}

原版披风模型。

**示例：**

```lua
vanilla_model.CAPE_MODEL:setVisible(false)
```

---

### <code>FAKE_CAPE</code> \{#FAKE_CAPE}

披风的自定义副本。原版披风的变换计算颇为怪异，因此这个副本尝试保存披风的变换。

**示例：**

```lua
vanilla_model.FAKE_CAPE:setVisible(false)
```

---

### <code>HELMET_ITEM</code> \{#HELMET_ITEM}

盔甲头部槽位中的物品。

**示例：**

```lua
vanilla_model.HELMET_ITEM:setVisible(false)
```

---

### <code>HELMET_HEAD</code> \{#HELMET_HEAD}

头盔模型的头部。

**示例：**

```lua
vanilla_model.HELMET_HEAD:setVisible(false)
```

---

### <code>HELMET_HAT</code> \{#HELMET_HAT}

头盔模型的帽子。

**示例：**

```lua
vanilla_model.HELMET_HAT:setVisible(false)
```

---

### <code>CHESTPLATE_BODY</code> \{#CHESTPLATE_BODY}

胸甲模型的身体。

**示例：**

```lua
vanilla_model.CHESTPLATE_BODY:setVisible(false)
```

---

### <code>CHESTPLATE_LEFT_ARM</code> \{#CHESTPLATE_LEFT_ARM}

胸甲模型的左臂。

**示例：**

```lua
vanilla_model.CHESTPLATE_LEFT_ARM:setVisible(false)
```

---

### <code>CHESTPLATE_RIGHT_ARM</code> \{#CHESTPLATE_RIGHT_ARM}

胸甲模型的右臂。

**示例：**

```lua
vanilla_model.CHESTPLATE_RIGHT_ARM:setVisible(false)
```

---

### <code>LEGGINGS_BODY</code> \{#LEGGINGS_BODY}

护腿模型的身体。

**示例：**

```lua
vanilla_model.LEGGINGS_BODY:setVisible(false)
```

---

### <code>LEGGINGS_LEFT_LEG</code> \{#LEGGINGS_LEFT_LEG}

护腿模型的左腿。

**示例：**

```lua
vanilla_model.LEGGINGS_LEFT_LEG:setVisible(false)
```

---

### <code>LEGGINGS_RIGHT_LEG</code> \{#LEGGINGS_RIGHT_LEG}

护腿模型的右腿。

**示例：**

```lua
vanilla_model.LEGGINGS_RIGHT_LEG:setVisible(false)
```

---

### <code>BOOTS_LEFT_LEG</code> \{#BOOTS_LEFT_LEG}

靴子模型的左靴。

**示例：**

```lua
vanilla_model.BOOTS_LEFT_LEG:setVisible(false)
```

---

### <code>BOOTS_RIGHT_LEG</code> \{#BOOTS_RIGHT_LEG}

靴子模型的右靴。

**示例：**

```lua
vanilla_model.BOOTS_RIGHT_LEG:setVisible(false)
```

---

### <code>LEFT_ELYTRA</code> \{#LEFT_ELYTRA}

鞘翅模型的左翼。

**示例：**

```lua
vanilla_model.LEFT_ELYTRA:setVisible(false)
```

---

### <code>RIGHT_ELYTRA</code> \{#RIGHT_ELYTRA}

鞘翅模型的右翼。

**示例：**

```lua
vanilla_model.RIGHT_ELYTRA:setVisible(false)
```

---

### <code>LEFT_ITEM</code> \{#LEFT_ITEM}

玩家左手里的物品。

**示例：**

```lua
vanilla_model.LEFT_ITEM:setVisible(false)
```

---

### <code>RIGHT_ITEM</code> \{#RIGHT_ITEM}

玩家右手里的物品。

**示例：**

```lua
vanilla_model.RIGHT_ITEM:setVisible(false)
```

---

### <code>LEFT_PARROT</code> \{#LEFT_PARROT}

玩家左肩上的鹦鹉。

**示例：**

```lua
vanilla_model.LEFT_PARROT:setVisible(false)
```

---

### <code>RIGHT_PARROT</code> \{#RIGHT_PARROT}

玩家右肩上的鹦鹉。

**示例：**

```lua
vanilla_model.RIGHT_PARROT:setVisible(false)
```

---
