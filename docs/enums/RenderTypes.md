---
title: 渲染类型（Render Types）
sidebar_label: 渲染类型
---

可通过 <code>setPrimaryRenderType(string)</code> 或 <code>setSecondaryRenderType(string)</code> 应用于模型部件（ModelPart）的渲染类型。

同一个立方体同时只能应用一个主渲染类型和一个次渲染类型。因此如果把主渲染类型设为 `LINES`，除线条以外的像素都会消失，可能出现非预期效果。

**示例**：

```lua
models.myModel:setPrimaryRenderType("END_PORTAL")
models.myModel:setSecondaryRenderType("EMISSIVE")
```

主渲染类型与次渲染类型会叠加生效。例如把主渲染类型设为 <code>BLURRY</code>、次渲染类型设为 <code>GLINT</code>，就能做出纹理模糊、同时叠加动态附魔光效的模型。

---

## 全部渲染类型

| 渲染类型                | 说明                                                                    | 示例图片                                                                                                                                     |
| ----------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `NONE`                  | 不可见                                                                  | <img alt="NONE 渲染效果示例" src={require("@site/static/img/rendertypes/NONE.png").default} width="200"/>                                    |
| `CUTOUT`                | 常规渲染。纹理中的透明度是二值的：Alpha 为 0 时完全不可见，否则完全可见 | <img width="200" alt="CUTOUT 渲染效果示例" src={require("@site/static/img/rendertypes/CUTOUT.png").default} />                               |
| `CUTOUT_CULL`           | 常规渲染（不渲染内侧表面），Alpha 行为与 CUTOUT 相同                    | <img width="200" alt="CUTOUT_CULL 渲染效果示例" src={require("@site/static/img/rendertypes/CUTOUT_CULL.png").default} />                     |
| `TRANSLUCENT`           | 常规渲染。纹理中的 Alpha 值按支持半透明的方式处理                       | <img width="200" alt="TRANSLUCENT 渲染效果示例" src={require("@site/static/img/rendertypes/TRANSLUCENT.png").default} />                     |
| `TRANSLUCENT_CULL`      | 常规渲染（不渲染内侧表面），Alpha 行为与 TRANSLUCENT 相同               | <img width="200" alt="TRANSLUCENT_CULL 渲染效果示例" src={require("@site/static/img/rendertypes/TRANSLUCENT_CULL.png").default} />           |
| `EMISSIVE`              | 完全受光，Alpha 行为与 TRANSLUCENT 相同                                 | <img width="200" alt="EMISSIVE 渲染效果示例" src={require("@site/static/img/rendertypes/EMISSIVE.png").default} />                           |
| `EMISSIVE_SOLID`        | 完全受光（不渲染内侧表面），Alpha 行为与 CUTOUT 相同                    | <img width="200" alt="EMISSIVE_SOLID 渲染效果示例" src={require("@site/static/img/rendertypes/EMISSIVE_SOLID.png").default} />               |
| `CUTOUT_EMISSIVE_SOLID` | 完全受光，Alpha 行为与 TRANSLUCENT 相同                                 | <img width="200" alt="CUTOUT_EMISSIVE_SOLID 渲染效果示例" src={require("@site/static/img/rendertypes/CUTOUT_EMISSIVE_SOLID.png").default} /> |
| `EYES`                  | 完全受光，始终半透明，Alpha 行为与 CUTOUT 相同                          | <img width="200" alt="EYES 渲染效果示例" src={require("@site/static/img/rendertypes/EYES.png").default} />                                   |
| `END_PORTAL`            | 不受透视影响的末地传送门效果                                            | <img width="200" alt="END_PORTAL 渲染效果示例" src={require("@site/static/img/rendertypes/END_PORTAL.png").default} />                       |
| `END_GATEWAY`           | 不受透视影响的末地折跃门效果                                            | <img width="200" alt="END_GATEWAY 渲染效果示例" src={require("@site/static/img/rendertypes/END_GATEWAY.png").default} />                     |
| `TEXTURED_PORTAL`       | 不受透视影响的几何效果（作为次渲染类型使用时，用次级纹理改变效果）      | <img width="200" alt="TEXTURED_PORTAL 渲染效果示例" src={require("@site/static/img/rendertypes/TEXTURED_PORTAL.png").default} />             |
| `GLINT`                 | 作为次渲染类型使用时，显示附魔光效                                      | <img width="200" alt="GLINT 渲染效果示例" src={require("@site/static/img/rendertypes/GLINT.png").default} />                                 |
| `GLINT2`                | 作为次渲染类型使用时，显示更精细的附魔光效                              | <img width="200" alt="GLINT2 渲染效果示例" src={require("@site/static/img/rendertypes/GLINT2.png").default} />                               |
| `TEXTURED_GLINT`        | 作为次渲染类型使用时，把次级纹理用作附魔光效                            | <img width="200" alt="TEXTURED_GLINT 渲染效果示例" src={require("@site/static/img/rendertypes/TEXTURED_GLINT.png").default} />               |
| `LINES`                 | 沿边缘绘制的白色线条                                                    | <img width="200" alt="LINES 渲染效果示例" src={require("@site/static/img/rendertypes/LINES.png").default} />                                 |
| `LINES_STRIP`           | 连接各顶点的白色线条                                                    | <img width="200" alt="LINES_STRIP 渲染效果示例" src={require("@site/static/img/rendertypes/LINES_STRIP.png").default} />                     |
| `SOLID`                 | 纯白色                                                                  | <img width="200" alt="SOLID 渲染效果示例" src={require("@site/static/img/rendertypes/SOLID.png").default} />                                 |
| `BLURRY`                | 平滑处理后的纹理                                                        | <img width="200" alt="BLURRY 渲染效果示例" src={require("@site/static/img/rendertypes/BLURRY.png").default} />                               |
