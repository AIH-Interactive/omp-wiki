---
sidebar_position: 7
title: 粒子动态光源
---

# 粒子动态光源

> 状态：稳定（可选）
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：普通脚本、装饰脚本

自定义粒子可以携带动态光源。安装 LambDynamicLights 时，光源会注册为世界光源；未安装时使用内置光场。

## 开启

```lua
particle:setDynamicLight(true)
particle:setLightLevel(15)
particle:setLightRadius(4)
particle:setLightInterval(4)
```

| 方法 | 说明 |
| --- | --- |
| `setDynamicLight(bool)` / `isDynamicLight()` | 是否发光 |
| `setLightLevel(level)` / `getLightLevel()` | 光照等级 0–15 |
| `setLightRadius(radius)` / `getLightRadius()` | 照明半径 |
| `setLightInterval(n)` / `getLightInterval()` | 每隔 n 个可发光粒子只让一个成为光源 |

也可以在创建模板中写 `light = { interval = n }`（如果模型/模板支持）。

## 上限与降级

- 每个穿戴者的光源数量受后端 `outfit.limits` 限制；
- 超过上限时，只保留先前启用的前 N 个；
- 其余粒子仍然存在并正常显示，但不发光；
- 间隔设置可以减少光源数量，同时保留粒子外观。

## LambDynamicLights

- 安装时：通过公开的 `DynamicLightBehavior` API 注册世界光源；
- 内置光场停止注入，避免双重照明；
- 世界切换后自动重新注册；
- 未安装时：输出一次回退警告，继续使用内置光场。

## 光影（Iris）

- 自定义粒子管线按混合模式映射到 Iris 粒子程序；
- 阴影阶段跳过自定义粒子的回调/提取与粒子组提交；
- 阴影视图会剔除相机平移，避免拖尾/粒子偏离原位；
- 光影包可能不支持某些混合模式或动态光源。

## 示例：每 4 个粒子一个光源

```lua
for i = 1, 16 do
    local p = particles:newCustomParticle("glow", player:getPos(), vec(0, 0.1, 0))
    p:setLifetime(40)
    p:setScale(0.2)
    p:setEmissive(true)
    p:setDynamicLight(true)
    p:setLightLevel(12)
    p:setLightRadius(2)
    p:setLightInterval(4)
end
```

## 排错

| 现象 | 检查 |
| --- | --- |
| 完全不亮 | `setDynamicLight(true)`、光照等级、光源上限 |
| 只有部分亮 | 是否超过每穿戴者上限；尝试增大 `lightInterval` |
| 双重照明 | 是否同时使用内置光场与 LambDynamicLights |
| 光影下异常 | 光影包/混合模式兼容性 |
| 性能下降 | 降低光源数量、半径与粒子数 |

## 相关页面

- [自定义粒子](/scripting/custom-particles)
- [第一人称、光影与动态光源](/omnimorph/rendering)
- [预算与限制](/scripting/budgets)
