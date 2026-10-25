---
sidebar_position: 22
title: 第一个 YSM 模型
---

# 第一个 YSM 模型

## 你将完成

在 OmniMorph 中加载一个 YSM 模型，切换纹理，使用动作轮盘，并用 Lua 读取模型信息。

## 准备

- 已安装 OmniMorph。
- 有一个受支持格式的 YSM 模型（目录、ZIP 或加密 `.ysm`）。
- 已阅读 [YSM 模型支持](/omnimorph/ysm)。
- 如果要自己制作 YSM 模型，请先阅读 [YSM Wiki 入门](https://ysm.cfpa.team/wiki/intro/)。

## 步骤 1：放入模型

把模型放入：

```text
.minecraft/omnimorph/avatars/
```

目录形式应包含 `ysm.json`（新版）或 `main.json`（旧版）。

## 步骤 2：加载与启用

1. 打开衣柜。
2. 刷新。
3. 在格式筛选中选择“非加密 YSM”或“加密 YSM”。
4. 选择模型。
5. 点击“启用”。

如果模型只显示部分部件，先检查模型文件是否完整。

## 步骤 3：切换纹理

在衣柜的“YSM 纹理”区域选择纹理。切换会立即影响预览与当前模型。

## 步骤 4：使用动作轮盘

1. 打开动作轮盘。
2. 选择页面/槽位，或按 1–8。
3. 松开结束按住类动作。

如果轮盘为空，说明模型没有声明动作。

## 步骤 5：用 Lua 读取模型

```lua
function events.tick()
    if not ysm_model:isYsm() then
        return
    end

    local head = ysm_model:getPart("Head")
    if head then
        local pos = head:getWorldPos()
        -- 在头部生成粒子
        particles:newParticle("minecraft:flame", pos)
    end
end
```

更多接口见 [`ysm_model`](/scripting/ysm-model)。

## 步骤 6：查看控制器

```lua
function events.tick()
    local states = ysm_model:getControllerStates()
    for name, state in pairs(states) do
        log(name .. " = " .. state)
    end
end
```

## 排查

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 模型不显示 | 缺少清单文件/格式不支持 | 检查 `ysm.json`/`main.json` |
| 动画不播放 | 控制器条件不满足/状态机关闭 | 检查 Molang 与原生状态机 |
| 动作轮盘为空 | 模型没有动作 | 查看模型声明 |
| 纹理错乱 | 纹理路径错误 | 重新加载或检查模型 |

## 下一步

- [Molang 表达式与控制器](/omnimorph/molang)
- [YSM 动作轮盘](/omnimorph/action-wheel)
- [`ysm_model`](/scripting/ysm-model)
- [`ysm_actions`](/scripting/ysm-actions)
