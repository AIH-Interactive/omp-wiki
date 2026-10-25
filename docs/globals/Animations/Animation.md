---
title: Animation（动画）
sidebar_label: Animation（动画）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

本页介绍操作具体 Blockbench 动画的方法。

本页所有示例均假定：

```lua
local myAnim = animations.myModel.myAnimation
```

（并假定这是一条有效的动画路径。）

关于动画索引的说明，请参阅[动画教程](/tutorials/Animations)。

---

## 播放与停止 \{#Play-Stop}

### <code>play()</code> \{#play}

初始化动画。

如果动画处于暂停状态，则继续播放。

```lua
play()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:play()
```

---

### <code>stop()</code> \{#stop}

停止动画。

```lua
stop()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:stop()
```

---

### <code>pause()</code> \{#pause}

暂停动画的播放。

```lua
pause()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:pause()
```

---

### <code>restart()</code> \{#restart}

重新开始动画。

如果动画已停止，则直接播放。

先停止再播放也能得到相同的效果。

```lua
restart()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:restart()
```

---

### <code>setPlaying()</code> \{#setPlaying}

**别名：** `playing()`

把“播放”和“停止”合并为一个函数。

接受一个布尔参数：为 true 时播放动画，为 false 时停止动画。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPlaying()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setPlaying(bool)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | 布尔值，决定动画播放还是停止 | `false` |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
-- This example would be in a function like a tick event
local crouching = player:getPose() == "CROUCHING"
-- highlight-next-line
myAnim:setPlaying(crouching)
```

---

### <code>isPlaying()</code> \{#isPlaying}

检查动画是否正在播放。

```lua
isPlaying()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | --------------------------------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 动画正在播放时返回 true，否则返回 false |

**示例：**

```lua
myAnim:isPlaying()
```

---

### <code>isStopped()</code> \{#isStopped}

检查动画是否已停止。

```lua
isStopped()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | --------------------------------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 动画已停止时返回 true，否则返回 false |

**示例：**

```lua
myAnim:isStopped()
```

---

### <code>isPaused()</code> \{#isPaused}

检查动画是否已暂停。

```lua
isPaused()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | -------------------------------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 动画已暂停时返回 true，否则返回 false |

**示例：**

```lua
myAnim:isPaused()
```

---

### <code>isHolding()</code> \{#isHolding}

检查该动画是否停留在最后一帧。

```lua
isHolding()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | --------------------------------------------------------------- |
| <code>[Boolean](/tutorials/Types/Booleans)</code> | 动画正在停留时返回 true，否则返回 false |

---

### <code>getPlayState()</code> \{#getPlayState}

获取动画的播放状态。

```lua
getPlayState()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ------------------------------------------ |
| <code>[String](/tutorials/types/Strings)</code> | 返回[播放状态](/enums/PlayStates) |

**示例：**

```lua
myAnim:getPlayState()
```

---

## 时间控制 \{#Timing}

### <code>setSpeed()</code> \{#setSpeed}

**别名：** `speed()`

设置动画的播放速度。

传入负数可让动画反向播放。

默认速度为 1，2 表示两倍速，0.5 表示半速。

```lua
setSpeed(speed)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ----------------------------------------------- | -------------------------- | ------- |
| speed | <code>[Number](/tutorials/types/Numbers)</code> | 设置动画的播放速度 | `1`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setSpeed(2)
```

---

### <code>getSpeed()</code> \{#getSpeed}

获取动画的播放速度。

```lua
getSpeed()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | --------------------------------- |
| <code>[Number](/tutorials/types/Numbers)</code> | 动画速度，数值形式 |

**示例：**

```lua
myAnim:getSpeed()
```

---

### <code>setLength()</code> \{#setLength}

**别名：** `length()`

设置动画的长度，单位为秒。

```lua
setLength(length)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ------------------------------ | ------- |
| length | <code>[Number](/tutorials/types/Numbers)</code> | 时长，单位为秒 | `0`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setLength(2)
```

---

### <code>getLength()</code> \{#getLength}

获取动画的长度，单位为秒。

```lua
getLength()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ------------------------------------------ |
| <code>[Number](/tutorials/types/Numbers)</code> | 动画长度，单位为秒 |

**示例：**

```lua
myAnim:getLength()
```

---

### <code>setPriority()</code> \{#setPriority}

**别名：** `priority()`

