---
title: 动画
sidebar_label: 动画
---

播放与排查 Blockbench 动画的教程

借助动画 API（Animation API），Figura 可以播放 Blockbench 中的动画。

## 播放动画

要播放动画，需要通过动画所在的 Blockbench 模型和 <code>animations</code> 全局对象来索引该动画。

假设我们有一个名为 <code>example</code> 的 Blockbench 模型

<img src={require("@site/static/img/animation/exampleBbmodel.png").default} width="200" alt="Blockbench 中名为 example 的模型"></img>

以及一个名为 <code>idle</code> 的动画

<img src={require("@site/static/img/animation/exampleIdle.png").default} width="400" alt="Blockbench 中名为 idle 的动画"></img>

要播放这个动画，可以使用下面的代码：

```lua
animations.example.idle:play()
```

<code>animations</code> 保存了所有 Blockbench 模型的全部动画数据。<br/>

索引的下一部分始终是动画所在的 Blockbench 模型名称，在这个例子中是 <code>example.bbmodel</code>。注意，这里 _不_ 包含 <code>.bbmodel</code> 文件扩展名。如果模型位于一个或多个子文件夹中，这些子文件夹也会包含在这一部分里，例如：<code>animations["subfolder.example"].idle</code>。

索引的最后一部分是动画名称，在这个例子中是 <code>idle</code>。

## play() 之外的播放方式

还有一个可以播放动画的函数：<code>setPlaying(bool)</code>。

在括号中传入布尔值：值为 true 时播放动画，值为 false 时停止动画。

这个函数常用于动作轮盘中的开关。

### setPlaying 示例

setPlaying 必须放在会反复执行的函数里，才能持续生效。这里使用 tick 事件，但它也适用于任何其他场景。

```lua
function events.tick()
    local crouching = player:getPose() == "CROUCHING"
    -- This detects if you are crouching and stores it into crouch.
    -- So: crouch == true when crouching, and crouch == false when you're not crouching
    animations.example.idle:setPlaying(crouching)
end
```

现在，只要我们处于潜行状态，<code>idle</code> 动画就会播放！

这种做法可以无限扩展，但动画越多，逻辑就越复杂。

## 简单的待机、行走、疾跑、潜行动画组合

作为示例，我们为四组动画编写代码：idle、walk、sprint 和 crouch。下面是 Blockbench 模型中的动画。
<img src={require("@site/static/img/animation/exampleAnims.png").default} width="400" alt="Blockbench 模型中的四个动画：idle、walk、sprint 和 crouch"></img>

```lua
function events.tick()
    local crouching = player:getPose() == "CROUCHING"
    -- This is the same line of code from the previous example
    local walking = player:getVelocity().xz:length() > .01
    -- walking == true when moving, and walking == false when still (or going directly up/down as we excluded the y axis)
    local sprinting = player:isSprinting()
    -- If you want to find more player functions, check out the Player Global page

    -- Now we're going to use a lot of logic to figure out when animations should/shouldn't play
    animations.example.idle:setPlaying(not walking and not crouching)
    -- You're idle when not walking and not crouching
    animations.example.walk:setPlaying(walking and not crouching and not sprinting)
    -- You're walking when... walking and not crouching, but you want to make sure you're not sprinting either
    animations.example.sprint:setPlaying(sprinting and not crouching)
    -- You probably can catch my drift by now
    animations.example.crouch:setPlaying(crouching)
end
```

## 常见错误

### 修复索引错误

在编写这些代码时，你可能会遇到一些脚本错误。下面是针对 <code>attempt to index ? (a nil value)</code> 的一些解决方法。

错误信息会给出一个键，这个键位于真正出错的部分之后。

<img src={require("@site/static/img/animation/exampleErrorAnim.png").default} width="400" alt="脚本错误提示，其中指出 setPlaying 键"></img>

就像这个例子，它指出 <code>setPlaying</code> 是键，因此问题出在它之前。

你会看到动画名称拼错了，改正之后错误就会消失或发生变化。

<img src={require("@site/static/img/animation/exampleErrorBbmodel.png").default} width="400" alt="脚本错误提示，其中指出 idle 键"></img>

这里又出现了一次，但这次键是 <code>idle</code>，说明问题出在 Blockbench 模型名称上。

你会看到这个版本中模型名称拼错了，改正之后错误就会消失或发生变化。

### 关键帧内部的错误

关键帧内部的错误千差万别，但可以通过错误信息中的动画名称来识别。下面是三个例子：
<img src={require("@site/static/img/animation/exampleErrorKeyframe.png").default} width="800" alt="关键帧内部错误的三个示例"></img>

如何修复取决于具体的错误。

## 覆盖原版动画

可以在 Blockbench 中使用 override 设置覆盖原版动画。该设置按动画逐个指定，并按部位与通道（旋转、位置、缩放）分别覆盖。
它只在动画播放期间生效。
<img src={require("@site/static/img/animation/exampleCheck.png").default} width="400" alt="Blockbench 动画设置中的 override 复选框"></img>

<img src={require("@site/static/img/animation/exampleOverride.png").default} width="400" alt="Blockbench 中按通道设置的 override 选项"></img>

## 特殊关键帧类型

Blockbench 动画有一类特殊的关键帧，称为效果（Effects）关键帧。共有三种，但 Figura 会忽略粒子（Particle）和声音（Sound）关键帧。

### 指令（Instruction）关键帧

第三种特殊关键帧是指令（Instruction）关键帧。动画播放到该关键帧时，指令关键帧会执行 Lua 代码。可以用它播放声音、生成粒子，或做任何其他事情。记住，这里填写的是 Lua 代码，而不是 Molang。要执行的 Lua 代码写在左侧边栏的 Script 框中。

每个指令都有各自的作用域，因此某个脚本中的局部变量无法被其他关键帧访问，除非专门在两者之间建立接口。

## YSM 与 Molang

以上内容主要针对 Figura 的 `.bbmodel` 动画。YSM 模型使用另一套运行时：

- 动画由 YSM 动画控制器与 Molang 表达式驱动；
- 动作可以进入动作轮盘；
- Lua 可以通过 `ysm_model` / `ysm_actions` 读取和控制。

详见 [Molang 表达式与控制器](/omnimorph/molang) 与 [YSM 动作轮盘](/omnimorph/action-wheel)。

## 社区资源

### Jimmy 的动画处理器

如果你有很多动画需要检测状态，Jimmy 的动画处理器可以帮你播放它们。[在 GitHub 上查看](https://github.com/JimmyHelp/JimmyAnims)

### GSAnimBlend

如果想让动画之间的过渡更平滑、不再硬切换，可以使用 GSAnimBlend。[在 GitHub 上查看](https://github.com/GrandpaScout/GSAnimBlend)
