import projectConfig from '/In-depth-analysis-of-Vue/pagic.config.js';
export default {
    'prev': undefined,
    'next': {
        "text": "1.丰富的选项合并策略",
        "link": "src/1.丰富的选项合并策略.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'pagic' },
    'pagePath': "introduction/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/index.html",
    'title': "Introduction",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Author       : HyFun\n * @Date         : 2021-09-14 17:56:25\n * @Description  : \n * @LastEditors  : HyFun\n * @LastEditTime : 2021-09-15 09:53:03\n-->\n<h1>Introduction</h1>\n<h2 id="1-%E4%B8%B0%E5%AF%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5">1. 丰富的选项合并策略<a class="anchor" href="#1-%E4%B8%B0%E5%AF%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5">§</a></h2>\n<p><code>new Vue</code>是运行<code>Vue</code>框架的第一步，<code>Vue</code>作为构造器，实例化阶段的第一步是执行初始化过程，而选项合并是初始化的开始。我们会向构造器中传递各种类型的可配置选项，例如<code>data,props</code>,或者像<code>mounted</code>这类生命周期钩子。而除了这些用户自定义的选项，<code>Vue</code>还提供了很多内部的选项，这些选项遵循什么样的合并规则就是这一节分析的重点。</p>\n<h2 id="2-%E5%9F%BA%E7%A1%80%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86">2. 基础的数据代理<a class="anchor" href="#2-%E5%9F%BA%E7%A1%80%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86">§</a></h2>\n<p>使用<code>Vue</code>做开发的同学都知道，<code>Vue</code>的核心是它的响应式系统，而响应式系统的核心是利用了<code>Object.defineProperty</code>进行数据拦截，这一节内容会深入分析<code>Vue</code>中两种数据拦截的方式：<code>Object.defineProperty,Proxy</code>,尽管响应式系统用的是兼容性更好的<code>Object.defineProperty</code>，但是<code>proxy</code>也在源码中使用上了，其中的一个例子就是用作数据过滤筛选。</p>\n<h2 id="3-%E5%AE%8C%E6%95%B4%E6%8C%82%E8%BD%BD%E6%B5%81%E7%A8%8B%E5%92%8C%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91">3. 完整挂载流程和模板编译<a class="anchor" href="#3-%E5%AE%8C%E6%95%B4%E6%8C%82%E8%BD%BD%E6%B5%81%E7%A8%8B%E5%92%8C%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91">§</a></h2>\n<p><code>Vue</code>版本提供了运行时版本和同时包含编译器和运行时的版本，他们都有各自的使用场景。除了介绍两者的区别外，文章的核心还介绍了实例在挂载阶段的完整流程，虽然不会对流程中的每个具体环节展开分析，但是可以知道大致完整的挂载思路。文章最后还介绍了编译器巧妙的设计思路。</p>\n<h2 id="4-%E5%AE%8C%E6%95%B4%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B">4. 完整渲染流程<a class="anchor" href="#4-%E5%AE%8C%E6%95%B4%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B">§</a></h2>\n<p><code>Virtual DOM</code>是<code>js</code>操作和<code>DOM</code>渲染之间的桥梁，<code>JS</code>对<code>DOM</code>节点的操作，都会批量反应到<code>Virtual DOM</code>这个节点描述对象上，它的理念很大程度提高了渲染的性能。有了上一节的基础，这一节会分析两个挂载阶段的核心过程，<code>render,update</code>,<code>render</code>阶段会将模板编译渲染函数，解析成<code>Virtual DOM</code>树，<code>update</code>阶段会将<code>Virtual DOM</code>树映射为真实的<code>DOM</code>节点。</p>\n<h2 id="5-%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80%E5%89%96%E6%9E%90">5. 组件基础剖析<a class="anchor" href="#5-%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80%E5%89%96%E6%9E%90">§</a></h2>\n<p>组件是<code>Vue</code>另一个核心，组件化开发是衡量<code>Vue</code>开发能力的标准。文章会从组件的注册开始，介绍全局注册和局部注册在实现原理上的区别，另外组件的挂载流程也是分析的重点，这一切也都依赖于前面介绍过的渲染流程。</p>\n<h2 id="6-%E7%BB%84%E4%BB%B6%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95">6. 组件高级用法<a class="anchor" href="#6-%E7%BB%84%E4%BB%B6%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95">§</a></h2>\n<p>除了基础的组件用法，<code>Vue</code>还提供了高级的用法，例如异步组件和函数组件。异步组件是首屏性能优化的解决方案，深入它的实现原理更有助于我们在开发中首屏性能问题。而函数式组件也有其独特的使用场景。</p>\n<h2 id="7-%E6%B7%B1%E5%85%A5%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E6%9E%84%E5%BB%BA--%E4%B8%8A%E4%B8%AD%E4%B8%8B">7. 深入响应式系统构建- 上，中，下<a class="anchor" href="#7-%E6%B7%B1%E5%85%A5%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E6%9E%84%E5%BB%BA--%E4%B8%8A%E4%B8%AD%E4%B8%8B">§</a></h2>\n<p>响应式系统构建是<code>Vue</code>的核心，也是难点，这个系列会有三篇的内容去尝试分析内部的实现细节。从响应式数据的构建，再到每种数据类型依赖收集和派发更新的分析。文章也模拟了一个简易版的响应式系统方便深层次源码的分析。在响应式系统构建中，还有很多的特殊情况需要考虑，例如数组的响应式构建，对象的异常处理等。</p>\n<h2 id="8-diff%E7%AE%97%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0">8. diff算法的实现<a class="anchor" href="#8-diff%E7%AE%97%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0">§</a></h2>\n<p><code>virtual dom</code>引入的另一个关键是在旧节点发生改变时，利用<code>diff</code>算法比较新旧节点的差异，以达到最小变化的改变真实节点。文章会从脱离框架的角度实现一个<code>diff</code>算法。</p>\n<h2 id="9-%E6%8F%AD%E7%A7%98vue%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6">9. 揭秘Vue的事件机制<a class="anchor" href="#9-%E6%8F%AD%E7%A7%98vue%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6">§</a></h2>\n<p><code>Vue</code>提供了很多实用的功能给用户，其中一个就是使用模板去进行事件监听。<code>@click</code>作为事件指令会在模板编译阶段解析，并且会在真实节点的渲染阶段进行相关事件的绑定。而对于组件的事件而言，他提供了子父组件通信的方式，本质上是在同个子组件内部维护了一个事件总线。更多的内容可以参考文章的分析。</p>\n<h2 id="10-%E4%BD%A0%E6%83%B3%E4%BA%86%E8%A7%A3%E7%9A%84vue%E6%8F%92%E6%A7%BD">10. 你想了解的<code>Vue</code>插槽<a class="anchor" href="#10-%E4%BD%A0%E6%83%B3%E4%BA%86%E8%A7%A3%E7%9A%84vue%E6%8F%92%E6%A7%BD">§</a></h2>\n<p><code>Vue</code>组件的另一个重要概念是插槽，它允许你以一种不同于严格的父子关系的方式组合组件。插槽为你提供了一个将内容放置到新位置或使组件更通用的出口。这一节将围绕官网对插槽内容的介绍思路，按照普通插槽，具名插槽，再到作用域插槽的思路，逐步深入内部的实现原理。</p>\n<h2 id="11-v-model%E7%9A%84%E8%AF%AD%E6%B3%95%E7%B3%96">11. v-model的语法糖<a class="anchor" href="#11-v-model%E7%9A%84%E8%AF%AD%E6%B3%95%E7%B3%96">§</a></h2>\n<p>我们都知道<code>v-model</code>是实现双向数据绑定的核心，但如果深入源码我们可以知道，<code>v-model</code>的核心只是通过事件触发去改变表单的值。除此之前<code>v-model</code>语法糖还在组合输入过程做了一系列的优化。另外组件上使用<code>v-model</code>本质上只是一个子父组件通信的语法糖。</p>\n<h2 id="12-%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E7%9A%84%E6%B7%B1%E5%85%A5%E5%88%86%E6%9E%90">12. 动态组件的深入分析<a class="anchor" href="#12-%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E7%9A%84%E6%B7%B1%E5%85%A5%E5%88%86%E6%9E%90">§</a></h2>\n<p>这一节，我们又回到了组件的分析。动态组件是我们平时开发中高频率使用的东西。核心是<code>is</code>属性的使用。文末还粗略介绍了另一个概念，动态组件。</p>\n<h2 id="13-keep-alive%E7%9A%84%E9%AD%94%E6%B3%95">13. keep-alive的魔法<a class="anchor" href="#13-keep-alive%E7%9A%84%E9%AD%94%E6%B3%95">§</a></h2>\n<p>内置组件中最重要，也是最经常使用的是<code>keep-alive</code>组件，我们将<code>keep-alive</code>配合动态组件<code>is</code>使用，达到在切换组件的同时，将旧组件进行缓存，以便保留初始状态的目的。<code>keep-alive</code>有不同于其他组件的生命周期，并且他在缓存上也做了优化。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { href: "src/assets/favicon.ico", rel: "icon" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/In-depth-analysis-of-Vue/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Author       : HyFun\n * @Date         : 2021-09-14 17:56:25\n * @Description  : \n * @LastEditors  : HyFun\n * @LastEditTime : 2021-09-15 09:53:03\n-->\n<h1>Introduction</h1>\n<h2 id="1-%E4%B8%B0%E5%AF%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5">1. 丰富的选项合并策略<a class="anchor" href="#1-%E4%B8%B0%E5%AF%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5">§</a></h2>\n<p><code>new Vue</code>是运行<code>Vue</code>框架的第一步，<code>Vue</code>作为构造器，实例化阶段的第一步是执行初始化过程，而选项合并是初始化的开始。我们会向构造器中传递各种类型的可配置选项，例如<code>data,props</code>,或者像<code>mounted</code>这类生命周期钩子。而除了这些用户自定义的选项，<code>Vue</code>还提供了很多内部的选项，这些选项遵循什么样的合并规则就是这一节分析的重点。</p>\n<h2 id="2-%E5%9F%BA%E7%A1%80%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86">2. 基础的数据代理<a class="anchor" href="#2-%E5%9F%BA%E7%A1%80%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86">§</a></h2>\n<p>使用<code>Vue</code>做开发的同学都知道，<code>Vue</code>的核心是它的响应式系统，而响应式系统的核心是利用了<code>Object.defineProperty</code>进行数据拦截，这一节内容会深入分析<code>Vue</code>中两种数据拦截的方式：<code>Object.defineProperty,Proxy</code>,尽管响应式系统用的是兼容性更好的<code>Object.defineProperty</code>，但是<code>proxy</code>也在源码中使用上了，其中的一个例子就是用作数据过滤筛选。</p>\n<h2 id="3-%E5%AE%8C%E6%95%B4%E6%8C%82%E8%BD%BD%E6%B5%81%E7%A8%8B%E5%92%8C%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91">3. 完整挂载流程和模板编译<a class="anchor" href="#3-%E5%AE%8C%E6%95%B4%E6%8C%82%E8%BD%BD%E6%B5%81%E7%A8%8B%E5%92%8C%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91">§</a></h2>\n<p><code>Vue</code>版本提供了运行时版本和同时包含编译器和运行时的版本，他们都有各自的使用场景。除了介绍两者的区别外，文章的核心还介绍了实例在挂载阶段的完整流程，虽然不会对流程中的每个具体环节展开分析，但是可以知道大致完整的挂载思路。文章最后还介绍了编译器巧妙的设计思路。</p>\n<h2 id="4-%E5%AE%8C%E6%95%B4%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B">4. 完整渲染流程<a class="anchor" href="#4-%E5%AE%8C%E6%95%B4%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B">§</a></h2>\n<p><code>Virtual DOM</code>是<code>js</code>操作和<code>DOM</code>渲染之间的桥梁，<code>JS</code>对<code>DOM</code>节点的操作，都会批量反应到<code>Virtual DOM</code>这个节点描述对象上，它的理念很大程度提高了渲染的性能。有了上一节的基础，这一节会分析两个挂载阶段的核心过程，<code>render,update</code>,<code>render</code>阶段会将模板编译渲染函数，解析成<code>Virtual DOM</code>树，<code>update</code>阶段会将<code>Virtual DOM</code>树映射为真实的<code>DOM</code>节点。</p>\n<h2 id="5-%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80%E5%89%96%E6%9E%90">5. 组件基础剖析<a class="anchor" href="#5-%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80%E5%89%96%E6%9E%90">§</a></h2>\n<p>组件是<code>Vue</code>另一个核心，组件化开发是衡量<code>Vue</code>开发能力的标准。文章会从组件的注册开始，介绍全局注册和局部注册在实现原理上的区别，另外组件的挂载流程也是分析的重点，这一切也都依赖于前面介绍过的渲染流程。</p>\n<h2 id="6-%E7%BB%84%E4%BB%B6%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95">6. 组件高级用法<a class="anchor" href="#6-%E7%BB%84%E4%BB%B6%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95">§</a></h2>\n<p>除了基础的组件用法，<code>Vue</code>还提供了高级的用法，例如异步组件和函数组件。异步组件是首屏性能优化的解决方案，深入它的实现原理更有助于我们在开发中首屏性能问题。而函数式组件也有其独特的使用场景。</p>\n<h2 id="7-%E6%B7%B1%E5%85%A5%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E6%9E%84%E5%BB%BA--%E4%B8%8A%E4%B8%AD%E4%B8%8B">7. 深入响应式系统构建- 上，中，下<a class="anchor" href="#7-%E6%B7%B1%E5%85%A5%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E6%9E%84%E5%BB%BA--%E4%B8%8A%E4%B8%AD%E4%B8%8B">§</a></h2>\n<p>响应式系统构建是<code>Vue</code>的核心，也是难点，这个系列会有三篇的内容去尝试分析内部的实现细节。从响应式数据的构建，再到每种数据类型依赖收集和派发更新的分析。文章也模拟了一个简易版的响应式系统方便深层次源码的分析。在响应式系统构建中，还有很多的特殊情况需要考虑，例如数组的响应式构建，对象的异常处理等。</p>\n<h2 id="8-diff%E7%AE%97%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0">8. diff算法的实现<a class="anchor" href="#8-diff%E7%AE%97%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0">§</a></h2>\n<p><code>virtual dom</code>引入的另一个关键是在旧节点发生改变时，利用<code>diff</code>算法比较新旧节点的差异，以达到最小变化的改变真实节点。文章会从脱离框架的角度实现一个<code>diff</code>算法。</p>\n<h2 id="9-%E6%8F%AD%E7%A7%98vue%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6">9. 揭秘Vue的事件机制<a class="anchor" href="#9-%E6%8F%AD%E7%A7%98vue%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6">§</a></h2>\n<p><code>Vue</code>提供了很多实用的功能给用户，其中一个就是使用模板去进行事件监听。<code>@click</code>作为事件指令会在模板编译阶段解析，并且会在真实节点的渲染阶段进行相关事件的绑定。而对于组件的事件而言，他提供了子父组件通信的方式，本质上是在同个子组件内部维护了一个事件总线。更多的内容可以参考文章的分析。</p>\n<h2 id="10-%E4%BD%A0%E6%83%B3%E4%BA%86%E8%A7%A3%E7%9A%84vue%E6%8F%92%E6%A7%BD">10. 你想了解的<code>Vue</code>插槽<a class="anchor" href="#10-%E4%BD%A0%E6%83%B3%E4%BA%86%E8%A7%A3%E7%9A%84vue%E6%8F%92%E6%A7%BD">§</a></h2>\n<p><code>Vue</code>组件的另一个重要概念是插槽，它允许你以一种不同于严格的父子关系的方式组合组件。插槽为你提供了一个将内容放置到新位置或使组件更通用的出口。这一节将围绕官网对插槽内容的介绍思路，按照普通插槽，具名插槽，再到作用域插槽的思路，逐步深入内部的实现原理。</p>\n<h2 id="11-v-model%E7%9A%84%E8%AF%AD%E6%B3%95%E7%B3%96">11. v-model的语法糖<a class="anchor" href="#11-v-model%E7%9A%84%E8%AF%AD%E6%B3%95%E7%B3%96">§</a></h2>\n<p>我们都知道<code>v-model</code>是实现双向数据绑定的核心，但如果深入源码我们可以知道，<code>v-model</code>的核心只是通过事件触发去改变表单的值。除此之前<code>v-model</code>语法糖还在组合输入过程做了一系列的优化。另外组件上使用<code>v-model</code>本质上只是一个子父组件通信的语法糖。</p>\n<h2 id="12-%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E7%9A%84%E6%B7%B1%E5%85%A5%E5%88%86%E6%9E%90">12. 动态组件的深入分析<a class="anchor" href="#12-%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E7%9A%84%E6%B7%B1%E5%85%A5%E5%88%86%E6%9E%90">§</a></h2>\n<p>这一节，我们又回到了组件的分析。动态组件是我们平时开发中高频率使用的东西。核心是<code>is</code>属性的使用。文末还粗略介绍了另一个概念，动态组件。</p>\n<h2 id="13-keep-alive%E7%9A%84%E9%AD%94%E6%B3%95">13. keep-alive的魔法<a class="anchor" href="#13-keep-alive%E7%9A%84%E9%AD%94%E6%B3%95">§</a></h2>\n<p>内置组件中最重要，也是最经常使用的是<code>keep-alive</code>组件，我们将<code>keep-alive</code>配合动态组件<code>is</code>使用，达到在切换组件的同时，将旧组件进行缓存，以便保留初始状态的目的。<code>keep-alive</code>有不同于其他组件的生命周期，并且他在缓存上也做了优化。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#1-%E4%B8%B0%E5%AF%8C%E7%9A%84%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5" }, "1. \u4E30\u5BCC\u7684\u9009\u9879\u5408\u5E76\u7B56\u7565")),
            React.createElement("li", null,
                React.createElement("a", { href: "#2-%E5%9F%BA%E7%A1%80%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86" }, "2. \u57FA\u7840\u7684\u6570\u636E\u4EE3\u7406")),
            React.createElement("li", null,
                React.createElement("a", { href: "#3-%E5%AE%8C%E6%95%B4%E6%8C%82%E8%BD%BD%E6%B5%81%E7%A8%8B%E5%92%8C%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91" }, "3. \u5B8C\u6574\u6302\u8F7D\u6D41\u7A0B\u548C\u6A21\u677F\u7F16\u8BD1")),
            React.createElement("li", null,
                React.createElement("a", { href: "#4-%E5%AE%8C%E6%95%B4%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B" }, "4. \u5B8C\u6574\u6E32\u67D3\u6D41\u7A0B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#5-%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80%E5%89%96%E6%9E%90" }, "5. \u7EC4\u4EF6\u57FA\u7840\u5256\u6790")),
            React.createElement("li", null,
                React.createElement("a", { href: "#6-%E7%BB%84%E4%BB%B6%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95" }, "6. \u7EC4\u4EF6\u9AD8\u7EA7\u7528\u6CD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#7-%E6%B7%B1%E5%85%A5%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E6%9E%84%E5%BB%BA--%E4%B8%8A%E4%B8%AD%E4%B8%8B" }, "7. \u6DF1\u5165\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u6784\u5EFA- \u4E0A\uFF0C\u4E2D\uFF0C\u4E0B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#8-diff%E7%AE%97%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0" }, "8. diff\u7B97\u6CD5\u7684\u5B9E\u73B0")),
            React.createElement("li", null,
                React.createElement("a", { href: "#9-%E6%8F%AD%E7%A7%98vue%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6" }, "9. \u63ED\u79D8Vue\u7684\u4E8B\u4EF6\u673A\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#10-%E4%BD%A0%E6%83%B3%E4%BA%86%E8%A7%A3%E7%9A%84vue%E6%8F%92%E6%A7%BD" }, "10. \u4F60\u60F3\u4E86\u89E3\u7684Vue\u63D2\u69FD")),
            React.createElement("li", null,
                React.createElement("a", { href: "#11-v-model%E7%9A%84%E8%AF%AD%E6%B3%95%E7%B3%96" }, "11. v-model\u7684\u8BED\u6CD5\u7CD6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#12-%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E7%9A%84%E6%B7%B1%E5%85%A5%E5%88%86%E6%9E%90" }, "12. \u52A8\u6001\u7EC4\u4EF6\u7684\u6DF1\u5165\u5206\u6790")),
            React.createElement("li", null,
                React.createElement("a", { href: "#13-keep-alive%E7%9A%84%E9%AD%94%E6%B3%95" }, "13. keep-alive\u7684\u9B54\u6CD5")))),
    'author': "wyp",
    'contributors': [
        "wyp",
        "Ocean1509",
        "hyfun"
    ],
    'date': "2019-10-29T10:04:26.000Z",
    'updated': "2021-09-15T02:34:36.000Z",
    'excerpt': "Introduction 1. 丰富的选项合并策略 new Vue是运行Vue框架的第一步，Vue作为构造器，实例化阶段的第一步是执行初始化过程，而选项合并是初始化的开始。我们会向构造器中传递各种类型的可配置选项，例如data,props,或者像mount...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "text": "1.丰富的选项合并策略",
            "link": "src/1.丰富的选项合并策略.html",
            "pagePath": "src/1.丰富的选项合并策略.md"
        },
        {
            "text": "2.基础的数据代理检测",
            "link": "src/2.基础的数据代理检测.html",
            "pagePath": "src/2.基础的数据代理检测.md"
        },
        {
            "text": "3.实例挂载流程和模板编译",
            "link": "src/3.实例挂载流程和模板编译.html",
            "pagePath": "src/3.实例挂载流程和模板编译.md"
        },
        {
            "text": "4.完整渲染流程",
            "link": "src/4.完整渲染流程.html",
            "pagePath": "src/4.完整渲染流程.md"
        },
        {
            "text": "5.组件基础剖析",
            "link": "src/5.组件基础剖析.html",
            "pagePath": "src/5.组件基础剖析.md"
        },
        {
            "text": "6.组件高级用法",
            "link": "src/6.组件高级用法.html",
            "pagePath": "src/6.组件高级用法.md"
        },
        {
            "text": "7.深入响应式系统构建-上",
            "link": "src/7.深入响应式系统构建-上.html",
            "pagePath": "src/7.深入响应式系统构建-上.md"
        },
        {
            "text": "7.深入响应式系统构建-中",
            "link": "src/7.深入响应式系统构建-中.html",
            "pagePath": "src/7.深入响应式系统构建-中.md"
        },
        {
            "text": "7.深入响应式系统构建-下",
            "link": "src/7.深入响应式系统构建-下.html",
            "pagePath": "src/7.深入响应式系统构建-下.md"
        },
        {
            "text": "8.来，跟我一起实现diff算法",
            "link": "src/8.来，跟我一起实现diff算法.html",
            "pagePath": "src/8.来，跟我一起实现diff算法.md"
        },
        {
            "text": "9.揭秘Vue的事件机制",
            "link": "src/9.揭秘Vue的事件机制.html",
            "pagePath": "src/9.揭秘Vue的事件机制.md"
        },
        {
            "text": "10.vue插槽，你想了解的都在这里",
            "link": "src/10.vue插槽，你想了解的都在这里.html",
            "pagePath": "src/10.vue插槽，你想了解的都在这里.md"
        },
        {
            "text": "11.你真的了解v-model的语法糖了吗",
            "link": "src/11.你真的了解v-model的语法糖了吗.html",
            "pagePath": "src/11.你真的了解v-model的语法糖了吗.md"
        },
        {
            "text": "12.动态组件的深入分析",
            "link": "src/12.动态组件的深入分析.html",
            "pagePath": "src/12.动态组件的深入分析.md"
        },
        {
            "text": "13.彻底搞懂Vue中keep-alive的魔法-上",
            "link": "src/13.彻底搞懂Vue中keep-alive的魔法-上.html",
            "pagePath": "src/13.彻底搞懂Vue中keep-alive的魔法-上.md"
        },
        {
            "text": "13.彻底搞懂Vue中keep-alive的魔法-下",
            "link": "src/13.彻底搞懂Vue中keep-alive的魔法-下.html",
            "pagePath": "src/13.彻底搞懂Vue中keep-alive的魔法-下.md"
        }
    ]
};
