<template>
    <div class="text-service" ref="text-service">
        <div class="title" ref="title">
            <span class="material-icons">{{ iconArrow }}</span>
            <h2>{{ title }}</h2>
        </div>
        <p>Enim adipisicing dolore voluptate nostrud amet enim consequat id consectetur in commodo cillum.</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'TextService',
    props: ['reverse', 'title'],
    data: function() {
        return {
            iconArrow: '',
        }
    },
    mounted() {
        this.iconArrow = this.reverse ? 'east' : 'west';
        if( this.reverse ) {
            const textService = this.$refs['text-service'];
            const title       = this.$refs['title'];

            textService.style.textAlign = 'left';
            title.style.flexDirection   = 'row-reverse'; 
            textService.querySelector('hr').style.marginLeft = '0';
            textService.querySelector('hr').style.marginRight = 'auto';
        }
    }
}
</script>

<style lang="scss">
    @import './TextService';
</style>