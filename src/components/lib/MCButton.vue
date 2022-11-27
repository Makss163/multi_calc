<template>
    <button :class="['btn-mc', ...className]">
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'mc-button',

    props: {
        className: {
            type: Array as PropType<Array<string>>,
            default: () => [],
        }
    }
})
</script>
<style lang="scss">
    .btn-mc {
        border: 1px solid rgb(0, 61, 102);
        border-radius: 3px;
        color: rgb(0, 61, 102);
        background-color: rgba(0, 61, 102, 0);
        transition: all .2s linear;
        cursor: pointer;
        &:hover {
            color: #FFFFFF;
            background-color: rgb(0, 61, 102);
        }
    }
    
    .btn-mc-fill {
        color: #FFFFFF;
        background-color: rgb(0, 61, 102);
        &:hover {
            color: rgb(0, 61, 102);
            background-color: rgba(0, 61, 102, 0);
        }
    }

    .btn-mc-s {
        padding: 3px;
        font-size: 12px;
        font-weight: 400;
    }

    .btn-mc-m {
        padding: 5px;
        font-size: 14px;
        font-weight: 600;
    }

    .btn-mc-xl {
        padding: 7px;
        font-size: 16px;
        font-weight: 900;
        border: 2px solid rgb(0, 61, 102);
    }
</style>