<template>
    <canvas :canvas-id="id" :style="{width: widthAndHeight, height: widthAndHeight}"></canvas>
</template>
<script>
    export default {
        props: {
            id: {
                default: 'canvas'
            },
            percent: {
                default: 0
            },
            linewidth: {
                default: 4
            },
            fontsize: {
                default: 10
            },
            radius: {
                default: 13
            },
            widthAndHeight: {
                default: '40px'
            },
            fontcolor: {
                default: '#828DA8'
            }
        },
        data() {
            return {
            }
        },
        methods: {
            drawCircle(step) {
                const rate = wx.getSystemInfoSync().windowWidth / 375
                let ctx = wx.createCanvasContext(this.id)
                ctx.setLineWidth(this.linewidth)// 设置圆环的宽度
                ctx.setStrokeStyle('#efefef') // 设置圆环的颜色
                ctx.setLineCap('round') // 设置圆环端点的形状
                ctx.beginPath()// 开始一个新的路径
                ctx.arc(this.radius * rate + this.linewidth, this.radius * rate + this.linewidth, this.radius * rate, 0, 2 * Math.PI, false)
                // 设置一个原点(100,100)，半径为90的圆的路径到当前路径
                ctx.stroke()// 对当前路径进行描边
                // 设置渐变
                let gradient = ctx.createLinearGradient(200, 100, 100, 200)
                if (this.percent <= 0.75) {
                    gradient.addColorStop('0', '#FF6361')
                    gradient.addColorStop('1.0', '#FFA06D')
                } else {
                    gradient.addColorStop('0', '#37B0E4')
                    gradient.addColorStop('1.0', '#48CCCE')
                }
                ctx.setFontSize(this.fontsize)
                ctx.setTextAlign('center')
                ctx.fillStyle = this.fontcolor
                ctx.fillText((this.percent * 100).toFixed(1) + '%', this.radius * rate + this.linewidth, this.radius * rate + this.linewidth + this.fontsize / 3)
                ctx.setLineWidth(this.linewidth)
                ctx.setStrokeStyle(gradient)
                ctx.setLineCap('round')
                ctx.beginPath()
                // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
                let temp = step * 2 * Math.PI - Math.PI / 2
                if (this.percent) {
                    ctx.arc(this.radius * rate + this.linewidth, this.radius * rate + this.linewidth, this.radius * rate, -Math.PI / 2, temp, false)
                }
                ctx.stroke()
                ctx.draw()
            },
        },
        onShow() {
            setTimeout(() => {
                this.drawCircle(this.percent)
            }, 400)
            setTimeout(() => {
                this.drawCircle(this.percent)
            }, 2400)
        },
        mounted() {
            setTimeout(() => {
                this.drawCircle(this.percent)
            }, 400)
            setTimeout(() => {
                this.drawCircle(this.percent)
            }, 2400)
        }
    }
</script>
<style>
    canvas {
        z-index: 1;
    }
</style>
