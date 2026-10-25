import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

# 形象元数据

avatar.json 信息

<Emoji icon="file/json"/> <code>avatar.json</code> 是存放形象元数据的文件，用于向 Figura 提供该形象的特定信息。

## JSON 基础

元数据以 JSON 格式保存，更准确地说，是一个 JSON 对象。它的行为与 Lua 表非常相似，只是语法不同。但 JSON 的语法非常严格，任何错误都会导致形象加载失败。

JSON 对象由键值对组成。键与值之间用冒号（<code>:</code>）分隔，条目之间用逗号（<code>,</code>）分隔。与 Lua 表不同，键必须是字符串。

```json
{
    "key": "value",
    "stringKey,numberValue": 4,
    "objectValue": {
        "key, but of sub object": "value, but of sub object"
    },
    "arrayWooo": [1, 2, "stringlol", {}, "42"]
}
```

## 元数据字段

Figura 会在这个 JSON 对象中查找特定的键，并根据其值执行相应操作。请注意，所有这些键都是可选的，只需要定义你关心的键。

### <code>"name"</code> : String

该键的值决定形象的名字。这个名字会显示在衣柜右侧的形象信息栏中，同时也决定在衣柜左侧查找该形象时使用的名称。<br/>
如果不存在此键，则使用存放 <Emoji icon="file/json"/><code>avatar.json</code> 文件的文件夹名称。

```json
{
    "name": "Katt"
}
```

### <code>"description"</code> : String

该键的值会显示在衣柜中形象名字的下方。

```json
{
    "name": "Katt",
    "description": "Example avatar.json"
}
```

### <code>"authors"</code> : String[]

该键的值是一个字符串数组。数组中可以包含多个值，Figura 要求这些值都是字符串。这些值会用于形象信息栏中的 Authors 字段。

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"]
}
```

### <code>"author"</code> : String

如果你不想使用 <code>"authors"</code>，可以用这个键填写单个作者。它的效果与只包含 1 个元素的 <code>"authors"</code> 完全相同。<br/>
如果存在 <code>"authors"</code> 键，则忽略此键。

### <code>"version"</code> : String

用于按[语义化版本（Semantic Versioning）](https://semver.org/)定义版本号。你可以在这里定义该形象能够运行的最低 Figura 版本。如果其他客户端使用的 Figura 版本低于此处定义的版本，对方的名牌上会显示一个 <Emoji icon="badge/warning"/> 警告徽标。将鼠标悬停其上时，会提示对方的 Figura 版本低于该形象设计所要求的版本。如果不存在此键，Figura 会使用加载该形象时的版本。<br/>

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["KitCat962", "Katakana962"],
    "version": "0.1.0"
}
```

### <code>"color"</code> : String

该键定义名牌上 <Emoji icon="badge/mark"/> Figura 标记的颜色。值必须是 3 位或 6 位十六进制颜色码字符串。例如 <code>"3ab"</code> 和 <code>"FF00FF"</code> 都是合法输入。如果不存在此键，则使用颜色 <code>"5AAAFF"</code>。

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9"
}
```

### <code>"autoScripts"</code> : String[]

默认情况下，形象中每个 <Emoji icon="file/lua"/> 脚本文件都会以未定义的顺序执行。<code>require</code> 函数可用于控制脚本首次执行的时间，但也有人更愿意在元数据中定义脚本顺序。该键是一个字符串数组，用于指定运行哪些脚本以及运行顺序。未在此处定义的脚本不会在形象初始化时默认运行，但仍可通过 <code>require</code> 运行。指定脚本时使用其文件名，不带 <code>.lua</code> 扩展名。如果脚本位于子文件夹中，必须一并写出该文件夹，文件夹之间用句点（<code>.</code>）分隔。<br/>
以以下形象为例：<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="halo.bbmodel" icon="file/bbmodel"/>
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel"/>
    </FileTreeNode>
    <FileTreeNode label="libs" icon="file/folder">
      <FileTreeNode label="armorAidLib.lua" icon="file/lua"/>
      <FileTreeNode label="RainbowNameplate.lua" icon="file/lua"/>
      <FileTreeNode label="JsonifyTextLib.lua" icon="file/lua"/>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="diamond_layer_1" icon="file/texture"/>
      <FileTreeNode label="diamond_layer_2" icon="file/texture"/>
    </FileTreeNode>
    <FileTreeNode label="script.lua" icon="file/lua"/>
    <FileTreeNode label="skin.png" icon="file/texture"/>
    <FileTreeNode label="pet.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

如果只希望在形象初始化时运行 <code>RainbowNameplate.lua</code>，<code>autoScripts</code> 应写成：<br/>

```json
"autoScripts":["libs.RainbowNameplate"]
```

在本页示例的元数据文件中，我们让只有 <Emoji icon="file/lua"/> <code>script.lua</code> 默认运行，再由该脚本自身对库脚本调用 <code>require</code>，把它们“导入”到自己之中。你可能会想：“既然 <code>require</code> 在控制脚本加载顺序上明显更好，那 <code>"autoScripts"</code> 还有什么用？”我的回答是：“我也不知道。”不过，如果把它设为空数组，则不会有任何脚本运行，这在调试时很有用。

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"]
}
```

