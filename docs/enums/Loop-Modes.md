# 循环模式（LoopModes）

这些是 Blockbench 动画可以设置的循环模式。可以在 Blockbench 中初始化，也可以在代码中通过 <code>setLoop(String)</code> 修改。

**示例**：

```lua
animations.myModel.myAnimation:setLoop("ONCE")
```

---

| 模式   | 说明                       |
| ------ | -------------------------- |
| `LOOP` | 播放到时间轴末尾后重新开始 |
| `ONCE` | 不循环                     |
| `HOLD` | 停留在动画的最后一个关键帧 |
