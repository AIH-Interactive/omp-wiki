---
title: Particle（粒子）
sidebar_label: Particle（粒子）
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

表示一个可以生成并修改的粒子。

通过索引 ParticleAPI 获取。

它是 particles:addParticle() 的面向对象替代方案。

本页示例假设：

```lua
myParticle = particles["explosion"]
```

---

### <code>spawn()</code> \{#spawn}

使用当前属性生成该粒子。

```lua
spawn()
```

**返回：**

| 类型                                                 | 说明               |
| ---------------------------------------------------- | ------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 在世界中生成该粒子 |

**示例：**

```lua
myParticle:spawn()
```

---

### <code>setPos()</code> \{#setPos}

**别名：** `pos()`

设置该粒子的位置。

位置使用世界坐标。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPos(pos)
```

**参数：**

| 名称 | 类型                                             | 说明                   | 默认值       |
| ---- | ------------------------------------------------ | ---------------------- | ------------ |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 设置粒子在世界中的位置 | `vec(0,0,0)` |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setPos(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明                      | 默认值 |
| ---- | ----------------------------------------------- | ------------------------- | ------ |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | 设置粒子在世界中的 x 坐标 | `0`    |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | 设置粒子在世界中的 y 坐标 | `0`    |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | 设置粒子在世界中的 z 坐标 | `0`    |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
-- player position example
myParticle:setPos(player:getPos())
-- model part position example
myParticle:setPos(modelpart:partToWorldMatrix():apply())
```

---

### <code>getPos()</code> \{#getPos}

获取该粒子的位置。

```lua
getPos()
```

**返回：**

| 类型                                             | 说明                   |
| ------------------------------------------------ | ---------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 获取粒子当前所在的位置 |

**示例：**

```lua
myParticle:getPos()
```

---

### <code>setColor()</code> \{#setColor}

**别名：** `color()`

设置该粒子的颜色，取值范围为 0 到 1。

可以传入 alpha 值，但大多数粒子不支持。

RGBA 默认值均为 1。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setColor(rgb)
```

**参数：**

| 名称 | 类型                                             | 说明                  | 默认值       |
| ---- | ------------------------------------------------ | --------------------- | ------------ |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | 应用到粒子的 RGB 颜色 | `vec(1,1,1)` |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setColor(rgba)
```

**参数：**

| 名称 | 类型                                             | 说明                   | 默认值         |
| ---- | ------------------------------------------------ | ---------------------- | -------------- |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | 应用到粒子的 RGBA 颜色 | `vec(1,1,1,1)` |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
setColor(r, g, b, a)
```

**参数：**

| 名称 | 类型                                            | 说明                    | 默认值 |
| ---- | ----------------------------------------------- | ----------------------- | ------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | 应用到粒子的 R 通道着色 | `1`    |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | 应用到粒子的 G 通道着色 | `1`    |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | 应用到粒子的 B 通道着色 | `1`    |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | 应用到粒子的 A 通道着色 | `1`    |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myParticle:setColor(1, 0, 1)
```

---

### <code>getColor()</code> \{#getColor}

获取该粒子的颜色。

```lua
getColor()
```

**返回：**

