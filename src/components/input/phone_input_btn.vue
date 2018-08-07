<template>
    <div class="phone-input-btn">
        <button class='input-wrap input-number-wrap' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
            <p>请输入常用手机号</p>
        </button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {checkSession, login} from '@/utils/mp_api'
    import {PHONE_ACCREDIT} from '@/libs/const'

    export default {
        name: 'phone-input-btn',
        data() {
            return {
                showCode: false,
                postData: {}
            }
        },
        methods: {
            ...mapActions({
                vxGetPhoneNumber: 'account/getPhoneNumber'
            }),
            async getPhoneNumber(e) {
                // 获取解密所需的数据
                try {
                    const res = await checkSession()
                    console.log('登录态有效', res);
                } catch (error) {
                    console.log('登录态失效', error);
                    const res = await login()
                    console.log('重新登录', res);
                }
                console.log(e);
                console.log(e.mp.detail.errMsg)
                console.log(e.mp.detail.iv)
                console.log(e.mp.detail.encryptedData)
                // 用户确认授权操作
                if (e.mp.detail.errMsg === PHONE_ACCREDIT.success) {
                    // 确认授权微信手机号填入
                    const res = await login()
                    const postData = {
                        wxCode: res.code,
                        options: {
                            iv: e.mp.detail.iv,
                            encryptedData: e.mp.detail.encryptedData,
                        }
                    }
                    try {
                        // 解密数据，拿到手机号
                        const phoneRes = await this.vxGetPhoneNumber(postData)
                        this.$emit('phoneCallback', phoneRes.phone, phoneRes.verifyCode)
                        this.$emit('update:authorizedSuccess', true)
                    } catch (error) {
                        wx.showToast({
                            title: '微信授权失败，请重试', // 提示的内容,
                            icon: 'none', // 图标,
                            duration: 1500, // 延迟时间,
                            mask: true, // 显示透明蒙层，防止触摸穿透,
                        });
                    }
                } else {
                    // 取消授权微信手机号，用户自己输入
                    this.$emit('update:authorizedSuccess', false)
                    return false
                }
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .phone-input-btn {
        button {
            background-color: #fff;
            text-align: left;
            padding: 0;
            border-color: #fff;
            p {
                font-size: 14px;
                color: #b2b2b2;
                border-color: #fff;
            }
        }
    }
</style>
