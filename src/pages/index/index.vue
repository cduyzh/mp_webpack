<template>
    <div class="home">
        首页{{data}}
        <p @click="jumpToCourse">跳转到课程页面</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: 0
            }
        },
        computed: {
        },
        methods: {
            jumpToCourse() {
                this.$router.push({
                    path: '/pages/lesson/index'
                })
            }
        },
        components: {
        },
        created() {
        },
        onLoad() {
            console.log(this.data);
        },
        mounted() {
            wx.showLoading()
            setTimeout(() => {
                this.data++
                wx.hideLoading()
            }, 2000);
        },
        onUnload() {
            console.log('onUnload');
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .home {
        font-size: 12px;
    }
</style>
