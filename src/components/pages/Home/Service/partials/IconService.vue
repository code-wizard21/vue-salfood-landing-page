<template>
    <div class="icon-service">
        <span class="material-icons">
            {{ icon }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'IconService',
    props: ['icon'],
}
</script>

<style lang="scss" scoped>
    @import './IconService';
</style>