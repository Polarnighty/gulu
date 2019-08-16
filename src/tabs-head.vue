<template>
    <div class="tabs-head">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabs-head",
        inject:['eventBus'],
        created() {
            this.$emit('update:selected','抛出的数据')
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height:40px;

    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
    }
</style>