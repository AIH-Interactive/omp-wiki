import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

本页介绍如何从全局 ModelPart <code>models</code> 访问任意 ModelPart

# 获取 ModelPart

所有 ModelPart 都有一个共同特性：用子 ModelPart 的名称[索引](/tutorials/types/Tables#generic-indexing)父 ModelPart，即可取得该子 ModelPart。<br/>
<code>models</code> 本身就是一个 ModelPart。形象中的所有 bbmodel 文件都是 <code>models</code> 的子 ModelPart。<br/>
Blockbench 项目根目录下的所有内容都是该 bbmodel ModelPart 的子项。<br/>
再往下，父子关系遵循 Blockbench 大纲（OUTLINER）中定义的父级结构。<br/>
例如方块（cube）<Emoji icon="blockbench/cube"/> <code>RightArm</code>，<br/>

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="Head" icon="blockbench/group">
      <FileTreeNode label="Head" icon="blockbench/cube"/>
      <FileTreeNode label="Head Layer" icon="blockbench/cube"/>
    </FileTreeNode>
    <FileTreeNode label="RightArm" icon="blockbench/group">
      <FileTreeNode label="RightArm" icon="blockbench/cube"/>
      <FileTreeNode label="RightArm Layer" icon="blockbench/cube"/>
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

可通过 <code>models.model.RightArm.RightArm</code> 访问

# 存储 ModelPart

始终直接从 <code>models</code> 开始索引并没有什么特别之处（它只是另一个 ModelPart）。如果脚本中会多次使用某个 ModelPart，可以把它存入变量，方便后续访问。

```lua
--sets a World parented part to match the player's position and body rotation
local worldPart = models.model.World
function events.RENDER(delta, context)
    worldPart:setPos(player:getPos(delta) * 16)
    worldPart:setRot(0, -player:getBodyYaw(delta) + 180, 0)
end
```

# 子文件夹中的 bbmodel

子文件夹中的 bbmodel 文件属于特殊情况：此时文件夹本身会充当另一个 ModelPart。<br/>

<FileTreeRoot>
  <FileTreeNode label="subfolderA" icon="file/folder">
    <FileTreeNode label="Pet.bbmodel" icon="file/bbmodel"/>
    <FileTreeNode label="bow.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
  <FileTreeNode label="subfolderB" icon="file/folder">
    <FileTreeNode label="model.bbmodel" icon="file/bbmodel"/>
    <FileTreeNode label="bow.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

bbmodel <Emoji icon="file/bbmodel"/> <code>Pet.bbmodel</code> 可通过 <code>models.subfolderA.Pet</code> 访问。<br/>
