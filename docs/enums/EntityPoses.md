---
title: 生物姿势
sidebar_label: 生物姿势
---

生物实体可能处于的姿势列表，可通过 <code>:getPose()</code> 获取

**示例**：

```lua
function events.tick()
    animations.myModel.sleep:setPlaying(player:getPose() == "SLEEPING")
end
```

---

## 所有生物姿势

| 姿势 | 说明 | 实体 |
| --- | --- | --- |
| `STANDING` | 所有实体（包括玩家）在未处于其他任何姿势时都是 `STANDING` | 所有实体 |
| `FALL_FLYING` | 使用鞘翅滑翔时 | 玩家 |
| `SLEEPING` | 睡觉时 | 玩家 |
| `SWIMMING` | 处于游泳姿势时，也包括爬行时 | 玩家 |
| `SPIN_ATTACK` | 使用附有激流的三叉戟冲刺时 | 玩家 |
| `CROUCHING` | 潜行时 | 玩家 |
| `DYING` | 死亡时 | 除玩家外的所有实体 |
| `LONG_JUMPING` | 山羊用力大跳时 | 山羊 |
| `CROAKING` | 发出呱呱叫声时 | 青蛙 |
| `USING_TONGUE` | 只是在摆弄舌头 | 青蛙 |
| `SITTING` | 趴下休息时 | 骆驼 |
| `ROARING` | 咆哮！ | 监守者 |
| `SNIFFING` | _嗅探_ | 监守者 |
| `EMERGING` | 天啊，它要出来了，小心 | 监守者 |
| `DIGGING` | 我是矮人，我在…… | 监守者 |
| `INHALING` | - | 旋风人 |
| `SHOOTING` | - | 旋风人 |
| `SLIDING` | - | 旋风人 |
