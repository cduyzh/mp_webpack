<template>
    <input v-if="inputType==='text'" class="limit-input" type="text" :class="{ 'invalid':!validResult} " v-model.lazy="inputValue " :placeholder="placeholder " :maxlength="maxLength " @input="onTextChanged " @blur='onTextBlur'>
    </input>
    <input v-else class="limit-input" type="number" :class="{ 'invalid':!validResult} " v-model.lazy="inputValue " :placeholder="placeholder " :maxlength="maxLength " @input="onTextChanged " @blur='onTextBlur'>
    </input>
</template>

<script type="text/babel">
    // 用户敲回车的事件
    const PRESS_ENTER = 'press-enter';

    export default {
        props: {
            inputType: {
                type: String,
                default: 'text'
            },
            // 该输入框的名字，会显示在placeholder中
            placeholder: {
                type: String,
                default: ''
            },
            maxLength: {
                type: Number,
                default: 50
            },
            // 父元素可以通过它改变输入框中的值
            value: {
                type: String,
                default: ''
            },
            isRequired: {
                type: Boolean,
                default: false
            },
            // 输入数据是否正确的校验器
            validator: {
                type: RegExp,
                default: () => /^[\d]+$/
            },
            // 过滤不合法字符的正则匹配器
            invalidFilter: {
                type: RegExp,
                default: () => /[^\d]/g
            },
            // 当前输入框中内容的正确状态，支持sync
            isValid: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                inputValue: this.value,
            }
        },
        computed: {
            validResult() {
                return !this.inputValue && !this.isRequired || this.validator.test(this.inputValue) && this.isRequired;
            },
        },
        methods: {
            onPressEnter(event) {
                this.$emit(PRESS_ENTER, event);
            },
            /**
             * 输入框内容变化时，过滤掉不允许输入的字符
             * @param event
             */
            onTextChanged(event) {
                console.log(event)
                const elem = event.target;
                const newValue = elem.value;
                const replacedValue = newValue.replace(this.invalidFilter, '');
                if (newValue !== replacedValue) {
                    this.$nextTick(() => {
                        console.log(newValue, replacedValue)
                        this.inputValue = replacedValue
                        this.$emit('input', newValue);
                    })
                }
            },
            onTextBlur() {
                this.$emit('is-valid', this.isValid);
            },
            clear() {
                this.inputValue = '';
            }
        },
        watch: {
            value(newValue) {
                console.log('newValue value', newValue);
                if (this.inputValue !== newValue) {
                    this.inputValue = newValue
                    const replacedValue = newValue.replace(this.invalidFilter, '');
                    if (newValue !== replacedValue) {
                        this.$nextTick(() => {
                            console.log(newValue, replacedValue)
                            this.inputValue = replacedValue
                            // this.$emit('input', newValue);
                        })
                    }
                }
            },
            inputValue(newValue) {
                console.log('newValue inputValue', newValue);
                this.$emit('input', newValue);
            },
            validResult(newValue) {
                this.$emit('update:isValid', newValue);
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .limit-input {
        width: 100%;
        height: 100%;
        // padding-left: 17px;
        // padding-right: 17px;
        // border: 1px solid $line-border;
        // color: $text-normal;
        outline: none;
        -webkit-appearance: none;
    }
</style>
