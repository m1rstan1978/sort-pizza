<template>
  <div class="item">
    <div class="item__image">
        <img class="item__img" :src="pizzasArr.img">
    </div>
    <p class="item__title">{{ pizzasArr.name }}</p>
    <div class="item__menu">
        <div class="item__content">
            <div class="item__sloi">
                <p class="item__about"
                v-for="( sloi, idx) in sloiList"
                :key="sloi.name"
                @click="activeSloi = idx"
                :class="{ activeButton : activeSloi === idx }"
                >{{ sloi.name }}</p>
            </div>
            <div class="item__sm">
                <p class="item__text"
                v-for="(listSm, idx) in smList"
                :key="listSm.sm"
                @click="activeSm = idx"
                :class="{ activeButton : activeSm === idx }"
                >{{ listSm.sm }} см.</p>
            </div>
        </div>
    </div>
    <div class="item__price">
        <p class="item__money">от {{ pizzasArr.price }} ₽</p>
        <div class="item__btn">
            <button class="item__add" 
            @click="addToOrderList">
                <img class="item__icon" src="../assets/icons/add.svg">
                Добавить
                <p class="item__num">{{ addNum }}</p>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        pizzasArr:{}
    },
    data() {
        return {
            arraySloi: this.pizzasArr.sloi,
            arraySm: this.pizzasArr.dlina,
            activeSloi:1,
            activeSm:0,
            addNum:0,
        }
    },
    computed:{
        sloiList() {
            const array = this.arraySloi.map(el => ({ 'name': el.name }))
            return array   
        },
        smList() {
            const array = this.arraySm.map(el => ({ 'sm': el.sm }))
            return array   
        }
    },
    methods:{
        addToOrderList() {
            if (this.addNum < 10) {
                this.addNum += 1
                const newObj = JSON.parse(JSON.stringify(this.pizzasArr))
                newObj.dlina = newObj.dlina[this.activeSm].sm
                newObj.sloi = newObj.sloi[this.activeSloi].name
                this.$store.commit('addListOrders', newObj)
            }       
        }
    }
}
</script>

<style scoped>
.item {
    margin:20px 10px
}
.item__image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.item__title {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    margin-top: 11px;
    color: #000000;
}
.item__menu {
    background: #F3F3F3;
    border-radius: 10px;
    margin-top: 22px;
}
.item__content {
    padding: 7px 5px;
}
.item__sloi {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.item__about {
    font-weight: 700;
    font-size: 14px;
    padding: 8px 12px;
    text-align: center;
    color: #2C2C2C;
    margin: 0 5px;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.item__about:hover {
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}
.item__sm {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 10px;
}
.item__text {
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #2C2C2C;
    padding: 8px 5px;
    border-radius: 5px;
    margin:0 5px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.item__text:hover {
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}
.activeButton {
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}
.item__price {
    margin-top: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.item__money {
    font-weight: 700;
    font-size: 22px;
    color: #000000;
}
.item__add {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #EB5A1E;
    border-radius: 30px;
    padding: 9px 14px;
    font-weight: 600;
    font-size: 14px;
    color: #EB5A1E;
    transition: all 0.3s ease;
    cursor: pointer;
}
.item__add:hover {
    transform: scale(0.98);
}
.item__icon {
    margin-right: 5px;
}
.item__num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-left:5px;
    background: #EB5A1E;
    border-radius: 100%;
    color:white;
}
</style>