---
title: Avatar（形象）
sidebar_label: Avatar（形象）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

全局 API，提供访问形象元数据的方法，也可用于获取当前脚本环境的信息。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

---

## 元数据

### <code>getName()</code> \{#getName}

获取该形象的名字字符串。

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getName()
```

---

### <code>getAuthors()</code> \{#getAuthors}

获取该形象的作者字符串。

```lua
getAuthors()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getAuthors()
```

---

### <code>getVersion()</code> \{#getVersion}

获取该形象的版本字符串。

```lua
getVersion()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getVersion()
```

---

### <code>hasTexture()</code> \{#hasTexture}

获取该形象是否带有纹理。

```lua
hasTexture()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
avatar:hasTexture()
```

---

### <code>setColor()</code> \{#setColor}

**别名：** `color()`

设置形象当前的颜色字符串，用作形象主题。如果用户拥有特殊徽章，也可以传入徽章名称，为该徽章单独设置颜色。

颜色取值为 0 到 1 之间的数值。标准 RGB 值除以 255，即可得到该函数可用的数值。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setColor(color)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---------------------------------- | ------------ |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | 以单个值表示的 r、g、b 分量 | `vec(1,1,1)` |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | 返回形象 API，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setColor(r, g, b)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ----------------- | ------------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | 红色分量 | 1            |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | 绿色分量 | `r` 的值 |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | 蓝色分量 | `r` 的值 |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | 返回形象 API，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setColor(color, badgeName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --------- | ------------------------------------------------ | ---------------------------------- | ------------ |
| color     | <code>[Vector3](/globals/Vectors/Vector3)</code> | 以单个值表示的 r、g、b 分量 | `vec(1,1,1)` |
| badgeName | <code>[String](/tutorials/types/Strings)</code>  | 徽章名称 | `nil`        |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | 返回形象 API，便于链式调用 |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
setColor(r, g, b, badgeName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --------- | ----------------------------------------------- | ----------------- | ------------ |
| r         | <code>[Number](/tutorials/types/Numbers)</code> | 红色分量 | 1            |
| g         | <code>[Number](/tutorials/types/Numbers)</code> | 绿色分量 | `r` 的值 |
| b         | <code>[Number](/tutorials/types/Numbers)</code> | 蓝色分量 | `r` 的值 |
| badgeName | <code>[String](/tutorials/types/Strings)</code> | 徽章名称 | `nil`        |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | 返回形象 API，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
avatar:setColor(50 / 255, 0 / 255, 64 / 255)
```

---

### <code>getColor()</code> \{#getColor}

获取形象当前的颜色字符串，用作形象主题。

```lua
getColor()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getColor()
```

---

## 其他

### <code>store()</code> \{#store}

把给定的键值对存入当前形象的元数据。

其他脚本可以通过 World 中的 avatarVars() 函数读取这些信息。

键必须是字符串。

```lua
store(key, value)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ----------- | ------- |
| key   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| value | <code>AnyType</code>                            | -           | -       |

**返回：**

| 类型 | 说明 |
| ----------------------------------------- | ----------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | -           |

**示例：**

```lua
avatar:store("storing", true)
```

---

### <code>getSize()</code> \{#getSize}

获取该形象的文件大小，单位为字节。

```lua
getSize()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getSize()
```

---

### <code>getEntityName()</code> \{#getEntityName}

尝试获取该形象对应的实体名，取不到时使用形象名。

```lua
getEntityName()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getEntityName()
```

---

### <code>getUUID()</code> \{#getUUID}

返回该形象所有者的 UUID。

```lua
getUUID()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getUUID()
```

---

### <code>getNBT()</code> \{#getNBT}

获取该形象保存的 NBT 数据。

```lua
getNBT()
```

**返回：**

| 类型 | 说明 |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
avatar:getNBT()
```

---

### <code>getBadges()</code> \{#getBadges}

**别名：** `badges()`

以字符串形式获取用户的徽章。

```lua
getBadges()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getBadges()
```

---

### <code>hasScriptError()</code> \{#hasScriptError}

获取该脚本当前是否因错误而停止（实际作用不大）。

```lua
hasScriptError()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
avatar:hasScriptError()
```

---

## 权限

### <code>getPermissionLevel()</code> \{#getPermissionLevel}

返回该形象的当前权限等级。

```lua
getPermissionLevel()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
avatar:getPermissionLevel()
```

---

### <code>getComplexity()</code> \{#getComplexity}

获取该形象当前的复杂度。

```lua
getComplexity()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getComplexity()
```

---

### <code>getVolume()</code> \{#getVolume}

figura.docs.avatar.get_volume

```lua
getVolume()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getVolume()
```

---

### <code>getCurrentInstructions()</code> \{#getCurrentInstructions}

获取形象当前已执行的指令数。

在某些事件开始时，该计数会重置为 0。

```lua
getCurrentInstructions()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getCurrentInstructions()
```

---

### <code>getInitCount()</code> \{#getInitCount}

获取该形象的初始化指令数。

```lua
getInitCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getInitCount()
```

---

### <code>getEntityInitCount()</code> \{#getEntityInitCount}

获取该形象 events.ENTITY_INIT 的指令数。

```lua
getEntityInitCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getEntityInitCount()
```

---

### <code>getMaxInitCount()</code> \{#getMaxInitCount}

获取观看者（viewer）允许的初始化阶段最大指令数。

```lua
getMaxInitCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxInitCount()
```

---