### <code>"autoAnims"</code> : String[]

该键定义形象首次加载时应开始播放的动画。引用动画的字符串遵循 <code>"modelPath.animName"</code> 的模式。
以以下形象为例：<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="halo.bbmodel" icon="file/bbmodel"/>
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel"/>
    </FileTreeNode>
    <FileTreeNode label="libs" icon="file/folder">
      <FileTreeNode label="armorAidLib.lua" icon="file/lua"/>
      <FileTreeNode label="RainbowNameplate.lua" icon="file/lua"/>
      <FileTreeNode label="JsonifyTextLib.lua" icon="file/lua"/>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="diamond_layer_1" icon="file/texture"/>
      <FileTreeNode label="diamond_layer_2" icon="file/texture"/>
    </FileTreeNode>
    <FileTreeNode label="script.lua" icon="file/lua"/>
    <FileTreeNode label="skin.png" icon="file/texture"/>
    <FileTreeNode label="pet.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

如果要使用 bbmodel <Emoji icon="file/bbmodel"/> <code>player.bbmodel</code> 中的动画 <code>"idle"</code>，需要在 <code>"autoAnims"</code> 数组中写入字符串 <code>"player.idle"</code>。<br/>
文件夹之间用句点（<code>.</code>）分隔，而不是斜杠（<code>/</code>）。<br/>
如果要使用模型 <Emoji icon="file/bbmodel"/> <code>halo.bbmodel</code> 中的动画 <code>"spin"</code>，需要在 <code>"autoAnims"</code> 数组中写入字符串 <code>"accessories.halo.spin"</code>。<br/>
这里的写法不是表索引，不像通过索引 `animations` 表来获取 Animation 对象。它只是字符串拼接。<br/>
<code>autoAnims</code> 的适用场景非常有限，因为 99% 的情况下，你希望动画只在特定时刻播放或由某个触发器启动。真正适用的场景只有两种：一是需要一直循环播放的动画，而你不希望在脚本开头为播放它浪费约 8 条指令；二是这个形象没有任何脚本文件，而你希望保持这种状态。

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"],
    "autoAnims": ["player.idle", "accessories.halo.spin"]
}
```

### <code>"ignoredTextures"</code> : String[]

该键定义加载形象时应忽略哪些纹理。适用场景：某个立方体的纹理由代码设置，但 Figura 要求所有立方体都必须带有一个 Blockbench 纹理才能加载，于是你不得不用一个占位纹理浪费空间，或者在模型中使用另一张纹理，而那张纹理显示在该立方体上很可能效果不佳。有了这个键，你可以在 Blockbench 中保留占位纹理，同时避免加载该纹理占用宝贵的体积。<br/>
引用纹理的格式与通过 <code>textures</code> 全局对象获取 Texture 对象完全相同。<br/>
以该形象为例：<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="halo.bbmodel" icon="file/bbmodel"/>
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel"/>
    </FileTreeNode>
    <FileTreeNode label="libs" icon="file/folder">
      <FileTreeNode label="armorAidLib.lua" icon="file/lua"/>
      <FileTreeNode label="RainbowNameplate.lua" icon="file/lua"/>
      <FileTreeNode label="JsonifyTextLib.lua" icon="file/lua"/>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="diamond_layer_1" icon="file/texture"/>
      <FileTreeNode label="diamond_layer_2" icon="file/texture"/>
    </FileTreeNode>
    <FileTreeNode label="script.lua" icon="file/lua"/>
    <FileTreeNode label="skin.png" icon="file/texture"/>
    <FileTreeNode label="pet.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

假设该形象的盔甲由 <Emoji icon="file/lua"/> <code>armorAidLib.lua</code> 处理，它会把立方体的纹理切换为原版盔甲纹理。bbmodel 中其实不需要 <Emoji icon="file/texture"/> <code>diamond_layer_1</code> 和 <Emoji icon="file/texture"/> <code>diamond_layer_2</code> 这两张纹理，但如果把立方体改用 <Emoji icon="file/texture"/> <code>skin.png</code>，编辑模型时会非常麻烦。因此我们移除这两张未使用的纹理。

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"],
    "autoAnims": ["player.idle", "accessories.halo.spin"],
    "ignoredTextures": ["player.diamond_layer_1", "player.diamond_layer_2"]
}
```

