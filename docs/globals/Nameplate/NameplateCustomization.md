---
title: NameplateCustomization（名牌定制）
sidebar_label: NameplateCustomization（名牌定制）
---

可应用于名牌的定制项

---

### <code>setText()</code> \{#setText}

该名牌显示的文本

```lua
setText(text)
```

**参数：**

| 名称 | 类型                                            | 说明                 | 默认值 |
| ---- | ----------------------------------------------- | -------------------- | ------ |
| text | <code>[String](/tutorials/types/Strings)</code> | 要将名牌设置成的文本 | `nil`  |

**返回值：**

| 类型                                                                             | 说明                   |
| -------------------------------------------------------------------------------- | ---------------------- |
| <code>[NameplateCustomization](/globals/Nameplate/NameplateCustomization)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
nameplate.ALL:setText("Steve")
```

---

### <code>getText()</code> \{#getText}

该名牌显示的文本

```lua
getText()
```

**返回值：**

| 类型                                            | 说明                            |
| ----------------------------------------------- | ------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | 通过 setText 为名牌设置的字符串 |

**示例：**

```lua
nameplate.ENTITY:getText()
```

---
