<template>
    <div class="desc-sub-title-wrapper">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<style lang="scss">
    .desc-sub-title-wrapper {
        margin: 0 auto;
        width: 50%;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 3.3rem;

        p {
            text-align: center;
            color: #0B6968;
            font-size: 16px;
        }
    }

    @media screen and ( max-width: 991px ) {
        .desc-sub-title-wrapper {
            width: 85%;
            margin-top: .8rem;
            margin-bottom: 2.25rem;

            p {
                font-size: 14px;
                line-height: 21px;
            }
        }
    }
</style>