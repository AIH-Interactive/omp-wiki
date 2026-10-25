---
title: Textures（纹理 API）
sidebar_label: Textures（纹理 API）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于在运行时创建纹理的全局 API

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

---

### <code>getTextures()</code> \{#getTextures}

返回一个表，其中包含该形象的 Blockbench 模型所使用的全部纹理

不包含通过此 API 生成的纹理

```lua
getTextures()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ---- |
| <code>[Table](/tutorials/types/Tables)</code> | -    |

**示例：**

```lua
logTable(textures:getTextures())
```

---

### <code>get()</code> \{#get}

根据名称获取已注册的纹理；如果找不到该名称的纹理，则返回 nil

```lua
get(name)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| name | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Texture](/globals/Textures/Texture)</code> | -    |

**示例：**

```lua
textures:get("Name")
```

---

### <code>copy()</code> \{#copy}

创建该纹理的副本

副本会以给定的名称注册

```lua
copy(name, texture)
```

**参数：**

| 名称    | 类型                                              | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ---- | ------ |
| name    | <code>[String](/tutorials/types/Strings)</code>   | -    | -      |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Texture](/globals/Textures/Texture)</code> | -    |

**示例：**

```lua
textures:copy("Name", textures["myTexture"])
```

---

### <code>fromVanilla()</code> \{#fromVanilla}

以纹理对象的形式返回原版资源纹理的副本，可用于修改

```lua
fromVanilla(name, path)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| name | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| path | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Texture](/globals/Textures/Texture)</code> | -    |

**示例：**

```lua
textures:fromVanilla("Name", "textures/item/apple.png")
```

---

### <code>newTexture()</code> \{#newTexture}

以给定的名称、宽度和高度创建新纹理

纹理会填充为纯色

```lua
newTexture(name, width, height)
```

**参数：**

| 名称   | 类型                                             | 说明 | 默认值 |
| ------ | ------------------------------------------------ | ---- | ------ |
| name   | <code>[String](/tutorials/types/Strings)</code>  | -    | -      |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Texture](/globals/Textures/Texture)</code> | -    |

**示例：**

```lua
textures:newTexture("Name", 64, 64)
```

---

### <code>read()</code> \{#read}

从 base64 字符串或字节数组读取纹理

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
read(name, base64Text)
```

**参数：**

| 名称       | 类型                                            | 说明 | 默认值 |
| ---------- | ----------------------------------------------- | ---- | ------ |
| name       | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| base64Text | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Texture](/globals/Textures/Texture)</code> | -    |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
read(name, byteArray)
```

**参数：**

| 名称      | 类型                                            | 说明 | 默认值 |
| --------- | ----------------------------------------------- | ---- | ------ |
| name      | <code>[String](/tutorials/types/Strings)</code> | -    | -      |
| byteArray | <code>[Table](/tutorials/types/Tables)</code>   | -    | -      |

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Texture](/globals/Textures/Texture)</code> | -    |

</TabItem>
</Tabs>

**示例：**

<!-- prettier-ignore -->
```lua
-- Reads a texture stored in an item's name...
local page = action_wheel:newPage()
action_wheel:setPage(page)
page:newAction()
    :onLeftClick(function()
        local base64 = parseJson(player:getItem(1):getTag().display.Name).text
        -- highlight-next-line
        local tex = textures:read('tex', base64)
        models.myModel:setPrimaryTexture('custom', tex)
    end)
```

---