设置动画的优先级。

高优先级动画会覆盖低优先级动画，而不是与之混合。

动画的默认优先级为 0。

```lua
setPriority(priority)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ------------------------------------------------ | ------------------------------------------------ | ------- |
| priority | <code>[Integer](/tutorials/types/Numbers)</code> | 动画优先级，整数 | `0`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setPriority(1)
```

---

### <code>getPriority()</code> \{#getPriority}

获取动画的优先级。

```lua
getPriority()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------ | --------------------------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | 动画的优先级数值 |

**示例：**

```lua
myAnim:getPriority()
```

---

### <code>setTime()</code> \{#setTime}

**别名：** `time()`

设置动画当前的播放时间，单位为秒。

```lua
setTime(time)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | -------------------------------------------- | ------- |
| time | <code>[Number](/tutorials/types/Numbers)</code> | 要把动画设置到的时间，单位为秒 | `0`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setTime(1.5)
```

---

### <code>getTime()</code> \{#getTime}

获取动画当前的播放时间，单位为秒。

```lua
getTime()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ------------------------------------------ |
| <code>[Number](/tutorials/types/Numbers)</code> | 动画的播放时间 |

**示例：**

```lua
myAnim:getTime()
```

---

### <code>setOffset()</code> \{#setOffset}

**别名：** `offset()`

设置动画每次循环跳过的时长，单位为秒。

每次循环都会跳过这段时长。

```lua
setOffset(offset)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ------ | ----------------------------------------------- | ------------------------------------- | ------- |
| offset | <code>[Number](/tutorials/types/Numbers)</code> | 每次循环跳过的时长，单位为秒 | `0`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setOffset(1.75)
```

---

### <code>getOffset()</code> \{#getOffset}

获取动画的偏移时间，单位为秒。

```lua
getOffset()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------------------------------------------- |
| <code>[Number](/tutorials/types/Numbers)</code> | 每次循环跳过的时长，单位为秒 |

**示例：**

```lua
myAnim:getOffset()
```

---

### <code>setLoop()</code> \{#setLoop}

**别名：** `loop()`

设置动画的[循环模式](/enums/Loop-Modes)。

```lua
setLoop(loop)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | -------------------------------------- | -------- |
| loop | <code>[String](/tutorials/types/Strings)</code> | 设置[循环模式](/enums/Loop-Modes) | 必填 |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setLoop("ONCE")
```

---

### <code>getLoop()</code> \{#getLoop}

获取动画的循环模式。

```lua
getLoop()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | 返回[循环模式](/enums/Loop-Modes) |

**示例：**

```lua
myAnim:getLoop()
```

---

### <code>setBlend()</code> \{#setBlend}

**别名：** `blend()`

设置动画关键帧的混合系数，也就是动画的强度。

```lua
setBlend(blend)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ----------------------------------------------- | -------------------------------------------- | ------- |
| blend | <code>[Number](/tutorials/types/Numbers)</code> | 混合系数强度，取值在 0 到 1 之间 | `1`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setBlend(.5)
```

---

### <code>getBlend()</code> \{#getBlend}

获取动画关键帧的混合系数，也就是动画的强度。

```lua
getBlend()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ----------------------------------------------------- |
| <code>[Number](/tutorials/types/Numbers)</code> | 混合系数强度，取值在 0 到 1 之间 |

**示例：**

```lua
myAnim:getBlend()
```

---

### <code>setStartDelay()</code> \{#setStartDelay}

**别名：** `startDelay()`

设置动画初始化前需要等待的时长，单位为秒。

注意：等待期间，动画仍被视为正在播放。

```lua
setStartDelay(delay)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ----------------------------------------------- | --------------------------------------- | ------- |
| delay | <code>[Number](/tutorials/types/Numbers)</code> | 要设置的延迟时长，单位为秒 | `0`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setStartDelay(1)
```

---

### <code>getStartDelay()</code> \{#getStartDelay}

获取动画的启动延迟，单位为秒。

```lua
getStartDelay()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ------------------------------------------- |
| <code>[Number](/tutorials/types/Numbers)</code> | 延迟的时长，单位为秒 |

**示例：**

```lua
myAnim:getStartDelay()
```

---

### <code>setLoopDelay()</code> \{#setLoopDelay}

**别名：** `loopDelay()`

设置动画每次循环之间等待的时长，单位为秒。

