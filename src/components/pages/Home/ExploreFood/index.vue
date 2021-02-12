<template>
    <MixinWrapper :backgroundColor="'#FFF'" id="menu">
        <LineSubTitle />
        <SubTitle :title="'Explore Our Food'" />
        <DescSubTitle>
            Nostrud consequat amet enim sit veniam ullamco nostrud qui ex irure cupidatat quis ea non.
        </DescSubTitle>
        <div class="explore-food-wrapper">
            <template v-for="(food, index) of foods">
                <Food :food="food" :key="index" />
            </template>
        </div>
        <div class="more-button">
            <button>More</button>
        </div>
    </MixinWrapper>
</template>

<script>
import axios from 'axios';
import MixinWrapper from '@/components/mixin/MixinWrapper';
import LineSubTitle from '@/components/mixin/LineSubTitle';
import SubTitle from '@/components/mixin/SubTitle';
import DescSubTitle from '@/components/mixin/DescSubTitle';
import Food from '@/components/pages/Home/ExploreFood/partials/Food';

export default {
    data: function() {
        return {
            foods: [],
        }
    },
    components: {
        MixinWrapper,
        LineSubTitle,
        SubTitle,
        DescSubTitle,
        Food
    },
    created() {
        axios.get('/data/explore-food.json').then((res) => {
            this.foods = res.data;
        }).catch((err) => {
            throw new Error(err);
        });
    }
}
</script>

<style lang="scss" scoped>
    @import './index';
</style>