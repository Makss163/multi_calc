<template>
    <div class="nav-bar-wrapper flex-center">
        <div class="nav-bar flex-center-between">
            <div class="nav-bar__left">
                <mc-button
                    @click="fRelocationMain"
                    :className="['btn-mc-m', 'btn-mc-fill']"
                >
                    Главная
                </mc-button>
            </div>
    
            <div class="nav-bar__right flex-center-between">
                <mc-button
                    @click="fRelocationClassic"
                    :className="['btn-mc-m']"
                >
                    Классический калькулятор
                </mc-button>
        
                <mc-button
                    @click="fRelocationEnigeneering"
                    :className="['btn-mc-m']"
                >
                    Инженерный калькулятор
                </mc-button>
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
            this.$router.push(MultiCalcI.Routes.main);
        },
        fRelocationClassic() {
            this.$router.push(MultiCalcI.Routes.classic);
        },
        fRelocationEnigeneering() {
            this.$router.push(MultiCalcI.Routes.engineering);
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
