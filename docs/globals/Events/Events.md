---
sidebar_position: 1
title: Events（事件）
sidebar_label: Events（事件）
---

包含 Figura 全部事件的全局 API。

通过名称 `events` 访问。

---

### Init（初始化阶段）

如果代码不在任何事件或函数内运行，就属于 init 阶段，并且会在其他任何事件之前最先运行。此阶段调用 player API 会报错，请改用 entity_init。

---

### <code>getEvents()</code> \{#getEvents}

返回一个包含所有事件类型的表。

```lua
getEvents()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | 返回所有事件类型 |

**示例：**

```lua
events:getEvents()
```

---

## 事件

### <code>ENTITY_INIT()</code> \{#ENTITY_INIT}

entity_init 事件在形象对应的实体（通常是玩家）首次出现时运行。

它只运行一次，且没有参数。在此调用 player API 是安全的，因此它是面向玩家的初始化方式。

**示例：**

```lua
function events.entity_init()
    log("The player api has loaded!")
end
```

---

### <code>TICK()</code> \{#TICK}

如果形象对应的实体（玩家）存在，tick 事件会在每个游戏刻运行。一秒有 20 个游戏刻。这是最常用的事件。

Tick 没有参数，在此调用 player API 是安全的。

**示例：**

```lua
function events.tick()
    log("A tick has passed")
end
```

---

### <code>WORLD_TICK()</code> \{#WORLD_TICK}

world_tick 事件在每个游戏刻运行。一秒有 20 个游戏刻。

World_tick 没有参数，在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.world_tick()
    log("A tick has passed")
end
```

---

### <code>RENDER(delta,context,matrix)</code> \{#RENDER}

render 事件在形象渲染之前、每帧运行一次，并且要求形象对应的实体已经存在。在此调用 player API 是安全的。

Render 有三个参数，所有参数都是可选的。

第一个是 delta，取值 0 到 1，表示处于两个游戏刻之间的时间比例（因此在游戏刻开始时总是重置为 0）。Delta 最常用于平滑 Minecraft 每刻才更新一次的值。

第二个参数是当前渲染模式的上下文。例如：如果你处于第一人称，看到的是 FIRST_PERSON 上下文；如果同时开启了纸娃娃，则还会得到 PAPERDOLL 上下文。

第三个是用于渲染形象的源矩阵。由于 Minecraft 的一个 bug，当移动速度非常快（例如鞘翅飞行）时，该矩阵会是 NaN。

**示例：**

```lua
function events.render(delta, context, matrix)
    -- careful this will spam your chat
    log("The render context is... " .. context)

    -- using delta to smoothly animate from a position calculated in tick
    models.myModel:setPos(oldPos, newPos, delta)
end
```

---

### <code>POST_RENDER(delta,context,matrix)</code> \{#POST_RENDER}

该事件在形象渲染之后、每帧运行一次，并且要求形象对应的实体已经存在。在此调用 player API 是安全的。

它的参数与 render 相同。

**示例：**

```lua
function events.post_render(delta, context, matrix)
    -- careful this will spam your chat
    log("The render context is... " .. context)
end
```

---

### <code>WORLD_RENDER(delta)</code> \{#WORLD_RENDER}

WORLD_RENDER 事件在世界渲染之前、每帧运行一次。

只要世界可见就会运行，即使形象本身不可见，因此在第一人称下也会运行。

参数 delta 取值 0 到 1，表示游戏处于两个游戏刻之间的时间比例。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.world_render(delta)
    -- careful this will spam your chat
    log("A frame has passed!")
end
```

---

### <code>POST_WORLD_RENDER(delta)</code> \{#POST_WORLD_RENDER}

POST_WORLD_RENDER 事件在世界渲染之后、每帧运行一次。

只要世界可见就会运行，即使形象本身不可见，因此在第一人称下也会运行。

参数 delta 取值 0 到 1，表示游戏处于两个游戏刻之间的时间比例。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.post_world_render(delta)
    -- careful this will spam your chat
    log("A frame has passed!")
end
```

---

### <code>CHAT_SEND_MESSAGE(message)</code> \{#CHAT_SEND_MESSAGE}

CHAT_SEND_MESSAGE 事件在你每次于聊天栏发送消息时运行。

