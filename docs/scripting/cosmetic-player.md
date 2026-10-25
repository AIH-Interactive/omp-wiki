---
sidebar_position: 11
title: cosmetic_player（穿戴者）
sidebar_label: cosmetic_player（穿戴者）
---

# cosmetic_player

> 状态：稳定
> 适用版本：OmniMorph 1.0.0-alpha.4.1
> 可用范围：装饰脚本

装饰脚本中的 `player` / `user` 是只读的穿戴者查询对象，不会暴露其他实体、Avatar 或主机权限。

## 方法

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `getUUID()` | 字符串 | 穿戴者 UUID |
| `getName()` | 字符串 | 名称 |
| `getPos(delta)` | `Vector3` | 位置；`delta` 可省略 |
| `getRot(delta)` | `Vector2` | 旋转；`delta` 可省略 |
| `getVelocity()` | `Vector3` | 速度 |
| `isLoaded()` | 布尔 | 实体是否仍存在 |
| `isSneaking()` | 布尔 | 是否潜行 |
| `isOnGround()` | 布尔 | 是否着地 |
| `getPose()` | 字符串 | 姿态 |
| `getHealth()` | 数字 | 生命值（非生物为 0） |

## 示例

```lua
function events.tick()
    if not player:isLoaded() then
        return
    end

    local visible = not player:isSneaking()
    models.MyCosmetic:setVisible(visible)
end
```

## 与普通 player API 的差异

| 能力 | 普通脚本 | 装饰脚本 |
| --- | --- | --- |
| 读取自身位置/旋转/速度 | 是 | 是 |
| 读取生命/姿态/潜行 | 是 | 是 |
| 修改实体、使用物品、发送聊天 | 是 | 否 |
| 访问其他实体 | 是 | 否 |
| 访问其他作者 Avatar | 否 | 否 |

## 注意

- 只读；不要尝试调用写操作。
- 装饰脚本运行在受限环境，不能借此绕过主机权限。
- `isLoaded()` 为 false 时应停止访问其他状态。

## 相关页面

- [`cosmetic_state`](/scripting/cosmetic-state)
- [`cosmetic_animations`](/scripting/cosmetic-animations)
- [装饰系统](/omnimorph/cosmetics)
