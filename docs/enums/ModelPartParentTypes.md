import Emoji from '@site/src/components/Emoji';

# 父类型（ParentTypes）

父类型（ParentTypes）应用在 ModelPart 上，用于施加特定变换，或改变 ModelPart 的行为。

## 通过 BlockBench 应用父类型

要在 BlockBench 中应用父类型，<Emoji icon="blockbench/group"/> 组名必须以该父类型开头。在 BlockBench 中，只有 <Emoji icon="blockbench/group"/> 组能应用父类型。

:::tip

### 关键字

通过组名设置父类型时，父类型通常被称为关键字（Keywords）或 BlockBench 关键字。

:::

**示例**：

| Blockbench 名称 | `Head` 父类型 | 原因 |
| --- | :---: | --- |
| <Emoji icon="blockbench/group"/> `Head` | ✔️ | 组名以某个父类型开头。 |
| <Emoji icon="blockbench/group"/> `HeadPhones` | ✔️ | 组名以某个父类型开头。 |
| <Emoji icon="blockbench/group"/> `MagicHead` | ❌ | 组名不以任何父类型开头。 |
| <Emoji icon="blockbench/group"/> `head` | ❌ | 组名不以任何父类型开头。`head` 不是 `Head` 的别名。 |
| <Emoji icon="blockbench/cube"/> `Head` | ❌ | 在 BlockBench 中，父类型只能应用于组 |

---

## 通过脚本应用父类型

要通过脚本应用父类型，先[索引](../tutorials/ModelPart%20Indexing)要修改的 ModelPart，然后对它调用 <code>setParentType</code> 方法，并把父类型作为字符串参数传入。<br/>
形象加载后，<Emoji icon="blockbench/group"/> 组、<Emoji icon="blockbench/cube"/> 立方体与 <Emoji icon="file/bbmodel"/> bbmodel 之间没有区别。一切都是 ModelPart，因此一切都可以拥有父类型。

**示例**：

```lua
models.myModel.myHat:setParentType("Head")
models.myOtherModel.Pet:setParentType("World")
```

---

## 父类型列表

每个父类型都有另一种写法，即别名，但在内部它们的作用相同。别名会列在 Figura 认定的正式父类型下方。<br/>
许多父类型的性质相近。粗略来说可以把它们分成 3 类：Mimic（模仿）、Pivot（轴心点）与 Special（特殊）。这些分类并不被模组本身识别，只是为了更方便地说明性质相近的父类型。<br/>

---

### `None` \{#None}

-   #### `NONE` \{#NONE}
-   #### `Model` \{#Model}
-   #### `MODEL` \{#MODEL}

默认的父类型。<br/>
把这个父类型当作关键字使用没有意义，因为未设置关键字的 <Emoji icon="blockbench/group"/> 组就是这个父类型；不过在脚本中仍然可以使用它。

---

## 玩家 Mimic 类型

