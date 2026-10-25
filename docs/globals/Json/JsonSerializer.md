---
title: JsonSerializer（JSON 序列化器）
sidebar_label: JsonSerializer（JSON 序列化器）
---

用于按指定设置序列化与反序列化 JSON 字符串的对象

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>deserialize()</code> \{#deserialize}

把传入的 JSON 字符串反序列化为 Lua 值

```lua
deserialize(str)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| str  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>serialize()</code> \{#serialize}

把传入的值序列化为 JSON 字符串

```lua
serialize(val)
```

**参数：**

| 名称 | 类型                 | 说明 | 默认值 |
| ---- | -------------------- | ---- | ------ |
| val  | <code>AnyType</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---
