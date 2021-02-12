<template>
    <MixinWrapper :backgroundColor="'#FFFAF7'">
        <LineSubTitle />
        <SubTitle :title="'Populer Food'" />
        <DescSubTitle>
            Nostrud consequat amet enim sit veniam ullamco nostrud qui ex irure cupidatat quis ea non.
        </DescSubTitle>
        <div class="food-wrapper">
            <template v-for="(food, index) of foods">
                <Food :food="food" :key="index" />
            </template>
        </div>
    </MixinWrapper>
</template>

<script>
import axios from 'axios';
import LineSubTitle from '@/components/mixin/LineSubTitle';
import SubTitle from '@/components/mixin/SubTitle';
import DescSubTitle from '@/components/mixin/DescSubTitle';
import MixinWrapper from '@/components/mixin/MixinWrapper';
import Food from '@/components/pages/Home/PopularFood/partials/Food';

export default {
    data: function() {
        return {
            foods: [],
        }
    },
    components: {
        LineSubTitle,
        SubTitle,
        DescSubTitle,
        MixinWrapper,
        Food
    },
    created() {
        axios.get('/data/popular-food.json')
            .then((res) => {
                this.foods = res.data;
            })
            .catch(err => {
                throw new Error(err)
            });
    }
}
</script>

<style lang="scss">
    @import './index';
</style>