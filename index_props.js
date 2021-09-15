import projectConfig from '/In-depth-analysis-of-Vue/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'pagic' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Author       : HyFun\n * @Date         : 2021-09-14 18:55:11\n * @Description  : \n * @LastEditors  : HyFun\n * @LastEditTime : 2021-09-15 10:22:52\n-->\n<p><img src="./src/assets/vue.jpg" alt=""></p>\n<p>本书在<a href="./src/Vue-v2.6.8.js">Vue2.6.8</a>源码基础上，循序渐进的带领你进入神奇的Vue世界。</p>\n<h2 id="%E5%85%B3%E4%BA%8Evue">关于Vue<a class="anchor" href="#%E5%85%B3%E4%BA%8Evue">§</a></h2>\n<p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>\n<h2 id="%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6">关于本书<a class="anchor" href="#%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6">§</a></h2>\n<ul>\n<li><a href="https://github.com/Ocean1509/In-depth-analysis-of-Vue">Github地址</a></li>\n<li>关于作者：<a href="https://github.com/Ocean1509">Ocean1509</a></li>\n<li>本网站使用 <a href="https://pagic.org/zh-CN/">Pagic</a> 构建</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { href: "/src/assets/favicon.ico", rel: "icon" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/In-depth-analysis-of-Vue/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Author       : HyFun\n * @Date         : 2021-09-14 18:55:11\n * @Description  : \n * @LastEditors  : HyFun\n * @LastEditTime : 2021-09-15 10:22:52\n-->\n<p><img src="./src/assets/vue.jpg" alt=""></p>\n<p>本书在<a href="./src/Vue-v2.6.8.js">Vue2.6.8</a>源码基础上，循序渐进的带领你进入神奇的Vue世界。</p>\n<h2 id="%E5%85%B3%E4%BA%8Evue">关于Vue<a class="anchor" href="#%E5%85%B3%E4%BA%8Evue">§</a></h2>\n<p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>\n<h2 id="%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6">关于本书<a class="anchor" href="#%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6">§</a></h2>\n<ul>\n<li><a href="https://github.com/Ocean1509/In-depth-analysis-of-Vue">Github地址</a></li>\n<li>关于作者：<a href="https://github.com/Ocean1509">Ocean1509</a></li>\n<li>本网站使用 <a href="https://pagic.org/zh-CN/">Pagic</a> 构建</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%85%B3%E4%BA%8Evue" }, "\u5173\u4E8EVue")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6" }, "\u5173\u4E8E\u672C\u4E66")))),
    'author': "wyp",
    'contributors': [
        "wyp",
        "Ocean1509",
        "hyfun"
    ],
    'date': "2019-10-29T10:04:26.000Z",
    'updated': "2021-09-15T02:34:36.000Z",
    'excerpt': "本书在Vue2.6.8源码基础上，循序渐进的带领你进入神奇的Vue世界。 关于Vue Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只...",
    'cover': "./src/assets/vue.jpg",
    'sidebar': [
        {
            "text": "1.丰富的选项合并策略",
            "link": "/src/1.丰富的选项合并策略.md"
        },
        {
            "text": "2.基础的数据代理检测",
            "link": "/src/2.基础的数据代理检测.md"
        },
        {
            "text": "3.实例挂载流程和模板编译",
            "link": "/src/3.实例挂载流程和模板编译.md"
        },
        {
            "text": "4.完整渲染流程",
            "link": "/src/4.完整渲染流程.md"
        },
        {
            "text": "5.组件基础剖析",
            "link": "/src/5.组件基础剖析.md"
        },
        {
            "text": "6.组件高级用法",
            "link": "/src/6.组件高级用法.md"
        },
        {
            "text": "7.深入响应式系统构建-上",
            "link": "/src/7.深入响应式系统构建-上.md"
        },
        {
            "text": "7.深入响应式系统构建-中",
            "link": "/src/7.深入响应式系统构建-中.md"
        },
        {
            "text": "7.深入响应式系统构建-下",
            "link": "/src/7.深入响应式系统构建-下.md"
        },
        {
            "text": "8.来，跟我一起实现diff算法",
            "link": "/src/8.来，跟我一起实现diff算法.md"
        },
        {
            "text": "9.揭秘Vue的事件机制",
            "link": "/src/9.揭秘Vue的事件机制.md"
        },
        {
            "text": "10.vue插槽，你想了解的都在这里",
            "link": "/src/10.vue插槽，你想了解的都在这里.md"
        },
        {
            "text": "11.你真的了解v-model的语法糖了吗",
            "link": "/src/11.你真的了解v-model的语法糖了吗.md"
        },
        {
            "text": "12.动态组件的深入分析",
            "link": "/src/12.动态组件的深入分析.md"
        },
        {
            "text": "13.彻底搞懂Vue中keep-alive的魔法-上",
            "link": "/src/13.彻底搞懂Vue中keep-alive的魔法-上.md"
        },
        {
            "text": "13.彻底搞懂Vue中keep-alive的魔法-下",
            "link": "/src/13.彻底搞懂Vue中keep-alive的魔法-下.md"
        }
    ]
};
