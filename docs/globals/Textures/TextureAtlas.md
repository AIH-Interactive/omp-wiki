---
title: TextureAtlas（纹理图集）
sidebar_label: TextureAtlas（纹理图集）
---

纹理图集（Texture Atlas）对象，提供与纹理图集相关的辅助函数

:::warning
本页仍在完善中。页面已包含 Figura 文档中的全部信息，我们正在补充更详细的说明。
:::

本页全部示例均假设：

```lua
local myAtlas = client.getAtlas(client.listAtlases()[1])
```

---

### <code>getHeight()</code> \{#getHeight}

返回此图集的高度

```lua
getHeight()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
myAtlas:getHeight()
```

---

### <code>getSpriteUV()</code> \{#getSpriteUV}

返回一个 vec4，其中包含指定精灵（sprite）的 UV

UV 的排列顺序为 U0、V0、U1、V1

```lua
getSpriteUV(path)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| path | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

**示例：**

```lua
myAtlas:getSpriteUV(myAtlas:listSprites()[1])
```

---

### <code>getWidth()</code> \{#getWidth}

返回此图集的宽度

```lua
getWidth()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
myAtlas:getWidth()
```

---

### <code>listSprites()</code> \{#listSprites}

返回一个表，其中包含此图集下的全部精灵路径

```lua
listSprites()
```

**返回值：**

| 类型                                          | 说明 |
| --------------------------------------------- | ---- |
| <code>[Table](/tutorials/types/Tables)</code> | -    |

**示例：**

```lua
myAtlas:listSprites()
```

---