事件会传入一个字符串参数，内容为已发送的消息。

返回值会传递给同类型的后续事件；返回 NIL 会取消发送该消息，返回其他值则会修改发送的消息（如果设置允许）。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.chat_send_message(msg)
    host:setActionbar(msg)
    -- returns the message, allowing it to be sent in chat
    return msg
end

function events.chat_send_message(msg)
    host:setActionbar(msg)
    -- return nil, not allowing the message to be sent
    return nil
end

function events.chat_send_message(msg)
    host:setActionbar(msg)
    -- return a modified message, makes sure you're always excited about everything
    return msg .. "!"
end
```

---

### <code>CHAT_RECEIVE_MESSAGE(raw,text)</code> \{#CHAT_RECEIVE_MESSAGE}

CHAT_RECEIVE_MESSAGE 事件在每次于聊天栏收到消息时运行。

第一个参数是收到文本的原始字符串。

第二个参数是收到文本的 JSON 字符串表示。

如果第一个返回值不是 nil，消息会被替换为该值。

如果第一个返回值是 false，则会阻止添加该消息。

第二个返回值可选，是一个 RGB 向量，会用作该消息的背景色。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.chat_receive_message(raw, text)
    host:setActionbar(raw)
    -- Blocking any messages with my name so I can focus
    if raw:find("joey") then
        return false
    end
    return text
end

function events.chat_receive_message(raw, text)
    return text, vec(1, 0, 0) -- example of receiving the same message with a red background
end
```

---

### <code>DAMAGE(type,source,attacker,pos)</code> \{#DAMAGE}

接收四个参数：

（String）— 伤害类型。

（Entity）— 造成伤害的实体。

（Entity）— 发起攻击的实体。

（Vec3）— 伤害发生的位置。

如果没有直接的伤害来源，后三个参数可能为 nil。

**示例：**

```lua
function events.damage(type, source, attacker, pos)
    log("Damaged from " .. type)
    if attacker then
        log("by a " .. attacker:getType())
    end
end
```

---

### <code>SKULL_RENDER(delta,block,item,entity,mode)</code> \{#SKULL_RENDER}

在你的每个已放置到世界中的头颅方块上调用。

它有 5 个参数，如下所示：

（number）— 游戏刻 delta。

（blockstate）— 方块，当从头颅方块渲染时。

（itemstack）— 物品，当从头颅物品渲染时。

（entity）— 实体，当从头颅实体渲染时。

（mode）— 渲染类型（LEFT_HAND、HEAD、BLOCK 等）。

如果返回值为 true，该头颅将不会被渲染。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.skull_render(delta, block, item, entity, mode)
    log("The rendering mode of this skull is... " .. mode)
end
```

---

### <code>MOUSE_SCROLL(delta)</code> \{#MOUSE_SCROLL}

MOUSE_SCROLL 事件在每次滚动鼠标滚轮时运行。

参数 delta 表示滚动的方向。

如果返回值为 true，该事件会取消对应的原版功能。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.mouse_scroll(delta)
    log(delta)
end
```

---

### <code>MOUSE_MOVE(x,y)</code> \{#MOUSE_MOVE}

MOUSE_MOVE 事件在每次移动鼠标时运行。

它接收两个参数 x 和 y，表示相对上次保存位置的鼠标位移差。

如果返回值为 true，该事件会取消对应的原版功能。

注意：取消原版功能同时也会取消保存最后的鼠标位置。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.mouse_move(x, y)
    log(x, y)
end
```

---

### <code>MOUSE_PRESS(button,action,modifier)</code> \{#MOUSE_PRESS}

MOUSE_PRESS 事件在每次按下鼠标按键时运行。

它接收三个数字参数：“button”，被按下按键的数字 id；“action”，按键事件的状态（0 为松开，1 为按下，2 为按住）；“modifier”，一个位掩码数字，用于检测是否按下了修饰键（例如 shift 或 alt）。

如果返回值为 true，该事件会取消对应的原版功能。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

按住（hold）动作在 mouse_press 中不可用。mouse_press 的替代方案见[按键绑定 API](../tutorials/Keybinds)。

**示例：**

```lua
function events.mouse_press(button, action, modifier)
    log(button)
