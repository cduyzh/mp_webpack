<script>
    export default {
        mpType: 'app',
        methods: {
        },
        async created() {
            // 尝试强制更新
            if (wx.canIUse('getUpdateManager')) {
                console.log('尝试更新')
                const updateManager = wx.getUpdateManager()
                updateManager.onCheckForUpdate(res => {
                    // 请求完新版本信息的回调
                    console.log('请求完新版本信息的回调', res.hasUpdate)
                })
                updateManager.onUpdateReady(() => {
                    wx.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，是否重启应用？',
                        success(res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                updateManager.applyUpdate()
                            }
                        }
                    })
                })
            }
        },
        onShow() {
            console.log(123123);
        }
    }

</script>

// 引入we-ui
<style lang="scss" src="./libs/weui.min.css"></style>
<style lang="scss" rel="stylesheet/scss">
    html {
        box-sizing: border-box;
        height: 100%;
        background: rgb(243, 243, 243);
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        height: 100%;
        margin: 0;
        font-size: 0;
        overflow-x: hidden;
        /* 设置点击链接的时候出现的高亮颜色。显示给用户的高光是他们成功点击的标识，以及暗示了他们点击的元素 */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    /* 显示弹框时隐藏滚动条，以免ios上输入框输入文字时，光标会飞掉 */
    .app-no-scroll {
        height: 100vh;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro SC', 'SF Pro Text', 'PingFang SC', 'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma,
            Simsun, sans-serif;
    }
    /* vue编译结束前不显示带v-cloak的标签 */
    [v-cloak] {
        display: none !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul {
        margin: 0;
        padding-left: 0;
    }
    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
    button {
        border: none;
        outline: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        border-radius: 100px !important;
    }
    .submit-btn {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
        margin-top: 40px;
        width: 100%;
        height: 48px;
        font-size: 16px;
        letter-spacing: 1pxpx;
        color: #fff;
        background: #d3dbe4;
        border-radius: 4px;
        align-items: center;
        align-self: flex-end;
        &:not([disabled]) {
            color: #ffffff;
            background-image: linear-gradient(-90deg, #48ccce 0%, #37b0e4 100%);
            box-shadow: 0 4px 10px 0 rgba(4, 201, 161, 0.3);
        }
    }
    button:after {
        border: none !important;
    }
    input,
    textarea {
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        -webkit-tap-highlight-color: transparent;
    }
    .item {
        input {
            color: #051c51 !important;
        }
        .phone-input {
            color: #48ccce !important;
            &:not([disabled]) {
                color: #051c51 !important;
            }
        }
    }
    // 单行省略
    .single-line-overflow-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    // 多行省略
    .multi-line-overflow-ellipsis-5 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
    }
    .weui-footer {
        color: #a8b3bf;
    }
    // 小程序输入框placeholder样式
    .input-placeholder {
        /* WebKit browsers */
        color: #b2b2b2;
    }
    // 全局弹框的遮罩样式
    .global-mask {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1000;
        transition: 0.5s all;
    }
    .stop-scroll {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
</style>
