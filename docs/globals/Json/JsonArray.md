---
title: JsonArray（JSON 数组）
sidebar_label: JsonArray（JSON 数组）
---

JSON 数组（JSON Array），本质上是一个表，但比普通表受到更多限制，以符合 JSON 数组的规则

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>set()</code> \{#set}

将给定的值设置到该数组的指定索引

```lua
set(index, elem)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |
| elem  | <code>AnyType</code>                             | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>get()</code> \{#get}

返回指定索引处的值

```lua
get(index)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>add()</code> \{#add}

将指定的值添加到该数组

```lua
add(elem)
```

**参数：**

| 名称 | 类型                 | 说明 | 默认值 |
| ---- | -------------------- | ---- | ------ |
| elem | <code>AnyType</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>clear()</code> \{#clear}

清空该数组

```lua
clear()
```

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>contains()</code> \{#contains}

检查该数组是否包含指定的值

```lua
contains(elem)
```

**参数：**

| 名称 | 类型                 | 说明 | 默认值 |
| ---- | -------------------- | ---- | ------ |
| elem | <code>AnyType</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>indexOf()</code> \{#indexOf}

返回指定值在该数组中首次出现的索引

```lua
indexOf(elem)
```

**参数：**

| 名称 | 类型                 | 说明 | 默认值 |
| ---- | -------------------- | ---- | ------ |
| elem | <code>AnyType</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>insert()</code> \{#insert}

将指定的值插入到该数组的指定索引处

```lua
insert(index, elem)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |
| elem  | <code>AnyType</code>                             | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>lastIndexOf()</code> \{#lastIndexOf}

返回指定值在该数组中最后出现的索引

```lua
lastIndexOf(elem)
```

**参数：**

| 名称 | 类型                 | 说明 | 默认值 |
| ---- | -------------------- | ---- | ------ |
| elem | <code>AnyType</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>remove()</code> \{#remove}

从该数组中移除指定的值

```lua
remove(elem)
```

**参数：**

| 名称 | 类型                 | 说明 | 默认值 |
| ---- | -------------------- | ---- | ------ |
| elem | <code>AnyType</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>removeAt()</code> \{#removeAt}

移除该数组中指定索引处的值

```lua
removeAt(index)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>size()</code> \{#size}

返回该数组的大小

```lua
size()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---
