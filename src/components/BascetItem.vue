<template>
    <div class="order">
        <div class="order__content">
            <div class="order__about">
                <div class="order__image">
                    <img :src="order.img">
                </div>
                <div class="order__info">
                    <p class="order__title">{{ order.name }}</p>
                    <p class="order__des">{{ order.sloi }} тесто, {{ order.dlina }} см.</p>
                </div>
            </div>
            <div class="order__add">
                <div class="order__sign" @click="removeOrder">
                    <img src="../assets/icons/minus.svg">
                </div>
                <p class="order__quantity">{{ order.count }}</p>
                <div class="order__sign" @click="addOrderToList">
                    <img src="../assets/icons/add.svg">
                </div>
            </div>
            <p class="order__summ">{{ order.summ }} ₽</p>
            <div class="order__delete" @click="deleteOrder">
                <img src="../assets/icons/delete.svg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        order:{}
    },
    methods:{
        addOrderToList() {
            this.$store.commit('addOrder', this.order)
        },
        removeOrder() {
            this.$store.commit( 'removeOrder', this.order )
        },
        deleteOrder() {
            this.$store.commit('deleteOrder', this.order)
        }
    }
}
</script>

<style scoped>
.order {
    border-bottom: 1px solid #F4F4F4;
}
.order__content {
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.order__about {
    display: flex;
    align-items: center;
}
.order__image img {
    max-width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.order__info {
    margin-left: 15px;
    min-width: 300px;
}
.order__title {
    font-weight: 600;
    font-size: 22px;
    color: #000000;
}
.order__des {
    font-weight: 400;
    font-size: 18px;
    margin-top: 3px;
    color: #8D8D8D;
}
.order__add {
    display: flex;
    align-items: center;
}
.order__sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border:1px solid #FE5F1E;
    transition: all 0.3s ease;
    cursor: pointer;
}
.order__sign:hover {
    transform: scale(0.98);
}
.order__quantity {
    margin: 0 13px;
    font-weight: 600;
    font-size: 22px;
    color: #000000;
}
.order__summ {
    font-weight: 600;
    font-size: 22px;
    color: #000000;
}
.order__delete img {
    transition: all 0.3s ease;
    cursor: pointer;
}
.order__delete img:hover {
    transform: scale(0.98);
}
</style>