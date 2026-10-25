---
title: Client（客户端）
sidebar_label: Client（客户端）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于与当前 Minecraft 客户端交互的全局 API。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

其中大部分函数返回的值都能在 F3 菜单中找到。

---

### <code>getViewer()</code> \{#getViewer}

返回当前运行客户端的玩家实体。

```lua
getViewer()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[ViewerAPI](/globals/Player/Viewer)</code> | -           |

**示例：**

```lua
client.getViewer()
```

---

## 版本

### <code>getVersion()</code> \{#getVersion}

返回客户端的 Minecraft 版本。

```lua
getVersion()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getVersion()
```

---

### <code>getVersionName()</code> \{#getVersionName}

返回客户端 Minecraft 版本的完整名称。

```lua
getVersionName()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getVersionName()
```

---

### <code>getJavaVersion()</code> \{#getJavaVersion}

返回你当前运行 Minecraft 所使用的 Java 版本。

```lua
getJavaVersion()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getJavaVersion()
```

---

### <code>isSnapshot()</code> \{#isSnapshot}

返回客户端运行的是快照版还是正式版。

```lua
isSnapshot()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.isSnapshot()
```

---

### <code>getFiguraVersion()</code> \{#getFiguraVersion}

获取客户端上的 Figura 版本。

```lua
getFiguraVersion()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getFiguraVersion()
```

---

### <code>compareVersions()</code> \{#compareVersions}

比较两个版本：小于返回 -1，等于返回 0，大于返回 1。

```lua
compareVersions(version1, version2)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| version1 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| version2 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.compareVersions("0.1.0", "0.1.3")
```

---

### <code>isModLoaded()</code> \{#isModLoaded}

检查客户端是否加载了指定的模组 ID。

```lua
isModLoaded(modID)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| modID | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.isModLoaded("origins")
```

---

### <code>hasShaderPackMod()</code> \{#hasShaderPackMod}

检查客户端是否安装了光影包模组。

```lua
hasShaderPackMod()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.hasShaderPackMod()
```

---

### <code>hasShaderPack()</code> \{#hasShaderPack}

检查客户端当前是否正在使用光影包。

```lua
hasShaderPack()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.hasShaderPack()
```

---

### <code>getShaderPackName()</code> \{#getShaderPackName}

返回当前光影包的名称；未使用光影包时返回空字符串。

```lua
getShaderPackName()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getShaderPackName()
```

---

### <code>getClientBrand()</code> \{#getClientBrand}

返回客户端的“版本类型”，通常是客户端模组加载器的品牌名。

```lua
getClientBrand()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getClientBrand()
```

---

### <code>getServerBrand()</code> \{#getServerBrand}

返回你所在服务器的类型。

在单人游戏中，该值为“Integrated”。

```lua
getServerBrand()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getServerBrand()
```

---

## 客户端相机

### <code>getCameraPos()</code> \{#getCameraPos}

返回观察者相机的坐标。

```lua
getCameraPos()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
client.getCameraPos()
```

---

### <code>getCameraRot()</code> \{#getCameraRot}

返回观察者相机的旋转。

```lua
getCameraRot()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
client.getCameraRot()
```

---

### <code>getCameraDir()</code> \{#getCameraDir}

返回一个指向相机朝向的单位向量。

```lua
getCameraDir()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**示例：**

```lua
client.getCameraDir()
```

---

### <code>getCameraEntity()</code> \{#getCameraEntity}

返回相机当前指向的实体，也就是你正在旁观的实体，包括你自己。

```lua
getCameraEntity()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**示例：**

```lua
client.getCameraEntity()
```

---

### <code>getFOV()</code> \{#getFOV}

返回客户端当前的 FOV 设置值，不包含速度、疾跑等额外效果的影响。

```lua
getFOV()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getFOV()
```

---

### <code>getWindowSize()</code> \{#getWindowSize}

以像素为单位返回 Minecraft 窗口的尺寸，格式为（宽度，高度）。

```lua
getWindowSize()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
client.getWindowSize()
```

---

### <code>getScaledWindowSize()</code> \{#getScaledWindowSize}

返回窗口在 Minecraft 内部 GUI 单位下的尺寸。

```lua
getScaledWindowSize()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
client.getScaledWindowSize()
```

---

### <code>getGuiScale()</code> \{#getGuiScale}

返回你当前“GUI 缩放”设置的值。

如果设置为自动，则返回当前实际生效的缩放值。

```lua
getGuiScale()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getGuiScale()
```

---

### <code>getMousePos()</code> \{#getMousePos}

以像素为单位返回鼠标位置，坐标相对于窗口左上角。

```lua
getMousePos()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**示例：**

