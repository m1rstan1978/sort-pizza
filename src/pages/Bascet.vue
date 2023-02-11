<template>
  <div class="bascet">
    <div class="bascet__content">
        <navbar
        :bascetNavbar="bascetNavbar"
        ></navbar>
        <div class="bascet__empty" v-if="$store.state.listOrders.length === 0">
            <empty-bascet></empty-bascet>
        </div>
        <div class="bascet__menu" v-else>
            <bascet-orders></bascet-orders>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import EmptyBascet from '@/components/EmptyBascet.vue'
import BascetOrders from '@/components/BascetOrders'
export default {
    data() {
        return {
            bascetNavbar:true,
        }
    },
    components: { Navbar, EmptyBascet, BascetOrders }
}
</script>

<style scoped>
.bascet {
    height: 100vh;
    background: #FFDF8C;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bascet__content {
    min-width: 1440px;
    height: 900px;
    background: #fff;
    border-radius: 10px;
    margin: 50px 0 50px 0;
}
.bascet__empty {
    display: flex;
    align-items: center;
    justify-content: center;
}
.bascet__menu {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>