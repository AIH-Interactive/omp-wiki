---
sidebar_position: 1
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 动作轮盘

用于定制玩家动作轮盘的全局 API。

---

## 页面

页面的更多说明见 [Page（页面）](./Page.md)。

### <code>newPage()</code> \{#newPage}

为动作轮盘创建一个新页面。

可以给它一个标题，用于在内部保存该页面。

如果不提供标题，该函数会直接返回这个页面。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
newPage()
```

**返回值：**

| 类型                                            | 说明                                |
| ----------------------------------------------- | ------------------------------------------ |
| <code>[Page](/globals/Action-Wheel/Page)</code> | 一个包含动作的动作轮盘页面 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
newPage(title)
```

**参数：**

| 名称  | 类型                                            | 说明                                   | 默认值 |
| ----- | ----------------------------------------------- | --------------------------------------------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | 用于在内部保存该页面的名称 | `nil`   |

**返回值：**

| 类型                                            | 说明                                |
| ----------------------------------------------- | ------------------------------------------ |
| <code>[Page](/globals/Action-Wheel/Page)</code> | 一个包含动作的动作轮盘页面 |

</TabItem>
</Tabs>

**示例（重载 1）：**

```lua
local myPage = action_wheel:newPage()
```

---

### <code>setPage()</code> \{#setPage}

把动作轮盘的页面设置为指定的标题或页面。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
setPage(pageTitle)
```

**参数：**

| 名称      | 类型                                            | 说明                                   | 默认值 |
| --------- | ----------------------------------------------- | --------------------------------------------- | ------- |
| pageTitle | <code>[String](/tutorials/types/Strings)</code> | 用于在内部保存该页面的名称 | `nil`   |

**返回值：**

| 类型                                                 | 说明               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
setPage(page)
```

**参数：**

| 名称 | 类型                                            | 说明                         | 默认值 |
| ---- | ----------------------------------------------- | ----------------------------------- | ------- |
| page | <code>[Page](/globals/Action-Wheel/Page)</code> | 一个动作轮盘页面的引用 | `nil`   |

**返回值：**

| 类型                                                 | 说明               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
local myPage = action_wheel:newPage()
action_wheel:setPage(myPage)
```

---

### <code>getPage()</code> \{#getPage}

按给定标题返回已保存的页面。

如果不提供标题，则返回包含全部已注册页面的表。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
getPage()
```

**返回值：**

| 类型                                          | 说明                                            |
| --------------------------------------------- | ------------------------------------------------------ |
| <code>[Table](/tutorials/types/Tables)</code> | 一个表，其中每个索引都是动作轮盘中的一个页面 |

</TabItem>
<TabItem value="overload-2" label="重载 2" default>

```lua
getPage(pageTitle)
```

**参数：**

| 名称      | 类型                                            | 说明                                   | 默认值 |
| --------- | ----------------------------------------------- | --------------------------------------------- | ------- |
| pageTitle | <code>[String](/tutorials/types/Strings)</code> | 用于在内部保存该页面的名称 | `nil`   |

**返回值：**

| 类型                                            | 说明                                |
| ----------------------------------------------- | ------------------------------------------ |
| <code>[Page](/globals/Action-Wheel/Page)</code> | 一个包含动作的动作轮盘页面 |

</TabItem>
</Tabs>

**示例（重载 2）：**

```lua
action_wheel:newPage("myPage")
-- highlight-next-line
action_wheel:getPage("myPage")
-- because getPage needs a string you can only use getPage on pages with titles
```

---

### <code>getCurrentPage()</code> \{#getCurrentPage}

返回动作轮盘当前设置的页面；如果尚未设置页面，则返回 nil。

```lua
getCurrentPage()
```

**返回值：**

| 类型                                            | 说明                                |
| ----------------------------------------------- | ------------------------------------------ |
| <code>[Page](/globals/Action-Wheel/Page)</code> | 一个包含动作的动作轮盘页面 |

**示例：**

```lua
action_wheel:getCurrentPage()
```

---

## 动作

动作的更多说明见 [Action（动作）](./Action.md)。

