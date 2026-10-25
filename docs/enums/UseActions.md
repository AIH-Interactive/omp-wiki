---
title: 使用动作
sidebar_label: 使用动作
---

表示你正在使用的物品具有哪种持续右键动作。此处的使用动作只覆盖按住不放的操作；像放置方块、喂食动物，或使用按钮、门、活板门这类方块这样的单次点击动作，并没有对应的使用动作。

**示例**：

```lua
function events.tick()
    -- highlight-next-line
    local isEating = player:getActiveItem():getUseAction() == "EAT"
    animations.myModel.eat:setPlaying(isEating)
end
```

---

## 所有使用动作

| 动作        | 说明                                       |
| ----------- | ------------------------------------------ |
| `NONE`      | 未使用任何使用动作                         |
| `EAT`       | 进食                                       |
| `DRINK`     | 饮用                                       |
| `BLOCK`     | 格挡                                       |
| `BOW`       | 拉弓                                       |
| `SPEAR`     | 准备投掷三叉戟                             |
| `CROSSBOW`  | 装填弩（手持已装填的弩时不会出现）         |
| `SPYGLASS`  | 通过望远镜观察                             |
| `TOOT_HORN` | 吹响山羊角                                 |
| `BRUSH`     | 使用刷子                                   |
