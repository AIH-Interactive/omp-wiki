---
title: File（文件）
sidebar_label: File（文件）
---

一个全局 API，提供文件操作相关功能。

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>allowed()</code> \{#allowed}

检查此形象能否使用 FileAPI

```lua
allowed()
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>delete()</code> \{#delete}

删除指定路径下的文件或目录。删除成功时返回 true

```lua
delete(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>exists()</code> \{#exists}

检查指定路径下的文件或目录是否存在

```lua
exists(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>isDirectory()</code> \{#isDirectory}

检查指定路径是否为目录

```lua
isDirectory(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>isFile()</code> \{#isFile}

检查指定路径是否为文件

```lua
isFile(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>isPathAllowed()</code> \{#isPathAllowed}

检查此路径是否允许使用

```lua
isPathAllowed(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>list()</code> \{#list}

列出指定路径下的所有文件和目录。如果目录不存在，或该路径不是目录，则返回 null

```lua
list(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>mkdir()</code> \{#mkdir}

在指定路径创建目录。创建成功时返回 true

```lua
mkdir(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>mkdirs()</code> \{#mkdirs}

在指定路径创建目录，并一并创建所有父目录。创建成功时返回 true

```lua
mkdirs(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>openReadStream()</code> \{#openReadStream}

为指定路径的文件打开输入流

```lua
openReadStream(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[InputStream](/globals/Data/InputStream)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>openWriteStream()</code> \{#openWriteStream}

为指定路径的文件打开输出流

```lua
openWriteStream(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[OutputStream](/globals/Data/OutputStream)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>readString()</code> \{#readString}

将整个文件读取为字符串

```lua
readString(path, encoding)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |
| encoding | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | - |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeString()</code> \{#writeString}

将字符串写入文件

```lua
writeString(path, data, encoding)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | - | - |
| data | <code>[String](/tutorials/types/Strings)</code> | - | - |
| encoding | <code>[String](/tutorials/types/Strings)</code> | - | - |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| <code>nil</code> | - |

**示例：**

```lua
-- example coming soon
```

---
