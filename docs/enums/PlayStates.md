---
title: 播放状态（PlayStates）
sidebar_label: 播放状态
---

Blockbench 动画的播放状态，可通过 <code>getPlayState()</code> 检测。

**示例**：

```lua
function events.tick()
    -- highlight-next-line
    local isDancing = animations.myModel.dance:getPlayState() == "PLAYING"
    models.myModel.discoBall:setVisible(isDancing)
end
```

---

## 全部播放状态

| 播放状态  | 说明                     |
| --------- | ------------------------ |
| `STOPPED` | 动画未在播放             |
| `PAUSED`  | 动画暂停在某个特定时间点 |
| `PLAYING` | 动画正在播放             |
| `HOLDING` | 动画停留在最后一帧       |
