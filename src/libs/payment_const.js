// 微信支付状态常量
export const PAYMENT_STATE = {
    // 调用支付成功
    success: 'requestPayment:ok',
    // 用户取消支付
    cancel: 'requestPayment:fail cancel'
    //   requestPayment: fail(detail message) 调用支付失败， 其中 detail message 为后台返回的详细失败原因
}

/**
 * 支付相关常量
 */
export const ORDER_CONST = {
    // 商品无限数量
    infinityNum: 9999999999,
    // 最小无限数量
    minInfinityNum: 1000000000,
    /**
     * 默认订单过期时间（两个小时）
     */
    EXPIRY_TIME: 2 * 60 * 60 * 1000,
    /**
     * 订单状态
     */
    OrderStates: {
        FIRST: 1,
        // 未支付
        NOT_PAY: 1,
        // 已支付
        PAID: 2,
        // 待确认退款申请
        NEED_CONFIRM_REFUND: 3,
        // 退款中
        REFUNDING: 4,
        // 已退款
        REFUNDED: 5,
        // 已过期
        EXPIRED: 6,
        LAST: 6
    },
    /**
     * 订单状态改变条件
     */
    StateChangeCond: {
        FIRST: 1,
        PAY: 1, // 支付,
        REQUEST_REFUND: 2, // 申请退款,
        AGREE_REFUND: 3, // 同意退款,
        DISAGREE_REFUND: 4, // 不同意退款,
        DONE_REFUND: 5, // 完成退款,
        OUT_OF_DATE: 6, // 已过期,
        LAST: 6
    },
    /**
     * 支付方式
     */
    TradeType: {
        WX_NATIVE: 'wxNative', // 微信扫码支付方式
        WX_JSAPI: 'wxJsapi', // 微信公众号支付
        WX_MPAPI: 'wxMPapi', // 微信小程序支付
    }
}