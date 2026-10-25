---
title: Animations（动画 API）
sidebar_label: Animations（动画 API）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于控制 Blockbench 动画的全局 API。

---

### <code>stopAll()</code> \{#stopAll}

停止所有正在播放（以及已暂停）的动画。

```lua
stopAll()
```

**返回值：**

| 类型                                             | 说明               |
| ------------------------------------------------ | ------------------------- |
| <code>[AnimationAPI](/globals/Animations)</code> | 返回自身，以便链式调用 |

**示例：**

```lua
animations:stopAll()
```

---

### <code>getPlaying()</code> \{#getPlaying}

返回一个包含所有正在播放动画的表。

```lua
getPlaying()
```

**参数：**

| 名称 | 类型                                              | 说明                                         | 默认值 |
| ---- | ------------------------------------------------- | --------------------------------------------------- | ------- |
| hold | <code>[Boolean](/tutorials/Types/Booleans)</code> | 是否包含停在最后一帧的动画 | false   |

**返回值：**

| 类型                                          | 说明                                |
| --------------------------------------------- | ------------------------------------------ |
| <code>[Table](/tutorials/types/Tables)</code> | 当前正在播放的动画列表 |

**示例：**

```lua
logTable(animations:getPlaying())
```

---

### <code>getAnimations()</code> \{#getAnimations}

返回一个包含全部动画的表。

```lua
getAnimations()
```

**返回值：**

| 类型                                          | 说明                            |
| --------------------------------------------- | -------------------------------------- |
| <code>[Table](/tutorials/types/Tables)</code> | 所有模型中全部动画的列表 |

**示例：**

```lua
logTable(animations:getAnimations())
```

---
