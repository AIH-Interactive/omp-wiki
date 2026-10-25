---
sidebar_position: 10
title: 装饰动画
---

# 装饰动画

> 状态：稳定（预览）；仅作用于衣柜草稿
> 适用版本：OmniMorph 1.0.0-alpha.4.1

装饰动画面板用于在衣柜中预览装饰自带的动作，不会改变正式装备。

## 打开

1. 打开衣柜。
2. 选择已启用装饰的配装。
3. 点击“装饰动画”。

## 操作

- 点击动作，或按数字键 **1–8** 选择；
- 滚动鼠标滚轮翻页；
- 按住动作时播放，松开结束；
- 仅预览草稿，不会准备或装备模型。

:::note
装饰动画只对当前草稿生效；关闭衣柜或切换配装后不会保留播放状态。
:::

## 作者入口

装饰脚本可以用 `cosmetic_animations` 指定入口页：

```lua
cosmetic_animations:setPage("main")
```

入口页决定“装饰动画”面板默认显示哪一页。未知页名会被拒绝。

## 动画事件

作者可以监听动画事件：

```lua
cosmetic_animations:onEvent(function(event)
    if event.type == "keyframe" and event.marker == "sparkle" then
        -- 在关键帧生成粒子
    end
end)
```

事件字段见 [`cosmetic_animations`](/scripting/cosmetic-animations)。

## 限制

- 事件在下一 tick 派发；
- 队列与回调次数受预算限制；
- 队列满时丢弃新通知并记录错误；
- 仅预览草稿，不影响正式装备或其他玩家。

## 常见问题

**面板为空？**
当前装饰没有动作，或没有声明入口页。

**动画不播放？**
检查装饰是否已挂载、动作是否存在、是否被停用。

**按 1–8 没反应？**
确认面板处于焦点状态，且对应槽位有动作。

## 相关页面

- [装饰系统](/omnimorph/cosmetics)
- [YSM 动作轮盘](/omnimorph/action-wheel)
- [`cosmetic_animations`](/scripting/cosmetic-animations)
