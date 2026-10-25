---
title: Buffer（字节缓冲区）
sidebar_label: Buffer（字节缓冲区）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

字节缓冲区对象

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>getLength()</code> \{#getLength}

返回此缓冲区的长度

```lua
getLength()
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

### <code>getMaxCapacity()</code> \{#getMaxCapacity}

返回此缓冲区可拥有的最大容量

```lua
getMaxCapacity()
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

### <code>setPosition()</code> \{#setPosition}

设置此缓冲区的当前位置

```lua
setPosition(position)
```

**参数：**

| 名称     | 类型                                             | 说明 | 默认值 |
| -------- | ------------------------------------------------ | ---- | ------ |
| position | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>getPosition()</code> \{#getPosition}

返回此缓冲区的当前位置

```lua
getPosition()
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

### <code>clear()</code> \{#clear}

figura.docs.clear

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

### <code>close()</code> \{#close}

关闭此缓冲区，并把它的内存交由垃圾回收器释放。调用此函数后，该缓冲区不能再使用。

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

### <code>isClosed()</code> \{#isClosed}

检查此缓冲区是否已关闭

```lua
isClosed()
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

从此缓冲区读取一个字节

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

### <code>readBase64()</code> \{#readBase64}

从此缓冲区读取字节并转换为 Base64 字符串。length 为要读取的字节数，默认值为 1024。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
readBase64()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
readBase64(length)
```

**参数：**

| 名称   | 类型                                             | 说明 | 默认值 |
| ------ | ------------------------------------------------ | ---- | ------ |
| length | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
-- example coming soon
```

---

### <code>readByteArray()</code> \{#readByteArray}

从此缓冲区读取字节并转换为字符串字节数组。length 为要读取的字节数，默认值为 1024。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
readByteArray()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
readByteArray(length)
```

**参数：**

| 名称   | 类型                                             | 说明 | 默认值 |
| ------ | ------------------------------------------------ | ---- | ------ |
| length | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
-- example coming soon
```

---

### <code>readDouble()</code> \{#readDouble}

从此缓冲区读取一个双精度浮点数（double）

```lua
readDouble()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>readDoubleLE()</code> \{#readDoubleLE}

从此缓冲区读取一个小端序双精度浮点数（little endian double）

```lua
readDoubleLE()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>readFloat()</code> \{#readFloat}

从此缓冲区读取一个单精度浮点数（float）

```lua
readFloat()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>readFloatLE()</code> \{#readFloatLE}

从此缓冲区读取一个小端序单精度浮点数（little endian float）

```lua
readFloatLE()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>readFromStream()</code> \{#readFromStream}

从给定的输入流读取数据并写入此缓冲区，返回写入的字节数

```lua
readFromStream(stream, amount)
```

**参数：**

| 名称   | 类型                                                  | 说明 | 默认值 |
| ------ | ----------------------------------------------------- | ---- | ------ |
| stream | <code>[InputStream](/globals/Data/InputStream)</code> | -    | -      |
| amount | <code>[Integer](/tutorials/types/Numbers)</code>      | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>readInt()</code> \{#readInt}

从此缓冲区读取一个整数（integer）

```lua
readInt()
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

### <code>readIntLE()</code> \{#readIntLE}

从此缓冲区读取一个小端序整数（little endian integer）

```lua
readIntLE()
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

### <code>readLong()</code> \{#readLong}

从此缓冲区读取一个长整数（long）

```lua
readLong()
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

### <code>readLongLE()</code> \{#readLongLE}

从此缓冲区读取一个小端序长整数（little endian long）

```lua
readLongLE()
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

### <code>readShort()</code> \{#readShort}

从此缓冲区读取一个短整数（short）

```lua
readShort()
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

### <code>readShortLE()</code> \{#readShortLE}

从此缓冲区读取一个小端序短整数（little endian short）

```lua
readShortLE()
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

### <code>readString()</code> \{#readString}

从此缓冲区读取一个字符串。默认编码为 UTF8。length 为要读取的字节数

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
readString()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
readString(length)
```

**参数：**

| 名称   | 类型                                             | 说明 | 默认值 |
| ------ | ------------------------------------------------ | ---- | ------ |
| length | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
readString(length, encoding)
```

**参数：**

| 名称     | 类型                                             | 说明 | 默认值 |
| -------- | ------------------------------------------------ | ---- | ------ |
| length   | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |
| encoding | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
-- example coming soon
```

---

### <code>readUShort()</code> \{#readUShort}

从此缓冲区读取一个无符号短整数（unsigned short）

```lua
readUShort()
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

### <code>readUShortLE()</code> \{#readUShortLE}

从此缓冲区读取一个小端序无符号短整数（little endian unsigned short）

```lua
readUShortLE()
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

### <code>write()</code> \{#write}

向此缓冲区写入一个字节

```lua
write(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeBase64()</code> \{#writeBase64}

将 Base64 字符串的字节写入此缓冲区，并返回写入的字节数。

```lua
writeBase64(base64)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ---- | ------ |
| base64 | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeByteArray()</code> \{#writeByteArray}

将字符串的原始字节写入此缓冲区，并返回写入的字节数。

```lua
writeByteArray(array)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| array | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeDouble()</code> \{#writeDouble}

向此缓冲区写入一个双精度浮点数（double）

```lua
writeDouble(val)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeDoubleLE()</code> \{#writeDoubleLE}

向此缓冲区写入一个小端序双精度浮点数（little endian double）

```lua
writeDoubleLE(val)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeFloat()</code> \{#writeFloat}

向此缓冲区写入一个单精度浮点数（float）

```lua
writeFloat(val)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeFloatLE()</code> \{#writeFloatLE}

向此缓冲区写入一个小端序单精度浮点数（little endian float）

```lua
writeFloatLE(val)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeInt()</code> \{#writeInt}

向此缓冲区写入一个整数（integer）

```lua
writeInt(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeIntLE()</code> \{#writeIntLE}

向此缓冲区写入一个小端序整数（little endian integer）

```lua
writeIntLE(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeLong()</code> \{#writeLong}

向此缓冲区写入一个长整数（long）

```lua
writeLong(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeLongLE()</code> \{#writeLongLE}

向此缓冲区写入一个小端序长整数（little endian long）

```lua
writeLongLE(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeShort()</code> \{#writeShort}

向此缓冲区写入一个短整数（short）

```lua
writeShort(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeShortLE()</code> \{#writeShortLE}

向此缓冲区写入一个小端序短整数（little endian short）

```lua
writeShortLE(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeString()</code> \{#writeString}

向此缓冲区写入一个字符串，并返回写入的字节数。默认编码为 UTF8。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
writeString(val)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| val  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
writeString(val, encoding)
```

**参数：**

| 名称     | 类型                                            | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ---- | ------ |
| val      | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| encoding | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
-- example coming soon
```

---

### <code>writeToStream()</code> \{#writeToStream}

将数据从此缓冲区写入给定的输出流

```lua
writeToStream(stream, amount)
```

**参数：**

| 名称   | 类型                                                    | 说明 | 默认值 |
| ------ | ------------------------------------------------------- | ---- | ------ |
| stream | <code>[OutputStream](/globals/Data/OutputStream)</code> | -    | -      |
| amount | <code>[Integer](/tutorials/types/Numbers)</code>        | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeUShort()</code> \{#writeUShort}

向此缓冲区写入一个无符号短整数（unsigned short）

```lua
writeUShort(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>writeUShortLE()</code> \{#writeUShortLE}

向此缓冲区写入一个小端序无符号短整数（little endian unsigned short）

```lua
writeUShortLE(val)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型             | 说明 |
| ---------------- | ---- |
| <code>nil</code> | -    |

**示例：**

```lua
-- example coming soon
```

---
