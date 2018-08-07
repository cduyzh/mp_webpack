module.exports = [
    // 足迹页面
    {
        path: '/pages/index/index',
        config: {
            navigationBarTitleText: '选课精灵',
            navigationBarBackgroundColor: '#48CCCE',
            navigationBarTextStyle: 'white',
            backgroundColor: '#f3f3f3',
            onReachBottomDistance: 0,
        },
    },
    // 我的页面
    {
        path: 'pages/mine/index',
        config: {
            navigationBarTitleText: '我的',
            navigationBarBackgroundColor: '#48CCCE',
            navigationBarTextStyle: 'white',
            backgroundColor: '#48CCCE',
        },
    },
    {
        path: 'pages/lesson/index',
        config: {
            navigationBarTitleText: '课程详情'
        },
        root: 'pages/lesson'
    },
    // 关于我们
    {
        path: 'pages/about/index',
        config: {
            navigationBarTitleText: '关于'
        },
        root: 'pages/about'
    }
]