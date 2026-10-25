---
sidebar_position: 2
title: 文档贡献指南
---

# 文档贡献指南

本页说明如何为 OmniMorph Wiki 添加或修改页面。完整规范见仓库中的 `docs/.style_guide.md`。

## 基本原则

- 正文使用简体中文；代码、API 标识符、枚举值、文件名保持英文。
- 先写“怎么用”，再写“有哪些方法”。
- 每篇功能页至少包含：这是什么、前置条件、操作步骤、结果、限制/排错。
- 每篇 API 页至少包含：签名、参数、返回值、示例、注意事项。
- 不把未验证的功能写成“已完成”。

## 术语

| 英文 | 中文 |
| --- | --- |
| Avatar | 形象 |
| Wardrobe | 衣柜 |
| Outfit | 配装 |
| Cosmetic | 装饰 |
| Collection | 形象集 |
| Bone | 骨骼 |
| Control | 控件 |
| Anchor | 锚点 |
| Attachment | 挂载 |
| Action Wheel | 动作轮盘 |

完整术语表见 `docs/.style_guide.md`。

## 页面模板

仓库根目录的 `wiki-templates/` 提供：

- `功能指南.md`
- `API参考.md`
- `教程.md`

复制模板后修改，不要直接改模板本身。

## 链接与图片

- 内部链接使用绝对文档路径。
- 图片必须有中文 `alt`。
- 旧界面截图标注“旧版界面示意”。
- 新功能截图缺失时标注“截图待补（MANUAL/PENDING）”，不要伪造。

## 提交前检查

1. 正文是否全中文。
2. 术语是否统一。
3. 链接、图片、锚点是否有效。
4. 代码示例是否与当前源码一致。
5. 是否运行 `pnpm build` 并通过。

## 相关页面

- [版本与兼容性](/appendix/Versions)
- [脚本新特性](/scripting/)
- [OmniMorph 功能](/omnimorph/)
