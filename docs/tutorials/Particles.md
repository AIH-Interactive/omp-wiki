---
title: 生成粒子
sidebar_label: 生成粒子
---

生成粒子教程

借助粒子 API（Particle API），可以生成 Minecraft 中的粒子。其工作方式与游戏内的 <code>/particle</code> 指令类似。对于粉尘（dust）这类带有特殊属性的粒子，这些属性写在粒子名称里。

本文大部分内容都假设你已了解：避免在 init 阶段调用 player。

## 生成粒子

```lua
particles:newParticle(particleID, position, velocity)
```

如果对照 [Minecraft Wiki](https://minecraft.wiki/w/Particles)，粒子 ID 就是“Java Edition ID Name”一列中的名称。它也与 `/particle` 指令使用的 ID 相同。如果使用 Minecraft 自带的粒子，可以省略 Minecraft 的“模组名”。

```lua
particles:newParticle("minecraft:explosion", player:getPos())
```

这里传入了玩家位置，省略了速度。

下面是粉尘粒子的示例，它的颜色写在名称里：

```lua
particles:newParticle("dust 0 1 1 1", player:getPos())
```

这会生成一个青色粉尘粒子：颜色值需要 0 到 1 之间的数字，第四个数是 Alpha。这里省略了 `minecraft:` 模组名，用以说明它可以不写。

## 在模型部件位置生成

要在模型部件（modelPart）的位置生成粒子，需要先获取该部件的位置矩阵，再像平常一样把它传给位置参数。

```lua
particles:newParticle("explosion", modelPart:partToWorldMatrix():apply())
```

其中 <code>modelPart</code> 指向形象中真实存在的模型部件。

## 另一种方法

可以把某个粒子的引用保存下来，之后在它仍存在于世界中时使用该引用修改属性。

```lua
local boom = particles["explosion"]

function events.entity_init()
    boom:spawn():setPos(player:getPos())
end
```

这里放在 entity_init 事件中，是为了避免实体初始化错误。

## 社区资源

### Manuel 制作的 Confetti

生成你在 Blockbench 中制作的自定义粒子。[在 GitHub 上查看](https://github.com/Manuel-3/figura-scripts/tree/main/src/confetti)
