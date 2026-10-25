---
title: HttpRequestBuilder（HTTP 请求构建器）
sidebar_label: HttpRequestBuilder（HTTP 请求构建器）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于构建 HTTP 请求

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>getBody()</code> \{#getBody}

返回此请求的请求体

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getBody()
```

**返回值：**

| 类型                                                  | 说明 |
| ----------------------------------------------------- | ---- |
| <code>[InputStream](/globals/Data/InputStream)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getBody()
```

**返回值：**

| 类型                                        | 说明 |
| ------------------------------------------- | ---- |
| <code>[Buffer](/globals/Data/Buffer)</code> | -    |

</TabItem>
</Tabs>

**示例：**

```lua
-- example coming soon
```

---

### <code>getHeaders()</code> \{#getHeaders}

返回一个表，其中包含为此请求设置的全部请求头

```lua
getHeaders()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ---- |
| <code>[Table](/tutorials/types/Tables)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>getMethod()</code> \{#getMethod}

返回此请求的方法

```lua
getMethod()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>getUri()</code> \{#getUri}

返回此请求的 URI

```lua
getUri()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
-- example coming soon
```

---

### <code>body()</code> \{#body}

设置此请求的请求体，并返回自身以便链式调用。如果 data 为 nil，请求将不带请求体发送

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
body(data)
```

**参数：**

| 名称 | 类型                                                  | 说明 | 默认值 |
| ---- | ----------------------------------------------------- | ---- | ------ |
| data | <code>[InputStream](/globals/Data/InputStream)</code> | -    | -      |

**返回值：**

| 类型                                                               | 说明                 |
| ------------------------------------------------------------------ | -------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | 返回自身以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
body(data)
```

**参数：**

| 名称 | 类型                                        | 说明 | 默认值 |
| ---- | ------------------------------------------- | ---- | ------ |
| data | <code>[Buffer](/globals/Data/Buffer)</code> | -    | -      |

**返回值：**

| 类型                                                               | 说明                 |
| ------------------------------------------------------------------ | -------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | 返回自身以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- example coming soon
```

---

### <code>header()</code> \{#header}

设置此请求的请求头，并返回自身以便链式调用。如果 value 为 nil，该请求头会被移除

```lua
header(header, value)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ---- | ------ |
| header | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| value  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                                               | 说明                 |
| ------------------------------------------------------------------ | -------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | 返回自身以便链式调用 |

**示例：**

```lua
-- example coming soon
```

---

### <code>method()</code> \{#method}

设置此请求的方法，并返回自身以便链式调用。如果 method 为 nil，将使用默认值 “GET”

```lua
method(method)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ---- | ------ |
| method | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                                               | 说明                 |
| ------------------------------------------------------------------ | -------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | 返回自身以便链式调用 |

**示例：**

```lua
-- example coming soon
```

---

### <code>send()</code> \{#send}

发送此请求，并返回一个 Future；请求完成后，其中会包含响应对象

```lua
send()
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

### <code>uri()</code> \{#uri}

设置此请求的 URI，并返回自身以便链式调用

```lua
uri(uri)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| uri  | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                                               | 说明                 |
| ------------------------------------------------------------------ | -------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | 返回自身以便链式调用 |

**示例：**

```lua
-- example coming soon
```

---
