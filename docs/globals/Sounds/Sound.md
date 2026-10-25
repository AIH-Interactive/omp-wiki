---
title: Sound（声音）
sidebar_label: Sound（声音）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

表示一个可播放的声音。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

通过索引 SoundAPI 获取。

它是 sounds:playSound() 的面向对象替代方案。

## 播放

### <code>play()</code> \{#play}

播放该声音，或继续播放已暂停的声音。

```lua
play()
```

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:play()
```

---

### <code>stop()</code> \{#stop}

停止播放该声音。

```lua
stop()
```

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:stop()
```

---

### <code>pause()</code> \{#pause}

暂停该声音当前的播放。

```lua
pause()
```

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:pause()
```

---

### <code>isPlaying()</code> \{#isPlaying}

:::caution

该函数不可靠，可能无法按预期工作。可行的替代做法是：在播放前先停止该声音（即使它并未在播放），以此重置播放状态。

:::

检查该声音是否正在播放。

```lua
isPlaying()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
mySound:isPlaying()
```

---

### <code>isLooping()</code> \{#isLooping}

检查该声音是否正在循环播放。

```lua
isLooping()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
mySound:isLooping()
```

---

## 声音属性

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置该声音的位置。

位置使用世界坐标。

默认值为 0。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPos(pos)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPos(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
mySound:setPos(player:getPos())
```

---

### <code>getPos()</code> \{#getPos}

获取该声音的位置。

```lua
getPos()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
mySound:getPos()
```

---

### <code>setAttenuation()</code> \{#setAttenuation}

**别名：** `attenuation()`

设置该声音的衰减。

默认值为 1。

```lua
setAttenuation(attenuation)
```

**参数：**

| 名称        | 类型                                            | 说明 | 默认值 |
| ----------- | ----------------------------------------------- | ---- | ------ |
| attenuation | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:setAttenuation(5)
```

---

### <code>getAttenuation()</code> \{#getAttenuation}

获取该声音的衰减值。

```lua
getAttenuation()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
mySound:getAttenuation()
```

---

### <code>setLoop()</code> \{#setLoop}

**别名：** `loop()`

切换该声音是否循环播放。

默认值为 false。

```lua
setLoop(loop)
```

**参数：**

| 名称 | 类型                                              | 说明 | 默认值 |
| ---- | ------------------------------------------------- | ---- | ------- |
| loop | <code>[Boolean](/tutorials/types/Booleans)</code> | -    | -       |

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:setLoop(true)
```

---

### <code>setPitch()</code> \{#setPitch}

**别名：** `pitch()`

设置该声音的音调。

默认值为 1。

```lua
setPitch(pitch)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------- |
| pitch | <code>[Number](/tutorials/types/Numbers)</code> | -    | -       |

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:setPitch(5)
```

---

### <code>getPitch()</code> \{#getPitch}

获取该声音的音调值。

```lua
getPitch()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
mySound:getPitch()
```

---

### <code>setSubtitle()</code> \{#setSubtitle}

**别名：** `subtitle()`

设置该声音的字幕文本。

```lua
setSubtitle(subtitle)
```

**参数：**

| 名称     | 类型                                            | 说明 | 默认值 |
| -------- | ----------------------------------------------- | ---- | ------- |
| subtitle | <code>[String](/tutorials/types/Strings)</code> | -    | -       |

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:setSubtitle("Bat ecolocates")
```

---

### <code>getSubtitle()</code> \{#getSubtitle}

获取该声音的字幕文本。

```lua
getSubtitle()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
mySound:getSubtitle()
```

---

### <code>setVolume()</code> \{#setVolume}

**别名：** `volume()`

设置该声音的音量。

默认值为 1。

```lua
setVolume(volume)
```

**参数：**

| 名称   | 类型                                            | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ---- | ------- |
| volume | <code>[Number](/tutorials/types/Numbers)</code> | -    | -       |

**返回值：**

| 类型                                  | 说明               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
mySound:setVolume(5)
```

---

### <code>getVolume()</code> \{#getVolume}

获取该声音的音量值。

```lua
getVolume()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[Number](/tutorials/types/Numbers)</code> | -    |

**示例：**

```lua
mySound:getVolume()
```

---
