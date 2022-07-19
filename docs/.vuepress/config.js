const moment = require('moment');
module.exports = {
    base: "/",
    theme: 'reco',
    dest: '../../dist',
    title: 'Shallrise',
    description: '是我的',
    head: [
        ['meta', {
            name: 'author',
            content: 'Shallrise的学习笔记'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Shallrise的学习笔记'
        }],
        //百度统计
        ["script", {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?5204ff8df84b38645119e93b64eca261";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/MouseClickEffect.js"
        }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    moment.locale("zh-cn");
                    return moment(timestamp).fromNow("LLLL")
                }
            }
        ],
        [
            "vuepress-plugin-cursor-effects",
            {
                size: 2, // size of the particle, default: 2
                shape: 'circle', // shape of the particle, default: 'star'
                zIndex: 999999999 // z-index property of the canvas, default: 999999999
            }
        ],

    ],
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            platform: 'github', //v3的platform是github，v4的是github-v4
            locale: 'zh', //语言
            // 其他的 Vssue 配置
            owner: 'Shallrise', //github账户名
            repo: 'shallrise.github.io', //github一个项目的名称
            clientId: '8d69204a805d81d21326', //注册的Client ID
            clientSecret: 'ec1c8bf548fd19f2586d9c798d324d7576e982ed', //注册的Client Secret
            autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
        },
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        },
        '@cursor-effects': {
            size: 3, // size of the particle, default: 2
            shape: ['circle'], // shape of the particle, default: 'star'
            zIndex: 999999999 // z-index property of the canvas, default: 999999999
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./slidebar.js"),
        subSidebar: 'auto',
        sidebarDepth: 2,
        collapsed: true, //该导航默认情况下是闭合的
        displayAllHeaders: true, // 默认值：false
        lastUpdated: '上次更新',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',

    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },

}

//"docs:build": "vuepress build docs",