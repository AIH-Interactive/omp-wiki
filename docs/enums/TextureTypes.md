---
title: 纹理类型
sidebar_label: 纹理类型
---

可通过 <code>setPrimaryTexture</code> 和 <code>setSecondaryTexture</code> 设置的纹理类型<br/>

**示例**：

```lua
models.myModel.root:setPrimaryTexture("SKIN")

models.myOtherModel:setSecondaryTexture("CUSTOM", textures["myTexture"])
```

---

## 所有纹理类型

| 类型        | 说明                                                              |
| ----------- | ----------------------------------------------------------------- |
| `SKIN`      | 你的 64x64 Minecraft 皮肤                                         |
| `CAPE`      | 你的披风                                                          |
| `ELYTRA`    | 你的鞘翅                                                          |
| `RESOURCE`  | Minecraft 自带的纹理，兼容资源包                                  |
| `PRIMARY`   | modelPart 在 Blockbench 中的原始纹理                              |
| `SECONDARY` | modelPart 在 Blockbench 中的原始次级纹理（如果存在）              |
| `SPECULAR`  | 为使用它的渲染模组设置高光贴图                                    |
| `NORMAL`    | 为使用它的渲染模组设置法线贴图                                    |
| `CUSTOM`    | 来自 Blockbench 的纹理对象，或通过 Texture API 创建的纹理对象     |
