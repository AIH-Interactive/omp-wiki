---
sidebar_position: 7
title: 使用 Blockbench
sidebar_label: Blockbench
---

import Emoji from '@site/src/components/Emoji';

本页介绍 Blockbench 的基本用法。

Blockbench 的完整教程可以在网上找到。本页只说明与 Figura 相关的内容。本页假定你使用的是 Blockbench 桌面版，而不是在线版。<br/>

## 项目属性

这是创建项目时弹出的窗口。也可以通过 File->Project 打开该页面。<br/>
<img src={require("@site/static/img/blockbench/project.png").default} width="400"></img><br/>
Figura 只接受 Generic Model 格式的 <Emoji icon="file/bbmodel"/> bbmodel。如果你的格式不是 Generic Model，Figura 会拒绝加载该形象。要转换项目，请使用 File->Convert Project，取消勾选 <code>Create Copy</code>，确认格式为 Generic Model，然后点击 Confirm。如果按下 Confirm 后弹窗没有关闭，请手动关闭它。<br/>
<img src={require("@site/static/img/blockbench/convert_project.png").default} width="400"></img><br/>

Figura 不使用 <code>File Name</code> 与 <code>Model Identifier</code> 字段。<br/>
<code>UV Mode</code> 决定 Blockbench 如何放置 UV。Figura 同时支持 <code>Box UV</code> 与 <code>Per-face UV</code>，用哪种由你决定。UV 决定 2D 纹理贴到 3D 模型的哪个位置。每个面都有自己的 UV 坐标，决定它从 2D 纹理的哪个位置取像素。<br/><br/>

<img src={require("@site/static/img/blockbench/uvmode_box.png").default} width="200" style={{"float":"right"}}></img>
<code>Box UV</code> 强制立方体的每个面按原版的方式排布 UV。如果你编辑过原版皮肤，就会认出这种排布。这种方式简化了贴图流程，但也限制了你能做的事。另外，模型中的所有纹理必须尺寸相同，因为一个像素的大小由项目的全局 <code>Texture Size</code> 决定，而不是纹理自身的尺寸。还有，使用 <code>Box UV</code> 时不能使用网格（mesh）<br/>

<div style={{"clear":"both"}}></div>

<img src={require("@site/static/img/blockbench/uvmode_perface.png").default} width="200" style={{"float":"right"}}></img>

<code>Per-face UV</code> 可以完全控制立方体或网格的每个面。每个面都能单独设置位置、缩放和旋转。你甚至可以为每个面指定不同的纹理，或删除某个面来减少干扰。像素网格受项目全局 <code>Texture Size</code> 影响，但修改 <code>Texture Size</code> 对 UV 本身没有任何影响；<code>Box UV</code> 则不同，修改项目时会破坏 UV

<div style={{"clear":"both"}}></div>

<code>Texture Size</code>。<br/>

<code>Texture Size</code> 字段用于辅助计算 UV。渲染时，UV 是 0 到 1 之间的浮点数，表示该点在纹理中的百分比位置。UV (0.5,0.5) 表示纹理中心，与纹理自身的尺寸无关。计算这个百分比的一种方法，是用你想要的像素坐标除以纹理尺寸：(32,16)/(64,64)=(0.5,0.25)。<code>Texture Size</code> 字段全局决定这个纹理尺寸。Blockbench 从不使用纹理的真实尺寸，因此当一个模型包含多种尺寸的纹理时就会出问题。好在修改它只会影响使用 <code>Box UV</code> 的 ModelPart，所以当你需要编辑使用不同尺寸纹理的 ModelPart 时，只要用的是 <code>Per-face UV</code>，就可以放心修改。<br/>

## ModelPart

### 父类型（ParentTypes）

如果一个 <Emoji icon="blockbench/group"/> 组的名称以特定字符串开头，Figura 会给该组应用特殊效果。常见的例子有 <code>"Head"</code>、<code>"RightArm"</code>、<code>"World"</code>。这些字符串称为[父类型（ParentTypes）](../enums/ModelPartParentTypes)。

### <code>Blank</code> 纹理

使用 Blockbench 内置 <code>Blank</code> 纹理的 ModelPart 完全不会被 Figura 加载。如果你希望模型没有纹理，而是通过脚本指定纹理，请使用 [<code>ignoredTextures</code> 元数据自定义](../tutorials/Avatar-Metadata)。<code>Transparent</code> 纹理只能应用在 Per-face UV 的单个面上，行为相同，Figura 不会加载这些面。

### 网格（Mesh）

<Emoji icon="blockbench/mesh"/> 可以使用网格。对 Figura 来说没有特殊之处。这里提到它，只是为了明确告知需要确认这一点的人：网格可用。

### 骨架蒙皮（OmniMorph）

OmniMorph 支持 Blockbench 的 `armature`/`bone` 骨架节点：

