---
title: NameplateCustomizationGroup（名称牌自定义组）
sidebar_label: NameplateCustomizationGroup（名称牌自定义组）
---

用于容纳其他名称牌自定义项的自定义项

---

### <code>setText()</code> \{#setText}

为其下的所有子自定义项设置文本

```lua
setText(text)
```

**参数：**

| 名称 | 类型                                            | 说明               | 默认值 |
| ---- | ----------------------------------------------- | ------------------ | ------ |
| text | <code>[String](/tutorials/types/Strings)</code> | 要应用的名称牌文本 | `nil`  |

**返回值：**

| 类型                                                                                       | 说明                   |
| ------------------------------------------------------------------------------------------ | ---------------------- |
| <code>[NameplateCustomizationGroup](/globals/Nameplate/NameplateCustomizationGroup)</code> | 返回自身，便于链式调用 |

**示例：**

<!-- prettier-ignore -->
```lua
nameplate.All:setText(
   toJson({
       { text = 'Me', color = 'red' },
       { text = '!', color = '#09FF71' }
   })
)
```

---
