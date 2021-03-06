/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-07 16:00:58
 * @LastEditTime: 2022-07-29 21:11:23
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \muyi.dev\docs\.vitepress\config.js
 */
export default {
    lang: 'zh-CN',
    title: '前端组装工人',
    description: '一个前端开发程序员的点点滴滴',
    lastUpdated: true,
    themeConfig: {
        siteTitle: '前端组装工人',
        nav: [
            { text: '首页', link: '/' },
            { text: '前端开发周报', link: '/logs/', activeMatch: '/logs/' },
            { text: 'ezAdmin3', link: '/ezadmin3/', activeMatch: '/ezadmin3/' },
            { text: 'ezMaths', link: '/ezmaths/', activeMatch: '/ezmaths/' }
        ],
        sidebar: {
            '/logs/': [
                {
                    text: '2022 - 拥抱开源!',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: '07-29 #004',
                            link: '/logs/2022-07-29'
                        },
                        {
                            text: '07-22 #003',
                            link: '/logs/2022-07-22'
                        },
                        {
                            text: '07-15 #002',
                            link: '/logs/2022-07-15'
                        },
                        {
                            text: '07-08 #001',
                            link: '/logs/2022-07-08'
                        }
                    ]
                }
            ],
            '/ezadmin3/': [
                {
                    text: '概念',
                    items: []
                },
                {
                    text: '特性',
                    items: []
                },
                {
                    text: '使用',
                    items: []
                },
                {
                    text: '目录',
                    items: []
                },
                {
                    text: '部署',
                    items: []
                },
                {
                    text: '更新记录',
                    items: []
                }
            ],
            '/ezmaths/': [
                {
                    text: '介绍',
                    items: []
                }
            ]
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/nmtuan' }],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    }
}