```lua
setLoopDelay(delay)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ----- | ----------------------------------------------- | --------------------------------------- | ------- |
| delay | <code>[Number](/tutorials/types/Numbers)</code> | 要设置的延迟时长，单位为秒 | `0`     |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setLoopDelay(1)
```

---

### <code>getLoopDelay()</code> \{#getLoopDelay}

获取动画的循环延迟，单位为秒。

```lua
getLoopDelay()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ------------------------------------------- |
| <code>[Number](/tutorials/types/Numbers)</code> | 延迟的时长，单位为秒 |

**示例：**

```lua
myAnim:getLoopDelay()
```

---

## 覆盖 \{#Overriding}

### <code>setOverride()</code> \{#setOverride}

**别名：** `override()`

设置该动画是否覆盖其所有部件的原版变换。

等同于同时调用“overrideRot”“overridePos”和“overrideScale”。

```lua
setOverride(override)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| override | <code>[Boolean](/tutorials/types/Booleans)</code> | 布尔值，表示是否覆盖所有变换 | `false` |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setOverride(true)
```

---

### <code>setOverrideRot()</code> \{#setOverrideRot}

**别名：** `overrideRot()`

设置该动画是否覆盖其部件的原版旋转。

```lua
setOverrideRot(override)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ------------------------------------------------- | --------------------------------------------------------- | ------- |
| override | <code>[Boolean](/tutorials/types/Booleans)</code> | 布尔值，表示是否覆盖旋转 | `false` |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setOverrideRot(true)
```

---

### <code>getOverrideRot()</code> \{#getOverrideRot}

获取该动画是否覆盖其部件的原版旋转。

```lua
getOverrideRot()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ------------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 是否覆盖旋转 |

**示例：**

```lua
myAnim:getOverrideRot()
```

---

### <code>setOverridePos()</code> \{#setOverridePos}

**别名：** `overridePos()`

设置该动画是否覆盖其部件的原版位置。

```lua
setOverridePos(override)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ------------------------------------------------- | --------------------------------------------------------- | ------- |
| override | <code>[Boolean](/tutorials/types/Booleans)</code> | 布尔值，表示是否覆盖位置 | `false` |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setOverridePos(true)
```

---

### <code>getOverridePos()</code> \{#getOverridePos}

获取该动画是否覆盖其部件的原版位置。

```lua
getOverridePos()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ------------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 是否覆盖位置 |

**示例：**

```lua
myAnim:getOverridePos()
```

---

### <code>setOverrideScale()</code> \{#setOverrideScale}

**别名：** `overrideScale()`

设置该动画是否覆盖其部件的原版缩放。

```lua
setOverrideScale(override)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| -------- | ------------------------------------------------- | ------------------------------------------------------ | ------- |
| override | <code>[Boolean](/tutorials/types/Booleans)</code> | 布尔值，表示是否覆盖缩放 | `false` |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:setOverrideScale(true)
```

---

### <code>getOverrideScale()</code> \{#getOverrideScale}

获取该动画是否覆盖其部件的原版缩放。

```lua
getOverrideScale()
```

**返回：**

| 类型 | 说明 |
| ------------------------------------------------- | ---------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 是否覆盖缩放 |

**示例：**

```lua
myAnim:getOverrideScale()
```

---

## 其他 \{#Misc}

### <code>getName()</code> \{#getName}

返回该动画的名称。

```lua
getName()
```

**返回：**

| 类型 | 说明 |
| ----------------------------------------------- | ---------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | 动画的名称 |

**示例：**

```lua
myAnim:getName()
```

---

### <code>newCode()</code> \{#newCode}

在指定的时间点添加一段要运行的代码。

如果该时间点已有代码，会被覆盖。

```lua
newCode(time, code)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| ---- | ----------------------------------------------- | -------------------------------------- | -------- |
| time | <code>[Number](/tutorials/types/Numbers)</code> | 要添加代码的时间点，单位为秒 | `0`      |
| code | <code>[String](/tutorials/types/Strings)</code> | 在该时间点运行的代码 | 必填 |

**返回：**

| 类型 | 说明 |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | 返回该动画，便于链式调用 |

**示例：**

```lua
myAnim:newCode(0.5, "log('Hello World')")
```

---

## 字段

### <code>name</code> \{#name}

该动画的名称。

**示例：**

```lua
myAnim.name
```

---
