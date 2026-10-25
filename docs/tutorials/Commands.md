---
title: 命令
sidebar_label: 命令
---

Figura 内置了一小组命令，可辅助你使用 Figura。由于 Figura 是客户端模组，这些命令只影响客户端。

## 普通命令

### Debug（调试）

用法：`/figura debug`

Debug 会在你的 Figura 目录中生成一个文件，记录 Figura 模组设置和当前穿戴形象的信息，还包括形象内所有元素的文件大小。

### Docs（文档）

用法：`/figura docs`

Docs 包含本 Wiki 的 Globals（全局对象）与 Enums（枚举）部分中的全部文档，使用自动补全即可查看所有选项。

### Emojis（表情）

用法：`/figura emojis`

Emojis 列出了 Figura 添加的全部表情。`/figura emojis all` 可以一次性显示全部表情。

### Export（导出）

用法：`/figura export avatar`

Export 正如其名，用于把特定文件导出到你的 Figura 目录。最常用的是 `/figura export avatar`，它会把当前穿戴形象的 moon 文件放入你的目录。如果你丢失了形象，而它仍保存在 Figura 后端，就可以用此命令取回它的 .moon 文件。

### Links（链接）

`/figura links`

Links 包含 Figura 各个页面的链接。

### Load（加载）

[编写中]

### Reload（重载）

`/figura reload`

Reload 会重新加载你当前穿戴的形象。

### Run（运行）

用法：`/figura run log("Hello World")`

Run 会运行你在命令后面输入的任意 Lua 代码。

## 调试模式命令

在 Figura 设置中开启调试模式（Debug Mode）后，可以解锁更多命令。

### Backend2（后端 2）

[编写中]

### Set_Avatar（设置形象）

用法：`/figura set_avatar targetuuid sourceuuid`

set_avatar 可以通过实体的 uuid 设置其形象。targetuuid 是要被设置形象的目标实体，sourceuuid 是形象来源的实体。例如，若要让一头牛拥有你当前穿戴的形象，牛的 uuid 就是 targetuuid，你的 uuid 就是 sourceuuid。
