---
sidebar_position: 1
title: Nameplate（名称牌）
sidebar_label: Nameplate（名称牌）
---

用于自定义玩家名称牌的全局 API，覆盖聊天栏、头顶和 Tab 列表。

---

### <code>CHAT</code> \{#CHAT}

聊天栏中名称牌的自定义项。

关于 `Chat` 系列函数，见 [NameplateCustomization](../globals/Nameplate/NameplateCustomization)。

---

### <code>ENTITY</code> \{#ENTITY}

头顶名称牌的自定义项。

关于 `Entity` 系列函数，见 [EntityNameplateCustomization](../globals/Nameplate/EntityNameplateCustomization)。

---

### <code>LIST</code> \{#LIST}

Tab 列表中名称牌的自定义项。

关于 `List` 系列函数，见 [NameplateCustomization](../globals/Nameplate/NameplateCustomization)。

---

### <code>ALL</code> \{#ALL}

一次性管理全部名称牌自定义项的分组。

关于 `All` 系列函数，见 [NameplateCustomizationGroup](../globals/Nameplate/NameplateCustomizationGroup)。

---

## 使用 JSON

如果除了文本内容本身，还想修改文本的属性，可以用 JSON 设置颜色、加粗，或 Minecraft 文本支持的其他属性，包括通过颜色代码设置。也可以直接使用网上任意一个 JSON 文本生成器。

<!-- prettier-ignore -->
```lua
nameplate.All:setText('[{"color":"red","text":"Me"},{"text":"!","color":"#09ff71"}]')

nameplate.All:setText(
   toJson({
       { text = 'Me', color = 'red' },
       { text = '!', color = '#09FF71' }
   })
)
```

下面是一个示例。所有 JSON **_必须_** 像示例这样用单引号（'）包裹。JSON 生成器的输出不会自带单引号，需要你自行添加。为简化操作，可以像上面的第二个示例那样使用 `toJson`。
