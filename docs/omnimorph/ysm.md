---
sidebar_position: 5
title: YSM 模型支持
---

# YSM 模型支持

> 状态：稳定（基础加载与动画）；部分高级能力取决于模型与后端
> 适用版本：OmniMorph 1.0.0-alpha.5

OmniMorph 在保留 Figura 的同时支持 YSM 模型。YSM 模型可以在同一个衣柜中加载、预览、启用，并与 Lua 脚本联动。

## 支持的格式

| 形式 | 识别方式 |
| ----------- | ------------------------------------------------- |
| 文件夹 | 根目录含 `ysm.json`（新版）或 `main.json`（旧版） |
| ZIP | ZIP 根目录含上述文件 |
| 加密 `.ysm` | 单个文件，由受支持的 YSM 工具导出 |

把模型放入 `omnimorph/avatars/`，然后在衣柜中刷新。

## 制作 YSM 模型

OmniMorph 负责加载与运行 YSM 模型，不负责制作模型。制作 YSM 模型的流程、文件结构与动画规范请参考 YSM 官方文档：

- [YSM Wiki 入门](https://ysm.cfpa.team/wiki/intro/)

:::note
YSM 官方 Wiki 为外部资源，其链接与内容可能随项目更新；本页只说明 OmniMorph 侧的加载与使用方式。
:::

## 加载模型

1. 打开衣柜。
2. 在格式筛选中选择“非加密 YSM”或“加密 YSM”，或保持“全部”。
3. 选择模型，右侧预览。
4. 点击“启用”。

加载失败时，衣柜会显示失败状态；常见原因包括缺少 `ysm.json`/`main.json`、格式不受支持、文件损坏或权限不足。

## 纹理

YSM 模型可以自带多套纹理。衣柜中的“YSM 纹理”区域可以切换当前纹理；具体可用纹理由模型作者定义。

切换纹理会立即影响预览与已启用模型；不会修改源文件。

## 动画与 Molang

YSM 模型使用：

- 几何（模型部件）；
- 动画；
- 动画控制器；
- Molang 表达式。

OmniMorph 运行这些内容，并把状态暴露给 Lua 与 Molang。详见 [Molang 表达式与控制器](/omnimorph/molang)。

:::note
YSM 模型缺少基础动作时，OmniMorph 会使用受限的默认动作模板；作者自带动作优先，模板不会修改原文件或旧同步索引。
:::

### alpha.5 动画兼容性

alpha.5 调整了控制器阶段、手部持有/使用/挥动动作、旧格式循环、起播过渡、事件回绕、关键帧采样和声音生命周期，并改进身体与第一人称动画分域、旋转插值、纹理半透明判定及多手部挂点。更新日志还列出拉弓、长矛、移动动作和第一人称遮挡等修复；实际游戏画面与声音仍待验收。

### 原生状态机

YSM 模型可以启用/关闭原生状态机：

- 开启：由模型自带的动画控制器驱动；
- 关闭：可由 Lua 或外部逻辑接管部分动画。

Lua 接口：

```lua
ysm_model:setNativeStateMachineEnabled(false)
ysm_model:setNativeAnimationEnabled("idle", false)
```

## 模型控件

YSM 模型可以声明控件（例如开关、滑块、下拉框）。OmniMorph 会把它们放进“模型专用设置”：

- “YSM 检测到的控件”列出模型声明的控件；
- 可以在界面中调整并预览；
- 控件值可以被 Molang 通过 `query.ysm_control*` 读取；
- 控件也可以被 Lua 读取/修改。

详见[模型专用设置](/omnimorph/avatar-controls)。

## 动作轮盘

YSM 动作可以进入动作轮盘：

- 按页组织，每页最多 8 个槽位；
- 支持点击、数字键、滚动与键位绑定；
- 支持循环、冷却、速度与物品条件；
- 动作播放状态可被 Molang/Lua 查询。

详见 [YSM 动作轮盘](/omnimorph/action-wheel)。

## 子实体与挂点

YSM 模型可以包含：

- **定位器（locator）**：用于定位物品、粒子或特效；
- **挂点（attachment point）**：用于挂载物品或装饰；
- **子实体（sub-entity）**：模型内的附属实体。

Lua 可以读取它们的世界矩阵/位置：

```lua
local head = ysm_model:getPart("Head")
if head then
    local pos = head:getWorldPos()
    particles:newParticle("minecraft:flame", pos)
end
```

## 第一人称、睡眠与骑乘

OmniMorph 对 YSM 的第一人称、睡眠与骑乘做了兼容处理：

- 第一人称：配装组合按相机相对全身姿态重放，身体挂点装饰的渲染/粒子/拖尾继续运行；
- 睡眠：按床朝向整体旋转；
- 骑乘：按载具姿态调整；
- 手臂：仅 Figura 基础走配装手臂路径，YSM/非 Figura 基础不会触发该路径。

这些行为仍以真实客户端画面为准；文档不把自动测试当作视觉验收。

## 与 Lua 联动

| 需求 | 接口 |
| ---------------- | ------------------------------------------------------------------- |
| 判断是否 YSM | `ysm_model:isYsm()` |
| 模型类型 | `ysm_model:getKind()` |
| 部件/定位器/挂点 | `ysm_model:getPart(s)`、`getLocator(s)`、`getAttachment(s)` |
| 世界矩阵/位置 | `getBoneWorldMatrix`、`getLocatorWorldPos`、`getAttachmentWorldPos` |
| 纹理 | `getTexture` / `setTexture` |
| 动画 | `playAnimation`、`stopAnimation`、`getActiveAnimations` |
| 控制器 | `getControllers`、`getControllerStates` |
| 函数/事件 | `getFunctions`、`getEvents`、`getRecentEvents` |
| 动作/控件 | `getActions`、`getControls` |
| 子实体 | `getSubEntities` |

完整方法见 [`ysm_model`](/scripting/ysm-model)。

## 常见问题

**模型只显示头部或缺部件？**
检查模型文件是否完整、是否包含所需纹理与几何；加密 `.ysm` 需要受支持的格式。

**动作轮盘没有动作？**
确认模型确实声明了轮盘动作；纯几何模型可能没有任何动作。

**动画不播放？**
检查原生状态机是否被关闭、控制器是否满足过渡条件、Molang 表达式是否报错。

**纹理错乱？**
确认纹理路径与模型声明一致；切换纹理后仍异常时重新加载模型。

## 相关页面

- [模型文件格式](/start_here/Avatar%20File%20Format)
- [Molang 表达式与控制器](/omnimorph/molang)
- [YSM 动作轮盘](/omnimorph/action-wheel)
- [`ysm_model`](/scripting/ysm-model)