- 识别骨架与骨骼层级；
- 把网格的静止变换烘焙到骨架空间；
- 按 `boneWorld × inverse(bindWorld)` 变形；
- 支持加载后补充的蒙皮数据与骨架空间骨骼覆盖。

实践建议：

1. 用清晰的骨骼名称（例如 `Head`、`Body`、`RightArm`），便于挂载与脚本访问；
2. 确认绑定姿态（bind pose）正确，再制作动画；
3. 自定义骨架缺少标准 `Head`/`Body` 名称时，OmniMorph 会按大小写别名或首个骨架节点回退；
4. 蒙皮后仍可在衣柜骨骼树中查看层级，并给装饰选择挂点。

## 纹理

### 本地纹理与外部纹理 \{#localexternal-textures}

在 Blockbench 中，纹理有两种不同状态：本地（Local）和外部（External）。<br/>
要判断纹理处于哪种状态，右键点击纹理，选择 Properties。外部纹理会显示文件路径，本地纹理不会。<br/>判断纹理是否属于外部，关键只有一条：文件本身要位于形象的文件夹内。如果文件路径指向的文件不在形象文件夹内，Figura 就会把它当作本地文件加载。<br/>
<img src={require("@site/static/img/blockbench/texture_local.png").default} width="300"></img><img src={require("@site/static/img/blockbench/texture_external.png").default} width="300"></img><br/>

纹理是本地还是外部，决定 Figura 如何加载它，这在脚本中获取纹理时很重要。<br/>

<code>Render Mode</code> 字段决定纹理的渲染方式。在 Blockbench 中，它不会改变任何视觉效果。<br/>
**Figura 忽略 <code>Render Mode</code>。** 主纹理默认始终是 <code>"TRANSLUCENT"</code>，次纹理默认始终是 <code>"EMISSIVE"</code>。<br/>

<code>Render Sides</code> 字段决定从面的背面观察时是否渲染该立方体。<br/>
**Figura 忽略 <code>Render Sides</code>。** 要实现同样的效果，请在脚本中使用 <code>"TRANSLUCENT_CULL"</code> [渲染类型（RenderType）](../enums/RenderTypes)。<br/>

### 纹理后缀 \{#texture-suffix}

在 Blockbench 中，每个立方体（面）只能指向一张纹理，因此当 Figura 需要把多张纹理关联起来（例如自发光纹理）时，就得另想办法。<br/>
Figura 加载一张纹理时，会查找另一张名称相同但带有特定后缀的纹理。然后，对于 Blockbench 中所有使用该纹理的 ModelPart，Figura 会把带后缀的纹理也关联到该 ModelPart。<br/>

Figura 使用的后缀列表：

