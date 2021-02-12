<template lang="">
    <h2 class="sub-title">{{ title }}</h2>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
    .sub-title {
        font-weight: 700;
        text-align: center;
        color: #0B6968;
        font-size: 28px;
        margin-top: .74rem; 
    }

    @media screen and ( max-width: 991px ) {
        .sub-title {
            font-size: 25px;
            margin-top: .5rem; 
        }
    }
</style>