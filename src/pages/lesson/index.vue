<template>
    <div class="lesson">
        课程页面{{data}}
    </div>
</template>

<script>
    const dataArr = []

    export default {
        name: 'lesson',
        data() {
            return {
                data: 0
            }
        },
        mounted() {
            Object.assign(this.$data, this.$options.data())
            wx.showLoading()
            setTimeout(() => {
                this.data++
                wx.hideLoading()
            }, 2000);
        },
        onUnload() {
            dataArr.pop()
            const dataNum = dataArr.length
            if (!dataNum) return
            Object.assign(this.$data, dataArr[dataNum - 1])
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .lesson {
        font-size: 12px;
    }
</style>
