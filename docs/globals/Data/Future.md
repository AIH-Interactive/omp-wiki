---
title: Future（异步结果）
sidebar_label: Future（异步结果）
---

存放无法立即完成的操作结果的对象

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>getOrError()</code> \{#getOrError}

若此 Future 执行期间发生了错误，则抛出该错误；否则返回结果值

```lua
getOrError()
```

**返回值：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>getValue()</code> \{#getValue}

若此 Future 执行成功，则返回此 Future 对象的值

```lua
getValue()
```

**返回值：**

| 类型                 | 说明 |
| -------------------- | ---- |
| <code>AnyType</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>hasError()</code> \{#hasError}

检查此 Future 执行期间是否发生了错误

```lua
hasError()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>isDone()</code> \{#isDone}

检查此 Future 是否已完成，无论成功还是出错

```lua
isDone()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>throwError()</code> \{#throwError}

若此 Future 执行期间发生了错误，则抛出该错误。

```lua
throwError()
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
