---
title: 玩家模型部件（PlayerModelParts）
sidebar_label: 玩家模型部件
---

这些是外层部件，配合 <code>player:isSkinLayerVisible(String)</code> 使用，用于检测玩家在 Minecraft 的“皮肤自定义”设置中启用了哪些部件。

**示例：**

```lua
log(player:isSkinLayerVisible("HAT"))
```

---

## 全部部件名称

| 部件           | 说明                   |
| -------------- | ---------------------- |
| `CAPE`         | 挂在背后的那块矩形布片 |
| `JACKET`       | 身体的外层             |
| `LEFT_SLEEVE`  | 左臂的外层             |
| `RIGHT_SLEEVE` | 右臂的外层             |
| `LEFT_PANTS`   | 左腿的外层             |
| `RIGHT_PANTS`  | 右腿的外层             |
| `HAT`          | 头部的外层             |