```lua
client.getMousePos()
```

---

## 客户端状态

### <code>isPaused()</code> \{#isPaused}

如果客户端已暂停，则返回 true。

```lua
isPaused()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.isPaused()
```

---

### <code>isHudEnabled()</code> \{#isHudEnabled}

如果 HUD 已启用，则返回 true（按 F1 可关闭 HUD）。

```lua
isHudEnabled()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.isHudEnabled()
```

---

### <code>isDebugOverlayEnabled()</code> \{#isDebugOverlayEnabled}

如果 F3 调试界面当前已打开，则返回 true。

```lua
isDebugOverlayEnabled()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.isDebugOverlayEnabled()
```

---

### <code>getActiveResourcePacks()</code> \{#getActiveResourcePacks}

返回包含已启用资源包名称的 table。

```lua
getActiveResourcePacks()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
client.getActiveResourcePacks()
```

---

### <code>hasResource()</code> \{#hasResource}

检查指定资源是否存在于客户端资源中。

```lua
hasResource(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.hasResource()
```

---

### <code>getActiveLang()</code> \{#getActiveLang}

返回当前游戏语言的字符串表示。

```lua
getActiveLang()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getActiveLang()
```

---

### <code>isWindowFocused()</code> \{#isWindowFocused}

如果 Minecraft 窗口当前处于焦点状态，则返回 true。

```lua
isWindowFocused()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**示例：**

```lua
client.isWindowFocused()
```

---

### <code>getCurrentEffect()</code> \{#getCurrentEffect}

返回当前应用的着色器路径，用于旁观视野与普通情况不同的实体时。

通常返回 nil。

```lua
getCurrentEffect()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getCurrentEffect()
```

---

## 统计

### <code>getEntityCount()</code> \{#getEntityCount}

返回当前已加载的实体数量。

```lua
getEntityCount()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getEntityCount()
```

---

### <code>getEntityStatistics()</code> \{#getEntityStatistics}

返回包含客户端已加载实体信息的字符串。

该字符串会显示在 F3 菜单中。

```lua
getEntityStatistics()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getEntityStatistics()
```

---

### <code>getServerData()</code> \{#getServerData}

返回包含当前连接服务器信息的 table（单人世界同样适用）。

```lua
getServerData()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
client.getServerData()
```

---

### <code>getDate()</code> \{#getDate}

返回包含客户端当前时间信息的 table。

```lua
getDate()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
client.getDate()
```

---

### <code>getSystemTime()</code> \{#getSystemTime}

返回当前系统时间，单位为毫秒。

```lua
getSystemTime()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getSystemTime()
```

---

### <code>getFPS()</code> \{#getFPS}

获取客户端的 FPS。

如果 FPS 计数器尚未就绪，则返回 0（也可能是你的电脑确实太慢了）。

```lua
getFPS()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getFPS()
```

---

### <code>getFPSString()</code> \{#getFPSString}

获取客户端的 FPS 字符串，该字符串显示在 F3 菜单中。

其中包含 FPS、FPS 上限、垂直同步、云类型和生物群系混合半径等信息。

```lua
getFPSString()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getFPSString()
```

---

### <code>getFrameTime()</code> \{#getFrameTime}

返回上一个 tick 到下一个 tick 之间的当前进度比例。

这就是 RENDER 事件中作为“delta”传入的值。

```lua
getFrameTime()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getFrameTime()
```

---

### <code>getSoundStatistics()</code> \{#getSoundStatistics}

返回包含客户端当前正在播放的声音信息的字符串。

该字符串会显示在 F3 菜单中。

```lua
getSoundStatistics()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getSoundStatistics()
```

---

### <code>getMaxMemory()</code> \{#getMaxMemory}

返回 Minecraft 会尝试使用的最大内存量。

```lua
getMaxMemory()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getMaxMemory()
```

---

### <code>getAllocatedMemory()</code> \{#getAllocatedMemory}

返回 Minecraft 最多可能使用的内存量。

```lua
getAllocatedMemory()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getAllocatedMemory()
```

---

### <code>getUsedMemory()</code> \{#getUsedMemory}

返回 Minecraft 当前已使用的内存字节数。

```lua
getUsedMemory()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getUsedMemory()
```

---

### <code>getChunkStatistics()</code> \{#getChunkStatistics}

返回包含玩家所在区块信息的字符串。

该字符串会显示在 F3 菜单中。

```lua
getChunkStatistics()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getChunkStatistics()
```

---

### <code>getParticleCount()</code> \{#getParticleCount}

返回当前已加载的粒子数量。

```lua
getParticleCount()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getParticleCount()
```

---

### <code>isIntegratedServer()</code> \{#isIntegratedServer}

如果玩家连接的服务器是单人游戏，则返回 true。

```lua
isIntegratedServer()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Boolean](/tutorials/Types/Booleans)</code> | -           |