-   <code>\_e</code>：该纹理将作为 ModelPart 的次纹理，也就是[自发光纹理（Emissive Texture）](../tutorials/Emissive%20Textures)。ModelPart 的次渲染类型默认是 <code>"EMISSIVE"</code>，但可以在脚本中修改。
-   <code>\_n</code>：该纹理将作为[法线纹理（Normal Texture）](https://en.wikipedia.org/wiki/Normal_mapping)。<b>不要把它与主纹理混淆</b>。“Normal” 在建模中有非常具体的含义。该后缀配合 Iris 光影使用，在原版渲染下不起作用。<b><i>该后缀目前无效</i></b>。
-   <code>\_s</code>：该纹理将作为[高光纹理（Specular Texture）](https://en.wikipedia.org/wiki/Specularity)。该后缀配合 Iris 光影使用，在原版渲染下不起作用。<b><i>该后缀目前无效</i></b>。

一个例子是 <Emoji icon="blockbench/group"/> <code>Head</code>、<Emoji icon="file/texture"/> <code>skin</code> 与 <Emoji icon="file/texture"/> <code>skin_e</code>。当 <Emoji icon="blockbench/group"/> <code>Head</code> 使用 <Emoji icon="file/texture"/> <code>skin</code> 时，形象加载后，<Emoji icon="file/texture"/> <code>skin_e</code> 会作为次纹理，也就是自发光纹理。<br/>
<img src={require("@site/static/img/blockbench/settexture.png").default} width="300"></img><br/>

两张纹理要被视为同名，必须同为[本地或外部](#localexternal-textures)，且如果是外部纹理，还必须位于同一个文件夹。否则它们在内部不会被视为同名。<br/>
对于带文件扩展名的纹理，后缀放在扩展名之前，例如 <Emoji icon="file/texture"/> <code>skin_e.png</code><br/>

## 动画

### 动画属性 \{#animation-properties}

创建动画时会弹出此窗口。要回到该窗口，右键点击动画，选择 Properties。<br/>

<img src={require("@site/static/img/blockbench/animation_properties.png").default} width="500"></img><br/>

<code>Name</code> 是动画名称。把它改短非常重要。整个文本框内容就是动画名，所以除非你想在 Lua 中用 <code>animations.player["animation.model.new"]</code> 引用它，否则请改掉这个名字。名为 <code>"new"</code> 的动画可以直接用 <code>animations.player.new</code> 索引。这样舒服多了，对吧？
<br/><br/>

<code>Loop Mode</code> 控制动画停止时的行为。共有 3 种有效的循环模式：Play Once、Hold On Last Frame 与 Loop。<br/>
Play Once：动画结束即停止。<br/>
Hold On Last Frame：保留动画结束时的数值，动画在技术上仍在播放。<br/>
Loop：把动画时间设为 0；如果动画正在倒放，则设为动画末尾。
<br/><br/>

<code>Override</code> 决定播放此动画时，Mimic 类<a href="../enums/ModelPartParentTypes">父类型</a>是否应用它们的变换。它只影响在此动画中有关键帧的 ModelPart。默认 <code>false</code>
<br/><br/>

<code>Snapping</code> 决定关键帧的吸附距离。移动关键帧时按住 Ctrl 会忽略该值。<b>Figura 不关心此值</b>。
<br/><br/>

<code>Anim Time Update</code>。我不知道它在 Blockbench 里做什么，但 Figura 用这个值确定起始偏移。换句话说，调用 <code>play</code> 时，Figura 会从这个时间点开始播放动画。这让你可以把关键帧放在动画起点之前，有助于处理三次插值（Cubic Interpolation）关键帧。默认值为 <code>0</code>。
<br/><br/>

<code>Blend Weight</code> 是动画中每个关键帧的乘数。作为属性它不太有用，但可以在脚本中修改，用来增强或减弱动画强度。默认值为 <code>1</code>。
<br/><br/>

<code>Start Delay</code> 是调用 <code>play</code> 之后到动画真正开始所需的时间。默认值为 <code>0</code>。
<br/><br/>

<code>Loop Delay</code> 是仅在 <code>Loop Mode</code> 为 Loop 时出现的属性。它在动画结束到再次开始之间加入延迟。默认值为 <code>0</code>。
<br/><br/>

### 关键帧表达式

Blockbench 支持 Molang，但 **Figura 不支持**。<br/>
为解决这个问题，Figura 允许在关键帧字段中写 Lua 代码。<br/>

Figura 会为关键帧表达式提供数据，可通过 `...` 变量访问。

数据包含两项：关键帧时间，以及动画自身的 Animation 对象。<br/>
关键帧时间以百分比计，不以秒计。因此假设关键帧使用 Step 插值，`0` 表示关键帧自身所在的时间，`1` 表示下一个关键帧所在的时间。只有关键帧使用 Step 插值时，关键帧时间才有用。<br/>使用其他插值类型时，表达式会在尚未到达该关键帧时就执行，以便进行插值。此时它给出的是上一个关键帧的时间，到达自身后又回到 0。

可以通过下面这行代码取出这两项数据：

```lua
local time, anim = ...
```

关键帧表达式接受两种格式：

-   求值为数字的单个 Lua 表达式
-   用 `return` 返回数字的 Lua 脚本

`math.sin(world.getTime())` 是单个 Lua 表达式，因此是合法的关键帧表达式。<br/> 但 `local _, anim=... math.sin(anim:getTime())` 不是单个 Lua 表达式，需要显式写出返回值：

```lua
local _, anim = ...
return math.sin(anim:getTime())
```

也可以把它改写成单个 Lua 表达式：`math.sin({...}[2]:getTime())`<br/>
这里把 `...` 可变参数解构为表，然后取出第二个值。

### 指令关键帧 \{#instruction-keyframes}

动画播放到指令关键帧时，会执行其中的 Lua 代码。可以用它播放音效、生成粒子，几乎什么都能做。请记住这个位置写的是 Lua 代码，而不是 Molang。<br/>
可以通过魔法棒图标访问指令关键帧。此时会与其他 ModelPart 时间轴一起出现一条 Effects 时间轴。

### Figura 不使用的动画功能

以下是 Blockbench 动画提供、但 Figura 加载 bbmodel 时不使用的功能。<br/>

**变量占位符（Variable Placeholders）**<br/>
<img src={require("@site/static/img/blockbench/animation_variableplaceholders.png").default} width="200"></img><br/>
Figura 完全忽略此功能。

**反向动力学（Inverse Kinematics）**<br/>
不用管，Figura 没有这个功能。

**全局旋转（Global Rotation）**<br/>
ModelPart 的 Rotation 时间轴旁边有一个 Global Rotation 开关。Figura 不遵循它，请保持关闭。<br/>

**声音关键帧（Sound Keyframes）**<br/>
Figura 不读取这些关键帧。请改用[指令关键帧](#instruction-keyframes)。<br/>

**粒子关键帧（Particle Keyframes）**<br/>
Figura 不读取这些关键帧。请改用[指令关键帧](#instruction-keyframes)。<br/>
