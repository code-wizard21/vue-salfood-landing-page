<template>
    <div class="testimonial">
        <div class="profile">
            <div class="photo">
                <img :src="testimonial.photo" alt="photo">
            </div>
            <div class="profile-text">
                <h3>{{ testimonial.name }}</h3>
                <h4>{{ testimonial.job }}</h4>
            </div>
        </div>
        <div class="message">
            <p>{{ testimonial.testimonial }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['testimonial'],
}
</script>

<style lang="scss" scoped>
    @import './Testimonial';
</style>