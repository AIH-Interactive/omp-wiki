# 类型名

一句话说明该类型代表什么；如何获得该对象；可用范围（普通脚本 / 装饰脚本 / 预览）。

---

### <code>method(args)</code> \{#method}

**别名：** `alias()`

说明方法的作用与使用场景。

**参数：**

| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `arg` | `String` | 参数说明 | 必填 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| `Boolean` | 返回值说明 |

**示例：**

```lua
local value = object:method("arg")
log(value)
```

**注意：** 权限、预算、错误码与兼容性。

---

### <code>getValue()</code> \{#getValue}

读取当前值。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| `Number` | 当前值 |

**示例：**

```lua
log(object:getValue())
```
