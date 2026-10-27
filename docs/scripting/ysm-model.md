---
sidebar_position: 2
title: ysm_model（YSM 模型）
sidebar_label: ysm_model（YSM 模型）
---

# ysm_model

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.5
> 可用范围：普通脚本、装饰脚本

`ysm_model` 是 YSM 模型的只读/受限控制接口，用来访问部件、定位器、挂点、动画、纹理、动作、控件与子实体。

## 获取

它是一个全局对象，不需要创建：

```lua
if ysm_model:isYsm() then
    log("当前是 YSM 模型")
end
```

`ysm_model.Head` 等价于 `ysm_model:getPart("Head")`；`ysm_model.ALL` 返回全部部件。

## 模型信息

| 方法 | 返回 | 说明 |
| -------------------------------- | ---------- | ----------------------------- |
| `isYsm()` | 布尔 | 当前模型是否为 YSM |
| `getKind()` | 字符串 | 模型类型；无运行时返回 `none` |
| `getTexture()` | 字符串 | 当前纹理 id |
| `setTexture(id)` / `texture(id)` | 自身 | 切换纹理 |
| `getSubEntities()` | 字符串数组 | 子实体列表（`kind:id`） |

## 部件

| 方法 | 返回 | 说明 |
| -------------------------- | ----------------------- | -------------- |
| `getPart(name)` | `ysm_model_part` 或 nil | 按名称获取部件 |
| `getParts()` | 集合 | 全部部件 |
| `getRootParts()` | 数组 | 根部件 |
| `getBoneWorldMatrix(name)` | `Matrix4` | 骨骼世界矩阵 |
| `getBoneWorldPos(name)` | `Vector3` | 骨骼世界位置 |

`ysm_model_part` 的方法：

| 方法 | 返回 | 说明 |
| -------------------------------------------------------- | ---------- | ------------ |
| `getName()` | 字符串 | 名称 |
| `getParent()` | 部件或 nil | 父部件 |
| `getChildren()` | 数组 | 子部件 |
| `getPos()` / `setPos(x,y,z)` / `pos(...)` | 向量/自身 | 局部位移 |
| `getRot()` / `setRot(x,y,z)` / `rot(...)` | 向量/自身 | 局部旋转 |
| `getScale()` / `setScale(x,y,z)` / `scale(...)` | 向量/自身 | 局部缩放 |
| `getVisible()` / `setVisible(bool)` / `visible(bool)` | 布尔/自身 | 可见性 |
| `getOriginPos()` / `getOriginRot()` / `getOriginScale()` | 向量 | 作者原始姿态 |
| `getWorldMatrix()` | `Matrix4` | 世界矩阵 |
| `getWorldPos()` | `Vector3` | 世界位置 |
| `resetPose()` | 自身 | 恢复作者姿态 |

设置位置/旋转/缩放时，可以传三个数字，也可以传 `Vector3`：

```lua
part:setPos(0, 1, 0)
part:setPos(vec(0, 1, 0))
part:setRot(0, 45, 0)
part:setScale(1.2, 1.2, 1.2)
```

## 定位器与挂点

| 方法 | 返回 | 说明 |
| -------------------------------- | ----------------------------- | ---------------- |
| `getLocator(name)` | `ysm_locator` 或 nil | 按名称获取定位器 |
| `getLocators()` | 数组 | 全部定位器 |
| `getLocatorWorldMatrix(name)` | `Matrix4` | 定位器世界矩阵 |
| `getLocatorWorldPos(name)` | `Vector3` | 定位器世界位置 |
| `getAttachment(name)` | `ysm_attachment_point` 或 nil | 按名称获取挂点 |
| `getAttachments()` | 数组 | 全部挂点 |
| `getAttachmentWorldMatrix(name)` | `Matrix4` | 挂点世界矩阵 |
| `getAttachmentWorldPos(name)` | `Vector3` | 挂点世界位置 |

`ysm_locator`：

- `getName()`、`getBoneName()`、`getRole()`、`getRoleName()`；
- `isLeftSide()`；
- `getDefaultItemTransform()`。

`ysm_attachment_point`：

- `getName()`、`getBoneName()`、`getType()`、`getTypeName()`；
- `getRole()`、`getRoleName()`、`isLeftSide()`；
- `getDefaultItemTransform()`；
- `getLocator()`、`getPart()`。

