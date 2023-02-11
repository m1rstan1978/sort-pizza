<template>
    <button class="type" @click="setActiveButton">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:{
        idx: {
            type:Number,
        }
    },
    data() {
        return {
            index:null,
        }
    },
    methods:{
        setActiveButton() {
            this.$emit( 'active', this.idx )
        }
    }
}
</script>

<style scoped>
.type {
    margin: 0 40px 0 0;
    background: #F9F9F9;
    border-radius: 30px;
    padding: 13px 25px;
    border: none;
    font-size: 16px;
    color: #2C2C2C;
    transition: all 0.3s ease;
    cursor: pointer;
}

.type:hover {
    transform: scale(0.99);
}
</style>