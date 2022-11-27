<template>
    <div class="mc-page flex-center">
        <nav-bar></nav-bar>

        <div class="calc-body flex-dir-column">
            <div class="calc-body__expression">
                <div 
                    class="expression__input flex-dir-column-center"
                    @click="fSetFocusOnInput"
                >
                    <textarea name="expr-input" cols="30" rows="1" ref="expr_input"></textarea>
                </div>
            </div>
            <div class="calc-body__actions"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    methods: {
        fSetFocusOnInput() {
            const vInputTextDOM = <HTMLInputElement>this.$refs.expr_input;
            vInputTextDOM && vInputTextDOM.focus(); // если поулчили ссылку на элемент - ставим фокус
        }
    }

})
</script>
<style lang="scss" scoped>
    .calc-body {
        width: 45%;
        height: 60%;
        padding: 15px;
        border-radius: 7px;
        border: 2px solid rgb(0, 61, 102);
        &__expression {
            width: 100%;
        }
    }

    .expression {
        &__input {
            height: 110px;
            border: 1px solid rgb(0, 61, 102);
            cursor: text;
        }
    }

    .expression__input textarea {
        width: 100%;
        resize: none;
        padding: 8px 5px;
        outline: none;
        border: none;
        text-align: right;
    }
</style>