<template>
    <div class="nav-bar-wrapper flex-center">
        <div class="nav-bar flex-center-between">
            <div class="nav-bar__left">
                <button
                    @click="fRelocationMain"
                    class="btn-mc btn-mc-m btn-mc-fill"
                >
                    Главная
                </button>
            </div>
    
            <div class="nav-bar__right flex-center-between">
                <button
                    @click="fRelocationClassic"
                    class="btn-mc btn-mc-m"
                >
                    Классический калькулятор
                </button>
        
                <button
                    @click="fRelocationEnigeneering"
                    class="btn-mc btn-mc-m"
                >
                    Инженерный калькулятор
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MultiCalcI } from '@/interface/MultiCalcI';

export default defineComponent({

    name: 'nav-bar',

    methods: {
        fRelocationMain() {
            this.$router.push(MultiCalcI.PagePath.main);
        },
        fRelocationClassic() {
            this.$router.push(MultiCalcI.PagePath.classic);
        },
        fRelocationEnigeneering() {
            this.$router.push(MultiCalcI.PagePath.engineering);
        }
    }
})
</script>

<style lang="scss" scoped>
.nav-bar {
    width: 80%;
    &__right {
        gap: 10px;
    }
}
</style>
