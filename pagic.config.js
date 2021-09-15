/*
 * @Author       : HyFun
 * @Date         : 2021-09-14 17:44:59
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-15 13:42:25
 */
const root = '/In-depth-analysis-of-Vue/';
export default {
    srcDir: '.',
    exclude: ['LICENSE'],
    root,
    theme: 'docs',
    plugins: ['sidebar', 'prev_next'],
    title: '深入剖析Vue源码',
    description: 'Vue源码解析，深入剖析Vue源码',
    // To use jsx syntax, please rename this file to pagic.config.tsx
    head: (React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "icon", href: root + 'src/assets/favicon.ico' }))),
    nav: [
        {
            text: 'Vue2.x文档',
            target: '_blank',
            link: 'https://cn.vuejs.org/index.html'
        },
        {
            text: '历史地址',
            target: '_blank',
            link: 'https://book.penblog.cn/'
        },
        {
            text: '赞助作者',
            // link: 'https://github.com/xcatliu/buy-me-a-coffee',
            // target: '_blank',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: root + `src/assets/wechat.png`, width: "256", style: { marginRight: '1rem', verticalAlign: 'top' } }),
                React.createElement("img", { src: root + `src/assets/alipay.png`, width: "256", style: { verticalAlign: 'top' } })))
        }
        // {
        //   text: 'About',
        //   link: '/pagic_template_docs/about/index.html',
        //   align: 'right',
        // },
    ],
    github: 'https://github.com/Ocean1509/In-depth-analysis-of-Vue',
    sidebar: {
        '/': [
            '/introduction/README.md',
            {
                text: '1.丰富的选项合并策略',
                link: `${root}src/1.丰富的选项合并策略.md`
            },
            {
                text: '2.基础的数据代理检测',
                link: `${root}src/2.基础的数据代理检测.md`
            },
            {
                text: '3.实例挂载流程和模板编译',
                link: `${root}src/3.实例挂载流程和模板编译.md`
            },
            {
                text: '4.完整渲染流程',
                link: `${root}src/4.完整渲染流程.md`
            },
            {
                text: '5.组件基础剖析',
                link: `${root}src/5.组件基础剖析.md`
            },
            {
                text: '6.组件高级用法',
                link: `${root}src/6.组件高级用法.md`
            },
            {
                text: '7.深入响应式系统构建-上',
                link: `${root}src/7.深入响应式系统构建-上.md`
            },
            {
                text: '7.深入响应式系统构建-中',
                link: `${root}src/7.深入响应式系统构建-中.md`
            },
            {
                text: '7.深入响应式系统构建-下',
                link: `${root}src/7.深入响应式系统构建-下.md`
            },
            {
                text: '8.来，跟我一起实现diff算法',
                link: `${root}src/8.来，跟我一起实现diff算法.md`
            },
            {
                text: '9.揭秘Vue的事件机制',
                link: `${root}src/9.揭秘Vue的事件机制.md`
            },
            {
                text: '10.vue插槽，你想了解的都在这里',
                link: `${root}src/10.vue插槽，你想了解的都在这里.md`
            },
            {
                text: '11.你真的了解v-model的语法糖了吗',
                link: `${root}src/11.你真的了解v-model的语法糖了吗.md`
            },
            {
                text: '12.动态组件的深入分析',
                link: `${root}src/12.动态组件的深入分析.md`
            },
            {
                text: '13.彻底搞懂Vue中keep-alive的魔法-上',
                link: `${root}src/13.彻底搞懂Vue中keep-alive的魔法-上.md`
            },
            {
                text: '13.彻底搞懂Vue中keep-alive的魔法-下',
                link: `${root}src/13.彻底搞懂Vue中keep-alive的魔法-下.md`
            }
        ]
    },
    tools: {
        // editOnGitHub: true,
        backToTop: true
    },
    port: 8000
};
