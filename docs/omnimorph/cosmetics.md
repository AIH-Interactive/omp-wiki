---
sidebar_position: 3
title: 装饰系统
---

# 装饰系统

> 状态：稳定（多实例、挂载、骨骼树）；2.0 组合槽位为占位
> 适用版本：OmniMorph 1.0.0-alpha.4.1

装饰是叠加在基础形象上的独立模型，例如帽子、尾巴、翅膀、拖尾。一个基础形象可以同时挂载多个装饰实例，每个实例有独立的变换、控件和轮盘。

## 概念

| 概念 | 说明 |
| --- | --- |
| 基础 | 当前启用的 Figura 形象、YSM 模型或原版玩家模型 |
| 装饰实例 | 一个装饰在配装中的一次出现；同一装饰可以出现多次 |
| 挂载 | 把装饰实例绑定到基础骨骼、装饰骨骼或虚拟锚点 |
| 骨骼树 | 展示基础与装饰骨骼的只读层级，用于选择挂载目标 |
| 内部覆盖 | 在实例的原生骨骼上追加局部变换，不修改源文件 |

## 创建装饰

1. 打开衣柜，进入“装饰”或“创建”入口。
2. 选择“创建装饰”。
3. 输入名称与分类。
4. 在生成的目录中编辑模型与 `cosmetic.json`。
5. 回到衣柜，刷新并选择该装饰。

装饰资源放在：

```text
omnimorph/cosmetics/<装饰名>/
```

也可以把含 `cosmetic.json` 的 ZIP 放入同一目录。

## cosmetic.json

最小示例（无骨骼、使用标准头部挂点）：

```json
{
    "schema_version": 1,
    "name": "示例帽子",
    "authors": ["你的名字"],
    "version": "1.0.0",
    "description": "一个挂在头部的示例装饰。",
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

字段说明：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `schema_version` | 整数 | 当前为 1 |
| `name` | 字符串 | 展示名称 |
| `authors` | 字符串数组 | 作者 |
| `version` | 字符串 | 装饰版本 |
| `description` | 字符串 | 描述 |
| `category` | 字符串 | Head / Back / Feet / Legs / Face / Hair / Tail / Trail / Wings |
| `cosmetic_anchor` | 字符串 | 默认挂点；标准挂点名或自定义符号 |
| `has_bones` | 布尔 | 是否声明骨骼能力 |
| `display_bones` | 布尔 | 是否在骨骼树中显示 |
| `edit_bones` | 布尔 | 是否允许编辑骨骼范围 |
| `skeleton_revision` | 字符串 | 骨架修订标识 |
| `skeleton_hash` | 字符串 | 骨架哈希；`has_bones=true` 时必填 |
| `supported_bases` | 字符串数组 | VANILLA / FIGURA / YSM |
| `exported_bones` | 数组 | 对外挂载插槽 |
| `editable_bones` | 数组 | 允许编辑的骨骼范围 |
| `default_transform` | 对象 | 默认位置、旋转、缩放 |

标准挂点名包括：

```text
head_anchor, face_anchor, hair_anchor, back_anchor, wing_anchor,
hip, tailtip, left_leg_anchor, right_leg_anchor,
left_foot_anchor, right_foot_anchor
```

`cosmetic_anchor` 不在标准列表中时，会作为“未解析符号”保留，等待挂载时绑定。

:::warning
`has_bones=true` 时，`skeleton_hash`、`exported_bones`、`editable_bones` 必须与实际骨架一致；缺失或过期会被拒绝。不要手写猜测的哈希。
:::

## 挂载装饰

1. 在衣柜中选择基础形象。
2. 打开“配装”或装饰挂载区域。
3. 选择要挂载的装饰实例。
4. 在骨骼树中选择目标：
   - 基础骨骼；
   - 装饰骨骼；
   - 标准挂点；
   - 虚拟锚点。
5. 调整位置、旋转、缩放。
6. 点击“确定”或“保存”。

如果目标不可用、无权使用或会造成循环依赖，绑定会被拒绝。

## 多实例

同一个装饰可以在配装中出现多次：

- 每次出现有独立的实例 ID；
- 每个实例可以单独设置变换、控件值和轮盘；
- 删除最后一个副本后，编号水位仍保留，避免后续编号冲突；
- 导入其他预设时，会为副本重新分配实例 ID。

## 骨骼树

骨骼树是只读的：

- 默认折叠，可展开层级；
- 支持名称搜索、搜索状态恢复；
- 内容过宽时出现横向滚动；
- 选中部件显示选择框，其余部分半透明；
- 需要读取脚本运行后的结构变化时，点击“刷新骨骼树”。

骨骼树不会修改模型本身；它只用于选择挂载目标与查看层级。

## 内部骨骼覆盖

在允许编辑的范围内，可以给装饰实例的原生骨骼追加局部变换：

- 位置、旋转、缩放使用统一模型单位；
- 顺序为作者姿态/动画先求值，覆盖再影响网格、子骨骼和导出挂点；
- 清空覆盖会恢复作者姿态，不修改资源文件或原始拓扑；
- 覆盖范围受 `editable_bones` 与后端 `outfit.limits` 限制。

## 预算与限制

默认上限（服务器可通过 `outfit.limits` 收紧）：

| 项目 | 默认上限 |
| --- | ---: |
| 装饰实例 | 32 |
| 虚拟锚点 | 128 |
| 层级深度 | 64 |
| 单资源节点 | 8192 |
| 整套节点 | 32768 |
| 内部覆盖 | 1024 |
| 配置字节 | 65536 |
| 拖尾 | 8 条，每条 256 采样 |

位置各轴限制 ±4096，旋转各轴 ±36000，缩放范围 0.001–64。无效值、循环依赖或超预算会被明确拒绝，不会静默截断。

## 常见问题

**装饰不显示？**
检查分类、挂点名称、`supported_bases` 是否包含当前基础类型，以及骨骼哈希是否匹配。

**挂载目标选不到？**
确认目标骨骼存在、未被停用，并且当前实例有使用权限。

**装饰位置不对？**
检查 `default_transform` 与实例变换；骨骼挂载的坐标空间是基础骨骼局部空间。

## 相关页面

- [骨骼挂载与虚拟锚点](/omnimorph/anchors)
- [装扮预设](/omnimorph/presets)
- [装饰动画](/omnimorph/cosmetic-animations)
- [脚本新特性](/scripting/)
