/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-07 16:00:58
 * @LastEditTime: 2022-09-22 11:37:12
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \muyi.dev\docs\.vitepress\config.js
 */

const taskLists = require('markdown-it-task-lists')

export default {
    lang: 'zh-CN',
    title: '前端组装工人',
    description: '一个前端开发程序员的点点滴滴',
    lastUpdated: true,
    head: [
        [
            'script',
            {},
            `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?a607e35bdad8c2e5bae1f327f3f41f19";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
            `
        ]
    ],
    themeConfig: {
        siteTitle: '前端组装工人',
        nav: [
            { text: '首页', link: '/' },
            { text: '前端开发周报', link: '/logs/', activeMatch: '/logs/' },
            { text: 'ezAdmin3', link: '/ezadmin3/', activeMatch: '/ezadmin3/' },
            { text: 'ezMaths', link: '/ezmaths/', activeMatch: '/ezmaths/' },
            { text: 'ezMusic', link: '/ezmusic/', activeMatch: '/ezmusic/' }
        ],
        sidebar: {
            '/logs/': [
                {
                    text: '2022 - 拥抱开源!',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: '08-27 #008',
                            link: '/logs/2022-08-27'
                        },
                        {
                            text: '08-21 #007',
                            link: '/logs/2022-08-21'
                        },
                        {
                            text: '08-13 #006',
                            link: '/logs/2022-08-13'
                        },
                        {
                            text: '08-06 #005',
                            link: '/logs/2022-08-06'
                        },
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
            ],
            '/ezmusic/': [
                {
                    text: 'ezMusic',
                    // link: ''
                    items: [
                        {
                            text: '介绍',
                            link: '/ezmusic/'
                        },
                        {
                            text: '背景',
                            link: '/ezmusic/causes'
                        },
                        {
                            text: '功能',
                            link: '/ezmusic/feature'
                        },
                        {
                            text: '技术栈',
                            link: '/ezmusic/stack'
                        }
                    ]
                },
                {
                    text: '使用',
                    items: [
                        {
                            text: '上手',
                            link: '/ezmusic/use'
                        },
                        {
                            text: '维护',
                            link: '/ezmusic/management'
                        }
                    ]
                },
                {
                    text: '部署',
                    items: [
                        {
                            text: '后端部署',
                            link: '/ezmusic/backend'
                        },
                        {
                            text: '初始化',
                            link: '/ezmusic/init'
                        },
                        {
                            text: '前端部署',
                            link: '/ezmusic/frontend'
                        }
                    ]
                },
                {
                    text: '声明',
                    items: [
                        {
                            text: '开源',
                            link: '/ezmusic/open_source'
                        },
                        {
                            text: '感谢',
                            link: '/ezmusic/acknowledgement'
                        }
                    ]
                }
            ]
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/nmtuan' }],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    },
    markdown: {
        config: (md) => {
            md.use(taskLists)
        }
    }
}
