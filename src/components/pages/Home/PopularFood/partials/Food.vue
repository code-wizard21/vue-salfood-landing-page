<template>
    <div class="food" ref="food" :style="{ backgroundImage: `url(${food.foodImage})` }">
        <div class="food-desc">
            <h2>{{ food.foodName }}</h2>
            <p>{{ food.desc }}</p>
            <button>
                Buy Now 
                <font-awesome-icon icon="arrow-right" class="icon" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props : ['food'],
    mounted() {
        const foodElement = this.$refs.food;
        foodElement.style.height = (foodElement.clientWidth + 55) + 'px';
    }
}
</script>

<style lang="scss" scoped>
    @import './Food';
</style>