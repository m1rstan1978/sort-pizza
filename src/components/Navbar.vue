<template>
  <header>
    <div class="header__content">
        <div class="header__logo">
            <div class="header__img" @click="$router.push('/')">
                <img src="../assets/logo/logo.png">
            </div>
            <div class="header__text">
                <p class="header__title">BEST / PIZZA</p>
                <p class="header__desc">самая вкусная пицца во вселенной</p>
            </div>
        </div>
        <div class="header__button" v-if="bascetNavbar === false">
            <button class="header__btn" @click="$router.push( '/bascet' )">
                <p class="header__price">{{ $store.state.ordersMoney }} ₽</p>
                <div class="header__icon"><img src="@/assets/icons/line.svg"></div>
                <div class="header__bascet">
                    <div class="header__image">
                        <img src="@/assets/icons/bascet.svg">
                        <p class="header__quantity"> {{ $store.state.orders }} </p>
                    </div>
                </div>
            </button>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    props:{
        bascetNavbar:{
            type:Boolean,
        }
    },
}
</script>

<style scoped>
header {
    width: 100%;
    border-bottom: 2px solid #F6F6F6;
}
.header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 49px 39px 39px 77px;
}
.header__logo {
    display: flex;
    align-items: center;
}
.header__img {
    cursor: pointer;
}
.header__text {
    margin-left: 17px;
}
.header__title {
    font-weight: 600;
    font-size: 24px;
    color: #181818;
}
.header__desc {
    font-weight: 400;
    font-size: 16px;
    color: #7B7B7B;
}
.header__btn {
    display: flex;
    align-items: center;
    border-radius: 30px;
    outline: none;
    border:none;
    background: #FE5F1E;
    padding: 15px 23px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.header__btn:hover {
    transform: scale(0.98);
}
.header__price {
    font-weight: 500;
    font-size: 16px;
    margin-right: 10px;
    color: #FFFFFF;
}
.header__bascet {
    margin-left: 10px;
}
.header__image {
    display: flex;
    align-items: center;
}
.header__quantity {
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    margin-left:8px;
}
</style>