玩家 Mimic 父类型会从别处（通常是原版部件）复制变换（位置、旋转、缩放），并应用到 ModelPart 上。这样无需脚本，就能让 ModelPart 表现得像原版部件。这些变换会叠加在脚本设置的变换或 BlockBench 动画设置的变换之上。若要在播放 BlockBench 动画时阻止应用该父类型的变换，请启用[动画的 Override 属性](../start_here/BlockBench#animation-properties)。

---

### `Head` \{#Head}

-   #### `HEAD` \{#HEAD}

模仿原版 <code>HEAD</code> 的变换偏移。<br/>
如果没有 ModelPart 使用 [Skull](#skull) 父类型，则使用此父类型的 ModelPart 会替换原版头颅。

---

### `Body` \{#Body}

-   #### `BODY` \{#BODY}

模仿原版 <code>BODY</code> 的变换偏移。

---

### `RightArm` \{#RightArm}

-   #### `RIGHT_ARM` \{#RIGHT_ARM}

模仿原版 <code>RIGHT_ARM</code> 的变换偏移。<br/>
此父类型在第一人称下的出现条件与原版右臂相同。

---

### `LeftArm` \{#LeftArm}

-   #### `LEFT_ARM` \{#LEFT_ARM}

模仿原版 <code>LEFT_ARM</code> 的变换偏移。<br/>
此父类型在第一人称下的出现条件与原版左臂相同。

---

### `RightLeg` \{#RightLeg}

-   #### `RIGHT_LEG` \{#RIGHT_LEG}

模仿原版 <code>RIGHT_LEG</code> 的变换偏移。

---

### `LeftLeg` \{#LeftLeg}

-   #### `LEFT_LEG` \{#LEFT_LEG}

模仿原版 <code>LEFT_LEG</code> 的变换偏移。

---

### `RightElytra` \{#RightElytra}

-   #### `RIGHT_ELYTRA` \{#RIGHT_ELYTRA}
-   #### `RightElytron` \{#RightElytron}
-   #### `RIGHT_ELYTRON` \{#RIGHT_ELYTRON}

模仿原版 <code>RIGHT_ELYTRA</code> 的变换偏移。<br/>
只有装备鞘翅时，使用此父类型的 ModelPart 才可见。<br/>

---

### `LeftElytra` \{#LeftElytra}

-   #### `LEFT_ELYTRA` \{#LEFT_ELYTRA}
-   #### `LeftElytron` \{#LeftElytron}
-   #### `LEFT_ELYTRON` \{#LEFT_ELYTRON}

模仿原版 <code>LEFT_ELYTRA</code> 的变换偏移。<br/>
只有装备鞘翅时，使用此父类型的 ModelPart 才可见。<br/>

---

### `Cape` \{#Cape}

-   #### `CAPE` \{#CAPE}

模仿原版 <code>CAPE</code> 的变换偏移。<br/>
即使你没有原版披风，此父类型也会生效。

---

## Special 类型

Special 父类型提供独特的渲染能力，这些能力仅靠脚本很难或无法复刻。

---

### `World` \{#World}

-   #### `WORLD` \{#WORLD}

此父类型会让 ModelPart 挂载到 Minecraft 世界本身，而不是挂载到你的玩家角色上。<br/>
位置 (0,0,0) 位于世界原点。1 个方块等于 16 个 ModelPart 单位，因此在设置 World 父类型 ModelPart 的位置前，请先把世界坐标乘以 16。<br/>
旋转 (0,0,0) 朝向南方，而不是 BlockBench 定义的北方。<br/>
使用此父类型的 ModelPart 在第一人称下可见。

---

### `Hud` \{#Hud}

-   #### `HUD` \{#HUD}
-   #### `HeadsUpDisplay` \{#HeadsUpDisplay}
-   #### `Gui` \{#Gui}
-   #### `GUI` \{#GUI}
-   #### `GraphicalUserInterface` \{#GraphicalUserInterface}
-   #### `JraficalUserInterface` \{#JraficalUserInterface}

此父类型会让 ModelPart 渲染在 HUD 上，而不是渲染在你的玩家角色上。它只影响形象主人的 HUD，以及正在旁观该形象的玩家。<br/>
(0,0,0) 位于屏幕左上角。1 个 ModelPart 单位等于 1 个 Minecraft GUI 单位。-X 会让 ModelPart 在屏幕上向右移动，-Y 会让它向下移动。Z 轴决定 ModelPart 之间的层级，-Z 会让 ModelPart 更靠近屏幕。你甚至可以让 ModelPart 渲染在原版 GUI 之上。

---

### `Camera` \{#Camera}

-   #### `CAMERA` \{#CAMERA}
-   #### `Billboard` \{#Billboard}
-   #### `BILLBOARD` \{#BILLBOARD}

此父类型会让 ModelPart _始终_ 面向相机。它的行为与原版名牌或粒子相同。

---

### `Skull` \{#Skull}

-   #### `SKULL` \{#SKULL}
-   #### `☠️` \{#☠️}

此父类型会让 ModelPart 替换原版头颅。

---

### `Portrait` \{#Portrait}

-   #### `PORTRAIT` \{#PORTRAIT}

此父类型会改变 TAB 列表中的玩家图标。<br/>
在 Blockbench 中，0, 0, 0 是底部中心，有效区域向左右各延伸 4 个单位，向上延伸 8 个单位。<br/>

---

### `Arrow` \{#Arrow}

-   #### `ARROW` \{#ARROW}

此父类型会替换你射出的箭的模型。使用此父类型的 ModelPart 的轴心点无关紧要。<br/>
BlockBench 中的 (0,0,0) 对应原版箭杆上紧靠箭尖之前的那一点。

---

### `Trident` \{#Trident}

-   #### `TRIDENT` \{#TRIDENT}

此父类型会替换你投出的三叉戟的模型。使用此父类型的 ModelPart 的轴心点无关紧要。<br/>

---

### `Item` \{#Item}

-   #### `ITEM` \{#ITEM}

此父类型用于指定一个自定义物品模型，可在 ITEM_RENDER 事件中使用。

---

## Pivot 类型

Pivot 父类型会把特定原版部件的位置移到 ModelPart 的轴心点。如果同一个 bbmodel 中有多个 ModelPart 使用相同的 Pivot 父类型，就会渲染多个对应部件。只有当 <code>vanilla_model</code> 全局中的对应部件可见时，这些父类型才会渲染它们的原版部件。

---

### `RightItemPivot` \{#RightItemPivot}

-   #### `RIGHT_ITEM_PIVOT` \{#RIGHT_ITEM_PIVOT}

此父类型会把右手持有的物品渲染到 ModelPart 的轴心点。

---

### `LeftItemPivot` \{#LeftItemPivot}

-   #### `LEFT_ITEM_PIVOT` \{#LEFT_ITEM_PIVOT}

此父类型会把左手持有的物品渲染到 ModelPart 的轴心点。

---

### `RightElytraPivot` \{#RightElytraPivot}

-   #### `RIGHT_ELYTRA_PIVOT` \{#RIGHT_ELYTRA_PIVOT}
-   #### `RightWingPivot` \{#RightWingPivot}
-   #### `RIGHT_WING_PIVOT` \{#RIGHT_WING_PIVOT}

此父类型会把右侧鞘翅翼渲染到 ModelPart 的轴心点。

---

### `LeftElytraPivot` \{#LeftElytraPivot}

-   #### `LEFT_ELYTRA_PIVOT` \{#LEFT_ELYTRA_PIVOT}
-   #### `LeftWingPivot` \{#LeftWingPivot}
-   #### `LEFT_WING_PIVOT` \{#LEFT_WING_PIVOT}

此父类型会把左侧鞘翅翼渲染到 ModelPart 的轴心点。

---

### `RightParrotPivot` \{#RightParrotPivot}

-   #### `RIGHT_PARROT_PIVOT` \{#RIGHT_PARROT_PIVOT}

此父类型会把骑在你右肩上的实体渲染到 ModelPart 的轴心点。说是实体，其实它永远是鹦鹉。

---

### `LeftParrotPivot` \{#LeftParrotPivot}

-   #### `LEFT_PARROT_PIVOT` \{#LEFT_PARROT_PIVOT}

此父类型会把骑在你左肩上的实体渲染到 ModelPart 的轴心点。说是实体，其实它永远是鹦鹉。

---

### `RightSpyglassPivot` \{#RightSpyglassPivot}

-   #### `RIGHT_SPYGLASS_PIVOT` \{#RIGHT_SPYGLASS_PIVOT}

当你在右手使用望远镜时，此父类型会把望远镜渲染到该 ModelPart 的轴心点。

---

### `LeftSpyglassPivot` \{#LeftSpyglassPivot}

-   #### `LEFT_SPYGLASS_PIVOT` \{#LEFT_SPYGLASS_PIVOT}

当你在左手使用望远镜时，此父类型会把望远镜渲染到该 ModelPart 的轴心点。

---

## 盔甲 Pivot 类型

盔甲 Pivot 父类型会把特定原版部件的位置移到 ModelPart 的轴心点。如果同一个 bbmodel 中有多个 ModelPart 使用相同的 Pivot 父类型，就会渲染多个对应部件。只有当 <code>vanilla_model</code> 全局中的对应部件可见时，这些父类型才会渲染它们的原版部件。

---

### `HelmetPivot` \{#HelmetPivot}

-   #### `HELMET_PIVOT` \{#HELMET_PIVOT}

此父类型会把头盔渲染到 ModelPart 的轴心点。要在头盔槽位渲染物品，见 [`HelmetItemPivot`](#HelmetItemPivot)。

---

### `ChestplatePivot` \{#ChestplatePivot}

-   #### `CHESTPLATE_PIVOT`

此父类型会把胸甲渲染到 ModelPart 的轴心点。

---

### `ChestplateBodyPivot` \{#ChestplateBodyPivot}

-   #### `CHESTPLATE_BODY_PIVOT`

此父类型会把胸甲本体渲染到 ModelPart 的轴心点。

---

### `LeftShoulderPivot` \{#LeftShoulderPivot}

-   #### `LEFT_SHOULDER_PIVOT`

此父类型会把胸甲的左肩渲染到 ModelPart 的轴心点。

---

### `RightShoulderPivot` \{#RightShoulderPivot}

-   #### `RIGHT_SHOULDER_PIVOT`

此父类型会把胸甲的右肩渲染到 ModelPart 的轴心点。

---

### `BeltPivot` \{#BeltPivot}

-   #### `BELT_PIVOT`

此父类型会把护腿的腰带渲染到 ModelPart 的轴心点。

---

### `LeggingsPivot` \{#LeggingsPivot}

-   #### `LEGGINGS_PIVOT`

此父类型会把护腿渲染到 ModelPart 的轴心点。

---

### `LeftLeggingPivot` \{#LeftLeggingPivot}

-   #### `LEFT_LEGGING_PIVOT` \{#LEFT_LEGGING_PIVOT}

此父类型会把左护腿渲染到 ModelPart 的轴心点。

---

### `RightLeggingPivot` \{#RightLeggingPivot}

-   #### `RIGHT_LEGGING_PIVOT` \{#RIGHT_LEGGING_PIVOT}

此父类型会把右护腿渲染到 ModelPart 的轴心点。

---

### `LeftBootPivot` \{#LeftBootPivot}

-   #### `LEFT_BOOT_PIVOT`

此父类型会把左靴子渲染到 ModelPart 的轴心点。

---

### `RightBootPivot` \{#RightBootPivot}

-   #### `RIGHT_BOOT_PIVOT`

此父类型会把右靴子渲染到 ModelPart 的轴心点。

---

### `HelmetItemPivot` \{#HelmetItemPivot}

-   #### `HELMET_ITEM_PIVOT` \{#HELMET_ITEM_PIVOT}

此父类型会渲染当前放在头盔槽位的物品。适用于南瓜、旗帜、头颅之类的东西。要在其他位置渲染原版头盔，见 [`HelmetPivot`](#HelmetPivot)。

---
