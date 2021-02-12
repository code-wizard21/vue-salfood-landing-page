<template>
    <div class="section" ref="section">
        <slot> </slot>
    </div>
</template>

<script>
export default {
    props: ['reverse'],
    mounted() {
        if( this.reverse ) {
            this.$refs.section.style.flexDirection = 'row-reverse';
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './Section';
</style>