## 动画

| 方法 | 说明 |
| --------------------------------------- | --------------------- |
| `isNativeStateMachineEnabled()` | 原生状态机是否开启 |
| `setNativeStateMachineEnabled(bool)` | 开启/关闭原生状态机 |
| `isNativeAnimationEnabled(name)` | 单个原生动画是否启用 |
| `setNativeAnimationEnabled(name, bool)` | 启用/禁用单个原生动画 |
| `playAnimation(name)` | 播放动画 |
| `stopAnimation(name)` | 停止动画 |
| `getControllers()` | 控制器名称列表 |
| `getControllerStates()` | 控制器当前状态表 |
| `getActiveAnimations()` | 正在播放的动画表 |

`getActiveAnimations()` 每项包含：

```lua
{
    name = "idle",
    time = 1.25,
    length = 2.0,
    weight = 1.0,
    target_weight = 1.0,
    loop = "loop",
    native = true,
}
```

## 状态机只读查询（alpha.5）

| 方法                            | 返回         | 说明                                                                                                 |
| ------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| `getActionState()`              | 字符串       | 当前基础动作状态；无 YSM 运行时时为空字符串                                                          |
| `getNativeAnimation()`          | 字符串       | 当前原生动画名；无运行时时为空字符串                                                                 |
| `getHandActions()`              | 表           | `left` 和 `right` 各包含 `hold`、`action` 动画名及 `paused` 布尔值；无运行时为空表，动画名可能为 nil |
| `getControllerState(name)`      | 字符串或 nil | 指定控制器当前状态                                                                                   |
| `getControllerStateTime(name)`  | 数字         | 当前状态的时间，单位为秒；无运行时或名称为 nil 时为 0                                                |
| `getControllerStateNames(name)` | 字符串数组   | 指定控制器声明的状态名；找不到时为空数组                                                             |

```lua
local state = ysm_model:getControllerState("controller.animation.example")
if state then
    log(state .. " " .. ysm_model:getControllerStateTime("controller.animation.example"))
end
local hands = ysm_model:getHandActions()
if hands.left then
    log(tostring(hands.left.action))
end
```

这些方法只读取当前模型的运行状态；查询其他玩家已加载的 YSM 模型可参考 [`ysm_display`](/scripting/ysm-display)。

## 函数、事件与同步键

| 方法 | 返回 | 说明 |
| --------------------- | ---------- | ---------------- |
| `getFunctions()` | 字符串数组 | 模型函数调试名 |
| `getEvents()` | 表 | 事件名到监听列表 |
| `getRecentEvents()` | 字符串数组 | 最近事件 |
| `getRecentSyncKeys()` | 字符串数组 | 最近同步键 |

这些主要用于调试；不要依赖内部调试字符串做正式逻辑。

## 动作与控件

| 方法 | 返回 | 说明 |
| --------------- | ---------- | -------------------------- |
| `getActions()` | 字符串数组 | 动作 id |
| `getControls()` | 字符串数组 | YSM 控件 id（`ysm.` 前缀） |

动作的创建与轮盘操作使用 [`ysm_actions`](/scripting/ysm-actions)。

## 示例：在头部生成粒子

```lua
function events.tick()
    if not ysm_model:isYsm() then return end

    local head = ysm_model:getPart("Head")
    if not head then return end

    local pos = head:getWorldPos()
    particles:newParticle("minecraft:flame", pos)
end
```

## 示例：读取控制器

```lua
function events.tick()
    local controllers = ysm_model:getControllers()
    local states = ysm_model:getControllerStates()

    for _, name in ipairs(controllers) do
        log(name .. " = " .. tostring(states[name]))
    end
end
```

## 注意

- 装饰脚本中只能访问当前实例的模型，不能访问其他玩家的 Avatar。
- 修改部件姿态会覆盖作者动画；需要恢复时调用 `resetPose()`。
- 纹理、动画与动作是否可用取决于模型本身。
- 所有调用在模型不是 YSM 时应先判断，避免对空运行时操作。

## 相关页面

- [YSM 模型支持](/omnimorph/ysm)
- [Molang 表达式与控制器](/omnimorph/molang)
- [`ysm_actions`](/scripting/ysm-actions)
- [YSM 动作轮盘](/omnimorph/action-wheel)
