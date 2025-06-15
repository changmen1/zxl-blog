# 问题记录

| 分类          | 常用关键词                                                                            | 说明                      |
| ----------- | -------------------------------------------------------------------------------- | ----------------------- |
| 🧭 交互连线动画   | `interactive svg arrow line`, `connect elements on hover`, `svg path animation`  | 鼠标悬浮后，两个/多个元素之间出现动画连线箭头 |
| 🧷 视觉辅助指引动画 | `SVG connection line`, `directional animation`, `hover connect elements`         | 用线条、箭头展示「前后逻辑」、「事件关系」   |
| 📈 图形连线图    | `graph visualization`, `flow diagram`, `timeline connection`, `dependency graph` | 类似拓扑图/时间线/依赖图，自动或手动连线   |
| 🧩 UI 动画库实践 | `GSAP SVG path`, `Anime.js path draw`, `Framer Motion keyframes`                 | 用动画库绘制连线 + 添加渐现、缩放动效    |

---

| 动效内容        | 技术原理                                         |
| ----------- | -------------------------------------------- |
| 鼠标悬浮一个卡片    | `onMouseEnter/onMouseLeave` 或 CSS `:hover`   |
| 显示指向其他卡片的箭头 | 用 `<svg><path></path></svg>` 绘制，起点终点为目标卡片的坐标 |
| 动态位置计算      | 使用 JavaScript 或 ResizeObserver 获取 DOM 的实际位置  |
| 动态连线绘制      | `SVG path` + `marker-end` 实现箭头，或者用 canvas 绘图 |
| 连线动画（画线）    | 使用 `stroke-dasharray + stroke-dashoffset` 动画 |
| 可复用结构       | 可做成组件：传入 source 和 targets 就能连线               |

---

---

## 📦 动画库

| 动画库                                                         | 说明                         |
| ----------------------------------------------------------- | ---------------------------- |
| **[GSAP + ScrollTrigger](https://gsap.com/scrolltrigger/)** | 强力推荐，支持 SVG 动画、滚动联动、鼠标交互动画   |
| **[Anime.js](https://animejs.com/)**                        | 支持 SVG path 动画，代码量少          |
| **[LeaderLine.js](https://anseki.github.io/leader-line/)**  | 专门用来做“连线两个 DOM 元素”的动画，开箱即用！  |
| **React 用户**可以选：                                            | `Framer Motion` + `SVG path` |

---

### ✅ 示例 demo 推荐

* [LeaderLine 官方 Demo](https://anseki.github.io/leader-line/)
* [CodePen SVG Line on Hover](https://codepen.io/search/pens?q=svg+line+hover&type=type-pens)
* [GSAP SVG 动画 Demo](https://codepen.io/GreenSock)

---

## 🎯 适合的使用场景

| 场景                      | 建议方式                                     |
| ----------------------- | ---------------------------------------- |
| 顶部导航栏                   | `<Link>` 或 `<button>` + `useNavigate` 都可 |
| 表单提交成功后跳转               | `useNavigate`                            |
| 点击卡片跳转详情页               | `useNavigate`                            |
| 动态路径（如 `/post/${id}`）跳转 | `navigate(\`/post/\${id}\`)\`            |

---
