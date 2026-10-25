---
sidebar_position: 20
title: 第一个装饰
---

# 第一个装饰

## 你将完成

创建一个可以挂在头部的装饰，添加一个开关控件，并在衣柜中预览、挂载与导出。

## 准备

- 已安装 OmniMorph，并能打开衣柜。
- 有一个基础形象（Figura 或 YSM）。
- 已阅读[装饰系统](/omnimorph/cosmetics)。

## 步骤 1：创建装饰

1. 打开衣柜 → 创建 → “创建装饰”。
2. 输入名称，例如 `MyHat`。
3. 选择分类 `Head`。
4. 创建后会生成目录：

```text
omnimorph/cosmetics/MyHat/
├─ cosmetic.json
└─ MyHat.bbmodel
```

## 步骤 2：编辑 cosmetic.json

把 `cosmetic.json` 改为：

```json
{
    "schema_version": 1,
    "name": "我的帽子",
    "authors": ["你的名字"],
    "version": "1.0.0",
    "description": "第一个示例装饰。",
    "category": "Head",
    "cosmetic_anchor": "head_anchor",
    "has_bones": false,
    "display_bones": false,
    "edit_bones": false,
    "supported_bases": ["VANILLA", "FIGURA", "YSM"],
    "default_transform": {
        "position": [0, 0, 0],
        "rotation": [0, 0, 0],
        "scale": [1, 1, 1]
    }
}
```

说明：

- `category` 决定分类；
- `cosmetic_anchor` 使用标准头部挂点；
- `has_bones=false` 表示不声明骨骼能力；
- `default_transform` 是默认位置/旋转/缩放。

## 步骤 3：添加模型

把帽子的 `.bbmodel` 放到同一目录，或在创建向导生成的模型文件中制作。

## 步骤 4：挂载到基础模型

1. 回到衣柜，刷新。
2. 选择基础形象。
3. 打开配装/装饰挂载。
4. 选择 `MyHat` 实例。
5. 在骨骼树中选择 `head_anchor`（或头部骨骼）。
6. 调整位置/旋转/缩放。
7. 确认。

如果看不到帽子，先检查分类、挂点与 `supported_bases`。

## 步骤 5：添加开关控件

在装饰目录中新建 `script.lua`：

```lua
local visible = cosmetic_controls:newToggle("hat_visible")
visible:setTitle("显示帽子")
visible:setDefault(true)
visible:setOnChange(function(value)
    local part = models.MyHat
    if part then
        part:setVisible(value)
    end
end)
```

说明：

- 装饰脚本使用 `cosmetic_controls`，不是 `avatar_controls`；
- 控件会出现在“模型专用设置”；
- 预览环境不会写入持久化。

## 步骤 6：导出

1. 打开“我的形象集”。
2. 选择 `MyHat`。
3. 点击“导出为 ZIP”。
4. 在 `omnimorph/export/` 查看 `cosmetic_MyHat.zip`。

## 排查

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 装饰不显示 | 挂点/分类/基础类型不匹配 | 检查 `cosmetic.json` 与骨骼树 |
| 位置偏移 | `default_transform` 或实例变换 | 重置后重新调整 |
| 控件不出现 | 脚本未执行/ID 冲突 | 查看日志与模型专用设置 |
| 导出失败 | 不是本地源/目录不可写 | 选择本地资源并检查导出目录 |

## 下一步

- [装饰系统](/omnimorph/cosmetics)
- [骨骼挂载与虚拟锚点](/omnimorph/anchors)
- [`avatar_controls`](/scripting/avatar-controls)