### <code>newAction()</code> \{#newAction}

创建一个新动作，不会自动分配到任何页面。

```lua
newAction()
```

**返回值：**

| 类型                                                | 说明            |
| --------------------------------------------------- | ---------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 一个动作轮盘动作 |

**示例：**

```lua
local myAction = action_wheel:newAction()
```

---

### <code>getSelectedAction()</code> \{#getSelectedAction}

返回动作轮盘中当前选中的动作。

```lua
getSelectedAction()
```

**返回值：**

| 类型                                                | 说明            |
| --------------------------------------------------- | ---------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | 一个动作轮盘动作 |

**示例：**

```lua
action_wheel:getSelectedAction()
```

---

### <code>getSelected()</code> \{#getSelected}

返回当前选中动作的索引。

```lua
getSelected()
```

**返回值：**

| 类型                                             | 说明                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | 一个数字，表示选中动作所在的槽位 |

**示例：**

```lua
action_wheel:getSelected()
```

---

## 轮盘

### <code>execute()</code> \{#execute}

执行给定索引对应的动作。

如果索引为空，则执行上一次选中的动作。

可以传入第二个参数，指定执行左键还是右键动作。

<Tabs>
<TabItem value="overload-1" label="重载 1">

```lua
execute()
```

**返回值：**

| 类型                                                 | 说明               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-2" label="重载 2">

```lua
execute(index)
```

**参数：**

| 名称  | 类型                                             | 说明                                        | 默认值 |
| ----- | ------------------------------------------------ | -------------------------------------------------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | 一个数字，表示要执行哪个槽位的动作 | `nil`   |

**返回值：**

| 类型                                                 | 说明               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | 返回自身，便于链式调用 |

</TabItem>
<TabItem value="overload-3" label="重载 3" default>

```lua
execute(index, rightClick)
```

**参数：**

| 名称       | 类型                                              | 说明                                                    | 默认值 |
| ---------- | ------------------------------------------------- | -------------------------------------------------------------- | ------- |
| index      | <code>[Integer](/tutorials/types/Numbers)</code>  | 一个数字，表示要执行哪个槽位的动作             | `nil`   |
| rightClick | <code>[Boolean](/tutorials/types/Booleans)</code> | 设为 true 时执行该动作的右键动作 | `false` |

**返回值：**

| 类型                                                 | 说明               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | 返回自身，便于链式调用 |

</TabItem>
</Tabs>

**示例（重载 3）：**

```lua
action_wheel:execute(1, false)
```

---

### <code>isEnabled()</code> \{#isEnabled}

返回动作轮盘当前是否正在渲染。

```lua
isEnabled()
```

**返回值：**

| 类型                                              | 说明                                            |
| ------------------------------------------------- | ------------------------------------------------------ |
| <code>[Boolean](/tutorials/types/Booleans)</code> | 为 true 表示动作轮盘可见，为 false 表示不可见 |

**示例：**

```lua
action_wheel:isEnabled()
```

---

## 字段

### <code>leftClick</code> \{#leftClick}

左键点击时执行的函数。

**示例：**

```lua
-- pingless example
function action_wheel.leftClick()
    log("Left click")
end
```

```lua
-- pinged example
function pings.example()
    log("Left click")
end

action_wheel.leftClick = pings.example
```

---

### <code>rightClick</code> \{#rightClick}

右键点击时执行的函数。

**示例：**

```lua
function action_wheel.rightClick()
    log("Right click")
end
```

---

### <code>scroll</code> \{#scroll}

滚动鼠标滚轮时执行的函数。

**示例：**

```lua
function action_wheel.scroll()
    log("Scrolled")
end
```

---

## OmniMorph 扩展

YSM 动作不走这个 `action_wheel` 全局，而使用 [`ysm_actions`](/scripting/ysm-actions)：

- 每页最多 8 个槽位；
- 支持动作定义、页/槽管理、键位绑定；
- 动作与 `ysm_action` 对象关联。

详见 [YSM 动作轮盘](/omnimorph/action-wheel)。