### <code>getTickCount()</code> \{#getTickCount}

获取该形象上一刻 events.TICK 的指令数。

```lua
getTickCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getTickCount()
```

---

### <code>getMaxTickCount()</code> \{#getMaxTickCount}

获取观看者允许的 events.TICK 最大指令数。

```lua
getMaxTickCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxTickCount()
```

---

### <code>getRenderCount()</code> \{#getRenderCount}

获取该形象上一帧中，所有渲染事件（名称含 render 的事件）以及 models API 中 setXRender() 函数产生的指令数。

```lua
getRenderCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getRenderCount()
```

---

### <code>getMaxRenderCount()</code> \{#getMaxRenderCount}

获取观看者允许的、来自所有渲染事件（名称含 render 的事件）以及 models API 中 setXRender() 函数的最大指令数。

```lua
getMaxRenderCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxRenderCount()
```

---

### <code>getWorldTickCount()</code> \{#getWorldTickCount}

获取该形象上一刻 events.WORLD_TICK 的指令数。

```lua
getWorldTickCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getWorldTickCount()
```

---

### <code>getMaxWorldTickCount()</code> \{#getMaxWorldTickCount}

获取观看者允许的 events.WORLD_TICK 最大指令数。

```lua
getMaxWorldTickCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxWorldTickCount()
```

---

### <code>getWorldRenderCount()</code> \{#getWorldRenderCount}

获取该形象上一帧 events.WORLD_RENDER 与 events.POST_WORLD_RENDER 的指令数。

```lua
getWorldRenderCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getWorldRenderCount()
```

---

### <code>getMaxWorldRenderCount()</code> \{#getMaxWorldRenderCount}

获取观看者允许的 events.WORLD_RENDER 与 events.POST_WORLD_RENDER 最大指令数。

```lua
getMaxWorldRenderCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxWorldRenderCount()
```

---

### <code>getMaxComplexity()</code> \{#getMaxComplexity}

获取观看者允许的模型最大复杂度（面数）。

```lua
getMaxComplexity()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxComplexity()
```

---

### <code>getRemainingParticles()</code> \{#getRemainingParticles}

获取该形象还能召唤的粒子数量。

```lua
getRemainingParticles()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getRemainingParticles()
```

---

### <code>getMaxParticles()</code> \{#getMaxParticles}

获取观看者允许的最大粒子数量。

```lua
getMaxParticles()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxParticles()
```

---

### <code>getRemainingSounds()</code> \{#getRemainingSounds}

获取该形象还能播放的音效数量。

```lua
getRemainingSounds()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getRemainingSounds()
```

---

### <code>getMaxSounds()</code> \{#getMaxSounds}

获取观看者允许的最大音效数量。

```lua
getMaxSounds()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxSounds()
```

---

### <code>getAnimationComplexity()</code> \{#getAnimationComplexity}

获取该形象当前的动画复杂度。

```lua
getAnimationComplexity()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getAnimationComplexity()
```

---

### <code>getMaxAnimationComplexity()</code> \{#getMaxAnimationComplexity}

获取观看者允许的最大动画复杂度（正在播放的通道数）。

```lua
getMaxAnimationComplexity()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxAnimationComplexity()
```

---

### <code>getAnimationCount()</code> \{#getAnimationCount}

获取动画中使用的 Lua 指令数。

```lua
getAnimationCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getAnimationCount()
```

---

### <code>getMaxAnimationCount()</code> \{#getMaxAnimationCount}

获取观看者允许的动画中最大 Lua 指令数。

```lua
getMaxAnimationCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxAnimationCount()
```

---

### <code>getBuffersCount()</code> \{#getBuffersCount}

返回该形象打开的缓冲区数量。

```lua
getBuffersCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getBuffersCount()
```

---

### <code>getMaxBuffersCount()</code> \{#getMaxBuffersCount}

返回该形象允许打开的最大缓冲区数量。

```lua
getMaxBuffersCount()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxBuffersCount()
```

---

### <code>getMaxTextureSize()</code> \{#getMaxTextureSize}

获取该形象可创建的自定义纹理的最大尺寸。

```lua
getMaxTextureSize()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxTextureSize()
```

---

### <code>getMaxBufferSize()</code> \{#getMaxBufferSize}

获取该形象可用的最大字节缓冲区大小。

```lua
getMaxBufferSize()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
avatar:getMaxBufferSize()
```

---

### <code>canEditVanillaModel()</code> \{#canEditVanillaModel}

获取观看者是否允许你的形象修改原版模型。

```lua
canEditVanillaModel()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
avatar:canEditVanillaModel()
```

---

### <code>canEditNameplate()</code> \{#canEditNameplate}

获取观看者是否允许你的形象修改名牌。

```lua
canEditNameplate()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
avatar:canEditNameplate()
```

---

### <code>canRenderOffscreen()</code> \{#canRenderOffscreen}

获取观看者是否允许你把形象渲染到屏幕外。

```lua
canRenderOffscreen()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
avatar:canRenderOffscreen()
```

---

### <code>canUseCustomSounds()</code> \{#canUseCustomSounds}

获取观看者是否允许你的形象播放自定义音效。

```lua
canUseCustomSounds()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
avatar:canUseCustomSounds()
```

---

### <code>canHaveCustomSkull()</code> \{#canHaveCustomSkull}

获取你的形象是否被允许使用自定义玩家头颅。

```lua
canHaveCustomSkull()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
avatar:canHaveCustomSkull()
```

---
