<template>
    <div class="section-wrapper" :style="{background: backgroundColor}">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .section-wrapper {
        padding: 5rem 6rem;
    }

    @media screen and ( max-width: 991px ) {
        .section-wrapper {
            padding: 3rem 1.5rem;
        }
    }
</style>

<script>
export default {
    props: ['backgroundColor'],
}
</script>