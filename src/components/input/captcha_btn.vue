<template>
    <span class="captcha-btn no-highlight" :class="{'disabled':!canSendSms}" @click="sendSmsNum">{{btnText}}
    </span>
</template>

<script type="text/babel">
    import {isPhoneNumZh} from '@/utils/util'
    import {mapState} from 'vuex'

    // 发送短信验证码失败事件，会携带一个错误信息字符串
    const SEND_SMS_FAILED = 'send-sms-failed';

    export default {
        props: {
            sendSms: {
                type: Function
            },
            phoneNum: {
                type: String,
                default: ''
            },
            // 可点击状态下的wording
            clickableText: {
                type: String,
                default: '短信验证'
            },
            // 倒计时状态下的wording
            countingText: {
                type: String,
                default: 's'
            },
            showCode: {
                type: Boolean,
                default: false
            },
            phoneAuthorized: {
                default: null
            }
        },
        computed: {
            ...mapState({
                vxPhone: state => state.account.userInfo.phone
            }),
            canSendSms() {
                return isPhoneNumZh(this.phoneNum) && this.smsCountDown <= 0 && !this.phoneAuthorized
            },
            btnText() {
                if (this.smsCountDown <= 0) {
                    return this.clickableText
                } else {
                    return this.smsCountDown + this.countingText
                }
            },
            validPhoneResult() {
                return isPhoneNumZh(this.phoneNum)
            },
        },
        data() {
            return {
                // 倒计时数字
                smsCountDown: 0,
                // 发验证码计时器
                sendSmsTimer: 0,
            }
        },
        methods: {
            sendSmsNum,
            startSendSmsCountDown,
        },
        watch: {
            validPhoneResult(newValue) {
                this.$emit('update:isValid', newValue);
            }
        }
    };

    async function sendSmsNum() {
        if (this.smsCountDown > 0 || !isPhoneNumZh(this.phoneNum) || this.phoneAuthorized) {
            return;
        }
        this.startSendSmsCountDown();
        try {
            // 执行父组件的方法
            await this.sendSms()
        } catch (result) {
            console.log(result);
            const errMsg = result.message
            // if (window.Toast) {
            //     window.Toast({text: errMsg, type: 'warn'})
            // } else if (this.$Message && this.$Message.warning) {
            //     this.$Message.warning(errMsg)
            // }
            wx.showToast({
                title: errMsg, // 提示的内容,
                icon: 'none',
                duration: 2000, // 延迟时间,
                mask: true, // 显示透明蒙层，防止触摸穿透,
                success: res => {}
            });
            this.$emit(SEND_SMS_FAILED, errMsg);
            this.smsCountDown = 0;
            clearInterval(this.sendSmsTimer);
        }
    }

    /**
     * 开始发送验证码的倒计时
     */
    function startSendSmsCountDown() {
        this.smsCountDown = 60;
        // 清空已输入的验证码
        this.sendSmsTimer = setInterval(() => {
            if (--this.smsCountDown <= 0) {
                clearInterval(this.sendSmsTimer);
            }
        }, 1000);
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .captcha-btn {
        height: 100%;
        white-space: nowrap;
        // color: $text-highlight;
        color: #7771ed;
        cursor: pointer;
        font-size: 13px;
        color: #48ccce;
        letter-spacing: 0;
        text-align: right;
        margin-left: 10px;
        display: flex;
        align-items: center;
        // width: 55px;
        flex: 1;
        justify-content: flex-end;
        &.disabled {
            // color: $text-hint;
            color: #757680;
            cursor: not-allowed;
        }
    }
    .phone-authorized {
        color: #48ccce;
    }
</style>
