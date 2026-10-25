---
title: 自发光纹理（Emissive Textures）
sidebar_label: 自发光纹理
---

import Emoji from '@site/src/components/Emoji';

本页介绍自发光纹理（Emissive Texture）的相关知识。

## 将纹理设为自发光

Blockbench 中的每个模型部件（ModelPart）都引用一张纹理。Figura 加载形象时，会查找与该模型部件使用的纹理同名、但末尾加上 <code>\_e</code> 的纹理。例如，使用 <Emoji icon="file/texture"/> <code>texture.png</code> 的模型部件，其自发光纹理会是 <Emoji icon="file/texture"/> <code>texture_e.png</code>。<br/>
<code>\_e</code> 是 Figura 加载形象时会查找的[纹理后缀](../start_here/BlockBench#texture-suffix)之一。

<img src={require("@site/static/img/emissive-example/names.png").default} width="400"></img>

## 自发光纹理的表现

<img src={require("@site/static/img/emissive-example/emissive.png").default} align="right"/>

使用 <code>"EMISSIVE"</code> [渲染类型](../enums/RenderTypes) 的纹理，其像素的解释方式与普通纹理不同。<br/>

首先，像素的 Alpha 值会被忽略。也就是说，自发光纹理本身无法呈现半透明：像素要么完全不透明，要么完全消失，没有中间状态。<br/>
在下图中，两个像素的渲染结果完全相同。虽然它们看起来是两种不同的颜色，但右侧颜色的 Alpha 值为 <code>139</code>，正在与 GitHub 的灰色背景混合。两者的 RGB 值完全相同，在 <code>"EMISSIVE"</code> 渲染类型下的渲染结果也完全一致。<br/>
<img src={require("@site/static/img/emissive-example/alpha.png").default} width="40"/>

其次，像素的“亮度”决定自发光的强度。如果你了解 HSV，控制这项属性的就是 Value。自发光强度既决定像素渲染得多亮，也决定它背后有多少像素能透出来。<br/>
在下图中，两个像素会渲染成相同的颜色。左侧像素以最大亮度渲染，不允许基础纹理的像素透出；右侧像素发光较弱，但允许基础纹理的像素透出。<br/>
<img src={require("@site/static/img/emissive-example/brightness.png").default} width="40"/>

## Iris 自发光

如果使用 Iris，那么无论当前是否启用自定义光影（shader），<code>"EMISSIVE"</code> 渲染类型都会被修改为在渲染自发光纹理时使用 Alpha 值。具体如何修改尚不清楚，需要自行实验。

## 自发光渲染类型

共有三种自发光渲染类型：EMISSIVE、EMISSIVE_SOLID 和 EYES。它们都**需要**原始的 \_e 纹理，并会让 \_e 纹理中对应的像素发光。

### EMISSIVE

这是 \_e 纹理的默认渲染类型。

### EMISSIVE_SOLID

与 EMISSIVE 类似，但不允许透明，透明像素会渲染成黑色。

### EYES

与末影人、蜘蛛眼睛相同的渲染类型。处于隐身效果下时，它不会让发光的像素显示出来。

### 设置渲染类型示例

说明：使用这些渲染类型时仍然需要 \_e 纹理，它们只是改变该纹理的渲染方式。

可以这样把渲染类型设为 “Eyes”：

```lua
models:setSecondaryRenderType("Eyes")
```

注意：纸娃娃和头颅上的发光效果可能略有不同。
