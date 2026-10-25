---
title: Particles（粒子 API）
sidebar_label: Particles（粒子 API）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

用于处理 Minecraft 粒子的全局 API。

索引粒子 id 时会创建粒子实例。

通过名称 “particles” 访问。

---

### <code>newParticle()</code> \{#newParticle}

在指定位置按给定名称创建粒子，可指定初速度。

部分粒子带有特殊属性，例如 “dust” 粒子。

这类粒子的特殊属性可以写进 “name” 参数，写法与命令中的用法相同。

:::caution

各粒子的行为与生成方式不同。生成部分粒子时，可参考 /particle 命令的用法。

:::

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
newParticle(name, pos)
```

**参数：**

| 名称 | 类型                                             | 说明                                                                           | 默认值  |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------------------- | -------- |
| name | <code>[String](/tutorials/types/Strings)</code>  | 粒子的 [Java 版 id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | 必填 |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 粒子生成处的世界坐标                               | 必填 |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ----------------------------------------- |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回生成的粒子，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
newParticle(name, pos, vel)
```

**参数：**

| 名称 | 类型                                             | 说明                                                                           | 默认值                          |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------------------- | -------------------------------- |
| name | <code>[String](/tutorials/types/Strings)</code>  | 粒子的 [Java 版 id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | 必填                         |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 粒子生成处的世界坐标                               | 必填                         |
| vel  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -                                                                                     | 粒子原有的速度 |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ----------------------------------------- |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回生成的粒子，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
newParticle(name, posX, posY, posZ)
```

**参数：**

| 名称 | 类型                                            | 说明                                                                           | 默认值  |
| ---- | ----------------------------------------------- | ------------------------------------------------------------------------------------- | -------- |
| name | <code>[String](/tutorials/types/Strings)</code> | 粒子的 [Java 版 id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | 必填 |
| posX | <code>[Number](/tutorials/types/Numbers)</code> | 粒子生成处的世界 x 坐标                             | 必填 |
| posY | <code>[Number](/tutorials/types/Numbers)</code> | 粒子生成处的世界 y 坐标                             | `0`      |
| posZ | <code>[Number](/tutorials/types/Numbers)</code> | 粒子生成处的世界 z 坐标                             | `0`      |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ----------------------------------------- |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回生成的粒子，便于链式调用 |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
newParticle(name, pos, velX, velY, velZ)
```

**参数：**

| 名称 | 类型                                             | 说明                                                                           | 默认值                            |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------------------- | ---------------------------------- |
| name | <code>[String](/tutorials/types/Strings)</code>  | 粒子的 [Java 版 id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | 必填                           |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 粒子生成处的世界坐标                               | 必填                           |
| velX | <code>[Number](/tutorials/types/Numbers)</code>  | -                                                                                     | 粒子原有的 x 轴速度 |
| velY | <code>[Number](/tutorials/types/Numbers)</code>  | -                                                                                     | 粒子原有的 y 轴速度 |
| velZ | <code>[Number](/tutorials/types/Numbers)</code>  | -                                                                                     | 粒子原有的 z 轴速度 |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ----------------------------------------- |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回生成的粒子，便于链式调用 |

</TabItem>
<TabItem value="overload-5" label="重载 5">

```lua
newParticle(name, posX, posY, posZ, vel)
```

**参数：**

| 名称 | 类型                                             | 说明                                                                           | 默认值                          |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------------------- | -------------------------------- |
| name | <code>[String](/tutorials/types/Strings)</code>  | 粒子的 [Java 版 id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | 必填                         |
| posX | <code>[Number](/tutorials/types/Numbers)</code>  | 粒子生成处的世界 x 坐标                             | 必填                         |
| posY | <code>[Number](/tutorials/types/Numbers)</code>  | 粒子生成处的世界 y 坐标                             | `0`                              |
| posZ | <code>[Number](/tutorials/types/Numbers)</code>  | 粒子生成处的世界 z 坐标                             | `0`                              |
| vel  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -                                                                                     | 粒子原有的速度 |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ----------------------------------------- |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回生成的粒子，便于链式调用 |

</TabItem>
<TabItem value="overload-6" label="重载 6">

```lua
newParticle(name, posX, posY, posZ, velX, velY, velZ)
```

**参数：**

| 名称 | 类型                                            | 说明                                                                           | 默认值                            |
| ---- | ----------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------- |
| name | <code>[String](/tutorials/types/Strings)</code> | 粒子的 [Java 版 id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | 必填                           |
| posX | <code>[Number](/tutorials/types/Numbers)</code> | 粒子生成处的世界 x 坐标                             | 必填                           |
| posY | <code>[Number](/tutorials/types/Numbers)</code> | 粒子生成处的世界 y 坐标                             | `0`                                |
| posZ | <code>[Number](/tutorials/types/Numbers)</code> | 粒子生成处的世界 z 坐标                             | `0`                                |
| velX | <code>[Number](/tutorials/types/Numbers)</code> | -                                                                                     | 粒子原有的 x 轴速度 |
| velY | <code>[Number](/tutorials/types/Numbers)</code> | -                                                                                     | 粒子原有的 y 轴速度 |
| velZ | <code>[Number](/tutorials/types/Numbers)</code> | -                                                                                     | 粒子原有的 z 轴速度 |

**返回值：**

| 类型                                                 | 说明                               |
| ---------------------------------------------------- | ----------------------------------------- |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回生成的粒子，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
-- smoke example
particles:newParticle("smoke", player:getPos(), vec(0, 5, 0))
-- dust example
particles:newParticle("dust 1 0 1 1", player:getPos(), vec(0, 5, 0))
```

---

### <code>removeParticles()</code> \{#removeParticles}

移除该形象生成的全部粒子。

```lua
removeParticles()
```

**返回值：**

| 类型                                           | 说明                           |
| ---------------------------------------------- | ------------------------------------- |
| <code>[ParticleAPI](/globals/Particles)</code> | 返回粒子 API，便于链式调用 |

**示例：**

```lua
particles:removeParticles()
```

---

### <code>isPresent()</code> \{#isPresent}

检查该粒子 id 是否已注册。

```lua
isPresent(id)
```

**参数：**

| 名称 | 类型                                            | 说明       | 默认值 |
| ---- | ----------------------------------------------- | ----------------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | 粒子名称 | `nil`   |

**返回值：**

| 类型                                              | 说明                                                            |
| ------------------------------------------------- | ---------------------------------------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 返回布尔值，表示该粒子是否已注册 |

**示例：**

```lua
particles:isPresent("minecraft:smoke")
```

---

## OmniMorph 扩展

OmniMorph 新增：

| 方法 | 说明 |
| --- | --- |
| `newCustomParticle(texture, pos, velocity)` | 创建可精细控制的自定义粒子 |
| `newTexturedParticle(texture, pos, velocity)` | 同一实现的便捷入口 |

自定义粒子支持精灵图、多图层、Ribbon、运动、回调与动态光源。详见[自定义粒子](/scripting/custom-particles)。
