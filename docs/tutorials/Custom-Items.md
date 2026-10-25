import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

# 自定义物品

自定义物品教程

使用 Figura 可以制作在第一人称和第三人称下都可见的自定义物品。

需要把 Item [关键字](../enums/ModelPartParentTypes) 与 item_render 事件结合使用。

## Item 关键字

如果把 Blockbench 的某个组设为 Item 关键字（组名以 <code>Item</code> 开头），这个组就会准备就绪，可直接作为物品使用。没有对应事件时，Item 组会消失，同时你手持的每个物品也会消失。关键字必须写成首字母大写的 Item。

<img src={require("@site/static/img/items/good-keyword.png").default} width="400"></img>

## item_render 事件

item_render 事件会为每个正在渲染的物品每帧运行一次，每个物品都在各自的事件副本中独立处理。

要让 Item 显示出来，必须在 item_render 事件中返回它。下面的示例假设 bbmodel 名为 <code>model</code>，带关键字的组名为 Item。如果想测试，请把 <code>model</code> 换成你的 bbmodel 名字，并把 Item 组换成你自己的组名。

```lua
function events.item_render()
    return models.model.Item
end
```

这样会把你手持的每一个物品都替换成你的自定义物品。

## 替换特定物品

下面的示例按 id 替换单个物品：

```lua
function events.item_render(item)
    if item.id == "minecraft:crossbow" then
        return models.model.ItemBow
    end
end
```

下面的示例按名称替换单个物品：

```lua
function events.item_render(item)
    if item:getName() == "Lightning" then
        return models.model.ItemBow
    end
end
```

可以用事件参数获取手持物品的不同信息，包括：物品堆（itemstack）、渲染模式、位置、旋转、缩放，以及物品是否在左手上。[可用的物品渲染模式。](../enums/ItemDisplayModes)

```lua
function events.item_render(item, mode, pos, rot, scale, left)
end
```

这里列出了所有可取到的值，但多数情况下只需要 item，有时还会用到 mode。下面我们来替换弓、盾牌和所有剑。它们对应一个结构如下的 Blockbench 模型：

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="ItemSword" icon="blockbench/group"/>
    <FileTreeNode label="ItemBow" icon="blockbench/group"/>
    <FileTreeNode label="ItemShield" icon="blockbench/group"/>
  </FileTreeNode>
</FileTreeRoot>

```lua
function events.item_render(item)
    if item.id == "minecraft:bow" then
        return models.model.ItemBow
    elseif item.id == "minecraft:shield" then
        return models.model.ItemShield
    elseif item.id:find("sword") then
        return models.model.ItemSword
    end
end
```

find 函数会在 id 中查找 “sword” 这个词，因此不必把每个剑的 id 都写一遍。这样也能兼容模组添加的剑。

## 注意事项

1. _不要_ 把 Item 组放进其他任何组里。Blockbench 的大纲视图应当如下：

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="Item" icon="blockbench/group"/>
  </FileTreeNode>
</FileTreeRoot>

或

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="Item" icon="blockbench/group"/>
    <FileTreeNode label="Item2" icon="blockbench/group"/>
  </FileTreeNode>
</FileTreeRoot>

因为这类关键字可以有多个。**不要**把一个 Item 关键字嵌套在另一个里面。另外，**不要**在一个 Item 关键字的实例中放多个自定义物品。

<img src={require("@site/static/img/items/bad-location.png").default} width="400"></img>

你**可以**把 Item 组放进其他组，但要小心，这样做更容易产生非预期行为。例如把它放进 RightArm 或 LeftArm，它会被强制不渲染，也就失去了意义。

2. Blockbench 中的 0,0,0 就是世界中玩家手持物品的位置。
