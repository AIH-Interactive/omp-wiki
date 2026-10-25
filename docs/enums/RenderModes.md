---
title: 渲染模式（Render Modes）
sidebar_label: 渲染模式
---

渲染模式（Render Mode）表示形象当前所处的渲染场景。

**示例**：

```lua
function events.render(_, context)
    -- highlight-next-line
    models.myModel.World:setVisible(context ~= "FIRST_PERSON")
end
```

---

## 全部渲染模式

| 渲染模式             | 说明                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------- |
| `FIGURA_GUI`         | 处于 Figura 暂停菜单中                                                                 |
| `PAPERDOLL`          | Figura 的纸娃娃（paperdoll）                                                           |
| `MINECRAFT_GUI`      | 物品栏界面                                                                             |
| `FIRST_PERSON`       | 处于第一人称时（与一些说法不同：手持物品的第一人称也包括在内，即使此时整个形象已卸载） |
| `FIRST_PERSON_WORLD` | 未知                                                                                   |
| `RENDER`             | 处于第三人称时（其他玩家以此模式渲染该形象）                                           |
| `WORLD`              | 未知                                                                                   |
| `OTHER`              | 着色器等其它模组会触发此上下文                                                         |
