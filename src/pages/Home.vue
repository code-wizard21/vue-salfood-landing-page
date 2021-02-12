<template>
    <div id="home-page">
        <Hero />
        <PopularFood ref="sectiono" />
        <ExploreFood ref="sectiono" />
        <Service ref="sectiono" />
        <Testimonial />
        <ContactUs ref="sectiono" />
    </div>
</template>

<script>
import Hero from '@/components/pages/Home/Hero';
import PopularFood from '@/components/pages/Home/PopularFood';
import ExploreFood from '@/components/pages/Home/ExploreFood';
import Service from '@/components/pages/Home/Service';
import Testimonial from '@/components/pages/Home/Testimonial';
import ContactUs from '@/components/pages/Home/ContactUs';

export default {
    name: 'Home',
    components: {
        Hero,
        PopularFood,
        ExploreFood,
        Service,
        Testimonial,
        ContactUs,
    },
}
</script>