### <code>"customizations"</code> : \{"ModelPart" : \{"Customization" : "String"}}

那个类型标识符看着有点奇怪？确实如此，但 <code>"customizations"</code> 属性就是这样。<br/>
<code>"customizations"</code> 允许对 ModelPart 进行 Blockbench 中无法完成的修改。这些操作同样可以通过脚本实现，但该字段的目的是让没有脚本的形象也能使用部分功能。<br/>
<code>"customizations"</code> 本身是一个 JSON 对象。它的键是 ModelPart 的引用，值是另一个 JSON 对象。_那个_对象中包含作用于所引用 ModelPart 的键值对。<br/>
以以下形象为例：<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel">
        <FileTreeNode label="cube" icon="blockbench/cube"/>
      </FileTreeNode>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="Head" icon="blockbench/group">
        <FileTreeNode label="Head" icon="blockbench/cube"/>
      </FileTreeNode>
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

要定位 <Emoji icon="blockbench/group"/> <code>Head</code>，应使用的键是 <code>"player.Head"</code>。<br/>
要定位 <Emoji icon="file/bbmodel"/> <code>ribbon</code>，应使用的键是 <code>"accessories.ribbon"</code>。<br/>

```json
{
    "customizations": {
        "player.Head": {},
        "accessories.ribbon": {}
    }
}
```

下面介绍这些子对象中可用的键。

#### <code>"primaryRenderType"</code> : String

设置主纹理（Primary/Default）使用的 RenderType。primaryRenderType 的默认值为 <code>"TRANSLUCENT"</code>。

```json
{
    "customizations": {
        "player.Head": {},
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL"
        }
    }
}
```

#### <code>"secondaryRenderType"</code> : String

设置次级/自发光（Secondary/Emissive/<code>\_e</code>）纹理使用的 RenderType。secondaryRenderType 的默认值为 <code>"EMISSIVE"</code>。

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL"
        }
    }
}
```

#### <code>"parentType"</code> : String

Blockbench 中的关键字会设置 ModelPart 的 ParentType。该键会覆盖该设置；如果没有关键字，则用它来设置。ParentType 的默认值为 <code>"None"</code>

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL"
        }
    }
}
```

#### <code>"moveTo"</code> : String

强制让指定的 ModelPart 引用成为此 ModelPart 的子级。如果你习惯把形象拆分成多个 bbmodel 来组织，这个键很有用，可以用它把各部分拼接在一起。

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL",
            "moveTo": "player.Head"
        }
    }
}
```

#### <code>"visible"</code> : Boolean

覆盖 Blockbench 中定义的可见性。适合在 Blockbench 中临时隐藏 ModelPart，以便更轻松地编辑模型，同时又不会影响形象的最终效果。

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL",
            "moveTo": "player.Head",
            "visible": true
        }
    }
}
```

#### <code>"remove"</code> : Boolean

该自定义项会让目标 ModelPart 完全不被加载。<br/>

```json
{
    "customizations": {
        "accessories.exampleMesh": {
            "smooth": true
        }
    }
}
```

#### <code>"smooth"</code> : Boolean

该自定义项必须直接应用于网格（mesh）对象。<br/>
它会计算顶点法线，使网格看起来平滑，减少单个三角形可见的棱角。

```json
{
    "customizations": {
        "accessories.exampleMesh": {
            "smooth": true
        }
    }
}
```

## 完整示例 <code>avatar.json</code>

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"],
    "autoAnims": ["player.idle", "accessories.halo.spin"],
    "ignoredTextures": ["player.diamond_layer_1", "player.diamond_layer_2"],
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL",
            "moveTo": "player.Head",
            "visible": true
        }
    }
}
```
