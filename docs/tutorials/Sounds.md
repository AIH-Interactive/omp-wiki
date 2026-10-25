---
title: 声音
sidebar_label: 声音
---

播放声音教程

借助 Figura，你可以播放自定义声音，也可以播放 Minecraft 自带的声音。

本文假设你已经知道要避免在 init 中调用 player。

## 播放声音

播放声音最常见的方式是使用声音 API 中的 <code>playSound</code> 函数。

```lua
sounds:playSound(soundID, position, volume, pitch, loop)
```

可以看到，这个函数接受五个参数：声音 ID、播放位置、音量（决定玩家需要离得多近才能听到该声音，默认值为 1）、音调（默认值为 1），以及声音结束后是否立即重新开始播放（默认值为 false）。

对于 Minecraft 声音，声音 ID 是声音的内部名称，可以在 [Minecraft Wiki](https://minecraft.wiki/w/Sounds.json/Java_Edition_values) 的 Sound Event 列中找到。播放时会从该 ID 关联的多个声音中随机选择一个。

示例，注意 id 是字符串，因为它带有引号：

```lua
sounds:playSound("entity.bat.ambient", player:getPos())
```

这个示例中我把玩家位置作为播放位置传入，否则声音会在世界坐标 (0,0,0) 处播放。由于省略了音量、音调与循环参数，Figura 会自动填入默认值 1、1 和 false。也就是说，它会以默认音调、默认音量播放，并且不会循环。

补全其他参数的示例：

```lua
sounds:playSound("entity.bat.ambient", player:getPos(), 1, 1, false)
```

## 自定义声音

播放自定义声音与播放 Minecraft 声音完全相同，只是声音 ID 变成了声音文件的名称。

例如：如果你的文件名是 <code>horn.ogg</code>，那么 playSound 这一行应写成这样：

```lua
sounds:playSound("horn", player:getPos())
```

Minecraft 只能播放特定格式的声音文件，即 .ogg 文件。这里有一个[在线 OGG 转换器](https://audio.online-convert.com/convert-to-ogg)。你需要把音频声道设置改为 <code>mono</code>，把音频编解码器改为 <code>Vorbis</code>。

如果你的自定义声音存放在形象内的子文件夹中，子文件夹名会以如下方式加到声音名称前面：

```lua
sounds:playSound("subfolder.horn", player:getPos())
```

### 单声道与立体声声音

声道类型决定左右耳是否拥有两个独立声道（即左右耳听到的内容可以不同），还是两耳共用同一个声道。

在文件大小上，单声道声音只有立体声的一半。单声道的行为也与常见的原版声音相同，即只有靠近你的人才能听到。

立体声声音要大得多（而声音文件的体积本来就不小），而且会像激活末地传送门那样向 _服务器上的所有人_ 播放。除了把声道改为单声道，没有别的办法绕过这一点。

## 其他播放声音的方式

如果你想让一个较长的或循环播放的声音跟随你的移动，就需要换一种播放方式。

你需要把声音的引用保存到一个变量中，以便后续使用

```lua
local wDeath = sounds["entity.wither.death"]
```

现在你可以在该局部作用域内的任何位置使用凋灵死亡音效。

```lua
wDeath:play():loop(true)
```

这会播放声音并让它循环，但由于没有指定位置，它会在世界坐标 (0,0,0) 处播放。

```lua
function events.tick()
    wDeath:pos(player:getPos())
end
```

完整示例：

```lua
local wDeath = sounds["entity.wither.death"]
wDeath:play():loop(true)
function events.tick()
    wDeath:pos(player:getPos())
end
```

用这种方式同样可以调整音量、音调与循环。