end
```

---

### <code>KEY_PRESS(key,action,modifier)</code> \{#KEY_PRESS}

KEY_PRESS 事件在每次按下键盘按键时运行。

它接收三个数字参数：“key”，被按下按键的数字 id；“action”，按键事件的状态（0 为松开，1 为按下，2 为按住）；“modifier”，一个位掩码数字，用于检测是否按下了修饰键（例如 shift 或 alt）。

如果返回值为 true，该事件会取消对应的原版功能。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

key_press 的替代方案见[按键绑定 API](../tutorials/Keybinds)。

**示例：**

```lua
function events.key_press(key, action, modifier)
    log(key)
end
```

---

### <code>CHAR_TYPED(character,modifier,codepoint)</code> \{#CHAR_TYPED}

CHAR_TYPED 事件在每次输入字符时运行。

它接收三个参数：由码点转换得到的“string”；“modifier”，一个位掩码数字，用于检测是否按下了修饰键（例如 shift 或 alt）；以及所输入字符的“codepoint”。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.char_typed(character, modifier, codepoint)
    log(character .. " was typed!")
end
```

---

### <code>USE_ITEM(item,action,particles)</code> \{#USE_ITEM}

USE_ITEM 事件在实体每次使用物品时运行。

事件会传入物品、动作，以及该物品会产生多少粒子。

如果返回值为 true，该事件会取消对应的原版功能。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

注意：相比 [player API](../globals/Player#isusingitem) 中的替代函数 <code>player:isUsingItem()</code>，此事件会慢若干游戏刻。

**示例：**

```lua
function events.use_item(item, action, particles)
    log(item)
end
```

---

### <code>ARROW_RENDER(delta,arrow)</code> \{#ARROW_RENDER}

ARROW_RENDER 事件会为形象主人射出的每支箭实体运行。

它接收两个参数：游戏刻 delta 与箭实体。

返回 true 会阻止该箭渲染，包括 Arrow 的父部件。

需要“Vanilla Model Change”权限。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.arrow_render(delta, arrow)
    log(arrow)
end
```

---

### <code>TRIDENT_RENDER(delta,trident)</code> \{#TRIDENT_RENDER}

figura.docs.events.trident_render

**示例：**

```lua
function events.trident_render(delta, trident)
    log(trident)
end
```

---

### <code>ITEM_RENDER(item,mode,pos,rot,scale,left)</code> \{#ITEM_RENDER}

在你的每个正在渲染的物品上调用。

它接收六个参数：正在渲染的物品、渲染模式、会应用到该物品的位置、旋转和缩放，以及它是否正在左手中渲染。

返回一个以 Item 为父对象的 ModelPart 会停止渲染该物品，并改为渲染返回的部件。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

更详细的说明见[自定义物品页面](../tutorials/Custom-Items)。

**示例：**

```lua
function events.item_render(item, mode, pos, rot, scale, left)
    log(item)
end
```

---

### <code>ON_PLAY_SOUND(id,pos,vol,pitch,loop,category,path)</code> \{#ON_PLAY_SOUND}

在每次播放新音效时调用。

接收以下参数：音效的 ID、它的世界坐标、音量、音高、该音效是否循环、音效分类，以及音效的文件路径。

返回 true 可阻止该音效播放。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.on_play_sound(id, pos, vol, pitch, loop, category)
    -- make sure the player is loaded
    if not player:isLoaded() then return end
    -- do our best to block only our own footsteps
    return id:find("step") and category == "PLAYERS" and (pos - player:getPos()):length() < 1
end
```

---

### <code>RESOURCE_RELOAD()</code> \{#RESOURCE_RELOAD}

在每次客户端资源重载时调用，便于你重新创建或更新资源纹理引用。

在此不做 <code>player:isLoaded()</code> 检查就调用 player API 会报错。

**示例：**

```lua
function events.resource_reload()
    log("Resources reloaded")
end
```

---

### <code>TOTEM()</code> \{#TOTEM}

当玩家使用不死图腾免于死亡时调用。

如果返回值为 true，动画会被取消。

**示例：**

```lua
function events.totem()
    log("Almost died!")
    return true
end
```

---
