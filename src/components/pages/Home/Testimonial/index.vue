<template>
    <MixinWrapper :backgroundColor="'#FFF'">
        <LineSubTitle />
        <SubTitle :title="'What Customer Say'" />
        <div class="testimonials-wrapper">
            <template v-for="(testimonial, index) of testimonials">
                <Testimonial :testimonial="testimonial" :key="index" />
            </template>
        </div>
    </MixinWrapper>
</template>

<script>
import axios from 'axios';
import MixinWrapper from '@/components/mixin/MixinWrapper';
import LineSubTitle from '@/components/mixin/LineSubTitle';
import SubTitle from '@/components/mixin/SubTitle';
import Testimonial from '@/components/pages/Home/Testimonial/partials/Testimonial';

export default {
    data: function() {
        return {
            testimonials: [],
        }
    },
    components: {
        MixinWrapper,
        LineSubTitle,
        SubTitle,
        Testimonial
    },
    created() {
        axios.get('/data/testimonials.json')
            .then((res) => {
                this.testimonials = res.data;
            })
            .catch((err) => {
                throw new Error(err);
            })
    }
}
</script>

<style lang="scss" scoped>
    @import './index';
</style>