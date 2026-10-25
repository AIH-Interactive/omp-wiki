---
title: JsonObject（JSON 对象）
sidebar_label: JsonObject（JSON 对象）
---

JSON 对象，本质上是一个表，但限制更多，以符合 JSON 对象的规则。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

---

### <code>get()</code> \{#get}

返回指定键对应的值。与普通表不同，该对象可以包含 nil 值，建议先调用 containsKey 判断。

```lua
get(key)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| key  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>clear()</code> \{#clear}

清空该对象。

```lua
clear()
```

**返回：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>containsKey()</code> \{#containsKey}

检查该对象是否包含指定的键。

```lua
containsKey(key)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| key  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>containsValue()</code> \{#containsValue}

检查该对象是否包含指定的值。

```lua
containsValue(value)
```

**参数：**

| 名称  | 类型                 | 说明 | 默认值 |
| ----- | -------------------- | ---- | ------ |
| value | <code>AnyType</code> | -    | -      |

**返回：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>put()</code> \{#put}

把给定的值写入指定的键。

```lua
put(key, value)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| key   | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| value | <code>AnyType</code>                            | -    | -      |

**返回：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>remove()</code> \{#remove}

从对象中移除指定键对应的值。

```lua
remove(key)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| key  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>size()</code> \{#size}

返回该对象的大小。

```lua
size()
```

**返回：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---
