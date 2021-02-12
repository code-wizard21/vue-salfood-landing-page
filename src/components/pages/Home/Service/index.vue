<template>
    <MixinWrapper :backgroundColor="'#FFFAF7'" id="service">
        <LineSubTitle />
        <SubTitle :title="'Our Service'" />
        <DescSubTitle>
            Nostrud consequat amet enim sit veniam ullamco nostrud qui ex irure cupidatat quis ea non.
        </DescSubTitle>
        <div class="service-wrapper">
            <div class="left-side">
                <Section :reverse="false">
                    <IconService :icon="'brunch_dining'" />
                    <TextService :title="'Advance table booking'" :reverse="false" />
                </Section>
                <Section :reverse="true">
                    <IconService :icon="'restaurant'" />
                    <TextService :title="'Food for free'" :reverse="true" />
                </Section>
            </div>
            <div class="right-side">
                <IconServiceWithText />
            </div>
        </div>
    </MixinWrapper>
</template>

<script>
import LineSubTitle from '@/components/mixin/LineSubTitle';
import SubTitle from '@/components/mixin/SubTitle';
import DescSubTitle from '@/components/mixin/DescSubTitle';
import MixinWrapper from '@/components/mixin/MixinWrapper';
import IconServiceWithText from '@/components/pages/Home/Service/partials/IconServiceWithText';
import TextService from '@/components/pages/Home/Service/partials/TextService';
import IconService from '@/components/pages/Home/Service/partials/IconService';
import Section from '@/components/pages/Home/Service/partials/Section';

export default {
    components: {
        LineSubTitle,
        SubTitle,
        DescSubTitle,
        MixinWrapper,
        IconServiceWithText,
        TextService,
        IconService,
        Section
    }
}
</script>

<style lang="scss" scoped>
    @import './index';
</style>