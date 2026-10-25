---
title: Action（动作）
sidebar_label: Action（动作）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Figura 动作轮盘中的一个动作。

动作支持点击与滚动操作，也可以切换开关状态。

本页示例统一假定：

```lua
local myPage = action_wheel:newPage()
local myAction = myPage:newAction()
```

---

## 动作事件

### <code>setOnLeftClick()</code> \{#setOnLeftClick}

**别名：** `onLeftClick()`

设置左键点击时执行的函数。

该函数接收一个参数。

第一个参数是此动作本身。

完整示例见[动作轮盘教程](/tutorials/ActionWheel#here-is-the-full-copy-paste-for-an-example-action-wheel)。

```lua
setOnLeftClick(leftFunction)
```

**参数：**

| 名称         | 类型                                                | 说明                                                   | 默认值  |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------- | -------- |
| leftFunction | <code>[Function](/tutorials/types/Functions)</code> | 左键点击动作时执行的函数 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
function pings.lefty()
    print("I left clicked this button!")
end

-- highlight-next-line
myAction:setOnLeftClick(pings.lefty)
```

---

### <code>setOnRightClick()</code> \{#setOnRightClick}

**别名：** `onRightClick()`

设置右键点击时执行的函数。

该函数接收一个参数。

第一个参数是此动作本身。

```lua
setOnRightClick(rightFunction)
```

**参数：**

| 名称          | 类型                                                | 说明                                                    | 默认值  |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------- | -------- |
| rightFunction | <code>[Function](/tutorials/types/Functions)</code> | 右键点击动作时执行的函数 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
function pings.righty()
    print("I right clicked this button!")
end

-- highlight-next-line
myAction:setOnRightClick(pings.righty)
```

---

### <code>setOnToggle()</code> \{#setOnToggle}

**别名：** `onToggle()`

设置动作切换开关状态时执行的函数。

该函数接收两个参数。

第一个参数是此动作的开关状态。

第二个参数是此动作本身。

完整示例见[动作轮盘教程](/tutorials/ActionWheel#toggle-example)。

```lua
setOnToggle(toggleFunction)
```

**参数：**

| 名称           | 类型                                                | 说明                                              | 默认值  |
| -------------- | --------------------------------------------------- | -------------------------------------------------------- | -------- |
| toggleFunction | <code>[Function](/tutorials/types/Functions)</code> | 动作切换开关状态时执行的函数 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
function pings.setVisible(state)
    models:setVisible(state) -- toggles the visibility of the entire avatar because state swaps between true and false every click
end

myAction:setOnToggle(pings.setVisible)
```

---

### <code>setOnUntoggle()</code> \{#setOnUntoggle}

**别名：** `onUntoggle()`

:::warning

此方法容易误用；[`setOnToggle`](#setOnToggle) 能更好地完成它的一切功能，因为 `setOnToggle` 在取消切换时也会执行其函数。

:::

设置动作取消切换时执行的函数。

该函数接收两个参数。

第一个参数是此动作的开关状态。

第二个参数是此动作本身。

```lua
setOnUntoggle(toggleFunction)
```

**参数：**

| 名称           | 类型                                                | 说明                                                | 默认值  |
| -------------- | --------------------------------------------------- | ---------------------------------------------------------- | -------- |
| toggleFunction | <code>[Function](/tutorials/types/Functions)</code> | 动作取消切换时执行的函数 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
function pings.toggley(bool)
    print('This is always true: ', .. bool) -- this is always true because setOnUnToggle changes the behavior of setOnToggle. Without setOnUnToggle this would swap between true and false
end

function pings.untoggley(bool)
    print('This is always false: ' .. bool)
end

local myAction = myPage:newAction()
    :setOnToggle(pings.toggley)
-- highlight-start
    :setOnUntoggle(pings.untoggley)
-- highlight-end
```

---

### <code>setOnScroll()</code> \{#setOnScroll}

**别名：** `onScroll()`

设置滚动鼠标滚轮时执行的函数。

该函数接收两个参数。

第一个参数是鼠标滚轮方向。

第二个参数是此动作本身。

```lua
setOnScroll(scrollFunction)
```

**参数：**

| 名称           | 类型                                                | 说明                                                    | 默认值  |
| -------------- | --------------------------------------------------- | -------------------------------------------------------------- | -------- |
| scrollFunction | <code>[Function](/tutorials/types/Functions)</code> | 在动作上滚动鼠标滚轮时执行的函数 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
function pings.scrolling(dir)
    log(dir)
    if dir > 0 then
        log("Scrolled up")
    else
        log("Scrolled down")
    end
end

-- highlight-start
myAction:setOnScroll(pings.scrolling)
-- highlight-end
```

---

## 外观

### <code>setColor()</code> \{#setColor}

**别名：** `color()`

设置动作的背景颜色。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setColor(color)
```

**参数：**

| 名称  | 类型                                             | 说明                                                      | 默认值      |
| ----- | ------------------------------------------------ | ---------------------------------------------------------------- | ------------ |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | 背景的 RGB 值，每个分量取值为 0 到 1 | `vec(0,0,0)` |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setColor(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明                                        | 默认值 |
| ---- | ----------------------------------------------- | -------------------------------------------------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | 背景的红色分量，取值为 0 到 1   | `0`     |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | 背景的绿色分量，取值为 0 到 1 | `0`     |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | 背景的蓝色分量，取值为 0 到 1  | `0`     |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
myAction:setColor(255 / 255, 192 / 155, 203 / 255)
```

---

### <code>getColor()</code> \{#getColor}

获取此动作的背景颜色。

```lua
getColor()
```

**返回值：**

| 类型                                             | 说明                              |
| ------------------------------------------------ | ---------------------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 此动作的 RGB 背景色 |

**示例：**

```lua
myAction:getColor()
```

---

### <code>setHoverColor()</code> \{#setHoverColor}

**别名：** `hoverColor()`

设置鼠标悬停于此动作时的背景颜色。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setHoverColor(color)
```

**参数：**

| 名称  | 类型                                             | 说明                                                      | 默认值      |
| ----- | ------------------------------------------------ | ---------------------------------------------------------------- | ------------ |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | 背景的 RGB 值，每个分量取值为 0 到 1 | `vec(0,0,0)` |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setHoverColor(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明                                        | 默认值 |
| ---- | ----------------------------------------------- | -------------------------------------------------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | 背景的红色分量，取值为 0 到 1   | `0`     |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | 背景的绿色分量，取值为 0 到 1 | `0`     |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | 背景的蓝色分量，取值为 0 到 1  | `0`     |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myAction:setHoverColor(255 / 255, 192 / 155, 203 / 255)
```

---

### <code>getHoverColor()</code> \{#getHoverColor}

获取此动作的悬停背景颜色。

```lua
getHoverColor()
```

**返回值：**

| 类型                                             | 说明                                    |
| ------------------------------------------------ | ---------------------------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 此动作的 RGB 悬停背景色 |

**示例：**

```lua
myAction:getHoverColor()
```

---

### <code>setHoverItem()</code> \{#setHoverItem}

**别名：** `hoverItem()`

设置鼠标悬停于此动作时显示的物品。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setHoverItem(item)
```

**参数：**

| 名称 | 类型                                               | 说明                         | 默认值 |
| ---- | -------------------------------------------------- | ----------------------------------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | 动作中显示的物品 | `nil`   |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setHoverItem(item)
```

**参数：**

| 名称 | 类型                                            | 说明                        | 默认值           |
| ---- | ----------------------------------------------- | ---------------------------------- | ----------------- |
| item | <code>[String](/tutorials/types/Strings)</code> | 要设置的物品 ID | `"minecraft:air"` |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
myAction:setHoverItem("diamond")
```

---

### <code>setHoverTexture()</code> \{#setHoverTexture}

**别名：** `hoverTexture()`

设置鼠标悬停于此动作时渲染的自定义纹理。

所有数值均以像素为单位。

默认 UV 的 u、v 坐标均为 0，默认尺寸为纹理尺寸，默认缩放为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setHoverTexture(texture)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setHoverTexture(texture, u, v)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填 |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`      |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`      |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setHoverTexture(texture, u, v, width, height)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 宽度                    | 纹理宽度  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 高度                   | 纹理高度 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
setHoverTexture(texture, u, v, width, height, scale)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 宽度                    | 纹理宽度  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 高度                   | 纹理高度 |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | 纹理缩放               | `1`            |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- basic
myAction:setHoverTexture(textures["myTexture"])

-- advanced
myAction:setHoverTexture(textures["myTexture"], 16, 32, nil, nil, 2)
```

---

### <code>setItem()</code> \{#setItem}

**别名：** `item()`

设置动作中显示的物品。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setItem(item)
```

**参数：**

| 名称 | 类型                                               | 说明                         | 默认值 |
| ---- | -------------------------------------------------- | ----------------------------------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | 动作中显示的物品 | `nil`   |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setItem(item)
```

**参数：**

| 名称 | 类型                                            | 说明                        | 默认值           |
| ---- | ----------------------------------------------- | ---------------------------------- | ----------------- |
| item | <code>[String](/tutorials/types/Strings)</code> | 要设置的物品 ID | `"minecraft:air"` |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
myAction:setItem("minecraft:stone")
```

---

### <code>setTexture()</code> \{#setTexture}

**别名：** `texture()`

设置在此动作中渲染的自定义纹理。

所有数值均以像素为单位。

默认 UV 的 u、v 坐标均为 0，默认尺寸为纹理尺寸，默认缩放为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setTexture(texture)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setTexture(texture, u, v)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填 |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`      |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`      |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setTexture(texture, u, v, width, height)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 宽度                    | 纹理宽度  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 高度                   | 纹理高度 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
setTexture(texture, u, v, width, height, scale)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 宽度                    | 纹理宽度  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 高度                   | 纹理高度 |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | 纹理缩放               | `1`            |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- basic
myAction:setTexture(textures["myTexture"])

-- advanced
myAction:setTexture(textures["myTexture"], 16, 32, nil, nil, 2)
```

---

### <code>setTitle()</code> \{#setTitle}

**别名：** `title()`

设置动作的标题。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setTitle()
```

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setTitle(title)
```

**参数：**

| 名称  | 类型                                            | 说明                                                    | 默认值 |
| ----- | ----------------------------------------------- | -------------------------------------------------------------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | 动作标题，在鼠标悬停于动作上时显示 | `nil`   |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
myAction:setTitle("Click me!")
```

---

### <code>getTitle()</code> \{#getTitle}

获取此动作的标题。

```lua
getTitle()
```

**返回值：**

| 类型                                            | 说明                                                    |
| ----------------------------------------------- | -------------------------------------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | 动作标题，在鼠标悬停于动作上时显示 |

**示例：**

```lua
myAction:getTitle()
```

---

## 开关相关

### <code>setToggleColor()</code> \{#setToggleColor}

**别名：** `toggleColor()`

设置动作处于开启状态时的颜色。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setToggleColor(color)
```

**参数：**

| 名称  | 类型                                             | 说明                                                             | 默认值     |
| ----- | ------------------------------------------------ | ----------------------------------------------------------------------- | ----------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | 开关状态下背景的 RGB 值，每个分量取值为 0 到 1 | `vec(0,0,0) |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setToggleColor(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明                                               | 默认值 |
| ---- | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | 开关状态下背景的红色分量，取值为 0 到 1   | `0`     |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | 开关状态下背景的绿色分量，取值为 0 到 1 | `0`     |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | 开关状态下背景的蓝色分量，取值为 0 到 1  | `0`     |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myAction:setToggleColor(0, 128 / 255, 128 / 255)
```

---

### <code>getToggleColor()</code> \{#getToggleColor}

获取此动作处于开启状态时的颜色。

```lua
getToggleColor()
```

**返回值：**

| 类型                                             | 说明                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 开关状态下背景的 RGB 值，每个分量取值为 0 到 1 |

**示例：**

```lua
myAction:getToggleColor()
```

---

### <code>setToggleItem()</code> \{#setToggleItem}

**别名：** `toggleItem()`

设置动作处于开启状态时显示的物品。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setToggleItem(item)
```

**参数：**

| 名称 | 类型                                               | 说明                     | 默认值 |
| ---- | -------------------------------------------------- | ------------------------------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | 切换开关状态时要设置的物品 | `nil`   |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setToggleItem(item)
```

**参数：**

| 名称 | 类型                                            | 说明                                     | 默认值           |
| ---- | ----------------------------------------------- | ----------------------------------------------- | ----------------- |
| item | <code>[String](/tutorials/types/Strings)</code> | 切换开关状态时要设置的物品 ID | `"minecraft:air"` |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
myAction:setToggleItem("armor_stand")
```

---

### <code>setToggleTexture()</code> \{#setToggleTexture}

**别名：** `toggleTexture()`

设置动作处于开启状态时渲染的自定义纹理。

所有数值均以像素为单位。

默认 UV 的 u、v 坐标均为 0，默认尺寸为纹理尺寸，默认缩放为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setToggleTexture(texture)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setToggleTexture(texture, u, v)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填 |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`      |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`      |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setToggleTexture(texture, u, v, width, height)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 宽度                    | 纹理宽度  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 高度                   | 纹理高度 |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
setToggleTexture(texture, u, v, width, height, scale)
```

**参数：**

| 名称    | 类型                                              | 说明                            | 默认值        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | 动作中显示的纹理 | 必填       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 u 坐标               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | UV 的 v 坐标               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 宽度                    | 纹理宽度  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | UV 高度                   | 纹理高度 |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | 纹理缩放               | `1`            |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- basic
myAction:setToggleTexture(textures["myToggleTexture"])

-- advanced
myAction:setToggleTexture(textures["myTexture"], 16, 32, nil, nil, 2)
```

---

### <code>setToggleTitle()</code> \{#setToggleTitle}

**别名：** `toggleTitle()`

设置动作处于开启状态时的标题。

```lua
setToggleTitle(title)
```

**参数：**

| 名称  | 类型                                            | 说明                                                    | 默认值 |
| ----- | ----------------------------------------------- | -------------------------------------------------------------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | 动作标题，在鼠标悬停于动作上时显示 | `nil`   |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myAction:setToggleTitle("Stand")
```

---

### <code>getToggleTitle()</code> \{#getToggleTitle}

获取此动作处于开启状态时的标题。

```lua
getToggleTitle()
```

**返回值：**

| 类型                                            | 说明                                                    |
| ----------------------------------------------- | -------------------------------------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | 动作标题，在鼠标悬停于动作上时显示 |

**示例：**

```lua
myAction:getToggleTitle()
```

---

### <code>setToggled()</code> \{#setToggled}

**别名：** `toggled()`

设置动作的开关状态。

```lua
setToggled(bool)
```

**参数：**

| 名称 | 类型                                              | 说明                                                | 默认值 |
| ---- | ------------------------------------------------- | ---------------------------------------------------------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | 为 true 时开启开关，为 false 时关闭开关 | `false` |

**返回值：**

| 类型                                                | 说明               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
myAction:setToggled(true)
```

---

### <code>isToggled()</code> \{#isToggled}

检查动作当前是否处于开启状态。

```lua
isToggled()
```

**返回值：**

| 类型                                              | 说明                                      |
| ------------------------------------------------- | ------------------------------------------------ |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 为 true 时开关已开启，为 false 时开关已关闭 |

**示例：**

```lua
myAction:isToggled()
```

---

## 字段

### <code>leftClick</code> \{#leftClick}

左键点击时执行的函数。

该函数接收一个参数。

第一个参数是此动作本身。

**示例：**

```lua
-- pingless example
function myAction.leftClick()
    log("Left click")
end
```

```lua
-- pinged example
function pings.example()
    log("Left click")
end

myAction.leftClick = pings.example
```

---

### <code>rightClick</code> \{#rightClick}

右键点击时执行的函数。

该函数接收一个参数。

第一个参数是此动作本身。

**示例：**

```lua
function myAction.rightClick()
    log("Right click")
end
```

---

### <code>toggle</code> \{#toggle}

动作切换开关状态时执行的函数。

该函数接收两个参数。

第一个参数是此动作的开关状态。

第二个参数是此动作本身。

**示例：**

```lua
function myAction.toggle(bool)
    log("The toggle is " .. tostring(bool))
end
```

---

### <code>untoggle</code> \{#untoggle}

动作取消切换时执行的函数。

该函数接收两个参数。

第一个参数是此动作的开关状态。

第二个参数是此动作本身。

**示例：**

```lua
function myAction.untoggle(bool)
    log("The toggle is " .. tostring(bool))
end
```

---

### <code>scroll</code> \{#scroll}

滚动鼠标滚轮时执行的函数。

该函数接收两个参数。

第一个参数是鼠标滚轮方向。

第二个参数是此动作本身。

**示例：**

```lua
function myAction.scroll(dir)
    log(dir)
    if dir > 0 then
        log("Scrolling up")
    else
        log("Scrolling down")
    end
end
```

---

## OmniMorph 扩展

OmniMorph 的 YSM 动作使用独立接口 [`ysm_actions`](/scripting/ysm-actions)：

- 动作定义：`ysm_action`（标题、动画、页面、循环、模式、冷却、速度、物品）；
- 轮盘页/槽：添加、重命名、删除、交换、整理、自动填充；
- 触发/停止/查询；
- 键位绑定。

这类动作与原有的 Figura `Action` 不同，不能混用对象。完整说明见 [YSM 动作轮盘](/omnimorph/action-wheel)。
