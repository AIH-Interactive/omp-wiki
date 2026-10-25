---
sidebar_position: 1
title: Net（网络 API）
sidebar_label: Net（网络 API）
---

包含网络相关功能的全局 API。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

---

### <code>isLinkAllowed()</code> \{#isLinkAllowed}

检查指定链接是否允许在网络 API 中使用。

```lua
isLinkAllowed(link)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------- | ------- |
| link | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
-- example coming soon
```

---

### <code>isNetworkingAllowed()</code> \{#isNetworkingAllowed}

检查你的形象能否使用网络功能。如果设置中关闭了网络功能，则始终返回 false。

```lua
isNetworkingAllowed()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
-- example coming soon
```

---

## 字段

### <code>http</code> \{#http}

HttpAPI 的实例。

**示例：**

```lua
-- example coming soon
```

---
