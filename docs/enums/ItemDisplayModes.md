---
title: 物品显示模式（Item Display Modes）
sidebar_label: 物品显示模式
---

物品显示模式（Item Display Mode）可用于在 `item_render` 事件中判断物品当前的显示模式，也可用于为物品任务应用对应的变换。

---

## 物品任务专用

设置物品任务的显示模式后，物品会被应用对应的变换，看起来就像在该场景下渲染一样。

| 物品显示模式 | 说明                                              |
| ------------ | ------------------------------------------------- |
| `GUI`        | 物品在 GUI 中显示时使用的变换（例如玩家的物品栏） |
| `GROUND`     | 物品掉落到地面时使用的变换。                      |
| `FIXED`      | 物品放在物品展示框中时使用的变换。                |
| `NONE`       | 不应用任何变换。                                  |

**示例**：

<!-- prettier-ignore -->
```lua
models:newItem('CarrotTask')
    :setItem('minecraft:carrot')
-- highlight-next-line
    :setDisplayMode('GROUND')
```

---

## 通用模式

| 物品显示模式              | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| `FIRST_PERSON_RIGHT_HAND` | 处于第一人称右手时。                                         |
| `FIRST_PERSON_LEFT_HAND`  | 处于第一人称左手时。                                         |
| `THIRD_PERSON_RIGHT_HAND` | 处于第三人称右手时。                                         |
| `THIRD_PERSON_LEFT_HAND`  | 处于第三人称左手时。                                         |
| `HEAD`                    | 头部槽位中的物品既不是头部（玩家、生物或龙），也不是头盔时。 |

**示例**：

```lua
function events.item_render(item, mode, pos, rot, scale, lefty)
    -- highlight-next-line
    if mode == "HEAD" then
        return models.myModel.Item
    end
end
```
