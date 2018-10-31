/**
 * @file doc 配置
 * @date 2018-10-31
 * @author lixiaoqing(lixiaoqing01@baidu.com)
 */

module.exports = {
    base: '/imageviewer/',
    title: '移动图片放大浏览器',
    dest: 'output/imageviewer',
    description: '移动图片放大浏览器',
    head: [
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'viewport', content: 'initial-scale=1,maximum-scale=1,user-scalable=no'}]
    ],
    foot: false,
    themeConfig: {
        // nav: [
        //     {text: 'Radar', link: 'https://radar.baidu.com'}
        // ],
        sidebar: {
            '/guide/': [
                '',
                'example'
            ]
        }
    }
};
