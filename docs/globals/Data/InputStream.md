---
title: InputStream（输入流）
sidebar_label: InputStream（输入流）
---

输入数据流

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>available()</code> \{#available}

返回可读取的字节数

```lua
available()
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

### <code>close()</code> \{#close}

关闭此输入流

```lua
close()
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

### <code>isAsyncOnly()</code> \{#isAsyncOnly}

此流是否仅支持异步操作

```lua
isAsyncOnly()
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

### <code>mark()</code> \{#mark}

标记输入流的当前位置

```lua
mark(readLimit)
```

**参数：**

| 名称      | 类型                                             | 说明 | 默认值 |
| --------- | ------------------------------------------------ | ---- | ------ |
| readLimit | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>markSupported()</code> \{#markSupported}

此输入流是否支持标记

```lua
markSupported()
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

### <code>read()</code> \{#read}

从此流读取一个字节。如果流仅支持异步操作，可能抛出错误

```lua
read()
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

### <code>readAsync()</code> \{#readAsync}

开始从此流读取指定数量的字节，并返回一个 Future 对象，读取完成后其中包含由流字节组成的字节数组

```lua
readAsync()
```

**返回值：**

| 类型                                        | 说明 |
| ------------------------------------------- | ---- |
| <code>[Future](/globals/Data/Future)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>reset()</code> \{#reset}

把输入流的位置重置到标记处

```lua
reset()
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

### <code>skip()</code> \{#skip}

在流中跳过指定数量的字节。返回实际跳过的字节数

```lua
skip(n)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| n    | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>transferTo()</code> \{#transferTo}

把此输入流中剩余的数据传输到指定的输出流

```lua
transferTo(out)
```

**参数：**

| 名称 | 类型                                                    | 说明 | 默认值 |
| ---- | ------------------------------------------------------- | ---- | ------ |
| out  | <code>[OutputStream](/globals/Data/OutputStream)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---
