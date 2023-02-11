<template>
  <div class="empty">
    <div class="empty__title">
        <p class="empty__text">Корзина пустая</p>
        <div class="empty__smile">
            <img src="../assets/icons/smile.png">
        </div>
    </div>
    <p class="empty__desc">Вероятней всего, вы не заказывали ещё пиццу.<br>
    Для того, чтобы заказать пиццу, перейди на главную<br> страницу.</p>
    <div class="empty__img">
        <img src="../assets/icons/empty.svg">
    </div>
    <div class="empty__btn">
        <button class="empty__button" @click="$router.push('/')">Вернуться назад</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.empty {
    margin-top: 100px;
}
.empty__title {
    display: flex;
    align-items: center;
    justify-content: center;
}
.empty__text {
    font-weight: 700;
    font-size: 32px;
    color: #000000;
}
.empty__smile img {
    display: flex;
    align-items: center;
    margin-left: 14px;
}
.empty__desc {
    text-align: center;
    margin-top: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #777777;
}
.empty__img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 21px;
}
.empty__btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
.empty__button {
    background: #282828;
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
    padding: 13px 26px;
    margin-top: 74px;
    color: #FFFFFF;
    border:none;
    transition: all 0.3s ease;
    cursor: pointer;
}
.empty__button:hover {
    transform: scale(0.98);
}
</style>