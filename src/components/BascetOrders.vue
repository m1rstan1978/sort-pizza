<template>
  <div class="orders">
    <div class="orders__header">
        <div class="orders__bascet">
            <div class="orders__icon">
                <img src="../assets/icons/bascetBlack.svg">
            </div>
            <p class="ordser__text">Корзина</p>
        </div>
        <div class="orders__clear" @click="clearOrders">
            <div class="ordsers__image">
                <img src="../assets/icons/trash.svg">
            </div>
            <p class="orders__clear_trash">Очистить корзину</p>
        </div>
    </div>
    <div class="orders__list">
        <bascet-item
        v-for="order in $store.getters.getListOrders"
        :key="order.id"
        :order="order"
        ></bascet-item>
    </div>
    <div class="orders__final">
        <div class="orders__all">
            <p class="orders__pizzas">Всего пицц: <span class="orders__quality">{{ $store.state.listOrders.length }} шт.</span></p>
            <p class="orders__money">Сумма заказа: <span class="orders__summ"> {{ $store.state.ordersMoney }} ₽</span></p>
        </div>
        <div class="orders__buttons">
            <div>
                <button class="orders__back" @click="$router.push('/')">Вернуться назад</button>
            </div>
            <div>
                <button class="orders__pay">Оплатить сейчас</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BascetItem from './BascetItem.vue'
export default {
   methods:{
        clearOrders() {
           this.$store.commit('clearAll')
        }
   },
  components: { BascetItem },

}
</script>

<style scoped>
.orders {
    min-width: 827px;
    margin-top: 94px;
}
.orders__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 1px solid #F4F4F4;
}
.orders__bascet {
    display: flex;
    align-items: center;
}
.orders__icon img {
    display: flex;
    align-items: center;
}
.ordser__text {
    font-weight: 700;
    font-size: 32px;
    margin-left: 17px;
    color: #000000;
}
.orders__clear {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.ordsers__image img {
    display: flex;
    align-items: center;
    margin-right: 8px;
}
.orders__clear_trash {
    font-weight: 400;
    font-size: 16px;
    color: #B6B6B6;
}
.orders__list {
    height: 440px;
    overflow: auto;
}
.orders__all {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}
.orders__pizzas {
    font-weight: 400;
    font-size: 22px;
    color: #000000;
}
.orders__quality {
    font-weight: 600;
}
.orders__money {
    font-weight: 400;
    font-size: 22px;
    color: #000000;
}
.orders__summ {
    font-weight: 600;
    color: #FE5F1E;
}
.orders__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}
.orders__back {
    background: none;
    border: 1px solid #D3D3D3;
    border-radius: 30px;
    padding: 16px 26px;
    font-weight: 400;
    font-size: 16px;
    color: #CACACA;
    transition: all 0.3s ease;
    cursor: pointer;
}
.orders__back:hover {
    transform: scale(0.98);
}
.orders__pay {
    background: #FE5F1E;
    border-radius: 30px;
    border:none;
    padding: 16px 26px;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
}
</style>