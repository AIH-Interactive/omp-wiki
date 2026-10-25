import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

# 杂项全局对象与函数

本页介绍 Figura 向全局 Lua 状态添加的各种内容。

:::warning
本页仍在完善中。这里已经收录 Figura 文档中的全部信息，我们正在补充更易理解的说明。
:::

---

### <code>figuraMetatables</code> \{#figuraMetatables}

一个表，包含 Figura 各对象类型的全部元表。

这些元表可以修改。

---

### <code>listFiles()</code> \{#listFiles}

一个函数，返回一个表，表中包含指定路径下的全部脚本文件名。

如果未指定路径，则从根文件夹读取。

还可以传入第二个布尔参数，用于同时列出子文件夹内的文件。

可以使用 `./` 和 `../` 相对于当前执行的脚本访问文件夹。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
listFiles()
```

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
listFiles(folder)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| folder | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
listFiles(folder, subFolders)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| folder     | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| subFolders | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
-- Using autoscripts in avatar.json,
-- you can prevent loading scripts by default and instead require them like so
-- highlight-next-line
for _, script in ipairs(listFiles("/scripts", true)) do
    require(script)
end
```

---

### <code>parseJson()</code> \{#parseJson}

接收一个 JSON 字符串作为参数，并将其转换为 Lua 值。

对象和数组会相应地转换为表。

```lua
parseJson(jsonString)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| jsonString | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>AnyType</code> | -           |

**示例：**

```lua
function events.CHAT_RECEIVE_MESSAGE(msg, jsonStr)
    -- highlight-next-line
    local json = parseJson(jsonStr)
    -- Gets the name of message sender
    local sender = json.with[1].hoverEvent.contents.name.text
end
```

---

### <code>print()</code> \{#print}

**别名：** `log()`

一个把参数写入聊天栏的函数。

虽然语法上只写了一个参数，但你可以传入任意多个。

它们都会被打印，并以制表符空格分隔。

返回所有值的字符串表示。

```lua
print(arg)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| arg  | <code>Varargs</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
print("hello, world!")

print("Avatar:", avatar:getName())
```

---

### <code>printJson()</code> \{#printJson}

**别名：** `logJson()`

接收一个 Minecraft JSON 字符串作为参数，并将格式化后的结果打印到聊天栏，不带 Lua print 前缀。

虽然语法上只写了一个参数，但你可以传入任意多个。

它们都会被打印，并依次追加到前一个参数的末尾。

返回格式化后的字符串。

```lua
printJson(json)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| json | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

<!-- prettier-ignore -->
```lua
local wikiAd = {
    "",
    { text = "Learn more about Figura " },
    {
        text = "here",
        underlined = true,
        color = "aqua",
        clickEvent = {
            action = "open_url",
            value = "https://wiki.figuramc.org",
        }
    },
    { text = ".\n" }
}

-- highlight-next-line
printJson(toJson(wikiAd))
```

---

### <code>printTable()</code> \{#printTable}

**别名：** `logTable()`

第一个参数要么是表，要么是 Userdata，后者指任一新增的 Figura 类型。

将表以特殊格式打印到聊天栏。

如果传入的是 userdata，会自动转换为表或字符串并显示。

对于表中嵌套表的情况，“maxDepth”参数决定展开到多深。

maxDepth 的默认值为 1。

第三个参数“silent”会跳过聊天栏打印，只返回字符串。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
printTable(table)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| table | <code>[Table](/tutorials/types/Tables)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
printTable(javaObject)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| javaObject | <code>Userdata</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="重载 3">

```lua
printTable(table, maxDepth)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| table    | <code>[Table](/tutorials/types/Tables)</code>    | -           | -       |
| maxDepth | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-4" label="重载 4">

```lua
printTable(javaObject, maxDepth)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| javaObject | <code>Userdata</code>                            | -           | -       |
| maxDepth   | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-5" label="重载 5">

```lua
printTable(table, maxDepth, silent)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| table    | <code>[Table](/tutorials/types/Tables)</code>     | -           | -       |
| maxDepth | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| silent   | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-6" label="重载 6">

```lua
printTable(javaObject, maxDepth, silent)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| javaObject | <code>Userdata</code>                             | -           | -       |
| maxDepth   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| silent     | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
</Tabs>

**示例：**

```lua
printTable(textures:getTextures())
```

---

### <code>require()</code> \{#require}

require() 函数接收你的某个脚本的名称，名称不含 .lua 扩展名。

如果该脚本此前没有运行过，会运行它并返回该脚本的返回值。

如果此前已经运行过，则不会再次运行该文件，而是返回与第一次相同的内容。

如果被 require 的脚本没有返回值，require() 会返回 true。

如果给出的名称不属于你的任何脚本，则会报错。

可以使用 `./` 和 `../` 相对于当前执行的脚本访问脚本。

```lua
require(scriptName)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| scriptName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>AnyType</code> | -           |

**示例：**

#### 根文件夹中的脚本

<FileTreeRoot>
  <FileTreeNode label="MyCoolAvatar" icon="file/folder">
    <FileTreeNode label="script" icon="file/lua"/>
    <FileTreeNode label="JimmyAnims" icon="file/lua"/>
  </FileTreeNode>
</FileTreeRoot>

```lua
-- script.lua
require("JimmyAnims")
```

#### 其他文件夹中的脚本

<FileTreeRoot>
  <FileTreeNode label="MyCoolAvatar" icon="file/folder">
    <FileTreeNode label="script" icon="file/lua"/>
    <FileTreeNode label="MyFolder" icon="file/folder">
      <FileTreeNode label="GSAnimBlend" icon="file/lua"/>
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

```lua
-- script.lua
require("MyFolder.GSAnimBlend")
```

---

### <code>toJson()</code> \{#toJson}

**别名：** `toJson()`

接收任意 Lua 值，并将其转换为 JSON 字符串。

不接受函数，函数会被视为 null。

```lua
toJson(value)
```

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| value | <code>AnyType</code> | -           | -       |

**返回：**

| 类型 | 说明 |
| --- | --- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**示例：**

```lua
nameplate.ALL:setText(
-- highlight-next-line
    toJson({
        text = "Wiki",
        color = "#99BBEE",
    })
)
```

---

### <code>type</code> \{#type}

Figura 覆盖了 Lua 的 type() 函数。

用于 Figura 类型时，返回该类型在文档和 figuraMetatables 全局对象中显示的类型名。

对一个元表带有 \_\_type 键的表调用时，返回对应的值。

**示例：**

```lua
type(2) -- number
type("foo") -- string
type(models) -- ModelPart
type(setmetatable({}, { __type = "MyType" })) -- MyType
```

---