| 类型                                             | 说明                                                            |
| ------------------------------------------------ | --------------------------------------------------------------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | 获取通过 [setColor](./Particle#setColor) 应用到粒子的 RGBA 颜色 |

**示例：**

```lua
myParticle:getColor()
```

---

### <code>setScale()</code> \{#setScale}

**别名：** `scale()`, `setSize()`, `size()`

设置该粒子的缩放。

```lua
setScale(scale)
```

**参数：**

| 名称  | 类型                                            | 说明                 | 默认值 |
| ----- | ----------------------------------------------- | -------------------- | ------ |
| scale | <code>[Number](/tutorials/types/Numbers)</code> | 设置粒子两个轴的缩放 | 1      |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

**示例：**

```lua
myParticle:setScale(2)
```

---

### <code>getScale()</code> \{#getScale}

**别名：** `getSize()`

获取该粒子的缩放。

```lua
getScale()
```

**返回：**

| 类型                                            | 说明           |
| ----------------------------------------------- | -------------- |
| <code>[Number](/tutorials/types/Numbers)</code> | 获取粒子的缩放 |

**示例：**

```lua
myParticle:getScale()
```

---

### <code>setVelocity()</code> \{#setVelocity}

**别名：** `velocity()`

设置该粒子的速度。

速度使用世界坐标。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setVelocity(velocity)
```

**参数：**

| 名称     | 类型                                             | 说明 | 默认值         |
| -------- | ------------------------------------------------ | ---- | -------------- |
| velocity | <code>[Vector3](/globals/Vectors/Vector3)</code> | -    | 粒子的默认速度 |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
setVelocity(x, y, z)
```

**参数：**

| 名称 | 类型                                            | 说明 | 默认值                |
| ---- | ----------------------------------------------- | ---- | --------------------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -    | 粒子的默认 x 方向速度 |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -    | 粒子的默认 y 方向速度 |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -    | 粒子的默认 z 方向速度 |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

</TabItem>
</Tabs>

**示例：**

```lua
myParticle:setVelocity(0, 5, 0)
```

---

### <code>getVelocity()</code> \{#getVelocity}

获取该粒子的速度。

```lua
getVelocity()
```

**返回：**

| 类型                                             | 说明           |
| ------------------------------------------------ | -------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | 获取粒子的速度 |

**示例：**

```lua
myParticle:getVelocity()
```

---

### <code>setLifetime()</code> \{#setLifetime}

**别名：** `lifetime()`

设置该粒子的存活时间，即该粒子在世界中停留的 tick 数。

```lua
setLifetime(lifetime)
```

**参数：**

| 名称     | 类型                                             | 说明                                 | 默认值             |
| -------- | ------------------------------------------------ | ------------------------------------ | ------------------ |
| lifetime | <code>[Integer](/tutorials/types/Numbers)</code> | 粒子在世界中停留的时间（单位：tick） | 粒子的默认存活时间 |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

**示例：**

```lua
myParticle:setLifetime(100)
```

---

### <code>getLifetime()</code> \{#getLifetime}

获取该粒子当前的存活时间。

```lua
getLifetime()
```

**返回：**

| 类型                                             | 说明                                     |
| ------------------------------------------------ | ---------------------------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | 获取粒子在世界中停留的时间（单位：tick） |

**示例：**

```lua
myParticle:getLifetime()
```

---

### <code>setPower()</code> \{#setPower}

**别名：** `power()`

每次运行时都会将粒子的速度乘以该值。

```lua
setPower(power)
```

**参数：**

| 名称  | 类型                                            | 说明 | 默认值 |
| ----- | ----------------------------------------------- | ---- | ------ |
| power | <code>[Number](/tutorials/types/Numbers)</code> | -    | -      |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

**示例：**

```lua
myParticle:setPower(2)
```

---

### <code>getPower()</code> \{#getPower}

获取最后一次传给 setPower 的数值，而不是粒子的总 power。

:::caution

getPower 获取的不是粒子实际的 power，而是最后一次传给 setPower 的数值。

:::

```lua
getPower()
```

**返回：**

| 类型                                            | 说明                |
| ----------------------------------------------- | ------------------- |
| <code>[Number](/tutorials/types/Numbers)</code> | 获取粒子的 power 值 |

**示例：**

```lua
myParticle:getPower()
```

---

### <code>setGravity()</code> \{#setGravity}

**别名：** `gravity()`

设置粒子重力的强度。

```lua
setGravity(gravity)
```

**参数：**

| 名称    | 类型                                            | 说明               | 默认值 |
| ------- | ----------------------------------------------- | ------------------ | ------ |
| gravity | <code>[Number](/tutorials/types/Numbers)</code> | 设置粒子重力的强度 | `1`    |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

**示例：**

```lua
myParticle:setGravity(5)
```

---

### <code>getGravity()</code> \{#getGravity}

获取该粒子的重力。

```lua
getGravity()
```

**返回：**

| 类型                                            | 说明               |
| ----------------------------------------------- | ------------------ |
| <code>[Number](/tutorials/types/Numbers)</code> | 获取粒子重力的强度 |

**示例：**

```lua
myParticle:getGravity()
```

---

### <code>setPhysics()</code> \{#setPhysics}

**别名：** `physics()`

设置该粒子是否启用物理。

```lua
setPhysics(physics)
```

**参数：**

| 名称    | 类型                                              | 说明                                            | 默认值 |
| ------- | ------------------------------------------------- | ----------------------------------------------- | ------ |
| physics | <code>[Boolean](/tutorials/types/Booleans)</code> | 布尔值，为 true 时启用物理，为 false 时关闭物理 | `true` |

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

**示例：**

```lua
myParticle:setPhysics(false)
```

---

### <code>hasPhysics()</code> \{#hasPhysics}

获取该粒子是否启用物理。

```lua
hasPhysics()
```

**返回：**

| 类型                                              | 说明                   |
| ------------------------------------------------- | ---------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 获取该粒子是否启用物理 |

**示例：**

```lua
myParticle:hasPhysics()
```

---

### <code>remove()</code> \{#remove}

从世界中移除该粒子。

```lua
remove()
```

**返回：**

| 类型                                                 | 说明                     |
| ---------------------------------------------------- | ------------------------ |
| <code>[Particle](/globals/Particles/Particle)</code> | 返回该粒子，以便链式调用 |

**示例：**

```lua
myParticle:remove()
```

---

### <code>isAlive()</code> \{#isAlive}

检查该粒子是否未被标记为移除。

```lua
isAlive()
```

**返回：**

| 类型                                              | 说明             |
| ------------------------------------------------- | ---------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 返回粒子是否存活 |

**示例：**

```lua
myParticle:isAlive()
```

---

## OmniMorph 扩展

通过 `particles:newCustomParticle()` / `newTexturedParticle()` 创建的粒子还支持：

- 渲染模式：Billboard / Layered / Ribbon；
- 精灵图与多图层；
- 运动：free / orbit / helix / bezier / tracking；
- tick / frame 回调；
- 动态光源与光源间隔；
- 拖尾、渐缩/渐隐与 UV 平铺。

这些能力只对自定义粒子有效，普通 `newParticle()` 粒子仍使用原版行为。详见[自定义粒子](/scripting/custom-particles)、[拖尾 Ribbon](/scripting/ribbon)、[粒子动态光源](/scripting/dynamic-lights)与[粒子运动](/scripting/particle-motion)。
