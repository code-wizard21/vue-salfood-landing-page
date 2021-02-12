<template>
    <div class="food">
        <div class="food-image" ref="foodImage" :style="{backgroundImage: `url(${food.foodImage})`}"></div>
        <div class="food-description">
            <div class="name-and-price">
                <h3>{{ food.foodName }}</h3>
                <h4>${{ food.price }}</h4>
            </div>
            <p class="description">{{ food.desc }}</p>
            <button>
                Buy Now 
                <font-awesome-icon icon="arrow-right" class="icon" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['food'],
    mounted() {
        const foodImage = this.$refs.foodImage;
        foodImage.style.height = (foodImage.clientWidth - 55) + 'px';
    }
}
</script>

<style lang="scss" scoped>
    @import './Food';
</style>