**示例：**

```lua
client.isIntegratedServer()
```

---

## 其他

### <code>getActionbar()</code> \{#getActionbar}

返回当前动作栏文本；动作栏不可见时返回 nil。

```lua
getActionbar()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getActionbar()
```

---

### <code>getAtlas()</code> \{#getAtlas}

返回一个 TextureAtlasAPI 对象，包含指定图集的信息。

如果未找到该图集，则返回 nil。

```lua
getAtlas(path)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[TextureAtlas](/globals/Textures/TextureAtlas)</code> | -           |

**示例：**

```lua
client.getAtlas()
```

---

### <code>getEnum()</code> \{#getEnum}

返回包含指定枚举各项的数组。

枚举列表可通过 /figura docs enums 查看。

```lua
getEnum(enumName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| enumName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
client.getEnum("ParentTypes")
```

---

### <code>getRegistry()</code> \{#getRegistry}

返回指定注册表中所有值的列表。

有效注册表的列表见 `registries` 枚举。

```lua
getRegistry(registryName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| registryName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
for _, variant in ipairs(client.getRegistry("frog_variant")) do
    print(variant)
end
```

---

### <code>getScoreboard()</code> \{#getScoreboard}

返回当前记分板的数据。多个记分板可以同时显示（侧边栏、队伍侧边栏、列表和名称下方），因此每个记分板会按显示位置分组。

```lua
getScoreboard()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
client.getScoreboard()
```

---

### <code>getSubtitle()</code> \{#getSubtitle}

返回当前副标题文本；标题或副标题不可见时返回 nil。

```lua
getSubtitle()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getSubtitle()
```

---

### <code>getTabList()</code> \{#getTabList}

返回包含玩家列表（tablist）中所显示文本的 table。

```lua
getTabList()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
client.getTabList()
```

---

### <code>getTextDimensions()</code> \{#getTextDimensions}

返回指定文本的宽度和高度，可按最大宽度换行并裁剪。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTextDimensions(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTextDimensions(text, maxWidth, wrap)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text     | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| maxWidth | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| wrap     | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
client.getTextDimensions("Example text", 40, true)
```

---

### <code>getTextHeight()</code> \{#getTextHeight}

以像素为单位返回指定文本的高度。

```lua
getTextHeight(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getTextHeight("Example text")
```

---

### <code>getTextWidth()</code> \{#getTextWidth}

以像素为单位返回指定文本的宽度。

文本有多行时，返回所有行中最宽的一行宽度。

```lua
getTextWidth(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**示例：**

```lua
client.getTextWidth("Example text")
```

---

### <code>getTitle()</code> \{#getTitle}

返回当前标题文本；标题不可见时返回 nil。

```lua
getTitle()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.getTitle()
```

---

### <code>getTranslatedString()</code> \{#getTranslatedString}

返回指定键对应的翻译字符串。

翻译使用客户端当前语言。

还可以额外传入单个参数，或包含全部参数的列表，用于填充翻译文本。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getTranslatedString(text)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
getTranslatedString(text, args)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| args | <code>AnyType</code>                            | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
client.getTranslatedString("figura.gui.wardrobe.drop_files")
```

---

### <code>generateUUID()</code> \{#generateUUID}

生成一个随机 UUID。

```lua
generateUUID()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[1]     |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[2]     |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[3]     |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[4]     |

**示例：**

```lua
local a, b, c, d = client.generateUUID()
```

---

### <code>intUUIDToString()</code> \{#intUUIDToString}

把整数数组形式的 UUID（以 4 个独立参数传入）转换为十六进制字符串表示。

```lua
intUUIDToString(a, b, c, d)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| a    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| c    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| d    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
client.intUUIDToString()
```

---

### <code>listAtlases()</code> \{#listAtlases}

返回所有已注册图集的路径列表。

```lua
listAtlases()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**示例：**

```lua
client.listAtlases()
```

---

### <code>uuidToIntArray()</code> \{#uuidToIntArray}

把字符串形式的 UUID 转换为整数数组表示，返回四个独立的整数。

```lua
uuidToIntArray(uuid)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| uuid | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[1]     |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[2]     |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[3]     |
| <code>[Integer](/tutorials/types/Numbers)</code> | uuid[4]     |

**示例：**

```lua
local a, b, c, d = client.uuidToIntArray("5003b2ce-7a8d-4c56-8b91-ec705985fe08")
```

---
