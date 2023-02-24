/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-07 16:00:58
 * @LastEditTime: 2023-01-05 10:43:33
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \muyi.dev\docs\.vitepress\config.js
 */

const taskLists = require('markdown-it-task-lists')

export default {
    lang: 'zh-CN',
    title: 'muyi.dev',
    description: '一个前端开发程序员的点点滴滴',
    // lastUpdated: true,
    appearance: true,
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
        ],
        [
            'script',
            {
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4737621804792853',
                crossorigin: 'anonymous',
                async: ''
            }
        ]
    ],
    themeConfig: {
        siteTitle: 'MuYi.dev',
        nav: [
            // {
            //     text: '文档',
            //     items: [
            //         { text: 'based', link: '/based/' },
            //         { text: 'components', link: '/components/' },
            //         { text: 'toys', link: '/toys/' }
            //     ]
            // },
            { text: 'based', link: '/based/', activeMatch: '/based/' },
            {
                text: 'components',
                link: '/components/',
                activeMatch: '/components/'
            },
            { text: 'toys', link: '/toys/', activeMatch: '/toys/' },
            { text: 'about', link: '/about/', activeMatch: '/about/' },
            { text: 'sponsor', link: '/sponsor/', activeMatch: '/sponsor/' }

            // { text: '前端开发周报', link: '/logs/', activeMatch: '/logs/' },
            // { text: 'ezAdmin3', link: '/ezadmin3/', activeMatch: '/ezadmin3/' },
            // { text: 'ezMaths', link: '/ezmaths/', activeMatch: '/ezmaths/' },
            // { text: 'ezMusic', link: '/ezmusic/', activeMatch: '/ezmusic/' }
        ],
        sidebar: [
            {
                items: [
                    { text: 'based', link: '/based/' },
                    { text: 'components', link: '/components/' },
                    { text: 'toys', link: '/toys/' }
                    // { text: 'Base_vite_ie11', link: '/based/base_vite_ie11' },
                    // { text: 'Base_nuxt3', link: '/based/base_nuxt3' },
                    // {
                    //     text: 'Base_vite_chrome_extension',
                    //     link: '/based/base_vite_chrome_extension'
                    // }
                ]
            },
            // {
            //     text: 'components',
            //     items: [
            //         { text: 'ezAdmin', link: '/components/ezAdmin' },
            //         { text: 'ezAdmin3', link: '/components/ezAdmin3' }
            //     ]
            // },
            // {
            //     text: 'toys',
            //     items: [
            //         { text: 'sy_bookmarks', link: '/toys/sy_bookmarks' },
            //         { text: 'ezBookmarks', link: '/toys/ezBookmarks' },
            //         { text: 'ezBookmarks2', link: '/toys/ezBookmarks2' },
            //         { text: 'Maths', link: '/toys/maths' },
            //         { text: 'ezHomepage', link: '/toys/ezHomepage' },
            //         { text: 'ezMusic', link: '/toys/ezMusic' },
            //         { text: 'ezUI_jquery', link: '/toys/ezUI_jquery' }
            //     ]
            // },
            {
                // text: 'other',
                items: [
                    { text: 'about', link: '/about/' },
                    { text: 'sponsor', link: '/sponsor/' }
                ]
            }
        ],

        // sidebar: {
        // '/based/': [
        //     {
        //         text: '111',
        //         link: '/based/111'
        //     }
        // ]
        // '/logs/': [
        //     {
        //         text: '2022 - 拥抱开源!',
        //         collapsible: true,
        //         collapsed: false,
        //         items: [
        //             {
        //                 text: '09-26 #009',
        //                 link: '/logs/2022-09-26'
        //             },
        //             {
        //                 text: '08-27 #008',
        //                 link: '/logs/2022-08-27'
        //             },
        //             {
        //                 text: '08-21 #007',
        //                 link: '/logs/2022-08-21'
        //             },
        //             {
        //                 text: '08-13 #006',
        //                 link: '/logs/2022-08-13'
        //             },
        //             {
        //                 text: '08-06 #005',
        //                 link: '/logs/2022-08-06'
        //             },
        //             {
        //                 text: '07-29 #004',
        //                 link: '/logs/2022-07-29'
        //             },
        //             {
        //                 text: '07-22 #003',
        //                 link: '/logs/2022-07-22'
        //             },
        //             {
        //                 text: '07-15 #002',
        //                 link: '/logs/2022-07-15'
        //             },
        //             {
        //                 text: '07-08 #001',
        //                 link: '/logs/2022-07-08'
        //             }
        //         ]
        //     }
        // ],
        // '/ezadmin3/': [
        //     {
        //         text: '概念',
        //         items: []
        //     },
        //     {
        //         text: '特性',
        //         items: []
        //     },
        //     {
        //         text: '使用',
        //         items: []
        //     },
        //     {
        //         text: '目录',
        //         items: []
        //     },
        //     {
        //         text: '部署',
        //         items: []
        //     },
        //     {
        //         text: '更新记录',
        //         items: []
        //     }
        // ],
        // '/ezmaths/': [
        //     {
        //         text: '介绍',
        //         items: []
        //     }
        // ],
        // '/ezmusic/': [
        //     {
        //         text: 'ezMusic',
        //         // link: ''
        //         items: [
        //             {
        //                 text: '介绍',
        //                 link: '/ezmusic/'
        //             },
        //             {
        //                 text: '背景',
        //                 link: '/ezmusic/causes'
        //             },
        //             {
        //                 text: '功能',
        //                 link: '/ezmusic/feature'
        //             },
        //             {
        //                 text: '技术栈',
        //                 link: '/ezmusic/stack'
        //             }
        //         ]
        //     },
        //     {
        //         text: '部署',
        //         items: [
        //             {
        //                 text: '后端部署',
        //                 link: '/ezmusic/backend'
        //             },
        //             {
        //                 text: '初始化',
        //                 link: '/ezmusic/init'
        //             },
        //             {
        //                 text: '前端部署',
        //                 link: '/ezmusic/frontend'
        //             }
        //         ]
        //     },
        //     {
        //         text: '使用',
        //         items: [
        //             {
        //                 text: '上手',
        //                 link: '/ezmusic/use'
        //             },
        //             {
        //                 text: '维护',
        //                 link: '/ezmusic/management'
        //             }
        //         ]
        //     },
        //     {
        //         text: '声明',
        //         items: [
        //             {
        //                 text: '开源',
        //                 link: '/ezmusic/open_source'
        //             },
        //             {
        //                 text: '感谢',
        //                 link: '/ezmusic/acknowledgement'
        //             },
        //             {
        //                 text: '赞赏',
        //                 link: '/ezmusic/reward'
        //             }
        //         ]
        //     }
        // ]
        // },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/nmtuan' },
            { icon: 'twitter', link: 'https://twitter.com/NMTuans' }
        ],
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
