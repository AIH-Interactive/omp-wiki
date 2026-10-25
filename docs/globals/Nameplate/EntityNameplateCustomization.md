---
title: EntityNameplateCustomization（实体名牌定制）
sidebar_label: EntityNameplateCustomization（实体名牌定制）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

专用于实体的名牌定制。

:::warning
本页仍在完善中。已收录 Figura 文档中的全部信息，我们正在补充更易懂的说明。
:::

---

## 文本

### <code>setText()</code> \{#setText}

该名牌显示的文本。

```lua
setText(text)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| text | <code>[String](/tutorials/types/Strings)</code> | -    | -      |

**返回值：**

| 类型                                                                             | 说明 |
| -------------------------------------------------------------------------------- | ---- |
| <code>[NameplateCustomization](/globals/Nameplate/NameplateCustomization)</code> | -    |

**示例：**

```lua
nameplate.Entity:setText("Hi")
```

---

### <code>getText()</code> \{#getText}

该名牌显示的文本。

```lua
getText()
```

**返回值：**

| 类型                                            | 说明 |
| ----------------------------------------------- | ---- |
| <code>[String](/tutorials/types/Strings)</code> | -    |

**示例：**

```lua
nameplate.Entity:getText()
```

---

### <code>setOutline()</code> \{#setOutline}

**别名：** `outline()`

设置名牌是否显示描边。

与 “shadow” 设置不兼容。

```lua
setOutline(outline)
```

**参数：**

| 名称    | 类型                                              | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ---- | ------ |
| outline | <code>[Boolean](/tutorials/types/Booleans)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
nameplate.Entity:setOutline(true)
```

---

### <code>hasOutline()</code> \{#hasOutline}

获取名牌是否显示描边。

```lua
hasOutline()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
nameplate.Entity:hasOutline()
```

---

### <code>setOutlineColor()</code> \{#setOutlineColor}

**别名：** `outlineColor()`

设置描边模式下使用的描边颜色。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setOutlineColor(color)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setOutlineColor(r, g, b)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
nameplate.Entity:setOutlineColor(100 / 255, 100 / 255, 100 / 255)
```

---

### <code>setShadow()</code> \{#setShadow}

**别名：** `shadow()`

设置名牌是否显示阴影。

与 “outline” 设置不兼容。

```lua
setShadow(shadow)
```

**参数：**

| 名称   | 类型                                              | 说明 | 默认值 |
| ------ | ------------------------------------------------- | ---- | ------ |
| shadow | <code>[Boolean](/tutorials/types/Booleans)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
nameplate.Entity:setShadow(true)
```

---

### <code>hasShadow()</code> \{#hasShadow}

获取名牌是否显示阴影。

```lua
hasShadow()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
nameplate.Entity:hasShadow()
```

---

## 名牌属性

### <code>setBackgroundColor()</code> \{#setBackgroundColor}

**别名：** `backgroundColor()`

设置名牌背景的颜色。

如果不传入 alpha 值，将使用原版数值（即无障碍设置中的数值）。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setBackgroundColor(rgba)
```

**参数：**

| 名称 | 类型                                             | 说明 | 默认值 |
| ---- | ------------------------------------------------ | ---- | ------ |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setBackgroundColor(r, g, b, a)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
nameplate.Entity:setBackgroundColor(100 / 255, 100 / 255, 100 / 255)
```

---

### <code>getBackgroundColor()</code> \{#getBackgroundColor}

获取已设置的名牌背景颜色。

```lua
getBackgroundColor()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -    |

**示例：**

```lua
nameplate.Entity:getBackgroundColor()
```

---

### <code>setLight()</code> \{#setLight}

**别名：** `light()`

设置光照覆盖值。

取值范围为 0 到 15，分别表示想使用的方块光照和天空光照等级。

传入 nil 会重置光照覆盖。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setLight(light)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| light | <code>[Vector2](/globals/Vectors/Vector2)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setLight(blockLight, skyLight)
```

**参数：**

| 名称       | 类型                                             | 说明 | 默认值 |
| ---------- | ------------------------------------------------ | ---- | ------ |
| blockLight | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |
| skyLight   | <code>[Integer](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
nameplate.Entity:setLight(15, 15)
```

---

### <code>getLight()</code> \{#getLight}

获取光照覆盖值。

```lua
getLight()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -    |

**示例：**

```lua
nameplate.Entity:getLight()
```

---

### <code>setPivot()</code> \{#setPivot}

**别名：** `pivot()`

设置名牌的枢轴，使用世界坐标。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPivot(pivot)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| pivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPivot(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
nameplate.Entity:setPivot(0, 3, 0)
```

---

### <code>getPivot()</code> \{#getPivot}

获取名牌的枢轴，使用世界坐标。

```lua
getPivot()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
nameplate.Entity:getPivot()
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置名牌的位置偏移，使用世界坐标。

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

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

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

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
nameplate.Entity:setPos(0, 1, 0)
```

---

### <code>getPos()</code> \{#getPos}

获取名牌的位置偏移，使用世界坐标。

```lua
getPos()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
nameplate.Entity:getPos()
```

---

### <code>setScale()</code> \{#setScale}

**别名：** `scale()`

设置名牌的缩放比例。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setScale(scale)
```

**参数：**

| 名称  | 类型                                             | 说明 | 默认值 |
| ----- | ------------------------------------------------ | ---- | ------ |
| scale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setScale(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值 |
| ---- | ----------------------------------------------- | ---- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
nameplate.Entity:setScale(2, 2, 2)
```

---

### <code>getScale()</code> \{#getScale}

获取名牌的缩放比例。

```lua
getScale()
```

**返回值：**

| 类型                                             | 说明 |
| ------------------------------------------------ | ---- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -    |

**示例：**

```lua
nameplate.Entity:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**别名：** `visible()`

设置名牌是否渲染。

```lua
setVisible(visible)
```

**参数：**

| 名称    | 类型                                              | 说明 | 默认值 |
| ------- | ------------------------------------------------- | ---- | ------ |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -    | -      |

**返回值：**

| 类型                                                                                         | 说明                   |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | 返回自身，便于链式调用 |

**示例：**

```lua
nameplate.Entity:setVisible(false)
```

---

### <code>isVisible()</code> \{#isVisible}

获取名牌是否渲染。

```lua
isVisible()
```

**返回值：**

| 类型                                              | 说明 |
| ------------------------------------------------- | ---- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -    |

**示例：**

```lua
nameplate.Entity:isVisible()
```

---
